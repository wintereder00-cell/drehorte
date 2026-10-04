// ===============================================================
// FILMDATEN
// Neue Filme: einen Eintrag kopieren und anpassen.
// Koordinaten: Rechtsklick auf den Ort in Google Maps -> Zahlen kopieren.
// "color" ist optional – ohne Angabe wird automatisch eine Farbe vergeben.
// ===============================================================
const FILMS = [
 // ---------------- Österreich ----------------
 {title:"The Sound of Music",year:1965,places:[
  {name:"Mirabellgarten, Salzburg",country:"Österreich",lat:47.8059,lon:13.0418,scene:"Maria und die Kinder tanzen beim „Do-Re-Mi“ um den Pegasusbrunnen und die Treppen hinauf."},
  {name:"Schloss Leopoldskron, Salzburg",country:"Österreich",lat:47.7888,lon:13.0410,scene:"Die Seeterrasse diente als Rückseite der Villa von Trapp – hier kentert das Ruderboot."},
  {name:"Pavillon im Schlosspark Hellbrunn",country:"Österreich",lat:47.7630,lon:13.0615,scene:"Der gläserne Pavillon aus „Sixteen Going on Seventeen“ steht heute in Hellbrunn."},
  {name:"Stift Nonnberg, Salzburg",country:"Österreich",lat:47.7960,lon:13.0503,scene:"Das Kloster, in dem Maria Novizin ist."},
  {name:"Felsenreitschule, Salzburg",country:"Österreich",lat:47.7983,lon:13.0420,scene:"Schauplatz des Festivalkonzerts, bei dem die Familie „Edelweiß“ singt."},
  {name:"Basilika St. Michael, Mondsee",country:"Österreich",lat:47.8563,lon:13.3502,scene:"Hier heiraten Maria und Kapitän von Trapp."},
  {name:"Werfen",country:"Österreich",lat:47.4758,lon:13.1910,scene:"Almwiesen um Werfen sind im Hintergrund der Picknick-Szene zu sehen."}
 ]},
 {title:"Der dritte Mann",year:1949,places:[
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2166,lon:16.3958,scene:"Harry Lime hält in der Gondel seine berühmte „Kuckucksuhr“-Rede."},
  {name:"Josefsplatz, Wien",country:"Österreich",lat:48.2066,lon:16.3664,scene:"Schauplatz von Limes vorgetäuschtem Unfalltod vor dem Palais Pallavicini."},
  {name:"Wiener Zentralfriedhof",country:"Österreich",lat:48.1515,lon:16.4407,scene:"Die lange Schlussszene mit der Allee und Annas Gang an Holly vorbei."},
  {name:"Kanalisation beim Karlsplatz, Wien",country:"Österreich",lat:48.2006,lon:16.3700,scene:"Die Verfolgungsjagd im Wiener Kanalnetz – heute als „Dritte Mann Tour“ begehbar."}
 ]},
 {title:"Before Sunrise",year:1995,places:[
  {name:"Zollamtssteg, Wien",country:"Österreich",lat:48.2085,lon:16.3845,scene:"Jesse und Céline treffen die beiden Laienschauspieler auf der Brücke über den Wienfluss."},
  {name:"Kleines Café, Franziskanerplatz",country:"Österreich",lat:48.2063,lon:16.3746,scene:"Die Telefonspiel-Szene, in der sie einander „anrufen“."},
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2168,lon:16.3961,scene:"Der erste Kuss bei Sonnenuntergang in der Gondel."},
  {name:"Friedhof der Namenlosen, Simmering",country:"Österreich",lat:48.1592,lon:16.5085,scene:"Céline erzählt von den unbekannten Toten aus der Donau."}
 ]},
 {title:"James Bond 007: Spectre",year:2015,places:[
  {name:"ice Q, Gaislachkogl, Sölden",country:"Österreich",lat:46.9399,lon:10.9609,scene:"Das Gipfelrestaurant wurde zur „Hoffler Klinik“ von Madeleine Swann."},
  {name:"Obertilliach, Osttirol",country:"Österreich",lat:46.7039,lon:12.6203,scene:"Das verschneite Bergdorf ist Kulisse für Szenen rund um die Klinik."},
  {name:"Altausseer See",country:"Österreich",lat:47.6390,lon:13.7647,scene:"Bond findet Mr. White in dessen abgelegener Hütte am See."}
 ]},
 {title:"James Bond 007: Ein Quantum Trost",year:2008,places:[
  {name:"Seebühne Bregenz",country:"Österreich",lat:47.5063,lon:9.7370,scene:"Die Tosca-Aufführung auf dem Bodensee, bei der Bond die Quantum-Runde belauscht."}
 ]},
 {title:"James Bond 007: Der Hauch des Todes",year:1987,places:[
  {name:"Schloss Schönbrunn, Wien",country:"Österreich",lat:48.1848,lon:16.3122,scene:"Bond und Kara gehen durch den Schlosspark."},
  {name:"Volksoper Wien",country:"Österreich",lat:48.2246,lon:16.3505,scene:"Kara spielt als Cellistin im Orchester."},
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2164,lon:16.3955,scene:"Bond und Kara im Riesenrad – eine Hommage an „Der dritte Mann“."},
  {name:"Weissensee, Kärnten",country:"Österreich",lat:46.7150,lon:13.3200,scene:"Auf dem zugefrorenen See entstanden die Eisszenen der Grenzflucht."}
 ]},
 {title:"Mission: Impossible – Rogue Nation",year:2015,places:[
  {name:"Wiener Staatsoper",country:"Österreich",lat:48.2031,lon:16.3692,scene:"Ethan Hunt verhindert während einer Turandot-Aufführung ein Attentat."}
 ]},
 {title:"Agenten sterben einsam",year:1968,places:[
  {name:"Burg Hohenwerfen",country:"Österreich",lat:47.4833,lon:13.1897,scene:"Die Burg spielt das schwer bewachte „Schloss Adler“."},
  {name:"Feuerkogel-Seilbahn, Ebensee",country:"Österreich",lat:47.8130,lon:13.7250,scene:"Die legendären Kämpfe auf dem Dach der Seilbahngondel."}
 ]},
 {title:"Sissi (Trilogie)",year:1955,places:[
  {name:"Schloss Schönbrunn, Wien",country:"Österreich",lat:48.1846,lon:16.3126,scene:"Kaiserliche Szenen am Wiener Hof."},
  {name:"Kaiservilla, Bad Ischl",country:"Österreich",lat:47.7157,lon:13.6237,scene:"Die Sommerresidenz, in der sich Franz Joseph und Sissi verloben."},
  {name:"Schloss Fuschl, Fuschlsee",country:"Österreich",lat:47.7975,lon:13.2964,scene:"Das Schloss am Fuschlsee diente als Kulisse für Possenhofen."}
 ]},

 // ---------------- Europa ----------------
 {title:"Ein Herz und eine Krone",year:1953,places:[
  {name:"Trevi-Brunnen, Rom",country:"Italien",lat:41.9009,lon:12.4833,scene:"Prinzessin Ann lässt sich in der Nähe des Brunnens die Haare kurz schneiden."},
  {name:"Spanische Treppe, Rom",country:"Italien",lat:41.9060,lon:12.4828,scene:"Ann isst ein Eis auf der Treppe, als Joe sie „zufällig“ wiedertrifft."},
  {name:"Bocca della Verità, Rom",country:"Italien",lat:41.8881,lon:12.4815,scene:"Joe tut so, als hätte der Mund der Wahrheit seine Hand abgebissen."}
 ]},
 {title:"La Dolce Vita",year:1960,places:[
  {name:"Trevi-Brunnen, Rom",country:"Italien",lat:41.9011,lon:12.4831,scene:"Anita Ekberg watet nachts im Abendkleid durch den Brunnen."}
 ]},
 {title:"Die fabelhafte Welt der Amélie",year:2001,places:[
  {name:"Café des Deux Moulins, Paris",country:"Frankreich",lat:48.8848,lon:2.3335,scene:"Das Café in Montmartre, in dem Amélie als Kellnerin arbeitet."},
  {name:"Canal Saint-Martin, Paris",country:"Frankreich",lat:48.8710,lon:2.3650,scene:"Amélie lässt hier Steine über das Wasser hüpfen."},
  {name:"Sacré-Cœur, Montmartre",country:"Frankreich",lat:48.8867,lon:2.3431,scene:"Rund um die Basilika spielt die Schnitzeljagd mit Nino."}
 ]},
 {title:"Before Sunset",year:2004,places:[
  {name:"Shakespeare and Company, Paris",country:"Frankreich",lat:48.8526,lon:2.3471,scene:"Jesse liest aus seinem Buch, als Céline nach neun Jahren auftaucht."}
 ]},
 {title:"The Da Vinci Code – Sakrileg",year:2006,places:[
  {name:"Louvre, Paris",country:"Frankreich",lat:48.8606,lon:2.3376,scene:"Der Mord an Kurator Saunière und das Finale unter der Glaspyramide."},
  {name:"Rosslyn Chapel, Schottland",country:"Vereinigtes Königreich",lat:55.8554,lon:-3.1602,scene:"Langdon und Sophie entschlüsseln hier die letzte Spur."}
 ]},
 {title:"Dunkirk",year:2017,places:[
  {name:"Strand von Dunkerque (Malo-les-Bains)",country:"Frankreich",lat:51.0530,lon:2.4020,scene:"Die Evakuierungsszenen wurden am Originalschauplatz gedreht."}
 ]},
 {title:"Harry Potter (Filmreihe)",year:2001,places:[
  {name:"Glenfinnan-Viadukt, Schottland",country:"Vereinigtes Königreich",lat:56.8763,lon:-5.4318,scene:"Der Hogwarts-Express fährt über das Viadukt."},
  {name:"Alnwick Castle, England",country:"Vereinigtes Königreich",lat:55.4155,lon:-1.7059,scene:"Im Burghof findet Harrys erste Flugstunde statt."},
  {name:"Gloucester Cathedral, England",country:"Vereinigtes Königreich",lat:51.8676,lon:-2.2467,scene:"Der Kreuzgang diente als Gänge von Hogwarts."},
  {name:"Leadenhall Market, London",country:"Vereinigtes Königreich",lat:51.5128,lon:-0.0835,scene:"Die Gegend um den Eingang zum Tropfenden Kessel in „Der Stein der Weisen“."}
 ]},
 {title:"Notting Hill",year:1999,places:[
  {name:"Westbourne Park Road, London",country:"Vereinigtes Königreich",lat:51.5161,lon:-0.2054,scene:"Das Haus mit der blauen Tür, in dem William wohnt."}
 ]},
 {title:"Star Wars: Das Erwachen der Macht / Die letzten Jedi",year:2015,places:[
  {name:"Skellig Michael",country:"Irland",lat:51.7715,lon:-10.5390,scene:"Die Felseninsel ist Luke Skywalkers Zufluchtsort Ahch-To."},
  {name:"Malin Head",country:"Irland",lat:55.3800,lon:-7.3730,scene:"Weitere Küstenszenen von Ahch-To in „Die letzten Jedi“."}
 ]},
 {title:"Braveheart",year:1995,places:[
  {name:"Glen Nevis, Schottland",country:"Vereinigtes Königreich",lat:56.7930,lon:-5.0800,scene:"Die Highland-Landschaften rund um William Wallaces Heimat."},
  {name:"Trim Castle",country:"Irland",lat:53.5547,lon:-6.7908,scene:"Die Burg stellte die Stadt York dar."}
 ]},
 {title:"James Bond 007: Casino Royale",year:2006,places:[
  {name:"Grandhotel Pupp, Karlsbad",country:"Tschechien",lat:50.2195,lon:12.8805,scene:"Das Hotel spielte das „Hotel Splendide“ in Montenegro."},
  {name:"Canal Grande, Venedig",country:"Italien",lat:45.4380,lon:12.3358,scene:"Das Finale mit dem einstürzenden Palazzo."}
 ]},
 {title:"James Bond 007: Keine Zeit zu sterben",year:2021,places:[
  {name:"Matera",country:"Italien",lat:40.6664,lon:16.6043,scene:"Die Verfolgungsjagd mit dem Aston Martin durch die Felsenstadt."}
 ]},
 {title:"Indiana Jones und der letzte Kreuzzug",year:1989,places:[
  {name:"San Barnaba, Venedig",country:"Italien",lat:45.4335,lon:12.3264,scene:"Die Kirche diente als Außenansicht der Bibliothek mit den Katakomben."}
 ]},
 {title:"Call Me by Your Name",year:2017,places:[
  {name:"Crema, Lombardei",country:"Italien",lat:45.3638,lon:9.6847,scene:"Die Kleinstadt, in der Elio und Oliver ihren Sommer verbringen."}
 ]},
 {title:"Amadeus",year:1984,places:[
  {name:"Ständetheater, Prag",country:"Tschechien",lat:50.0862,lon:14.4235,scene:"Hier wurden die Opernszenen gedreht – im Theater, in dem „Don Giovanni“ uraufgeführt wurde."}
 ]},
 {title:"Grand Budapest Hotel",year:2014,places:[
  {name:"Görlitzer Warenhaus, Görlitz",country:"Deutschland",lat:51.1531,lon:14.9876,scene:"Das Jugendstil-Kaufhaus wurde zur Lobby des Hotels."}
 ]},
 {title:"Brügge sehen… und sterben?",year:2008,places:[
  {name:"Belfried, Brügge",country:"Belgien",lat:51.2085,lon:3.2245,scene:"Der Glockenturm ist Schauplatz des dramatischen Finales."}
 ]},
 {title:"Vicky Cristina Barcelona",year:2008,places:[
  {name:"Park Güell, Barcelona",country:"Spanien",lat:41.4145,lon:2.1527,scene:"Vicky und Cristina erkunden Gaudís Park."}
 ]},
 {title:"Mamma Mia!",year:2008,places:[
  {name:"Agios Ioannis Kastri, Skopelos",country:"Griechenland",lat:39.1713,lon:23.6428,scene:"Die Kapelle auf dem Felsen, zu der die Hochzeitsgesellschaft hinaufsteigt."}
 ]},
 {title:"Mission: Impossible – Fallout",year:2018,places:[
  {name:"Preikestolen",country:"Norwegen",lat:58.9864,lon:6.1903,scene:"Die Felskanzel ist Schauplatz des Helikopter-Finales."}
 ]}
];
