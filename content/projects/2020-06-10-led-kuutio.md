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
  tekemisestä on noin 4 vuotta. Inspiraatio tuli Youtubesta. Aiemmin mainitu
  GreatScott oli tehnyt vastaavanlaisia kuutioita, ja hänellä oli myös video
  multipleksaamisesta (englanniksi
  [multiplexing](https://www.youtube.com/watch?v=uQMUPhyoXoE)). GreatScott oli
  kyllä tehnyt isompia kuutioita (jopa 8x8x8) ja ainakin 5x5x5 kuution
  RGB-ledeillä. En kuitenkaan ollut niin kunnianhimoinen, ja päätin että 64
  yksiväristä lediä riittää minulle. Tähän vaikutti varmaan myös se, että
  halusin tehdä projektin käyttämättä erillistä integroitua piiriä (IC, en
  oikeastaan osaa kaikkia termejä kovin hyvin suomeksi, koska olen
  elektroniikkatietämykseni oppinut englanniksi).


  Siispä multipleksaamista lähdin tekemään käyttämällä NPN- ja PNP-transistoreja. (Muistaakseni 2N2222 ja 2N2907. En näitä muistaakseni tähän tarkoitukseen varsinaisesti ostanut. Ostin vain Ebaysta jotain mitä halvalla sai, kun aloitin elektroniikkaharrastukseni.) Valitettavasti minulla ei ole tallella minkäänlaista piirikaaviota projektista. Muistaakseni kuitenkin toteutin multipleksaamisen suurin piirtein niin, että erikseen voidaan jokaisen 4x4x4-kuution kerroksiin kytkeä anodeille +5V PNP-transistorilla. Tähän kuluu siis 4 mikrokontrollerin digitaalista ulostuloa. Jokaisessa kerroksessa on 4x4 = 16 lediä. jatkuu...
---
