+++
title = "6. Kyo"

[extra]
color = "#FFFF00"
heading_color = "#733111"
katex = true
+++

# 6. Kyo – Gelbgurt

> Es gibt keinen Misserfolg.
>
> Entweder du hast Erfolg oder du lernst.
>
> _Kevin Kruse_

> Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für
> den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn du das Gefühl hast,
> hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns
> beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht
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
bringen. Dabei lernst du gleich die ersten Grundlagen, wie eine Internetseite
die du aufrust, auf Deinen Rechner kommst. Dafür lernen wir auch einiges über
Linux kennen und warum dieses Betriebssystem für uns wichtig ist.

## Git - Klappe die erste

Git gehört zu den sogenannten Versionsverwaltungssystemen. Diese lösen mehrere
praktische Probleme. Stell Dir vor, du entwickelst ein etwas größeres Projekt.
Dann kann es immer sein, dass du in eine falsche Richtung abbiegst und wieder
Teile rückgängig machen willst. Oder du magst einen neuen Teil einfügen, der
aber nur experimentell zur Verfügung stehen soll. Das Programm soll also in den
Versionen stabil und testing genutzt werden. Hierbei helfen Dir
Versionsverwaltungssysteme. Ihren größten Vorteil spielen sie aber aus, wenn du
mit mehreren an einem Projekt arbeitest. Versionsverwaltungssysteme sind alt und
es gibt viele verschiedene. Linus Thorvalds, der Erfinder des Linux-Kernels, war
aber mit allen unzufrieden. Deshalb hat er eine neue Versionsverwaltung
geschrieben - Git. Dieses ist inzwischen das am meisten genutzte System und wird
von Plattformen wie github und gitlab verwendet. Vielleicht hast du von denen
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
Gelbgurt zunächst nur die elementaren Befehle lernen. Im Orange-Gurt lernst du,
was man wissen muss, um ein Projekt zu managen.

{{ figure(source="/images/kyo-6/Git-logo.png", float="end", alt="Das Git-Logo von Jason Long, CC BY 3.0.") }}

Wir beginnen mit einem neuen Projekt. Du loggst Dich bitte in Coderberg ein.
Klicke dort auf das Pluszeichen neben Repository. Repository ist quasi ein
Softwareprojekt. Gib dem ganzen einen Namen. Wir beginnen hier mit einem kleinen
„helloWorld“, um gleich zu üben. Den Rest der Einstellungen lässt du jetzt
erstmal so stehen und klickst unten auf „Repository erstellen“. Wunderbar. Dein
erstes Repository ist erstellt. Codeberg gibt Dir jetzt eine kleine Anweisung
wie es weitergeht. Lass den Tab offen, wir kommen darauf zurück. In PyCharm
legst du bitte auch ein neues Projekt helloWorld an. Folgende Beschreibung gilt
für Linux- und MacNutzende. Windows-Nutzer installieren sich entweder
[Git für Windows](https://gitforwindows.org/) runter. Dort gibt es auch die
Möglichkeit, Git auf der Kommandozeile zu nutzen. Oder du scrollst runter zum
Kapitel Linux und kommst nach diesem Abschnitt hierin zurück. Für Git kann man
auch grafische Oberflächen nutzen, aber tue Dir selber einen Gefallen und lerne
gleich die Befehle. Nicht immmer hat man PyCharm zur Verfügung und machmal kann
man mit den Befehlen auch mehr erreichen. Die grafische Anwendung macht nichts
anderes, als genau die Befehle auszuführen, die ihr jetzt schreibt. Aber bei so
einer Anwendung bist du immer davon abhängig, welche Optionen Dir die Anwendung
zur Verfügung stellt. Dabei gibt es regelmäßig mehr, die du vielleicht dann und
wann nutzen möchtest. Wenn Du die Befehle kannst, kannst du meist ohne Probleme
die verschiedenen grafischen Oberflächen nutzen - umgekehrt klappt das dagegen
nicht. Weiter geht's. Öffne bitte einen Terminal. Gehe in Dein Verzeichnis: Mit
` cd Pycharm` gehst du in das Pycharm-Verzeichnis, mit `cd helloWorld` gehst du
in Dein neues Projekt. Mit `ls -lah` kannst du Dir den Inhalt des Verzeichnisses
anzeigen lassen. Da ist noch nichts drin. Jetzt „arbeitest“ du die
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

Diese Befehlsfolge brauchst du nur beim Anlegen eines neuen Projekts. Also keine
Sorge, dass ist nichts, was jeden Tag vorkommt und was man auswendig kann.

Lass Dein Terminalfenster offen. Das brauchen wir gleich nochmal.

Wir wollen Dir jetzt die einzelnen Schritte erläutern, die du gerade vollzogen
hast. Falls du das Gefühl hast, hier nicht bei jedem Schritt mitzukommen - bitte
nicht entmutigen lassen. Vieles wird sich mit der Zeit klären. Wir würden Dich
aber ungern völlig unkommentiert Zeilen abschreiben lassen. Du sollst immer
nachzuvollziehen können, was du da gerade veranstaltest.

Mit `touch` legst du einfach eine leere Datei an, in diesem Fall heißt die
README.md. Das am Ende `md` steht, verrät Dir, dass es sich um eine sogenannte
Markdown-Datei handelt. Das lernst du auch bald. Es ist eine simple Art, Texte
zu schreiben und wird viel verwendet. Diese Seite ist beispielsweise komplett in
Markdown entworfen worden. `git init` legt ein git-Repository in diesem
Verzeichnis an. Im Hintergrund werden da ein paar Dateien erzeugt, die Git
braucht, um funktionieren zu können. Dazu zählt ein Verzeichnis, dass `.git`
heißt. Der Punkt vor dem Verzeichnisnamen sorgt dafür, dass es bei Linux und Mac
um ein `verstecktes` Verzeichnis handelt, also nicht immer zu sehen ist. Dann
kommt `git checkout`. Git verwendet sogenannte `Branches`. Diese ermöglichen
Dir, beim gleichen Projekt wie eingangs erläutert eine stabile Version und eine
Version in Entwicklung nebeneinander laufen zu lassen. Mit
`git checkout -b main` wird sichergestellt, dass du Dich im sogenannten
Hauptzweig befindest. `git add README.md` bereitet die Datei `README.md` vor, um
sie beim nächsten `Push` (kommt gleich) Deinem Projekt hinzuzufügen.
`git commit` sagt git, dass das, was du gerade über `git add` hinzugefügt hast,
mit einem Kommentar versehen werden soll. Das kann wirklich wichtig werden,
damit man sich nachher noch daran erinnert, was man sich dabei gedacht hat ohne
erst mühevoll aus den Codezeilen die Unterschiede herauszubekommen und zu raten,
was sich der- oder diejenige beim Einchecken dieser Datei gedacht hat. Der
Zusatz `-m "Hier muss Dein Kommentar hin"` fügt den Kommentar dazu. Macht man
das nicht, fragt git nach dem Befehl nach dem Kommentar. Die Zeile
`git remote add ` verbindet das Repository auf Codeberg mit Deinem lokalen
Repository. Und zu guter letzt schiebst du noch mit `git push` das was du über
`git add` hinzugefügt hast - hier die README.md - hoch in Dein Repository auf
Codeberg. Der Zusatz `-u origin main` sichert ab, dass lokal und remote den
richtigen Zweig lokal und remote verwenden. Am Ende brauchst du Deine
Zugangsdaten von Codeberg.

Okay, das war jetzt erstmal ziehmlich viel Zeug. du wirst sehen, im laufenden
Betrieb gestaltet sich git (meist) deutlich einfacher. Also schauen wir uns mal
das „Tagesgeschäft“ an. Geh in PyCharm und öffne mit `File` und dann `Open` das
Verzeichnis `HelloWorld`. Jetzt machst du einen Rechtsklick auf das Verzeichnis.
Dort wird Dir `New` und `Python File` angeboten. Da gibst du `helloWorld` ein.
`helloWorld.pas` ging auch, aber PyCharm ergänzt das `.py` sonst von selbst. Er
wird Dich dann fragen, ob er die Datei der Git-Überwachung hinzufügen soll.
PyCharm kann bei Git Dir einige Arbeit abnehmen. Du kannst da jetzt ruhig
zustimmen. Aber damit du lernst, wie das ohne solche Hilfen geht, machen wir das
zunächst alles zu Fuß. Erst Laufen lernen, dann Fahrrad fahren. :) Okay, wie ein
Hello-World zu schreiben ist, weißt du. Schreib ein einfaches Hello-World.
Vielleicht bindest du noch eine hübsche Schleife drum. Dann gehst du in Deinen
Terminal zurück. Mit `git add helloWorld.pas` fügst du die Datei hinzu. Mit
`git commit -m "denk Dir einen passenden Kommenar aus"` committest du die Datei.
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
Jetzt siehst du, welche commits es schon gab. Klick mal auf Deinen letzten.
Jetzt siehst du, welche Zeilen sich geändert haben. Das kann echt eine Menge
wert sein.

Soweit soll es uns mit git erstmal genügen. Du selbst kann bei regelmäßigen
Commits sehen, was du geändert hast. Und vor allem kannst du leichter den
anderen zeigen, was du gemacht hast. Gleich lernen wir noch, wie man
sicherstellt, dass git Dinge nicht ins Repository schiebt. Wenn wir das nächste
mal näher auf git zurückkommen, siehst du, wie Zusammenarbeit mit git ausschaut.

## virtualenv

Wir wollen für das Spiel gleich ein neues Repository anlegen. Also mach bitte
ein neues Verzeichnis wie Arcarde. Und lege ein entsprechendes Repository bei
Codeberg an. Jetzt initialisierst du git und verknotest es mit Codeberg. Das
kennst du alles schon vom vorherigen Kapiel. Um pygame nutzen zu können, müssen
wir eine Bibliothek installieren, die standardmäßig nicht installiert wird. Das
könnten wir jetzt auf dem gesamten System tun. Das ist aber aus verschiedenen
Gründen nicht gut, alleine schon, weil du Dir so mit der Zeit Deinen Rechner
vollmüllst. Wir schaffen für unserd Projekte ab jetzt immer eine Umgebung, in
der die benötigten Pakete vom Rest des Systems abgeschottet werden. Am Anfang
scheint das lästig, aber sei Dir sicher, du wirst es zu schätzen wissen. Du
brauchst jetzt virtualenv. Das Terminalfenster hast du noch offen. Gib mal
virtualenv ein. Kommen da irgendwelche Fehler oder kommt die Hilfeseite? Falls
die Hilfeseite kommt, prima. Dann ist das schon installiert. Falls Fehler
kommen - bei allen Betriebssystemen solltest du mit `pip install virtualenv` das
ganze installiert bekommen. Wie bei anderem Installtionen - sowas kann sich
schnell garstig darstellen. Bekommst du es nicht selber hin, sei bitte nicht
entmutigt, sondern lass Dir helfen.

Für die Erstellung einer virtuellen Umgebung musst du nur in dem entsprechenden
Verzeichnis sein und mit `virtualenv -p python3 venv` eingeben. Virtualenv (für
virtuell environment, also virtuelle Umgebung) bekommt mit `-p` gesagt, welche
Python-Version es verwenden soll. Und mit venv, in welchem Verzeichnis er die
Dateien für die Umgebung ablegen soll. Das könnte auch anders heißen, aber bei
venv dürften die meisten Programmiererinnen wissen, was sich dahinter verbirgt.
Wenn du das gemacht hast, musst du es noch aktivieren: in Linux / Mac mit
`source venv/bin/activate`. Unter Windows mit `venv\Scripts\activate.bat` oder
mit `venv\Scripts\Activate.ps1`. In Deinem Terminal sollte jetzt `(venv)` stehn,
wenn es geklappt hat. Wunderbar. Sonst ist das ein guter Punkt für den
Donnerstag Abend...

Jetzt kannst du sorgenlos(er) Pakete bzw. Bibliotheken installieren. Das wollen
wir mit `pip install pygame` gleich mal machen. Wenn das bei Windows-Nutzenden
nicht läuft, probiert bitte `py -m pip install -U pygame --user` aus. Läuft das
sauber durch? Der schnelle Test ist, dass du schnell python startest und ein
`import pygame` eingibst. Wenn keine Fehlermeldung kommt, ist alles prima.
Sonst - du weißt schon. Donnerstag und so.

Das Verzeichnis venv enthält nichts, was mit unserem Code zu tun hat. Deshalb
wollen wir das auf keinen Fall in unser Repository hochladen. Das wäre echter
Datenmüll. Lege eine Datei `.gitignore` an. Das kannst du über PyCharme machen.
Rechter Mausklick auf das Projekt, `New`, dann `New Scratch File` und dann
kannst du schon `.gitignore` auswählen. Da trägst du jetzt `venv/`. Jetzt wird
git dieses Verzeichnis zukünftig ausschließen. Über diese Datei können ebenso
einzelne Dateien ausgeschlossen werden. Du kannst ja schon mal in einer neuen
Zeile `\*.png` eintragen, damit die Grafikdateien nicht alle bei Codeberg
landen.

Nachdem du das erfolgreich zu Fuß gemacht hast, PyCharm kann das beim Anlegen
eines neuen Projektes mit erledigen. Nun wirst du auch auf Umgebungen treffen,
bei denen PyCharm nicht läuft (beispielsweise auf einem Webserver). Deswegen
solltest du das auch über die Konsole können. Wenn du lokal entwickelst - wenn
du bei PyCharme auf `File` und dann `New Project` gehst, gibt es den Puntk
`New environment using`. Da kannst du virtualenv auswählen. PyCharm installiert
das und aktiviert es. Wenn du unten in der Zeile nach dem Erstellen auf Terminal
klickst, erhälst du dort eine Konsole mit aktivierter virtueller Umgebung. Und
dort kannst du mit `pip install pygame` die Bibliothek ebenfalls installieren.
Und schau mal oben in die Menüleiste - da wirst du auf Git zum Klicken finden.
Es lohnt sich, beide Wege zu können. Deine IDE (also hier PyCharme) zu
beherrschen, aber davon nicht abhängig zu sein.

## Kultur I.

Wir kommen noch zu Linux, aber um Dir einen Vorgeschmack zu geben, besorge Dir
mal seine Biographie „Just for Fun“ von Linus Torvalds und David Diamond. Das
Buch gibt es auf Deutsch und auf Englisch. Das ist nicht neu, aber lohnt sich
immer noch. Berliner:innen können sich das leihen.

{{ figure(source="/images/kyo-6/Tux.png", float="start", alt="Das Tux-Maskottchen von Larry Ewing, Simon Budig, Garrett LeSage") }}

Geh auf [VOEBB](https://voebb.de). Da liegt es im Magazin der Amerikanischen
Gedenkbibliothek. Kennst du nicht? Dann ist das eine gute Gelegenheit,
Deutschlands größte öffentliche Bibliothek kennen zu lernen. Wenn du noch keinen
Ausweis hast - den kannst du Dir in jeder Stadtteilbibliothek ausstellen lassen.
Aus historischen Gründen ist Berlins Zentrale Landesbibliothek (ZLB) in zwei
Gebäude aufgeteilt: am Halleschen Tor ist die Amerikanische Gedenkbibliothek
(AGB) und die Kinder- und Jugendbibliothek Hallesche Komet. In der AGB bekommst
du ein gigantisches Film- und Musikarchiv, Literatur, Kunst, Philosophie und
andere Geisteswissenschaften. Die Berliner Stadtbibliothek befindet sich in der
Breite Straße, Nähe Alexanderplatz. Da gibt es Informatik, Medizin, Wirtschaft,
Jura, Naturwissenschaften. Bei öffentlichen Bibliotheken liegen die meisten
Medien im Gegensatz zu wissenschaftlichen Bibliotheken in den Regalen. In der
ZLB ist kein Platz, deshalb sind etwa 2/3 der Medien im Magazin. Es lohnt sich
also immer, im OPAC (dem Bibliothekskatalog) nachzuschauen. Von den Magazinen
gibt es gibt es gleich zwei Typen - die in den Häusern und die Außenmagazine.
Bei beiden musst du die Bücher vorbestellen. Das kostet nichts, wenn du Dir die
Bücher in die besitzende Bibliothek liefern lässt. Keine Sorge, falls Kosten
entstehen würden, wird immer vorher gewarnt. Der Unterschied bei den
Magazin-Typen ist, dass beim Inhouse-Magazin das Medien taggleich, spätestens am
Folgetag Dir zur Verfügung gestellt werden sollte. Beim Außenmagazin dauert das
ein paar Tage. Du kriegst eine E-Mail, wenn Dein Buch angekommen ist. Wenn du
über [VOEBB](https://voebb.de) mal „Just for Fun Torvalds“ eingibst, wirst du
schnell auf das entsprechende Buch treffen. Falls du nicht aus Berlin kommst,
schau Dich mal um, was so die Bibliotheken bei Dir in der Umgebung zu bieten
haben. Da wartet manche Überraschung. Falls du das Buch nicht leihen magst, das
kriegt man für einen schmalen Taler bei den üblichen Verdächtigten Händlern im
Netz. Also viel Spaß schon mal beim Lesen.

## PyGames

{{ figure(source="/images/kyo-6/Pygame_logo.gif", float="end", alt="Das pygame-Logo von TheCorruptor/pygame developers  ") }}

Juhu, wir kommen zu pygames. Das ist eine Bibliothek, die es Dir ermöglicht,
Grafik darzustellen und Tastatur- und Mauseingaben abzufangen, damit du sie gut
verarbeiten kannst. Wenn du zockst, wollen wir gleich zugestehen, dass man mit
pygames keine Hochleistungsspiele bauen kann. Aber du kannst damit schon eine
Menge machen und vor allem viel Coding spielerisch lernen. Wenn du selber in der
Dokumentation von pygame stöbern willst, findest du sie auf der
[pygame-Seite](https://www.pygame.org/docs/).

Wir brauchen jetzt erstmal einen Hintergrund für die Spielfläche und eine Figur.
Bei [OpenGameArt](https://opengameart.org/) kannst du Dir was passendes
raussuchen. Am besten gehst du auf `Browse` und dann auf `Textures`. Wichtig
ist, dass du eine png-Datei nimmst. Eine Spielfigur kannst du bei
[Kenny](https://kenney.nl/assets/space-kit) runterladen. Das ist der Link für
ein Spacespiel. Aber du kannst Dir natürlich auch eine andere Figur nehmen.
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
Rolle. Mit `display.set_mode` legst du fest, wie groß das Spielfeld wird. Mit
`background` legen wir eine Hintergrundfarbe fest. `image` lädt das Spielfeld
und `meeple` die Figur. Mit `player_x` und `player_y` wird die Figur auf eine
bestimmte Koordinate festgelegt. Die Grafikdateien müssen im gleichen
Verzeichnis liegen wie diese Python-Datei. Und entweder tragen sie die Namen
`canvas.png` oder du benennst den String dort so um, dass er auf Deinen
Hintergrund zeigt. Das gleiche gilt für die Spielfigur. Die Bildschirmgröße
spannt quasi ein Koordinatensystem mit 800-Punkten auf der x-Achse und 600
Punkten auf der y-Achse auf. Das kennst du aus der Schule. In der Schule ist der
Nullpunkt aber links unten, hier ist er links oben. Wenn du in der Schule noch
nicht mit Koordinatensystemen zu tun hattest: Stell Dir vor, dass es an Deiner
oberen Bildschirmseite ein Lineal gibt mit 800 Strichen und seitlich ein Lineal
mit 600 Strichen. Jetzt kannst du jeden Punkt auf dem Bildschirm genau
bezeichnen. Erhälst du die Koordinaten (100,100) für die Spielfigur, gehst du in
die obere linke Ecke und gehst 100 Striche nach rechts. Das ist die sogenannte
x-Achse und steht bei so einer Koordinatenangabe immer vorne. Die zweite 100
gibt die sogenannte y-Achse an und sagt, wieviele Striche du auf dem Lineal nach
unten gehen müsstest. Dann bist du auf der Koordninate (100,100) gelandet. Alles
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

Die while-Schleife kennst du schonn. Die wird hier genutzt, um erstmal endlos
das gleiche zu tun (denn es gibt ja nichts, was die Bedingung im Kopfteil von
while auf False setzt). `surface.fill` setzt den Hintergrund mit dem, was du
oben also `background` definiert hast. `surface.blit` sagt, wo der landen soll.
Dieser Bildschirm muss regelmäßig aktualisiert werden, damit die Veränderungen
von Spielfiguren angezeigt werden. Das macht `display.update`. Und die Zeile mit
dem `tick` lässt kurz warten. Den Effekt, hier mit anderen Zahlen zu arbeiten
probierst du bitte aus, wenn das Spiel schon ein wenig steht.

Jetzt haben wir festgestellt, dass die While-Schleife eine Endlos-Schleife ist.
Das ist unpraktisch, weil wir aus dem Spiel auch noch rauskommen wollen. Nach
der Zeile mit dem blit fügst du ein:

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
beim folgendne Code schauen, sondern es selber probieren. Und wenn du die
positioniert hast, dann spiele mal mit den Koordinaten und versuche die Figur
mal in die Mitte oder an einen Rand zu positionieren. Und zum Schluss ersetzt du
Deine Koordinaten durch die Variablen, die du am Anfang definiert hast (player_x
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
kannst du schon! Im Zweifel probiere ein bißchen rum. Du kommst bestimmt selbst
auf die Lösung. Hängst du? Dann überlege, wie du die Koordinaten jeweils in die
gewünschte Richtung um 100 verändern kannst; wobei 100 eine Zahl ist, bei der
probieren musst, ob das für Dich passt. Wenn du das raus hast, dann versuche
auch die anderen Richtungen zu programmieren. Auf `K_RIGHT` folgt `K_LEFT`,
`K_DOWN` und `K_UP`. Wenn du das alles hast, teste es und schau, ob sich Deine
Figur wie erwartet bewegt. Tip: Das Erhöhung oder Vermindern von Variablen
braucht man irgendwie ständig. Deshalb gibt es hierfür eine Abkürzung. Du
könntest schreiben `player_x = player_x + 100`. Aber du kannst das abkürzen mit
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

Hei, du hast den Grundstein für Dein Spiel gelegt! Jetzt ist Dir aber vielleicht
schon aufgefallen, dass du mit der Figur in den „Abgrund“ stürzen kannst. Sie
ist dann einfach weg. Die nächste Aufgabe ist, dass du genau das verhinderst.
Versuche also den Code so zu erweitern, dass immer vor der Bewegung der Figur
geprüft wird, ob diese Bewegung noch möglich beziehungsweise zulässig ist. Wenn
nicht, wird die Bewegung ignoriert. Lass Dir ruhig einen Moment Zeit dafür. Das
kriegst du bestimmt, aber es bedarf ein wenig Geduld. Wenn du diese Aufgabe
gemeistert hast, dann überlege Dir, wie du diese Prüfung in eine Funktion
auslagern kannst.

Du wirst eine Bedingunen schreiben müssen. Um diese zu vereinfachen, kannst du
Bedingungen verknüpfen. Wenn du also beispielsweise sagen möchtest, dass der
if-Teil nur dann wahr ist (und damit ausgeführt wird), wenn player_x = 100 und
player_y = 100 ist, dann kannst du schreiben:

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

Jetzt bist Dd dran! Bevor du jetzt in die Tasten haust, sichere einmal Deinen
Code mit `git add game.py`, `git commit -m "Zwischenergebnis"`, `git push`. Nimm
Dir Zeit, um das Spiel wie beschrieben weiterzuentwickeln. Und lass uns
gemeinsam über Dein Ergebnis sprechen. Unten steht eine Möglichkeit, wie man es
machen kann. Aber tue Dir selbst einen Gefallen und schau Dir das erst an, wenn
du selbst zu einer Lösung gekommen bist. Wenn du wirklich nicht weiterkommst,
hilft es Dir mehr, wenn du zeigst, wo du stecken geblieben bist, eine Richtung
gesagt bekommst und weitertüftelst.

Der nachfolgende Code ist eine Möglichkeit, wie man es machen könnte.

```python
import pygame, os, sys
from pygame.locals import *

pygame.init()
fpsClock = pygame.time.Clock()
surface_x = 800
surface_y = 600
surface = pygame.display.set_mode((surface_x, surface_y))
background = pygame.Color(100, 149, 237)
image = pygame.image.load('canvas.png')
meeple = pygame.image.load('meeple1g.png')
player_x = 100
player_y = 100
step_size = 50

def meeple_in(surface_x, surface_y, player_x, player_y, event_key):
    if (event_key == pygame.K_RIGHT) and (player_x + step_size > surface_x):
        return True
    if (event_key == pygame.K_LEFT) and (player_x - step_size < 0):
        return True
    if (event_key == pygame.K_DOWN) and (player_y + step_size > surface_y):
        return True
    if (event_key == pygame.K_UP) and (player_y - step_size < 0):
        return True

while True:
    surface.fill(background)
    surface.blit(image, (0,0))
    surface.blit(meeple, (player_x, player_y))
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            event_key = event.key
            if event.key == pygame.K_RIGHT or meeple_in(surface_x, surface_y, player_x, player_y, event_key):
                player_x += step_size
            if event.key == pygame.K_LEFT or meeple_in(surface_x, surface_y, player_x, player_y, event_key):
                player_x -= step_size
            if event.key == pygame.K_DOWN or meeple_in(surface_x, surface_y, player_x, player_y, event_key):
                player_y += step_size
            if event.key == pygame.K_UP or meeple_in(surface_x, surface_y, player_x, player_y, event_key):
                player_y -= step_size
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.update()
    fpsClock.tick(30)
```

Läuft so weit alles? Juhu! Da hast du wichtige Grundsteine gelegt. So alleine
über den Bildschirm rennen fetzt aber jetzt nicht wirklich auf Dauer. erweitere
bitte Dein Spiel um eine zweite Spielfigur und für eine zweite Spielerin. Diese
nutzt statt der Cursor-Tasten die Tasten `a` für links, `s` für runter, `d` für
rechts und `w` für rauf. Natürlich sollte diese Spielerin auch nicht vom
Spielfeld fallen dürfen. Und du solltest Dir überlegen, ob du Code
wiederverwendbar machst, in dem du ihn in Funktionen auslagerst.

Das ist vor allem Schreibarbeit. Nicht nur wegen Corona ist es nicht immer
einfach, sich mit anderen zu treffen. Cool wäre doch, wenn wir jetzt die zweite
Spielerin über das Netzwerk gesteuert werden könnte. Das machen wir als
übernächstes. Vorher kommen noch zwei weitere Blöcke.

## Kultur II.

Es wird Zeit für Kultur! Über eine Bibliothek, einen (legalen) Streamingdienst
oder andere Wege besorge Dir doch mal den Film
[Hackers](https://de.wikipedia.org/wiki/Hackers_%E2%80%93_Im_Netz_des_FBI). Der
ist zwar schon von 1995, aber immer noch sehenswert. Manche Filmszene wird dir
immer wieder als Meme begegnen. Mal abgesehen davon, dass Du ein bisschen
Computergeschichte dabei mitnimmst, zeigt es dir auch ein wenig den
amerikanischen Blick auf den Begriff Hacker. Über den Begriff können wir ja
gerne mal gemeinsam diskutieren. Wir orientieren uns dabei vielmehr an einem
Satz, der [Wau Holland](https://de.wikiquote.org/wiki/Wau_Holland) zugeschrieben
wird:

> Ein Hacker ist jemand, der versucht einen Weg zu finden, wie man mit einer
> Kaffeemaschine Toast zubereiten kann.

Je nach, wie die Situation ist, können wir gerne versuchen, den auch mal
gemeinsam zu schauen.

## erste Begriffe für Netzwerktechnik

In dem Film _Hackers_ geht es viel um Netzwerke. Auch wir wollen uns im nächsten
Teil verbinden und dafür Netzwerke nutzen (und diese Seite rufst Du ja auch üebr
ein Netzwerk auf). Deshalb wollen wir im ersten Schritt Begriffe (grob) erklären
und klären. Wer schon tiefer in der Materie drin steckt - bitte berücksichtige,
dass es hier um einen stark vereinfachten und ersten Aufschlag geht. Auch hier
werden wir uns Stück für Stück in die (Un-) Tiefen dieses Themas nähern.
Begriffe sind immer etwas abstrakt, aber sie helfen, hier einzutauchen. Wir
stellen hier noch zeitnah eine Zeichnung ein, die am Ende des Kapitels stehen
wird. Sie wird dir hoffentlich helfen, bei den ganzen Begriffen den Überblick zu
behalten.

### MAC-Adresse

Wenn du dich mit deinem Rechner mit einem anderen verbinden möchtest, geht es
mit Deiner Netzwerkkarte los. Davon wirst Du vermutlich zwei haben - eine, um
dich in ein kabelgebundenes Netz einzuklinken und deine WLAN-Karte. Letztere
siehst du bestimmt nicht, weil sie eingebaut ist. Aber wenn du dich mit einem
WLAN verbinden kannst, hast du eine :) Damit diese Karten von deinem
Betriebssystem angesprochen werden können, brauchen sie eine eindeutige Adresse.
Jede Karte besitzt deshalb eine sogeannte
[MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse). Diese ist im Idealfall
weltweit eindeutig. [MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse) hat
nichts mit dem Unternehmen mit dem angebissenen Apfel zu tun, sondern steht für
_Media-Access-Control-Address_. Das sind sechs Blöcke mit hexadezimalen Zahlen.
Falls Dir Hexadezimal nocht nichts sagt - an der Stelle nur: Da können die
Zahlen 0 bis 9 und die Buchstaben A bis F vorkommen. Das schaut dann so
_00-80-41-ae-fd-7e_ oder _00:80:41:ae:fd:7e_ aus. Bei Notebooks findest du
manchmal auf der Unterseite einen Aufkleber, auf der die MAC-Adresse der Karten
abgedruckt werden. Teilweise werden die MAC-Adressen genutzt, um insbesondere
WLAN-Netzwerke abzuschotten. Hintergrund ist, dass du beim Anmelden an ein WLAN
die MAC-Adresse deiner WLAN-Karte mitschickst. Wenn man dann im WLAN-Router
einträgt, welche Netzwerkkarten sich überhaupt nur verbinden dürfen, kann das
ungebeten Gäste fernhalten. Leider ist das kein wirklich wirksamer Schutz, da
man auch frei gewählte MAC-Adressen mitschicken kann. Du wirst noch lernen, wie
das geht - denn es kann gute Gründe geben, diese immer wieder ändern zu wollen.

### IP-Adresse

Du wirst vermutlich zu Hause einen (WLAN-) Router haben, der dich mit dem
Internet verbindet. Viele haben dafür eine Fritz-Box oder etwas anderes, was du
oder deine Eltern von ihrem Internet-Anbieter gestellt bekommen haben. Das Gerät
muss ja nun wissen, mit wem es im Netzwerk so quatscht, um seine Arbeit
verrichten zu können. Stell dir das wie eine Straße vor, auf der viele Häuser
stehen - die einzelnen Computer, Notebooks, Handys. Jedes Gerät hat eine
Hausnummer, die IP-Adresse. Jetzt geizen wir aber nicht mit diesen Adressen,
sondern vergeben für jeden Hauseingang (Netzwerkkarte) mit Namensschild
(MAC-Adresse) eine eigene IP-Adresse. IP steht für _Internet Protocol_. Es gibt
zwei Arten von IP-Adressen. Die älteren sind die sogenannten IPv4-Adressen. Die
besteht aus vier Blöcken. Jeder Block kann eine Zahl von 0 bis 254 haben. Die
kann beispielsweise so aussehen: 192.168.0.1. Das ist schön übersichtlich, hat
aber den Nachteil, dass die Anzahl der möglichen Adressen doch recht begrenzt
ist. Konkret stehen für das Internet circa 3,7 Milliarden Adressen zur
Verfügung. Das hört sich erstmal fürchterlich viel an. Aber jeder Server im Netz
braucht mindestens eine, jeder Internetanschluss, jeder Router... Auf jeden Fall
sind die schon lange knapp, richtigerweise müsste man sagen, sie sind mehr als
alle. Deshalb gibt es seit 1998 den Standard IPv6. Bis Ende 2020 sollen circa
50% des Internets darauf umgestellt worden sein. Du siehst, dass ist ein zäher
Prozess. IPv6-Adressen bestehen aus acht hexadezimalen Blöcken. Das sieht dann
beispielsweise so aus: _2001:0db8:0000:08d3:0000:8a2e:0070:7344_. Führende
Nullen in einem Block darf man weglassen und wenn ein Block ganz Null ist, darf
das auch wegbleiben. Eine IPv6-Adresse könnte also auch so aussehen:
_2001:db8::1428:57ab_. Es gibt circa 340 Sextillionen (das sind 38 Nullen) an
Adressen. Das sollte also erstmal reichen..

Unter einem Protokoll versteht man Regeln, wie Daten ausgetauscht werden. Um die
Infos zwischen der MAC-Adresse und einer IPv4-Adresse klarzumachen, gibt es das
_ARP_, also das _Address Resolution Protocol_, bei IPv6 wird dafür das _NDP_,
also das _Neighbor Discovery Protocol_ verwendet. Es genügt an dieser Stelle,
dass du die Namen mal gehört hast und weißt, dass sie zwischen MAC-Adresse und
IPv4 bzw. IPv6 stehen. So ein Protokoll kannst du dir wie eine Sprache
vorstellen - in einer Sprache definieren wir auch, das dieses leckere Stück Obst
ein Apfel ist. Da haben sich irgendwann irgendwie Menschen darauf geeinigt.
Hätten sie damals sich auf Qufsdk geeinigt, würden wir Qufsdk dazu sagen und
keiner könnte was mit Apfel anfangen. Eine solche Art von Einigung stellt ein
Protokoll dar.

### Port

Jetzt besteht so ein Haus ja nicht nur einem großen Saal, sondern meist aus
mehreren Wohnungen. Wenn die Paketbotin jetzt drei Pakete hat, dann wäre es
hilfreich, wenn sie die nicht einfach unten im Hausflur abwirft, sondern zur
passenden Wohnung bringt. Umgekehrt warten die Bewohner schon gespannt auf die
Pakete und lauschen schon, ob jemand an ihre Tür klopft. Hier sind wir bei den
[Ports](<https://de.wikipedia.org/wiki/Port_(Protokoll)>) angelandet. Jede
IP-Adresse kann so verschiedene Dienste (Päckchen) entgegen nehmen und
umgekehrt, können bestimmte Bewohner schon lauschen, ob man jemand klopft. Die
Ports gehen bei 0 los und können bis 65.535 gehen. Die ersten 1024 Ports,
sogenannte System-Ports oder well-known-Ports, haben eine bestimmte Bedeutung
und werden vom Betriebssystem besonders abgesichert (da die Zählung bei 0
beginnt, ist der letzte Systemport also 1023). Der Port 80 ist beispielsweise
immer für http da, also das, worüber du Internetseiten abrufst. Der Port 443 ist
für https-Seiten, also abgesicherte Verbindungen. Du kannst das mal
ausprobieren: Gibt in deinem Browser statt coderdojo.red coderdojo.red:443 ein.
Damit sorgst du dafür, dass du die Seite coderdojo.red auf dem Port 443
aufrufst. Mit 80 wird das auch gehen, weil du automatisch auf den Port 443
umgleitet wirst. Wie sowas geht, lernst du auch bald. Wenn Du jetzt aber
irgendeinen anderen Port angibst, dann kommt es zur Fehlermeldung. Der Paketbote
klingelt dann nämlich bildlich gesprochen zwar im richtigen Haus, aber an der
falschen Haustür. Andere bekannte Ports sind 21 für ftp, um Dateien zu
übertragen, 22 für ssh, um auf fremde Rechner zugreifen zu können, 25 für SMTP,
um E-Mails versenden zu können und u. a. 143 für IMAP um E-Mails empfangen zu
können oder und 123 für NTP, um die Uhrzeit abrufen zu können. Für diese Ports
gibt es Listen, die muss man also nicht wissen. Aber mit der Zeit, werden dir
viele in Fleisch und Blut übergehen. Merken solltest du dir, dass die Ports
unter 1024 für bestimmte Dienste reserviert sind und für andere Dienste nicht
ohne weiteres zugänglich sind. Ports sind auch ein Teil eines Schutzkonzept von
sogenannten Firewalls. Die machen nämlich gerne mal alle Ports zu und öffnen
dann nur bestimmte, die wirklich benötigt werden. Da erschwert es Angreifern,
unbemerkt in ein System reinzukommen oder aus einem System Daten rauszuschaffen
(beispielsweise Bankdaten).

### TCP

Jetzt tritt die Postbotim auf die Straße, um zum nächsten Haus zu fahren. Das
Bild passt jetzt leider nicht mehr ganz, weil physikalisch laufen die Daten über
ein Kabel, aber die Datenströme auf dem Kabel haben eine Ordnung, ein
sogenanntes Protokoll, dass wir uns als Straße vorstellen. Dieses Protokoll
nennt sich [TCP](https://de.wikipedia.org/wiki/Transmission_Control_Protocol)
(und die Kombination TCP/IP hast du vielleicht schon mal irgendwo gelesen).
_TCP_ steht für _Transmission Control Protokoll_, also
Übertragungssteuerungsprotokoll. Das stammt von 1981 und ist ein echter
Dinosaurier. Während die Dinos aber ausgestorben sind, ist TCP quicklebendig und
wir alle tauschen täglich Daten über TCP aus. Eine Besonderheit von TCP ist,
dass es zwei Punkte, die sogenannten _Sockets_ miteinander verbindet. Es schickt
nicht nur Daten zwischen diesen beiden Punkten hin und her, sondern schaut auch
gleich, ob die richtigen Daten in der richtigen Reihenfolge (das ist alles
andere als selbstverständlich) angekommen sind. Das ist super, der Nachteil ist
jedoch, dass das aufwändiger ist und Zeit kostet. Das ist aber nicht immer
praktisch. Stell dir vor, du schaust Netflix. Wenn da mal ein Paket verloren
geht, das beim Prüfen festgestellt wird (Prüfvorgänge kosten immer Zeit), dann
nochmal geschickt wird, wieder geprüft, in der Zeit kamen andere Pakete an, also
muss alles erst sortiert werden... am Ende bleibt das Bild stehen, bis wieder
alles seine rechte Ordnung hat. Du merkst, dass hier die gesicherte
Datenübertragung vielleicht nicht ganz so wichtig ist. Der Gegenentwurf ist UDP
(für _User Datagram Protocol_). Hier werden die Daten einfach nur rausgeblasen
und die Gegenseite nimmt, was es kriegt. Läuft dann ein Datenpaket schief, gibt
es unter Umständen ein kurzes Rauschen in einer Bildecke. Aber der Film läuft
ungestört weiter. Bei einem Film ist das wichtiger, als dass das Bild immer
perfekt übertragen wird. Wenn Du allerdings von einer Kasse die Daten
überträgst, darf es auch mal länger dauern, wenn dafür alles richtig ankommt.

### NAT

Wie bereits oben beschrieben, waren bei IPv4 die Adressen recht schnell alle.
Also hat man sich etwas schlaues einfallen lassen: Deine Fritz-Box /
Internet-Router bekommt nur eine IP-Adresse von deinem Interprovider. Die Geräte
hinter deiner Fritz-Box erhalten auch eine Adresse, aber die sind in einem
Adresskreis, der für solche Heimnetzwerke reserviert ist. Dadurch kann dein
Rechner vielleicht die 192.168.192.4 haben und meiner auch - trotzdem weiß jedes
Datenpaket, wo es hin muss. Denn wenn du eine Seite aufrust, schickt der
Webserver die Seite zu der IP-Adresse deiner Routers zurück. Der Router hat sich
gemerkt, wer bei der entsprechenden Seite etwas angefordert hat und kann es dann
an die IP-Adresse deiner Rechners weiterleiten. Obwohl wir beide also in unseren
Netzen 192.168.192.4 haben - im Internet ist von uns nur die öffentliche Adresse
unseres Routers zu sehen - und die ist einmalig. Würdest du mich besuchen, dann
müsste einer der beiden Rechner eine andere Adresse bekommen, da in einem
Netzwerk jede IP-Adresse nur einmalig vergeben sein darf. Sonst kommt es zu
sogennanten IP-Konflikten. Bei dieser Art von Konflikt hilft kein Reden, da muss
einer die Adresse wechseln... Dieses Verfahren spart enorm viele Adressen ein
und nennt sich _Network Address Translation_
([NAT](https://de.wikipedia.org/wiki/Netzwerkadress%C3%BCbersetzung)). Wenn
Menschen von _natten_ sprechen, dann meinen sie den Vorgang dieser
Adressübersetzung. Soweit die Vorteile. Der Nachteil ist, dass es nicht ohne
weiteres möglich ist, dass mein und dein Rechner miteinander quatschen können.
Eine Lösungsmöglichkeit ist, dass man sich auf einen gemeinsamen Server einigt,
über den man spricht. Wir sagen also der Brieftaube nicht, fliege mit der
Nachricht zu Sarah, weil du zwar weißt, dass Sarah in der Tucholskystraße wohnt,
aber die Hausnummer nicht kennst. Also sage ich meiner Taube - fliege zum
Marktplatz. Sarahs Taube fliegt auch zum Marktplatz und holt sich den Brief dort
ab und fliegt von da nach Hause - da sie von da kommt, weiß sie, wo sie
hinfliegen muss. Fluch und Segen hängen eng beeinander - während der Weg über
den Marktplatz umständlich wirkt, hat es aber den netten Nebeneffekt, dass
keiner von dem anderen so genau weiß, wo er oder sie wohnt und ungebetene Gäste
nicht so einfach vor der Tür stehen können.

### TLS

Als das Internet geschaffen wurde, war der Kreis der Nutzenden klein, man kannte
und vertraute sich. Die Zeiten sind schon lange vorbei. Deshalb fehlen aber in
vielen ursprünglichen Konzepten, die wir bis heute nutzen, Kontepte, die den
Schutz der eigenen Daten sicherstellt. Am Ende hat man über bestehende
Protokolle weitere Protokolle drüber gelegt, die versuchen, Sicherheit zu
schaffen. Eines davon ist der _Transport Layer Security_
([TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security),
Transportschichtsicherheit). Diese nimmt die Daten an einem Punkt, verschlüsselt
sie und entschlüsselt sie am Endpunkt. Das S bei https (dargestellt durch das
Schloss neben der Adressleiste im Browser) steht beispielsweise für TLS. Das ist
super, verschlüsselt aber nur den Transportweg. Eine E-Mail wird so immer noch
im Klartext auf dem Mailserver abgelegt. Jeder Administrator könnte sie lesen.
Dagegen hilft nur die Ende-zu-Ende-Verschlüsselung. Da gehen wir nochmal darauf
ein, wenn wir es mit einem praktischen Beispiel verknüpfen können.

## MQTT

Jetzt wird es praktisch. Wir wollen ja unsere beiden Spielfiguren über das Netz
verbinden. Wir nehmen dafür - tata - ein Protokoll. Jetzt hast du ja schon eine
grobe Ahnung, was ein Protokoll ist. In diesem Fall verwenden wir
[MQTT](https://de.wikipedia.org/wiki/MQTT), was für _Message Queuing Telemetry
Transport_ steht. Das ist dafür geschaffen worden, damit Maschinen untereinander
reden können. Zwar wollt ihr zu zweit zocken, aber da zwischen euch immer die
Rechner hängen, reden am Ende doch die Maschinen.. MQTT hat reservierte Ports
auf 1883 und 8883. Auch damit kannst du jetzt schon was anfangen. MQTT kann über
TLS abgesichert werden. Den Fall wollen wir aber erstmal (noch) nicht
betrachten.

Der Rest folgt bald...

> War es das schon mit dem Gelbgurt? Mitnichten! Aber wir erarbeiten gerade das
> Programm. Es lohnt sich immer wieder vorbeizukommen, da wir die Seite Stück
> für Stück ergänzen.
