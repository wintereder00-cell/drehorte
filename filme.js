// ===============================================================
// FILMDATEN
// Neuer Film: einen Eintrag kopieren und anpassen.
// Koordinaten: Rechtsklick auf den Ort in Google Maps -> Zahlen kopieren.
// Pflicht: title, year, places (name, country, lat, lon, scene)
// Optional: genre, regie, cast, beschreibung, color,
//   reihe (z. B. "Star Wars"), marke ("Marvel"/"DC"), oscar (true = Oscar als bester Film)
// ===============================================================
const FILMS = [
 {title:"The Sound of Music", year:1965, genre:"Musical", regie:"Robert Wise", cast:"Julie Andrews, Christopher Plummer", oscar:true,
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
 {title:"Before Sunrise", year:1995, reihe:"Before-Trilogie", genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
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
 {title:"Before Sunset", year:2004, reihe:"Before-Trilogie", genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
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
 {title:"Notting Hill", year:1999, genre:"Romantische Komödie", regie:"Roger Michell", cast:"Julia Roberts, Hugh Grant",
  beschreibung:"Ein Londoner Buchhändler verliebt sich in einen weltberühmten Hollywoodstar, der zufällig seinen Laden betritt.",
  places:[
   {name:"Westbourne Park Road, London", country:"Vereinigtes Königreich", lat:51.5161, lon:-0.2054,
    scene:"Das Haus mit der blauen Tür, in dem William wohnt."}
  ]},
 {title:"Braveheart", year:1995, genre:"Historienfilm", regie:"Mel Gibson", cast:"Mel Gibson, Sophie Marceau", oscar:true,
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
 {title:"Indiana Jones und der letzte Kreuzzug", year:1989, reihe:"Indiana Jones", genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Sean Connery",
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
 {title:"Amadeus", year:1984, genre:"Historienfilm, Drama", regie:"Miloš Forman", cast:"F. Murray Abraham, Tom Hulce", oscar:true,
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
 {title:"Der Pate", year:1972, reihe:"Der Pate", genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Marlon Brando, Al Pacino, James Caan", oscar:true,
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
 {title:"Der Pate – Teil II", year:1974, reihe:"Der Pate", genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Al Pacino, Robert De Niro, Robert Duvall", oscar:true,
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
 {title:"Die Bourne Identität", year:2002, reihe:"Bourne", genre:"Action, Thriller", regie:"Doug Liman", cast:"Matt Damon, Franka Potente",
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
 {title:"Gladiator", year:2000, genre:"Historienfilm, Action", regie:"Ridley Scott", cast:"Russell Crowe, Joaquin Phoenix", oscar:true,
  beschreibung:"Der römische General Maximus wird verraten, seine Familie ermordet. Als Gladiator kämpft er sich zurück nach Rom, um sich am Kaiser zu rächen.",
  places:[
   {name:"Val d'Orcia bei Pienza", country:"Italien", lat:43.0745, lon:11.665,
    scene:"Die Weizenfelder, durch die Maximus' Hand im Jenseits streift."},
   {name:"Fort Ricasoli, Kalkara", country:"Malta", lat:35.897, lon:14.526,
    scene:"Hier wurde das Kolosseum für die Arenakämpfe nachgebaut."}
  ]},
 {title:"Der englische Patient", year:1996, genre:"Drama, Romantik", regie:"Anthony Minghella", cast:"Ralph Fiennes, Juliette Binoche, Kristin Scott Thomas", oscar:true,
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
 {title:"Lawrence von Arabien", year:1962, genre:"Historienfilm, Abenteuer", regie:"David Lean", cast:"Peter O'Toole, Alec Guinness, Omar Sharif", oscar:true,
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
 {title:"Die Bourne Verschwörung", year:2004, reihe:"Bourne", genre:"Action, Thriller", regie:"Paul Greengrass", cast:"Matt Damon, Joan Allen",
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
 {title:"Schindlers Liste", year:1993, genre:"Drama, Historienfilm", regie:"Steven Spielberg", cast:"Liam Neeson, Ben Kingsley, Ralph Fiennes", oscar:true,
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
 {title:"Batman Begins", year:2005, reihe:"The Dark Knight", marke:"DC", genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Michael Caine, Liam Neeson",
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
 {title:"The Dark Knight", year:2008, reihe:"The Dark Knight", marke:"DC", genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Heath Ledger, Aaron Eckhart",
  beschreibung:"Batman, Commissioner Gordon und Staatsanwalt Harvey Dent nehmen den Kampf gegen den Joker auf, der Gotham ins Chaos stürzen will.",
  places:[
   {name:"LaSalle Street, Chicago", country:"USA", lat:41.879, lon:-87.6323,
    scene:"Auf dieser Straße überschlägt sich der Lkw des Jokers."},
   {name:"International Finance Centre, Hongkong", country:"Hongkong", lat:22.285, lon:114.159,
    scene:"Batman springt vom Wolkenkratzer, um Lau zu entführen."}
  ]},
 {title:"The Dark Knight Rises", year:2012, reihe:"The Dark Knight", marke:"DC", genre:"Action, Superheldenfilm", regie:"Christopher Nolan", cast:"Christian Bale, Tom Hardy, Anne Hathaway",
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
 {title:"Oppenheimer", year:2023, genre:"Biografie, Drama", regie:"Christopher Nolan", cast:"Cillian Murphy, Emily Blunt, Robert Downey Jr.", oscar:true,
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
 {title:"Departed – Unter Feinden", year:2006, genre:"Krimi, Thriller", regie:"Martin Scorsese", cast:"Leonardo DiCaprio, Matt Damon, Jack Nicholson", oscar:true,
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
 {title:"Rocky", year:1976, genre:"Sportfilm, Drama", regie:"John G. Avildsen", cast:"Sylvester Stallone, Talia Shire", oscar:true,
  beschreibung:"Ein kleiner Boxer aus Philadelphia bekommt die Chance, gegen den Weltmeister anzutreten.",
  places:[
   {name:"Philadelphia Museum of Art", country:"USA", lat:39.9656, lon:-75.181,
    scene:"Rocky sprintet die Treppe hinauf – heute die „Rocky Steps“."}
  ]},
 {title:"Zurück in die Zukunft", year:1985, reihe:"Zurück in die Zukunft", genre:"Science-Fiction, Komödie", regie:"Robert Zemeckis", cast:"Michael J. Fox, Christopher Lloyd",
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
 {title:"Forrest Gump", year:1994, genre:"Drama, Komödie", regie:"Robert Zemeckis", cast:"Tom Hanks, Robin Wright", oscar:true,
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
 {title:"Jurassic Park", year:1993, reihe:"Jurassic Park", genre:"Abenteuer, Science-Fiction", regie:"Steven Spielberg", cast:"Sam Neill, Laura Dern, Jeff Goldblum",
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
 {title:"Spider-Man: Far From Home", year:2019, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jon Watts", cast:"Tom Holland, Zendaya, Jake Gyllenhaal",
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
  ]},
 {title:"Harry Potter und der Stein der Weisen", year:2001, reihe:"Harry Potter", genre:"Fantasy", regie:"Chris Columbus", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Der Waisenjunge Harry erfährt an seinem elften Geburtstag, dass er ein Zauberer ist, und beginnt sein erstes Jahr in Hogwarts.",
  places:[
   {name:"Bahnhof King's Cross, London", country:"Vereinigtes Königreich", lat:51.532, lon:-0.124,
    scene:"Harry sucht das Gleis 9 ¾ und steigt in den Hogwarts-Express."},
   {name:"Alnwick Castle", country:"Vereinigtes Königreich", lat:55.4155, lon:-1.7059,
    scene:"Im Burghof findet die erste Flugstunde mit Madam Hooch statt."},
   {name:"Gloucester Cathedral", country:"Vereinigtes Königreich", lat:51.8676, lon:-2.2467,
    scene:"Der Kreuzgang diente als Korridore von Hogwarts."},
   {name:"Christ Church, Oxford", country:"Vereinigtes Königreich", lat:51.75, lon:-1.256,
    scene:"Auf der Treppe empfängt Professor McGonagall die Erstklässler."},
   {name:"Lacock Abbey", country:"Vereinigtes Königreich", lat:51.4149, lon:-2.1165,
    scene:"Die Räume der Abtei wurden zu Klassenzimmern, hier steht auch der Spiegel Nerhegeb."},
   {name:"Leadenhall Market, London", country:"Vereinigtes Königreich", lat:51.5128, lon:-0.0835,
    scene:"Hagrid führt Harry durch die Gassen zum Tropfenden Kessel."},
   {name:"Australia House, London", country:"Vereinigtes Königreich", lat:51.513, lon:-0.116,
    scene:"Die prunkvolle Halle wurde zur Zaubererbank Gringotts."},
   {name:"Reptilienhaus, London Zoo", country:"Vereinigtes Königreich", lat:51.5353, lon:-0.1534,
    scene:"Harry spricht mit der Schlange und das Glas verschwindet."},
   {name:"Bahnhof Goathland", country:"Vereinigtes Königreich", lat:54.3999, lon:-0.713,
    scene:"Der Bahnhof stellte Hogsmeade dar."}
  ]},
 {title:"Harry Potter und die Kammer des Schreckens", year:2002, reihe:"Harry Potter", genre:"Fantasy", regie:"Chris Columbus", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"In seinem zweiten Jahr hört Harry eine geheimnisvolle Stimme, und Schüler werden versteinert aufgefunden.",
  places:[
   {name:"Picket Post Close, Bracknell", country:"Vereinigtes Königreich", lat:51.404, lon:-0.721,
    scene:"Das Haus der Dursleys im Ligusterweg."},
   {name:"Glenfinnan-Viadukt", country:"Vereinigtes Königreich", lat:56.8763, lon:-5.4318,
    scene:"Harry und Ron verfolgen den Hogwarts-Express im fliegenden Ford Anglia."},
   {name:"Durham Cathedral", country:"Vereinigtes Königreich", lat:54.7735, lon:-1.5762,
    scene:"Im Kreuzgang spuckt Ron nach dem missglückten Zauber Schnecken."},
   {name:"Gloucester Cathedral", country:"Vereinigtes Königreich", lat:51.8679, lon:-2.2463,
    scene:"Die blutige Schrift an der Wand erscheint im Kreuzgang."}
  ]},
 {title:"Harry Potter und der Gefangene von Askaban", year:2004, reihe:"Harry Potter", genre:"Fantasy", regie:"Alfonso Cuarón", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Der gefährliche Sirius Black ist aus Askaban entkommen und scheint es auf Harry abgesehen zu haben.",
  places:[
   {name:"Clachaig Gully, Glencoe", country:"Vereinigtes Königreich", lat:56.663, lon:-5.057,
    scene:"In der Nähe wurde Hagrids Hütte für diesen Film aufgebaut."},
   {name:"Stoney Street, Borough Market", country:"Vereinigtes Königreich", lat:51.505, lon:-0.091,
    scene:"Der Eingang zum Tropfenden Kessel."},
   {name:"Lambeth Bridge, London", country:"Vereinigtes Königreich", lat:51.4943, lon:-0.1225,
    scene:"Der Fahrende Ritter quetscht sich zwischen zwei Doppeldeckerbussen hindurch."}
  ]},
 {title:"Harry Potter und der Feuerkelch", year:2005, reihe:"Harry Potter", genre:"Fantasy", regie:"Mike Newell", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Harry wird auf rätselhafte Weise als vierter Teilnehmer des gefährlichen Trimagischen Turniers ausgewählt.",
  places:[
   {name:"New College, Oxford", country:"Vereinigtes Königreich", lat:51.7545, lon:-1.2513,
    scene:"Im Kreuzgang verwandelt Mad-Eye Moody Draco Malfoy in ein Frettchen."}
  ]},
 {title:"Harry Potter und der Orden des Phönix", year:2007, reihe:"Harry Potter", genre:"Fantasy", regie:"David Yates", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Das Ministerium leugnet Voldemorts Rückkehr, und Harry gründet mit seinen Freunden eine geheime Verteidigungsgruppe.",
  places:[
   {name:"U-Bahnhof Westminster, London", country:"Vereinigtes Königreich", lat:51.501, lon:-0.125,
    scene:"Harry und Mr. Weasley fahren zur Anhörung ins Ministerium."},
   {name:"Claremont Square, Islington", country:"Vereinigtes Königreich", lat:51.531, lon:-0.11,
    scene:"Hier taucht der Grimmauldplatz Nummer 12 zwischen den Häusern auf."}
  ]},
 {title:"Harry Potter und der Halbblutprinz", year:2009, reihe:"Harry Potter", genre:"Fantasy", regie:"David Yates", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Dumbledore bereitet Harry auf den Kampf gegen Voldemort vor, indem er ihm dessen Vergangenheit zeigt.",
  places:[
   {name:"Millennium Bridge, London", country:"Vereinigtes Königreich", lat:51.5095, lon:-0.0985,
    scene:"Todesser bringen die Brücke über der Themse zum Einsturz."},
   {name:"Cliffs of Moher", country:"Irland", lat:52.9715, lon:-9.4309,
    scene:"Die Klippen, an denen Harry und Dumbledore zur Höhle mit dem Horkrux gelangen."}
  ]},
 {title:"Harry Potter und die Heiligtümer des Todes – Teil 1", year:2010, reihe:"Harry Potter", genre:"Fantasy", regie:"David Yates", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Harry, Ron und Hermine verlassen Hogwarts, um Voldemorts Horkruxe zu finden und zu zerstören.",
  places:[
   {name:"Malham Cove", country:"Vereinigtes Königreich", lat:54.072, lon:-2.158,
    scene:"Auf dem Kalksteinplateau schlagen die drei ihr Zelt auf."},
   {name:"Lavenham, Suffolk", country:"Vereinigtes Königreich", lat:52.108, lon:0.797,
    scene:"Das Fachwerkdorf stand für Godric's Hollow."},
   {name:"Piccadilly Circus, London", country:"Vereinigtes Königreich", lat:51.51, lon:-0.134,
    scene:"Nach der Flucht von der Hochzeit landen sie mitten in London."},
   {name:"Freshwater West, Pembrokeshire", country:"Vereinigtes Königreich", lat:51.655, lon:-5.064,
    scene:"Am Strand vor Shell Cottage stirbt Dobby."}
  ]},
 {title:"Harry Potter und die Heiligtümer des Todes – Teil 2", year:2011, reihe:"Harry Potter", genre:"Fantasy", regie:"David Yates", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Die Schlacht um Hogwarts: Harry stellt sich Voldemort zum letzten Mal.",
  places:[
   {name:"Bahnhof King's Cross, London", country:"Vereinigtes Königreich", lat:51.5318, lon:-0.1236,
    scene:"Der Epilog „19 Jahre später“ am Gleis 9 ¾."},
   {name:"Freshwater West, Pembrokeshire", country:"Vereinigtes Königreich", lat:51.6553, lon:-5.0645,
    scene:"Das Shell Cottage, in dem die drei den Einbruch bei Gringotts planen."}
  ]},
 {title:"Der Herr der Ringe: Die Gefährten", year:2001, reihe:"Herr der Ringe", genre:"Fantasy", regie:"Peter Jackson", cast:"Elijah Wood, Ian McKellen, Viggo Mortensen",
  beschreibung:"Der Hobbit Frodo erbt einen mächtigen Ring und muss ihn mit acht Gefährten nach Mordor bringen, um ihn zu zerstören.",
  places:[
   {name:"Hobbiton, Matamata", country:"Neuseeland", lat:-37.8721, lon:175.6829,
    scene:"Das Auenland mit den Hobbithöhlen – heute ein Ausflugsziel."},
   {name:"Kaitoke Regional Park", country:"Neuseeland", lat:-41.064, lon:175.171,
    scene:"Hier stand die Kulisse von Bruchtal."},
   {name:"Arrow River bei Arrowtown", country:"Neuseeland", lat:-44.94, lon:168.83,
    scene:"Die Furt von Bruinen, an der Arwen die Ringgeister abwehrt."}
  ]},
 {title:"Der Herr der Ringe: Die zwei Türme", year:2002, reihe:"Herr der Ringe", genre:"Fantasy", regie:"Peter Jackson", cast:"Elijah Wood, Ian McKellen, Viggo Mortensen",
  beschreibung:"Die Gefährten sind getrennt: Frodo und Sam ziehen mit Gollum nach Mordor, die anderen verteidigen Rohan gegen Saruman.",
  places:[
   {name:"Mount Sunday", country:"Neuseeland", lat:-43.554, lon:171.055,
    scene:"Auf dem Hügel stand Edoras, die Hauptstadt von Rohan."},
   {name:"Harcourt Park, Upper Hutt", country:"Neuseeland", lat:-41.11, lon:175.11,
    scene:"Der Park wurde zu den Gärten von Isengard."}
  ]},
 {title:"Der Herr der Ringe: Die Rückkehr des Königs", year:2003, reihe:"Herr der Ringe", genre:"Fantasy", regie:"Peter Jackson", cast:"Elijah Wood, Ian McKellen, Viggo Mortensen", oscar:true,
  beschreibung:"Frodo und Sam erreichen den Schicksalsberg, während Aragorn die Menschen in die letzte Schlacht um Mittelerde führt.",
  places:[
   {name:"Mount Ngauruhoe, Tongariro", country:"Neuseeland", lat:-39.1567, lon:175.632,
    scene:"Der Vulkan war Vorbild und Kulisse für den Schicksalsberg."},
   {name:"Putangirua Pinnacles", country:"Neuseeland", lat:-41.45, lon:175.23,
    scene:"Die Felsnadeln säumen den Weg zu den Pfaden der Toten."}
  ]},
 {title:"Der Hobbit: Eine unerwartete Reise", year:2012, reihe:"Der Hobbit", genre:"Fantasy", regie:"Peter Jackson", cast:"Martin Freeman, Ian McKellen, Richard Armitage",
  beschreibung:"Bilbo Beutlin schließt sich dreizehn Zwergen an, die ihr Königreich vom Drachen Smaug zurückerobern wollen.",
  places:[
   {name:"Hobbiton, Matamata", country:"Neuseeland", lat:-37.8724, lon:175.6834,
    scene:"Bilbos Höhle in Beutelsend, wo die Zwerge einfallen."}
  ]},
 {title:"Der Hobbit: Smaugs Einöde", year:2013, reihe:"Der Hobbit", genre:"Fantasy", regie:"Peter Jackson", cast:"Martin Freeman, Ian McKellen, Richard Armitage",
  beschreibung:"Die Gemeinschaft erreicht den Einsamen Berg, wo der Drache Smaug auf seinem Schatz liegt.",
  places:[
   {name:"Pelorus River", country:"Neuseeland", lat:-41.3, lon:173.57,
    scene:"Die Flucht der Zwerge in Fässern den Fluss hinab."}
  ]},
 {title:"Der Hobbit: Die Schlacht der fünf Heere", year:2014, reihe:"Der Hobbit", genre:"Fantasy", regie:"Peter Jackson", cast:"Martin Freeman, Ian McKellen, Richard Armitage",
  beschreibung:"Nach Smaugs Angriff auf Seestadt kämpfen Zwerge, Elben, Menschen und Orks um den Schatz des Erebor.",
  places:[
   {name:"Stone Street Studios, Wellington", country:"Neuseeland", lat:-41.302, lon:174.811,
    scene:"Die Schlacht entstand größtenteils in Peter Jacksons Studios."}
  ]},
 {title:"Jäger des verlorenen Schatzes", year:1981, reihe:"Indiana Jones", genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Karen Allen",
  beschreibung:"Archäologe Indiana Jones soll die Bundeslade finden, bevor die Nazis sie in die Hände bekommen.",
  places:[
   {name:"Huleia River, Kauaʻi", country:"USA", lat:21.95, lon:-159.4,
    scene:"Indy flieht zum Wasserflugzeug am Ende der Eröffnungssequenz."},
   {name:"Kairouan", country:"Tunesien", lat:35.6781, lon:10.0963,
    scene:"Die Altstadt stellte Kairo dar."},
   {name:"U-Boot-Bunker La Pallice, La Rochelle", country:"Frankreich", lat:46.1585, lon:-1.223,
    scene:"Die Basis, zu der das U-Boot mit der Lade fährt."}
  ]},
 {title:"Indiana Jones und der Tempel des Todes", year:1984, reihe:"Indiana Jones", genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Kate Capshaw",
  beschreibung:"Indy gerät in Indien an einen grausamen Kult, der heilige Steine und Kinder aus einem Dorf geraubt hat.",
  places:[
   {name:"Kandy", country:"Sri Lanka", lat:7.2906, lon:80.6337,
    scene:"Die Hügel um Kandy stellten Indien dar, unter anderem für die Hängebrücke."}
  ]},
 {title:"Indiana Jones und das Königreich des Kristallschädels", year:2008, reihe:"Indiana Jones", genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Shia LaBeouf, Cate Blanchett",
  beschreibung:"Im Jahr 1957 jagt Indy einen geheimnisvollen Kristallschädel, auf den es auch der sowjetische Geheimdienst abgesehen hat.",
  places:[
   {name:"Yale University, New Haven", country:"USA", lat:41.311, lon:-72.9267,
    scene:"Der Campus wurde zu Indys Marshall College für die Motorrad-Verfolgung."}
  ]},
 {title:"Indiana Jones und das Rad des Schicksals", year:2023, reihe:"Indiana Jones", genre:"Abenteuer", regie:"James Mangold", cast:"Harrison Ford, Phoebe Waller-Bridge, Mads Mikkelsen",
  beschreibung:"Indy jagt ein antikes Gerät des Archimedes, mit dem sich angeblich die Zeit beeinflussen lässt.",
  places:[
   {name:"Ohr des Dionysios, Syrakus", country:"Italien", lat:37.0745, lon:15.277,
    scene:"Die Höhle im antiken Steinbruch von Syrakus."},
   {name:"Fès", country:"Marokko", lat:34.064, lon:-4.973,
    scene:"Die Tuk-Tuk-Verfolgungsjagd durch die Gassen."}
  ]},
 {title:"Mission: Impossible", year:1996, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"Brian De Palma", cast:"Tom Cruise, Jon Voight, Emmanuelle Béart",
  beschreibung:"Nach einem gescheiterten Einsatz in Prag wird Ethan Hunt verdächtigt, ein Verräter zu sein, und muss seinen Namen reinwaschen.",
  places:[
   {name:"Bahnhof Liverpool Street, London", country:"Vereinigtes Königreich", lat:51.5178, lon:-0.0823,
    scene:"Ethan telefoniert mit Kittridge und beobachtet ihn dabei."}
  ]},
 {title:"Mission: Impossible II", year:2000, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"John Woo", cast:"Tom Cruise, Thandiwe Newton",
  beschreibung:"Ethan muss einen abtrünnigen Agenten aufhalten, der einen tödlichen Virus stehlen will.",
  places:[
   {name:"Dead Horse Point, Utah", country:"USA", lat:38.47, lon:-109.742,
    scene:"Ethan klettert in der Eröffnung ohne Sicherung an der Felswand."}
  ]},
 {title:"Mission: Impossible III", year:2006, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"J. J. Abrams", cast:"Tom Cruise, Philip Seymour Hoffman",
  beschreibung:"Ethan will eigentlich aussteigen, gerät aber in einen tödlichen Konflikt mit einem Waffenhändler.",
  places:[
   {name:"Reggia di Caserta", country:"Italien", lat:41.0729, lon:14.3261,
    scene:"Das Schloss stellte den Vatikan dar, in den Ethan eindringt."},
   {name:"Xitang", country:"China", lat:30.944, lon:120.893,
    scene:"Die Wasserstadt stand für die Szenen in Shanghai."}
  ]},
 {title:"Mission: Impossible – Phantom Protokoll", year:2011, reihe:"Mission: Impossible", genre:"Action, Agentenfilm", regie:"Brad Bird", cast:"Tom Cruise, Jeremy Renner, Simon Pegg",
  beschreibung:"Nach einem Anschlag auf den Kreml wird die IMF abgeschaltet, und Ethans Team ist auf sich allein gestellt.",
  places:[
   {name:"Burj Khalifa, Dubai", country:"Vereinigte Arabische Emirate", lat:25.1972, lon:55.2744,
    scene:"Tom Cruise klettert selbst an der Fassade des höchsten Gebäudes der Welt."}
  ]},
 {title:"Das Bourne Ultimatum", year:2007, reihe:"Bourne", genre:"Action, Thriller", regie:"Paul Greengrass", cast:"Matt Damon, Julia Stiles, David Strathairn",
  beschreibung:"Bourne folgt einer Spur zu dem Programm, das ihn zum Killer gemacht hat.",
  places:[
   {name:"Bahnhof Waterloo, London", country:"Vereinigtes Königreich", lat:51.503, lon:-0.113,
    scene:"Bourne lotst einen Journalisten durch die überwachte Bahnhofshalle."},
   {name:"Medina von Tanger", country:"Marokko", lat:35.7855, lon:-5.8125,
    scene:"Die Verfolgungsjagd über die Dächer."}
  ]},
 {title:"Before Midnight", year:2013, reihe:"Before-Trilogie", genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
  beschreibung:"Achtzehn Jahre nach ihrer ersten Begegnung verbringen Jesse und Céline, inzwischen ein Paar mit Kindern, einen Sommer in Griechenland.",
  places:[
   {name:"Kardamyli, Peloponnes", country:"Griechenland", lat:36.888, lon:22.233,
    scene:"Der Ort, an dem die Familie ihren Urlaub verbringt."}
  ]},
 {title:"Matrix", year:1999, reihe:"Matrix", genre:"Science-Fiction, Action", regie:"Lana und Lilly Wachowski", cast:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
  beschreibung:"Der Hacker Neo erfährt, dass die Welt eine Simulation ist, mit der Maschinen die Menschheit kontrollieren.",
  places:[
   {name:"Martin Place, Sydney", country:"Australien", lat:-33.8676, lon:151.21,
    scene:"Die Szene mit der Frau im roten Kleid."},
   {name:"Fox Studios Australia, Sydney", country:"Australien", lat:-33.892, lon:151.227,
    scene:"Viele Szenen entstanden in den Studios in Sydney."}
  ]},
 {title:"Matrix Reloaded", year:2003, reihe:"Matrix", genre:"Science-Fiction, Action", regie:"Lana und Lilly Wachowski", cast:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
  beschreibung:"Neo und seine Verbündeten kämpfen um Zion, während die Maschinen die letzte Stadt der Menschen angreifen.",
  places:[
   {name:"Alameda Naval Air Station", country:"USA", lat:37.786, lon:-122.308,
    scene:"Für die Autobahnjagd wurde hier eigens ein Freeway gebaut."}
  ]},
 {title:"Matrix Revolutions", year:2003, reihe:"Matrix", genre:"Science-Fiction, Action", regie:"Lana und Lilly Wachowski", cast:"Keanu Reeves, Hugo Weaving, Carrie-Anne Moss",
  beschreibung:"Der Krieg zwischen Menschen und Maschinen erreicht seinen Höhepunkt.",
  places:[
   {name:"Fox Studios Australia, Sydney", country:"Australien", lat:-33.8923, lon:151.2273,
    scene:"Der Film entstand fast vollständig in den Studios."}
  ]},
 {title:"Vergessene Welt: Jurassic Park", year:1997, reihe:"Jurassic Park", genre:"Abenteuer, Science-Fiction", regie:"Steven Spielberg", cast:"Jeff Goldblum, Julianne Moore",
  beschreibung:"Auf einer zweiten Insel leben die Dinosaurier frei – und eine Firma will sie einfangen.",
  places:[
   {name:"Fern Canyon, Kalifornien", country:"USA", lat:41.401, lon:-124.065,
    scene:"Die farnbewachsene Schlucht im Redwood-Nationalpark."}
  ]},
 {title:"Jurassic Park III", year:2001, reihe:"Jurassic Park", genre:"Abenteuer, Science-Fiction", regie:"Joe Johnston", cast:"Sam Neill, William H. Macy, Téa Leoni",
  beschreibung:"Alan Grant wird unter einem Vorwand auf die Dinosaurierinsel gelockt.",
  places:[
   {name:"Kauaʻi", country:"USA", lat:22.05, lon:-159.5,
    scene:"Die Dschungel Hawaiis stellten erneut die Insel Isla Sorna dar."}
  ]},
 {title:"Zurück in die Zukunft II", year:1989, reihe:"Zurück in die Zukunft", genre:"Science-Fiction, Komödie", regie:"Robert Zemeckis", cast:"Michael J. Fox, Christopher Lloyd",
  beschreibung:"Marty und Doc reisen ins Jahr 2015 und müssen danach ein verändertes 1985 reparieren.",
  places:[
   {name:"Universal Studios, Courthouse Square", country:"USA", lat:34.138, lon:-118.353,
    scene:"Der Platz von Hill Valley steht auf dem Studiogelände."}
  ]},
 {title:"Zurück in die Zukunft III", year:1990, reihe:"Zurück in die Zukunft", genre:"Science-Fiction, Western", regie:"Robert Zemeckis", cast:"Michael J. Fox, Christopher Lloyd, Mary Steenburgen",
  beschreibung:"Marty reist in den Wilden Westen von 1885, um Doc zu retten.",
  places:[
   {name:"Monument Valley", country:"USA", lat:36.998, lon:-110.0985,
    scene:"Marty landet mit dem DeLorean mitten im Westen."},
   {name:"Railtown 1897, Jamestown", country:"USA", lat:37.953, lon:-120.422,
    scene:"Die historische Eisenbahn für das Zugfinale."}
  ]},
 {title:"Fluch der Karibik", year:2003, reihe:"Fluch der Karibik", genre:"Abenteuer", regie:"Gore Verbinski", cast:"Johnny Depp, Orlando Bloom, Keira Knightley",
  beschreibung:"Der exzentrische Pirat Jack Sparrow hilft einem Schmied, die entführte Elizabeth von verfluchten Piraten zu befreien.",
  places:[
   {name:"Wallilabou Bay", country:"St. Vincent und die Grenadinen", lat:13.247, lon:-61.273,
    scene:"Jack Sparrow erreicht auf seinem sinkenden Boot Port Royal."}
  ]},
 {title:"Pirates of the Caribbean – Fluch der Karibik 2", year:2006, reihe:"Fluch der Karibik", genre:"Abenteuer", regie:"Gore Verbinski", cast:"Johnny Depp, Orlando Bloom, Keira Knightley",
  beschreibung:"Jack Sparrow schuldet Davy Jones seine Seele und sucht verzweifelt einen Ausweg.",
  places:[
   {name:"Indian River, Dominica", country:"Dominica", lat:15.58, lon:-61.458,
    scene:"Der Fluss zur Hütte der Wahrsagerin Tia Dalma."}
  ]},
 {title:"Pirates of the Caribbean – Am Ende der Welt", year:2007, reihe:"Fluch der Karibik", genre:"Abenteuer", regie:"Gore Verbinski", cast:"Johnny Depp, Orlando Bloom, Keira Knightley",
  beschreibung:"Die Piraten müssen Jack aus Davy Jones' Reich holen, um sich gegen die East India Company zu verbünden.",
  places:[
   {name:"Bonneville Salt Flats", country:"USA", lat:40.757, lon:-113.89,
    scene:"Die weiße Salzwüste wurde zu Davy Jones' Reich."}
  ]},
 {title:"Pirates of the Caribbean – Fremde Gezeiten", year:2011, reihe:"Fluch der Karibik", genre:"Abenteuer", regie:"Rob Marshall", cast:"Johnny Depp, Penélope Cruz",
  beschreibung:"Jack Sparrow sucht den Jungbrunnen und trifft auf Blackbeard.",
  places:[
   {name:"Altstadt von San Juan", country:"USA", lat:18.4655, lon:-66.1057,
    scene:"Puerto Rico stand für Szenen in der Karibik."}
  ]},
 {title:"Pirates of the Caribbean – Salazars Rache", year:2017, reihe:"Fluch der Karibik", genre:"Abenteuer", regie:"Joachim Rønning, Espen Sandberg", cast:"Johnny Depp, Javier Bardem",
  beschreibung:"Ein untoter Kapitän jagt Jack Sparrow, der den Dreizack Poseidons sucht.",
  places:[
   {name:"Gold Coast, Queensland", country:"Australien", lat:-27.95, lon:153.4,
    scene:"Der Film wurde größtenteils in Australien gedreht."}
  ]},
 {title:"Die zwölf Geschworenen", year:1957, genre:"Drama", regie:"Sidney Lumet", cast:"Henry Fonda, Lee J. Cobb",
  beschreibung:"Ein einziger Geschworener zweifelt an der Schuld eines Angeklagten und überzeugt nach und nach die anderen.",
  places:[
   {name:"New York County Courthouse", country:"USA", lat:40.7143, lon:-74.0018,
    scene:"Die Außenansicht des Gerichts in der Eröffnung."}
  ]},
 {title:"Zwischen Himmel und Hölle", year:1963, genre:"Krimi, Thriller", regie:"Akira Kurosawa", cast:"Toshirō Mifune, Tatsuya Nakadai",
  beschreibung:"Ein reicher Fabrikant soll Lösegeld für den entführten Sohn seines Chauffeurs zahlen.",
  places:[
   {name:"Yokohama", country:"Japan", lat:35.4437, lon:139.638,
    scene:"Gondos Villa thront über der Stadt, durch deren Viertel der Täter gejagt wird."}
  ]},
 {title:"Die Verurteilten", year:1994, genre:"Drama", regie:"Frank Darabont", cast:"Tim Robbins, Morgan Freeman",
  beschreibung:"Ein unschuldig verurteilter Banker freundet sich im Gefängnis mit einem Mithäftling an und verliert nie die Hoffnung.",
  places:[
   {name:"Ohio State Reformatory, Mansfield", country:"USA", lat:40.7843, lon:-82.5018,
    scene:"Das ehemalige Gefängnis spielte Shawshank."},
   {name:"Sandy Point, St. Croix", country:"USA", lat:17.683, lon:-64.896,
    scene:"Der Strand von „Zihuatanejo“ im Finale."}
  ]},
 {title:"City of God", year:2002, genre:"Krimi, Drama", regie:"Fernando Meirelles", cast:"Alexandre Rodrigues, Leandro Firmino",
  beschreibung:"Ein Junge aus einer Favela in Rio wird Fotograf und dokumentiert den Aufstieg der Drogenbanden.",
  places:[
   {name:"Cidade de Deus, Rio de Janeiro", country:"Brasilien", lat:-22.948, lon:-43.363,
    scene:"Das Viertel, um das sich die Geschichte dreht."}
  ]},
 {title:"Yi Yi", year:2000, genre:"Drama", regie:"Edward Yang", cast:"Wu Nien-jen, Jonathan Chang",
  beschreibung:"Ein Jahr im Leben einer Mittelstandsfamilie in Taipeh, von einer Hochzeit bis zu einer Beerdigung.",
  places:[
   {name:"Taipeh", country:"Taiwan", lat:25.033, lon:121.5654,
    scene:"Der Film spielt in den Wohnungen und Straßen Taipehs."}
  ]},
 {title:"Parasite", year:2019, genre:"Thriller, Satire", regie:"Bong Joon-ho", cast:"Song Kang-ho, Choi Woo-shik, Park So-dam", oscar:true,
  beschreibung:"Eine arme Familie schleicht sich nach und nach als Angestellte in den Haushalt einer reichen Familie ein.",
  places:[
   {name:"Treppen am Jahamun-Tunnel, Seoul", country:"Südkorea", lat:37.586, lon:126.969,
    scene:"Die Familie flieht im Regen die Treppen hinab."},
   {name:"Supermarkt in Ahyeon-dong, Seoul", country:"Südkorea", lat:37.56, lon:126.956,
    scene:"Das Viertel der Familie Kim."}
  ]},
 {title:"Ran", year:1985, genre:"Historienfilm, Drama", regie:"Akira Kurosawa", cast:"Tatsuya Nakadai, Akira Terao",
  beschreibung:"Ein alter Fürst teilt sein Reich unter seinen Söhnen auf und löst damit einen blutigen Krieg aus – frei nach King Lear.",
  places:[
   {name:"Burg Himeji", country:"Japan", lat:34.8394, lon:134.6939,
    scene:"Die Burg diente als Festung eines der Söhne."},
   {name:"Aso-Vulkan, Kumamoto", country:"Japan", lat:32.884, lon:131.104,
    scene:"Die Grasebenen für die großen Schlachtszenen."}
  ]},
 {title:"Hass", year:1995, genre:"Drama", regie:"Mathieu Kassovitz", cast:"Vincent Cassel, Hubert Koundé, Saïd Taghmaoui",
  beschreibung:"24 Stunden im Leben von drei jungen Männern aus einer Pariser Banlieue nach einer Nacht voller Unruhen.",
  places:[
   {name:"La Noé, Chanteloup-les-Vignes", country:"Frankreich", lat:48.98, lon:2.03,
    scene:"Die Hochhaussiedlung, in der die drei leben."}
  ]},
 {title:"Schlacht um Algier", year:1966, genre:"Kriegsfilm, Drama", regie:"Gillo Pontecorvo", cast:"Brahim Hadjadj, Jean Martin",
  beschreibung:"Der Unabhängigkeitskampf der Algerier gegen die französische Kolonialmacht in den 1950ern.",
  places:[
   {name:"Kasbah von Algier", country:"Algerien", lat:36.785, lon:3.06,
    scene:"Gedreht in den originalen Gassen der Kasbah."}
  ]},
 {title:"Ich bin Kuba", year:1964, genre:"Drama", regie:"Michail Kalatosow", cast:"Sergio Corrieri, Salvador Wood",
  beschreibung:"Vier Episoden über das Leben in Kuba vor der Revolution, berühmt für seine schwebenden Kamerafahrten.",
  places:[
   {name:"Hotel Capri, Havanna", country:"Kuba", lat:23.143, lon:-82.385,
    scene:"Die legendäre Plansequenz vom Dach bis in den Pool."}
  ]},
 {title:"There Will Be Blood", year:2007, genre:"Drama", regie:"Paul Thomas Anderson", cast:"Daniel Day-Lewis, Paul Dano",
  beschreibung:"Ein skrupelloser Ölsucher baut im Kalifornien um 1900 ein Imperium auf.",
  places:[
   {name:"Marfa, Texas", country:"USA", lat:30.3095, lon:-104.0206,
    scene:"Die Ranchlandschaft um Marfa stellte Little Boston dar."}
  ]},
 {title:"Die Frau, die singt – Incendies", year:2010, genre:"Drama", regie:"Denis Villeneuve", cast:"Lubna Azabal, Mélissa Désormeaux-Poulin",
  beschreibung:"Zwei Zwillinge reisen in den Nahen Osten, um das Geheimnis ihrer verstorbenen Mutter aufzudecken.",
  places:[
   {name:"Amman", country:"Jordanien", lat:31.9454, lon:35.9284,
    scene:"Jordanien stand für das ungenannte Land im Libanon-Konflikt."}
  ]},
 {title:"Wege zum Ruhm", year:1957, genre:"Kriegsfilm", regie:"Stanley Kubrick", cast:"Kirk Douglas, Adolphe Menjou",
  beschreibung:"Im Ersten Weltkrieg verteidigt ein Oberst drei Soldaten, die wegen Feigheit hingerichtet werden sollen.",
  places:[
   {name:"Schloss Schleißheim", country:"Deutschland", lat:48.249, lon:11.568,
    scene:"Das Schloss bei München wurde zum französischen Hauptquartier."}
  ]},
 {title:"Andrei Rubljow", year:1966, genre:"Historienfilm, Drama", regie:"Andrei Tarkowski", cast:"Anatoli Solonizyn, Iwan Lapikow",
  beschreibung:"Das Leben des Ikonenmalers Andrei Rubljow im Russland des 15. Jahrhunderts.",
  places:[
   {name:"Wladimir", country:"Russland", lat:56.129, lon:40.407,
    scene:"Gedreht in Wladimir und Susdal an originalen Kirchen."}
  ]},
 {title:"Apocalypse Now", year:1979, genre:"Kriegsfilm", regie:"Francis Ford Coppola", cast:"Martin Sheen, Marlon Brando, Robert Duvall",
  beschreibung:"Ein Captain soll im Vietnamkrieg einen abtrünnigen Oberst im kambodschanischen Dschungel töten.",
  places:[
   {name:"Baler", country:"Philippinen", lat:15.759, lon:121.562,
    scene:"Der Hubschrauberangriff zu Wagners „Walkürenritt“ und Kilgores Surfstrand."},
   {name:"Pagsanjan", country:"Philippinen", lat:14.263, lon:121.456,
    scene:"Der Fluss und die Kulisse von Kurtz' Tempel."}
  ]},
 {title:"Die Reise nach Tokio", year:1953, genre:"Drama", regie:"Yasujirō Ozu", cast:"Chishū Ryū, Setsuko Hara",
  beschreibung:"Ein altes Ehepaar besucht seine erwachsenen Kinder in Tokio, die kaum Zeit für sie haben.",
  places:[
   {name:"Onomichi", country:"Japan", lat:34.4089, lon:133.205,
    scene:"Die Heimatstadt des alten Paares."}
  ]},
 {title:"Porträt einer jungen Frau in Flammen", year:2019, genre:"Drama, Romantik", regie:"Céline Sciamma", cast:"Noémie Merlant, Adèle Haenel",
  beschreibung:"Eine Malerin soll im 18. Jahrhundert heimlich das Hochzeitsporträt einer jungen Frau malen.",
  places:[
   {name:"Halbinsel Quiberon, Bretagne", country:"Frankreich", lat:47.477, lon:-3.143,
    scene:"Die wilde Küste, an der die beiden Frauen spazieren."}
  ]},
 {title:"Das Leben ist schön", year:1997, genre:"Tragikomödie", regie:"Roberto Benigni", cast:"Roberto Benigni, Nicoletta Braschi",
  beschreibung:"Ein jüdischer Vater schützt seinen Sohn im Konzentrationslager, indem er alles als Spiel ausgibt.",
  places:[
   {name:"Piazza Grande, Arezzo", country:"Italien", lat:43.4633, lon:11.8796,
    scene:"Die Altstadt, in der Guido Dora den Hof macht."}
  ]},
 {title:"Barry Lyndon", year:1975, genre:"Historienfilm", regie:"Stanley Kubrick", cast:"Ryan O'Neal, Marisa Berenson",
  beschreibung:"Der Aufstieg und Fall eines irischen Glücksritters im 18. Jahrhundert.",
  places:[
   {name:"Castle Howard", country:"Vereinigtes Königreich", lat:54.121, lon:-0.907,
    scene:"Das Schloss stellte einen Teil der Lyndon-Anwesen dar."}
  ]},
 {title:"Fanny und Alexander", year:1982, genre:"Drama", regie:"Ingmar Bergman", cast:"Bertil Guve, Pernilla Allwin",
  beschreibung:"Zwei Kinder wachsen in einer großbürgerlichen Familie in Schweden auf, bis ihre Mutter einen strengen Bischof heiratet.",
  places:[
   {name:"Uppsala", country:"Schweden", lat:59.8586, lon:17.6389,
    scene:"Die Stadt, in der die Familie Ekdahl lebt."}
  ]},
 {title:"Do the Right Thing", year:1989, genre:"Drama", regie:"Spike Lee", cast:"Spike Lee, Danny Aiello",
  beschreibung:"Am heißesten Tag des Jahres eskalieren in einem Block in Brooklyn die Spannungen zwischen den Bewohnern.",
  places:[
   {name:"Stuyvesant Avenue, Bed-Stuy", country:"USA", lat:40.683, lon:-73.933,
    scene:"Der gesamte Film spielt in diesem Häuserblock."}
  ]},
 {title:"Good Will Hunting", year:1997, genre:"Drama", regie:"Gus Van Sant", cast:"Matt Damon, Robin Williams, Ben Affleck",
  beschreibung:"Ein genialer junger Hausmeister am MIT bekommt Hilfe von einem Therapeuten.",
  places:[
   {name:"Public Garden, Boston", country:"USA", lat:42.354, lon:-71.07,
    scene:"Sean und Will reden auf der Parkbank am Teich."},
   {name:"L Street Tavern, South Boston", country:"USA", lat:42.333, lon:-71.042,
    scene:"Die Stammkneipe der Freunde."}
  ]},
 {title:"Dune: Part Two", year:2024, genre:"Science-Fiction", regie:"Denis Villeneuve", cast:"Timothée Chalamet, Zendaya, Austin Butler",
  beschreibung:"Paul Atreides verbündet sich mit den Fremen und führt einen Rachefeldzug gegen das Haus Harkonnen.",
  places:[
   {name:"Wadi Rum", country:"Jordanien", lat:29.579, lon:35.423,
    scene:"Die Felswüste wurde erneut zum Planeten Arrakis."},
   {name:"Wüste bei Liwa", country:"Vereinigte Arabische Emirate", lat:23.103, lon:53.797,
    scene:"Die hohen Dünen der Tiefen Wüste."}
  ]},
 {title:"Einer flog über das Kuckucksnest", year:1975, genre:"Drama", regie:"Miloš Forman", cast:"Jack Nicholson, Louise Fletcher", oscar:true,
  beschreibung:"Ein Häftling lässt sich in eine Psychiatrie verlegen und rebelliert gegen die strenge Oberschwester.",
  places:[
   {name:"Oregon State Hospital, Salem", country:"USA", lat:44.937, lon:-123.005,
    scene:"Gedreht in einer echten psychiatrischen Klinik."}
  ]},
 {title:"In the Mood for Love", year:2000, genre:"Romantik, Drama", regie:"Wong Kar-wai", cast:"Tony Leung, Maggie Cheung",
  beschreibung:"Zwei Nachbarn im Hongkong der 1960er entdecken, dass ihre Ehepartner eine Affäre haben.",
  places:[
   {name:"Angkor Wat", country:"Kambodscha", lat:13.4125, lon:103.867,
    scene:"Chow flüstert sein Geheimnis in eine Mauerspalte des Tempels."}
  ]},
 {title:"Das Urteil von Nürnberg", year:1961, genre:"Drama", regie:"Stanley Kramer", cast:"Spencer Tracy, Burt Lancaster, Marlene Dietrich",
  beschreibung:"Ein amerikanischer Richter verhandelt nach dem Krieg gegen vier deutsche Juristen.",
  places:[
   {name:"Justizpalast, Nürnberg", country:"Deutschland", lat:49.4545, lon:11.048,
    scene:"Außenaufnahmen am Ort der Nürnberger Prozesse."}
  ]},
 {title:"Persona", year:1966, genre:"Drama", regie:"Ingmar Bergman", cast:"Bibi Andersson, Liv Ullmann",
  beschreibung:"Eine Krankenschwester pflegt eine Schauspielerin, die verstummt ist – und ihre Identitäten beginnen zu verschwimmen.",
  places:[
   {name:"Fårö", country:"Schweden", lat:57.92, lon:19.15,
    scene:"Bergmans Insel, auf der das Ferienhaus steht."}
  ]},
 {title:"Paris, Texas", year:1984, genre:"Drama", regie:"Wim Wenders", cast:"Harry Dean Stanton, Nastassja Kinski",
  beschreibung:"Ein Mann taucht nach vier Jahren aus der Wüste auf und sucht seine verschwundene Frau.",
  places:[
   {name:"Terlingua, Texas", country:"USA", lat:29.321, lon:-103.616,
    scene:"Travis wandert in der Eröffnung durch die Wüste."}
  ]},
 {title:"Der Club der toten Dichter", year:1989, genre:"Drama", regie:"Peter Weir", cast:"Robin Williams, Ethan Hawke",
  beschreibung:"Ein unkonventioneller Lehrer begeistert die Schüler eines strengen Internats für Poesie.",
  places:[
   {name:"St. Andrew's School, Middletown", country:"USA", lat:39.492, lon:-75.651,
    scene:"Das Internat stellte die Welton Academy dar."}
  ]},
 {title:"Central Station", year:1998, genre:"Drama", regie:"Walter Salles", cast:"Fernanda Montenegro, Vinícius de Oliveira",
  beschreibung:"Eine Briefschreiberin hilft einem Jungen, seinen Vater im Nordosten Brasiliens zu finden.",
  places:[
   {name:"Bahnhof Central do Brasil, Rio", country:"Brasilien", lat:-22.904, lon:-43.19,
    scene:"Dora schreibt hier Briefe für Analphabeten."}
  ]},
 {title:"Twin Peaks – Der Film", year:1992, genre:"Mystery, Horror", regie:"David Lynch", cast:"Sheryl Lee, Kyle MacLachlan",
  beschreibung:"Die letzten sieben Tage im Leben von Laura Palmer.",
  places:[
   {name:"Twede's Cafe, North Bend", country:"USA", lat:47.495, lon:-121.786,
    scene:"Das Double R Diner mit dem berühmten Kirschkuchen."}
  ]},
 {title:"Das Ding aus einer anderen Welt", year:1982, genre:"Horror, Science-Fiction", regie:"John Carpenter", cast:"Kurt Russell, Wilford Brimley",
  beschreibung:"Eine Forschungsstation in der Antarktis wird von einem Wesen heimgesucht, das jeden imitieren kann.",
  places:[
   {name:"Stewart, British Columbia", country:"Kanada", lat:55.938, lon:-129.988,
    scene:"Die verschneiten Außenaufnahmen der Station."}
  ]},
 {title:"Django Unchained", year:2012, genre:"Western", regie:"Quentin Tarantino", cast:"Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
  beschreibung:"Ein befreiter Sklave wird Kopfgeldjäger, um seine Frau von einem Plantagenbesitzer zu befreien.",
  places:[
   {name:"Evergreen Plantation, Louisiana", country:"USA", lat:30.023, lon:-90.677,
    scene:"Die Plantage stellte Candyland dar."}
  ]},
 {title:"Rote Laterne", year:1991, genre:"Drama", regie:"Zhang Yimou", cast:"Gong Li",
  beschreibung:"Eine junge Frau wird die vierte Ehefrau eines reichen Mannes und gerät in einen Machtkampf.",
  places:[
   {name:"Anwesen der Familie Qiao, Shanxi", country:"China", lat:37.396, lon:112.44,
    scene:"Das historische Anwesen ist der einzige Schauplatz."}
  ]},
 {title:"Das Schweigen der Lämmer", year:1991, genre:"Thriller", regie:"Jonathan Demme", cast:"Jodie Foster, Anthony Hopkins", oscar:true,
  beschreibung:"Eine FBI-Anwärterin bittet den inhaftierten Psychiater Hannibal Lecter um Hilfe bei der Jagd auf einen Serienmörder.",
  places:[
   {name:"Layton, Pennsylvania", country:"USA", lat:40.089, lon:-79.746,
    scene:"Das Haus von Buffalo Bill."}
  ]},
 {title:"Das Wort", year:1955, genre:"Drama", regie:"Carl Theodor Dreyer", cast:"Henrik Malberg, Emil Hass Christensen",
  beschreibung:"Ein Bauer und seine drei Söhne ringen in einem dänischen Dorf mit dem Glauben.",
  places:[
   {name:"Vedersø", country:"Dänemark", lat:56.255, lon:8.13,
    scene:"Das Dorf des Dichters Kaj Munk, auf dessen Stück der Film basiert."}
  ]},
 {title:"Drei Farben: Rot", year:1994, genre:"Drama", regie:"Krzysztof Kieślowski", cast:"Irène Jacob, Jean-Louis Trintignant",
  beschreibung:"Ein Model in Genf lernt einen pensionierten Richter kennen, der seine Nachbarn abhört.",
  places:[
   {name:"Genf", country:"Schweiz", lat:46.2044, lon:6.1432,
    scene:"Der Film spielt in Genf."}
  ]},
 {title:"Die Mädchen von Rochefort", year:1967, genre:"Musical", regie:"Jacques Demy", cast:"Catherine Deneuve, Françoise Dorléac, Gene Kelly",
  beschreibung:"Zwei Zwillingsschwestern träumen in einer französischen Hafenstadt von der großen Liebe.",
  places:[
   {name:"Place Colbert, Rochefort", country:"Frankreich", lat:45.937, lon:-0.962,
    scene:"Der Platz wurde für den Film bunt bemalt."}
  ]},
 {title:"Perfect Days", year:2023, genre:"Drama", regie:"Wim Wenders", cast:"Kōji Yakusho",
  beschreibung:"Ein Toilettenreiniger in Tokio findet Glück in seinem einfachen, geregelten Alltag.",
  places:[
   {name:"Shibuya, Tokio", country:"Japan", lat:35.672, lon:139.686,
    scene:"Die Designer-Toiletten des Projekts „The Tokyo Toilet“."}
  ]},
 {title:"Heat", year:1995, genre:"Krimi, Thriller", regie:"Michael Mann", cast:"Al Pacino, Robert De Niro",
  beschreibung:"Ein Polizist und ein Profi-Dieb liefern sich ein Katz-und-Maus-Spiel in Los Angeles.",
  places:[
   {name:"Downtown Los Angeles", country:"USA", lat:34.051, lon:-118.255,
    scene:"Die legendäre Schießerei nach dem Bankraub."}
  ]},
 {title:"Später Frühling", year:1949, genre:"Drama", regie:"Yasujirō Ozu", cast:"Setsuko Hara, Chishū Ryū",
  beschreibung:"Eine junge Frau will ihren verwitweten Vater nicht verlassen und heiraten.",
  places:[
   {name:"Kamakura", country:"Japan", lat:35.3192, lon:139.5467,
    scene:"Die Stadt am Meer, in der Vater und Tochter leben."}
  ]},
 {title:"Der Elefantenmensch", year:1980, genre:"Drama", regie:"David Lynch", cast:"John Hurt, Anthony Hopkins",
  beschreibung:"Ein Arzt holt im viktorianischen London einen schwer entstellten Mann aus einer Jahrmarktsschau.",
  places:[
   {name:"Shad Thames, London", country:"Vereinigtes Königreich", lat:51.503, lon:-0.072,
    scene:"Die viktorianischen Lagerhausgassen."}
  ]},
 {title:"Pather Panchali", year:1955, genre:"Drama", regie:"Satyajit Ray", cast:"Subir Banerjee, Kanu Banerjee",
  beschreibung:"Die Kindheit des Jungen Apu in einem armen Dorf in Bengalen.",
  places:[
   {name:"Boral, Westbengalen", country:"Indien", lat:22.472, lon:88.387,
    scene:"Das Dorf bei Kalkutta, in dem gedreht wurde."}
  ]},
 {title:"Begegnung", year:1945, genre:"Liebesfilm", regie:"David Lean", cast:"Celia Johnson, Trevor Howard",
  beschreibung:"Eine verheiratete Frau und ein Arzt treffen sich jede Woche am Bahnhof und verlieben sich.",
  places:[
   {name:"Bahnhof Carnforth", country:"Vereinigtes Königreich", lat:54.129, lon:-2.77,
    scene:"Der Bahnhof mit der berühmten Uhr."}
  ]},
 {title:"Rocco und seine Brüder", year:1960, genre:"Drama", regie:"Luchino Visconti", cast:"Alain Delon, Renato Salvatori, Annie Girardot",
  beschreibung:"Eine Familie aus Süditalien zieht nach Mailand und zerbricht an der Großstadt.",
  places:[
   {name:"Dach des Mailänder Doms", country:"Italien", lat:45.4642, lon:9.19,
    scene:"Rocco und Nadia trennen sich auf dem Domdach."}
  ]},
 {title:"Das siebente Siegel", year:1957, genre:"Drama", regie:"Ingmar Bergman", cast:"Max von Sydow, Gunnar Björnstrand",
  beschreibung:"Ein Ritter spielt Schach mit dem Tod, um Zeit zu gewinnen.",
  places:[
   {name:"Hovs Hallar", country:"Schweden", lat:56.484, lon:12.699,
    scene:"Die Felsküste der Schachpartie und des Totentanzes."}
  ]},
 {title:"Hundstage", year:1975, genre:"Krimi, Drama", regie:"Sidney Lumet", cast:"Al Pacino, John Cazale",
  beschreibung:"Ein Banküberfall in Brooklyn gerät außer Kontrolle und wird zum Medienspektakel.",
  places:[
   {name:"Prospect Park West, Windsor Terrace", country:"USA", lat:40.659, lon:-73.979,
    scene:"Die Bank stand an dieser Straßenecke."}
  ]},
 {title:"Psycho", year:1960, genre:"Horror, Thriller", regie:"Alfred Hitchcock", cast:"Anthony Perkins, Janet Leigh",
  beschreibung:"Eine Sekretärin flieht mit gestohlenem Geld und landet im abgelegenen Bates Motel.",
  places:[
   {name:"Universal Studios Hollywood", country:"USA", lat:34.1385, lon:-118.3535,
    scene:"Bates Motel und Haus stehen bis heute auf dem Studiogelände."}
  ]},
 {title:"Chinatown", year:1974, genre:"Neo-Noir", regie:"Roman Polański", cast:"Jack Nicholson, Faye Dunaway",
  beschreibung:"Ein Privatdetektiv stößt im Los Angeles der 1930er auf einen Skandal um die Wasserversorgung.",
  places:[
   {name:"Echo Park Lake, Los Angeles", country:"USA", lat:34.073, lon:-118.261,
    scene:"Jake beobachtet Mulwray beim Bootfahren."}
  ]},
 {title:"No Country for Old Men", year:2007, genre:"Thriller, Western", regie:"Joel und Ethan Coen", cast:"Josh Brolin, Javier Bardem, Tommy Lee Jones", oscar:true,
  beschreibung:"Ein Jäger findet zwei Millionen Dollar und wird von einem gnadenlosen Killer verfolgt.",
  places:[
   {name:"Las Vegas, New Mexico", country:"USA", lat:35.594, lon:-105.223,
    scene:"New Mexico stand für das texanische Grenzland."}
  ]},
 {title:"Children of Men", year:2006, genre:"Science-Fiction", regie:"Alfonso Cuarón", cast:"Clive Owen, Julianne Moore",
  beschreibung:"In einer Zukunft ohne Geburten soll ein Mann die erste schwangere Frau seit 18 Jahren in Sicherheit bringen.",
  places:[
   {name:"Battersea Power Station", country:"Vereinigtes Königreich", lat:51.482, lon:-0.144,
    scene:"Das Kraftwerk ist das „Ministerium der Künste“ mit dem fliegenden Schwein."}
  ]},
 {title:"Malcolm X", year:1992, genre:"Biografie", regie:"Spike Lee", cast:"Denzel Washington, Angela Bassett",
  beschreibung:"Das Leben des Bürgerrechtlers Malcolm X.",
  places:[
   {name:"Audubon Ballroom, Harlem", country:"USA", lat:40.842, lon:-73.939,
    scene:"Der Ort des Attentats wurde für die Schlussszene genutzt."}
  ]},
 {title:"Terminator 2 – Tag der Abrechnung", year:1991, genre:"Science-Fiction, Action", regie:"James Cameron", cast:"Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
  beschreibung:"Ein umprogrammierter Terminator soll den jungen John Connor vor einem neuen Killer-Roboter schützen.",
  places:[
   {name:"Bull Creek Channel, Sepulveda Basin", country:"USA", lat:34.172, lon:-118.488,
    scene:"Die Lkw-Jagd im Betonkanal."},
   {name:"Cyberdyne-Gebäude, Fremont", country:"USA", lat:37.525, lon:-121.959,
    scene:"Das Hightech-Gebäude, das gesprengt wird."}
  ]},
 {title:"Das Leben der Anderen", year:2006, genre:"Drama", regie:"Florian Henckel von Donnersmarck", cast:"Ulrich Mühe, Sebastian Koch, Martina Gedeck",
  beschreibung:"Ein Stasi-Offizier überwacht einen Schriftsteller und beginnt, mit ihm zu sympathisieren.",
  places:[
   {name:"Stasi-Zentrale, Berlin-Lichtenberg", country:"Deutschland", lat:52.5146, lon:13.488,
    scene:"Gedreht in der ehemaligen Stasi-Zentrale."}
  ]},
 {title:"Manche mögen's heiß", year:1959, genre:"Komödie", regie:"Billy Wilder", cast:"Marilyn Monroe, Tony Curtis, Jack Lemmon",
  beschreibung:"Zwei Musiker verkleiden sich als Frauen, um vor der Mafia zu fliehen.",
  places:[
   {name:"Hotel del Coronado", country:"USA", lat:32.6809, lon:-117.1784,
    scene:"Das Hotel stellte das Seminole Ritz in Florida dar."}
  ]},
 {title:"The Fall", year:2006, genre:"Fantasy, Drama", regie:"Tarsem Singh", cast:"Lee Pace, Catinca Untaru",
  beschreibung:"Ein verletzter Stuntman erzählt einem Mädchen im Krankenhaus ein fantastisches Abenteuer.",
  places:[
   {name:"Jantar Mantar, Jaipur", country:"Indien", lat:26.9248, lon:75.8246,
    scene:"Das Observatorium als surreale Treppenlandschaft."},
   {name:"Blaue Stadt, Jodhpur", country:"Indien", lat:26.295, lon:73.023,
    scene:"Die Flucht über die blauen Dächer."}
  ]},
 {title:"Fahrraddiebe", year:1948, genre:"Drama", regie:"Vittorio De Sica", cast:"Lamberto Maggiorani, Enzo Staiola",
  beschreibung:"Einem Arbeiter im Nachkriegsrom wird das Fahrrad gestohlen, das er für seinen Job braucht.",
  places:[
   {name:"Porta Portese, Rom", country:"Italien", lat:41.882, lon:12.47,
    scene:"Vater und Sohn suchen das Fahrrad auf dem Markt."}
  ]},
 {title:"Opfer", year:1986, genre:"Drama", regie:"Andrei Tarkowski", cast:"Erland Josephson, Susan Fleetwood",
  beschreibung:"Am Vorabend eines Atomkriegs bietet ein Mann Gott ein Opfer an.",
  places:[
   {name:"Närsholmen, Gotland", country:"Schweden", lat:57.258, lon:18.68,
    scene:"Das Haus, das am Ende brennt."}
  ]},
 {title:"Reporter des Satans", year:1951, genre:"Drama", regie:"Billy Wilder", cast:"Kirk Douglas, Jan Sterling",
  beschreibung:"Ein Reporter macht aus einem verschütteten Mann eine Sensation.",
  places:[
   {name:"Gallup, New Mexico", country:"USA", lat:35.5281, lon:-108.7426,
    scene:"Die Wüste um Gallup."}
  ]},
 {title:"Chungking Express", year:1994, genre:"Romantik, Drama", regie:"Wong Kar-wai", cast:"Tony Leung, Faye Wong, Takeshi Kaneshiro",
  beschreibung:"Zwei Polizisten mit Liebeskummer in Hongkong und zwei Frauen, die ihr Leben streifen.",
  places:[
   {name:"Chungking Mansions", country:"Hongkong", lat:22.2965, lon:114.172,
    scene:"Das Hochhaus, in dem die Frau mit der blonden Perücke untertaucht."},
   {name:"Mid-Levels-Rolltreppe", country:"Hongkong", lat:22.283, lon:114.154,
    scene:"Faye beobachtet von hier die Wohnung des Polizisten."}
  ]},
 {title:"Wer hat Angst vor Virginia Woolf?", year:1966, genre:"Drama", regie:"Mike Nichols", cast:"Elizabeth Taylor, Richard Burton",
  beschreibung:"Ein Professorenpaar zerfleischt sich bei einem nächtlichen Besuch vor einem jungen Paar.",
  places:[
   {name:"Smith College, Northampton", country:"USA", lat:42.318, lon:-72.64,
    scene:"Der Campus stellte die Universität dar."}
  ]},
 {title:"Irrtum im Jenseits", year:1946, genre:"Fantasy, Romantik", regie:"Michael Powell, Emeric Pressburger", cast:"David Niven, Kim Hunter",
  beschreibung:"Ein Pilot überlebt einen Absturz, den er nicht hätte überleben sollen, und muss im Himmel um sein Leben kämpfen.",
  places:[
   {name:"Saunton Sands, Devon", country:"Vereinigtes Königreich", lat:51.115, lon:-4.219,
    scene:"Peter wird an den Strand gespült."}
  ]},
 {title:"Die Nacht", year:1961, genre:"Drama", regie:"Michelangelo Antonioni", cast:"Marcello Mastroianni, Jeanne Moreau",
  beschreibung:"Ein Tag und eine Nacht im Leben eines entfremdeten Ehepaars in Mailand.",
  places:[
   {name:"Pirelli-Hochhaus, Mailand", country:"Italien", lat:45.484, lon:9.203,
    scene:"Der moderne Turm aus der Eröffnung."}
  ]},
 {title:"Nostalghia", year:1983, genre:"Drama", regie:"Andrei Tarkowski", cast:"Oleg Jankowski, Erland Josephson",
  beschreibung:"Ein russischer Dichter reist durch Italien und trifft einen Mann, der die Welt retten will.",
  places:[
   {name:"Bagno Vignoni", country:"Italien", lat:43.028, lon:11.619,
    scene:"Das Thermalbecken, das Andrei mit einer Kerze durchquert."}
  ]},
 {title:"4 Monate, 3 Wochen und 2 Tage", year:2007, genre:"Drama", regie:"Cristian Mungiu", cast:"Anamaria Marinca, Laura Vasiliu",
  beschreibung:"Im Rumänien von 1987 hilft eine Studentin ihrer Freundin bei einer illegalen Abtreibung.",
  places:[
   {name:"Bukarest", country:"Rumänien", lat:44.4268, lon:26.1025,
    scene:"Gedreht in Plattenbauten und Hotels Bukarests."}
  ]},
 {title:"Für ein paar Dollar mehr", year:1965, genre:"Western", regie:"Sergio Leone", cast:"Clint Eastwood, Lee Van Cleef, Gian Maria Volonté",
  beschreibung:"Zwei Kopfgeldjäger tun sich zusammen, um den Banditen El Indio zu fassen.",
  places:[
   {name:"Los Albaricoques, Almería", country:"Spanien", lat:36.95, lon:-2.13,
    scene:"Das weiße Dorf ist Schauplatz des Finales."}
  ]},
 {title:"Die Brücke am Kwai", year:1957, genre:"Kriegsfilm", regie:"David Lean", cast:"Alec Guinness, William Holden", oscar:true,
  beschreibung:"Britische Kriegsgefangene müssen für die Japaner eine Eisenbahnbrücke bauen.",
  places:[
   {name:"Kitulgala", country:"Sri Lanka", lat:6.989, lon:80.417,
    scene:"Hier wurde die Brücke gebaut und gesprengt."}
  ]},
 {title:"Verliebt in scharfe Kurven", year:1962, genre:"Komödie", regie:"Dino Risi", cast:"Vittorio Gassman, Jean-Louis Trintignant",
  beschreibung:"Ein Lebemann nimmt einen schüchternen Studenten auf eine wilde Fahrt durch Italien mit.",
  places:[
   {name:"Castiglioncello", country:"Italien", lat:43.406, lon:10.413,
    scene:"Die Badeorte an der toskanischen Küste."}
  ]},
 {title:"Anatomie eines Mordes", year:1959, genre:"Gerichtsfilm", regie:"Otto Preminger", cast:"James Stewart, Lee Remick",
  beschreibung:"Ein Anwalt verteidigt einen Offizier, der den mutmaßlichen Vergewaltiger seiner Frau erschossen hat.",
  places:[
   {name:"Marquette County Courthouse, Michigan", country:"USA", lat:46.543, lon:-87.395,
    scene:"Gedreht am Ort des echten Prozesses."}
  ]},
 {title:"In ihren Augen", year:2009, genre:"Thriller, Drama", regie:"Juan José Campanella", cast:"Ricardo Darín, Soledad Villamil",
  beschreibung:"Ein pensionierter Ermittler schreibt einen Roman über einen ungelösten Mordfall.",
  places:[
   {name:"Estadio Tomás Adolfo Ducó, Buenos Aires", country:"Argentinien", lat:-34.644, lon:-58.413,
    scene:"Die berühmte Plansequenz im Fußballstadion."}
  ]},
 {title:"Vergiss mein nicht!", year:2004, genre:"Romantik, Science-Fiction", regie:"Michel Gondry", cast:"Jim Carrey, Kate Winslet",
  beschreibung:"Ein Paar lässt sich die Erinnerungen aneinander löschen.",
  places:[
   {name:"Montauk", country:"USA", lat:41.071, lon:-71.857,
    scene:"Der winterliche Strand, an dem sich Joel und Clementine kennenlernen."}
  ]},
 {title:"Kes", year:1969, genre:"Drama", regie:"Ken Loach", cast:"David Bradley",
  beschreibung:"Ein Junge aus einer Bergarbeiterstadt zieht einen Turmfalken groß.",
  places:[
   {name:"Barnsley", country:"Vereinigtes Königreich", lat:53.5526, lon:-1.4797,
    scene:"Billys Heimatstadt in Yorkshire."}
  ]},
 {title:"Capernaum – Stadt der Hoffnung", year:2018, genre:"Drama", regie:"Nadine Labaki", cast:"Zain Al Rafeea",
  beschreibung:"Ein zwölfjähriger Junge aus den Slums von Beirut verklagt seine Eltern.",
  places:[
   {name:"Beirut", country:"Libanon", lat:33.8938, lon:35.5018,
    scene:"Gedreht in den Armenvierteln Beiruts."}
  ]},
 {title:"Manila in den Klauen des Neon", year:1975, genre:"Drama", regie:"Lino Brocka", cast:"Bembol Roco, Hilda Koronel",
  beschreibung:"Ein Fischer sucht in Manila seine verschwundene Geliebte.",
  places:[
   {name:"Manila", country:"Philippinen", lat:14.5995, lon:120.9842,
    scene:"Die Straßen der philippinischen Hauptstadt."}
  ]},
 {title:"Im Namen des Vaters", year:1993, genre:"Drama", regie:"Jim Sheridan", cast:"Daniel Day-Lewis, Pete Postlethwaite",
  beschreibung:"Ein junger Nordire wird zu Unrecht für einen IRA-Anschlag verurteilt.",
  places:[
   {name:"Kilmainham Gaol, Dublin", country:"Irland", lat:53.3418, lon:-6.3096,
    scene:"Das ehemalige Gefängnis."}
  ]},
 {title:"Erbarmungslos", year:1992, genre:"Western", regie:"Clint Eastwood", cast:"Clint Eastwood, Gene Hackman, Morgan Freeman", oscar:true,
  beschreibung:"Ein gealterter Revolverheld nimmt einen letzten Auftrag an.",
  places:[
   {name:"Longview, Alberta", country:"Kanada", lat:50.529, lon:-114.242,
    scene:"Die Prärie Albertas stellte Wyoming dar."}
  ]},
 {title:"Time of the Gypsies", year:1988, genre:"Drama", regie:"Emir Kusturica", cast:"Davor Dujmović, Bora Todorović",
  beschreibung:"Ein Roma-Junge mit telekinetischen Kräften gerät in die Fänge eines Kriminellen.",
  places:[
   {name:"Šuto Orizari, Skopje", country:"Nordmazedonien", lat:42.03, lon:21.425,
    scene:"Gedreht in der Roma-Siedlung bei Skopje."}
  ]},
 {title:"Aftersun", year:2022, genre:"Drama", regie:"Charlotte Wells", cast:"Paul Mescal, Frankie Corio",
  beschreibung:"Eine Frau erinnert sich an einen Urlaub mit ihrem Vater in der Türkei.",
  places:[
   {name:"Ölüdeniz, Fethiye", country:"Türkei", lat:36.55, lon:29.12,
    scene:"Der Ferienort an der Türkischen Riviera."}
  ]},
 {title:"Happy Together", year:1997, genre:"Drama, Romantik", regie:"Wong Kar-wai", cast:"Tony Leung, Leslie Cheung",
  beschreibung:"Ein Paar aus Hongkong reist nach Argentinien und trennt sich immer wieder.",
  places:[
   {name:"Iguazú-Wasserfälle", country:"Argentinien", lat:-25.6953, lon:-54.4367,
    scene:"Das Ziel, das die beiden gemeinsam sehen wollten."}
  ]},
 {title:"Der Clou", year:1973, genre:"Krimi, Komödie", regie:"George Roy Hill", cast:"Paul Newman, Robert Redford", oscar:true,
  beschreibung:"Zwei Trickbetrüger planen im Chicago der 1930er einen großen Coup.",
  places:[
   {name:"Karussell am Santa Monica Pier", country:"USA", lat:34.0099, lon:-118.4963,
    scene:"Henry wohnt über dem Karussell."}
  ]},
 {title:"Drive My Car", year:2021, genre:"Drama", regie:"Ryūsuke Hamaguchi", cast:"Hidetoshi Nishijima, Tōko Miura",
  beschreibung:"Ein Theaterregisseur trauert um seine Frau und lässt sich von einer jungen Fahrerin chauffieren.",
  places:[
   {name:"Hiroshima", country:"Japan", lat:34.3853, lon:132.4553,
    scene:"Die Stadt, in der Kafuku ein Theaterstück inszeniert."}
  ]},
 {title:"Shame", year:2011, genre:"Drama", regie:"Steve McQueen", cast:"Michael Fassbender, Carey Mulligan",
  beschreibung:"Ein erfolgreicher New Yorker kämpft mit seiner Sucht, als seine Schwester auftaucht.",
  places:[
   {name:"The Standard Hotel, High Line", country:"USA", lat:40.741, lon:-74.008,
    scene:"Die Szene vor den großen Glasfenstern."}
  ]},
 {title:"RRR", year:2022, genre:"Action, Historienfilm", regie:"S. S. Rajamouli", cast:"N. T. Rama Rao Jr., Ram Charan",
  beschreibung:"Zwei Revolutionäre kämpfen in den 1920ern gegen die britische Kolonialherrschaft.",
  places:[
   {name:"Mariinski-Palast, Kiew", country:"Ukraine", lat:50.448, lon:30.537,
    scene:"Vor dem Palast wurde der Tanz zu „Naatu Naatu“ gedreht."}
  ]},
 {title:"Rosemaries Baby", year:1968, genre:"Horror", regie:"Roman Polański", cast:"Mia Farrow, John Cassavetes",
  beschreibung:"Eine junge Frau wird schwanger und ahnt, dass ihre Nachbarn Böses planen.",
  places:[
   {name:"The Dakota, New York", country:"USA", lat:40.7764, lon:-73.9762,
    scene:"Das Haus stellte das Bramford dar."}
  ]},
 {title:"Die letzte Vorstellung", year:1971, genre:"Drama", regie:"Peter Bogdanovich", cast:"Timothy Bottoms, Jeff Bridges, Cybill Shepherd",
  beschreibung:"Jugendliche wachsen in einer sterbenden texanischen Kleinstadt auf.",
  places:[
   {name:"Archer City, Texas", country:"USA", lat:33.595, lon:-98.626,
    scene:"Die Heimatstadt des Romanautors Larry McMurtry."}
  ]},
 {title:"Auf Wiedersehen, Kinder", year:1987, genre:"Drama", regie:"Louis Malle", cast:"Gaspard Manesse, Raphael Fejtö",
  beschreibung:"In einem katholischen Internat versteckt ein Priester jüdische Kinder vor den Nazis.",
  places:[
   {name:"Provins", country:"Frankreich", lat:48.56, lon:3.299,
    scene:"Die mittelalterliche Stadt mit dem Internat."}
  ]},
 {title:"The Straight Story – Eine wahre Geschichte", year:1999, genre:"Drama", regie:"David Lynch", cast:"Richard Farnsworth, Sissy Spacek",
  beschreibung:"Ein alter Mann fährt mit einem Rasenmäher hunderte Kilometer, um seinen Bruder zu besuchen.",
  places:[
   {name:"Laurens, Iowa", country:"USA", lat:42.847, lon:-94.852,
    scene:"Alvins Heimatort und Startpunkt der Reise."}
  ]},
 {title:"Full Metal Jacket", year:1987, genre:"Kriegsfilm", regie:"Stanley Kubrick", cast:"Matthew Modine, R. Lee Ermey, Vincent D'Onofrio",
  beschreibung:"Junge Rekruten werden für den Vietnamkrieg gedrillt und erleben die Schlacht um Hue.",
  places:[
   {name:"Beckton Gas Works, London", country:"Vereinigtes Königreich", lat:51.515, lon:0.07,
    scene:"Das Industriegelände stellte die Ruinen von Hue dar."}
  ]},
 {title:"Alles über meine Mutter", year:1999, genre:"Drama", regie:"Pedro Almodóvar", cast:"Cecilia Roth, Penélope Cruz",
  beschreibung:"Nach dem Tod ihres Sohnes sucht eine Krankenschwester in Barcelona dessen Vater.",
  places:[
   {name:"Barcelona", country:"Spanien", lat:41.3875, lon:2.1753,
    scene:"Manuela taucht in Barcelonas Theaterwelt ein."}
  ]},
 {title:"Moonlight", year:2016, genre:"Drama", regie:"Barry Jenkins", cast:"Trevante Rhodes, Mahershala Ali", oscar:true,
  beschreibung:"Drei Lebensabschnitte eines jungen schwarzen Mannes in Miami.",
  places:[
   {name:"Liberty City, Miami", country:"USA", lat:25.833, lon:-80.22,
    scene:"Gedreht in dem Viertel, in dem Regisseur und Autor aufwuchsen."}
  ]},
 {title:"Die große Illusion", year:1937, genre:"Kriegsfilm, Drama", regie:"Jean Renoir", cast:"Jean Gabin, Erich von Stroheim",
  beschreibung:"Französische Offiziere planen im Ersten Weltkrieg die Flucht aus deutscher Gefangenschaft.",
  places:[
   {name:"Hohkönigsburg, Elsass", country:"Frankreich", lat:48.2494, lon:7.3446,
    scene:"Die Burg wurde zur Festung Wintersborn."}
  ]},
 {title:"Little Women", year:2019, genre:"Drama", regie:"Greta Gerwig", cast:"Saoirse Ronan, Emma Watson, Florence Pugh",
  beschreibung:"Die vier March-Schwestern wachsen nach dem Bürgerkrieg in Massachusetts auf.",
  places:[
   {name:"Concord, Massachusetts", country:"USA", lat:42.46, lon:-71.349,
    scene:"Die Stadt, in der Louisa May Alcott lebte."}
  ]},
 {title:"Threads", year:1984, genre:"Drama, Science-Fiction", regie:"Mick Jackson", cast:"Karen Meagher, Reece Dinsdale",
  beschreibung:"Ein Atomkrieg zerstört das Leben der Menschen in Sheffield.",
  places:[
   {name:"Sheffield", country:"Vereinigtes Königreich", lat:53.3811, lon:-1.4701,
    scene:"Die Stadt, in der die Katastrophe gezeigt wird."}
  ]},
 {title:"Der große Irrtum", year:1970, genre:"Drama", regie:"Bernardo Bertolucci", cast:"Jean-Louis Trintignant, Stefania Sandrelli",
  beschreibung:"Ein Mann will im faschistischen Italien unbedingt dazugehören und wird zum Mörder.",
  places:[
   {name:"Palazzo della Civiltà Italiana, Rom", country:"Italien", lat:41.8364, lon:12.465,
    scene:"Die faschistische Architektur im EUR-Viertel."}
  ]},
 {title:"Die Unbestechlichen", year:1976, genre:"Thriller", regie:"Alan J. Pakula", cast:"Robert Redford, Dustin Hoffman",
  beschreibung:"Zwei Reporter der Washington Post decken den Watergate-Skandal auf.",
  places:[
   {name:"Watergate-Komplex, Washington", country:"USA", lat:38.8995, lon:-77.055,
    scene:"Der Ort des Einbruchs, mit dem alles beginnt."}
  ]},
 {title:"Amores Perros", year:2000, genre:"Drama, Thriller", regie:"Alejandro G. Iñárritu", cast:"Gael García Bernal, Emilio Echevarría",
  beschreibung:"Ein Autounfall in Mexiko-Stadt verbindet drei Geschichten.",
  places:[
   {name:"Mexiko-Stadt", country:"Mexiko", lat:19.4326, lon:-99.1332,
    scene:"Gedreht in den Straßen der Hauptstadt."}
  ]},
 {title:"Der Tod kennt keine Wiederkehr", year:1973, genre:"Neo-Noir", regie:"Robert Altman", cast:"Elliott Gould",
  beschreibung:"Privatdetektiv Philip Marlowe hilft einem Freund und gerät in einen Mordfall.",
  places:[
   {name:"Malibu Colony", country:"USA", lat:34.031, lon:-118.73,
    scene:"Das Strandhaus der Wades."}
  ]},
 {title:"Winterschlaf", year:2014, genre:"Drama", regie:"Nuri Bilge Ceylan", cast:"Haluk Bilginer, Melisa Sözen",
  beschreibung:"Ein ehemaliger Schauspieler führt ein Hotel in Anatolien und streitet mit Frau und Schwester.",
  places:[
   {name:"Kappadokien", country:"Türkei", lat:38.6431, lon:34.8289,
    scene:"Das Höhlenhotel in der Felslandschaft."}
  ]},
 {title:"Im Westen nichts Neues", year:2022, genre:"Kriegsfilm", regie:"Edward Berger", cast:"Felix Kammerer, Albrecht Schuch, Daniel Brühl",
  beschreibung:"Ein junger Soldat erlebt die Schrecken der Westfront im Ersten Weltkrieg.",
  places:[
   {name:"Milovice", country:"Tschechien", lat:50.226, lon:14.889,
    scene:"Das ehemalige Militärgelände bei Prag wurde zum Schlachtfeld."}
  ]},
 {title:"Lilja 4-ever", year:2002, genre:"Drama", regie:"Lukas Moodysson", cast:"Oksana Akinshina",
  beschreibung:"Ein Mädchen aus einer ehemaligen Sowjetrepublik wird nach Schweden gelockt.",
  places:[
   {name:"Paldiski", country:"Estland", lat:59.356, lon:24.053,
    scene:"Die ehemalige sowjetische Marinestadt."}
  ]},
 {title:"3 Idiots", year:2009, genre:"Komödie, Drama", regie:"Rajkumar Hirani", cast:"Aamir Khan, Kareena Kapoor",
  beschreibung:"Zwei Freunde suchen ihren verschwundenen Studienkollegen, der das Bildungssystem herausforderte.",
  places:[
   {name:"Pangong Tso, Ladakh", country:"Indien", lat:33.75, lon:78.6,
    scene:"Der Bergsee des berühmten Finales."},
   {name:"IIM Bangalore", country:"Indien", lat:12.895, lon:77.601,
    scene:"Der Campus stellte die Ingenieurshochschule dar."}
  ]},
 {title:"Der General", year:1926, genre:"Komödie, Stummfilm", regie:"Buster Keaton", cast:"Buster Keaton, Marion Mack",
  beschreibung:"Ein Lokführer jagt im Bürgerkrieg seiner gestohlenen Lokomotive hinterher.",
  places:[
   {name:"Cottage Grove, Oregon", country:"USA", lat:43.798, lon:-123.059,
    scene:"Hier stürzte eine echte Lok von der brennenden Brücke."}
  ]},
 {title:"Cléo – Mittwoch zwischen 5 und 7", year:1962, genre:"Drama", regie:"Agnès Varda", cast:"Corinne Marchand",
  beschreibung:"Eine Sängerin wartet in Paris zwei Stunden auf einen Arztbefund.",
  places:[
   {name:"Parc Montsouris, Paris", country:"Frankreich", lat:48.8222, lon:2.3378,
    scene:"Cléo trifft im Park einen Soldaten."}
  ]},
 {title:"Schreie und Flüstern", year:1972, genre:"Drama", regie:"Ingmar Bergman", cast:"Harriet Andersson, Liv Ullmann",
  beschreibung:"Drei Schwestern und eine Magd am Sterbebett einer der Schwestern.",
  places:[
   {name:"Taxinge-Näsby", country:"Schweden", lat:59.231, lon:17.352,
    scene:"Das Herrenhaus mit den roten Räumen."}
  ]},
 {title:"Die amerikanische Nacht", year:1973, genre:"Komödie, Drama", regie:"François Truffaut", cast:"Jacqueline Bisset, Jean-Pierre Léaud",
  beschreibung:"Ein Film über die Dreharbeiten zu einem Film und das Chaos hinter den Kulissen.",
  places:[
   {name:"Studios de la Victorine, Nizza", country:"Frankreich", lat:43.688, lon:7.237,
    scene:"Die Studios, in denen der Film-im-Film entsteht."}
  ]},
 {title:"12 Years a Slave", year:2013, genre:"Drama", regie:"Steve McQueen", cast:"Chiwetel Ejiofor, Michael Fassbender", oscar:true,
  beschreibung:"Ein freier Schwarzer wird 1841 entführt und in die Sklaverei verkauft.",
  places:[
   {name:"Felicity Plantation, Louisiana", country:"USA", lat:30.064, lon:-90.859,
    scene:"Eine der Plantagen, auf denen gedreht wurde."}
  ]},
 {title:"Im Zeichen des Bösen", year:1958, genre:"Film noir", regie:"Orson Welles", cast:"Charlton Heston, Orson Welles, Janet Leigh",
  beschreibung:"Ein mexikanischer Drogenfahnder gerät an einen korrupten amerikanischen Polizisten.",
  places:[
   {name:"Windward Avenue, Venice", country:"USA", lat:33.989, lon:-118.471,
    scene:"Die berühmte Plansequenz zu Beginn."}
  ]},
 {title:"Sonnenaufgang – Lied von zwei Menschen", year:1927, genre:"Stummfilm, Drama", regie:"F. W. Murnau", cast:"George O'Brien, Janet Gaynor",
  beschreibung:"Ein Bauer soll seine Frau für eine Geliebte aus der Stadt ertränken.",
  places:[
   {name:"Lake Arrowhead", country:"USA", lat:34.248, lon:-117.189,
    scene:"Der See der Bootsfahrt."}
  ]},
 {title:"Zwei Banditen", year:1969, genre:"Western", regie:"George Roy Hill", cast:"Paul Newman, Robert Redford",
  beschreibung:"Zwei Bankräuber fliehen vor einer Verfolgertruppe bis nach Bolivien.",
  places:[
   {name:"Grafton, Utah", country:"USA", lat:37.167, lon:-113.08,
    scene:"Die Geisterstadt mit der berühmten Fahrrad-Szene."}
  ]},
 {title:"Gesprengte Ketten", year:1963, genre:"Kriegsfilm", regie:"John Sturges", cast:"Steve McQueen, Richard Attenborough",
  beschreibung:"Alliierte Kriegsgefangene planen eine Massenflucht aus einem deutschen Lager.",
  places:[
   {name:"Füssen, Allgäu", country:"Deutschland", lat:47.57, lon:10.7,
    scene:"Die Motorradjagd durch die bayerische Landschaft."}
  ]},
 {title:"Black Swan", year:2010, genre:"Thriller", regie:"Darren Aronofsky", cast:"Natalie Portman, Mila Kunis",
  beschreibung:"Eine Ballerina verliert sich in ihrer Rolle als Schwanenkönigin.",
  places:[
   {name:"Lincoln Center, New York", country:"USA", lat:40.7725, lon:-73.9835,
    scene:"Das Zuhause des New York City Ballet."}
  ]},
 {title:"Frühling, Sommer, Herbst, Winter... und Frühling", year:2003, genre:"Drama", regie:"Kim Ki-duk", cast:"Oh Young-su, Kim Ki-duk",
  beschreibung:"Ein Mönch und sein Schüler leben in einem schwimmenden Tempel.",
  places:[
   {name:"Jusanji-See, Cheongsong", country:"Südkorea", lat:36.406, lon:129.037,
    scene:"Der See mit dem schwimmenden Tempel."}
  ]},
 {title:"Das grüne Leuchten", year:1986, genre:"Drama", regie:"Éric Rohmer", cast:"Marie Rivière",
  beschreibung:"Eine einsame Pariserin sucht im Sommer nach Gesellschaft und Liebe.",
  places:[
   {name:"Biarritz", country:"Frankreich", lat:43.4832, lon:-1.5586,
    scene:"Delphine beobachtet den Sonnenuntergang."}
  ]},
 {title:"Mad Max: Fury Road", year:2015, genre:"Action", regie:"George Miller", cast:"Tom Hardy, Charlize Theron",
  beschreibung:"Furiosa flieht mit den Frauen eines Kriegsherrn durch eine Wüstenwelt.",
  places:[
   {name:"Namib-Wüste bei Swakopmund", country:"Namibia", lat:-22.679, lon:14.527,
    scene:"Die große Verfolgungsjagd."}
  ]},
 {title:"Rio Bravo", year:1959, genre:"Western", regie:"Howard Hawks", cast:"John Wayne, Dean Martin",
  beschreibung:"Ein Sheriff hält einen Mörder fest, während dessen Bruder die Stadt belagert.",
  places:[
   {name:"Old Tucson Studios", country:"USA", lat:32.219, lon:-111.129,
    scene:"Die Westernstadt bei Tucson."}
  ]},
 {title:"Der Unbeugsame", year:1967, genre:"Drama", regie:"Stuart Rosenberg", cast:"Paul Newman, George Kennedy",
  beschreibung:"Ein rebellischer Häftling lässt sich von den Wärtern nicht brechen.",
  places:[
   {name:"Stockton, Kalifornien", country:"USA", lat:37.9577, lon:-121.2908,
    scene:"Das Gefangenenlager wurde nahe Stockton errichtet."}
  ]},
 {title:"Brokeback Mountain", year:2005, genre:"Drama, Romantik", regie:"Ang Lee", cast:"Heath Ledger, Jake Gyllenhaal",
  beschreibung:"Zwei Cowboys verlieben sich 1963 beim Schafehüten in den Bergen.",
  places:[
   {name:"Kananaskis, Alberta", country:"Kanada", lat:50.62, lon:-115.13,
    scene:"Die Rocky Mountains stellten Wyoming dar."}
  ]},
 {title:"Die Faust im Nacken", year:1954, genre:"Drama", regie:"Elia Kazan", cast:"Marlon Brando, Eva Marie Saint", oscar:true,
  beschreibung:"Ein Hafenarbeiter wendet sich gegen die korrupte Gewerkschaft.",
  places:[
   {name:"Hoboken, New Jersey", country:"USA", lat:40.744, lon:-74.032,
    scene:"Die Docks am Hudson."}
  ]},
 {title:"Mustang", year:2015, genre:"Drama", regie:"Deniz Gamze Ergüven", cast:"Güneş Şensoy, Doğa Doğuşlu",
  beschreibung:"Fünf Schwestern rebellieren in einem türkischen Dorf gegen Zwangsheiraten.",
  places:[
   {name:"İnebolu", country:"Türkei", lat:41.975, lon:33.76,
    scene:"Der Ort an der Schwarzmeerküste."}
  ]},
 {title:"Die Schneegesellschaft", year:2023, genre:"Drama", regie:"J. A. Bayona", cast:"Enzo Vogrincic, Agustín Pardella",
  beschreibung:"Die wahre Geschichte des Flugzeugabsturzes in den Anden 1972.",
  places:[
   {name:"Sierra Nevada, Granada", country:"Spanien", lat:37.093, lon:-3.395,
    scene:"Die Berge stellten die Anden dar."}
  ]},
 {title:"Scarface", year:1983, genre:"Krimi", regie:"Brian De Palma", cast:"Al Pacino, Michelle Pfeiffer",
  beschreibung:"Ein kubanischer Flüchtling steigt in Miami zum Drogenboss auf.",
  places:[
   {name:"Ocean Drive, Miami Beach", country:"USA", lat:25.782, lon:-80.131,
    scene:"Die berüchtigte Kettensägen-Szene."}
  ]},
 {title:"Nashville", year:1975, genre:"Drama, Musikfilm", regie:"Robert Altman", cast:"Keith Carradine, Lily Tomlin",
  beschreibung:"24 Figuren rund um die Country-Szene in Nashville.",
  places:[
   {name:"Parthenon, Nashville", country:"USA", lat:36.1497, lon:-86.8133,
    scene:"Das Finale vor dem Nachbau des Parthenon."}
  ]},
 {title:"Pans Labyrinth", year:2006, genre:"Fantasy, Drama", regie:"Guillermo del Toro", cast:"Ivana Baquero, Sergi López",
  beschreibung:"Ein Mädchen flüchtet sich im Spanien von 1944 in eine Fantasiewelt.",
  places:[
   {name:"Sierra de Guadarrama", country:"Spanien", lat:40.784, lon:-4.005,
    scene:"Die Wälder um die Mühle."}
  ]},
 {title:"Der Geist des Bienenstocks", year:1973, genre:"Drama", regie:"Víctor Erice", cast:"Ana Torrent",
  beschreibung:"Ein Mädchen sieht „Frankenstein“ und sucht danach den Geist.",
  places:[
   {name:"Hoyuelos, Segovia", country:"Spanien", lat:41.154, lon:-4.237,
    scene:"Das kastilische Dorf."}
  ]},
 {title:"Love Letter", year:1995, genre:"Romantik", regie:"Shunji Iwai", cast:"Miho Nakayama",
  beschreibung:"Eine Frau schreibt an die alte Adresse ihres verstorbenen Verlobten und bekommt Antwort.",
  places:[
   {name:"Otaru, Hokkaido", country:"Japan", lat:43.1907, lon:141.0024,
    scene:"Die verschneite Hafenstadt."}
  ]},
 {title:"Stolz und Vorurteil", year:2005, genre:"Romantik", regie:"Joe Wright", cast:"Keira Knightley, Matthew Macfadyen",
  beschreibung:"Elizabeth Bennet und der stolze Mr. Darcy kommen sich langsam näher.",
  places:[
   {name:"Chatsworth House", country:"Vereinigtes Königreich", lat:53.227, lon:-1.611,
    scene:"Das Herrenhaus spielt Pemberley."},
   {name:"Stourhead", country:"Vereinigtes Königreich", lat:51.106, lon:-2.319,
    scene:"Der erste Heiratsantrag im Regen."}
  ]},
 {title:"Die Regenschirme von Cherbourg", year:1964, genre:"Musical", regie:"Jacques Demy", cast:"Catherine Deneuve, Nino Castelnuovo",
  beschreibung:"Eine junge Frau und ein Mechaniker verlieben sich, bevor er in den Krieg muss.",
  places:[
   {name:"Cherbourg", country:"Frankreich", lat:49.639, lon:-1.616,
    scene:"Der Regenschirmladen in der Hafenstadt."}
  ]},
 {title:"Hiroshima, mon amour", year:1959, genre:"Drama, Romantik", regie:"Alain Resnais", cast:"Emmanuelle Riva, Eiji Okada",
  beschreibung:"Eine Französin und ein Japaner verbringen eine Nacht in Hiroshima.",
  places:[
   {name:"Friedensdenkmal, Hiroshima", country:"Japan", lat:34.3955, lon:132.4536,
    scene:"Gedreht in der wiederaufgebauten Stadt."}
  ]},
 {title:"Meine Nacht bei Maud", year:1969, genre:"Drama", regie:"Éric Rohmer", cast:"Jean-Louis Trintignant, Françoise Fabian",
  beschreibung:"Ein katholischer Ingenieur verbringt eine Nacht im Gespräch mit einer geschiedenen Frau.",
  places:[
   {name:"Clermont-Ferrand", country:"Frankreich", lat:45.7772, lon:3.087,
    scene:"Die Stadt im Winter."}
  ]},
 {title:"Alice in den Städten", year:1974, genre:"Drama, Roadmovie", regie:"Wim Wenders", cast:"Rüdiger Vogler, Yella Rottländer",
  beschreibung:"Ein Journalist muss sich unerwartet um ein Mädchen kümmern und sucht ihre Großmutter.",
  places:[
   {name:"Schwebebahn, Wuppertal", country:"Deutschland", lat:51.256, lon:7.15,
    scene:"Die Fahrt mit der Schwebebahn."}
  ]},
 {title:"Der Dialog", year:1974, genre:"Thriller", regie:"Francis Ford Coppola", cast:"Gene Hackman",
  beschreibung:"Ein Abhörspezialist fürchtet, dass seine Aufnahme zu einem Mord führt.",
  places:[
   {name:"Union Square, San Francisco", country:"USA", lat:37.788, lon:-122.4075,
    scene:"Die Abhöraktion in der Eröffnung."}
  ]},
 {title:"Der Leopard", year:1963, genre:"Historienfilm", regie:"Luchino Visconti", cast:"Burt Lancaster, Alain Delon, Claudia Cardinale",
  beschreibung:"Ein sizilianischer Fürst erlebt den Untergang des Adels.",
  places:[
   {name:"Palazzo Gangi, Palermo", country:"Italien", lat:38.117, lon:13.366,
    scene:"Die berühmte Ballszene."}
  ]},
 {title:"Billy Elliot – I Will Dance", year:2000, genre:"Drama", regie:"Stephen Daldry", cast:"Jamie Bell, Julie Walters",
  beschreibung:"Ein Junge aus einer Bergarbeiterfamilie will Balletttänzer werden.",
  places:[
   {name:"Easington Colliery", country:"Vereinigtes Königreich", lat:54.786, lon:-1.357,
    scene:"Das Bergarbeiterdorf."}
  ]},
 {title:"Es war einmal in Amerika", year:1984, genre:"Krimi, Drama", regie:"Sergio Leone", cast:"Robert De Niro, James Woods",
  beschreibung:"Jüdische Gangster in New York über fünf Jahrzehnte.",
  places:[
   {name:"Washington Street, DUMBO", country:"USA", lat:40.7032, lon:-73.9894,
    scene:"Der Blick auf die Manhattan Bridge – das Filmplakat-Motiv."}
  ]},
 {title:"Die Truman Show", year:1998, genre:"Satire", regie:"Peter Weir", cast:"Jim Carrey, Laura Linney",
  beschreibung:"Ein Mann entdeckt, dass sein ganzes Leben eine Fernsehshow ist.",
  places:[
   {name:"Seaside, Florida", country:"USA", lat:30.321, lon:-86.14,
    scene:"Die Musterstadt Seahaven."}
  ]},
 {title:"Solaris", year:1972, genre:"Science-Fiction", regie:"Andrei Tarkowski", cast:"Donatas Banionis, Natalja Bondartschuk",
  beschreibung:"Ein Psychologe auf einer Raumstation begegnet seiner toten Frau.",
  places:[
   {name:"Stadtautobahn Akasaka, Tokio", country:"Japan", lat:35.674, lon:139.738,
    scene:"Die lange Autofahrt als Bild der Zukunft."}
  ]},
 {title:"Die durch die Hölle gehen", year:1978, genre:"Kriegsfilm, Drama", regie:"Michael Cimino", cast:"Robert De Niro, Christopher Walken, Meryl Streep", oscar:true,
  beschreibung:"Drei Freunde aus einer Stahlstadt ziehen in den Vietnamkrieg.",
  places:[
   {name:"Mingo Junction, Ohio", country:"USA", lat:40.322, lon:-80.61,
    scene:"Die Stahlwerksstadt."},
   {name:"St. Theodosius Cathedral, Cleveland", country:"USA", lat:41.48, lon:-81.69,
    scene:"Die russisch-orthodoxe Hochzeit."}
  ]},
 {title:"Kagemusha – Der Schatten des Kriegers", year:1980, genre:"Historienfilm", regie:"Akira Kurosawa", cast:"Tatsuya Nakadai",
  beschreibung:"Ein Dieb muss als Doppelgänger eines toten Fürsten auftreten.",
  places:[
   {name:"Burg Himeji", country:"Japan", lat:34.8397, lon:134.6943,
    scene:"Die Burg diente als Kulisse."}
  ]},
 {title:"Rom, offene Stadt", year:1945, genre:"Kriegsfilm, Drama", regie:"Roberto Rossellini", cast:"Anna Magnani, Aldo Fabrizi",
  beschreibung:"Widerstandskämpfer im von den Nazis besetzten Rom.",
  places:[
   {name:"Via Montecuccioli, Pigneto, Rom", country:"Italien", lat:41.895, lon:12.532,
    scene:"Die Straße, in der Pina erschossen wird."}
  ]},
 {title:"Iron Man", year:2008, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jon Favreau", cast:"Robert Downey Jr., Gwyneth Paltrow",
  beschreibung:"Der Waffenfabrikant Tony Stark wird entführt, baut sich eine Rüstung und wird zu Iron Man.",
  places:[
   {name:"Alabama Hills, Lone Pine", country:"USA", lat:36.6, lon:-118.11,
    scene:"Die Felslandschaft stellte Afghanistan dar, wo Tony entführt wird."}
  ]},
 {title:"Der unglaubliche Hulk", year:2008, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Louis Leterrier", cast:"Edward Norton, Liv Tyler, Tim Roth",
  beschreibung:"Bruce Banner versteckt sich in Brasilien und sucht ein Heilmittel gegen den Hulk in sich.",
  places:[
   {name:"Rocinha, Rio de Janeiro", country:"Brasilien", lat:-22.988, lon:-43.248,
    scene:"Die Verfolgungsjagd über die Dächer der Favela."}
  ]},
 {title:"Iron Man 2", year:2010, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jon Favreau", cast:"Robert Downey Jr., Mickey Rourke, Scarlett Johansson",
  beschreibung:"Tony Stark wird von der Regierung unter Druck gesetzt und von einem russischen Physiker mit Rachegelüsten angegriffen.",
  places:[
   {name:"Randy's Donuts, Inglewood", country:"USA", lat:33.9617, lon:-118.3705,
    scene:"Tony sitzt im Rüstungsanzug im riesigen Donut auf dem Dach."}
  ]},
 {title:"Thor", year:2011, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Kenneth Branagh", cast:"Chris Hemsworth, Natalie Portman, Tom Hiddleston",
  beschreibung:"Der Donnergott Thor wird von seinem Vater auf die Erde verbannt und muss lernen, wahrhaft würdig zu sein.",
  places:[
   {name:"Galisteo, New Mexico", country:"USA", lat:35.395, lon:-105.95,
    scene:"Hier wurde die Kleinstadt Puente Antiguo gebaut, in der Thor landet."}
  ]},
 {title:"Captain America: The First Avenger", year:2011, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Joe Johnston", cast:"Chris Evans, Hayley Atwell, Hugo Weaving",
  beschreibung:"Der schmächtige Steve Rogers wird im Zweiten Weltkrieg mit einem Serum zum Supersoldaten.",
  places:[
   {name:"Stanley Dock, Liverpool", country:"Vereinigtes Königreich", lat:53.418, lon:-3,
    scene:"Die Docks stellten das Brooklyn der 1940er dar."},
   {name:"Northern Quarter, Manchester", country:"Vereinigtes Königreich", lat:53.484, lon:-2.236,
    scene:"Die Straßen wurden zum alten New York."}
  ]},
 {title:"Marvel's The Avengers", year:2012, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Joss Whedon", cast:"Robert Downey Jr., Chris Evans, Scarlett Johansson",
  beschreibung:"Nick Fury bringt die mächtigsten Helden zusammen, um Lokis Invasion der Erde zu stoppen.",
  places:[
   {name:"East 9th Street, Cleveland", country:"USA", lat:41.5, lon:-81.69,
    scene:"Die Straßen dienten für die Schlacht um New York."}
  ]},
 {title:"Iron Man 3", year:2013, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Shane Black", cast:"Robert Downey Jr., Gwyneth Paltrow, Ben Kingsley",
  beschreibung:"Nach den Ereignissen in New York kämpft Tony mit Angstzuständen und gegen den Terroristen Mandarin.",
  places:[
   {name:"Villa Vizcaya, Miami", country:"USA", lat:25.7443, lon:-80.2105,
    scene:"Die Villa diente als Anwesen des Mandarins."}
  ]},
 {title:"Thor – The Dark Kingdom", year:2013, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Alan Taylor", cast:"Chris Hemsworth, Natalie Portman, Tom Hiddleston",
  beschreibung:"Thor muss sich mit seinem Bruder Loki verbünden, um die Dunkelelfen aufzuhalten.",
  places:[
   {name:"Old Royal Naval College, Greenwich", country:"Vereinigtes Königreich", lat:51.4827, lon:-0.006,
    scene:"Schauplatz der Endschlacht in London."}
  ]},
 {title:"The Return of the First Avenger", year:2014, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Anthony und Joe Russo", cast:"Chris Evans, Scarlett Johansson, Sebastian Stan",
  beschreibung:"Captain America deckt eine Verschwörung innerhalb von S.H.I.E.L.D. auf und trifft auf den Winter Soldier.",
  places:[
   {name:"National Mall, Washington", country:"USA", lat:38.8893, lon:-77.0502,
    scene:"Steve joggt am Reflecting Pool, wo er Sam Wilson kennenlernt."}
  ]},
 {title:"Guardians of the Galaxy", year:2014, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"James Gunn", cast:"Chris Pratt, Zoe Saldaña, Dave Bautista",
  beschreibung:"Eine Truppe von Außenseitern muss eine mächtige Kugel vor einem Kriegsherrn schützen.",
  places:[
   {name:"Shepperton Studios", country:"Vereinigtes Königreich", lat:51.408, lon:-0.454,
    scene:"Die fremden Welten entstanden in den Studios bei London."}
  ]},
 {title:"Avengers: Age of Ultron", year:2015, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Joss Whedon", cast:"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
  beschreibung:"Tony Stark erschafft die künstliche Intelligenz Ultron, die die Menschheit auslöschen will.",
  places:[
   {name:"Fort Bard, Aostatal", country:"Italien", lat:45.606, lon:7.747,
    scene:"Die Festung wurde zur Hydra-Basis in der Eröffnungsschlacht."},
   {name:"Gangnam, Seoul", country:"Südkorea", lat:37.498, lon:127.027,
    scene:"Die Verfolgungsjagd durch die Stadt."}
  ]},
 {title:"Ant-Man", year:2015, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Peyton Reed", cast:"Paul Rudd, Michael Douglas, Evangeline Lilly",
  beschreibung:"Ein Meisterdieb erhält einen Anzug, mit dem er auf Insektengröße schrumpfen kann.",
  places:[
   {name:"San Francisco", country:"USA", lat:37.7749, lon:-122.4194,
    scene:"Scotts Heimatstadt."}
  ]},
 {title:"The First Avenger: Civil War", year:2016, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Anthony und Joe Russo", cast:"Chris Evans, Robert Downey Jr., Chadwick Boseman",
  beschreibung:"Die Avengers zerstreiten sich über ein Gesetz, das Superhelden staatlicher Kontrolle unterstellen soll.",
  places:[
   {name:"Flughafen Leipzig/Halle", country:"Deutschland", lat:51.424, lon:12.236,
    scene:"Die große Schlacht der Helden auf dem Flughafen."}
  ]},
 {title:"Doctor Strange", year:2016, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Scott Derrickson", cast:"Benedict Cumberbatch, Tilda Swinton",
  beschreibung:"Ein arroganter Chirurg verliert seine Hände und findet in Nepal den Weg zur Magie.",
  places:[
   {name:"Durbar Square, Kathmandu", country:"Nepal", lat:27.7046, lon:85.307,
    scene:"Strange sucht in den Gassen nach Kamar-Taj."}
  ]},
 {title:"Guardians of the Galaxy Vol. 2", year:2017, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"James Gunn", cast:"Chris Pratt, Zoe Saldaña, Kurt Russell",
  beschreibung:"Peter Quill trifft seinen Vater Ego, einen lebenden Planeten.",
  places:[
   {name:"Pinewood Studios, Atlanta", country:"USA", lat:33.405, lon:-84.528,
    scene:"Der Film entstand fast ganz in den Studios bei Atlanta."}
  ]},
 {title:"Spider-Man: Homecoming", year:2017, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jon Watts", cast:"Tom Holland, Michael Keaton, Robert Downey Jr.",
  beschreibung:"Peter Parker will Tony Stark beweisen, dass er ein echter Avenger ist, und legt sich mit dem Vulture an.",
  places:[
   {name:"Franklin K. Lane High School, New York", country:"USA", lat:40.6905, lon:-73.873,
    scene:"Die Schule stellte Peters Midtown School of Science dar."}
  ]},
 {title:"Thor: Tag der Entscheidung", year:2017, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Taika Waititi", cast:"Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
  beschreibung:"Thor strandet auf einem Müllplaneten und muss als Gladiator gegen den Hulk kämpfen, während Hela Asgard erobert.",
  places:[
   {name:"Village Roadshow Studios, Gold Coast", country:"Australien", lat:-27.91, lon:153.315,
    scene:"Gedreht in den Studios an Australiens Gold Coast."}
  ]},
 {title:"Black Panther", year:2018, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Ryan Coogler", cast:"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
  beschreibung:"T'Challa wird König von Wakanda und muss sich einem Herausforderer stellen.",
  places:[
   {name:"Jagalchi-Markt, Busan", country:"Südkorea", lat:35.097, lon:129.03,
    scene:"Das Casino und die Autoverfolgung durch Busan."}
  ]},
 {title:"Avengers: Infinity War", year:2018, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Anthony und Joe Russo", cast:"Robert Downey Jr., Chris Hemsworth, Josh Brolin",
  beschreibung:"Thanos jagt die sechs Infinity-Steine, um die Hälfte allen Lebens auszulöschen.",
  places:[
   {name:"Bahnhof Waverley, Edinburgh", country:"Vereinigtes Königreich", lat:55.952, lon:-3.189,
    scene:"Wanda und Vision werden nachts in Edinburgh angegriffen."}
  ]},
 {title:"Ant-Man and the Wasp", year:2018, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Peyton Reed", cast:"Paul Rudd, Evangeline Lilly",
  beschreibung:"Scott Lang und Hope van Dyne versuchen, Janet aus der Quantenwelt zu retten.",
  places:[
   {name:"San Francisco", country:"USA", lat:37.779, lon:-122.419,
    scene:"Die Verfolgungsjagd durch die Hügel der Stadt."}
  ]},
 {title:"Captain Marvel", year:2019, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Anna Boden, Ryan Fleck", cast:"Brie Larson, Samuel L. Jackson",
  beschreibung:"Eine Kree-Kriegerin landet im Jahr 1995 auf der Erde und entdeckt ihre Vergangenheit.",
  places:[
   {name:"Los Angeles", country:"USA", lat:34.0522, lon:-118.2437,
    scene:"Carol landet im Los Angeles der 1990er."}
  ]},
 {title:"Avengers: Endgame", year:2019, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Anthony und Joe Russo", cast:"Robert Downey Jr., Chris Evans, Scarlett Johansson",
  beschreibung:"Die übrigen Avengers versuchen mit einer Zeitreise, Thanos' Werk rückgängig zu machen.",
  places:[
   {name:"St Abbs, Schottland", country:"Vereinigtes Königreich", lat:55.899, lon:-2.13,
    scene:"Das Fischerdorf wurde zu New Asgard."}
  ]},
 {title:"Black Widow", year:2021, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Cate Shortland", cast:"Scarlett Johansson, Florence Pugh, David Harbour",
  beschreibung:"Natasha Romanoff stellt sich ihrer Vergangenheit als Agentin im Red Room.",
  places:[
   {name:"Budapest", country:"Ungarn", lat:47.4979, lon:19.0402,
    scene:"Die Verfolgungsjagd durch die Straßen von Budapest."}
  ]},
 {title:"Shang-Chi and the Legend of the Ten Rings", year:2021, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Destin Daniel Cretton", cast:"Simu Liu, Awkwafina, Tony Leung",
  beschreibung:"Ein junger Mann muss sich der Organisation seines Vaters stellen.",
  places:[
   {name:"California Street, San Francisco", country:"USA", lat:37.792, lon:-122.41,
    scene:"Die Kampfszene im Linienbus."}
  ]},
 {title:"Eternals", year:2021, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Chloé Zhao", cast:"Gemma Chan, Richard Madden, Angelina Jolie",
  beschreibung:"Unsterbliche Wesen, die seit Jahrtausenden auf der Erde leben, müssen sich wieder vereinen.",
  places:[
   {name:"Lanzarote", country:"Spanien", lat:29.027, lon:-13.816,
    scene:"Die Vulkanlandschaft der Kanareninsel."}
  ]},
 {title:"Spider-Man: No Way Home", year:2021, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jon Watts", cast:"Tom Holland, Zendaya, Benedict Cumberbatch",
  beschreibung:"Nachdem seine Identität enthüllt wurde, bittet Peter Doctor Strange um Hilfe – mit Folgen für das Multiversum.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.418, lon:-84.552,
    scene:"Die New-York-Szenen entstanden größtenteils in Studios bei Atlanta."}
  ]},
 {title:"Doctor Strange in the Multiverse of Madness", year:2022, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Sam Raimi", cast:"Benedict Cumberbatch, Elizabeth Olsen",
  beschreibung:"Strange reist durch das Multiversum, um ein Mädchen vor Wanda zu schützen.",
  places:[
   {name:"Studios bei London", country:"Vereinigtes Königreich", lat:51.547, lon:-0.53,
    scene:"Gedreht in Studios rund um London."}
  ]},
 {title:"Thor: Love and Thunder", year:2022, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Taika Waititi", cast:"Chris Hemsworth, Natalie Portman, Christian Bale",
  beschreibung:"Thor muss Gorr den Götterschlächter aufhalten – und trifft Jane als Mighty Thor wieder.",
  places:[
   {name:"Disney Studios Australia, Sydney", country:"Australien", lat:-33.892, lon:151.226,
    scene:"Gedreht in den Studios in Sydney."}
  ]},
 {title:"Black Panther: Wakanda Forever", year:2022, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Ryan Coogler", cast:"Letitia Wright, Angela Bassett, Tenoch Huerta",
  beschreibung:"Wakanda trauert um seinen König und gerät in Konflikt mit dem Unterwasserreich Talokan.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.4183, lon:-84.5515,
    scene:"Gedreht in den Studios bei Atlanta."}
  ]},
 {title:"Ant-Man and the Wasp: Quantumania", year:2023, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Peyton Reed", cast:"Paul Rudd, Evangeline Lilly, Jonathan Majors",
  beschreibung:"Scott und seine Familie werden in die Quantenwelt gezogen und treffen auf Kang.",
  places:[
   {name:"Pinewood Studios", country:"Vereinigtes Königreich", lat:51.549, lon:-0.537,
    scene:"Die Quantenwelt entstand im Studio."}
  ]},
 {title:"Guardians of the Galaxy Vol. 3", year:2023, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"James Gunn", cast:"Chris Pratt, Zoe Saldaña, Bradley Cooper",
  beschreibung:"Die Guardians müssen Rocket retten und stoßen auf seinen Schöpfer.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.4176, lon:-84.5525,
    scene:"Gedreht in den Studios bei Atlanta."}
  ]},
 {title:"The Marvels", year:2023, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Nia DaCosta", cast:"Brie Larson, Teyonah Parris, Iman Vellani",
  beschreibung:"Carol Danvers, Monica Rambeau und Kamala Khan tauschen bei jedem Einsatz ihrer Kräfte die Plätze.",
  places:[
   {name:"Pinewood Studios", country:"Vereinigtes Königreich", lat:51.5487, lon:-0.5375,
    scene:"Gedreht in den Studios westlich von London."}
  ]},
 {title:"Deadpool & Wolverine", year:2024, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Shawn Levy", cast:"Ryan Reynolds, Hugh Jackman",
  beschreibung:"Deadpool holt eine Wolverine-Variante aus dem Multiversum, um seine Welt zu retten.",
  places:[
   {name:"Pinewood Studios", country:"Vereinigtes Königreich", lat:51.5493, lon:-0.5365,
    scene:"Gedreht in den Studios und in der Umgebung von London."}
  ]},
 {title:"Captain America: Brave New World", year:2025, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Julius Onah", cast:"Anthony Mackie, Harrison Ford",
  beschreibung:"Sam Wilson ist der neue Captain America und gerät in eine Verschwörung um den US-Präsidenten.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.4187, lon:-84.551,
    scene:"Gedreht in den Studios bei Atlanta."}
  ]},
 {title:"Thunderbolts*", year:2025, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Jake Schreier", cast:"Florence Pugh, David Harbour, Sebastian Stan",
  beschreibung:"Eine Gruppe von Antihelden wird in eine Falle gelockt und muss widerwillig zusammenarbeiten.",
  places:[
   {name:"Merdeka 118, Kuala Lumpur", country:"Malaysia", lat:3.1415, lon:101.7,
    scene:"Yelena springt vom zweithöchsten Gebäude der Welt."}
  ]},
 {title:"The Fantastic Four: First Steps", year:2025, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Matt Shakman", cast:"Pedro Pascal, Vanessa Kirby",
  beschreibung:"Die Fantastischen Vier müssen ihre retrofuturistische Erde vor Galactus schützen.",
  places:[
   {name:"Pinewood Studios", country:"Vereinigtes Königreich", lat:51.5484, lon:-0.538,
    scene:"Die Retro-Welt entstand in den Studios bei London."}
  ]},
 {title:"Spider-Man: Brand New Day", year:2026, reihe:"Marvel", marke:"Marvel", genre:"Superheldenfilm", regie:"Destin Daniel Cretton", cast:"Tom Holland, Zendaya",
  beschreibung:"Nachdem ihn niemand mehr kennt, beginnt Peter Parker ein neues Leben als Spider-Man.",
  places:[
   {name:"Glasgow", country:"Vereinigtes Königreich", lat:55.8642, lon:-4.2518,
    scene:"Die Innenstadt wurde in New York verwandelt."}
  ]},
 {title:"Superman", year:1978, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Richard Donner", cast:"Christopher Reeve, Margot Kidder, Gene Hackman",
  beschreibung:"Ein Junge vom Planeten Krypton wächst auf einer Farm auf und wird zum Beschützer der Erde.",
  places:[
   {name:"Daily News Building, New York", country:"USA", lat:40.7505, lon:-73.9733,
    scene:"Das Gebäude wurde zum Daily Planet."},
   {name:"Blairmore, Alberta", country:"Kanada", lat:49.608, lon:-114.437,
    scene:"Die Prärie stellte Smallville dar."}
  ]},
 {title:"Superman II – Allein gegen alle", year:1980, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Richard Lester", cast:"Christopher Reeve, Terence Stamp",
  beschreibung:"Superman verzichtet für Lois auf seine Kräfte – gerade als drei Verbrecher von Krypton angreifen.",
  places:[
   {name:"Niagarafälle", country:"Kanada", lat:43.08, lon:-79.075,
    scene:"Superman rettet einen Jungen, der in die Fälle stürzt."}
  ]},
 {title:"Superman Returns", year:2006, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Bryan Singer", cast:"Brandon Routh, Kate Bosworth, Kevin Spacey",
  beschreibung:"Nach Jahren im All kehrt Superman zurück und findet eine veränderte Welt vor.",
  places:[
   {name:"Fox Studios Australia, Sydney", country:"Australien", lat:-33.8925, lon:151.2265,
    scene:"Metropolis entstand in den Studios und Straßen von Sydney."}
  ]},
 {title:"Batman", year:1989, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Tim Burton", cast:"Michael Keaton, Jack Nicholson, Kim Basinger",
  beschreibung:"Batman stellt sich in Gotham City dem Joker.",
  places:[
   {name:"Knebworth House", country:"Vereinigtes Königreich", lat:51.872, lon:-0.214,
    scene:"Das Herrenhaus spielte Wayne Manor."}
  ]},
 {title:"Batmans Rückkehr", year:1992, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Tim Burton", cast:"Michael Keaton, Danny DeVito, Michelle Pfeiffer",
  beschreibung:"Batman kämpft gegen den Pinguin und Catwoman.",
  places:[
   {name:"Warner Bros. Studios, Burbank", country:"USA", lat:34.149, lon:-118.336,
    scene:"Gotham wurde komplett im Studio gebaut."}
  ]},
 {title:"Batman Forever", year:1995, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Joel Schumacher", cast:"Val Kilmer, Jim Carrey, Tommy Lee Jones",
  beschreibung:"Batman bekommt es mit Two-Face und dem Riddler zu tun.",
  places:[
   {name:"Webb Institute, Glen Cove", country:"USA", lat:40.88, lon:-73.647,
    scene:"Das Anwesen diente als Wayne Manor."}
  ]},
 {title:"Batman & Robin", year:1997, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Joel Schumacher", cast:"George Clooney, Arnold Schwarzenegger, Uma Thurman",
  beschreibung:"Batman und Robin müssen Mr. Freeze und Poison Ivy aufhalten.",
  places:[
   {name:"Warner Bros. Studios, Burbank", country:"USA", lat:34.1493, lon:-118.3355,
    scene:"Der Film entstand fast ausschließlich im Studio."}
  ]},
 {title:"Man of Steel", year:2013, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Zack Snyder", cast:"Henry Cavill, Amy Adams, Michael Shannon",
  beschreibung:"Clark Kent muss sich entscheiden, ob er sich der Welt zeigt, als General Zod die Erde bedroht.",
  places:[
   {name:"Plano, Illinois", country:"USA", lat:41.662, lon:-88.537,
    scene:"Die Kleinstadt stellte Smallville dar."},
   {name:"Chicago", country:"USA", lat:41.8781, lon:-87.6298,
    scene:"Die Stadt wurde zu Metropolis."}
  ]},
 {title:"Batman v Superman: Dawn of Justice", year:2016, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Zack Snyder", cast:"Ben Affleck, Henry Cavill, Gal Gadot",
  beschreibung:"Batman sieht in Superman eine Bedrohung für die Menschheit.",
  places:[
   {name:"Michigan Central Station, Detroit", country:"USA", lat:42.329, lon:-83.078,
    scene:"Der verlassene Bahnhof wurde zu Ruinen in Gotham."}
  ]},
 {title:"Suicide Squad", year:2016, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"David Ayer", cast:"Will Smith, Margot Robbie, Jared Leto",
  beschreibung:"Eine Regierungsbeamtin stellt ein Team aus Superschurken für eine Selbstmordmission zusammen.",
  places:[
   {name:"Toronto", country:"Kanada", lat:43.6532, lon:-79.3832,
    scene:"Die Stadt stand für Midway City."}
  ]},
 {title:"Wonder Woman", year:2017, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Patty Jenkins", cast:"Gal Gadot, Chris Pine",
  beschreibung:"Die Amazonenprinzessin Diana verlässt ihre Insel, um im Ersten Weltkrieg den Kriegsgott Ares aufzuhalten.",
  places:[
   {name:"Palinuro, Kampanien", country:"Italien", lat:40.027, lon:15.278,
    scene:"Die Küste wurde zur Amazoneninsel Themyscira."},
   {name:"Louvre, Paris", country:"Frankreich", lat:48.8609, lon:2.3378,
    scene:"Diana arbeitet im Museum in der Rahmenhandlung."}
  ]},
 {title:"Justice League", year:2017, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Zack Snyder", cast:"Ben Affleck, Gal Gadot, Jason Momoa",
  beschreibung:"Batman und Wonder Woman sammeln Helden, um Steppenwolf aufzuhalten.",
  places:[
   {name:"Djúpavík", country:"Island", lat:65.943, lon:-21.565,
    scene:"Bruce Wayne sucht Aquaman in einem Fischerdorf."}
  ]},
 {title:"Aquaman", year:2018, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"James Wan", cast:"Jason Momoa, Amber Heard, Willem Dafoe",
  beschreibung:"Der Halb-Atlanter Arthur Curry muss seinen Anspruch auf den Thron von Atlantis durchsetzen.",
  places:[
   {name:"Village Roadshow Studios, Gold Coast", country:"Australien", lat:-27.9105, lon:153.3155,
    scene:"Die Unterwasserwelt entstand in den australischen Studios."}
  ]},
 {title:"Shazam!", year:2019, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"David F. Sandberg", cast:"Zachary Levi, Asher Angel, Mark Strong",
  beschreibung:"Ein Teenager kann sich mit einem Zauberwort in einen erwachsenen Superhelden verwandeln.",
  places:[
   {name:"Hamilton, Ontario", country:"Kanada", lat:43.2557, lon:-79.8711,
    scene:"Die Stadt stellte Philadelphia dar."}
  ]},
 {title:"Birds of Prey", year:2020, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Cathy Yan", cast:"Margot Robbie, Mary Elizabeth Winstead",
  beschreibung:"Nach der Trennung vom Joker schließt sich Harley Quinn mit anderen Frauen gegen einen Gangsterboss zusammen.",
  places:[
   {name:"Los Angeles", country:"USA", lat:34.045, lon:-118.25,
    scene:"Die Stadt stand für Gotham City."}
  ]},
 {title:"Wonder Woman 1984", year:2020, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Patty Jenkins", cast:"Gal Gadot, Chris Pine, Pedro Pascal",
  beschreibung:"Im Jahr 1984 stellt sich Diana einem Geschäftsmann, der Wünsche wahr werden lässt.",
  places:[
   {name:"National Mall, Washington", country:"USA", lat:38.8896, lon:-77.023,
    scene:"Diana arbeitet im Smithsonian."},
   {name:"Fuerteventura", country:"Spanien", lat:28.402, lon:-14.004,
    scene:"Die Insel stellte erneut Themyscira dar."},
   {name:"Wüste von Tabernas, Almería", country:"Spanien", lat:37.048, lon:-2.392,
    scene:"Die Verfolgungsjagd in „Ägypten“."}
  ]},
 {title:"The Suicide Squad", year:2021, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"James Gunn", cast:"Margot Robbie, Idris Elba, John Cena",
  beschreibung:"Die Task Force X soll auf einer Insel ein geheimes Forschungslabor zerstören.",
  places:[
   {name:"Panama-Stadt", country:"Panama", lat:8.9824, lon:-79.5199,
    scene:"Panama stand für den Inselstaat Corto Maltese."}
  ]},
 {title:"Black Adam", year:2022, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Jaume Collet-Serra", cast:"Dwayne Johnson, Pierce Brosnan",
  beschreibung:"Ein antiker Halbgott erwacht nach 5000 Jahren und bringt seine eigene Art von Gerechtigkeit.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.419, lon:-84.5505,
    scene:"Gedreht in den Studios bei Atlanta."}
  ]},
 {title:"Shazam! Fury of the Gods", year:2023, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"David F. Sandberg", cast:"Zachary Levi, Helen Mirren, Lucy Liu",
  beschreibung:"Billy und seine Geschwister müssen sich den Töchtern des Atlas stellen.",
  places:[
   {name:"Atlanta", country:"USA", lat:33.749, lon:-84.388,
    scene:"Die Stadt stand für Philadelphia."}
  ]},
 {title:"The Flash", year:2023, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Andy Muschietti", cast:"Ezra Miller, Michael Keaton, Sasha Calle",
  beschreibung:"Barry Allen reist in die Vergangenheit, um seine Mutter zu retten, und zerstört dabei die Zeitlinie.",
  places:[
   {name:"Altstadt von Edinburgh", country:"Vereinigtes Königreich", lat:55.948, lon:-3.193,
    scene:"Die Gassen von Edinburgh wurden zu Gotham."}
  ]},
 {title:"Blue Beetle", year:2023, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Ángel Manuel Soto", cast:"Xolo Maridueña, Bruna Marquezine",
  beschreibung:"Ein junger Mann wird von einem außerirdischen Skarabäus als Wirt auserwählt.",
  places:[
   {name:"Trilith Studios, Atlanta", country:"USA", lat:33.4172, lon:-84.553,
    scene:"Gedreht in den Studios bei Atlanta."}
  ]},
 {title:"Aquaman: Lost Kingdom", year:2023, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"James Wan", cast:"Jason Momoa, Patrick Wilson",
  beschreibung:"Aquaman verbündet sich mit seinem Bruder gegen Black Manta.",
  places:[
   {name:"Warner Bros. Studios Leavesden", country:"Vereinigtes Königreich", lat:51.693, lon:-0.421,
    scene:"Gedreht in den Studios nördlich von London."}
  ]},
 {title:"Superman", year:2025, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"James Gunn", cast:"David Corenswet, Rachel Brosnahan, Nicholas Hoult",
  beschreibung:"Superman versucht, seine kryptonische Herkunft mit seiner menschlichen Erziehung zu vereinen.",
  places:[
   {name:"Cleveland", country:"USA", lat:41.4993, lon:-81.6944,
    scene:"Die Stadt stand für Metropolis."},
   {name:"Svalbard", country:"Norwegen", lat:78.2232, lon:15.6267,
    scene:"Die arktische Landschaft rund um die Festung der Einsamkeit."}
  ]},
 {title:"Joker", year:2019, reihe:"DC", marke:"DC", genre:"Drama, Thriller", regie:"Todd Phillips", cast:"Joaquin Phoenix, Robert De Niro",
  beschreibung:"Ein gescheiterter Komiker in Gotham wird zum Joker.",
  places:[
   {name:"Joker-Treppe, Bronx", country:"USA", lat:40.8364, lon:-73.9246,
    scene:"Arthur tanzt im Anzug die Treppe hinunter."}
  ]},
 {title:"Joker: Folie à Deux", year:2024, reihe:"DC", marke:"DC", genre:"Drama, Musical", regie:"Todd Phillips", cast:"Joaquin Phoenix, Lady Gaga",
  beschreibung:"Arthur Fleck wartet auf seinen Prozess und lernt in der Psychiatrie Lee kennen.",
  places:[
   {name:"Joker-Treppe, Bronx", country:"USA", lat:40.8366, lon:-73.9244,
    scene:"Die berühmte Treppe kehrt zurück."}
  ]},
 {title:"The Batman", year:2022, reihe:"DC", marke:"DC", genre:"Superheldenfilm", regie:"Matt Reeves", cast:"Robert Pattinson, Zoë Kravitz, Paul Dano",
  beschreibung:"In seinem zweiten Jahr als Batman jagt Bruce Wayne den Serienmörder Riddler.",
  places:[
   {name:"St George's Hall, Liverpool", country:"Vereinigtes Königreich", lat:53.4085, lon:-2.98,
    scene:"Die Halle wurde zum Rathaus von Gotham."},
   {name:"Glasgow", country:"Vereinigtes Königreich", lat:55.86, lon:-4.25,
    scene:"Die Straßen dienten als Gotham."}
  ]},
 {title:"Hangover", year:2009, reihe:"Hangover", genre:"Komödie", regie:"Todd Phillips", cast:"Bradley Cooper, Ed Helms, Zach Galifianakis",
  beschreibung:"Nach einem Junggesellenabschied in Las Vegas können sich drei Freunde an nichts erinnern – und der Bräutigam ist verschwunden.",
  places:[
   {name:"Caesars Palace, Las Vegas", country:"USA", lat:36.1162, lon:-115.1745,
    scene:"Das Hotel, in dem die Freunde ihre Villa haben."}
  ]},
 {title:"Hangover 2", year:2011, reihe:"Hangover", genre:"Komödie", regie:"Todd Phillips", cast:"Bradley Cooper, Ed Helms, Zach Galifianakis",
  beschreibung:"Diesmal wachen die Freunde in Bangkok auf – vor Stus Hochzeit.",
  places:[
   {name:"Sky Bar, Lebua State Tower, Bangkok", country:"Thailand", lat:13.7215, lon:100.5168,
    scene:"Die Rooftop-Bar hoch über Bangkok."},
   {name:"Railay, Krabi", country:"Thailand", lat:8.011, lon:98.838,
    scene:"Der Ferienort, an dem Stu heiraten will."}
  ]},
 {title:"Hangover 3", year:2013, reihe:"Hangover", genre:"Komödie", regie:"Todd Phillips", cast:"Bradley Cooper, Ed Helms, Zach Galifianakis",
  beschreibung:"Das Wolfsrudel muss Mr. Chow aufspüren, um Doug aus den Händen eines Gangsters zu befreien.",
  places:[
   {name:"Nogales, Arizona", country:"USA", lat:31.3404, lon:-110.9343,
    scene:"Die Grenzstadt stand für Szenen in Mexiko."},
   {name:"Caesars Palace, Las Vegas", country:"USA", lat:36.1165, lon:-115.1742,
    scene:"Die Gruppe kehrt nach Las Vegas zurück."}
  ]},
 {title:"Reservoir Dogs", year:1992, genre:"Krimi, Thriller", regie:"Quentin Tarantino", cast:"Harvey Keitel, Tim Roth, Steve Buscemi",
  beschreibung:"Nach einem missglückten Juwelenraub sammeln sich die Gangster in einem Lagerhaus und suchen den Verräter.",
  places:[
   {name:"Highland Park, Los Angeles", country:"USA", lat:34.112, lon:-118.193,
    scene:"Gedreht in Lagerhallen und Straßen im Nordosten von LA."}
  ]},
 {title:"Pulp Fiction", year:1994, genre:"Krimi", regie:"Quentin Tarantino", cast:"John Travolta, Samuel L. Jackson, Uma Thurman",
  beschreibung:"Mehrere Geschichten aus der Unterwelt von Los Angeles, verwoben in nicht-chronologischer Reihenfolge.",
  places:[
   {name:"Hawthorne Grill (abgerissen), Hawthorne", country:"USA", lat:33.907, lon:-118.352,
    scene:"Das Diner des Überfalls am Anfang und Ende."}
  ]},
 {title:"Jackie Brown", year:1997, genre:"Krimi", regie:"Quentin Tarantino", cast:"Pam Grier, Samuel L. Jackson, Robert Forster",
  beschreibung:"Eine Stewardess gerät zwischen einen Waffenhändler und die Polizei und plant einen eigenen Coup.",
  places:[
   {name:"Del Amo Fashion Center, Torrance", country:"USA", lat:33.8318, lon:-118.349,
    scene:"Die Geldübergabe im Einkaufszentrum."}
  ]},
 {title:"Kill Bill: Volume 1", year:2003, genre:"Action", regie:"Quentin Tarantino", cast:"Uma Thurman, Lucy Liu",
  beschreibung:"Eine Auftragskillerin erwacht aus dem Koma und nimmt Rache an ihren ehemaligen Kollegen.",
  places:[
   {name:"Beijing Film Studio", country:"China", lat:39.98, lon:116.35,
    scene:"Das „Haus der blauen Blätter“ wurde in Peking gebaut."}
  ]},
 {title:"Kill Bill: Volume 2", year:2004, genre:"Action", regie:"Quentin Tarantino", cast:"Uma Thurman, David Carradine",
  beschreibung:"Die Braut setzt ihren Rachefeldzug fort, bis sie Bill gegenübersteht.",
  places:[
   {name:"Two Pines Chapel, Mojave-Wüste bei Lancaster", country:"USA", lat:34.69, lon:-118.13,
    scene:"Die Kapelle, in der das Massaker bei der Hochzeitsprobe geschah."}
  ]},
 {title:"Death Proof – Todsicher", year:2007, genre:"Thriller", regie:"Quentin Tarantino", cast:"Kurt Russell, Zoë Bell, Rosario Dawson",
  beschreibung:"Ein Stuntman macht mit seinem „todsicheren“ Auto Jagd auf junge Frauen.",
  places:[
   {name:"Texas Chili Parlor, Austin", country:"USA", lat:30.278, lon:-97.741,
    scene:"Die Bar, in der Stuntman Mike auf die Frauen trifft."}
  ]},
 {title:"Inglourious Basterds", year:2009, genre:"Kriegsfilm", regie:"Quentin Tarantino", cast:"Brad Pitt, Christoph Waltz, Mélanie Laurent",
  beschreibung:"Eine jüdische Kommandoeinheit und eine Kinobesitzerin planen ein Attentat auf die Nazi-Führung.",
  places:[
   {name:"Studio Babelsberg, Potsdam", country:"Deutschland", lat:52.383, lon:13.12,
    scene:"Große Teile des Films entstanden in Babelsberg."}
  ]},
 {title:"The Hateful 8", year:2015, genre:"Western", regie:"Quentin Tarantino", cast:"Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
  beschreibung:"Acht Fremde sitzen während eines Schneesturms in einer Hütte fest – und einer von ihnen ist nicht, wer er vorgibt.",
  places:[
   {name:"Telluride, Colorado", country:"USA", lat:37.9375, lon:-107.8123,
    scene:"Die verschneite Landschaft rund um die Hütte."}
  ]},
 {title:"Once Upon a Time in Hollywood", year:2019, genre:"Komödie, Drama", regie:"Quentin Tarantino", cast:"Leonardo DiCaprio, Brad Pitt, Margot Robbie",
  beschreibung:"Ein abgehalfterter Westernstar und sein Stuntdouble im Hollywood des Jahres 1969.",
  places:[
   {name:"Musso & Frank Grill, Hollywood", country:"USA", lat:34.1016, lon:-118.3355,
    scene:"Rick trifft sich mit Agent Marvin Schwarz."},
   {name:"Corriganville Park, Simi Valley", country:"USA", lat:34.27, lon:-118.653,
    scene:"Hier wurde die Spahn Ranch nachgebaut."}
  ]}
];
