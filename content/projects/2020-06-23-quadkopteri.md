---
title: Quadkopteri
description: Joskus 2017 vuoden loppupuolella keksin, että quadkopterilla
  lentäminen voisi olla kivaa. Eikä siis millään lelulla, vaan oikeasti
  tehokkaalla ns. FPV-quadkopterilla, jossa on kamera, joka lähettää livekuvaa.
  Enkä tietenkään voinut vain ostaa kopteria, vaan päätin rakentaa sellaisen
  itse. Siis suunnittelin, että 3D-tulostaisin rungon ja ohjelmoisin itse
  quadcopterin aivot, ns. Flight Controllerin. Ja yllättävää kyllä, sain tehtyä
  kopterin, joka oli ihan lentokelpoinen. (Tosin myöhemmin päädyin silti
  ostamaan hiilikuiturungon ja paremman Flight Controllerin, jota en ohjelmoinut
  itse, mutta siitä lisää myöhemmin.)
singlePageContent: >-
  Typeränä ihmisenä en ottanut toimivasta 3D-tulostetusta kopterista varmaan
  yhtään kuvaa. (Silloin en ollut vielä somenuori, eikä minulla ollut
  Snapchattia, joten en ottanut kuvia kaikesta mahdollisesta.) Tallella on
  kuitenkin tekemäni 3D-mallit, joten niiden avulla voin suurinpiirtein näyttää,
  millainen kopteri oli. Se oli siis kooltaan melko pieni, moottorin
  keskipisteestä vastakkaisessa kulmassa olevan moottorin keskipisteeseen noin
  150 mm. Propellit olivat kolmen tuumaa halkaisijaltaan. Olen pihi, joten
  suurin osa osista oli halvimpia mitä sain Hobbykingistä, ja kai ajattelin
  säästäväni siinäkin, että tulostan itse rungon ja käytän koneen aivoina taas
  kerran Arduinosta tuttua Atmega328P-mikrokontrolleria, jonka ohjelmoin itse.


  Hommasin siis quadkopteriin vaadittavat osat ja rupesin kasaamaan niistä toimivaa kokonaisuutta. Välttämättömiä elektroniikkaosia ei edes ole kauhean paljon: Flight Controller (tässä tapauksessa Atmega328P), 4xESC (Electric Speed Controller, tarvitaan jotta voidaan ohjata harjattomia moottoreita), radiovastaanotin ja gyroskooppi. Gyroskooppina käytin MPU6050-moduulia, jossa on myös kiihtyvyysanturi. Gyroskooppi mittaa kopterin pyörimistä kolmessa suunnassa, mutta se kertoo vain pyörimisnopeuden, eikä siis kopterin absoluuttista asentoa. Tämä kuitenkin riittää, jos suunnittelee käyttävänsä kopteria ns. [Acro-modella](https://ardupilot.org/copter/docs/acro-mode.html), jossa kopterin asento pysyy samana, jos ohjaussauvoihin ei koske. Kiihtyvyysanturin avulla voi mitata kopterin absoluuttisen asennon painovoiman aiheuttaman alaspäin suuntautuvan voiman avulla. Yritinkin toteuttaa myös ns. Self-level-moden, jossa kopteri tasapainoittaisi itsensä, jos irroittaa ohjaussauvoista. En kuitenkaan muistaakseni onnistunut tässä. Jotenkin moottoreiden aiheuttama tärinä teki kiihtyvyysmittarin lukemasta liian epävakaan ja en saanut asioita toimimaan. Acro-mode kuitenkin riitti minulle, koska kaikissa Youtube-videoissa joita katsoin, ihmiset lensivät Acro-modella ja tekivät hienoja temppuja koptereillaan.


  Välttämättömien osien lisäksi ostin kopteriini myös piippaavaan summerin, jotta se voisi kertoa minulle piippausten avulla hyödyllistä tietoa. Lisäksi ostin bluetooth-moduulin, jotta pystyin helposti ja langattomasti muuttamaan quadkopterin lentoon vaikuttavia parametrejä.


  Itse ohjelmoinnista: En lähtenyt ihan tyhjästä tekemään ohjelmistoa kopteriini. Suurena apuna oli Joop Brokkingin tekemät [Youtube-videot](https://www.youtube.com/playlist?list=PL0K4VDicBzsibZqfa42DVxC8CGCMB7G2G), joissa hän rakentaa hyvin vastaavan laitteen. En kopionut koodia häneltä, mutta hänen videonsa auttoivat ymmärtämään mitä tarvitaan toimivaan kopteriin, ja miten nämä ominaisuudet voisi toteuttaa. Pakko sanoa että tästä koodista olen ehkä vähän ylpeä. Ihan vain sen takia että kopteri lensi (ei täydellisesti, mutta se lensi). Lisäksi tein myös koodista sellaisen, että sitä voi itse konfiguroida ja muuttaa asioita helposti config.h tiedoston avulla. Inspiraationa tähän oli varmasti 3D-tulostimeni käyttämän Marlin-ohjelmiston vastaava config-tiedosto. 


  Kopterin ja koodin toimintaperiaate: Gyroskoopista saadaan tieto siitä, mikä on kopterin pyörimisnopeus x-, y-, ja z-akselien ympäri. Radiovastaanottimesta saadaan tieto siitä, mitä näiden arvojen haluttaisiin olevan. Sitten lasketaan hiukan matikkaa ja Flight Controller puhuu neljän ESC:n kanssa, jotka sitten säätävät moottorien nopeutta. "Hiukan matikkaa" tarkoittaa tässä tapauksessa [PID-säädintä](https://www.youtube.com/watch?v=JBvnB0279-Q). Linkki vie Joop Brokkingin videoon, jonka avulla taisin itse ymmärtää PID-säätimen käsitteen tarpeeksi hyvin, jotta pystyin ohjelmoimaan sellaisen. (Varmasti katsoin myös muita videoita ja luin tutoriaaleja.)


  Bluetoothin kautta pystyi säätämään PID-säätimen käyttämiä P-, I-, ja D-kertoimia eri akseleille ja myös muitakin koneen parametrejä. Näitä pystyi sitten myös tallentamaan mikrokontrollerin EEPROM-muistiin. 


  Quadkopterin softan kirjoittaminen voi olla potentiaalisesti myös vaarallista hommaa: propellit pyörivät aika nopeasti, ja jos kopteri karkaa käsitä huonon softan takia, huonolla tuurilla voit aiheuttaa pahaakin vahinkoa itsellesi tai muille. Tottakai koitin tehdä softasta mahdollisimman turvallisen ja siinä on joitakin turvaominaisuuksia esim. sitä varten, jos kopteri menettää yhteyden radiolähettimeen. Kehitysvaiheessa minulle tuli vain yksi vaaratilanne: Jossain vaiheessa moottorit menivät yhtäkkiä lähes täysille, ja tietenkin minulla oli tällöin myös propellit kiinni kopterissa. Olin silloin huoneessani ja onnekseni kopteri lensi hyllyni alle, ja hetken kuluttua moottorit rauhoittuivat. Jos kopteri olisi lentäny esim. naamaani, jälki ei välttämättä olisi ollut kaunista. (Propellit ovat yllättävän teräviä ja pyörivät vinhaa vauhtia.) En nyt ihan tarkkaan muista mikä aiheutti ongelman, mutta muistaakseni se liittyi radiovastaanottimesta tulevan signaalin lukemiseen. Pienen ohjelmointivirheen takia muistaakseni jokin muuttuja sai hyvin erikoisen arvon välillä ja lähes satunnaisesti. Sain onneksi paikattua ongelman.


  (välitallennus )


  \-tiesin paljon FPV-jutuista


  \-meni moti kun homma toimi


  \-suht ylpeä softasta


  \-vain yksi vaaratilanne


  \-bluetooth, eeprom, pid


  \-joop brokking
order: 3
---
