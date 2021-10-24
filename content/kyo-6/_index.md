+++
title = "6. Kyo"

[extra]
color = "#FFFF00"
heading_color = "#733111"
katex = true
+++

> Hier siehst Du gerade den ersten und noch nicht vollständigen Aufschlag für
> den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn Du das Gefühl hast,
> hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns
> beim CoderDojo an, damit wir das Script verbessern können. Wenn Du es nicht
> verstehst, liegt es nicht an Dir und anderen wird es auch so gehen. Lass es
> uns gemeinsam für die nächsten Leser:innen besser machen.

## Überblick

Herzlich Willkommen im Gelbgurt-Programm. Wir brauchen noch zwei Bausteine,
bevor wir in die Bibliothek pygame kommen. Zunächst werden wir das
Versionsverwaltungssystem Git kennen lernen. Und danach schauen wir noch kurz
virtualenv an. Wie ganz am Anfang versprochen, werden wir uns dann daran machen,
ein Weltraumspiel zu programmieren. Programmiertechnisch steht dabei im
Vordergrund, das bereits erlernte zu festigen und zu vertiefen. Wirklich neu
werden Arrays sein und der erste Kontakt mit Klassen. Zuletzt wollen wir einen
ersten Blick auf html und css werfen und mit flask erste Webseiten an den Start
bringen. Dabei lernst Du gleich die ersten Grundlagen, wie eine Internetseite
die Du aufrust, auf Deinen Rechner kommst. Dafür lernen wir auch einiges über
Linux kennen und warum dieses Betriebssystem für uns wichtig.

## Git - Klappe die erste

Git gehört zu den sogenannten Versionsverwaltungssystemen. Diese lösen mehrere
praktische Probleme. Stell Dir vor, Du entwickelst ein etwas größeres Projekt.
Dann kann es immer sein, dass Du in eine falsche Richtung abbiegst und wieder
Teile rückgängig machen willst. Oder Du magst einen neuen Teil einfügen, der
aber nur experimentell zur Verfügung stehen soll. Das Programm soll also in den
Versionen stabil und testing genutzt werden. Hierbei helfen Dir
Versionsverwaltungssysteme. Ihren größten Vorteil spielen sie aber aus, wenn Du
mit mehreren an einem Projekt arbeitest. Versionsverwaltungssysteme sind alt und
es gibt viele verschiedene. Linus Thorvalds, der Erfinder des Linux-Kernels, war
aber mit allen unzufrieden. Deshalb hat er eine neue Versionsverwaltung
geschrieben - Git. Dieses ist inzwischen das am meisten genutzte System und wird
von Plattformen wie github und gitlab verwendet. Vielleicht hast Du von denen
schon gehört. Für Git braucht es einen zentralen Server. Solche Plattformen
können da sehr hilfreich sein, wenn man selbst keinen betreiben möchte. Um
Github machen wir einen Bogen, da es von Microsoft gekauft wurde. Gitlab ist
okay, aber auch ein Unternehmen und vieles von dem, was die haben, brauchen wir
nicht. Wir könnten auch einen eigenen Server betreiben, haben uns aber
entschieden, aktuell unsere Energie anderweitig zu investieren. Wir werden als
Git-Server Codeberg verwenden. Das ist ein Verein, der nicht mit den Daten Geld
verdient, sondern sich über Spenden finanziert. Bitte sprich mit Deinen Eltern
darüber, ob es okay ist, dort einen Account anzulegen. Und klick Dir dann bitte
bei codeberg.de einen Account.

```
Der Name „Git“ bedeutet in der britischen Umgangssprache so viel wie „Blödmann“.
Linus Torvalds erklärte seine Wahl des ungewöhnlichen Namens mit einem Witz sowie damit,
dass das Wort praktikabel und in der Softwarewelt noch weitgehend unbenutzt war:

“I’m an egotistical bastard, and I name all my projects after myself.
First ‘Linux’, now ‘Git’.”

„Ich bin ein egoistischer Mistkerl, und ich benenne all meine Projekte nach mir.
Zuerst ‚Linux‘, jetzt eben ‚Git‘.“

Linus Torvalds
Quelle: Wikipedia
```

Git ist sehr mächtig. Deshalb wollen wir uns dem ganzen langsam nähern und im
Gelbgurt zunächst nur die elementaren Befehle lernen. Im Orange-Gurt lernst Du,
was man wissen muss, um ein Projekt zu managen.

{{ figure(source="/images/kyo-6/Git-logo.png", float="end", alt="Das Git-Logo von Jason Long, CC BY 3.0.") }}

Wir beginnen mit einem neuen Projekt. Du loggst Dich bitte in Coderberg ein.
Klicke dort auf das Pluszeichen neben Repository. Repository ist quasi ein
Softwareprojekt. Gib dem ganzen einen Namen. Wir beginnen hier mit einem kleinen
„helloWorld“, um gleich zu üben. Den Rest der Einstellungen lässt Du jetzt
erstmal so stehen und klickst unten auf „Repository erstellen“. Wunderbar. Dein
erstes Repository ist erstellt. Codeberg gibt Dir jetzt eine kleine Anweisung
wie es weitergeht. Lass den Tab offen, wir kommen darauf zurück. In PyCharm
legst Du bitte auch ein neues Projekt helloWorld an. Folgende Beschreibung gilt
für Linux- und MacNutzende. Windows-Nutzer installieren sich entweder
[Git für Windows](https://gitforwindows.org/) runter. Dort gibt es auch die
Möglichkeit, Git auf der Kommandozeile zu nutzen. Oder Du scrollst runter zum
Kapitel Linux und kommst nach diesem Abschnitt hierin zurück. Für Git kann man
auch grafische Oberflächen nutzen, aber tue Dir selber einen Gefallen und lerne
gleich die Befehle. Nicht immmer hat man PyCharm zur Verfügung und machmal kann
man mit den Befehlen auch mehr erreichen. Die grafische Anwendung macht nichts
anderes, als genau die Befehle auszuführen, die ihr jetzt schreibt. Aber bei so
einer Anwendung bist Du immer davon abhängig, welche Optionen Dir die Anwendung
zur Verfügung stellt. Dabei gibt es regelmäßig mehr, die Du vielleicht dann und
wann nutzen möchtest. Wenn Du die Befehle kannst, kannst Du meist ohne Probleme
die verschiedenen grafischen Oberflächen nutzen - umgekehrt klappt das dagegen
nicht. Weiter geht's. Öffne bitte einen Terminal. Gehe in Dein Verzeichnis: Mit
` cd Pycharm` gehst Du in das Pycharm-Verzeichnis, mit `cd helloWorld` gehst Du
in Dein neues Projekt. Mit `ls -lah` kannst Du Dir den Inhalt des Verzeichnisses
anzeigen lassen. Da ist noch nichts drin. Jetzt „arbeitest“ Du die
Coderberg-Anleitung ab:

```bash
touch README.md
git init
git checkout -b main
git add README.md
git commit -m "first commit"
git remote add origin git@codeberg.org:DeinBenutzername/helloWorld.git
git push -u origin main
```

Diese Befehlsfolge brauchst Du nur beim Anlegen eines neuen Projekts. Also keine
Sorge, dass ist nichts, was jeden Tag vorkommt und was man auswendig kann.

Lass Dein Terminalfenster offen. Das brauchen wir gleich nochmal.

Wir wollen Dir jetzt die einzelnen Schritte erläutern, die Du gerade vollzogen
hast. Falls Du das Gefühl hast, hier nicht bei jedem Schritt mitzukommen - bitte
nicht entmutigen lassen. Vieles wird sich mit der Zeit klären. Wir würden Dich
aber ungern völlig unkommentiert Zeilen abschreiben lassen. Du sollst immer
nachzuvollziehen können, was Du da gerade veranstaltest.

Mit `touch` legst Du einfach eine leere Datei an, in diesem Fall heißt die
README.md. Das am Ende `md` steht, verrät Dir, dass es sich um eine sogenannte
Markdown-Datei handelt. Das lernst Du auch bald. Es ist eine simple Art, Texte
zu schreiben und wird viel verwendet. Diese Seite ist beispielsweise komplett in
Markdown entworfen worden. `git init` legt ein git-Repository in diesem
Verzeichnis an. Im Hintergrund werden da ein paar Dateien erzeugt, die Git
braucht, um funktionieren zu können. Dazu zählt ein Verzeichnis, dass `.git`
heißt. Der Punkt vor dem Verzeichnisnamen sorgt dafür, dass es bei Linux und Mac
um ein `verstecktes` Verzeichnis handelt, also nicht immer zu sehen ist. Dann
kommt `git checkout`. Git verwendet sogenannte `Branches`. Diese ermöglichen
Dir, beim gleichen Projekt wie eingangs erläutert eine stabile Version und eine
Version in Entwicklung nebeneinander laufen zu lassen. Mit
`git checkout -b main` wird sichergestellt, dass Du Dich im sogenannten
Hauptzweig befindest. `git add README.md` bereitet die Datei `README.md` vor, um
sie beim nächsten `Push` (kommt gleich) Deinem Projekt hinzuzufügen.
`git commit` sagt git, dass das, was Du gerade über `git add` hinzugefügt hast,
mit einem Kommentar versehen werden soll. Das kann wirklich wichtig werden,
damit man sich nachher noch daran erinnert, was man sich dabei gedacht hat ohne
erst mühevoll aus den Codezeilen die Unterschiede herauszubekommen und zu raten,
was sich der- oder diejenige beim Einchecken dieser Datei gedacht hat. Der
Zusatz `-m "Hier muss Dein Kommentar hin"` fügt den Kommentar dazu. Macht man
das nicht, fragt git nach dem Befehl nach dem Kommentar. Die Zeile
`git remote add ` verbindet das Repository auf Codeberg mit Deinem lokalen
Repository. Und zu guter letzt schiebst Du noch mit `git push` das was Du über
`git add` hinzugefügt hast - hier die README.md - hoch in Dein Repository auf
Codeberg. Der Zusatz `-u origin main` sichert ab, dass lokal und remote den
richtigen Zweig lokal und remote verwenden. Am Ende brauchst Du Deine
Zugangsdaten von Codeberg.

Okay, das war jetzt erstmal ziehmlich viel Zeug. Du wirst sehen, im laufenden
Betrieb gestaltet sich git (meist) deutlich einfacher. Also schauen wir uns mal
das „Tagesgeschäft“ an. Geh in PyCharm und öffne mit `File` und dann `Open` das
Verzeichnis `HelloWorld`. Jetzt machst Du einen Rechtsklick auf das Verzeichnis.
Dort wird Dir `New` und `Python File` angeboten. Da gibst Du `helloWorld` ein.
`helloWorld.pas` ging auch, aber PyCharm ergänzt das `.py` sonst von selbst. Er
wird Dich dann fragen, ob er die Datei der Git-Überwachung hinzufügen soll.
PyCharm kann bei Git Dir einige Arbeit abnehmen. Du kannst da jetzt ruhig
zustimmen. Aber damit Du lernst, wie das ohne solche Hilfen geht, machen wir das
zunächst alles zu Fuß. Erst Laufen lernen, dann Fahrrad fahren. :) Okay, wie ein
Hello-World zu schreiben ist, weißt Du. Schreib ein einfaches Hello-World.
Vielleicht bindest Du noch eine hübsche Schleife drum. Dann gehst Du in Deinen
Terminal zurück. Mit `git add helloWorld.pas` fügst Du die Datei hinzu. Mit
`git commit -m "denk Dir einen passenden Kommenar aus"` committest Du die Datei.
Und jetzt sorgt ein `git push` dafür, dass die Datei zu Deinem Repository bei
Codeberg übertragen wird. Gib Deine Zugangsdaten ein und dann wird die Datei
schon `gepusht`. Du willst wissen, ob es geklappt hat? Dann geh auf die
Codeberg-Seite. Klick oben auf `Hello World` und tata - da sollte die
helloWorld.py zu sehen sein. Wenn nicht, schau, ob Dir die Meldungen
weiterhelfen. Ist das auch nicht der Fall - lass uns an einem Donnerstag beim
CoderDojo gemeinsam drauf schauen.

So richtig berauschend war das jetzt noch nicht. Okay, dann ändere mal Deinen
Code ein wenig, also füge eine zweite Print-Zeile hinzu oder so. Dann kommt
wieder das Trio: `git add helloWorld.py`, `git commit -m "Dein Kommentar"` und
`git push`. Jetzt geht wieder auf die Seite von Codeberg, aktualisiere die
Seite. Du siehst, das neben dem Dateinamen Dein letzter Kommentar steht. Klick
jetzt mal auf den Dateinamen, also `helloWorld.py`. Dann auf Verlauf (rechts).
Jetzt siehst Du, welche commits es schon gab. Klick mal auf Deinen letzten.
Jetzt siehst Du, welche Zeilen sich geändert haben. Das kann echt eine Menge
wert sein.

Soweit soll es uns mit git erstmal genügen. Du selbst kann bei regelmäßigen
Commits sehen, was Du geändert hast. Und vor allem kannst Du leichter den
anderen zeigen, was Du gemacht hast. Gleich lernen wir noch, wie man
sicherstellt, dass git Dinge nicht ins Repository schiebt. Wenn wir das nächste
mal näher auf git zurückkommen, siehst Du, wie Zusammenarbeit mit git ausschaut.

## virtualenv

Wir wollen für das Spiel gleich ein neues Repository anlegen. Also mach bitte
ein neues Verzeichnis wie Arcarde. Und lege ein entsprechendes Repository bei
Codeberg an. Jetzt initialisierst Du git und verknotest es mit Codeberg. Das
kennst Du alles schon vom vorherigen Kapiel. Um pygame nutzen zu können, müssen
wir eine Bibliothek installieren, die standardmäßig nicht installiert wird. Das
könnten wir jetzt auf dem gesamten System tun. Das ist aber aus verschiedenen
Gründen nicht gut, alleine schon, weil Du Dir so mit der Zeit Deinen Rechner
vollmüllst. Wir schaffen für unsere Projekte ab jetzt immer eine Umgebung, in
der die benötigten Pakete vom Rest des Systems abgeschottet werden. Am Anfang
scheint das lästig, aber sei Dir sicher, Du wirst es zu schätzen wissen. Du
brauchst jetzt virtualenv. Das Terminalfenster hast Du noch offen. Gib mal
virtualenv ein. Kommen da irgendwelche Fehler oder kommt die Hilfeseite? Falls
die Hilfeseite kommt, prima. Dann ist das schon installiert. Falls Fehler
kommen - bei allen Betriebssystemen solltest Du mit `pip install virtualenv` das
ganze installiert bekommen. Wie bei anderem Installtionen - sowas kann sich
schnell garstig darstellen. Bekommst Du es nicht selber hin, sei bitte nicht
entmutigt, sondern lass Dir helfen.

Für die Erstellung einer virtuellen Umgebung musst Du nur in dem entsprechenden
Verzeichnis sein und mit `virtualenv -p python3 venv` eingeben. Virtualenv (für
virtuell environment, also virtuelle Umgebung) bekommt mit `-p` gesagt, welche
Python-Version es verwenden soll. Und mit venv, in welchem Verzeichnis er die
Dateien für die Umgebung ablegen soll. Das könnte auch anders heißen, aber bei
venv dürften die meisten Programmiererinnen wissen, was sich dahinter verbirgt.
Wenn Du das gemacht hast, musst Du es noch aktivieren: in Linux / Mac mit
`source venv/bin/activate`. Unter Windows mit `venv\Scripts\activate.bat` oder
mit `venv\Scripts\Activate.ps1`. In Deinem Terminal sollte jetzt `(venv)` stehn,
wenn es geklappt hat. Wunderbar. Sonst ist das ein guter Punkt für den
Donnerstag Abend...

Jetzt kannst Du sorgenlos(er) Pakete bzw. Bibliotheken installieren. Das wollen
wir mit `pip install pygame` gleich mal machen. Wenn das bei Windows-Nutzenden
nicht läuft, probiert bitte `py -m pip install -U pygame --user` aus. Läuft das
sauber durch? Der schnelle Test ist, dass Du schnell python startest und ein
`import pygame` eingibst. Wenn keine Fehlermeldung kommt, ist alles prima.
Sonst - Du weißt schon. Donnerstag und so.

Das Verzeichnis venv enthält nichts, was mit unserem Code zu tun hat. Deshalb
wollen wir das auf keinen Fall in unser Repository hochladen. Das wäre echter
Datenmüll. Lege eine Datei `.gitignore` an. Das kannst Du über PyCharme machen.
Rechter Mausklick auf das Projekt, `New`, dann `New Scratch File` und dann
kannst Du schon `.gitignore` auswählen. Da trägst Du jetzt `venv/`. Jetzt wird
git dieses Verzeichnis zukünftig ausschließen. Über diese Datei können ebenso
einzelne Dateien ausgeschlossen werden. Du kannst ja schon mal in einer neuen
Zeile `\*.png` eintragen, damit die Grafikdateien nicht alle bei Codeberg
landen.

Nachdem Du das erfolgreich zu Fuß gemacht hast, PyCharm kann das beim Anlegen
eines neuen Projektes mit erledigen. Nun wirst Du auch auf Umgebungen treffen,
bei denen PyCharm nicht läuft (beispielsweise auf einem Webserver). Deswegen
solltest Du das auch über die Konsole können. Wenn Du lokal entwickelst - wenn
Du bei PyCharme auf `File` und dann `New Project` gehst, gibt es den Puntk
`New environment using`. Da kannst Du virtualenv auswählen. PyCharm installiert
das und aktiviert es. Wenn Du unten in der Zeile nach dem Erstellen auf Terminal
klickst, erhälst Du dort eine Konsole mit aktivierter virtueller Umgebung. Und
dort kannst Du mit `pip install pygame` die Bibliothek ebenfalls installieren.
Und schau mal oben in die Menüleiste - da wirst Du auf Git zum Klicken finden.
Es lohnt sich, beide Wege zu können. Deine IDE (also hier PyCharme) zu
beherrschen, aber davon nicht abhängig zu sein.

## Kultur I.

Wir kommen noch zu Linux, aber um Dir einen Vorgeschmack zu geben, besorge Dir
mal seine Biographie „Just for Fun“ von Linus Torvalds und David Diamond. Das
Buch gibt es auf Deutsch und auf Englisch. Das ist nicht neu, aber lohnt sich
immer noch. Berliner:innen können sich das leihen.

{{ figure(source="/images/kyo-6/Tux.png", float="start", alt="Das Tux-Maskottchen von Larry Ewing, Simon Budig, Garrett LeSage") }}

Geh auf [VOEBB](https://voebb.de). Da liegt es im Magazin der Amerikanischen
Gedenkbibliothek. Kennst Du nicht? Dann ist das eine gute Gelegenheit,
Deutschlands größte öffentliche Bibliothek kennen zu lernen. Wenn Du noch keinen
Ausweis hast - den kannst Du Dir in jeder Stadtteilbibliothek ausstellen lassen.
Aus historischen Gründen ist Berlins Zentrale Landesbibliothek (ZLB) in zwei
Gebäude aufgeteilt: am Halleschen Tor ist die Amerikanische Gedenkbibliothek
(AGB) und die Kinder- und Jugendbibliothek Hallesche Komet. In der AGB bekommst
Du ein gigantisches Film- und Musikarchiv, Literatur, Kunst, Philosophie und
andere Geisteswissenschaften. Die Berliner Stadtbibliothek befindet sich in der
Breite Straße, Nähe Alexanderplatz. Da gibt es Informatik, Medizin, Wirtschaft,
Jura, Naturwissenschaften. Bei öffentlichen Bibliotheken liegen die meisten
Medien im Gegensatz zu wissenschaftlichen Bibliotheken in den Regalen. In der
ZLB ist kein Platz, deshalb sind etwa 2/3 der Medien im Magazin. Es lohnt sich
also immer, im OPAC (dem Bibliothekskatalog) nachzuschauen. Von den Magazinen
gibt es gibt es gleich zwei Typen - die in den Häusern und die Außenmagazine.
Bei beiden musst Du die Bücher vorbestellen. Das kostet nichts, wenn Du Dir die
Bücher in die besitzende Bibliothek liefern lässt. Keine Sorge, falls Kosten
entstehen würden, wird immer vorher gewarnt. Der Unterschied bei den
Magazin-Typen ist, dass beim Inhouse-Magazin das Medien taggleich, spätestens am
Folgetag Dir zur Verfügung gestellt werden sollte. Beim Außenmagazin dauert das
ein paar Tage. Du kriegst eine E-Mail, wenn Dein Buch angekommen ist. Wenn Du
über [VOEBB](https://voebb.de) mal „Just for Fun Torvalds“ eingibst, wirst Du
schnell auf das entsprechende Buch treffen. Falls Du nicht aus Berlin kommst,
schau Dich mal um, was so die Bibliotheken bei Dir in der Umgebung zu bieten
haben. Da wartet manche Überraschung. Falls Du das Buch nicht leihen magst, das
kriegt man für einen schmalen Taler bei den üblichen Verdächtigten Händlern im
Netz. Also viel Spaß schon mal beim Lesen.

## PyGames

{{ figure(source="/images/kyo-6/Pygame_logo.gif", float="end", alt="Das pygame-Logo von TheCorruptor/pygame developers  ") }}

Juhu, wir kommen zu pygames. Das ist eine Bibliothek, die es Dir ermöglicht,
Grafik darzustellen und Tastatur- und Mauseingaben abzufangen, damit Du sie gut
verarbeiten kannst. Wenn Du zockst, wollen wir gleich zugestehen, dass man mit
pygames keine Hochleistungsspiele bauen kann. Aber Du kannst damit schon eine
Menge machen und vor allem viel Coding spielerisch lernen. Wenn Du selber in der
Dokumentation von pygame stöbern willst, findest Du sie auf der
[pygame-Seite](https://www.pygame.org/docs/).

Wir brauchen jetzt erstmal einen Hintergrund für die Spielfläche und eine Figur.
Bei [OpenGameArt](https://opengameart.org/) kannst Du Dir was passendes
raussuchen. Am besten gehst Du auf `Browse` und dann auf `Textures`. Wichtig
ist, dass Du eine png-Datei nimmst. Eine Spielfigur kannst Du bei
[Kenny](https://kenney.nl/assets/space-kit) runterladen. Das ist der Link für
ein Spacespiel. Aber Du kannst Dir natürlich auch eine andere Figur nehmen.
Wichtig ist jetzt nur, dass diese beiden Dateien in Deinem Projektverzeichnis
drin stehen. Die anderen Grafikdateien lass besser draußen. Auf geht es in den
Code:

{{ file(name="game.py") }}

```python
import pygame, os, sys
from pygame.locals import *

pygame.init()
fpsClock = pygame.time.Clock()
surface = pygame.display.set_mode((800, 600))
background = pygame.Color(100, 149, 237)
image = pygame.image.load(`canvas.png`)
meeple = pygame.image.load(`meeple1g.png`)
player_x = 100
player_y = 100
```

Stumpf Code abtippen ist nicht. Also was passiert hier. Wir holen uns erstmal
Bibliotheken, neben pygame noch zwei, die uns ermöglichen, Dateien zu laden.
Dann initialisieren wir pygame. Wir sagen der Bibliothek, dass es los geht. Dann
brauchen wir einen Zeitgeber. Der spielt im kommenden Code noch eine wichtige
Rolle. Mit `display.set_mode` legst Du fest, wie groß das Spielfeld wird. Mit
`background` legen wir eine Hintergrundfarbe fest. `image` lädt das Spielfeld
und `meeple` die Figur. Mit `player_x` und `player_y` wird die Figur auf eine
bestimmte Koordinate festgelegt. Die Grafikdateien müssen im gleichen
Verzeichnis liegen wie diese Python-Datei. Und entweder tragen sie die Namen
`canvas.png` oder Du benennst den String dort so um, dass er auf Deinen
Hintergrund zeigt. Das gleiche gilt für die Spielfigur. Die Bildschirmgröße
spannt quasi ein Koordinatensystem mit 800-Punkten auf der x-Achse und 600
Punkten auf der y-Achse auf. Das kennst Du aus der Schule. In der Schule ist der
Nullpunkt aber links unten, hier ist er links oben. Wenn Du in der Schule noch
nicht mit Koordinatensystemen zu tun hattest: Stell Dir vor, dass es an Deiner
oberen Bildschirmseite ein Lineal gibt mit 800 Strichen und seitlich ein Lineal
mit 600 Strichen. Jetzt kannst Du jeden Punkt auf dem Bildschirm genau
bezeichnen. Erhälst Du die Koordinaten (100,100) für die Spielfigur, gehst Du in
die obere linke Ecke und gehst 100 Striche nach rechts. Das ist die sogenannte
x-Achse und steht bei so einer Koordinatenangabe immer vorne. Die zweite 100
gibt die sogenannte y-Achse an und sagt, wieviele Striche Du auf dem Lineal nach
unten gehen müsstest. Dann bist Du auf der Koordninate (100,100) gelandet. Alles
klar soweit?

Noch ein bißchen Code:

{{ file(name="game.py") }}

```python
while True:
    surface.fill(background)
    surface.blit(image, (0,0))

    pygame.display.update()
    fpsClock.tick(30)
```

Die while-Schleife kennst Du schonn. Die wird hier genutzt, um erstmal endlos
das gleiche zu tun (denn es gibt ja nichts, was die Bedingung im Kopfteil von
while auf False setzt). `surface.fill` setzt den Hintergrund mit dem, was Du
oben also `background` definiert hast. `surface.blit` sagt, wo der landen soll.
Dieser Bildschirm muss regelmäßig aktualisiert werden, damit die Veränderungen
von Spielfiguren angezeigt werden. Das macht `display.update`. Und die Zeile mit
dem `tick` lässt kurz warten. Den Effekt, hier mit anderen Zahlen zu arbeiten
probierst Du bitte aus, wenn das Spiel schon ein wenig steht.

Jetzt haben wir festgestellt, dass die While-Schleife eine Endlos-Schleife ist.
Das ist unpraktisch, weil wir aus dem Spiel auch noch rauskommen wollen. Nach
der Zeile mit dem blit fügst Du ein:

{{ file(name="game.py") }}

```python
for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
```

Probiere jetzt mal den Code aus. Nimm ruhig auch mal die While-Schleife raus
bzw. kommentiere sie aus. Einfach, um zu sehen, was passiert. Da fehlt aber noch
die Figur. Probiere die jetzt bitte selber in den Code einzubauen. Und nicht
beim folgendne Code schauen, sondern es selber probieren. Und wenn Du die
positioniert hast, dann spiele mal mit den Koordinaten und versuche die Figur
mal in die Mitte oder an einen Rand zu positionieren. Und zum Schluss ersetzt Du
Deine Koordinaten durch die Variablen, die Du am Anfang definiert hast (player_x
und player_y).

Das sollte dann ungefähr so ausschauen (natürlich mit jeweils Deinem Hintergrund
und Deiner Spielfigur):

{{ figure(source="/images/arcarde_1.png", alt="arcarde Screenshot") }}

Insgesamt müsste bei Dir jetzt ungefähr dieser Code stehen:

{{ file(name="game.py") }}

```python
import pygame, os, sys
from pygame.locals import *

pygame.init()
fpsClock = pygame.time.Clock()
surface = pygame.display.set_mode((800, 600))
background = pygame.Color(100, 149, 237)
image = pygame.image.load(`canvas.png`)
meeple = pygame.image.load(`meeple1g.png`)
player_x = 100
player_y = 100

while True:
    surface.fill(background)
    surface.blit(image, (0,0))
    surface.blit(meeple, (player_x, player_y))
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.update()
    fpsClock.tick(30)
```

Jetzt wäre es nicht gerade attraktiv, die Figur zu steuern, wenn wir jedesmal
den Code anpassen. Also sollten wir die Tastatureingaben der Benutzerin abfangen
und das Ergebnis direkt auf die Figur übertragen. Dafür brauchen wir ein
weiteres Ereignis beziehungsweise Event. Wir legen also in die for-Schleife
`for event in pygame.event.get():` einen weiteren Teil dazu:

```python
if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                ...
```

Was passiert da? Mit jedem Durchlauf durch die While-Schleife (was ja
fortwährend passiert) fragt pygame, ob es ein Event gibt. Falls das Event
`Keydown`, also eine Taste gedrückt wird und wenn (sind ja zwei if-Bedingungen)
auch noch Cursor-Taste gedrückt wurde, dann... ja was dann? Jetzt grübel mal
bitte, was passieren muss, damit sich die Figur ein Stück runter bewegt. Das
kannst Du schon! Im Zweifel probiere ein bißchen rum. Du kommst bestimmt selbst
auf die Lösung. Hängst Du? Dann überlege, wie Du die Koordinaten jeweils in die
gewünschte Richtung um 100 verändern kannst; wobei 100 eine Zahl ist, bei der
probieren musst, ob das für Dich passt. Wenn Du das raus hast, dann versuche
auch die anderen Richtungen zu programmieren. Auf `K_RIGHT` folgt `K_LEFT`,
`K_DOWN` und `K_UP`. Wenn Du das alles hast, teste es und schau, ob sich Deine
Figur wie erwartet bewegt. Tip: Das Erhöhung oder Vermindern von Variablen
braucht man irgendwie ständig. Deshalb gibt es hierfür eine Abkürzung. Du
könntest schreiben `player_x = player_x + 100`. Aber Du kannst das abkürzen mit
`player_x += 100`. Nebenbei - das Erhöhen einer Variable nennt man
inkrementieren, das Verringern dekrementieren. Dafür muss der Datentyp ein
Integer sein. Grübel mal nach, warum ein Float dafür keine gute Idee wäre.

Der Code müsste dann ungefähr so bei Dir aussehen (nicht schmulen!, selber
knobeln):

```python
import pygame, os, sys
from pygame.locals import *

pygame.init()
fpsClock = pygame.time.Clock()
surface = pygame.display.set_mode((800, 600))
background = pygame.Color(100, 149, 237)
image = pygame.image.load(`canvas.png`)
meeple = pygame.image.load(`meeple1g.png`)
player_x = 100
player_y = 100

while True:
    surface.fill(background)
    surface.blit(image, (0,0))
    surface.blit(meeple, (player_x, player_y))
    for event in pygame.event.get():
      if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                player_x += 100
            if event.key == pygame.K_LEFT:
                player_x -= 100
            if event.key == pygame.K_DOWN:
                player_y += 100
            if event.key == pygame.K_UP:
                player_y -= 100
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.update()
    fpsClock.tick(30)
```

Hei, Du hast den Grundstein für Dein Spiel gelegt! Jetzt ist Dir aber vielleicht
schon aufgefallen, dass Du mit der Figur in den „Abgrund“ stürzen kannst. Sie
ist dann einfach weg. Die nächste Aufgabe ist, dass Du genau das verhinderst.
Versuche also den Code so zu erweitern, dass immer vor der Bewegung der Figur
geprüft wird, ob diese Bewegung noch möglich beziehungsweise zulässig ist. Wenn
nicht, wird die Bewegung ignoriert. Lass Dir ruhig einen Moment Zeit dafür. Das
kriegst Du bestimmt, aber es bedarf ein wenig Geduld. Wenn Du diese Aufgabe
gemeistert hast, dann überlege Dir, wie Du diese Prüfung in eine Funktion
auslagern kannst.

Du wirst eine Bedingunen schreiben müssen. Um diese zu vereinfachen, kannst Du
Bedingungen verknüpfen. Wenn Du also beispielsweise sagen möchtest, dass der
if-Teil nur dann wahr ist (und damit ausgeführt wird), wenn player_x = 100 und
player_y = 100 ist, dann kannst Du schreiben:

```python
if player_x == 100 and player_y == 100:
   print("Treffer!")
else:
  print("Kein Treffer!")
```

Neben `and` ist `or` und `not` noch ganz wichtig. Für `not` zeigen wir Dir
später noch Beispiele. Um die Vergleichsoperatoren bei Bedingungen vollständig
zu machen:

-   == gleich

-   != ungleich

-   \> größer

-   < kleiner

-   \> = größer oder gleich

-   <= kleiner oder gleich.

Jetzt bist Du dran! Bevor Du jetzt in die Tasten haust, sichere einmal Deinen
Code mit `git add game.py`, `git commit -m "Zwischenergebnis"`, `git push`. Nimm
Dir Zeit, um das Spiel wie beschrieben weiterzuentwickeln. Und lass uns
gemeinsam über Dein Ergebnis sprechen. Unten steht eine Möglichkeit, wie man es
machen kann. Aber tue Dir selbst einen Gefallen und schau Dir das erst an, wenn
Du selbst zu einer Lösung gekommen bist. Wenn Du wirklich nicht weiterkommst,
hilft es Dir mehr, wenn Du zeigst, wo Du stecken geblieben bist, eine Richtung
gesagt bekommst und weitertüftelst.
