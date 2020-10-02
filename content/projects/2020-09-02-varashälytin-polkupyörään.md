---
title: Varashälytin polkupyörään
description: Ei kovin yllättäen sain idean tähänkin projektiin
  [Youtube-videosta](https://www.youtube.com/watch?v=CeStrH-5Llo). Toteutukseni
  oli kuitenkin hyvin erilainen kuin videolla, koska videolla käytetty SMS/GPS
  -moduuli oli aivan liian kallis. (noin 50€) Löysin itse netistä vastaavan noin
  10 eurolla ja aloin kehittää omaa versiotani pyörähälyttimestä.
HTMLdescription: Rakentamani polkupyörähälytin lähettää tekstiviestin, mikäli
  pyöräni liikkuu silloin, kun sen ei pitäisi liikkua. Rakentamisessa oli ylä-
  ja alamäkiä, mutta lopulta sain kasaan toimivan laitteen.
singlePageContent: >-
  <img id=bike-alarm style="float: right" src="/img/bike-alarm-small.jpg"
  width="500px" alt="Varashälytin kiinnitettynä polkupyörän satulan
  alla">Liiketunnistimena käytin MPU6050 gyroskooppia/kiihtyvyysmittaria, ja
  siitä nimenomaan kiihtyvyysmittariominaisuutta, toisin kuin videolla, jossa
  käytettiin piezo-kristallia. MPU6050-sensoria ohjataan I2C-protokollalla
  Atmega328p mikrokontrollerilla. Sensoria saa käytettyä siten, että se tekee
  mittauksia muutaman kerran sekunnissa ja nukkuu lopun ajan. (Kuluttaa hyvin
  vähän virtaa.) Kun sensori on tehnyt mittauksen, yksi sen ulostulopineistä
  muuttaa tilaansa nollasta voltista 3.3 volttiin, mikä herättää syvässä
  (vähävirtaisessa) unessa olleen Atmega328p mikrokontrollerin, joka sitten
  kysyy sensorilta mittaustuloksen ja tallentaa sen. Sitten kaikki laitteet
  menevät taas onnellisina nukkumaan, ellei mikrokontrolleri totea, että
  kiihtyvyysanturin mittauksessa on jotain poikkeavaa. (Siis kiihtyvyys on
  suurempi kuin sen pitäisi olla, eli laitetta todennäköisesti liikutetaan.) Jos
  poikkeavia mittauksia tulee useita lyhyen ajan sisään, kirjoittamani ohjelma
  toteaa, että nyt pyörä on varastettu. Tällöin se herättää SMS-moduulin, joka
  lähettää tekstiviestin, jossa kerrotaan pyörän sijainti ja se, että pyörää
  varastetaan.


  Suhteeni alkuperäisen SMS/GPS-moduulin kanssa oli aina melko huono. Toisin sanottuna joko minä en osannut käyttää sitä hyvin, tai sitten se oli huono. Sen toimivuus oli nimittäin aina melko epävarmaa. Moduulin kanssa jutellaan AT-komennoin tietyllä "baud-ratella" UART-kommunikaatiolla. A sanassa UART tulee sanasta "asynchronous", mikä tässä tapauksessa tarkoittaa, että ei ole erikseen tahdistussignaalia, joka kertoisi kommunikoiville laitteille millä nopeudella niiden kuuluisi jutella toisilleen. Tämä aiheutti minulle hieman harmaita hiuksia johtuen aikaisemmasta päätöksestäni. Olin siis päättänyt käyttää Atmega328p:tä ilman ulkoista 16 Mhz kristallia. Sen sijaan käytin mikrokontrollerin sisäistä 8 Mhz oskillaattoria. Syitä tähän oli ensinnäkin se, että halusin kokeilla mikrokontrolleria ilman ulkoista kristallia ja myös se, että mikrokontrollerin tiedoissa muistaakseni luki, että sitä ei kannattaisi käyttää kovin matalalla jännitteellä, jos käyttötaajuus on 16 Mhz. Kytkin mikrokontrollerin suoraan LiPo-akkuun, jonka jännite voi tippua melko alas. Tästä olisi siis ehkä mahdollisesti voinut aiheutua ongelmia. Lisäksi halusin laitteesta mahdollisimman pienen, joten halusin jättää kaiken ylimääräisen pois. Siispä päätin käyttää Atmegan sisäistä oskillaattoria. (Jälkeenpäin ajateltuna tästä aiheutui paljon enemmän päänvaivaa kuin siitä että olisin vain kolvannut 16 Mhz kristallioskillaattorin kiinni mikrokontrolleriin ja kokeillut toimiiko se luotettavasti LiPo-akun jännitteillä.)


  Tosiaan mikrokontrollerin sisäinen oskillaattori ei ollutkaan kauhean tarkka. Toki tiesin tämän mikrokontrollerin datasheetin perusteella, mutta ajattelin että se olisi tarpeeksi tarkka. No, kommunikointi SMS-moduulin kanssa oli aina melko epävarmaa, ja tämä on varmaan osasyy siihen. SMS-moduulissa oli sellainen ominaisuus, että kun se käynnistyy, se tunnistaa automaagisesti millä baud ratella sille puhutaan. Tämän pitäisi kai olla hyvin yksinkertainen toimenpide: 1) Käynnistä moduuli. 2) Lähetä "AT", johon moduuli vastaa "OK".


  Minun osaltani toimenpide oli kuitenkin: 1) Käynnistä moduuli. 2) Odota jokin tietty aika, joka on selvinnyt monien testauksien kautta. Jos odotat liian kauan, mikään ei toimi. Jos odotat liian vähän aikaa, mikään ei toimi. 3) Spämmää moduulille "AT", kunnes se toivottavasti vastaa "OK". Ja tosiaan aivan liian pitkään en jostain syystä epäillyt omaa viritelmääni, vaan luulin, että Kiinasta tilaamani moduuli oli vain huono.


  <div class=imgWithCaption style="float: left; width: 500px;"><img id=bike-alarm-old-module src="/img/bike-alarm-old-module-small.jpg" alt="Vanha SMS/GPS-moduuli"><p class=caption>Vanha SMS/GPS-moduuli </p></div>Oikeastaan en vieläkään ole 100% varma johtuivatko ongelmani minusta vai moduulista. Muistaakseni minulla nimittäin oli moduulin kanssa ongelmia myös silloin, kun testailin sitä sellaisen laitteen kanssa, jonka oskillaattori oli tarkka. Tämän takia en myöskään koskaan tarkistanut, voisiko ongelmani johtua minusta, vaan oletin aina, että 10€ Kiina-moduulissa on vain vähän tällaisia ominaisuuksia, jotka minun on kestettävä. Näin jälkeenpäin ajateltuna toimin aika tyhmästi. Olisin vain voinut laittaa mikrokontrolleriin tarkan 16 Mhz kristallioskillaattorin ja testata, jatkuvatko ongelmat.


  Aloin siis tekemään tätä projektia noin pari vuotta sitten. Sain sen myös suurin piirtein toimivaksi, ja kiinnitin sen pyörääni, jossa se myös oli kiinni ainakin vuoden. Jossain vaiheessa se kuitenkin lakkasi toimimasta. Tässä vaiheessa minulla meni hermot ja tilasin uuden SMS-moduulin. Tässä vaiheessa elettiin vuoden 2020 kevättä. Tällä kertaa tilasin moduulin, joka oli vielä halvempi, mutta siinä ei ollut GPS-ominaisuutta, vaan ajattelin saavani sijainnin tarpeeksi tarkasti matkapuhelinsignaalin avulla. Alkuperäisen moduulin GPS-signaalin toimivuus oli myös välillä vähän epävarma, eikä se esim. sisätiloissa usein löytänyt signaalia. Uusi moduuli saapui, ja se vaikutti lähes täydelliseltä. Testatessani laitetta työpöydälläni se vastasi AT-komentooni heti OK. (Sain tästä paljon mielihyvää tapeltuani useita tunteja vanhan moduulin kanssa.) Sijaintitiennon saaminen osoittautui vaikeammaksi kuin oletin. Onneksi moduulilla pystyy käyttämään myös nettiä, koska minun piti lopulta käyttää Googlen Geolocation API:a, jonne moduuli lähettää tiedot lähellä olevista matkapuhelintorneista, ja Google sitten kertoo moduulin sijainnin. Valitettavasti vaikka kuinka yritin, tällä tavalla paikannuksen tarkkuus jää melko heikoksi. Sijainti on ollut pahimmillaan noin 500 metriä pielessä. Ajattelin että se on kuitenkin parempi kuin ei mitään. Lisäksi tilasin myös uuden GPS-moduulin, jonka ehkä joskus jaksan laittaa kiinni hälyttimeen.


  Uusi moduulini toimi siis täydellisesti työpöydälläni. Sitten kiinnitin sen pyörähälyttimeen ja YLLÄTYS, mikään ei toimi enää. :)


  Vasta tässä vaiheessa tajusin, että edellisenkin moduulin epävarmuus ei välttämättä johtunutkaan itse moduulista, vaan minun virheistäni. En kuitenkaan enää kiinnittänyt vanhaa moduulia sensoriin johtuen muutamasta eri syystä: a) En jaksanut uudestaan kovalla vaivalla kolvata toista moduulia irti ja laittaa toisen moduulin kiinni. b) Olin tapellut vanhan moduulin kanssa niin paljon, että saatuani sen irti tungin sen lipaston pohjalle enkä halua nähdä sitä enää koskaan.


  <img id=bike-alarm-inside style="float: left" src="/img/bike-alarm-inside-small.jpg" width="500px" alt="Hälyttimen elektroniikkaa. Atmega328p, SMS-moduuli ja sen antenni, MOSFET, akku ja johtoja.">Sitten rupesin korjaamaan virheitäni. Laitoin mikrokontrolleriin 16 Mhz kristallioskillaattorin. Tämän lisäksi jossain vaiheessa vaihdoin myös transistorin, jolla kytkin SMS-moduulin päälle ja pois, koska epäilin, että jännite tippuu sen yli liikaa. (Itse asiassa en enää täysin varmasti muista vaihdoinko transistorin ennen vai sen jälkeen kun vaihdoin moduulin, mutta joka tapauksessa tein vaihdon.) Alun perin kytkin moduulin päälle ja pois 2N2907 PNP-transistorilla. PNP-transistorin avulla ns. "[High side switching](https://www.baldengineer.com/low-side-vs-high-side-transistor-switch.html)" oli mahdollista. Kuitenkin jossain vaiheessa aloin epäilemään, että moduulini saattaa joskus hetkellisesti vaatia paljonkin virtaa, ja tällöin valitsemani transistori ei ollut riittävän vahva. Tämäkin olisi voinut mahdollisesti olla syynä laitteen epävarmaan toimintaan. Minulla ei kuitenkaan ollut parempaa PNP-transistoria tai muuta vastaavaa transistoria. Päädyin sitten lopulta käyttämään N-kanavan MOSFET:tia. Tämä ei ole optimaalinen ratkaisu, koska tällöin SMS-moduulin ja mikrokontrollerin maa-potentiaali voi olla hieman eri. Lisäksi tällöin moduuliin on koko ajan kytketty positiivinen jännite. Tästä ei kuitenkaan mielestäni toivottavasti pitäisi aiheutua ongelmaa, koska varmistin, että virtaa ei mitenkään pääse kulkemaan moduuliin kytkettyjen UART-dataliitäntöjen kautta maahan, kun moduulissa ei ole virtaa. Siis, kun mikrokontrolleri kytkee moduulin virran pois, se myös vaihtaa molemmat moduulin ja mikrokontrollerin väliset datapinit sisääntulopineiksi, jolloin niiden läpi ei pitäisi kulkea virtaa.


  Tällä tavalla sain uuden moduulin toimimaan, ja siis sain pyörähälyttimeni taas kuntoon. Hälyttimen akkukestoon olen aika tyytyväinen. Hälyttimessä on siis pieni noin 300 mAh LiPo-akku, jota jouduin lataamaan noin muutaman kuukauden välein, kun pyöräni seisoi joka arkipäivä koulun edessä useita tunteja. Hälytin osaa muuten mitata akun jännitteen käyttämällä yhtä Atmega328p:n analogisista pineistä. Mikrokontrollerin voi ohjelmoida tekemään analogiset mittaukset suhteessa sen sisäiseen käyttöjännitteestä riippumattomaan vakiojännitteeseen, jolloin onnistuu käyttöjännitteen (akun) mittaaminen. Hälytin ilmoittaa jännitteen pienen ledin avulla aina, kun se laitetaan päälle ja lisäksi tekstiviestillä, kun se hälyttää.


  Moduulin vaihdon yhteydessä jouduin muokkaamaan koodia jonkin verran, jotta sain sen toimimaan. Loppujen lopuksi koodi on järkyttävä tilkkutäkki, jossa on vähän vanhaa ja hiukan uutta. Siitä on varmasti melko vaikea saada mitään selvää. Se kuitenkin toimii, mikä on pääasia minulle. Vähän kyllä (jälleen kerran) nolottaa julkaista tuollaista koodia, mutta en edelleenkään rupea korjaamaan koodiani enemmän julkaisukelpoiseksi, vaan julkaisen sen sellaisena kuin se on projektini ollessa valmis.


  [Linkki koodiin](https://github.com/jarvnp/bikealarm)
order: 6
---
