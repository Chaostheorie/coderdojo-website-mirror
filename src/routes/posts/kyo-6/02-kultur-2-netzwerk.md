+++
title = "6. Kyo"

color = "#FFFF00"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Kultur II.

Es wird Zeit für Kultur! Über eine Bibliothek, einen (legalen) Streamingdienst oder andere Wege besorge Dir doch mal den
Film [Hackers](https://de.wikipedia.org/wiki/Hackers_%E2%80%93_Im_Netz_des_FBI). Der ist zwar schon von 1995, aber immer
noch sehenswert. Manche Filmszene wird dir immer wieder als Meme begegnen. Mal abgesehen davon, dass Du ein bisschen
Computergeschichte dabei mitnimmst, zeigt es dir auch ein wenig den amerikanischen Blick auf den Begriff Hacker. Über
den Begriff können wir ja gerne mal gemeinsam diskutieren. Wir orientieren uns dabei vielmehr an einem Satz, der
[Wau Holland](https://de.wikiquote.org/wiki/Wau_Holland) zugeschrieben wird:

> Ein Hacker ist jemand, der versucht einen Weg zu finden, wie man mit einer Kaffeemaschine Toast zubereiten kann.

Je nach, wie die Situation ist, können wir gerne versuchen, den auch mal gemeinsam zu schauen.

## erste Begriffe für Netzwerktechnik

In dem Film _Hackers_ geht es viel um Netzwerke. Auch wir wollen uns im nächsten Teil verbinden und dafür Netzwerke
nutzen (und diese Seite rufst Du ja auch üebr ein Netzwerk auf). Deshalb wollen wir im ersten Schritt Begriffe (grob)
erklären und klären. Wer schon tiefer in der Materie drin steckt - bitte berücksichtige, dass es hier um einen stark
vereinfachten und ersten Aufschlag geht. Auch hier werden wir uns Stück für Stück in die (Un-) Tiefen dieses Themas
nähern. Begriffe sind immer etwas abstrakt, aber sie helfen, hier einzutauchen. Wir stellen hier noch zeitnah eine
Zeichnung ein, die am Ende des Kapitels stehen wird. Sie wird dir hoffentlich helfen, bei den ganzen Begriffen den
Überblick zu behalten.

### MAC-Adresse

Wenn du dich mit deinem Rechner mit einem anderen verbinden möchtest, geht es mit Deiner Netzwerkkarte los. Davon wirst
Du vermutlich zwei haben - eine, um dich in ein kabelgebundenes Netz einzuklinken und deine WLAN-Karte. Letztere siehst
du bestimmt nicht, weil sie eingebaut ist. Aber wenn du dich mit einem WLAN verbinden kannst, hast du eine :) Damit
diese Karten von deinem Betriebssystem angesprochen werden können, brauchen sie eine eindeutige Adresse. Jede Karte
besitzt deshalb eine sogeannte [MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse). Diese ist im Idealfall weltweit
eindeutig. [MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse) hat nichts mit dem Unternehmen mit dem angebissenen
Apfel zu tun, sondern steht für _Media-Access-Control-Address_. Das sind sechs Blöcke mit hexadezimalen Zahlen. Falls
Dir Hexadezimal nocht nichts sagt - an der Stelle nur: Da können die Zahlen 0 bis 9 und die Buchstaben A bis F
vorkommen. Das schaut dann so _00-80-41-ae-fd-7e_ oder _00:80:41:ae:fd:7e_ aus. Bei Notebooks findest du manchmal auf
der Unterseite einen Aufkleber, auf der die MAC-Adresse der Karten abgedruckt werden. Teilweise werden die MAC-Adressen
genutzt, um insbesondere WLAN-Netzwerke abzuschotten. Hintergrund ist, dass du beim Anmelden an ein WLAN die MAC-Adresse
deiner WLAN-Karte mitschickst. Wenn man dann im WLAN-Router einträgt, welche Netzwerkkarten sich überhaupt nur verbinden
dürfen, kann das ungebeten Gäste fernhalten. Leider ist das kein wirklich wirksamer Schutz, da man auch frei gewählte
MAC-Adressen mitschicken kann. Du wirst noch lernen, wie das geht - denn es kann gute Gründe geben, diese immer wieder
ändern zu wollen.

### IP-Adresse

Du wirst vermutlich zu Hause einen (WLAN-) Router haben, der dich mit dem Internet verbindet. Viele haben dafür eine
Fritz-Box oder etwas anderes, was du oder deine Eltern von ihrem Internet-Anbieter gestellt bekommen haben. Das Gerät
muss ja nun wissen, mit wem es im Netzwerk so quatscht, um seine Arbeit verrichten zu können. Stell dir das wie eine
Straße vor, auf der viele Häuser stehen - die einzelnen Computer, Notebooks, Handys. Jedes Gerät hat eine Hausnummer,
die IP-Adresse. Jetzt geizen wir aber nicht mit diesen Adressen, sondern vergeben für jeden Hauseingang (Netzwerkkarte)
mit Namensschild (MAC-Adresse) eine eigene IP-Adresse. IP steht für _Internet Protocol_. Es gibt zwei Arten von
IP-Adressen. Die älteren sind die sogenannten IPv4-Adressen. Die besteht aus vier Blöcken. Jeder Block kann eine Zahl
von 0 bis 254 haben. Die kann beispielsweise so aussehen: 192.168.0.1. Das ist schön übersichtlich, hat aber den
Nachteil, dass die Anzahl der möglichen Adressen doch recht begrenzt ist. Konkret stehen für das Internet circa 3,7
Milliarden Adressen zur Verfügung. Das hört sich erstmal fürchterlich viel an. Aber jeder Server im Netz braucht
mindestens eine, jeder Internetanschluss, jeder Router... Auf jeden Fall sind die schon lange knapp, richtigerweise
müsste man sagen, sie sind mehr als alle. Deshalb gibt es seit 1998 den Standard IPv6. Bis Ende 2020 sollen circa 50%
des Internets darauf umgestellt worden sein. Du siehst, dass ist ein zäher Prozess. IPv6-Adressen bestehen aus acht
hexadezimalen Blöcken. Das sieht dann beispielsweise so aus: _2001:0db8:0000:08d3:0000:8a2e:0070:7344_. Führende Nullen
in einem Block darf man weglassen und wenn ein Block ganz Null ist, darf das auch wegbleiben. Eine IPv6-Adresse könnte
also auch so aussehen: _2001:db8::1428:57ab_. Es gibt circa 340 Sextillionen (das sind 38 Nullen) an Adressen. Das
sollte also erstmal reichen..

Unter einem Protokoll versteht man Regeln, wie Daten ausgetauscht werden. Um die Infos zwischen der MAC-Adresse und
einer IPv4-Adresse klarzumachen, gibt es das _ARP_, also das _Address Resolution Protocol_, bei IPv6 wird dafür das
_NDP_, also das _Neighbor Discovery Protocol_ verwendet. Es genügt an dieser Stelle, dass du die Namen mal gehört hast
und weißt, dass sie zwischen MAC-Adresse und IPv4 bzw. IPv6 stehen. So ein Protokoll kannst du dir wie eine Sprache
vorstellen - in einer Sprache definieren wir auch, das dieses leckere Stück Obst ein Apfel ist. Da haben sich irgendwann
irgendwie Menschen darauf geeinigt. Hätten sie damals sich auf Qufsdk geeinigt, würden wir Qufsdk dazu sagen und keiner
könnte was mit Apfel anfangen. Eine solche Art von Einigung stellt ein Protokoll dar.

### Port

Jetzt besteht so ein Haus ja nicht nur einem großen Saal, sondern meist aus mehreren Wohnungen. Wenn die Paketbotin
jetzt drei Pakete hat, dann wäre es hilfreich, wenn sie die nicht einfach unten im Hausflur abwirft, sondern zur
passenden Wohnung bringt. Umgekehrt warten die Bewohner schon gespannt auf die Pakete und lauschen schon, ob jemand an
ihre Tür klopft. Hier sind wir bei den [Ports](https://www.elektronik-kompendium.de/sites/net/1812041.htm) angelandet.
Jede IP-Adresse kann so verschiedene Dienste (Päckchen) entgegen nehmen und umgekehrt, können bestimmte Bewohner schon
lauschen, ob man jemand klopft. Die Ports gehen bei 0 los und können bis 65.535 gehen. Die ersten 1024 Ports, sogenannte
System-Ports oder well-known-Ports, haben eine bestimmte Bedeutung und werden vom Betriebssystem besonders abgesichert
(da die Zählung bei 0 beginnt, ist der letzte Systemport also 1023). Der Port 80 ist beispielsweise immer für http da,
also das, worüber du Internetseiten abrufst. Der Port 443 ist für https-Seiten, also abgesicherte Verbindungen. Du
kannst das mal ausprobieren: Gibt in deinem Browser statt coderdojo.red coderdojo.red:443 ein. Damit sorgst du dafür,
dass du die Seite coderdojo.red auf dem Port 443 aufrufst. Mit 80 wird das auch gehen, weil du automatisch auf den Port
443 umgleitet wirst. Wie sowas geht, lernst du auch bald. Wenn Du jetzt aber irgendeinen anderen Port angibst, dann
kommt es zur Fehlermeldung. Der Paketbote klingelt dann nämlich bildlich gesprochen zwar im richtigen Haus, aber an der
falschen Haustür. Andere bekannte Ports sind 21 für ftp, um Dateien zu übertragen, 22 für ssh, um auf fremde Rechner
zugreifen zu können, 25 für SMTP, um E-Mails versenden zu können und u. a. 143 für IMAP um E-Mails empfangen zu können
oder und 123 für NTP, um die Uhrzeit abrufen zu können. Für diese Ports gibt es Listen, die muss man also nicht wissen.
Aber mit der Zeit, werden dir viele in Fleisch und Blut übergehen. Merken solltest du dir, dass die Ports unter 1024 für
bestimmte Dienste reserviert sind und für andere Dienste nicht ohne weiteres zugänglich sind. Ports sind auch ein Teil
eines Schutzkonzept von sogenannten Firewalls. Die machen nämlich gerne mal alle Ports zu und öffnen dann nur bestimmte,
die wirklich benötigt werden. Da erschwert es Angreifern, unbemerkt in ein System reinzukommen oder aus einem System
Daten rauszuschaffen (beispielsweise Bankdaten).

### TCP

Jetzt tritt die Postbotim auf die Straße, um zum nächsten Haus zu fahren. Das Bild passt jetzt leider nicht mehr ganz,
weil physikalisch laufen die Daten über ein Kabel, aber die Datenströme auf dem Kabel haben eine Ordnung, ein
sogenanntes Protokoll, dass wir uns als Straße vorstellen. Dieses Protokoll nennt sich
[TCP](https://de.wikipedia.org/wiki/Transmission_Control_Protocol) (und die Kombination TCP/IP hast du vielleicht schon
mal irgendwo gelesen). _TCP_ steht für _Transmission Control Protokoll_, also Übertragungssteuerungsprotokoll. Das
stammt von 1981 und ist ein echter Dinosaurier. Während die Dinos aber ausgestorben sind, ist TCP quicklebendig und wir
alle tauschen täglich Daten über TCP aus. Eine Besonderheit von TCP ist, dass es zwei Punkte, die sogenannten _Sockets_
miteinander verbindet. Es schickt nicht nur Daten zwischen diesen beiden Punkten hin und her, sondern schaut auch
gleich, ob die richtigen Daten in der richtigen Reihenfolge (das ist alles andere als selbstverständlich) angekommen
sind. Das ist super, der Nachteil ist jedoch, dass das aufwändiger ist und Zeit kostet. Das ist aber nicht immer
praktisch. Stell dir vor, du schaust Netflix. Wenn da mal ein Paket verloren geht, das beim Prüfen festgestellt wird
(Prüfvorgänge kosten immer Zeit), dann nochmal geschickt wird, wieder geprüft, in der Zeit kamen andere Pakete an, also
muss alles erst sortiert werden... am Ende bleibt das Bild stehen, bis wieder alles seine rechte Ordnung hat. Du merkst,
dass hier die gesicherte Datenübertragung vielleicht nicht ganz so wichtig ist. Der Gegenentwurf ist UDP (für _User
Datagram Protocol_). Hier werden die Daten einfach nur rausgeblasen und die Gegenseite nimmt, was es kriegt. Läuft dann
ein Datenpaket schief, gibt es unter Umständen ein kurzes Rauschen in einer Bildecke. Aber der Film läuft ungestört
weiter. Bei einem Film ist das wichtiger, als dass das Bild immer perfekt übertragen wird. Wenn Du allerdings von einer
Kasse die Daten überträgst, darf es auch mal länger dauern, wenn dafür alles richtig ankommt.

### NAT

Wie bereits oben beschrieben, waren bei IPv4 die Adressen recht schnell alle. Also hat man sich etwas schlaues einfallen
lassen: Deine Fritz-Box / Internet-Router bekommt nur eine IP-Adresse von deinem Interprovider. Die Geräte hinter deiner
Fritz-Box erhalten auch eine Adresse, aber die sind in einem Adresskreis, der für solche Heimnetzwerke reserviert ist.
Dadurch kann dein Rechner vielleicht die 192.168.192.4 haben und meiner auch - trotzdem weiß jedes Datenpaket, wo es hin
muss. Denn wenn du eine Seite aufrust, schickt der Webserver die Seite zu der IP-Adresse deiner Routers zurück. Der
Router hat sich gemerkt, wer bei der entsprechenden Seite etwas angefordert hat und kann es dann an die IP-Adresse
deiner Rechners weiterleiten. Obwohl wir beide also in unseren Netzen 192.168.192.4 haben - im Internet ist von uns nur
die öffentliche Adresse unseres Routers zu sehen - und die ist einmalig. Würdest du mich besuchen, dann müsste einer der
beiden Rechner eine andere Adresse bekommen, da in einem Netzwerk jede IP-Adresse nur einmalig vergeben sein darf. Sonst
kommt es zu sogennanten IP-Konflikten. Bei dieser Art von Konflikt hilft kein Reden, da muss einer die Adresse
wechseln... Dieses Verfahren spart enorm viele Adressen ein und nennt sich _Network Address Translation_
([NAT](https://de.wikipedia.org/wiki/Netzwerkadress%C3%BCbersetzung)). Wenn Menschen von _natten_ sprechen, dann meinen
sie den Vorgang dieser Adressübersetzung. Soweit die Vorteile. Der Nachteil ist, dass es nicht ohne weiteres möglich
ist, dass mein und dein Rechner miteinander quatschen können. Eine Lösungsmöglichkeit ist, dass man sich auf einen
gemeinsamen Server einigt, über den man spricht. Wir sagen also der Brieftaube nicht, fliege mit der Nachricht zu Sarah,
weil du zwar weißt, dass Sarah in der Tucholskystraße wohnt, aber die Hausnummer nicht kennst. Also sage ich meiner
Taube - fliege zum Marktplatz. Sarahs Taube fliegt auch zum Marktplatz und holt sich den Brief dort ab und fliegt von da
nach Hause - da sie von da kommt, weiß sie, wo sie hinfliegen muss. Fluch und Segen hängen eng beeinander - während der
Weg über den Marktplatz umständlich wirkt, hat es aber den netten Nebeneffekt, dass keiner von dem anderen so genau
weiß, wo er oder sie wohnt und ungebetene Gäste nicht so einfach vor der Tür stehen können.

### TLS

Als das Internet geschaffen wurde, war der Kreis der Nutzenden klein, man kannte und vertraute sich. Die Zeiten sind
schon lange vorbei. Deshalb fehlen aber in vielen ursprünglichen Konzepten, die wir bis heute nutzen, Kontepte, die den
Schutz der eigenen Daten sicherstellt. Am Ende hat man über bestehende Protokolle weitere Protokolle drüber gelegt, die
versuchen, Sicherheit zu schaffen. Eines davon ist der _Transport Layer Security_
([TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security), Transportschichtsicherheit). Diese nimmt die Daten an
einem Punkt, verschlüsselt sie und entschlüsselt sie am Endpunkt. Das S bei https (dargestellt durch das Schloss neben
der Adressleiste im Browser) steht beispielsweise für TLS. Das ist super, verschlüsselt aber nur den Transportweg. Eine
E-Mail wird so immer noch im Klartext auf dem Mailserver abgelegt. Jeder Administrator könnte sie lesen. Dagegen hilft
nur die Ende-zu-Ende-Verschlüsselung. Da gehen wir nochmal darauf ein, wenn wir es mit einem praktischen Beispiel
verknüpfen können.
