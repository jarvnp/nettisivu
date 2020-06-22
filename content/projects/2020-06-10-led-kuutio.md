---
title: LED-kuutio
description: <video class = "ledkuutio" loop muted playsinline controls><source
  src="/img/ledkuutio.webm" type="video/webm"><source src="/img/ledkuutio.mp4"
  type="video/mp4">Selaimesi ei tue videota.</video>Muistaakseni ensimmäisiä
  kunnon projekteja, joita tein. Tehty joskus 2016 vuoden loppupuolella. On
  loppujen lopuksi myös melko monimutkainen härveli. Idean projektiin sain
  Youtubesta, mistä myös suuri osa elektroniikan tietämyksestäni on opittu.
  Erityisesti kanava
  [GreatScott](https://www.youtube.com/user/greatscottlab/featured) on ollut
  tärkeä minulle, ja sieltä idea tähänkin projektiin taisi tulla. Kuva
  LED-kuutiosta on tosiaan myös tässä sivun taustalla.
singlePageContent: >-
  Tästä projektista on aika vaikea kirjoittaa mitään, koska tosiaan sen
  tekemisestä on noin 4 vuotta. Inspiraatio tuli Youtubesta. Aiemmin mainittu
  GreatScott oli tehnyt vastaavanlaisia kuutioita, ja hänellä oli myös video
  multipleksaamisesta (englanniksi
  [multiplexing](https://www.youtube.com/watch?v=uQMUPhyoXoE)). GreatScott oli
  kyllä tehnyt isompia kuutioita (jopa 8x8x8) ja ainakin 5x5x5 kuution
  RGB-ledeillä. En kuitenkaan ollut niin kunnianhimoinen, ja päätin että 4x4x4
  kuution 64 yksiväristä lediä riittää minulle. Tähän vaikutti varmaan myös se,
  että halusin tehdä projektin käyttämättä erillistä integroitua piiriä (IC, en
  oikeastaan osaa kaikkia termejä kovin hyvin suomeksi, koska olen
  elektroniikkatietämykseni oppinut englanniksi). <img id=Led-kuutio-inside1
  style="float: right" src="/img/Led-kuutio-inside1-small.jpg" width="400px">


  Siispä multipleksaamista lähdin tekemään käyttämällä NPN- ja PNP-transistoreja. (Muistaakseni 2N2222 ja 2N2907. En näitä muistaakseni tähän tarkoitukseen varsinaisesti ostanut. Ostin vain Ebaysta jotain mitä halvalla sai, kun aloitin elektroniikkaharrastukseni.) Valitettavasti minulla ei ole tallella minkäänlaista piirikaaviota projektista. Avasin kuution ja tutkin vähän sen sisälmyksiä, ja sen sekä muistini perusteella taisin toteuttaa multipleksaamisen suurin piirtein niin, että erikseen voidaan jokaisen 4x4x4-kuution kerroksiin kytkeä anodeille +5V PNP-transistorilla. <img id=Led-kuutio-inside2 src="/img/Led-kuutio-inside2-small.jpg" width="400px" style="float: left">Tähän kuluu siis 4 mikrokontrollerin digitaalista ulostuloa. Jokaisessa kerroksessa on 4x4 = 16 lediä, ja näitä sitten multipleksataan NPN-transistoreilla riveittäin. Siis jokaista lediä kohti on transistori. Neljällä mikrokontrollerin ulostulolla voidaan kytkeä erikseen jokaisen rivin transistorit päälle. Sitten toisella neljällä ulostulolla jokaista saraketta voidaan hallita. Yhteensä siis koko kuutiossa mikrokontrollerin pinejä tarvitaan 12. Asia on toivottavasti selkeä. Tein nopeasti ja huvin vuoksi myös jonkinlaisen kaavion, joka ehkä selventää asiaa. En siis ihan täysin tarkasti muista teinkö kytkennät juuri kuten kuvassa, mutta ainakin suurin piirtein niin. Jossain välissä kytkennässä on tietenkin myös ledien virtaa rajoittavat resistorit. <img src="/img/Led-kuutio-circuit.png" width="600px" style="float: right">


  Laitteen aivoina käytin Arduinosta tuttua Atmega328P-mikrokontrolleria. Ohjeen siihen, miten laitetta käytetään ilman Arduino-alustaa löysin tietenkin myös GreatScott-kanavalta. Muistan ajatelleeni, miten hyvä tuuri minulla oli, kun sain multipleksauksen tehtyä 12 digitaalisella ulostulolla, koska luulin että Atmega328p:ssä on 12 digitaalista ulostuloa. Joskus myöhemmin minulle selvisi, että analogisia sisääntuloja voi käyttää myös kuten kaikkia muitakin pinejä. LED-kuutiossa käytin 12 ledien vaatiman ulostulon lisäksi nappia, mutta kytkin sen analogiseen sisääntuloon ja luulin että sitä piniä ei voisi käyttää digitaalisena sisääntulona. No, eipä tuo haitannut, homma toimii. Laitteen ohjelmoinnista en muista kyllä oikeastaan mitään, enkä jaksa enää kauheasti perehtyä ohjelman toimintaperiaatteeseen. Ohjelmoin laitteeseen muutaman erilaisen "valoshow'n", joiden välillä voi vaihdella napin avulla. Laite on toiminut ainakin tähän mennessä, vaikka en varmaankaan ole optimoinut muistinkäyttöä tai muutenkaan tehnyt ohjelmaa kovin järkevästi.


  Hauska yksityiskohta vielä: Halusin laitteelle virran micro-usb-liitännästä, jotta kännykän laturia voisi käyttää virtalähteenä. En kuitenkaan silloin omistanut micro-usb-palikkaa, johon olisi saanut kolvattua helposti johtoja. Kotoa löytyi jokin vanha kännykkä, josta revin micro-usb-liitännän irti ja sain jotenkin kolvattua johdot kiinni oikeisiin paikkoihin ja sain sitten virran siitä.


  Myös laitteen kotelon tekeminen oli aikamoinen työmaa. Tein sen autotallista löytyneestä liian paksusta puulevystä. Tämän takia laite on aika painava.
---
