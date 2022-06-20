+++
title = "6. Kyo"

color = "#FFFF00"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# PyGames

<Figure src="/images/kyo-6/Pygame.png" alt="Das pygame-Logo von TheCorruptor/pygame developers" />

Juhu, wir kommen zu pygames. Das ist eine Bibliothek, die es Dir ermöglicht, Grafik darzustellen und Tastatur- und
Mauseingaben abzufangen, damit du sie gut verarbeiten kannst. Wenn du zockst, wollen wir gleich zugestehen, dass man mit
pygames keine Hochleistungsspiele bauen kann. Aber du kannst damit schon eine Menge machen und vor allem viel Coding
spielerisch lernen. Wenn du selber in der Dokumentation von pygame stöbern willst, findest du sie auf der
[pygame-Seite](https://www.pygame.org/docs/).

Wir brauchen jetzt erstmal einen Hintergrund für die Spielfläche und eine Figur. Bei
[OpenGameArt](https://opengameart.org/) kannst du Dir was passendes raussuchen. Am besten gehst du auf `Browse` und dann
auf `Textures`. Wichtig ist, dass du eine png-Datei nimmst. Eine Spielfigur kannst du bei
[Kenny](https://kenney.nl/assets/space-kit) runterladen. Das ist der Link für ein Spacespiel. Aber du kannst Dir
natürlich auch eine andere Figur nehmen. Wichtig ist jetzt nur, dass diese beiden Dateien in Deinem Projektverzeichnis
drin stehen. Die anderen Grafikdateien lass besser draußen. Auf geht es in den Code:

```python:game.py
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

Stumpf Code abtippen ist nicht. Also was passiert hier. Wir holen uns erstmal Bibliotheken, neben pygame noch zwei, die
uns ermöglichen, Dateien zu laden. Dann initialisieren wir pygame. Wir sagen der Bibliothek, dass es los geht. Dann
brauchen wir einen Zeitgeber. Der spielt im kommenden Code noch eine wichtige Rolle. Mit `display.set_mode` legst du
fest, wie groß das Spielfeld wird. Mit `background` legen wir eine Hintergrundfarbe fest. `image` lädt das Spielfeld und
`meeple` die Figur. Mit `player_x` und `player_y` wird die Figur auf eine bestimmte Koordinate festgelegt. Die
Grafikdateien müssen im gleichen Verzeichnis liegen wie diese Python-Datei. Und entweder tragen sie die Namen
`canvas.png` oder du benennst den String dort so um, dass er auf Deinen Hintergrund zeigt. Das gleiche gilt für die
Spielfigur. Die Bildschirmgröße spannt quasi ein Koordinatensystem mit 800-Punkten auf der x-Achse und 600 Punkten auf
der y-Achse auf. Das kennst du aus der Schule. In der Schule ist der Nullpunkt aber links unten, hier ist er links oben.
Wenn du in der Schule noch nicht mit Koordinatensystemen zu tun hattest: Stell Dir vor, dass es an Deiner oberen
Bildschirmseite ein Lineal gibt mit 800 Strichen und seitlich ein Lineal mit 600 Strichen. Jetzt kannst du jeden Punkt
auf dem Bildschirm genau bezeichnen. Erhälst du die Koordinaten (100,100) für die Spielfigur, gehst du in die obere
linke Ecke und gehst 100 Striche nach rechts. Das ist die sogenannte x-Achse und steht bei so einer Koordinatenangabe
immer vorne. Die zweite 100 gibt die sogenannte y-Achse an und sagt, wieviele Striche du auf dem Lineal nach unten gehen
müsstest. Dann bist du auf der Koordninate (100,100) gelandet. Alles klar soweit?

Noch ein bißchen Code:

```python:game.py
while True:
    surface.fill(background)
    surface.blit(image, (0,0))

    pygame.display.update()
    fpsClock.tick(30)
```

Die while-Schleife kennst du schonn. Die wird hier genutzt, um erstmal endlos das gleiche zu tun (denn es gibt ja
nichts, was die Bedingung im Kopfteil von while auf False setzt). `surface.fill` setzt den Hintergrund mit dem, was du
oben also `background` definiert hast. `surface.blit` sagt, wo der landen soll. Dieser Bildschirm muss regelmäßig
aktualisiert werden, damit die Veränderungen von Spielfiguren angezeigt werden. Das macht `display.update`. Und die
Zeile mit dem `tick` lässt kurz warten. Den Effekt, hier mit anderen Zahlen zu arbeiten probierst du bitte aus, wenn das
Spiel schon ein wenig steht.

Jetzt haben wir festgestellt, dass die While-Schleife eine Endlos-Schleife ist. Das ist unpraktisch, weil wir aus dem
Spiel auch noch rauskommen wollen. Nach der Zeile mit dem blit fügst du ein:

```python:game.py
for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
```

Probiere jetzt mal den Code aus. Nimm ruhig auch mal die While-Schleife raus bzw. kommentiere sie aus. Einfach, um zu
sehen, was passiert. Da fehlt aber noch die Figur. Probiere die jetzt bitte selber in den Code einzubauen. Und nicht
beim folgendne Code schauen, sondern es selber probieren. Und wenn du die positioniert hast, dann spiele mal mit den
Koordinaten und versuche die Figur mal in die Mitte oder an einen Rand zu positionieren. Und zum Schluss ersetzt du
Deine Koordinaten durch die Variablen, die du am Anfang definiert hast (player_x und player_y).

Das sollte dann ungefähr so ausschauen (natürlich mit jeweils Deinem Hintergrund und Deiner Spielfigur):

<Figure src="/images/arcarde_1.png" alt="arcarde Screenshot" />

Insgesamt müsste bei Dir jetzt ungefähr dieser Code stehen:

```python:game.py
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

Jetzt wäre es nicht gerade attraktiv, die Figur zu steuern, wenn wir jedesmal den Code anpassen. Also sollten wir die
Tastatureingaben der Benutzerin abfangen und das Ergebnis direkt auf die Figur übertragen. Dafür brauchen wir ein
weiteres Ereignis beziehungsweise Event. Wir legen also in die for-Schleife `for event in pygame.event.get():` einen
weiteren Teil dazu:

```python:game.py
if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                ...
```

Was passiert da? Mit jedem Durchlauf durch die While-Schleife (was ja fortwährend passiert) fragt pygame, ob es ein
Event gibt. Falls das Event `Keydown`, also eine Taste gedrückt wird und wenn (sind ja zwei if-Bedingungen) auch noch
Cursor-Taste gedrückt wurde, dann... ja was dann? Jetzt grübel mal bitte, was passieren muss, damit sich die Figur ein
Stück runter bewegt. Das kannst du schon! Im Zweifel probiere ein bißchen rum. Du kommst bestimmt selbst auf die Lösung.
Hängst du? Dann überlege, wie du die Koordinaten jeweils in die gewünschte Richtung um 100 verändern kannst; wobei 100
eine Zahl ist, bei der probieren musst, ob das für Dich passt. Wenn du das raus hast, dann versuche auch die anderen
Richtungen zu programmieren. Auf `K_RIGHT` folgt `K_LEFT`, `K_DOWN` und `K_UP`. Wenn du das alles hast, teste es und
schau, ob sich Deine Figur wie erwartet bewegt. Tip: Das Erhöhung oder Vermindern von Variablen braucht man irgendwie
ständig. Deshalb gibt es hierfür eine Abkürzung. Du könntest schreiben `player_x = player_x + 100`. Aber du kannst das
abkürzen mit `player_x += 100`. Nebenbei - das Erhöhen einer Variable nennt man inkrementieren, das Verringern
dekrementieren. Dafür muss der Datentyp ein Integer sein. Grübel mal nach, warum ein Float dafür keine gute Idee wäre.

Der Code müsste dann ungefähr so bei Dir aussehen (nicht schmulen!, selber knobeln):

```python:game.py
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

Hei, du hast den Grundstein für Dein Spiel gelegt! Jetzt ist Dir aber vielleicht schon aufgefallen, dass du mit der
Figur in den „Abgrund“ stürzen kannst. Sie ist dann einfach weg. Die nächste Aufgabe ist, dass du genau das verhinderst.
Versuche also den Code so zu erweitern, dass immer vor der Bewegung der Figur geprüft wird, ob diese Bewegung noch
möglich beziehungsweise zulässig ist. Wenn nicht, wird die Bewegung ignoriert. Lass Dir ruhig einen Moment Zeit dafür.
Das kriegst du bestimmt, aber es bedarf ein wenig Geduld. Wenn du diese Aufgabe gemeistert hast, dann überlege Dir, wie
du diese Prüfung in eine Funktion auslagern kannst.

Du wirst eine Bedingunen schreiben müssen. Um diese zu vereinfachen, kannst du Bedingungen verknüpfen. Wenn du also
beispielsweise sagen möchtest, dass der if-Teil nur dann wahr ist (und damit ausgeführt wird), wenn player_x = 100 und
player_y = 100 ist, dann kannst du schreiben:

```python:game.py
if player_x == 100 and player_y == 100:
   print("Treffer!")
else:
  print("Kein Treffer!")
```

Neben `and` ist `or` und `not` noch ganz wichtig. Für `not` zeigen wir Dir später noch Beispiele. Um die
Vergleichsoperatoren bei Bedingungen vollständig zu machen:

- == gleich

- != ungleich

- < größer

- \> kleiner

- <= größer oder gleich

- \>= kleiner oder gleich.

Jetzt bist Dd dran! Bevor du jetzt in die Tasten haust, sichere einmal Deinen Code mit `git add game.py`,
`git commit -m "Zwischenergebnis"`, `git push`. Nimm Dir Zeit, um das Spiel wie beschrieben weiterzuentwickeln. Und lass
uns gemeinsam über Dein Ergebnis sprechen. Unten steht eine Möglichkeit, wie man es machen kann. Aber tue Dir selbst
einen Gefallen und schau Dir das erst an, wenn du selbst zu einer Lösung gekommen bist. Wenn du wirklich nicht
weiterkommst, hilft es Dir mehr, wenn du zeigst, wo du stecken geblieben bist, eine Richtung gesagt bekommst und
weitertüftelst.

Der nachfolgende Code ist eine Möglichkeit, wie man es machen könnte.

```python:game.py
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

Läuft so weit alles? Juhu! Da hast du wichtige Grundsteine gelegt. So alleine über den Bildschirm rennen fetzt aber
jetzt nicht wirklich auf Dauer. erweitere bitte Dein Spiel um eine zweite Spielfigur und für eine zweite Spielerin.
Diese nutzt statt der Cursor-Tasten die Tasten `a` für links, `s` für runter, `d` für rechts und `w` für rauf. Natürlich
sollte diese Spielerin auch nicht vom Spielfeld fallen dürfen. Und du solltest Dir überlegen, ob du Code
wiederverwendbar machst, in dem du ihn in Funktionen auslagerst.

Das ist vor allem Schreibarbeit. Nicht nur wegen Corona ist es nicht immer einfach, sich mit anderen zu treffen. Cool
wäre doch, wenn wir jetzt die zweite Spielerin über das Netzwerk gesteuert werden könnte. Das machen wir als
übernächstes. Vorher kommen noch zwei weitere Blöcke.
