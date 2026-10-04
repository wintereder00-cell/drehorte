// ===============================================================
// FILMDATEN
// Neuer Film: einen Eintrag kopieren und anpassen.
// Koordinaten: Rechtsklick auf den Ort in Google Maps -> Zahlen kopieren.
// Pflicht: title, year, places (name, country, lat, lon, scene)
// Optional: genre, regie, cast, beschreibung, reihe (z. B. "Star Wars"), color
// ===============================================================
const FILMS = [
 {title:"The Sound of Music", year:1965, genre:"Musical", regie:"Robert Wise", cast:"Julie Andrews, Christopher Plummer",
  beschreibung:"Die junge Novizin Maria wird Kindermädchen bei der Familie des verwitweten Kapitäns von Trapp in Salzburg und bringt mit Musik wieder Leben ins strenge Haus. Als die Nationalsozialisten Österreich annektieren, muss die Familie fliehen.",
  places:[
   {name:"Mirabellgarten, Salzburg", country:"Österreich", lat:47.8059, lon:13.0418,
    scene:"Maria und die Kinder tanzen beim „Do-Re-Mi“ um den Pegasusbrunnen und die Treppen hinauf."},
   {name:"Schloss Leopoldskron, Salzburg", country:"Österreich", lat:47.7888, lon:13.041,
    scene:"Die Seeterrasse diente als Rückseite der Villa von Trapp – hier kentert das Ruderboot."},
   {name:"Pavillon im Schlosspark Hellbrunn", country:"Österreich", lat:47.763, lon:13.0615,
    scene:"Der gläserne Pavillon aus „Sixteen Going on Seventeen“ steht heute in Hellbrunn."},
   {name:"Stift Nonnberg, Salzburg", country:"Österreich", lat:47.796, lon:13.0503,
    scene:"Das Kloster, in dem Maria Novizin ist."},
   {name:"Felsenreitschule, Salzburg", country:"Österreich", lat:47.7983, lon:13.042,
    scene:"Schauplatz des Festivalkonzerts, bei dem die Familie „Edelweiß“ singt."},
   {name:"Basilika St. Michael, Mondsee", country:"Österreich", lat:47.8563, lon:13.3502,
    scene:"Hier heiraten Maria und Kapitän von Trapp."},
   {name:"Werfen", country:"Österreich", lat:47.4758, lon:13.191,
    scene:"Almwiesen um Werfen sind im Hintergrund der Picknick-Szene zu sehen."}
  ]},
 {title:"Der dritte Mann", year:1949, genre:"Film noir", regie:"Carol Reed", cast:"Joseph Cotten, Orson Welles, Alida Valli",
  beschreibung:"Der Schriftsteller Holly Martins kommt ins zerstörte Nachkriegs-Wien, um seinen Freund Harry Lime zu besuchen – und erfährt, dass dieser gerade gestorben sein soll. Seine Nachforschungen führen ihn in die Welt des Schwarzmarkts.",
  places:[
   {name:"Wiener Riesenrad, Prater", country:"Österreich", lat:48.2166, lon:16.3958,
    scene:"Harry Lime hält in der Gondel seine berühmte „Kuckucksuhr“-Rede."},
   {name:"Josefsplatz, Wien", country:"Österreich", lat:48.2066, lon:16.3664,
    scene:"Schauplatz von Limes vorgetäuschtem Unfalltod vor dem Palais Pallavicini."},
   {name:"Wiener Zentralfriedhof", country:"Österreich", lat:48.1515, lon:16.4407,
    scene:"Die lange Schlussszene mit der Allee und Annas Gang an Holly vorbei."},
   {name:"Kanalisation beim Karlsplatz, Wien", country:"Österreich", lat:48.2006, lon:16.37,
    scene:"Die Verfolgungsjagd im Wiener Kanalnetz – heute als „Dritte Mann Tour“ begehbar."}
  ]},
 {title:"Before Sunrise", year:1995, genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
  beschreibung:"Der Amerikaner Jesse und die Französin Céline lernen sich im Zug kennen und steigen spontan gemeinsam in Wien aus. Bis zum Morgen streifen sie durch die Stadt und reden über das Leben und die Liebe.",
  places:[
   {name:"Zollamtssteg, Wien", country:"Österreich", lat:48.2085, lon:16.3845,
    scene:"Jesse und Céline treffen die beiden Laienschauspieler auf der Brücke über den Wienfluss."},
   {name:"Kleines Café, Franziskanerplatz", country:"Österreich", lat:48.2063, lon:16.3746,
    scene:"Die Telefonspiel-Szene, in der sie einander „anrufen“."},
   {name:"Wiener Riesenrad, Prater", country:"Österreich", lat:48.2168, lon:16.3961,
    scene:"Der erste Kuss bei Sonnenuntergang in der Gondel."},
   {name:"Friedhof der Namenlosen, Simmering", country:"Österreich", lat:48.1592, lon:16.5085,
    scene:"Céline erzählt von den unbekannten Toten aus der Donau."}
  ]},
 {title:"James Bond 007: Spectre", year:2015, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Sam Mendes", cast:"Daniel Craig, Léa Seydoux, Christoph Waltz",
  beschreibung:"Eine geheime Botschaft aus der Vergangenheit führt Bond auf die Spur der Verbrecherorganisation Spectre. Dabei stößt er auf eine Verbindung zu seinem eigenen Leben.",
  places:[
   {name:"ice Q, Gaislachkogl, Sölden", country:"Österreich", lat:46.9399, lon:10.9609,
    scene:"Das Gipfelrestaurant wurde zur „Hoffler Klinik“ von Madeleine Swann."},
   {name:"Obertilliach, Osttirol", country:"Österreich", lat:46.7039, lon:12.6203,
    scene:"Das verschneite Bergdorf ist Kulisse für Szenen rund um die Klinik."},
   {name:"Altausseer See", country:"Österreich", lat:47.639, lon:13.7647,
    scene:"Bond findet Mr. White in dessen abgelegener Hütte am See."}
  ]},
 {title:"James Bond 007: Ein Quantum Trost", year:2008, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Marc Forster", cast:"Daniel Craig, Olga Kurylenko, Mathieu Amalric",
  beschreibung:"Bond will den Tod von Vesper Lynd rächen und deckt dabei die Organisation Quantum auf, die hinter einem Geschäftsmann die Wasserversorgung Boliviens an sich reißen will.",
  places:[
   {name:"Seebühne Bregenz", country:"Österreich", lat:47.5063, lon:9.737,
    scene:"Die Tosca-Aufführung auf dem Bodensee, bei der Bond die Quantum-Runde belauscht."},
   {name:"Piazza del Campo, Siena", country:"Italien", lat:43.3184, lon:11.3316,
    scene:"Die Verfolgungsjagd über die Dächer während des Pferderennens Palio."}
  ]},
 {title:"James Bond 007: Der Hauch des Todes", year:1987, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"John Glen", cast:"Timothy Dalton, Maryam d'Abo",
  beschreibung:"Bond soll einem sowjetischen General zur Flucht in den Westen verhelfen und gerät dabei in ein Komplott aus Waffenhandel und Täuschung, das ihn von Bratislava über Wien bis nach Afghanistan führt.",
  places:[
   {name:"Schloss Schönbrunn, Wien", country:"Österreich", lat:48.1848, lon:16.3122,
    scene:"Bond und Kara gehen durch den Schlosspark."},
   {name:"Volksoper Wien", country:"Österreich", lat:48.2246, lon:16.3505,
    scene:"Kara spielt als Cellistin im Orchester."},
   {name:"Wiener Riesenrad, Prater", country:"Österreich", lat:48.2164, lon:16.3955,
    scene:"Bond und Kara im Riesenrad – eine Hommage an „Der dritte Mann“."},
   {name:"Weissensee, Kärnten", country:"Österreich", lat:46.715, lon:13.32,
    scene:"Auf dem zugefrorenen See entstanden die Eisszenen der Grenzflucht."}
  ]},
 {title:"Mission: Impossible – Rogue Nation", year:2015, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Rebecca Ferguson, Simon Pegg",
  beschreibung:"Die IMF wird aufgelöst, doch Ethan Hunt jagt auf eigene Faust das „Syndikat“, eine Untergrundorganisation aus ehemaligen Agenten.",
  places:[
   {name:"Wiener Staatsoper", country:"Österreich", lat:48.2031, lon:16.3692,
    scene:"Ethan Hunt verhindert während einer Turandot-Aufführung ein Attentat."}
  ]},
 {title:"Agenten sterben einsam", year:1968, genre:"Kriegsfilm, Action", regie:"Brian G. Hutton", cast:"Richard Burton, Clint Eastwood",
  beschreibung:"Im Zweiten Weltkrieg soll ein alliiertes Kommando einen gefangenen US-General aus einer scheinbar uneinnehmbaren Bergfestung in den Alpen befreien.",
  places:[
   {name:"Burg Hohenwerfen", country:"Österreich", lat:47.4833, lon:13.1897,
    scene:"Die Burg spielt das schwer bewachte „Schloss Adler“."},
   {name:"Feuerkogel-Seilbahn, Ebensee", country:"Österreich", lat:47.813, lon:13.725,
    scene:"Die legendären Kämpfe auf dem Dach der Seilbahngondel."}
  ]},
 {title:"Sissi (Trilogie)", year:1955, genre:"Historienfilm", regie:"Ernst Marischka", cast:"Romy Schneider, Karlheinz Böhm",
  beschreibung:"Die Trilogie erzählt romantisiert die Geschichte der bayerischen Prinzessin Elisabeth, die sich in Kaiser Franz Joseph verliebt und Kaiserin von Österreich wird.",
  places:[
   {name:"Schloss Schönbrunn, Wien", country:"Österreich", lat:48.1846, lon:16.3126,
    scene:"Kaiserliche Szenen am Wiener Hof."},
   {name:"Kaiservilla, Bad Ischl", country:"Österreich", lat:47.7157, lon:13.6237,
    scene:"Die Sommerresidenz, in der sich Franz Joseph und Sissi verloben."},
   {name:"Schloss Fuschl, Fuschlsee", country:"Österreich", lat:47.7975, lon:13.2964,
    scene:"Das Schloss am Fuschlsee diente als Kulisse für Possenhofen."}
  ]},
 {title:"Ein Herz und eine Krone", year:1953, genre:"Romantische Komödie", regie:"William Wyler", cast:"Audrey Hepburn, Gregory Peck",
  beschreibung:"Eine junge Prinzessin entflieht während eines Staatsbesuchs in Rom ihren Pflichten und verbringt einen Tag mit einem amerikanischen Reporter, der auf eine Exklusivstory hofft.",
  places:[
   {name:"Trevi-Brunnen, Rom", country:"Italien", lat:41.9009, lon:12.4833,
    scene:"Prinzessin Ann lässt sich in der Nähe des Brunnens die Haare kurz schneiden."},
   {name:"Spanische Treppe, Rom", country:"Italien", lat:41.906, lon:12.4828,
    scene:"Ann isst ein Eis auf der Treppe, als Joe sie „zufällig“ wiedertrifft."},
   {name:"Bocca della Verità, Rom", country:"Italien", lat:41.8881, lon:12.4815,
    scene:"Joe tut so, als hätte der Mund der Wahrheit seine Hand abgebissen."}
  ]},
 {title:"La Dolce Vita", year:1960, genre:"Drama", regie:"Federico Fellini", cast:"Marcello Mastroianni, Anita Ekberg",
  beschreibung:"Ein Klatschreporter treibt durch das mondäne Nachtleben Roms und sucht zwischen Partys, Stars und Skandalen nach Sinn und Liebe.",
  places:[
   {name:"Trevi-Brunnen, Rom", country:"Italien", lat:41.9011, lon:12.4831,
    scene:"Anita Ekberg watet nachts im Abendkleid durch den Brunnen."}
  ]},
 {title:"Die fabelhafte Welt der Amélie", year:2001, genre:"Komödie, Romantik", regie:"Jean-Pierre Jeunet", cast:"Audrey Tautou, Mathieu Kassovitz",
  beschreibung:"Die schüchterne Kellnerin Amélie beschließt, heimlich das Leben der Menschen um sie herum zu verbessern – und muss dabei lernen, sich selbst ihr eigenes Glück zu erlauben.",
  places:[
   {name:"Café des Deux Moulins, Paris", country:"Frankreich", lat:48.8848, lon:2.3335,
    scene:"Das Café in Montmartre, in dem Amélie als Kellnerin arbeitet."},
   {name:"Canal Saint-Martin, Paris", country:"Frankreich", lat:48.871, lon:2.365,
    scene:"Amélie lässt hier Steine über das Wasser hüpfen."},
   {name:"Sacré-Cœur, Montmartre", country:"Frankreich", lat:48.8867, lon:2.3431,
    scene:"Rund um die Basilika spielt die Schnitzeljagd mit Nino."}
  ]},
 {title:"Before Sunset", year:2004, genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
  beschreibung:"Neun Jahre nach ihrer Nacht in Wien treffen sich Jesse und Céline in Paris wieder. Bis zu Jesses Abflug bleibt ihnen nur ein Nachmittag.",
  places:[
   {name:"Shakespeare and Company, Paris", country:"Frankreich", lat:48.8526, lon:2.3471,
    scene:"Jesse liest aus seinem Buch, als Céline nach neun Jahren auftaucht."}
  ]},
 {title:"The Da Vinci Code – Sakrileg", year:2006, genre:"Thriller", regie:"Ron Howard", cast:"Tom Hanks, Audrey Tautou, Ian McKellen",
  beschreibung:"Der Symbologe Robert Langdon wird nach einem Mord im Louvre verdächtigt und folgt mit einer Kryptologin einer Spur von Rätseln, die auf ein jahrhundertealtes Geheimnis deuten.",
  places:[
   {name:"Louvre, Paris", country:"Frankreich", lat:48.8606, lon:2.3376,
    scene:"Der Mord an Kurator Saunière und das Finale unter der Glaspyramide."},
   {name:"Rosslyn Chapel, Schottland", country:"Vereinigtes Königreich", lat:55.8554, lon:-3.1602,
    scene:"Langdon und Sophie entschlüsseln hier die letzte Spur."}
  ]},
 {title:"Dunkirk", year:2017, genre:"Kriegsfilm", regie:"Christopher Nolan", cast:"Fionn Whitehead, Tom Hardy, Kenneth Branagh",
  beschreibung:"1940 sind hunderttausende alliierte Soldaten am Strand von Dünkirchen eingeschlossen. Der Film erzählt ihre Rettung zu Land, zu Wasser und in der Luft.",
  places:[
   {name:"Strand von Dunkerque (Malo-les-Bains)", country:"Frankreich", lat:51.053, lon:2.402,
    scene:"Die Evakuierungsszenen wurden am Originalschauplatz gedreht."}
  ]},
 {title:"Harry Potter (Filmreihe)", year:2001, genre:"Fantasy", regie:"Chris Columbus u. a.", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Der Waisenjunge Harry erfährt, dass er ein Zauberer ist, und besucht die Zauberschule Hogwarts, wo er sich dem dunklen Magier Voldemort stellen muss.",
  places:[
   {name:"Glenfinnan-Viadukt, Schottland", country:"Vereinigtes Königreich", lat:56.8763, lon:-5.4318,
    scene:"Der Hogwarts-Express fährt über das Viadukt."},
   {name:"Alnwick Castle, England", country:"Vereinigtes Königreich", lat:55.4155, lon:-1.7059,
    scene:"Im Burghof findet Harrys erste Flugstunde statt."},
   {name:"Gloucester Cathedral, England", country:"Vereinigtes Königreich", lat:51.8676, lon:-2.2467,
    scene:"Der Kreuzgang diente als Gänge von Hogwarts."},
   {name:"Leadenhall Market, London", country:"Vereinigtes Königreich", lat:51.5128, lon:-0.0835,
    scene:"Die Gegend um den Eingang zum Tropfenden Kessel in „Der Stein der Weisen“."}
  ]},
 {title:"Notting Hill", year:1999, genre:"Romantische Komödie", regie:"Roger Michell", cast:"Julia Roberts, Hugh Grant",
  beschreibung:"Ein Londoner Buchhändler verliebt sich in einen weltberühmten Hollywoodstar, der zufällig seinen Laden betritt.",
  places:[
   {name:"Westbourne Park Road, London", country:"Vereinigtes Königreich", lat:51.5161, lon:-0.2054,
    scene:"Das Haus mit der blauen Tür, in dem William wohnt."}
  ]},
 {title:"Braveheart", year:1995, genre:"Historienfilm", regie:"Mel Gibson", cast:"Mel Gibson, Sophie Marceau",
  beschreibung:"Im 13. Jahrhundert führt William Wallace die Schotten in einen Aufstand gegen die englische Herrschaft.",
  places:[
   {name:"Glen Nevis, Schottland", country:"Vereinigtes Königreich", lat:56.793, lon:-5.08,
    scene:"Die Highland-Landschaften rund um William Wallaces Heimat."},
   {name:"Trim Castle", country:"Irland", lat:53.5547, lon:-6.7908,
    scene:"Die Burg stellte die Stadt York dar."}
  ]},
 {title:"James Bond 007: Casino Royale", year:2006, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Martin Campbell", cast:"Daniel Craig, Eva Green, Mads Mikkelsen",
  beschreibung:"Auf seiner ersten Mission als 007 soll Bond den Terror-Finanzier Le Chiffre bei einem Pokerturnier in den Ruin treiben.",
  places:[
   {name:"Grandhotel Pupp, Karlsbad", country:"Tschechien", lat:50.2195, lon:12.8805,
    scene:"Das Hotel spielte das „Hotel Splendide“ in Montenegro."},
   {name:"Canal Grande, Venedig", country:"Italien", lat:45.438, lon:12.3358,
    scene:"Das Finale mit dem einstürzenden Palazzo."},
   {name:"Villa del Balbianello, Comer See", country:"Italien", lat:45.9658, lon:9.2028,
    scene:"Bond erholt sich hier nach der Folter und gesteht Vesper seine Liebe."}
  ]},
 {title:"James Bond 007: Keine Zeit zu sterben", year:2021, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Cary Joji Fukunaga", cast:"Daniel Craig, Léa Seydoux, Rami Malek",
  beschreibung:"Bond hat sich aus dem Dienst zurückgezogen, wird aber zurückgeholt, als eine gefährliche Biowaffe in falsche Hände gerät.",
  places:[
   {name:"Matera", country:"Italien", lat:40.6664, lon:16.6043,
    scene:"Die Verfolgungsjagd mit dem Aston Martin durch die Felsenstadt."},
   {name:"Atlanterhavsveien", country:"Norwegen", lat:63.017, lon:7.355,
    scene:"Die spektakuläre Küstenstraße ist in der Verfolgungsjagd zu sehen."}
  ]},
 {title:"Indiana Jones und der letzte Kreuzzug", year:1989, genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Sean Connery",
  beschreibung:"Indiana Jones sucht seinen verschwundenen Vater, der dem Heiligen Gral auf der Spur war – und liefert sich dabei ein Wettrennen mit den Nazis.",
  places:[
   {name:"San Barnaba, Venedig", country:"Italien", lat:45.4335, lon:12.3264,
    scene:"Die Kirche diente als Außenansicht der Bibliothek mit den Katakomben."},
   {name:"Playa de Mónsul, Almería", country:"Spanien", lat:36.7322, lon:-2.1477,
    scene:"Henry Jones vertreibt mit seinem Regenschirm einen Schwarm Möwen, um ein Flugzeug abzuschießen."}
  ]},
 {title:"Call Me by Your Name", year:2017, genre:"Drama, Romantik", regie:"Luca Guadagnino", cast:"Timothée Chalamet, Armie Hammer",
  beschreibung:"Im Sommer 1983 verliebt sich der 17-jährige Elio in Norditalien in Oliver, einen Doktoranden, der bei seiner Familie zu Gast ist.",
  places:[
   {name:"Crema, Lombardei", country:"Italien", lat:45.3638, lon:9.6847,
    scene:"Die Kleinstadt, in der Elio und Oliver ihren Sommer verbringen."}
  ]},
 {title:"Amadeus", year:1984, genre:"Historienfilm, Drama", regie:"Miloš Forman", cast:"F. Murray Abraham, Tom Hulce",
  beschreibung:"Der Hofkomponist Antonio Salieri erzählt, wie er am Genie des jungen Mozart verzweifelte und ihn aus Neid zu zerstören versuchte.",
  places:[
   {name:"Ständetheater, Prag", country:"Tschechien", lat:50.0862, lon:14.4235,
    scene:"Hier wurden die Opernszenen gedreht – im Theater, in dem „Don Giovanni“ uraufgeführt wurde."},
   {name:"Erzbischöfliches Schloss, Kroměříž", country:"Tschechien", lat:49.299, lon:17.393,
    scene:"Das Schloss stand für Säle des Wiener Hofes."}
  ]},
 {title:"Grand Budapest Hotel", year:2014, genre:"Komödie", regie:"Wes Anderson", cast:"Ralph Fiennes, Tony Revolori",
  beschreibung:"Der legendäre Concierge Gustave H. und sein Lobby-Boy Zero geraten in einen Erbschaftsstreit um ein wertvolles Gemälde.",
  places:[
   {name:"Görlitzer Warenhaus, Görlitz", country:"Deutschland", lat:51.1531, lon:14.9876,
    scene:"Das Jugendstil-Kaufhaus wurde zur Lobby des Hotels."}
  ]},
 {title:"Brügge sehen… und sterben?", year:2008, genre:"Schwarze Komödie", regie:"Martin McDonagh", cast:"Colin Farrell, Brendan Gleeson",
  beschreibung:"Zwei Auftragskiller sollen nach einem missglückten Job in Brügge untertauchen und warten auf neue Befehle ihres Bosses.",
  places:[
   {name:"Belfried, Brügge", country:"Belgien", lat:51.2085, lon:3.2245,
    scene:"Der Glockenturm ist Schauplatz des dramatischen Finales."}
  ]},
 {title:"Vicky Cristina Barcelona", year:2008, genre:"Romantische Komödie", regie:"Woody Allen", cast:"Scarlett Johansson, Javier Bardem, Penélope Cruz",
  beschreibung:"Zwei amerikanische Freundinnen verbringen einen Sommer in Barcelona und verlieben sich beide in denselben Maler.",
  places:[
   {name:"Park Güell, Barcelona", country:"Spanien", lat:41.4145, lon:2.1527,
    scene:"Vicky und Cristina erkunden Gaudís Park."}
  ]},
 {title:"Mamma Mia!", year:2008, genre:"Musical", regie:"Phyllida Lloyd", cast:"Meryl Streep, Amanda Seyfried, Pierce Brosnan",
  beschreibung:"Kurz vor ihrer Hochzeit auf einer griechischen Insel lädt Sophie heimlich drei Männer ein, die ihr Vater sein könnten.",
  places:[
   {name:"Agios Ioannis Kastri, Skopelos", country:"Griechenland", lat:39.1713, lon:23.6428,
    scene:"Die Kapelle auf dem Felsen, zu der die Hochzeitsgesellschaft hinaufsteigt."},
   {name:"Damouchari, Pilion", country:"Griechenland", lat:39.4045, lon:23.1795,
    scene:"In der kleinen Bucht entstanden Szenen rund um Donnas Hotel."}
  ]},
 {title:"Mission: Impossible – Fallout", year:2018, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Henry Cavill, Rebecca Ferguson",
  beschreibung:"Nach einer missglückten Mission muss Ethan Hunt verhindern, dass drei Plutoniumkerne in die Hände von Terroristen gelangen.",
  places:[
   {name:"Preikestolen", country:"Norwegen", lat:58.9864, lon:6.1903,
    scene:"Die Felskanzel ist Schauplatz des Helikopter-Finales."}
  ]},
 {title:"Der Pate", year:1972, reihe:"Der Pate", genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Marlon Brando, Al Pacino, James Caan",
  beschreibung:"Don Vito Corleone führt eine mächtige Mafiafamilie in New York. Nach einem Attentat auf ihn wird sein jüngster Sohn Michael, der nie Teil des Geschäfts sein wollte, Schritt für Schritt zum neuen Paten. Nach einem Mord muss Michael nach Sizilien untertauchen.",
  places:[
   {name:"Bar Vitelli, Savoca", country:"Italien", lat:37.9547, lon:15.3384,
    scene:"Michael hält in der Bar bei Apollonias Vater um ihre Hand an. Die Bar ist bis heute geöffnet."},
   {name:"Chiesa di Santa Lucia, Savoca", country:"Italien", lat:37.9558, lon:15.3393,
    scene:"Die Hochzeit von Michael und Apollonia mit dem Brautzug durch das Dorf."},
   {name:"Castello degli Schiavi, Fiumefreddo di Sicilia", country:"Italien", lat:37.779, lon:15.212,
    scene:"Das Anwesen von Don Tommasino, in dem Michael sich versteckt – hier stirbt Apollonia bei der Autobombe."},
   {name:"Longfellow Avenue, Staten Island", country:"USA", lat:40.6085, lon:-74.1025,
    scene:"Die Villa der Corleones mit der Hochzeitsfeier zu Beginn."}
  ]},
 {title:"Der Pate – Teil II", year:1974, reihe:"Der Pate", genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Al Pacino, Robert De Niro, Robert Duvall",
  beschreibung:"Der Film erzählt parallel zwei Geschichten: den Aufstieg des jungen Vito Corleone vom sizilianischen Waisenkind zum New Yorker Paten und Michaels Kampf, die Macht der Familie in den 1950er-Jahren zu sichern.",
  places:[
   {name:"Forza d'Agrò", country:"Italien", lat:37.9157, lon:15.336,
    scene:"Das Bergdorf spielt Corleone: Hier beginnt die Geschichte des kleinen Vito, dessen Familie ermordet wird."},
   {name:"Pescheria (Salone degli Incanti), Triest", country:"Italien", lat:45.6483, lon:13.7641,
    scene:"Die alte Fischhalle wurde zur Einwanderungsstation Ellis Island, wo der junge Vito in Amerika ankommt."},
   {name:"Castello degli Schiavi, Fiumefreddo di Sicilia", country:"Italien", lat:37.7793, lon:15.2117,
    scene:"Erneut Don Tommasinos Anwesen, als der erwachsene Vito nach Sizilien zurückkehrt."},
   {name:"Fleur du Lac, Lake Tahoe", country:"USA", lat:39.121, lon:-120.169,
    scene:"Michaels Anwesen am See."},
   {name:"East 6th Street, East Village", country:"USA", lat:40.725, lon:-73.984,
    scene:"Das alte Little Italy, in dem der junge Vito aufsteigt."}
  ]},
 {title:"Der Pate – Teil III", year:1990, reihe:"Der Pate", genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Al Pacino, Diane Keaton, Andy García",
  beschreibung:"Der alternde Michael Corleone will seine Familie endlich legal machen und verhandelt mit dem Vatikan – doch die Vergangenheit holt ihn ein.",
  places:[
   {name:"Teatro Massimo, Palermo", country:"Italien", lat:38.1203, lon:13.3571,
    scene:"Das Finale: die Opernaufführung und die tragische Szene auf der Freitreppe."},
   {name:"Forza d'Agrò", country:"Italien", lat:37.916, lon:15.3365,
    scene:"Das Dorf ist wieder Corleone, wohin Michael mit seiner Familie reist."}
  ]},
 {title:"James Bond 007: Skyfall", year:2012, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Sam Mendes", cast:"Daniel Craig, Judi Dench, Javier Bardem",
  beschreibung:"Nach einem Angriff auf den MI6 muss Bond M vor einem ehemaligen Agenten schützen, der sich an ihr rächen will. Die Spur führt zurück zu Bonds Elternhaus in Schottland.",
  places:[
   {name:"National Gallery, London", country:"Vereinigtes Königreich", lat:51.5089, lon:-0.1283,
    scene:"Bond trifft vor einem Turner-Gemälde zum ersten Mal den neuen Q."},
   {name:"Glen Etive, Schottland", country:"Vereinigtes Königreich", lat:56.6181, lon:-5.0336,
    scene:"Bond und M halten mit dem Aston Martin DB5 im menschenleeren Tal."}
  ]},
 {title:"28 Days Later", year:2002, genre:"Horror", regie:"Danny Boyle", cast:"Cillian Murphy, Naomie Harris",
  beschreibung:"Ein Mann erwacht aus dem Koma und findet London menschenleer vor: Ein Virus hat die Bevölkerung in rasende Infizierte verwandelt.",
  places:[
   {name:"Westminster Bridge, London", country:"Vereinigtes Königreich", lat:51.5007, lon:-0.1219,
    scene:"Jim irrt allein über die völlig leere Brücke – im Morgengrauen bei kurzer Sperrung gedreht."}
  ]},
 {title:"Liebe braucht keine Ferien", year:2006, genre:"Romantische Komödie", regie:"Nancy Meyers", cast:"Cameron Diaz, Kate Winslet, Jude Law, Jack Black",
  beschreibung:"Zwei Frauen mit Liebeskummer tauschen über Weihnachten ihre Häuser – eine zieht von Los Angeles in ein englisches Dorf, die andere umgekehrt.",
  places:[
   {name:"Shere, Surrey", country:"Vereinigtes Königreich", lat:51.2193, lon:-0.4648,
    scene:"Das malerische Dorf, in dem Iris' Cottage steht."}
  ]},
 {title:"Bridget Jones – Schokolade zum Frühstück", year:2001, genre:"Romantische Komödie", regie:"Sharon Maguire", cast:"Renée Zellweger, Hugh Grant, Colin Firth",
  beschreibung:"Die chaotische Londonerin Bridget beginnt ein Tagebuch und steht zwischen ihrem charmanten Chef und dem steifen Anwalt Mark Darcy.",
  places:[
   {name:"Borough Market, London", country:"Vereinigtes Königreich", lat:51.5055, lon:-0.091,
    scene:"Bridgets Wohnung liegt über dem Pub „The Globe“ am Markt."}
  ]},
 {title:"Die Ritter der Kokosnuss", year:1975, genre:"Komödie", regie:"Terry Gilliam, Terry Jones", cast:"Graham Chapman, John Cleese, Eric Idle",
  beschreibung:"König Artus und seine Ritter suchen den Heiligen Gral – mit Kokosnüssen statt Pferden und jeder Menge absurdem Humor.",
  places:[
   {name:"Doune Castle, Schottland", country:"Vereinigtes Königreich", lat:56.1853, lon:-4.0503,
    scene:"Die Burg dient gleich als mehrere Schauplätze, darunter das Schloss der spottenden Franzosen."}
  ]},
 {title:"Highlander – Es kann nur einen geben", year:1986, genre:"Fantasy, Action", regie:"Russell Mulcahy", cast:"Christopher Lambert, Sean Connery",
  beschreibung:"Der Schotte Connor MacLeod ist unsterblich und muss über Jahrhunderte gegen andere Unsterbliche kämpfen, bis nur noch einer übrig ist.",
  places:[
   {name:"Eilean Donan Castle, Schottland", country:"Vereinigtes Königreich", lat:57.274, lon:-5.5161,
    scene:"Die Burg ist Heimat des Clans MacLeod im 16. Jahrhundert."}
  ]},
 {title:"Trainspotting", year:1996, genre:"Drama, Komödie", regie:"Danny Boyle", cast:"Ewan McGregor, Robert Carlyle, Jonny Lee Miller",
  beschreibung:"Eine Clique junger Heroinabhängiger in Edinburgh schlägt sich zwischen Rausch, Entzug und kleinen Verbrechen durchs Leben.",
  places:[
   {name:"Princes Street, Edinburgh", country:"Vereinigtes Königreich", lat:55.952, lon:-3.196,
    scene:"Die berühmte Eröffnung: Renton und Spud rennen vor Ladendetektiven davon."}
  ]},
 {title:"Paddington", year:2014, genre:"Familienfilm, Komödie", regie:"Paul King", cast:"Ben Whishaw (Stimme), Hugh Bonneville, Sally Hawkins",
  beschreibung:"Ein höflicher Bär aus Peru kommt nach London und findet bei der Familie Brown ein neues Zuhause.",
  places:[
   {name:"Chalcot Crescent, Primrose Hill", country:"Vereinigtes Königreich", lat:51.5409, lon:-0.155,
    scene:"Das bunte Reihenhaus der Familie Brown in „Windsor Gardens“."}
  ]},
 {title:"Der Soldat James Ryan", year:1998, genre:"Kriegsfilm", regie:"Steven Spielberg", cast:"Tom Hanks, Matt Damon, Tom Sizemore",
  beschreibung:"Nach der Landung in der Normandie soll ein Trupp US-Soldaten den Fallschirmjäger James Ryan finden, dessen drei Brüder gefallen sind.",
  places:[
   {name:"Curracloe Beach, Wexford", country:"Irland", lat:52.388, lon:-6.364,
    scene:"Der irische Strand stellte Omaha Beach in der berühmten Landungssequenz dar."}
  ]},
 {title:"The Banshees of Inisherin", year:2022, genre:"Tragikomödie", regie:"Martin McDonagh", cast:"Colin Farrell, Brendan Gleeson",
  beschreibung:"Auf einer kleinen irischen Insel beendet ein Mann von einem Tag auf den anderen die Freundschaft zu seinem besten Freund – mit dramatischen Folgen.",
  places:[
   {name:"Inishmore, Aran-Inseln", country:"Irland", lat:53.1167, lon:-9.7,
    scene:"Steinmauern und Küstenwege der fiktiven Insel Inisherin."},
   {name:"Achill Island", country:"Irland", lat:53.96, lon:-10,
    scene:"Hier entstanden unter anderem Szenen rund um Pádraics Cottage und den Pub."}
  ]},
 {title:"Inception", year:2010, genre:"Science-Fiction, Thriller", regie:"Christopher Nolan", cast:"Leonardo DiCaprio, Elliot Page, Joseph Gordon-Levitt",
  beschreibung:"Ein Team von Spezialisten dringt in Träume ein, um Ideen zu stehlen – und soll diesmal einem Mann einen Gedanken einpflanzen.",
  places:[
   {name:"Pont de Bir-Hakeim, Paris", country:"Frankreich", lat:48.8556, lon:2.2876,
    scene:"Ariadne erschafft im Traum die Spiegeltür auf der Brücke."},
   {name:"Fortress Mountain, Alberta", country:"Kanada", lat:50.825, lon:-115.2,
    scene:"Die verschneite Bergfestung im dritten Traumlevel."},
   {name:"Medina von Tanger", country:"Marokko", lat:35.785, lon:-5.813,
    scene:"Die Gassen stellten Mombasa dar, wo Cobb vor Verfolgern flieht."}
  ]},
 {title:"Midnight in Paris", year:2011, genre:"Komödie, Fantasy", regie:"Woody Allen", cast:"Owen Wilson, Marion Cotillard, Rachel McAdams",
  beschreibung:"Ein Drehbuchautor wird jede Nacht um Mitternacht ins Paris der 1920er-Jahre versetzt und trifft dort Hemingway, Fitzgerald und Picasso.",
  places:[
   {name:"Saint-Étienne-du-Mont, Paris", country:"Frankreich", lat:48.8463, lon:2.348,
    scene:"Auf diesen Kirchenstufen wartet Gil, bis ihn der Oldtimer um Mitternacht abholt."}
  ]},
 {title:"Die Bourne Identität", year:2002, genre:"Action, Thriller", regie:"Doug Liman", cast:"Matt Damon, Franka Potente",
  beschreibung:"Ein Mann ohne Gedächtnis wird aus dem Mittelmeer gefischt und entdeckt, dass er ein ausgebildeter Killer ist, den nun die CIA jagt.",
  places:[
   {name:"Pont Neuf, Paris", country:"Frankreich", lat:48.8572, lon:2.3412,
    scene:"Bourne lockt den CIA-Chef Conklin zu einem Treffen auf die Brücke."}
  ]},
 {title:"Ronin", year:1998, genre:"Action, Thriller", regie:"John Frankenheimer", cast:"Robert De Niro, Jean Reno",
  beschreibung:"Eine Gruppe von Söldnern soll in Frankreich einen geheimnisvollen Koffer stehlen. Berühmt für seine Autoverfolgungsjagden.",
  places:[
   {name:"Amphitheater, Arles", country:"Frankreich", lat:43.6778, lon:4.6311,
    scene:"Im römischen Amphitheater kommt es zur Übergabe und Schießerei."}
  ]},
 {title:"Über den Dächern von Nizza", year:1955, genre:"Krimi, Romantik", regie:"Alfred Hitchcock", cast:"Cary Grant, Grace Kelly",
  beschreibung:"Ein ehemaliger Juwelendieb an der Côte d'Azur muss beweisen, dass nicht er hinter einer neuen Einbruchsserie steckt.",
  places:[
   {name:"Hotel Carlton, Cannes", country:"Frankreich", lat:43.5513, lon:7.0285,
    scene:"Das Luxushotel, in dem Grace Kelly und ihre Mutter wohnen."}
  ]},
 {title:"Der längste Tag", year:1962, genre:"Kriegsfilm", regie:"Ken Annakin u. a.", cast:"John Wayne, Henry Fonda, Robert Mitchum",
  beschreibung:"Der Film erzählt die Landung der Alliierten in der Normandie am 6. Juni 1944 aus der Sicht beider Seiten.",
  places:[
   {name:"Sainte-Mère-Église, Normandie", country:"Frankreich", lat:49.4085, lon:-1.3163,
    scene:"Der Fallschirmjäger, der am Kirchturm hängen bleibt."}
  ]},
 {title:"Das Boot", year:1981, genre:"Kriegsfilm", regie:"Wolfgang Petersen", cast:"Jürgen Prochnow, Herbert Grönemeyer",
  beschreibung:"Die beklemmende Feindfahrt eines deutschen U-Boots im Zweiten Weltkrieg aus Sicht der jungen Besatzung.",
  places:[
   {name:"U-Boot-Bunker La Pallice, La Rochelle", country:"Frankreich", lat:46.158, lon:-1.2235,
    scene:"Der originale Bunker diente als Stützpunkt, aus dem U 96 ausläuft."}
  ]},
 {title:"Der talentierte Mr. Ripley", year:1999, genre:"Thriller", regie:"Anthony Minghella", cast:"Matt Damon, Jude Law, Gwyneth Paltrow",
  beschreibung:"Der junge Tom Ripley soll einen reichen Erben aus Italien zurückholen – und schlüpft stattdessen immer tiefer in dessen Leben.",
  places:[
   {name:"Ischia Ponte und Castello Aragonese", country:"Italien", lat:40.7316, lon:13.964,
    scene:"Ischia stellte das fiktive Küstendorf Mongibello dar."}
  ]},
 {title:"Der Postmann", year:1994, genre:"Drama", regie:"Michael Radford", cast:"Massimo Troisi, Philippe Noiret",
  beschreibung:"Ein einfacher Fischersohn wird Briefträger für den chilenischen Dichter Pablo Neruda im Exil und entdeckt durch ihn die Poesie.",
  places:[
   {name:"Marina di Corricella, Procida", country:"Italien", lat:40.7616, lon:14.0258,
    scene:"Der bunte Fischerhafen ist Mittelpunkt des Dorflebens."},
   {name:"Pollara, Salina", country:"Italien", lat:38.578, lon:14.802,
    scene:"Hier steht das Haus, in dem Neruda wohnt."}
  ]},
 {title:"Cinema Paradiso", year:1988, genre:"Drama", regie:"Giuseppe Tornatore", cast:"Philippe Noiret, Salvatore Cascio",
  beschreibung:"Ein berühmter Regisseur erinnert sich an seine Kindheit in einem sizilianischen Dorf und an den Filmvorführer, der ihm die Liebe zum Kino schenkte.",
  places:[
   {name:"Palazzo Adriano, Sizilien", country:"Italien", lat:37.681, lon:13.3795,
    scene:"Der Dorfplatz mit dem Kino Paradiso."},
   {name:"Cefalù", country:"Italien", lat:38.037, lon:14.023,
    scene:"Die Freiluft-Vorführung am Hafen."}
  ]},
 {title:"Gladiator", year:2000, genre:"Historienfilm, Action", regie:"Ridley Scott", cast:"Russell Crowe, Joaquin Phoenix",
  beschreibung:"Der römische General Maximus wird verraten, seine Familie ermordet. Als Gladiator kämpft er sich zurück nach Rom, um sich am Kaiser zu rächen.",
  places:[
   {name:"Val d'Orcia bei Pienza", country:"Italien", lat:43.0745, lon:11.665,
    scene:"Die Weizenfelder, durch die Maximus' Hand im Jenseits streift."},
   {name:"Fort Ricasoli, Kalkara", country:"Malta", lat:35.897, lon:14.526,
    scene:"Hier wurde das Kolosseum für die Arenakämpfe nachgebaut."}
  ]},
 {title:"Der englische Patient", year:1996, genre:"Drama, Romantik", regie:"Anthony Minghella", cast:"Ralph Fiennes, Juliette Binoche, Kristin Scott Thomas",
  beschreibung:"Eine Krankenschwester pflegt am Ende des Zweiten Weltkriegs in einem toskanischen Kloster einen schwer verbrannten Mann, dessen Liebesgeschichte sich langsam enthüllt.",
  places:[
   {name:"Kloster Sant'Anna in Camprena", country:"Italien", lat:43.12, lon:11.701,
    scene:"Das verlassene Kloster, in dem Hana den Patienten pflegt."}
  ]},
 {title:"New Moon – Biss zur Mittagsstunde", year:2009, genre:"Fantasy, Romantik", regie:"Chris Weitz", cast:"Kristen Stewart, Robert Pattinson",
  beschreibung:"Bella muss nach Italien reisen, um Edward davon abzuhalten, sich den mächtigen Volturi zu offenbaren.",
  places:[
   {name:"Piazza Grande, Montepulciano", country:"Italien", lat:43.0928, lon:11.7809,
    scene:"Der Platz stellte Volterra dar, wo Bella Edward in letzter Sekunde erreicht."}
  ]},
 {title:"Unter der Sonne der Toskana", year:2003, genre:"Romantik, Komödie", regie:"Audrey Wells", cast:"Diane Lane, Raoul Bova",
  beschreibung:"Eine Schriftstellerin kauft nach ihrer Scheidung spontan eine alte Villa in der Toskana und beginnt ein neues Leben.",
  places:[
   {name:"Cortona", country:"Italien", lat:43.2753, lon:11.9856,
    scene:"Die Bergstadt ist Frances' neue Heimat."}
  ]},
 {title:"Charlie staubt Millionen ab", year:1969, genre:"Gaunerkomödie", regie:"Peter Collinson", cast:"Michael Caine, Noël Coward",
  beschreibung:"Eine britische Gaunerbande will in Turin einen Goldtransport ausrauben und flieht in drei Minis durch die Stadt.",
  places:[
   {name:"Lingotto, Turin", country:"Italien", lat:45.0326, lon:7.665,
    scene:"Die Minis rasen über die Teststrecke auf dem Dach der Fiat-Fabrik."}
  ]},
 {title:"Wenn die Gondeln Trauer tragen", year:1973, genre:"Horror, Thriller", regie:"Nicolas Roeg", cast:"Donald Sutherland, Julie Christie",
  beschreibung:"Ein trauerndes Ehepaar reist nach dem Tod seiner Tochter nach Venedig, wo unheimliche Zeichen sie zu verfolgen scheinen.",
  places:[
   {name:"San Nicolò dei Mendicoli, Venedig", country:"Italien", lat:45.4325, lon:12.3195,
    scene:"John restauriert diese Kirche – Schauplatz eines dramatischen Unfalls."}
  ]},
 {title:"Mission: Impossible – Dead Reckoning", year:2023, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Hayley Atwell, Rebecca Ferguson",
  beschreibung:"Ethan Hunt jagt einen Schlüssel, der Zugang zu einer gefährlichen künstlichen Intelligenz verschafft, die alle Geheimdienste der Welt bedroht.",
  places:[
   {name:"Spanische Treppe, Rom", country:"Italien", lat:41.9058, lon:12.4826,
    scene:"Der kleine gelbe Fiat 500 holpert bei der Verfolgungsjagd die Treppe hinunter."},
   {name:"Dogenpalast, Venedig", country:"Italien", lat:45.4337, lon:12.3404,
    scene:"Die nächtliche Party, auf der Ethan den Schlüssel sucht."}
  ]},
 {title:"Popeye – Der Seemann mit dem harten Schlag", year:1980, genre:"Musical, Komödie", regie:"Robert Altman", cast:"Robin Williams, Shelley Duvall",
  beschreibung:"Der Seemann Popeye kommt in das Hafenstädtchen Sweethaven, sucht seinen Vater und verliebt sich in Olivia.",
  places:[
   {name:"Popeye Village, Anchor Bay", country:"Malta", lat:35.96, lon:14.342,
    scene:"Das extra gebaute Dorf Sweethaven steht noch heute als Freizeitpark."}
  ]},
 {title:"Zwei glorreiche Halunken", year:1966, genre:"Western", regie:"Sergio Leone", cast:"Clint Eastwood, Eli Wallach, Lee Van Cleef",
  beschreibung:"Drei Revolverhelden jagen während des Amerikanischen Bürgerkriegs einen versteckten Goldschatz.",
  places:[
   {name:"Sad Hill, Santo Domingo de Silos", country:"Spanien", lat:41.9, lon:-3.28,
    scene:"Der kreisrunde Friedhof des legendären Showdowns – von Fans wieder freigelegt."}
  ]},
 {title:"Spiel mir das Lied vom Tod", year:1968, genre:"Western", regie:"Sergio Leone", cast:"Henry Fonda, Claudia Cardinale, Charles Bronson",
  beschreibung:"Ein geheimnisvoller Mann mit Mundharmonika rächt sich an einem Killer, der für eine Eisenbahngesellschaft über Leichen geht.",
  places:[
   {name:"Wüste von Tabernas, Almería", country:"Spanien", lat:37.05, lon:-2.39,
    scene:"Die Wüste stand für den Wilden Westen – auch viele andere Western entstanden hier."}
  ]},
 {title:"Lawrence von Arabien", year:1962, genre:"Historienfilm, Abenteuer", regie:"David Lean", cast:"Peter O'Toole, Alec Guinness, Omar Sharif",
  beschreibung:"Der britische Offizier T. E. Lawrence vereint im Ersten Weltkrieg arabische Stämme im Kampf gegen das Osmanische Reich.",
  places:[
   {name:"Plaza de España, Sevilla", country:"Spanien", lat:37.3769, lon:-5.9863,
    scene:"Der Platz stellte das britische Hauptquartier in Kairo dar."}
  ]},
 {title:"James Bond 007: Im Geheimdienst Ihrer Majestät", year:1969, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Peter R. Hunt", cast:"George Lazenby, Diana Rigg, Telly Savalas",
  beschreibung:"Bond spürt Blofeld in einer Klinik hoch in den Schweizer Alpen auf und verliebt sich in die Gräfin Tracy.",
  places:[
   {name:"Praia do Guincho", country:"Portugal", lat:38.73, lon:-9.473,
    scene:"Bond rettet Tracy am Strand in der Eröffnungsszene."},
   {name:"Piz Gloria, Schilthorn", country:"Schweiz", lat:46.5579, lon:7.8353,
    scene:"Das Drehrestaurant auf dem Gipfel war Blofelds Alpenfestung."}
  ]},
 {title:"James Bond 007: Goldfinger", year:1964, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Guy Hamilton", cast:"Sean Connery, Gert Fröbe, Honor Blackman",
  beschreibung:"Bond kommt dem Goldschmuggler Auric Goldfinger auf die Spur, der einen Anschlag auf Fort Knox plant.",
  places:[
   {name:"Furkapass", country:"Schweiz", lat:46.573, lon:8.415,
    scene:"Die Verfolgungsjagd im Aston Martin DB5 über die Passstraße."}
  ]},
 {title:"Tschitti Tschitti Bäng Bäng", year:1968, genre:"Familienfilm, Musical", regie:"Ken Hughes", cast:"Dick Van Dyke, Sally Ann Howes",
  beschreibung:"Ein exzentrischer Erfinder baut ein altes Rennauto um, das fliegen und schwimmen kann, und reist damit ins Königreich Vulgarien.",
  places:[
   {name:"Schloss Neuschwanstein", country:"Deutschland", lat:47.5576, lon:10.7498,
    scene:"Das Märchenschloss wurde zum Schloss des Barons von Vulgarien."}
  ]},
 {title:"Lola rennt", year:1998, genre:"Thriller", regie:"Tom Tykwer", cast:"Franka Potente, Moritz Bleibtreu",
  beschreibung:"Lola hat 20 Minuten, um 100.000 Mark für ihren Freund aufzutreiben – in drei Varianten derselben Geschichte.",
  places:[
   {name:"Oberbaumbrücke, Berlin", country:"Deutschland", lat:52.502, lon:13.4457,
    scene:"Lola sprintet über die Brücke zwischen Kreuzberg und Friedrichshain."}
  ]},
 {title:"Good Bye, Lenin!", year:2003, genre:"Tragikomödie", regie:"Wolfgang Becker", cast:"Daniel Brühl, Katrin Saß",
  beschreibung:"Um seine herzkranke Mutter zu schonen, lässt Alex nach dem Mauerfall in ihrer Wohnung die DDR weiterleben.",
  places:[
   {name:"Karl-Marx-Allee, Berlin", country:"Deutschland", lat:52.5174, lon:13.4333,
    scene:"Die Plattenbau-Gegend rund um die Wohnung der Familie Kerner."}
  ]},
 {title:"Die Bourne Verschwörung", year:2004, genre:"Action, Thriller", regie:"Paul Greengrass", cast:"Matt Damon, Joan Allen",
  beschreibung:"Bourne wird ein Mord in Berlin angehängt und muss nach Europa zurückkehren, um die Wahrheit über seine Vergangenheit herauszufinden.",
  places:[
   {name:"Alexanderplatz, Berlin", country:"Deutschland", lat:52.5219, lon:13.4132,
    scene:"Bourne beobachtet die CIA vom Hochhaus aus und lockt Nicky zum Weltzeituhr-Treffpunkt."}
  ]},
 {title:"Der Himmel über Berlin", year:1987, genre:"Drama, Fantasy", regie:"Wim Wenders", cast:"Bruno Ganz, Solveig Dommartin, Otto Sander",
  beschreibung:"Zwei Engel wachen über das geteilte Berlin. Einer von ihnen verliebt sich in eine Trapezkünstlerin und will Mensch werden.",
  places:[
   {name:"Siegessäule, Berlin", country:"Deutschland", lat:52.5145, lon:13.3501,
    scene:"Der Engel Damiel sitzt auf der Goldelse und blickt auf die Stadt."}
  ]},
 {title:"Schindlers Liste", year:1993, genre:"Drama, Historienfilm", regie:"Steven Spielberg", cast:"Liam Neeson, Ben Kingsley, Ralph Fiennes",
  beschreibung:"Der Unternehmer Oskar Schindler rettet im besetzten Polen über tausend Juden das Leben, indem er sie in seiner Fabrik beschäftigt.",
  places:[
   {name:"Schindlers Fabrik, Krakau", country:"Polen", lat:50.0475, lon:19.9614,
    scene:"Gedreht wurde an der echten Emaillefabrik – heute ein Museum."},
   {name:"Kazimierz, Krakau", country:"Polen", lat:50.0516, lon:19.948,
    scene:"Das alte jüdische Viertel stand für das Krakauer Ghetto."}
  ]},
 {title:"Die Brücke von Arnheim", year:1977, genre:"Kriegsfilm", regie:"Richard Attenborough", cast:"Sean Connery, Michael Caine, Anthony Hopkins",
  beschreibung:"Die Alliierten versuchen 1944 mit einer riesigen Luftlandeoperation, mehrere Rheinbrücken in den Niederlanden zu erobern.",
  places:[
   {name:"Wilhelminabrug, Deventer", country:"Niederlande", lat:52.254, lon:6.149,
    scene:"Die Brücke in Deventer spielte die umkämpfte Brücke von Arnheim."}
  ]},
 {title:"Das Schicksal ist ein mieser Verräter", year:2014, genre:"Drama, Romantik", regie:"Josh Boone", cast:"Shailene Woodley, Ansel Elgort",
  beschreibung:"Zwei krebskranke Jugendliche verlieben sich und reisen nach Amsterdam, um ihren Lieblingsautor zu treffen.",
  places:[
   {name:"Leliegracht, Amsterdam", country:"Niederlande", lat:52.3761, lon:4.884,
    scene:"Die Bank an der Gracht, auf der Hazel und Gus sitzen – heute ein Fan-Treffpunkt."}
  ]},
 {title:"Mamma Mia! Here We Go Again", year:2018, genre:"Musical", regie:"Ol Parker", cast:"Lily James, Amanda Seyfried, Cher",
  beschreibung:"Sophie eröffnet das Hotel ihrer Mutter neu, während der Film parallel erzählt, wie die junge Donna einst auf die Insel kam.",
  places:[
   {name:"Insel Vis", country:"Kroatien", lat:43.061, lon:16.183,
    scene:"Die kroatische Insel stellte diesmal die griechische Insel Kalokairi dar."}
  ]},
 {title:"James Bond 007: In tödlicher Mission", year:1981, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"John Glen", cast:"Roger Moore, Carole Bouquet",
  beschreibung:"Bond soll ein gesunkenes Steuergerät für Atom-U-Boote bergen, bevor es den Sowjets in die Hände fällt.",
  places:[
   {name:"Kloster Agia Triada, Meteora", country:"Griechenland", lat:39.711, lon:21.64,
    scene:"Bond erklimmt die Felswand zum Kloster, dem Versteck des Schurken."},
   {name:"Cortina d'Ampezzo", country:"Italien", lat:46.5405, lon:12.1357,
    scene:"Die Ski- und Bobbahn-Verfolgungsjagd in den Dolomiten."}
  ]},
 {title:"Alexis Sorbas", year:1964, genre:"Drama", regie:"Michael Cacoyannis", cast:"Anthony Quinn, Alan Bates",
  beschreibung:"Ein verklemmter Engländer erbt eine Mine auf Kreta und lernt vom lebenslustigen Griechen Sorbas, das Leben zu genießen.",
  places:[
   {name:"Strand von Stavros, Kreta", country:"Griechenland", lat:35.588, lon:24.165,
    scene:"Hier tanzen Sorbas und Basil den berühmten Sirtaki."}
  ]},
 {title:"James Bond 007: Der Spion, der mich liebte", year:1977, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Lewis Gilbert", cast:"Roger Moore, Barbara Bach, Curd Jürgens",
  beschreibung:"Bond und eine sowjetische Agentin arbeiten zusammen, um einen Reeder zu stoppen, der die Welt mit Atom-U-Booten vernichten will.",
  places:[
   {name:"Hotel Cala di Volpe, Sardinien", country:"Italien", lat:41.087, lon:9.545,
    scene:"Bond und Anya wohnen im Hotel an der Costa Smeralda."}
  ]},
 {title:"Interstellar", year:2014, genre:"Science-Fiction", regie:"Christopher Nolan", cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  beschreibung:"Weil die Erde unbewohnbar wird, reist eine Crew durch ein Wurmloch, um einen neuen Planeten für die Menschheit zu finden.",
  places:[
   {name:"Svínafellsjökull", country:"Island", lat:64.006, lon:-16.88,
    scene:"Der Gletscher wurde zum eisigen Planeten von Dr. Mann."},
   {name:"Farm bei Okotoks, Alberta", country:"Kanada", lat:50.725, lon:-113.975,
    scene:"Für Coopers Farm wurde extra ein Maisfeld angelegt."}
  ]},
 {title:"James Bond 007: Stirb an einem anderen Tag", year:2002, reihe:"James Bond", genre:"Action, Agentenfilm", regie:"Lee Tamahori", cast:"Pierce Brosnan, Halle Berry",
  beschreibung:"Bond wird nach Gefangenschaft in Nordkorea fallen gelassen und jagt auf eigene Faust einen Verräter bis in einen Eispalast in Island.",
  places:[
   {name:"Jökulsárlón", country:"Island", lat:64.0484, lon:-16.1794,
    scene:"Die Autoverfolgungsjagd auf der gefrorenen Gletscherlagune."}
  ]},
 {title:"Star Wars: Episode IV – Eine neue Hoffnung", year:1977, reihe:"Star Wars", genre:"Science-Fiction", regie:"George Lucas", cast:"Mark Hamill, Harrison Ford, Carrie Fisher",
  beschreibung:"Der Farmerjunge Luke Skywalker gerät in den Kampf der Rebellen gegen das Imperium, als er zwei Droiden mit geheimen Plänen des Todessterns findet.",
  places:[
   {name:"Hotel Sidi Driss, Matmata", country:"Tunesien", lat:33.542, lon:9.9668,
    scene:"Das Höhlenhotel war das Innere der Lars-Farm, Lukes Zuhause auf Tatooine."},
   {name:"Chott el Djerid", country:"Tunesien", lat:33.9947, lon:8.43,
    scene:"Auf dem Salzsee steht die Kuppel der Lars-Farm – Luke blickt hier in die zwei Sonnen."},
   {name:"Ajim, Djerba", country:"Tunesien", lat:33.722, lon:10.752,
    scene:"Die weißen Gassen wurden zum Raumhafen Mos Eisley."},
   {name:"Tempel IV, Tikal", country:"Guatemala", lat:17.222, lon:-89.6237,
    scene:"Der Blick über den Dschungel zeigt die Rebellenbasis auf Yavin 4."},
   {name:"Death Valley", country:"USA", lat:36.364, lon:-116.807,
    scene:"Für Nachdrehs wanderte R2-D2 durch die Schluchten des Death Valley."}
  ]},
 {title:"Star Wars: Episode V – Das Imperium schlägt zurück", year:1980, reihe:"Star Wars", genre:"Science-Fiction", regie:"Irvin Kershner", cast:"Mark Hamill, Harrison Ford, Carrie Fisher",
  beschreibung:"Die Rebellen müssen vom Eisplaneten Hoth fliehen, während Luke bei Meister Yoda zum Jedi ausgebildet wird und eine erschütternde Wahrheit erfährt.",
  places:[
   {name:"Finse, Hardangerjøkulen", country:"Norwegen", lat:60.602, lon:7.504,
    scene:"Die Gletscherlandschaft wurde zum Eisplaneten Hoth."}
  ]},
 {title:"Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter", year:1983, reihe:"Star Wars", genre:"Science-Fiction", regie:"Richard Marquand", cast:"Mark Hamill, Harrison Ford, Carrie Fisher",
  beschreibung:"Luke stellt sich Darth Vader und dem Imperator, während die Rebellen auf dem Waldmond Endor den neuen Todesstern angreifen.",
  places:[
   {name:"Redwood-Wälder bei Smith River, Kalifornien", country:"USA", lat:41.796, lon:-124.108,
    scene:"Die Mammutbaumwälder wurden zum Waldmond Endor mit der Speeder-Jagd."},
   {name:"Buttercup Valley, Imperial Sand Dunes", country:"USA", lat:32.727, lon:-114.91,
    scene:"Die Dünen bei Yuma waren Kulisse für die Szene am Sarlacc-Loch."}
  ]},
 {title:"Star Wars: Episode I – Die dunkle Bedrohung", year:1999, reihe:"Star Wars", genre:"Science-Fiction", regie:"George Lucas", cast:"Liam Neeson, Ewan McGregor, Natalie Portman",
  beschreibung:"Zwei Jedi entdecken auf Tatooine den jungen Sklaven Anakin Skywalker, in dem die Macht ungewöhnlich stark ist.",
  places:[
   {name:"Reggia di Caserta", country:"Italien", lat:41.0732, lon:14.3266,
    scene:"Das Königsschloss diente als Palast der Königin von Naboo."},
   {name:"Ksar Ouled Soltane", country:"Tunesien", lat:32.789, lon:10.516,
    scene:"Die Speicherburg stellte die Sklavenquartiere von Mos Espa dar."},
   {name:"Mos-Espa-Kulisse bei Onk Jemel", country:"Tunesien", lat:33.994, lon:7.76,
    scene:"Die Kulisse der Wüstenstadt steht bis heute in der Wüste."}
  ]},
 {title:"Star Wars: Episode II – Angriff der Klonkrieger", year:2002, reihe:"Star Wars", genre:"Science-Fiction", regie:"George Lucas", cast:"Hayden Christensen, Natalie Portman, Ewan McGregor",
  beschreibung:"Anakin soll Senatorin Padmé beschützen und verliebt sich in sie, während Obi-Wan einer geheimen Klonarmee auf die Spur kommt.",
  places:[
   {name:"Villa del Balbianello, Comer See", country:"Italien", lat:45.9655, lon:9.2025,
    scene:"Hier heiraten Anakin und Padmé heimlich."},
   {name:"Plaza de España, Sevilla", country:"Spanien", lat:37.3772, lon:-5.9869,
    scene:"Die Kolonnaden wurden zur Stadt Theed auf Naboo."},
   {name:"Reggia di Caserta", country:"Italien", lat:41.0735, lon:14.327,
    scene:"Erneut der Palast von Naboo."}
  ]},
 {title:"Star Wars: Episode III – Die Rache der Sith", year:2005, reihe:"Star Wars", genre:"Science-Fiction", regie:"George Lucas", cast:"Hayden Christensen, Ewan McGregor, Natalie Portman",
  beschreibung:"Anakin Skywalker wendet sich der dunklen Seite zu und wird zu Darth Vader, während die Republik zum Imperium wird.",
  places:[
   {name:"Chott el Djerid", country:"Tunesien", lat:33.9955, lon:8.431,
    scene:"Die Schlussszene: Owen und Beru nehmen das Baby Luke auf."},
   {name:"Ätna, Sizilien", country:"Italien", lat:37.751, lon:14.9934,
    scene:"Echte Aufnahmen eines Ätna-Ausbruchs flossen in den Lavaplaneten Mustafar ein."}
  ]},
 {title:"Star Wars: Das Erwachen der Macht", year:2015, reihe:"Star Wars", genre:"Science-Fiction", regie:"J. J. Abrams", cast:"Daisy Ridley, John Boyega, Harrison Ford",
  beschreibung:"Dreißig Jahre nach dem Sieg über das Imperium gerät die Schrottsammlerin Rey in den Kampf gegen die Erste Ordnung und sucht den verschollenen Luke Skywalker.",
  places:[
   {name:"Skellig Michael", country:"Irland", lat:51.7715, lon:-10.539,
    scene:"In der Schlussszene findet Rey Luke auf der Felseninsel."},
   {name:"Puzzlewood, Forest of Dean", country:"Vereinigtes Königreich", lat:51.772, lon:-2.614,
    scene:"Der verwunschene Wald wurde zum Planeten Takodana."},
   {name:"Wüste Rub al-Chali bei Liwa", country:"Vereinigte Arabische Emirate", lat:23.1, lon:53.8,
    scene:"Die Dünen bildeten den Wüstenplaneten Jakku."},
   {name:"Greenham Common", country:"Vereinigtes Königreich", lat:51.38, lon:-1.27,
    scene:"Auf dem ehemaligen Militärgelände entstanden Szenen der Widerstandsbasis."}
  ]},
 {title:"Star Wars: Die letzten Jedi", year:2017, reihe:"Star Wars", genre:"Science-Fiction", regie:"Rian Johnson", cast:"Daisy Ridley, Mark Hamill, Adam Driver",
  beschreibung:"Rey will Luke Skywalker überreden, sie auszubilden, während der Widerstand vor der Ersten Ordnung flieht.",
  places:[
   {name:"Skellig Michael", country:"Irland", lat:51.7718, lon:-10.5385,
    scene:"Die Insel ist Lukes Zufluchtsort Ahch-To."},
   {name:"Malin Head", country:"Irland", lat:55.38, lon:-7.373,
    scene:"Weitere Küstenszenen von Ahch-To."},
   {name:"Stradun, Dubrovnik", country:"Kroatien", lat:42.6413, lon:18.1081,
    scene:"Die Altstadt wurde zur Casino-Stadt Canto Bight."},
   {name:"Salar de Uyuni", country:"Bolivien", lat:-20.1338, lon:-67.4891,
    scene:"Der Salzsee war Vorbild und Drehort für den Salzplaneten Crait."}
  ]},
 {title:"Star Wars: Der Aufstieg Skywalkers", year:2019, reihe:"Star Wars", genre:"Science-Fiction", regie:"J. J. Abrams", cast:"Daisy Ridley, Adam Driver, Oscar Isaac",
  beschreibung:"Der totgeglaubte Imperator kehrt zurück, und Rey muss sich ihrer eigenen Herkunft stellen.",
  places:[
   {name:"Wadi Rum", country:"Jordanien", lat:29.576, lon:35.42,
    scene:"Die rote Felswüste wurde zum Wüstenplaneten Pasaana."}
  ]},
 {title:"Rogue One: A Star Wars Story", year:2016, reihe:"Star Wars", genre:"Science-Fiction", regie:"Gareth Edwards", cast:"Felicity Jones, Diego Luna, Ben Mendelsohn",
  beschreibung:"Eine Gruppe von Rebellen will die Pläne des Todessterns stehlen – die Vorgeschichte zu Episode IV.",
  places:[
   {name:"Laamu-Atoll", country:"Malediven", lat:1.85, lon:73.43,
    scene:"Die Inseln wurden zum Tropenplaneten Scarif für die Endschlacht."},
   {name:"Wadi Rum", country:"Jordanien", lat:29.58, lon:35.418,
    scene:"Die Wüste stellte den Mond Jedha dar."},
   {name:"Reynisfjara", country:"Island", lat:63.404, lon:-19.044,
    scene:"Der schwarze Strand war der Planet Lah'mu im Prolog."},
   {name:"U-Bahnhof Canary Wharf, London", country:"Vereinigtes Königreich", lat:51.5035, lon:-0.0187,
    scene:"Die Station wurde zum Inneren einer imperialen Basis."}
  ]},
 {title:"Solo: A Star Wars Story", year:2018, reihe:"Star Wars", genre:"Science-Fiction", regie:"Ron Howard", cast:"Alden Ehrenreich, Emilia Clarke, Donald Glover",
  beschreibung:"Der junge Han Solo trifft Chewbacca und Lando Calrissian und wird zum Schmuggler.",
  places:[
   {name:"Fuerteventura", country:"Spanien", lat:28.4, lon:-14,
    scene:"Die Vulkanlandschaft der Kanareninsel wurde zum Planeten Savareen."}
  ]},
 {title:"Following", year:1998, genre:"Thriller", regie:"Christopher Nolan", cast:"Jeremy Theobald, Alex Haw",
  beschreibung:"Ein erfolgloser Schriftsteller verfolgt zum Zeitvertreib Fremde durch London – bis er an einen Einbrecher gerät.",
  places:[
   {name:"London", country:"Vereinigtes Königreich", lat:51.5155, lon:-0.1415,
    scene:"Nolans Debüt entstand mit Mini-Budget an Wochenenden in Londoner Straßen und Wohnungen von Freunden."}
  ]},
 {title:"Memento", year:2000, genre:"Thriller", regie:"Christopher Nolan", cast:"Guy Pearce, Carrie-Anne Moss",
  beschreibung:"Ein Mann ohne Kurzzeitgedächtnis sucht den Mörder seiner Frau und orientiert sich an Notizen, Fotos und Tattoos. Die Geschichte wird rückwärts erzählt.",
  places:[
   {name:"Burbank und Umgebung, Los Angeles", country:"USA", lat:34.1808, lon:-118.309,
    scene:"Motels, Diners und Lagerhallen im Großraum Los Angeles."}
  ]},
 {title:"Insomnia", year:2002, genre:"Thriller", regie:"Christopher Nolan", cast:"Al Pacino, Robin Williams, Hilary Swank",
  beschreibung:"Ein Polizist aus Los Angeles ermittelt in einer Kleinstadt in Alaska, wo die Sonne nie untergeht, und verliert langsam den Schlaf und die Kontrolle.",
  places:[
   {name:"Squamish, British Columbia", country:"Kanada", lat:49.7016, lon:-123.1558,
    scene:"Die Küstenstadt stand für das fiktive Nightmute in Alaska."}
  ]},
 {title:"Batman Begins", year:2005, genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Michael Caine, Liam Neeson",
  beschreibung:"Bruce Wayne lernt im Himalaya bei einem geheimen Orden zu kämpfen und kehrt als Batman in seine Heimatstadt Gotham zurück.",
  places:[
   {name:"Svínafellsjökull", country:"Island", lat:64.008, lon:-16.875,
    scene:"Auf dem Gletscher trainiert Bruce mit Ra's al Ghul."},
   {name:"Chicago Board of Trade", country:"USA", lat:41.8778, lon:-87.6324,
    scene:"Das Gebäude wurde zum Sitz von Wayne Enterprises."},
   {name:"Mentmore Towers", country:"Vereinigtes Königreich", lat:51.864, lon:-0.714,
    scene:"Das Herrenhaus spielte Wayne Manor."}
  ]},
 {title:"Prestige – Die Meister der Magie", year:2006, genre:"Thriller, Drama", regie:"Christopher Nolan", cast:"Hugh Jackman, Christian Bale, Scarlett Johansson",
  beschreibung:"Zwei rivalisierende Zauberkünstler im London des 19. Jahrhunderts überbieten sich mit immer gefährlicheren Tricks.",
  places:[
   {name:"Tower Theatre, Broadway, Los Angeles", country:"USA", lat:34.0446, lon:-118.2546,
    scene:"Die historischen Theater am Broadway in Los Angeles wurden zu Londoner Varietébühnen."}
  ]},
 {title:"The Dark Knight", year:2008, genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Heath Ledger, Aaron Eckhart",
  beschreibung:"Batman, Commissioner Gordon und Staatsanwalt Harvey Dent nehmen den Kampf gegen den Joker auf, der Gotham ins Chaos stürzen will.",
  places:[
   {name:"LaSalle Street, Chicago", country:"USA", lat:41.879, lon:-87.6323,
    scene:"Auf dieser Straße überschlägt sich der Lkw des Jokers."},
   {name:"International Finance Centre, Hongkong", country:"Hongkong", lat:22.285, lon:114.159,
    scene:"Batman springt vom Wolkenkratzer, um Lau zu entführen."}
  ]},
 {title:"The Dark Knight Rises", year:2012, genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Tom Hardy, Anne Hathaway",
  beschreibung:"Acht Jahre nach dem Joker kehrt Batman zurück, um Gotham vor dem Terroristen Bane zu retten.",
  places:[
   {name:"Heinz Field, Pittsburgh", country:"USA", lat:40.4468, lon:-80.0158,
    scene:"Das Stadion, das während des Footballspiels einstürzt."},
   {name:"Wollaton Hall, Nottingham", country:"Vereinigtes Königreich", lat:52.9483, lon:-1.2098,
    scene:"Diesmal spielt dieses Herrenhaus Wayne Manor."},
   {name:"Mehrangarh Fort, Jodhpur", country:"Indien", lat:26.2979, lon:73.0186,
    scene:"Unter der Festung liegt der Brunnen, aus dem Bruce entkommt."}
  ]},
 {title:"Tenet", year:2020, genre:"Science-Fiction, Action", regie:"Christopher Nolan", cast:"John David Washington, Robert Pattinson, Elizabeth Debicki",
  beschreibung:"Ein Agent lernt, die Zeit umzukehren, und muss einen Waffenhändler aufhalten, der mit der Zukunft in Verbindung steht.",
  places:[
   {name:"Linnahall, Tallinn", country:"Estland", lat:59.444, lon:24.755,
    scene:"Die Sowjet-Konzerthalle wurde zur Oper in Kiew im Prolog."},
   {name:"Laagna tee, Tallinn", country:"Estland", lat:59.433, lon:24.82,
    scene:"Die Stadtautobahn ist Schauplatz der rückwärts laufenden Verfolgungsjagd."},
   {name:"Opernhaus Oslo", country:"Norwegen", lat:59.9075, lon:10.7531,
    scene:"Das Dach der Oper ist der Eingang zum Zollfreilager."}
  ]},
 {title:"Oppenheimer", year:2023, genre:"Biografie, Drama", regie:"Christopher Nolan", cast:"Cillian Murphy, Emily Blunt, Robert Downey Jr.",
  beschreibung:"Die Geschichte des Physikers J. Robert Oppenheimer, der im Manhattan-Projekt die Atombombe entwickelte, und der Frage nach seiner Verantwortung.",
  places:[
   {name:"Ghost Ranch, New Mexico", country:"USA", lat:36.33, lon:-106.474,
    scene:"Hier wurde die Stadt Los Alamos als Kulisse nachgebaut."},
   {name:"Fuller Lodge, Los Alamos", country:"USA", lat:35.8815, lon:-106.3006,
    scene:"Am echten Ort des Manhattan-Projekts wurden Szenen gedreht."},
   {name:"Princeton University", country:"USA", lat:40.3487, lon:-74.6593,
    scene:"Oppenheimer trifft Einstein am Institute for Advanced Study."}
  ]},
 {title:"Die Odyssee", year:2026, genre:"Abenteuer, Fantasy", regie:"Christopher Nolan", cast:"Matt Damon, Tom Holland, Anne Hathaway, Zendaya",
  beschreibung:"Nach dem Trojanischen Krieg versucht König Odysseus jahrelang, mit seinen Männern heim nach Ithaka zu gelangen – eine Irrfahrt voller Ungeheuer, Götter und Gefahren.",
  places:[
   {name:"Aït-Ben-Haddou", country:"Marokko", lat:31.0472, lon:-7.1318,
    scene:"Die Lehmstadt stellt das antike Troja dar."},
   {name:"Favignana, Ägadische Inseln", country:"Italien", lat:37.93, lon:12.327,
    scene:"Die Insel vor Sizilien war einer der Hauptdrehorte."},
   {name:"Nestorhöhle bei Pylos", country:"Griechenland", lat:36.964, lon:21.661,
    scene:"Die Höhle wurde zum Schauplatz der Begegnung mit dem Zyklopen."},
   {name:"Findlater Castle", country:"Vereinigtes Königreich", lat:57.687, lon:-2.717,
    scene:"Die Burgruine an Schottlands Moray-Küste."},
   {name:"Hjörleifshöfði", country:"Island", lat:63.418, lon:-18.757,
    scene:"Die Vulkanlandschaft diente als Unterwelt."}
  ]},
 {title:"Wer klopft denn da an meine Tür?", year:1967, genre:"Drama", regie:"Martin Scorsese", cast:"Harvey Keitel, Zina Bethune",
  beschreibung:"Ein junger Italoamerikaner in New York verliebt sich und ringt mit seinem katholisch geprägten Bild von Frauen – Scorseses Spielfilmdebüt.",
  places:[
   {name:"Elizabeth Street, Little Italy", country:"USA", lat:40.721, lon:-73.9952,
    scene:"Scorsese drehte in den Straßen, in denen er aufwuchs."}
  ]},
 {title:"Die Faust der Rebellen", year:1972, genre:"Krimi, Drama", regie:"Martin Scorsese", cast:"Barbara Hershey, David Carradine",
  beschreibung:"Während der Großen Depression wird eine junge Frau zur Zugräuberin und schließt sich einem Gewerkschafter an.",
  places:[
   {name:"Camden, Arkansas", country:"USA", lat:33.5846, lon:-92.8343,
    scene:"Innen- und Straßenszenen entstanden in der Kleinstadt."},
   {name:"Reader Railroad, Arkansas", country:"USA", lat:33.749, lon:-93.101,
    scene:"Die historische Bahn lieferte die Zugszenen."}
  ]},
 {title:"Hexenkessel", year:1973, genre:"Krimi, Drama", regie:"Martin Scorsese", cast:"Harvey Keitel, Robert De Niro",
  beschreibung:"Ein kleiner Gangster in Little Italy versucht, seinem unberechenbaren Freund Johnny Boy aus der Patsche zu helfen.",
  places:[
   {name:"Mulberry Street, Little Italy", country:"USA", lat:40.719, lon:-73.997,
    scene:"Szenen während des Festes San Gennaro."}
  ]},
 {title:"Alice lebt hier nicht mehr", year:1974, genre:"Drama", regie:"Martin Scorsese", cast:"Ellen Burstyn, Kris Kristofferson",
  beschreibung:"Nach dem Tod ihres Mannes zieht eine Witwe mit ihrem Sohn durch den Südwesten, um Sängerin zu werden.",
  places:[
   {name:"Tucson, Arizona", country:"USA", lat:32.2226, lon:-110.9747,
    scene:"Hier arbeitet Alice im Diner."}
  ]},
 {title:"Taxi Driver", year:1976, genre:"Drama, Thriller", regie:"Martin Scorsese", cast:"Robert De Niro, Jodie Foster, Cybill Shepherd",
  beschreibung:"Ein schlafloser Vietnam-Veteran fährt nachts Taxi durch New York und steigert sich in einen gewalttätigen Rettungswahn.",
  places:[
   {name:"Times Square, Manhattan", country:"USA", lat:40.758, lon:-73.9855,
    scene:"Travis fährt durch das grelle Nachtleben der 1970er."},
   {name:"226 East 13th Street, East Village", country:"USA", lat:40.732, lon:-73.987,
    scene:"Das Haus des blutigen Finales."}
  ]},
 {title:"New York, New York", year:1977, genre:"Musical, Drama", regie:"Martin Scorsese", cast:"Liza Minnelli, Robert De Niro",
  beschreibung:"Ein Saxofonist und eine Sängerin verlieben sich nach dem Zweiten Weltkrieg – ihre Karrieren treiben sie auseinander.",
  places:[
   {name:"MGM-Studios, Culver City", country:"USA", lat:34.017, lon:-118.4,
    scene:"Der Film entstand bewusst in künstlichen Studiokulissen."}
  ]},
 {title:"The Last Waltz", year:1978, genre:"Konzertfilm", regie:"Martin Scorsese", cast:"The Band, Bob Dylan, Joni Mitchell",
  beschreibung:"Das Abschiedskonzert der Gruppe The Band mit vielen Gaststars, ergänzt durch Interviews.",
  places:[
   {name:"Winterland Ballroom, San Francisco", country:"USA", lat:37.7848, lon:-122.433,
    scene:"Hier fand das Konzert an Thanksgiving 1976 statt."}
  ]},
 {title:"Wie ein wilder Stier", year:1980, genre:"Biografie, Sportfilm", regie:"Martin Scorsese", cast:"Robert De Niro, Joe Pesci, Cathy Moriarty",
  beschreibung:"Der Aufstieg und Fall des Boxers Jake LaMotta, der im Ring wie im Privatleben von Wut getrieben ist.",
  places:[
   {name:"Olympic Auditorium, Los Angeles", country:"USA", lat:34.042, lon:-118.259,
    scene:"Die Boxhalle war Drehort für Kampfszenen."}
  ]},
 {title:"King of Comedy", year:1982, genre:"Satire", regie:"Martin Scorsese", cast:"Robert De Niro, Jerry Lewis",
  beschreibung:"Ein erfolgloser Möchtegern-Komiker entführt einen TV-Star, um einen Auftritt in dessen Show zu erzwingen.",
  places:[
   {name:"Midtown Manhattan", country:"USA", lat:40.759, lon:-73.981,
    scene:"Rupert lauert Jerry rund um die TV-Studios in Midtown auf."}
  ]},
 {title:"Die Zeit nach Mitternacht", year:1985, genre:"Schwarze Komödie", regie:"Martin Scorsese", cast:"Griffin Dunne, Rosanna Arquette",
  beschreibung:"Ein Büroangestellter will nur eine Frau in SoHo treffen und erlebt eine albtraumhafte Nacht, aus der er nicht entkommt.",
  places:[
   {name:"SoHo, Manhattan", country:"USA", lat:40.7233, lon:-74.003,
    scene:"Die nächtlichen Straßen und Lofts von SoHo."}
  ]},
 {title:"Die Farbe des Geldes", year:1986, genre:"Drama", regie:"Martin Scorsese", cast:"Paul Newman, Tom Cruise",
  beschreibung:"Der alternde Billard-Profi Fast Eddie nimmt einen talentierten jungen Spieler unter seine Fittiche.",
  places:[
   {name:"Chris's Billiards, Chicago", country:"USA", lat:41.9711, lon:-87.7616,
    scene:"Der Billardsalon ist einer der Spielorte."}
  ]},
 {title:"Die letzte Versuchung Christi", year:1988, genre:"Drama", regie:"Martin Scorsese", cast:"Willem Dafoe, Harvey Keitel",
  beschreibung:"Jesus wird als zweifelnder Mensch gezeigt, der am Kreuz von einem normalen Leben versucht wird.",
  places:[
   {name:"Meknès", country:"Marokko", lat:33.895, lon:-5.5547,
    scene:"Marokko stand für das biblische Palästina."}
  ]},
 {title:"GoodFellas – Drei Jahrzehnte in der Mafia", year:1990, genre:"Mafiafilm, Drama", regie:"Martin Scorsese", cast:"Ray Liotta, Robert De Niro, Joe Pesci",
  beschreibung:"Henry Hill wächst in die New Yorker Mafia hinein und erlebt drei Jahrzehnte Aufstieg, Gier und Verrat.",
  places:[
   {name:"Neir's Tavern, Queens", country:"USA", lat:40.6923, lon:-73.8636,
    scene:"Die Bar ist Schauplatz mehrerer Szenen."},
   {name:"Copacabana, East 60th Street", country:"USA", lat:40.765, lon:-73.9727,
    scene:"Die berühmte Plansequenz durch die Küche in den Club."}
  ]},
 {title:"Kap der Angst", year:1991, genre:"Thriller", regie:"Martin Scorsese", cast:"Robert De Niro, Nick Nolte, Jessica Lange",
  beschreibung:"Ein entlassener Häftling terrorisiert die Familie des Anwalts, den er für seine Verurteilung verantwortlich macht.",
  places:[
   {name:"Fort Lauderdale, Florida", country:"USA", lat:26.1224, lon:-80.1373,
    scene:"Südflorida stand für die Kleinstadt in North Carolina."}
  ]},
 {title:"Zeit der Unschuld", year:1993, genre:"Drama, Romantik", regie:"Martin Scorsese", cast:"Daniel Day-Lewis, Michelle Pfeiffer, Winona Ryder",
  beschreibung:"Ein Anwalt der New Yorker Oberschicht der 1870er verliebt sich in die unkonventionelle Cousine seiner Verlobten.",
  places:[
   {name:"Troy, New York", country:"USA", lat:42.7284, lon:-73.6918,
    scene:"Die gut erhaltenen Straßenzüge stellten das alte New York dar."}
  ]},
 {title:"Casino", year:1995, genre:"Krimi, Drama", regie:"Martin Scorsese", cast:"Robert De Niro, Sharon Stone, Joe Pesci",
  beschreibung:"Ein Spielexperte leitet für die Mafia ein Casino in Las Vegas – bis Gier und Eifersucht alles zerstören.",
  places:[
   {name:"Riviera Hotel, Las Vegas", country:"USA", lat:36.1355, lon:-115.1621,
    scene:"Das 2016 abgerissene Casino diente als Tangiers."}
  ]},
 {title:"Kundun", year:1997, genre:"Biografie, Drama", regie:"Martin Scorsese", cast:"Tenzin Thuthob Tsarong",
  beschreibung:"Das Leben des 14. Dalai Lama von seiner Entdeckung als Kind bis zur Flucht aus Tibet.",
  places:[
   {name:"Atlas Studios, Ouarzazate", country:"Marokko", lat:30.939, lon:-6.905,
    scene:"Marokko stand für Tibet."}
  ]},
 {title:"Bringing Out the Dead", year:1999, genre:"Drama", regie:"Martin Scorsese", cast:"Nicolas Cage, Patricia Arquette",
  beschreibung:"Ein ausgebrannter Rettungssanitäter fährt Nachtschichten in Hell's Kitchen und wird von den Geistern der Patienten verfolgt, die er nicht retten konnte.",
  places:[
   {name:"Hell's Kitchen, Manhattan", country:"USA", lat:40.7638, lon:-73.9918,
    scene:"Die nächtlichen Straßen, durch die der Rettungswagen rast."}
  ]},
 {title:"Gangs of New York", year:2002, genre:"Historienfilm, Drama", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Daniel Day-Lewis, Cameron Diaz",
  beschreibung:"Im New York des 19. Jahrhunderts sinnt ein junger Ire auf Rache an Bill the Butcher, dem Mörder seines Vaters.",
  places:[
   {name:"Cinecittà, Rom", country:"Italien", lat:41.8517, lon:12.5747,
    scene:"Das komplette Viertel Five Points wurde in den römischen Studios nachgebaut."}
  ]},
 {title:"Aviator", year:2004, genre:"Biografie, Drama", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Cate Blanchett",
  beschreibung:"Das Leben des Milliardärs, Filmproduzenten und Luftfahrtpioniers Howard Hughes zwischen Genie und Zwangsstörung.",
  places:[
   {name:"Montreal", country:"Kanada", lat:45.5017, lon:-73.5673,
    scene:"Ein Großteil des Films entstand in und um Montreal."}
  ]},
 {title:"Departed – Unter Feinden", year:2006, genre:"Krimi, Thriller", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Matt Damon, Jack Nicholson",
  beschreibung:"Ein Polizist schleust sich in die irische Mafia in Boston ein, während ein Mafia-Spitzel bei der Polizei Karriere macht.",
  places:[
   {name:"Massachusetts State House, Boston", country:"USA", lat:42.3588, lon:-71.0638,
    scene:"Sullivans Wohnung blickt auf die goldene Kuppel des State House."}
  ]},
 {title:"Shutter Island", year:2010, genre:"Thriller", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley",
  beschreibung:"Zwei US-Marshals ermitteln 1954 in einer psychiatrischen Klinik auf einer Insel nach einer verschwundenen Patientin.",
  places:[
   {name:"Medfield State Hospital, Massachusetts", country:"USA", lat:42.1981, lon:-71.3417,
    scene:"Die ehemalige Klinik stellte Ashecliffe dar."}
  ]},
 {title:"Hugo Cabret", year:2011, genre:"Abenteuer, Familienfilm", regie:"Martin Scorsese", cast:"Asa Butterfield, Ben Kingsley, Chloë Grace Moretz",
  beschreibung:"Ein Waisenjunge lebt im Pariser Bahnhof der 1930er und entdeckt das Geheimnis des Filmpioniers Georges Méliès.",
  places:[
   {name:"Bibliothèque Sainte-Geneviève, Paris", country:"Frankreich", lat:48.8467, lon:2.3459,
    scene:"Die Bibliothek, in der Hugo und Isabelle recherchieren."}
  ]},
 {title:"The Wolf of Wall Street", year:2013, genre:"Komödie, Biografie", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Jonah Hill, Margot Robbie",
  beschreibung:"Der Aufstieg und Fall des Börsenmaklers Jordan Belfort, der mit Betrug ein Vermögen macht und in Exzessen versinkt.",
  places:[
   {name:"Wall Street, Manhattan", country:"USA", lat:40.7064, lon:-74.0094,
    scene:"Belforts Karriere beginnt im Finanzdistrikt."}
  ]},
 {title:"Silence", year:2016, genre:"Historienfilm, Drama", regie:"Martin Scorsese", cast:"Andrew Garfield, Adam Driver, Liam Neeson",
  beschreibung:"Zwei Jesuiten reisen im 17. Jahrhundert nach Japan, um ihren verschollenen Lehrer zu finden – zu einer Zeit, in der Christen verfolgt werden.",
  places:[
   {name:"Yangmingshan, Taipeh", country:"Taiwan", lat:25.17, lon:121.56,
    scene:"Der komplett in Taiwan gedrehte Film nutzte die Berglandschaft um Taipeh."},
   {name:"Gengziping, Wanli", country:"Taiwan", lat:25.198, lon:121.62,
    scene:"Die dampfenden Thermalquellen sind Schauplatz der Folterszenen."}
  ]},
 {title:"The Irishman", year:2019, genre:"Mafiafilm, Drama", regie:"Martin Scorsese", cast:"Robert De Niro, Al Pacino, Joe Pesci",
  beschreibung:"Der Auftragskiller Frank Sheeran blickt auf sein Leben in der Mafia und seine Freundschaft zu Gewerkschaftsboss Jimmy Hoffa zurück.",
  places:[
   {name:"Orchard Street, Lower East Side", country:"USA", lat:40.7185, lon:-73.99,
    scene:"Ein Laden wurde zu Umberto's Clam House, wo Joe Gallo erschossen wird."},
   {name:"Gotham Comedy Club, Chelsea", country:"USA", lat:40.7442, lon:-73.9963,
    scene:"Der Club stellte das Copacabana dar."},
   {name:"Woodlawn Cemetery, Bronx", country:"USA", lat:40.8892, lon:-73.8728,
    scene:"Hier wurde das Mausoleum gedreht."}
  ]},
 {title:"Killers of the Flower Moon", year:2023, genre:"Krimi, Drama", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Lily Gladstone, Robert De Niro",
  beschreibung:"In den 1920ern werden die durch Öl reich gewordenen Osage in Oklahoma Opfer einer Mordserie, hinter der skrupellose Weiße stecken.",
  places:[
   {name:"Pawhuska, Oklahoma", country:"USA", lat:36.6676, lon:-96.3372,
    scene:"Gedreht wurde im Osage-Gebiet, wo die Geschichte tatsächlich geschah."}
  ]},
 {title:"Ghostbusters", year:1984, genre:"Komödie, Fantasy", regie:"Ivan Reitman", cast:"Bill Murray, Dan Aykroyd, Sigourney Weaver",
  beschreibung:"Drei Parapsychologen gründen in New York eine Firma zur Geisterjagd – gerade rechtzeitig für eine übernatürliche Katastrophe.",
  places:[
   {name:"Hook & Ladder 8, Tribeca", country:"USA", lat:40.7197, lon:-74.0066,
    scene:"Die Feuerwache ist das Hauptquartier der Ghostbusters."}
  ]},
 {title:"Frühstück bei Tiffany", year:1961, genre:"Romantische Komödie", regie:"Blake Edwards", cast:"Audrey Hepburn, George Peppard",
  beschreibung:"Die lebenslustige Holly Golightly verdreht in New York einem jungen Schriftsteller den Kopf.",
  places:[
   {name:"Tiffany & Co., Fifth Avenue", country:"USA", lat:40.7625, lon:-73.974,
    scene:"Holly frühstückt am Morgen vor dem Schaufenster."}
  ]},
 {title:"Harry und Sally", year:1989, genre:"Romantische Komödie", regie:"Rob Reiner", cast:"Billy Crystal, Meg Ryan",
  beschreibung:"Über zwölf Jahre fragen sich Harry und Sally, ob Männer und Frauen einfach nur Freunde sein können.",
  places:[
   {name:"Katz's Delicatessen, Lower East Side", country:"USA", lat:40.7223, lon:-73.9874,
    scene:"Die berühmte Szene im Deli – „Ich will genau das, was sie hatte“."}
  ]},
 {title:"Rocky", year:1976, genre:"Sportfilm, Drama", regie:"John G. Avildsen", cast:"Sylvester Stallone, Talia Shire",
  beschreibung:"Ein kleiner Boxer aus Philadelphia bekommt die Chance, gegen den Weltmeister anzutreten.",
  places:[
   {name:"Philadelphia Museum of Art", country:"USA", lat:39.9656, lon:-75.181,
    scene:"Rocky sprintet die Treppe hinauf – heute die „Rocky Steps“."}
  ]},
 {title:"Zurück in die Zukunft", year:1985, genre:"Science-Fiction, Komödie", regie:"Robert Zemeckis", cast:"Michael J. Fox, Christopher Lloyd",
  beschreibung:"Der Teenager Marty McFly reist mit einem DeLorean ins Jahr 1955 und muss dafür sorgen, dass sich seine Eltern verlieben.",
  places:[
   {name:"Gamble House, Pasadena", country:"USA", lat:34.1515, lon:-118.1607,
    scene:"Das Haus diente als Außenansicht von Docs Villa 1955."},
   {name:"Puente Hills Mall", country:"USA", lat:34.023, lon:-117.927,
    scene:"Der Parkplatz der „Twin Pines Mall“, wo der DeLorean zum ersten Mal reist."}
  ]},
 {title:"Pretty Woman", year:1990, genre:"Romantische Komödie", regie:"Garry Marshall", cast:"Julia Roberts, Richard Gere",
  beschreibung:"Ein reicher Geschäftsmann engagiert eine Prostituierte für eine Woche – und beide verlieben sich.",
  places:[
   {name:"Beverly Wilshire Hotel", country:"USA", lat:34.0672, lon:-118.3997,
    scene:"Edward und Vivian wohnen im Luxushotel am Rodeo Drive."}
  ]},
 {title:"La La Land", year:2016, genre:"Musical, Romantik", regie:"Damien Chazelle", cast:"Ryan Gosling, Emma Stone",
  beschreibung:"Ein Jazzpianist und eine Schauspielerin verlieben sich in Los Angeles, während beide ihren Träumen nachjagen.",
  places:[
   {name:"Griffith Observatory", country:"USA", lat:34.1184, lon:-118.3004,
    scene:"Mia und Sebastian schweben im Planetarium durch die Sterne."},
   {name:"Hermosa Beach Pier", country:"USA", lat:33.8622, lon:-118.4013,
    scene:"Sebastian singt „City of Stars“ am Pier."}
  ]},
 {title:"Forrest Gump", year:1994, genre:"Drama, Komödie", regie:"Robert Zemeckis", cast:"Tom Hanks, Robin Wright",
  beschreibung:"Ein einfacher Mann aus Alabama erlebt unfreiwillig die großen Momente der amerikanischen Geschichte.",
  places:[
   {name:"Chippewa Square, Savannah", country:"USA", lat:32.0751, lon:-81.0938,
    scene:"Forrest erzählt seine Geschichte auf der Bank an der Bushaltestelle."},
   {name:"Forrest Gump Point, Monument Valley", country:"USA", lat:37.1006, lon:-110.009,
    scene:"Hier beendet Forrest seinen Lauf quer durch Amerika."}
  ]},
 {title:"Shining", year:1980, genre:"Horror", regie:"Stanley Kubrick", cast:"Jack Nicholson, Shelley Duvall",
  beschreibung:"Ein Schriftsteller hütet im Winter mit seiner Familie ein abgelegenes Hotel und verfällt langsam dem Wahnsinn.",
  places:[
   {name:"Timberline Lodge, Mount Hood", country:"USA", lat:45.3311, lon:-121.711,
    scene:"Die Außenaufnahmen des Overlook Hotels."}
  ]},
 {title:"Der unsichtbare Dritte", year:1959, genre:"Thriller", regie:"Alfred Hitchcock", cast:"Cary Grant, Eva Marie Saint",
  beschreibung:"Ein Werbefachmann wird mit einem Agenten verwechselt und quer durch die USA gejagt.",
  places:[
   {name:"Mount Rushmore", country:"USA", lat:43.8791, lon:-103.4591,
    scene:"Das Finale an den Präsidentenköpfen – die Kletterszene entstand im Studio."}
  ]},
 {title:"Thelma & Louise", year:1991, genre:"Roadmovie, Drama", regie:"Ridley Scott", cast:"Susan Sarandon, Geena Davis",
  beschreibung:"Zwei Freundinnen fliehen nach einer Gewalttat im Auto quer durch den Südwesten.",
  places:[
   {name:"Dead Horse Point, Utah", country:"USA", lat:38.471, lon:-109.74,
    scene:"Das berühmte Ende am Abgrund wurde hier gedreht."}
  ]},
 {title:"Jurassic Park", year:1993, genre:"Abenteuer, Science-Fiction", regie:"Steven Spielberg", cast:"Sam Neill, Laura Dern, Jeff Goldblum",
  beschreibung:"In einem Freizeitpark mit geklonten Dinosauriern fallen die Sicherheitssysteme aus.",
  places:[
   {name:"Kualoa Ranch, Oʻahu", country:"USA", lat:21.52, lon:-157.836,
    scene:"Das Tal, in dem die Gallimimus-Herde vorbeirennt."}
  ]},
 {title:"Top Gun", year:1986, genre:"Action", regie:"Tony Scott", cast:"Tom Cruise, Kelly McGillis, Val Kilmer",
  beschreibung:"Ein junger Kampfpilot will an der Eliteschule Top Gun der Beste werden.",
  places:[
   {name:"Top-Gun-Haus, Oceanside", country:"USA", lat:33.1938, lon:-117.3848,
    scene:"Charlies Strandhaus."}
  ]},
 {title:"Feld der Träume", year:1989, genre:"Drama, Fantasy", regie:"Phil Alden Robinson", cast:"Kevin Costner, James Earl Jones",
  beschreibung:"Ein Farmer in Iowa hört eine Stimme und baut ein Baseballfeld in seine Maisfelder.",
  places:[
   {name:"Field of Dreams, Dyersville", country:"USA", lat:42.498, lon:-91.056,
    scene:"Das Baseballfeld existiert noch und kann besucht werden."}
  ]},
 {title:"Und täglich grüßt das Murmeltier", year:1993, genre:"Komödie", regie:"Harold Ramis", cast:"Bill Murray, Andie MacDowell",
  beschreibung:"Ein zynischer Wetteransager erlebt denselben Tag immer und immer wieder.",
  places:[
   {name:"Woodstock, Illinois", country:"USA", lat:42.3147, lon:-88.4487,
    scene:"Die Kleinstadt spielte Punxsutawney."}
  ]},
 {title:"Vertigo – Aus dem Reich der Toten", year:1958, genre:"Thriller", regie:"Alfred Hitchcock", cast:"James Stewart, Kim Novak",
  beschreibung:"Ein Detektiv mit Höhenangst soll eine geheimnisvolle Frau beschatten und verfällt ihr.",
  places:[
   {name:"Fort Point, San Francisco", country:"USA", lat:37.8106, lon:-122.4771,
    scene:"Madeleine springt unter der Golden Gate Bridge in die Bucht."}
  ]},
 {title:"Schlaflos in Seattle", year:1993, genre:"Romantische Komödie", regie:"Nora Ephron", cast:"Tom Hanks, Meg Ryan",
  beschreibung:"Eine Journalistin verliebt sich über eine Radiosendung in einen verwitweten Vater aus Seattle.",
  places:[
   {name:"Hausboot am Lake Union, Seattle", country:"USA", lat:47.639, lon:-122.329,
    scene:"Sams Hausboot."},
   {name:"Empire State Building", country:"USA", lat:40.7484, lon:-73.9857,
    scene:"Das Treffen auf der Aussichtsplattform am Valentinstag."}
  ]},
 {title:"Kevin – Allein zu Haus", year:1990, genre:"Familienfilm, Komödie", regie:"Chris Columbus", cast:"Macaulay Culkin, Joe Pesci, Daniel Stern",
  beschreibung:"Der achtjährige Kevin wird über Weihnachten vergessen und verteidigt das Haus gegen zwei Einbrecher.",
  places:[
   {name:"Lincoln Avenue, Winnetka", country:"USA", lat:42.1097, lon:-87.7334,
    scene:"Das Haus der Familie McCallister."}
  ]},
 {title:"Kevin – Allein in New York", year:1992, genre:"Familienfilm, Komödie", regie:"Chris Columbus", cast:"Macaulay Culkin, Joe Pesci, Tim Curry",
  beschreibung:"Diesmal landet Kevin allein in New York und checkt im Luxushotel ein.",
  places:[
   {name:"The Plaza Hotel", country:"USA", lat:40.7645, lon:-73.9744,
    scene:"Kevin wohnt im Plaza."}
  ]},
 {title:"Ferris macht blau", year:1986, genre:"Komödie", regie:"John Hughes", cast:"Matthew Broderick, Mia Sara, Alan Ruck",
  beschreibung:"Ein Schüler schwänzt einen Tag und zieht mit seinen Freunden durch Chicago.",
  places:[
   {name:"Art Institute of Chicago", country:"USA", lat:41.8796, lon:-87.6237,
    scene:"Cameron versinkt im Seurat-Gemälde."}
  ]},
 {title:"Blues Brothers", year:1980, genre:"Musik-Komödie", regie:"John Landis", cast:"John Belushi, Dan Aykroyd",
  beschreibung:"Zwei Brüder wollen ihre alte Band wiedervereinen, um ihr Waisenhaus zu retten.",
  places:[
   {name:"Daley Plaza, Chicago", country:"USA", lat:41.884, lon:-87.6303,
    scene:"Das Finale mit der riesigen Polizeiverfolgung."}
  ]},
 {title:"Stirb langsam", year:1988, genre:"Action", regie:"John McTiernan", cast:"Bruce Willis, Alan Rickman",
  beschreibung:"Ein New Yorker Polizist kämpft allein gegen Terroristen in einem Hochhaus in Los Angeles.",
  places:[
   {name:"Fox Plaza, Century City", country:"USA", lat:34.0553, lon:-118.414,
    scene:"Das Hochhaus spielte den Nakatomi Tower."}
  ]},
 {title:"Unheimliche Begegnung der dritten Art", year:1977, genre:"Science-Fiction", regie:"Steven Spielberg", cast:"Richard Dreyfuss, François Truffaut",
  beschreibung:"Ein Elektriker wird nach einer UFO-Sichtung von einem Bild besessen, das ihn zu einem geheimnisvollen Berg führt.",
  places:[
   {name:"Devils Tower, Wyoming", country:"USA", lat:44.5902, lon:-104.7146,
    scene:"Der Felsturm ist der Landeplatz der Außerirdischen."}
  ]},
 {title:"Die Goonies", year:1985, genre:"Abenteuer, Familienfilm", regie:"Richard Donner", cast:"Sean Astin, Josh Brolin, Corey Feldman",
  beschreibung:"Eine Gruppe Kinder sucht den Schatz des Piraten One-Eyed Willy, um ihre Häuser zu retten.",
  places:[
   {name:"Goonies-Haus, Astoria", country:"USA", lat:46.1913, lon:-123.82,
    scene:"Das Haus der Familie Walsh."}
  ]},
 {title:"Stand by Me – Das Geheimnis eines Sommers", year:1986, genre:"Drama", regie:"Rob Reiner", cast:"Wil Wheaton, River Phoenix, Corey Feldman",
  beschreibung:"Vier Jungen machen sich 1959 auf die Suche nach einer Leiche im Wald.",
  places:[
   {name:"Brownsville, Oregon", country:"USA", lat:44.3935, lon:-122.984,
    scene:"Die Kleinstadt spielte Castle Rock."}
  ]},
 {title:"Dirty Dancing", year:1987, genre:"Romantik, Tanzfilm", regie:"Emile Ardolino", cast:"Jennifer Grey, Patrick Swayze",
  beschreibung:"Die 17-jährige Baby verliebt sich im Ferienresort in den Tanzlehrer Johnny.",
  places:[
   {name:"Mountain Lake Lodge, Virginia", country:"USA", lat:37.355, lon:-80.532,
    scene:"Das Resort stellte Kellerman's dar."}
  ]},
 {title:"Der Exorzist", year:1973, genre:"Horror", regie:"William Friedkin", cast:"Ellen Burstyn, Max von Sydow, Linda Blair",
  beschreibung:"Eine Mutter bittet zwei Priester um Hilfe, als ihre Tochter von einem Dämon besessen scheint.",
  places:[
   {name:"Exorcist Steps, Georgetown", country:"USA", lat:38.9056, lon:-77.0703,
    scene:"Die steile Treppe des dramatischen Finales."}
  ]},
 {title:"Mrs. Doubtfire – Das stachelige Kindermädchen", year:1993, genre:"Komödie", regie:"Chris Columbus", cast:"Robin Williams, Sally Field",
  beschreibung:"Ein geschiedener Vater verkleidet sich als ältere Haushälterin, um bei seinen Kindern zu sein.",
  places:[
   {name:"Steiner Street, San Francisco", country:"USA", lat:37.7945, lon:-122.4361,
    scene:"Das Haus der Familie Hillard."}
  ]},
 {title:"Nosferatu – Eine Symphonie des Grauens", year:1922, genre:"Horror, Stummfilm", regie:"F. W. Murnau", cast:"Max Schreck, Gustav von Wangenheim",
  beschreibung:"Ein Makler reist zu Graf Orlok nach Transsilvanien und bringt unwissentlich einen Vampir in seine Heimatstadt.",
  places:[
   {name:"Burg Orava", country:"Slowakei", lat:49.2617, lon:19.3586,
    scene:"Die Burg über dem Fluss wurde zu Orloks Schloss."}
  ]},
 {title:"Dragonheart", year:1996, genre:"Fantasy, Abenteuer", regie:"Rob Cohen", cast:"Dennis Quaid, Sean Connery (Stimme)",
  beschreibung:"Ein Ritter verbündet sich mit dem letzten Drachen gegen einen grausamen König.",
  places:[
   {name:"Zipser Burg", country:"Slowakei", lat:48.9997, lon:20.7681,
    scene:"Die riesige Burgruine ist eine der Hauptkulissen."}
  ]},
 {title:"Der Schatz im Silbersee", year:1962, genre:"Western", regie:"Harald Reinl", cast:"Lex Barker, Pierre Brice, Götz George",
  beschreibung:"Old Shatterhand und Winnetou jagen eine Bande, die es auf einen legendären Schatz abgesehen hat.",
  places:[
   {name:"Nationalpark Plitvicer Seen", country:"Kroatien", lat:44.8654, lon:15.582,
    scene:"Die Seen und Wasserfälle bilden den Silbersee."}
  ]},
 {title:"Winnetou 1. Teil", year:1963, genre:"Western", regie:"Harald Reinl", cast:"Pierre Brice, Lex Barker, Mario Adorf",
  beschreibung:"Der Landvermesser Old Shatterhand lernt den Apachen Winnetou kennen und wird sein Blutsbruder.",
  places:[
   {name:"Nationalpark Paklenica", country:"Kroatien", lat:44.35, lon:15.47,
    scene:"Die Schlucht ist Schauplatz vieler Winnetou-Szenen."}
  ]},
 {title:"Die Chroniken von Narnia: Prinz Kaspian von Narnia", year:2008, genre:"Fantasy", regie:"Andrew Adamson", cast:"Ben Barnes, Georgie Henley, William Moseley",
  beschreibung:"Die vier Pevensie-Geschwister kehren nach Narnia zurück und helfen Prinz Kaspian, seinen Thron zurückzuerobern.",
  places:[
   {name:"Prebischtor, Böhmische Schweiz", country:"Tschechien", lat:50.882, lon:14.2817,
    scene:"Durch die Felsenschlucht ziehen die Kinder bei ihrer Ankunft."},
   {name:"Soča bei Bovec", country:"Slowenien", lat:46.338, lon:13.552,
    scene:"Am smaragdgrünen Fluss entstand die Brückenschlacht."}
  ]},
 {title:"The Illusionist", year:2006, genre:"Drama, Mystery", regie:"Neil Burger", cast:"Edward Norton, Jessica Biel, Paul Giamatti",
  beschreibung:"Ein Zauberkünstler im Wien um 1900 verliebt sich in eine Adelige, die dem Kronprinzen versprochen ist.",
  places:[
   {name:"Český Krumlov", country:"Tschechien", lat:48.8127, lon:14.3175,
    scene:"Die Altstadt stand für Szenen im alten Österreich."}
  ]},
 {title:"Spider-Man: Far From Home", year:2019, genre:"Superheldenfilm", regie:"Jon Watts", cast:"Tom Holland, Zendaya, Jake Gyllenhaal",
  beschreibung:"Peter Parker will auf Klassenfahrt durch Europa nur Urlaub machen, doch Nick Fury hat andere Pläne.",
  places:[
   {name:"Altstädter Ring, Prag", country:"Tschechien", lat:50.0875, lon:14.4213,
    scene:"Der Kampf gegen das Feuer-Elementar während eines Festes."}
  ]},
 {title:"Red Sparrow", year:2018, genre:"Spionagethriller", regie:"Francis Lawrence", cast:"Jennifer Lawrence, Joel Edgerton",
  beschreibung:"Eine verletzte Primaballerina wird in Russland zur Spionin ausgebildet.",
  places:[
   {name:"Ungarische Staatsoper, Budapest", country:"Ungarn", lat:47.5025, lon:19.0583,
    scene:"Das Opernhaus stellte das Bolschoi-Theater dar."}
  ]},
 {title:"Kontroll", year:2003, genre:"Thriller, Komödie", regie:"Antal Nimród", cast:"Sándor Csányi, Zoltán Mucsi",
  beschreibung:"Ein Fahrkartenkontrolleur lebt und arbeitet in der Budapester U-Bahn, in der ein Unbekannter Fahrgäste vor die Züge stößt.",
  places:[
   {name:"U-Bahnhof Deák Ferenc tér, Budapest", country:"Ungarn", lat:47.4979, lon:19.0547,
    scene:"Der gesamte Film spielt im Budapester Metronetz."}
  ]},
 {title:"Unterwegs nach Cold Mountain", year:2003, genre:"Drama, Kriegsfilm", regie:"Anthony Minghella", cast:"Jude Law, Nicole Kidman, Renée Zellweger",
  beschreibung:"Ein verwundeter Soldat desertiert im Amerikanischen Bürgerkrieg und wandert heim zu seiner Liebe.",
  places:[
   {name:"Karpaten bei Rucăr", country:"Rumänien", lat:45.4, lon:25.17,
    scene:"Rumäniens Berge stellten North Carolina dar."}
  ]},
 {title:"The Expendables 2", year:2012, genre:"Action", regie:"Simon West", cast:"Sylvester Stallone, Jason Statham, Arnold Schwarzenegger",
  beschreibung:"Eine Söldnertruppe will den Tod eines Kameraden rächen und gerät an einen Waffenhändler.",
  places:[
   {name:"Höhle von Dewetaschka", country:"Bulgarien", lat:43.2333, lon:24.8853,
    scene:"Die riesige Karsthöhle ist Schauplatz des Finales."}
  ]},
 {title:"Leviathan", year:2014, genre:"Drama", regie:"Andrei Swjaginzew", cast:"Alexei Serebrjakow, Jelena Ljadowa",
  beschreibung:"Ein Mann an der russischen Nordküste kämpft gegen einen korrupten Bürgermeister, der sein Land will.",
  places:[
   {name:"Teriberka, Halbinsel Kola", country:"Russland", lat:69.164, lon:35.14,
    scene:"Das Fischerdorf an der Barentssee."}
  ]},
 {title:"Russische Arche", year:2002, genre:"Historienfilm, Experimentalfilm", regie:"Alexander Sokurow", cast:"Sergei Dontsow, Mariya Kuznetsova",
  beschreibung:"Ein Erzähler wandert durch 300 Jahre russischer Geschichte – in einer einzigen ungeschnittenen Einstellung.",
  places:[
   {name:"Eremitage, Sankt Petersburg", country:"Russland", lat:59.9398, lon:30.3146,
    scene:"Die 96-minütige Plansequenz führt durch die Säle des Winterpalasts."}
  ]},
 {title:"Panzerkreuzer Potemkin", year:1925, genre:"Stummfilm, Historienfilm", regie:"Sergei Eisenstein", cast:"Alexander Antonow, Wladimir Barski",
  beschreibung:"Die Matrosen eines Kriegsschiffs meutern 1905 gegen ihre Offiziere – mit blutigen Folgen in Odessa.",
  places:[
   {name:"Potemkinsche Treppe, Odessa", country:"Ukraine", lat:46.4889, lon:30.7427,
    scene:"Die berühmte Szene mit dem Kinderwagen auf der Treppe."}
  ]},
 {title:"Stalker", year:1979, genre:"Science-Fiction, Drama", regie:"Andrei Tarkowski", cast:"Alexander Kaidanowski, Anatoli Solonizyn",
  beschreibung:"Ein Führer bringt zwei Männer durch die verbotene „Zone“ zu einem Raum, der Wünsche erfüllen soll.",
  places:[
   {name:"Jägala-Wasserkraftwerk bei Tallinn", country:"Estland", lat:59.462, lon:25.177,
    scene:"Die verfallenen Industrieanlagen wurden zur Zone."}
  ]},
 {title:"Feuerpferde", year:1965, genre:"Drama", regie:"Sergei Paradschanow", cast:"Iwan Mykolajtschuk, Larisa Kadotschnikowa",
  beschreibung:"Eine tragische Liebesgeschichte unter den Huzulen in den ukrainischen Karpaten.",
  places:[
   {name:"Werchowyna, Karpaten", country:"Ukraine", lat:48.155, lon:24.82,
    scene:"Gedreht in den Huzulen-Dörfern der Karpaten."}
  ]},
 {title:"Der Pianist", year:2002, genre:"Drama, Kriegsfilm", regie:"Roman Polański", cast:"Adrien Brody, Thomas Kretschmann",
  beschreibung:"Der jüdische Pianist Władysław Szpilman überlebt die deutsche Besetzung Warschaus im Versteck.",
  places:[
   {name:"Praga, Warschau", country:"Polen", lat:52.254, lon:21.035,
    scene:"Das alte Viertel stand für das Warschauer Ghetto."}
  ]},
 {title:"Bridge of Spies – Der Unterhändler", year:2015, genre:"Thriller, Drama", regie:"Steven Spielberg", cast:"Tom Hanks, Mark Rylance",
  beschreibung:"Ein Anwalt verhandelt im Kalten Krieg den Austausch eines sowjetischen Spions gegen einen US-Piloten.",
  places:[
   {name:"Breslau", country:"Polen", lat:51.1079, lon:17.0385,
    scene:"Die Altstadt stellte Ost-Berlin dar."},
   {name:"Glienicker Brücke, Berlin/Potsdam", country:"Deutschland", lat:52.4135, lon:13.09,
    scene:"Der Agentenaustausch am Originalschauplatz."}
  ]}
];
