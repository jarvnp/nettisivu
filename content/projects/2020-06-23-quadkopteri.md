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


  Hommasin siis quadkopteriin vaadittavat osat ja rupesin kasaamaan niistä toimivaa kokonaisuutta. Välttämättömiä elektroniikkaosia ei edes ole kauhean paljon: Flight Controller (tässä tapauksessa Atmega328P), 4xESC (Electric Speed Controller, tarvitaan jotta voidaan ohjata harjattomia moottoreita) ja gyroskooppi. Gyroskooppina käytin MPU6050-moduulia, jossa on myös kiihtyvyysanturi. Gyroskooppi mittaa kopterin pyörimistä kolmessa suunnassa, mutta se kertoo vain pyörimisnopeuden, eikä siis kopterin absoluuttista asentoa. Tämä kuitenkin riittää, jos suunnittelee käyttävänsä kopteria ns. [Acro-modella](https://ardupilot.org/copter/docs/acro-mode.html), jossa kopterin asento pysyy samana, jos ohjaussauvoihin ei koske. Kiihtyvyysanturin avulla voi mitata kopterin absoluuttisen asennon painovoiman aiheuttaman alaspäin suuntautuvan voiman avulla. Yritinkin toteuttaa myös ns. Self-level-moden, jossa kopteri tasapainoittaisi itsensä, jos irroittaa ohjaussauvoista. En kuitenkaan muistaakseni onnistunut tässä. Jotenkin moottoreiden aiheuttama tärinä teki kiihtyvyysmittarin lukemasta liian epävakaan ja en saanut asioita toimimaan. Acro-mode kuitenkin riitti minulle, koska kaikissa Youtube-videoissa joita katsoin, ihmiset lensivät Acro-modella ja tekivät hienoja temppuja koptereillaan.


  Välttämättömien osien lisäksi ostin kopteriini myös piippaavaan summerin, jotta se voisi kertoa minulle piippausten avulla hyödyllistä tietoa. Lisäksi ostin bluetooth-moduulin, jotta pystyin helposti ja langattomasti muuttamaan quadkopterin lentoon vaikuttavia parametrejä.


  Itse ohjelmoinnista: En lähtenyt ihan tyhjästä tekemään ohjelmistoa kopteriini. Suurena apuna oli Joop Brokkingin tekemän [Youtube-videot](https://www.youtube.com/playlist?list=PL0K4VDicBzsibZqfa42DVxC8CGCMB7G2G)


  (välitallennus )


  \-tiesin paljon FPV-jutuista


  \-meni moti kun homma toimi


  \-suht ylpeä softasta


  \-vain yksi vaaratilanne


  \-bluetooth, eeprom, pid


  \-joop brokking
order: 3
---
