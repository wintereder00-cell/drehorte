// ===============================================================
// FILMDATEN
// Neue Filme: einen Eintrag kopieren und anpassen.
// Koordinaten: Rechtsklick auf den Ort in Google Maps -> Zahlen kopieren.
// genre, regie, cast, beschreibung: Infos für die Filmübersicht.
// "color" ist optional – ohne Angabe wird automatisch eine Farbe vergeben.
// ===============================================================
const FILMS = [
 // ---------------- Österreich ----------------
 {title:"The Sound of Music",year:1965,
  genre:"Musical", regie:"Robert Wise", cast:"Julie Andrews, Christopher Plummer",
  beschreibung:"Die junge Novizin Maria wird Kindermädchen bei der Familie des verwitweten Kapitäns von Trapp in Salzburg und bringt mit Musik wieder Leben ins strenge Haus. Als die Nationalsozialisten Österreich annektieren, muss die Familie fliehen.",
  places:[
  {name:"Mirabellgarten, Salzburg",country:"Österreich",lat:47.8059,lon:13.0418,scene:"Maria und die Kinder tanzen beim „Do-Re-Mi“ um den Pegasusbrunnen und die Treppen hinauf."},
  {name:"Schloss Leopoldskron, Salzburg",country:"Österreich",lat:47.7888,lon:13.0410,scene:"Die Seeterrasse diente als Rückseite der Villa von Trapp – hier kentert das Ruderboot."},
  {name:"Pavillon im Schlosspark Hellbrunn",country:"Österreich",lat:47.7630,lon:13.0615,scene:"Der gläserne Pavillon aus „Sixteen Going on Seventeen“ steht heute in Hellbrunn."},
  {name:"Stift Nonnberg, Salzburg",country:"Österreich",lat:47.7960,lon:13.0503,scene:"Das Kloster, in dem Maria Novizin ist."},
  {name:"Felsenreitschule, Salzburg",country:"Österreich",lat:47.7983,lon:13.0420,scene:"Schauplatz des Festivalkonzerts, bei dem die Familie „Edelweiß“ singt."},
  {name:"Basilika St. Michael, Mondsee",country:"Österreich",lat:47.8563,lon:13.3502,scene:"Hier heiraten Maria und Kapitän von Trapp."},
  {name:"Werfen",country:"Österreich",lat:47.4758,lon:13.1910,scene:"Almwiesen um Werfen sind im Hintergrund der Picknick-Szene zu sehen."}
 ]},
 {title:"Der dritte Mann",year:1949,
  genre:"Film noir", regie:"Carol Reed", cast:"Joseph Cotten, Orson Welles, Alida Valli",
  beschreibung:"Der Schriftsteller Holly Martins kommt ins zerstörte Nachkriegs-Wien, um seinen Freund Harry Lime zu besuchen – und erfährt, dass dieser gerade gestorben sein soll. Seine Nachforschungen führen ihn in die Welt des Schwarzmarkts.",
  places:[
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2166,lon:16.3958,scene:"Harry Lime hält in der Gondel seine berühmte „Kuckucksuhr“-Rede."},
  {name:"Josefsplatz, Wien",country:"Österreich",lat:48.2066,lon:16.3664,scene:"Schauplatz von Limes vorgetäuschtem Unfalltod vor dem Palais Pallavicini."},
  {name:"Wiener Zentralfriedhof",country:"Österreich",lat:48.1515,lon:16.4407,scene:"Die lange Schlussszene mit der Allee und Annas Gang an Holly vorbei."},
  {name:"Kanalisation beim Karlsplatz, Wien",country:"Österreich",lat:48.2006,lon:16.3700,scene:"Die Verfolgungsjagd im Wiener Kanalnetz – heute als „Dritte Mann Tour“ begehbar."}
 ]},
 {title:"Before Sunrise",year:1995,
  genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
  beschreibung:"Der Amerikaner Jesse und die Französin Céline lernen sich im Zug kennen und steigen spontan gemeinsam in Wien aus. Bis zum Morgen streifen sie durch die Stadt und reden über das Leben und die Liebe.",
  places:[
  {name:"Zollamtssteg, Wien",country:"Österreich",lat:48.2085,lon:16.3845,scene:"Jesse und Céline treffen die beiden Laienschauspieler auf der Brücke über den Wienfluss."},
  {name:"Kleines Café, Franziskanerplatz",country:"Österreich",lat:48.2063,lon:16.3746,scene:"Die Telefonspiel-Szene, in der sie einander „anrufen“."},
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2168,lon:16.3961,scene:"Der erste Kuss bei Sonnenuntergang in der Gondel."},
  {name:"Friedhof der Namenlosen, Simmering",country:"Österreich",lat:48.1592,lon:16.5085,scene:"Céline erzählt von den unbekannten Toten aus der Donau."}
 ]},
 {title:"James Bond 007: Spectre",year:2015,
  genre:"Action, Agentenfilm", regie:"Sam Mendes", cast:"Daniel Craig, Léa Seydoux, Christoph Waltz",
  beschreibung:"Eine geheime Botschaft aus der Vergangenheit führt Bond auf die Spur der Verbrecherorganisation Spectre. Dabei stößt er auf eine Verbindung zu seinem eigenen Leben.",
  places:[
  {name:"ice Q, Gaislachkogl, Sölden",country:"Österreich",lat:46.9399,lon:10.9609,scene:"Das Gipfelrestaurant wurde zur „Hoffler Klinik“ von Madeleine Swann."},
  {name:"Obertilliach, Osttirol",country:"Österreich",lat:46.7039,lon:12.6203,scene:"Das verschneite Bergdorf ist Kulisse für Szenen rund um die Klinik."},
  {name:"Altausseer See",country:"Österreich",lat:47.6390,lon:13.7647,scene:"Bond findet Mr. White in dessen abgelegener Hütte am See."}
 ]},
 {title:"James Bond 007: Ein Quantum Trost",year:2008,
  genre:"Action, Agentenfilm", regie:"Marc Forster", cast:"Daniel Craig, Olga Kurylenko, Mathieu Amalric",
  beschreibung:"Bond will den Tod von Vesper Lynd rächen und deckt dabei die Organisation Quantum auf, die hinter einem Geschäftsmann die Wasserversorgung Boliviens an sich reißen will.",
  places:[
  {name:"Seebühne Bregenz",country:"Österreich",lat:47.5063,lon:9.7370,scene:"Die Tosca-Aufführung auf dem Bodensee, bei der Bond die Quantum-Runde belauscht."},
  {name:"Piazza del Campo, Siena",country:"Italien",lat:43.3184,lon:11.3316,scene:"Die Verfolgungsjagd über die Dächer während des Pferderennens Palio."}
 ]},
 {title:"James Bond 007: Der Hauch des Todes",year:1987,
  genre:"Action, Agentenfilm", regie:"John Glen", cast:"Timothy Dalton, Maryam d'Abo",
  beschreibung:"Bond soll einem sowjetischen General zur Flucht in den Westen verhelfen und gerät dabei in ein Komplott aus Waffenhandel und Täuschung, das ihn von Bratislava über Wien bis nach Afghanistan führt.",
  places:[
  {name:"Schloss Schönbrunn, Wien",country:"Österreich",lat:48.1848,lon:16.3122,scene:"Bond und Kara gehen durch den Schlosspark."},
  {name:"Volksoper Wien",country:"Österreich",lat:48.2246,lon:16.3505,scene:"Kara spielt als Cellistin im Orchester."},
  {name:"Wiener Riesenrad, Prater",country:"Österreich",lat:48.2164,lon:16.3955,scene:"Bond und Kara im Riesenrad – eine Hommage an „Der dritte Mann“."},
  {name:"Weissensee, Kärnten",country:"Österreich",lat:46.7150,lon:13.3200,scene:"Auf dem zugefrorenen See entstanden die Eisszenen der Grenzflucht."}
 ]},
 {title:"Mission: Impossible – Rogue Nation",year:2015,
  genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Rebecca Ferguson, Simon Pegg",
  beschreibung:"Die IMF wird aufgelöst, doch Ethan Hunt jagt auf eigene Faust das „Syndikat“, eine Untergrundorganisation aus ehemaligen Agenten.",
  places:[
  {name:"Wiener Staatsoper",country:"Österreich",lat:48.2031,lon:16.3692,scene:"Ethan Hunt verhindert während einer Turandot-Aufführung ein Attentat."}
 ]},
 {title:"Agenten sterben einsam",year:1968,
  genre:"Kriegsfilm, Action", regie:"Brian G. Hutton", cast:"Richard Burton, Clint Eastwood",
  beschreibung:"Im Zweiten Weltkrieg soll ein alliiertes Kommando einen gefangenen US-General aus einer scheinbar uneinnehmbaren Bergfestung in den Alpen befreien.",
  places:[
  {name:"Burg Hohenwerfen",country:"Österreich",lat:47.4833,lon:13.1897,scene:"Die Burg spielt das schwer bewachte „Schloss Adler“."},
  {name:"Feuerkogel-Seilbahn, Ebensee",country:"Österreich",lat:47.8130,lon:13.7250,scene:"Die legendären Kämpfe auf dem Dach der Seilbahngondel."}
 ]},
 {title:"Sissi (Trilogie)",year:1955,
  genre:"Historienfilm", regie:"Ernst Marischka", cast:"Romy Schneider, Karlheinz Böhm",
  beschreibung:"Die Trilogie erzählt romantisiert die Geschichte der bayerischen Prinzessin Elisabeth, die sich in Kaiser Franz Joseph verliebt und Kaiserin von Österreich wird.",
  places:[
  {name:"Schloss Schönbrunn, Wien",country:"Österreich",lat:48.1846,lon:16.3126,scene:"Kaiserliche Szenen am Wiener Hof."},
  {name:"Kaiservilla, Bad Ischl",country:"Österreich",lat:47.7157,lon:13.6237,scene:"Die Sommerresidenz, in der sich Franz Joseph und Sissi verloben."},
  {name:"Schloss Fuschl, Fuschlsee",country:"Österreich",lat:47.7975,lon:13.2964,scene:"Das Schloss am Fuschlsee diente als Kulisse für Possenhofen."}
 ]},

 // ---------------- Europa ----------------
 {title:"Ein Herz und eine Krone",year:1953,
  genre:"Romantische Komödie", regie:"William Wyler", cast:"Audrey Hepburn, Gregory Peck",
  beschreibung:"Eine junge Prinzessin entflieht während eines Staatsbesuchs in Rom ihren Pflichten und verbringt einen Tag mit einem amerikanischen Reporter, der auf eine Exklusivstory hofft.",
  places:[
  {name:"Trevi-Brunnen, Rom",country:"Italien",lat:41.9009,lon:12.4833,scene:"Prinzessin Ann lässt sich in der Nähe des Brunnens die Haare kurz schneiden."},
  {name:"Spanische Treppe, Rom",country:"Italien",lat:41.9060,lon:12.4828,scene:"Ann isst ein Eis auf der Treppe, als Joe sie „zufällig“ wiedertrifft."},
  {name:"Bocca della Verità, Rom",country:"Italien",lat:41.8881,lon:12.4815,scene:"Joe tut so, als hätte der Mund der Wahrheit seine Hand abgebissen."}
 ]},
 {title:"La Dolce Vita",year:1960,
  genre:"Drama", regie:"Federico Fellini", cast:"Marcello Mastroianni, Anita Ekberg",
  beschreibung:"Ein Klatschreporter treibt durch das mondäne Nachtleben Roms und sucht zwischen Partys, Stars und Skandalen nach Sinn und Liebe.",
  places:[
  {name:"Trevi-Brunnen, Rom",country:"Italien",lat:41.9011,lon:12.4831,scene:"Anita Ekberg watet nachts im Abendkleid durch den Brunnen."}
 ]},
 {title:"Die fabelhafte Welt der Amélie",year:2001,
  genre:"Komödie, Romantik", regie:"Jean-Pierre Jeunet", cast:"Audrey Tautou, Mathieu Kassovitz",
  beschreibung:"Die schüchterne Kellnerin Amélie beschließt, heimlich das Leben der Menschen um sie herum zu verbessern – und muss dabei lernen, sich selbst ihr eigenes Glück zu erlauben.",
  places:[
  {name:"Café des Deux Moulins, Paris",country:"Frankreich",lat:48.8848,lon:2.3335,scene:"Das Café in Montmartre, in dem Amélie als Kellnerin arbeitet."},
  {name:"Canal Saint-Martin, Paris",country:"Frankreich",lat:48.8710,lon:2.3650,scene:"Amélie lässt hier Steine über das Wasser hüpfen."},
  {name:"Sacré-Cœur, Montmartre",country:"Frankreich",lat:48.8867,lon:2.3431,scene:"Rund um die Basilika spielt die Schnitzeljagd mit Nino."}
 ]},
 {title:"Before Sunset",year:2004,
  genre:"Liebesfilm", regie:"Richard Linklater", cast:"Ethan Hawke, Julie Delpy",
  beschreibung:"Neun Jahre nach ihrer Nacht in Wien treffen sich Jesse und Céline in Paris wieder. Bis zu Jesses Abflug bleibt ihnen nur ein Nachmittag.",
  places:[
  {name:"Shakespeare and Company, Paris",country:"Frankreich",lat:48.8526,lon:2.3471,scene:"Jesse liest aus seinem Buch, als Céline nach neun Jahren auftaucht."}
 ]},
 {title:"The Da Vinci Code – Sakrileg",year:2006,
  genre:"Thriller", regie:"Ron Howard", cast:"Tom Hanks, Audrey Tautou, Ian McKellen",
  beschreibung:"Der Symbologe Robert Langdon wird nach einem Mord im Louvre verdächtigt und folgt mit einer Kryptologin einer Spur von Rätseln, die auf ein jahrhundertealtes Geheimnis deuten.",
  places:[
  {name:"Louvre, Paris",country:"Frankreich",lat:48.8606,lon:2.3376,scene:"Der Mord an Kurator Saunière und das Finale unter der Glaspyramide."},
  {name:"Rosslyn Chapel, Schottland",country:"Vereinigtes Königreich",lat:55.8554,lon:-3.1602,scene:"Langdon und Sophie entschlüsseln hier die letzte Spur."}
 ]},
 {title:"Dunkirk",year:2017,
  genre:"Kriegsfilm", regie:"Christopher Nolan", cast:"Fionn Whitehead, Tom Hardy, Kenneth Branagh",
  beschreibung:"1940 sind hunderttausende alliierte Soldaten am Strand von Dünkirchen eingeschlossen. Der Film erzählt ihre Rettung zu Land, zu Wasser und in der Luft.",
  places:[
  {name:"Strand von Dunkerque (Malo-les-Bains)",country:"Frankreich",lat:51.0530,lon:2.4020,scene:"Die Evakuierungsszenen wurden am Originalschauplatz gedreht."}
 ]},
 {title:"Harry Potter (Filmreihe)",year:2001,
  genre:"Fantasy", regie:"Chris Columbus u. a.", cast:"Daniel Radcliffe, Emma Watson, Rupert Grint",
  beschreibung:"Der Waisenjunge Harry erfährt, dass er ein Zauberer ist, und besucht die Zauberschule Hogwarts, wo er sich dem dunklen Magier Voldemort stellen muss.",
  places:[
  {name:"Glenfinnan-Viadukt, Schottland",country:"Vereinigtes Königreich",lat:56.8763,lon:-5.4318,scene:"Der Hogwarts-Express fährt über das Viadukt."},
  {name:"Alnwick Castle, England",country:"Vereinigtes Königreich",lat:55.4155,lon:-1.7059,scene:"Im Burghof findet Harrys erste Flugstunde statt."},
  {name:"Gloucester Cathedral, England",country:"Vereinigtes Königreich",lat:51.8676,lon:-2.2467,scene:"Der Kreuzgang diente als Gänge von Hogwarts."},
  {name:"Leadenhall Market, London",country:"Vereinigtes Königreich",lat:51.5128,lon:-0.0835,scene:"Die Gegend um den Eingang zum Tropfenden Kessel in „Der Stein der Weisen“."}
 ]},
 {title:"Notting Hill",year:1999,
  genre:"Romantische Komödie", regie:"Roger Michell", cast:"Julia Roberts, Hugh Grant",
  beschreibung:"Ein Londoner Buchhändler verliebt sich in einen weltberühmten Hollywoodstar, der zufällig seinen Laden betritt.",
  places:[
  {name:"Westbourne Park Road, London",country:"Vereinigtes Königreich",lat:51.5161,lon:-0.2054,scene:"Das Haus mit der blauen Tür, in dem William wohnt."}
 ]},
 {title:"Star Wars: Das Erwachen der Macht / Die letzten Jedi",year:2015,
  genre:"Science-Fiction", regie:"J. J. Abrams / Rian Johnson", cast:"Daisy Ridley, Mark Hamill, Adam Driver",
  beschreibung:"Die junge Rey entdeckt ihre Verbindung zur Macht und sucht den verschollenen Jedi-Meister Luke Skywalker, der sich auf einer abgelegenen Insel versteckt.",
  places:[
  {name:"Skellig Michael",country:"Irland",lat:51.7715,lon:-10.5390,scene:"Die Felseninsel ist Luke Skywalkers Zufluchtsort Ahch-To."},
  {name:"Malin Head",country:"Irland",lat:55.3800,lon:-7.3730,scene:"Weitere Küstenszenen von Ahch-To in „Die letzten Jedi“."},
  {name:"Stradun, Dubrovnik",country:"Kroatien",lat:42.6413,lon:18.1081,scene:"Die Altstadt wurde zur Casino-Stadt Canto Bight in „Die letzten Jedi“."}
 ]},
 {title:"Braveheart",year:1995,
  genre:"Historienfilm", regie:"Mel Gibson", cast:"Mel Gibson, Sophie Marceau",
  beschreibung:"Im 13. Jahrhundert führt William Wallace die Schotten in einen Aufstand gegen die englische Herrschaft.",
  places:[
  {name:"Glen Nevis, Schottland",country:"Vereinigtes Königreich",lat:56.7930,lon:-5.0800,scene:"Die Highland-Landschaften rund um William Wallaces Heimat."},
  {name:"Trim Castle",country:"Irland",lat:53.5547,lon:-6.7908,scene:"Die Burg stellte die Stadt York dar."}
 ]},
 {title:"James Bond 007: Casino Royale",year:2006,
  genre:"Action, Agentenfilm", regie:"Martin Campbell", cast:"Daniel Craig, Eva Green, Mads Mikkelsen",
  beschreibung:"Auf seiner ersten Mission als 007 soll Bond den Terror-Finanzier Le Chiffre bei einem Pokerturnier in den Ruin treiben.",
  places:[
  {name:"Grandhotel Pupp, Karlsbad",country:"Tschechien",lat:50.2195,lon:12.8805,scene:"Das Hotel spielte das „Hotel Splendide“ in Montenegro."},
  {name:"Canal Grande, Venedig",country:"Italien",lat:45.4380,lon:12.3358,scene:"Das Finale mit dem einstürzenden Palazzo."},
  {name:"Villa del Balbianello, Comer See",country:"Italien",lat:45.9658,lon:9.2028,scene:"Bond erholt sich hier nach der Folter und gesteht Vesper seine Liebe."}
 ]},
 {title:"James Bond 007: Keine Zeit zu sterben",year:2021,
  genre:"Action, Agentenfilm", regie:"Cary Joji Fukunaga", cast:"Daniel Craig, Léa Seydoux, Rami Malek",
  beschreibung:"Bond hat sich aus dem Dienst zurückgezogen, wird aber zurückgeholt, als eine gefährliche Biowaffe in falsche Hände gerät.",
  places:[
  {name:"Matera",country:"Italien",lat:40.6664,lon:16.6043,scene:"Die Verfolgungsjagd mit dem Aston Martin durch die Felsenstadt."},
  {name:"Atlanterhavsveien",country:"Norwegen",lat:63.0170,lon:7.3550,scene:"Die spektakuläre Küstenstraße ist in der Verfolgungsjagd zu sehen."}
 ]},
 {title:"Indiana Jones und der letzte Kreuzzug",year:1989,
  genre:"Abenteuer", regie:"Steven Spielberg", cast:"Harrison Ford, Sean Connery",
  beschreibung:"Indiana Jones sucht seinen verschwundenen Vater, der dem Heiligen Gral auf der Spur war – und liefert sich dabei ein Wettrennen mit den Nazis.",
  places:[
  {name:"San Barnaba, Venedig",country:"Italien",lat:45.4335,lon:12.3264,scene:"Die Kirche diente als Außenansicht der Bibliothek mit den Katakomben."},
  {name:"Playa de Mónsul, Almería",country:"Spanien",lat:36.7322,lon:-2.1477,scene:"Henry Jones vertreibt mit seinem Regenschirm einen Schwarm Möwen, um ein Flugzeug abzuschießen."}
 ]},
 {title:"Call Me by Your Name",year:2017,
  genre:"Drama, Romantik", regie:"Luca Guadagnino", cast:"Timothée Chalamet, Armie Hammer",
  beschreibung:"Im Sommer 1983 verliebt sich der 17-jährige Elio in Norditalien in Oliver, einen Doktoranden, der bei seiner Familie zu Gast ist.",
  places:[
  {name:"Crema, Lombardei",country:"Italien",lat:45.3638,lon:9.6847,scene:"Die Kleinstadt, in der Elio und Oliver ihren Sommer verbringen."}
 ]},
 {title:"Amadeus",year:1984,
  genre:"Historienfilm, Drama", regie:"Miloš Forman", cast:"F. Murray Abraham, Tom Hulce",
  beschreibung:"Der Hofkomponist Antonio Salieri erzählt, wie er am Genie des jungen Mozart verzweifelte und ihn aus Neid zu zerstören versuchte.",
  places:[
  {name:"Ständetheater, Prag",country:"Tschechien",lat:50.0862,lon:14.4235,scene:"Hier wurden die Opernszenen gedreht – im Theater, in dem „Don Giovanni“ uraufgeführt wurde."}
 ]},
 {title:"Grand Budapest Hotel",year:2014,
  genre:"Komödie", regie:"Wes Anderson", cast:"Ralph Fiennes, Tony Revolori",
  beschreibung:"Der legendäre Concierge Gustave H. und sein Lobby-Boy Zero geraten in einen Erbschaftsstreit um ein wertvolles Gemälde.",
  places:[
  {name:"Görlitzer Warenhaus, Görlitz",country:"Deutschland",lat:51.1531,lon:14.9876,scene:"Das Jugendstil-Kaufhaus wurde zur Lobby des Hotels."}
 ]},
 {title:"Brügge sehen… und sterben?",year:2008,
  genre:"Schwarze Komödie", regie:"Martin McDonagh", cast:"Colin Farrell, Brendan Gleeson",
  beschreibung:"Zwei Auftragskiller sollen nach einem missglückten Job in Brügge untertauchen und warten auf neue Befehle ihres Bosses.",
  places:[
  {name:"Belfried, Brügge",country:"Belgien",lat:51.2085,lon:3.2245,scene:"Der Glockenturm ist Schauplatz des dramatischen Finales."}
 ]},
 {title:"Vicky Cristina Barcelona",year:2008,
  genre:"Romantische Komödie", regie:"Woody Allen", cast:"Scarlett Johansson, Javier Bardem, Penélope Cruz",
  beschreibung:"Zwei amerikanische Freundinnen verbringen einen Sommer in Barcelona und verlieben sich beide in denselben Maler.",
  places:[
  {name:"Park Güell, Barcelona",country:"Spanien",lat:41.4145,lon:2.1527,scene:"Vicky und Cristina erkunden Gaudís Park."}
 ]},
 {title:"Mamma Mia!",year:2008,
  genre:"Musical", regie:"Phyllida Lloyd", cast:"Meryl Streep, Amanda Seyfried, Pierce Brosnan",
  beschreibung:"Kurz vor ihrer Hochzeit auf einer griechischen Insel lädt Sophie heimlich drei Männer ein, die ihr Vater sein könnten.",
  places:[
  {name:"Agios Ioannis Kastri, Skopelos",country:"Griechenland",lat:39.1713,lon:23.6428,scene:"Die Kapelle auf dem Felsen, zu der die Hochzeitsgesellschaft hinaufsteigt."},
  {name:"Damouchari, Pilion",country:"Griechenland",lat:39.4045,lon:23.1795,scene:"In der kleinen Bucht entstanden Szenen rund um Donnas Hotel."}
 ]},
 {title:"Mission: Impossible – Fallout",year:2018,
  genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Henry Cavill, Rebecca Ferguson",
  beschreibung:"Nach einer missglückten Mission muss Ethan Hunt verhindern, dass drei Plutoniumkerne in die Hände von Terroristen gelangen.",
  places:[
  {name:"Preikestolen",country:"Norwegen",lat:58.9864,lon:6.1903,scene:"Die Felskanzel ist Schauplatz des Helikopter-Finales."}
 ]},
 // ---------------- Der Pate ----------------
 {title:"Der Pate",year:1972,
  genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Marlon Brando, Al Pacino, James Caan",
  beschreibung:"Don Vito Corleone führt eine mächtige Mafiafamilie in New York. Nach einem Attentat auf ihn wird sein jüngster Sohn Michael, der nie Teil des Geschäfts sein wollte, Schritt für Schritt zum neuen Paten. Nach einem Mord muss Michael nach Sizilien untertauchen.",
  places:[
  {name:"Bar Vitelli, Savoca",country:"Italien",lat:37.9547,lon:15.3384,scene:"Michael hält in der Bar bei Apollonias Vater um ihre Hand an. Die Bar ist bis heute geöffnet."},
  {name:"Chiesa di Santa Lucia, Savoca",country:"Italien",lat:37.9558,lon:15.3393,scene:"Die Hochzeit von Michael und Apollonia mit dem Brautzug durch das Dorf."},
  {name:"Castello degli Schiavi, Fiumefreddo di Sicilia",country:"Italien",lat:37.7790,lon:15.2120,scene:"Das Anwesen von Don Tommasino, in dem Michael sich versteckt – hier stirbt Apollonia bei der Autobombe."}
 ]},
 {title:"Der Pate – Teil II",year:1974,
  genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Al Pacino, Robert De Niro, Robert Duvall",
  beschreibung:"Der Film erzählt parallel zwei Geschichten: den Aufstieg des jungen Vito Corleone vom sizilianischen Waisenkind zum New Yorker Paten und Michaels Kampf, die Macht der Familie in den 1950er-Jahren zu sichern.",
  places:[
  {name:"Forza d'Agrò",country:"Italien",lat:37.9157,lon:15.3360,scene:"Das Bergdorf spielt Corleone: Hier beginnt die Geschichte des kleinen Vito, dessen Familie ermordet wird."},
  {name:"Pescheria (Salone degli Incanti), Triest",country:"Italien",lat:45.6483,lon:13.7641,scene:"Die alte Fischhalle wurde zur Einwanderungsstation Ellis Island, wo der junge Vito in Amerika ankommt."},
  {name:"Castello degli Schiavi, Fiumefreddo di Sicilia",country:"Italien",lat:37.7793,lon:15.2117,scene:"Erneut Don Tommasinos Anwesen, als der erwachsene Vito nach Sizilien zurückkehrt."}
 ]},
 {title:"Der Pate – Teil III",year:1990,
  genre:"Mafiafilm, Drama", regie:"Francis Ford Coppola", cast:"Al Pacino, Diane Keaton, Andy García",
  beschreibung:"Der alternde Michael Corleone will seine Familie endlich legal machen und verhandelt mit dem Vatikan – doch die Vergangenheit holt ihn ein.",
  places:[
  {name:"Teatro Massimo, Palermo",country:"Italien",lat:38.1203,lon:13.3571,scene:"Das Finale: die Opernaufführung und die tragische Szene auf der Freitreppe."},
  {name:"Forza d'Agrò",country:"Italien",lat:37.9160,lon:15.3365,scene:"Das Dorf ist wieder Corleone, wohin Michael mit seiner Familie reist."}
 ]},

 // ---------------- Vereinigtes Königreich & Irland ----------------
 {title:"James Bond 007: Skyfall",year:2012,
  genre:"Action, Agentenfilm", regie:"Sam Mendes", cast:"Daniel Craig, Judi Dench, Javier Bardem",
  beschreibung:"Nach einem Angriff auf den MI6 muss Bond M vor einem ehemaligen Agenten schützen, der sich an ihr rächen will. Die Spur führt zurück zu Bonds Elternhaus in Schottland.",
  places:[
  {name:"National Gallery, London",country:"Vereinigtes Königreich",lat:51.5089,lon:-0.1283,scene:"Bond trifft vor einem Turner-Gemälde zum ersten Mal den neuen Q."},
  {name:"Glen Etive, Schottland",country:"Vereinigtes Königreich",lat:56.6181,lon:-5.0336,scene:"Bond und M halten mit dem Aston Martin DB5 im menschenleeren Tal."}
 ]},
 {title:"28 Days Later",year:2002,
  genre:"Horror", regie:"Danny Boyle", cast:"Cillian Murphy, Naomie Harris",
  beschreibung:"Ein Mann erwacht aus dem Koma und findet London menschenleer vor: Ein Virus hat die Bevölkerung in rasende Infizierte verwandelt.",
  places:[
  {name:"Westminster Bridge, London",country:"Vereinigtes Königreich",lat:51.5007,lon:-0.1219,scene:"Jim irrt allein über die völlig leere Brücke – im Morgengrauen bei kurzer Sperrung gedreht."}
 ]},
 {title:"Liebe braucht keine Ferien",year:2006,
  genre:"Romantische Komödie", regie:"Nancy Meyers", cast:"Cameron Diaz, Kate Winslet, Jude Law, Jack Black",
  beschreibung:"Zwei Frauen mit Liebeskummer tauschen über Weihnachten ihre Häuser – eine zieht von Los Angeles in ein englisches Dorf, die andere umgekehrt.",
  places:[
  {name:"Shere, Surrey",country:"Vereinigtes Königreich",lat:51.2193,lon:-0.4648,scene:"Das malerische Dorf, in dem Iris' Cottage steht."}
 ]},
 {title:"Bridget Jones – Schokolade zum Frühstück",year:2001,
  genre:"Romantische Komödie", regie:"Sharon Maguire", cast:"Renée Zellweger, Hugh Grant, Colin Firth",
  beschreibung:"Die chaotische Londonerin Bridget beginnt ein Tagebuch und steht zwischen ihrem charmanten Chef und dem steifen Anwalt Mark Darcy.",
  places:[
  {name:"Borough Market, London",country:"Vereinigtes Königreich",lat:51.5055,lon:-0.0910,scene:"Bridgets Wohnung liegt über dem Pub „The Globe“ am Markt."}
 ]},
 {title:"Die Ritter der Kokosnuss",year:1975,
  genre:"Komödie", regie:"Terry Gilliam, Terry Jones", cast:"Graham Chapman, John Cleese, Eric Idle",
  beschreibung:"König Artus und seine Ritter suchen den Heiligen Gral – mit Kokosnüssen statt Pferden und jeder Menge absurdem Humor.",
  places:[
  {name:"Doune Castle, Schottland",country:"Vereinigtes Königreich",lat:56.1853,lon:-4.0503,scene:"Die Burg dient gleich als mehrere Schauplätze, darunter das Schloss der spottenden Franzosen."}
 ]},
 {title:"Highlander – Es kann nur einen geben",year:1986,
  genre:"Fantasy, Action", regie:"Russell Mulcahy", cast:"Christopher Lambert, Sean Connery",
  beschreibung:"Der Schotte Connor MacLeod ist unsterblich und muss über Jahrhunderte gegen andere Unsterbliche kämpfen, bis nur noch einer übrig ist.",
  places:[
  {name:"Eilean Donan Castle, Schottland",country:"Vereinigtes Königreich",lat:57.2740,lon:-5.5161,scene:"Die Burg ist Heimat des Clans MacLeod im 16. Jahrhundert."}
 ]},
 {title:"Trainspotting",year:1996,
  genre:"Drama, Komödie", regie:"Danny Boyle", cast:"Ewan McGregor, Robert Carlyle, Jonny Lee Miller",
  beschreibung:"Eine Clique junger Heroinabhängiger in Edinburgh schlägt sich zwischen Rausch, Entzug und kleinen Verbrechen durchs Leben.",
  places:[
  {name:"Princes Street, Edinburgh",country:"Vereinigtes Königreich",lat:55.9520,lon:-3.1960,scene:"Die berühmte Eröffnung: Renton und Spud rennen vor Ladendetektiven davon."}
 ]},
 {title:"Paddington",year:2014,
  genre:"Familienfilm, Komödie", regie:"Paul King", cast:"Ben Whishaw (Stimme), Hugh Bonneville, Sally Hawkins",
  beschreibung:"Ein höflicher Bär aus Peru kommt nach London und findet bei der Familie Brown ein neues Zuhause.",
  places:[
  {name:"Chalcot Crescent, Primrose Hill",country:"Vereinigtes Königreich",lat:51.5409,lon:-0.1550,scene:"Das bunte Reihenhaus der Familie Brown in „Windsor Gardens“."}
 ]},
 {title:"Der Soldat James Ryan",year:1998,
  genre:"Kriegsfilm", regie:"Steven Spielberg", cast:"Tom Hanks, Matt Damon, Tom Sizemore",
  beschreibung:"Nach der Landung in der Normandie soll ein Trupp US-Soldaten den Fallschirmjäger James Ryan finden, dessen drei Brüder gefallen sind.",
  places:[
  {name:"Curracloe Beach, Wexford",country:"Irland",lat:52.3880,lon:-6.3640,scene:"Der irische Strand stellte Omaha Beach in der berühmten Landungssequenz dar."}
 ]},
 {title:"The Banshees of Inisherin",year:2022,
  genre:"Tragikomödie", regie:"Martin McDonagh", cast:"Colin Farrell, Brendan Gleeson",
  beschreibung:"Auf einer kleinen irischen Insel beendet ein Mann von einem Tag auf den anderen die Freundschaft zu seinem besten Freund – mit dramatischen Folgen.",
  places:[
  {name:"Inishmore, Aran-Inseln",country:"Irland",lat:53.1167,lon:-9.7000,scene:"Steinmauern und Küstenwege der fiktiven Insel Inisherin."},
  {name:"Achill Island",country:"Irland",lat:53.9600,lon:-10.0000,scene:"Hier entstanden unter anderem Szenen rund um Pádraics Cottage und den Pub."}
 ]},

 // ---------------- Frankreich ----------------
 {title:"Inception",year:2010,
  genre:"Science-Fiction, Thriller", regie:"Christopher Nolan", cast:"Leonardo DiCaprio, Elliot Page, Joseph Gordon-Levitt",
  beschreibung:"Ein Team von Spezialisten dringt in Träume ein, um Ideen zu stehlen – und soll diesmal einem Mann einen Gedanken einpflanzen.",
  places:[
  {name:"Pont de Bir-Hakeim, Paris",country:"Frankreich",lat:48.8556,lon:2.2876,scene:"Ariadne erschafft im Traum die Spiegeltür auf der Brücke."}
 ]},
 {title:"Midnight in Paris",year:2011,
  genre:"Komödie, Fantasy", regie:"Woody Allen", cast:"Owen Wilson, Marion Cotillard, Rachel McAdams",
  beschreibung:"Ein Drehbuchautor wird jede Nacht um Mitternacht ins Paris der 1920er-Jahre versetzt und trifft dort Hemingway, Fitzgerald und Picasso.",
  places:[
  {name:"Saint-Étienne-du-Mont, Paris",country:"Frankreich",lat:48.8463,lon:2.3480,scene:"Auf diesen Kirchenstufen wartet Gil, bis ihn der Oldtimer um Mitternacht abholt."}
 ]},
 {title:"Die Bourne Identität",year:2002,
  genre:"Action, Thriller", regie:"Doug Liman", cast:"Matt Damon, Franka Potente",
  beschreibung:"Ein Mann ohne Gedächtnis wird aus dem Mittelmeer gefischt und entdeckt, dass er ein ausgebildeter Killer ist, den nun die CIA jagt.",
  places:[
  {name:"Pont Neuf, Paris",country:"Frankreich",lat:48.8572,lon:2.3412,scene:"Bourne lockt den CIA-Chef Conklin zu einem Treffen auf die Brücke."}
 ]},
 {title:"Ronin",year:1998,
  genre:"Action, Thriller", regie:"John Frankenheimer", cast:"Robert De Niro, Jean Reno",
  beschreibung:"Eine Gruppe von Söldnern soll in Frankreich einen geheimnisvollen Koffer stehlen. Berühmt für seine Autoverfolgungsjagden.",
  places:[
  {name:"Amphitheater, Arles",country:"Frankreich",lat:43.6778,lon:4.6311,scene:"Im römischen Amphitheater kommt es zur Übergabe und Schießerei."}
 ]},
 {title:"Über den Dächern von Nizza",year:1955,
  genre:"Krimi, Romantik", regie:"Alfred Hitchcock", cast:"Cary Grant, Grace Kelly",
  beschreibung:"Ein ehemaliger Juwelendieb an der Côte d'Azur muss beweisen, dass nicht er hinter einer neuen Einbruchsserie steckt.",
  places:[
  {name:"Hotel Carlton, Cannes",country:"Frankreich",lat:43.5513,lon:7.0285,scene:"Das Luxushotel, in dem Grace Kelly und ihre Mutter wohnen."}
 ]},
 {title:"Der längste Tag",year:1962,
  genre:"Kriegsfilm", regie:"Ken Annakin u. a.", cast:"John Wayne, Henry Fonda, Robert Mitchum",
  beschreibung:"Der Film erzählt die Landung der Alliierten in der Normandie am 6. Juni 1944 aus der Sicht beider Seiten.",
  places:[
  {name:"Sainte-Mère-Église, Normandie",country:"Frankreich",lat:49.4085,lon:-1.3163,scene:"Der Fallschirmjäger, der am Kirchturm hängen bleibt."}
 ]},
 {title:"Das Boot",year:1981,
  genre:"Kriegsfilm", regie:"Wolfgang Petersen", cast:"Jürgen Prochnow, Herbert Grönemeyer",
  beschreibung:"Die beklemmende Feindfahrt eines deutschen U-Boots im Zweiten Weltkrieg aus Sicht der jungen Besatzung.",
  places:[
  {name:"U-Boot-Bunker La Pallice, La Rochelle",country:"Frankreich",lat:46.1580,lon:-1.2235,scene:"Der originale Bunker diente als Stützpunkt, aus dem U 96 ausläuft."}
 ]},

 // ---------------- Italien & Malta ----------------
 {title:"Der talentierte Mr. Ripley",year:1999,
  genre:"Thriller", regie:"Anthony Minghella", cast:"Matt Damon, Jude Law, Gwyneth Paltrow",
  beschreibung:"Der junge Tom Ripley soll einen reichen Erben aus Italien zurückholen – und schlüpft stattdessen immer tiefer in dessen Leben.",
  places:[
  {name:"Ischia Ponte und Castello Aragonese",country:"Italien",lat:40.7316,lon:13.9640,scene:"Ischia stellte das fiktive Küstendorf Mongibello dar."}
 ]},
 {title:"Der Postmann",year:1994,
  genre:"Drama", regie:"Michael Radford", cast:"Massimo Troisi, Philippe Noiret",
  beschreibung:"Ein einfacher Fischersohn wird Briefträger für den chilenischen Dichter Pablo Neruda im Exil und entdeckt durch ihn die Poesie.",
  places:[
  {name:"Marina di Corricella, Procida",country:"Italien",lat:40.7616,lon:14.0258,scene:"Der bunte Fischerhafen ist Mittelpunkt des Dorflebens."},
  {name:"Pollara, Salina",country:"Italien",lat:38.5780,lon:14.8020,scene:"Hier steht das Haus, in dem Neruda wohnt."}
 ]},
 {title:"Cinema Paradiso",year:1988,
  genre:"Drama", regie:"Giuseppe Tornatore", cast:"Philippe Noiret, Salvatore Cascio",
  beschreibung:"Ein berühmter Regisseur erinnert sich an seine Kindheit in einem sizilianischen Dorf und an den Filmvorführer, der ihm die Liebe zum Kino schenkte.",
  places:[
  {name:"Palazzo Adriano, Sizilien",country:"Italien",lat:37.6810,lon:13.3795,scene:"Der Dorfplatz mit dem Kino Paradiso."},
  {name:"Cefalù",country:"Italien",lat:38.0370,lon:14.0230,scene:"Die Freiluft-Vorführung am Hafen."}
 ]},
 {title:"Gladiator",year:2000,
  genre:"Historienfilm, Action", regie:"Ridley Scott", cast:"Russell Crowe, Joaquin Phoenix",
  beschreibung:"Der römische General Maximus wird verraten, seine Familie ermordet. Als Gladiator kämpft er sich zurück nach Rom, um sich am Kaiser zu rächen.",
  places:[
  {name:"Val d'Orcia bei Pienza",country:"Italien",lat:43.0745,lon:11.6650,scene:"Die Weizenfelder, durch die Maximus' Hand im Jenseits streift."},
  {name:"Fort Ricasoli, Kalkara",country:"Malta",lat:35.8970,lon:14.5260,scene:"Hier wurde das Kolosseum für die Arenakämpfe nachgebaut."}
 ]},
 {title:"Der englische Patient",year:1996,
  genre:"Drama, Romantik", regie:"Anthony Minghella", cast:"Ralph Fiennes, Juliette Binoche, Kristin Scott Thomas",
  beschreibung:"Eine Krankenschwester pflegt am Ende des Zweiten Weltkriegs in einem toskanischen Kloster einen schwer verbrannten Mann, dessen Liebesgeschichte sich langsam enthüllt.",
  places:[
  {name:"Kloster Sant'Anna in Camprena",country:"Italien",lat:43.1200,lon:11.7010,scene:"Das verlassene Kloster, in dem Hana den Patienten pflegt."}
 ]},
 {title:"New Moon – Biss zur Mittagsstunde",year:2009,
  genre:"Fantasy, Romantik", regie:"Chris Weitz", cast:"Kristen Stewart, Robert Pattinson",
  beschreibung:"Bella muss nach Italien reisen, um Edward davon abzuhalten, sich den mächtigen Volturi zu offenbaren.",
  places:[
  {name:"Piazza Grande, Montepulciano",country:"Italien",lat:43.0928,lon:11.7809,scene:"Der Platz stellte Volterra dar, wo Bella Edward in letzter Sekunde erreicht."}
 ]},
 {title:"Unter der Sonne der Toskana",year:2003,
  genre:"Romantik, Komödie", regie:"Audrey Wells", cast:"Diane Lane, Raoul Bova",
  beschreibung:"Eine Schriftstellerin kauft nach ihrer Scheidung spontan eine alte Villa in der Toskana und beginnt ein neues Leben.",
  places:[
  {name:"Cortona",country:"Italien",lat:43.2753,lon:11.9856,scene:"Die Bergstadt ist Frances' neue Heimat."}
 ]},
 {title:"Star Wars: Episode I & II",year:1999,
  genre:"Science-Fiction", regie:"George Lucas", cast:"Natalie Portman, Ewan McGregor, Hayden Christensen",
  beschreibung:"Die Vorgeschichte der Saga: der junge Anakin Skywalker, die Königin Padmé Amidala und der Aufstieg des Imperators.",
  places:[
  {name:"Reggia di Caserta",country:"Italien",lat:41.0732,lon:14.3266,scene:"Das Königsschloss diente als Palast von Naboo."},
  {name:"Villa del Balbianello, Comer See",country:"Italien",lat:45.9655,lon:9.2025,scene:"Hier heiraten Anakin und Padmé am Ende von Episode II."},
  {name:"Plaza de España, Sevilla",country:"Spanien",lat:37.3772,lon:-5.9869,scene:"Die Kolonnaden wurden zur Stadt Theed auf Naboo."}
 ]},
 {title:"Charlie staubt Millionen ab",year:1969,
  genre:"Gaunerkomödie", regie:"Peter Collinson", cast:"Michael Caine, Noël Coward",
  beschreibung:"Eine britische Gaunerbande will in Turin einen Goldtransport ausrauben und flieht in drei Minis durch die Stadt.",
  places:[
  {name:"Lingotto, Turin",country:"Italien",lat:45.0326,lon:7.6650,scene:"Die Minis rasen über die Teststrecke auf dem Dach der Fiat-Fabrik."}
 ]},
 {title:"Wenn die Gondeln Trauer tragen",year:1973,
  genre:"Horror, Thriller", regie:"Nicolas Roeg", cast:"Donald Sutherland, Julie Christie",
  beschreibung:"Ein trauerndes Ehepaar reist nach dem Tod seiner Tochter nach Venedig, wo unheimliche Zeichen sie zu verfolgen scheinen.",
  places:[
  {name:"San Nicolò dei Mendicoli, Venedig",country:"Italien",lat:45.4325,lon:12.3195,scene:"John restauriert diese Kirche – Schauplatz eines dramatischen Unfalls."}
 ]},
 {title:"Mission: Impossible – Dead Reckoning",year:2023,
  genre:"Action, Agentenfilm", regie:"Christopher McQuarrie", cast:"Tom Cruise, Hayley Atwell, Rebecca Ferguson",
  beschreibung:"Ethan Hunt jagt einen Schlüssel, der Zugang zu einer gefährlichen künstlichen Intelligenz verschafft, die alle Geheimdienste der Welt bedroht.",
  places:[
  {name:"Spanische Treppe, Rom",country:"Italien",lat:41.9058,lon:12.4826,scene:"Der kleine gelbe Fiat 500 holpert bei der Verfolgungsjagd die Treppe hinunter."},
  {name:"Dogenpalast, Venedig",country:"Italien",lat:45.4337,lon:12.3404,scene:"Die nächtliche Party, auf der Ethan den Schlüssel sucht."}
 ]},
 {title:"Popeye – Der Seemann mit dem harten Schlag",year:1980,
  genre:"Musical, Komödie", regie:"Robert Altman", cast:"Robin Williams, Shelley Duvall",
  beschreibung:"Der Seemann Popeye kommt in das Hafenstädtchen Sweethaven, sucht seinen Vater und verliebt sich in Olivia.",
  places:[
  {name:"Popeye Village, Anchor Bay",country:"Malta",lat:35.9600,lon:14.3420,scene:"Das extra gebaute Dorf Sweethaven steht noch heute als Freizeitpark."}
 ]},

 // ---------------- Spanien & Portugal ----------------
 {title:"Zwei glorreiche Halunken",year:1966,
  genre:"Western", regie:"Sergio Leone", cast:"Clint Eastwood, Eli Wallach, Lee Van Cleef",
  beschreibung:"Drei Revolverhelden jagen während des Amerikanischen Bürgerkriegs einen versteckten Goldschatz.",
  places:[
  {name:"Sad Hill, Santo Domingo de Silos",country:"Spanien",lat:41.9000,lon:-3.2800,scene:"Der kreisrunde Friedhof des legendären Showdowns – von Fans wieder freigelegt."}
 ]},
 {title:"Spiel mir das Lied vom Tod",year:1968,
  genre:"Western", regie:"Sergio Leone", cast:"Henry Fonda, Claudia Cardinale, Charles Bronson",
  beschreibung:"Ein geheimnisvoller Mann mit Mundharmonika rächt sich an einem Killer, der für eine Eisenbahngesellschaft über Leichen geht.",
  places:[
  {name:"Wüste von Tabernas, Almería",country:"Spanien",lat:37.0500,lon:-2.3900,scene:"Die Wüste stand für den Wilden Westen – auch viele andere Western entstanden hier."}
 ]},
 {title:"Lawrence von Arabien",year:1962,
  genre:"Historienfilm, Abenteuer", regie:"David Lean", cast:"Peter O'Toole, Alec Guinness, Omar Sharif",
  beschreibung:"Der britische Offizier T. E. Lawrence vereint im Ersten Weltkrieg arabische Stämme im Kampf gegen das Osmanische Reich.",
  places:[
  {name:"Plaza de España, Sevilla",country:"Spanien",lat:37.3769,lon:-5.9863,scene:"Der Platz stellte das britische Hauptquartier in Kairo dar."}
 ]},
 {title:"James Bond 007: Im Geheimdienst Ihrer Majestät",year:1969,
  genre:"Action, Agentenfilm", regie:"Peter R. Hunt", cast:"George Lazenby, Diana Rigg, Telly Savalas",
  beschreibung:"Bond spürt Blofeld in einer Klinik hoch in den Schweizer Alpen auf und verliebt sich in die Gräfin Tracy.",
  places:[
  {name:"Praia do Guincho",country:"Portugal",lat:38.7300,lon:-9.4730,scene:"Bond rettet Tracy am Strand in der Eröffnungsszene."},
  {name:"Piz Gloria, Schilthorn",country:"Schweiz",lat:46.5579,lon:7.8353,scene:"Das Drehrestaurant auf dem Gipfel war Blofelds Alpenfestung."}
 ]},

 // ---------------- Schweiz, Deutschland & Mitteleuropa ----------------
 {title:"James Bond 007: Goldfinger",year:1964,
  genre:"Action, Agentenfilm", regie:"Guy Hamilton", cast:"Sean Connery, Gert Fröbe, Honor Blackman",
  beschreibung:"Bond kommt dem Goldschmuggler Auric Goldfinger auf die Spur, der einen Anschlag auf Fort Knox plant.",
  places:[
  {name:"Furkapass",country:"Schweiz",lat:46.5730,lon:8.4150,scene:"Die Verfolgungsjagd im Aston Martin DB5 über die Passstraße."}
 ]},
 {title:"Tschitti Tschitti Bäng Bäng",year:1968,
  genre:"Familienfilm, Musical", regie:"Ken Hughes", cast:"Dick Van Dyke, Sally Ann Howes",
  beschreibung:"Ein exzentrischer Erfinder baut ein altes Rennauto um, das fliegen und schwimmen kann, und reist damit ins Königreich Vulgarien.",
  places:[
  {name:"Schloss Neuschwanstein",country:"Deutschland",lat:47.5576,lon:10.7498,scene:"Das Märchenschloss wurde zum Schloss des Barons von Vulgarien."}
 ]},
 {title:"Lola rennt",year:1998,
  genre:"Thriller", regie:"Tom Tykwer", cast:"Franka Potente, Moritz Bleibtreu",
  beschreibung:"Lola hat 20 Minuten, um 100.000 Mark für ihren Freund aufzutreiben – in drei Varianten derselben Geschichte.",
  places:[
  {name:"Oberbaumbrücke, Berlin",country:"Deutschland",lat:52.5020,lon:13.4457,scene:"Lola sprintet über die Brücke zwischen Kreuzberg und Friedrichshain."}
 ]},
 {title:"Good Bye, Lenin!",year:2003,
  genre:"Tragikomödie", regie:"Wolfgang Becker", cast:"Daniel Brühl, Katrin Saß",
  beschreibung:"Um seine herzkranke Mutter zu schonen, lässt Alex nach dem Mauerfall in ihrer Wohnung die DDR weiterleben.",
  places:[
  {name:"Karl-Marx-Allee, Berlin",country:"Deutschland",lat:52.5174,lon:13.4333,scene:"Die Plattenbau-Gegend rund um die Wohnung der Familie Kerner."}
 ]},
 {title:"Die Bourne Verschwörung",year:2004,
  genre:"Action, Thriller", regie:"Paul Greengrass", cast:"Matt Damon, Joan Allen",
  beschreibung:"Bourne wird ein Mord in Berlin angehängt und muss nach Europa zurückkehren, um die Wahrheit über seine Vergangenheit herauszufinden.",
  places:[
  {name:"Alexanderplatz, Berlin",country:"Deutschland",lat:52.5219,lon:13.4132,scene:"Bourne beobachtet die CIA vom Hochhaus aus und lockt Nicky zum Weltzeituhr-Treffpunkt."}
 ]},
 {title:"Der Himmel über Berlin",year:1987,
  genre:"Drama, Fantasy", regie:"Wim Wenders", cast:"Bruno Ganz, Solveig Dommartin, Otto Sander",
  beschreibung:"Zwei Engel wachen über das geteilte Berlin. Einer von ihnen verliebt sich in eine Trapezkünstlerin und will Mensch werden.",
  places:[
  {name:"Siegessäule, Berlin",country:"Deutschland",lat:52.5145,lon:13.3501,scene:"Der Engel Damiel sitzt auf der Goldelse und blickt auf die Stadt."}
 ]},
 {title:"Schindlers Liste",year:1993,
  genre:"Drama, Historienfilm", regie:"Steven Spielberg", cast:"Liam Neeson, Ben Kingsley, Ralph Fiennes",
  beschreibung:"Der Unternehmer Oskar Schindler rettet im besetzten Polen über tausend Juden das Leben, indem er sie in seiner Fabrik beschäftigt.",
  places:[
  {name:"Schindlers Fabrik, Krakau",country:"Polen",lat:50.0475,lon:19.9614,scene:"Gedreht wurde an der echten Emaillefabrik – heute ein Museum."},
  {name:"Kazimierz, Krakau",country:"Polen",lat:50.0516,lon:19.9480,scene:"Das alte jüdische Viertel stand für das Krakauer Ghetto."}
 ]},
 {title:"Die Brücke von Arnheim",year:1977,
  genre:"Kriegsfilm", regie:"Richard Attenborough", cast:"Sean Connery, Michael Caine, Anthony Hopkins",
  beschreibung:"Die Alliierten versuchen 1944 mit einer riesigen Luftlandeoperation, mehrere Rheinbrücken in den Niederlanden zu erobern.",
  places:[
  {name:"Wilhelminabrug, Deventer",country:"Niederlande",lat:52.2540,lon:6.1490,scene:"Die Brücke in Deventer spielte die umkämpfte Brücke von Arnheim."}
 ]},
 {title:"Das Schicksal ist ein mieser Verräter",year:2014,
  genre:"Drama, Romantik", regie:"Josh Boone", cast:"Shailene Woodley, Ansel Elgort",
  beschreibung:"Zwei krebskranke Jugendliche verlieben sich und reisen nach Amsterdam, um ihren Lieblingsautor zu treffen.",
  places:[
  {name:"Leliegracht, Amsterdam",country:"Niederlande",lat:52.3761,lon:4.8840,scene:"Die Bank an der Gracht, auf der Hazel und Gus sitzen – heute ein Fan-Treffpunkt."}
 ]},

 // ---------------- Kroatien, Griechenland ----------------
 {title:"Mamma Mia! Here We Go Again",year:2018,
  genre:"Musical", regie:"Ol Parker", cast:"Lily James, Amanda Seyfried, Cher",
  beschreibung:"Sophie eröffnet das Hotel ihrer Mutter neu, während der Film parallel erzählt, wie die junge Donna einst auf die Insel kam.",
  places:[
  {name:"Insel Vis",country:"Kroatien",lat:43.0610,lon:16.1830,scene:"Die kroatische Insel stellte diesmal die griechische Insel Kalokairi dar."}
 ]},
 {title:"James Bond 007: In tödlicher Mission",year:1981,
  genre:"Action, Agentenfilm", regie:"John Glen", cast:"Roger Moore, Carole Bouquet",
  beschreibung:"Bond soll ein gesunkenes Steuergerät für Atom-U-Boote bergen, bevor es den Sowjets in die Hände fällt.",
  places:[
  {name:"Kloster Agia Triada, Meteora",country:"Griechenland",lat:39.7110,lon:21.6400,scene:"Bond erklimmt die Felswand zum Kloster, dem Versteck des Schurken."},
  {name:"Cortina d'Ampezzo",country:"Italien",lat:46.5405,lon:12.1357,scene:"Die Ski- und Bobbahn-Verfolgungsjagd in den Dolomiten."}
 ]},
 {title:"Alexis Sorbas",year:1964,
  genre:"Drama", regie:"Michael Cacoyannis", cast:"Anthony Quinn, Alan Bates",
  beschreibung:"Ein verklemmter Engländer erbt eine Mine auf Kreta und lernt vom lebenslustigen Griechen Sorbas, das Leben zu genießen.",
  places:[
  {name:"Strand von Stavros, Kreta",country:"Griechenland",lat:35.5880,lon:24.1650,scene:"Hier tanzen Sorbas und Basil den berühmten Sirtaki."}
 ]},
 {title:"James Bond 007: Der Spion, der mich liebte",year:1977,
  genre:"Action, Agentenfilm", regie:"Lewis Gilbert", cast:"Roger Moore, Barbara Bach, Curd Jürgens",
  beschreibung:"Bond und eine sowjetische Agentin arbeiten zusammen, um einen Reeder zu stoppen, der die Welt mit Atom-U-Booten vernichten will.",
  places:[
  {name:"Hotel Cala di Volpe, Sardinien",country:"Italien",lat:41.0870,lon:9.5450,scene:"Bond und Anya wohnen im Hotel an der Costa Smeralda."}
 ]},

 // ---------------- Nordeuropa ----------------
 {title:"Star Wars: Das Imperium schlägt zurück",year:1980,
  genre:"Science-Fiction", regie:"Irvin Kershner", cast:"Mark Hamill, Harrison Ford, Carrie Fisher",
  beschreibung:"Die Rebellen müssen vom Eisplaneten Hoth fliehen, während Luke bei Meister Yoda zum Jedi ausgebildet wird.",
  places:[
  {name:"Finse, Hardangerjøkulen",country:"Norwegen",lat:60.6020,lon:7.5040,scene:"Die Gletscherlandschaft wurde zum Eisplaneten Hoth."}
 ]},
 {title:"Interstellar",year:2014,
  genre:"Science-Fiction", regie:"Christopher Nolan", cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  beschreibung:"Weil die Erde unbewohnbar wird, reist eine Crew durch ein Wurmloch, um einen neuen Planeten für die Menschheit zu finden.",
  places:[
  {name:"Svínafellsjökull",country:"Island",lat:64.0060,lon:-16.8800,scene:"Der Gletscher wurde zum eisigen Planeten von Dr. Mann."}
 ]},
 {title:"James Bond 007: Stirb an einem anderen Tag",year:2002,
  genre:"Action, Agentenfilm", regie:"Lee Tamahori", cast:"Pierce Brosnan, Halle Berry",
  beschreibung:"Bond wird nach Gefangenschaft in Nordkorea fallen gelassen und jagt auf eigene Faust einen Verräter bis in einen Eispalast in Island.",
  places:[
  {name:"Jökulsárlón",country:"Island",lat:64.0484,lon:-16.1794,scene:"Die Autoverfolgungsjagd auf der gefrorenen Gletscherlagune."}
 ]}

];
