+++
title = "Workshops"
color = "#fff"
created = 2024-02-26
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Python-Grundlagen Teil II

Zweiter Präsenzworkshop für junge Menschen ohne Vorkenntnisse - auf dem Weg zum 7. Kyū (Weißgurt).

## Übungen

### Aufgabe 1 - Wiederholung

Das nächste Programm soll eine Grundlage für einen Münzwechsler darstellen. Die Benutzerin gibt einen Geldbetrag von 1
bis 99 Cent ein. Der eingegebene Betrag soll dann in den Münzen mit 1, 2, 3, 10, 20 und 50 Cent ausgegeben werden - aber
bitte so, dass möglichst wenig Münzen benötigt werden. Wenn du keinen Ansatz hast wie das geht, dann schau dir bitte mal an, welche unterschiedlichen Möglichkeiten der Division Python hat. Du kannst dividieren, wie du es aus der Schule kennst. Mit was \/\/ kannst du dir den Teil vor dem Komma ausgeben lassen, mit \%, also Modulo, den Teil hinter dem Komma. Falls dir Modulo noch nichts sagt, gibt es [hier](https://meinstein.ch/math/die-modulo-rechnung-einfach-erklaert/) eine Erklärung. Überlege dir, was du eigentlich bei der Division in diesem Fall wirklich brauchst.

```python:Aufgabe_7_Muenzwechsler.py

Wieviel Geld zahlst du ein? 74

Ausgabe:
50 Cent: 1
20 Cent: 1
2 Cent: 2

```

### Aufgabe 2

Also Vorbereitung für einen Highscore: Der oder die Benutzende soll Namen oder Städte eintragen. Nach einem vordefinierten Abbruchcode (beispielsweise fertig) sollen die Namen in der Liste einmal vorwärts und einmal rückwärts ausgegeben werden. Verwende dabei nicht liste.sort().

Beispiel:

Gib eine Stadt ein: >Berlin
Gib eine Stadt ein: >Tokyo
Gib eine Stadt ein: >Paris
Gib eine Stadt ein: >fertig

Ausgabe:
Berlin, Tokyo, Paris
Paris, Tokyo, Berlin

### Aufgabe 3

Fortsetzung zu Aufgabe 2 - die Liste soll mit Zahlen von 1 bis n ausgegeben werden. Frage die Benutzende, welchen Eintrag sie verändern möchte, beispielsweise Eintrag 3, also im Beispiel Paris. Erfolgt ein Eintrag, wird dieser geändert, wird ein leeres Feld übergeben, so soll der Eintrag gelöscht werden. Danach wird die Liste erneut entsprechend angepasst ausgegeben. Sorge mit einem try-except dafür, dass die Möglichkeit abgefangen wird, dass die Benutzende keine oder eine ungültige Zahl eingibt. Das sollte die Benutzende natürlich auch gesagt bekommen.

### Aufgabe 4 - Zusatz

Baue eine vereinfachte Version des Spiels Galgenmännchens (engl. hangman). Aus einer Liste von Wörtern wird zufällig ein Wort ausgewählt. Für die jeweiligen Buchstaben werden Unterstriche angezeigt. Die Benutzerin kann einen Buchstaben raten. Rät sie richtig, wird dieser statt des leeren Unterstrichs dargestellt. Andernfalls wird stückchenweise ein Galgenmännchens mit Sternchen aufgebaut.

Ob ein Buchstabe in einem Wort enthalten ist, prüfst du mit dem Befehl „in“. Die Groß- und Kleinschreibung findet dabei Beachtung.

```python:galgenmaennchen.py

a = "Wort"
b = "o"
c = "O"

b in a
True

c in a
False

Grafikvorschlag:

_______
 |/      |
 |      (_)
 |      \|/
 |       |
 |      / \
 |
_|___

```

### Aufgabe 5

Packe die einzelnen Funktionen des Programms in Funktionen. Es sollte also die Funktion geben print_list, change_list, remove_list.

### Snippet 1

Lege ein neues Projekt und benenne es so, wie dein Spiel heißen soll. Lege eine „requirements.txt“ an und trage dort „pygame“ ein. Lege dann eine „main.py“ mit folgendem Inhalt an:

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

Den Hintergrund kannst du dir [hier](https://coderdojo.red/images/workshops/pygame/canvas.png) und den Sprite [hier](https://coderdojo.red/images/workshops/pygame/meeple1.png) herunter laden.

### Snippet 2

```python:game.py
while True:
    surface.fill(background)
    surface.blit(image, (0,0))

    pygame.display.update()
    fpsClock.tick(30)
```

### Snippet 3 - Vorbei

```python:game.py
for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
```

#### Snippet 4 - Bewegung

```python:game.py
if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                ...
```

### Aufgabe 6

Sorge dafür, dass deine Figur sich mit den Cursor-Tasten bewegen lässt.

### Aufgabe 7

Derzeit kann der Sprite noch vom Spielfeld fallen. Das verhindere bitte.

### Aufgabe 8

Füge einen zweiten Sprite ein. Den kannst du [hier](https://example.com) herunterladen. Sorge dafür, dass dieser sich mit A, S, D und W bewegen lässt und dass dieser nicht vom Spielfeld fallen kann.

### Aufgabe 9

Gibt über ein print „Treffer“ aus, wenn sich die beiden Spielfiguren berühren.

### Aufgabe 10

Überlege dir, wie du Teile gut in Funktionen packen kannst, so dass der Code übersichtlicher wird und im Idealfall Wiederholungen vermieden werden.

### Aufgabe 11

Verändere den zweiten Sprite so, dass er zufällig über das Spielfeld läuft - natürlich ohne herunterzufallen. Mit deiner Ausgangsfigur sollst du versuchen, vor ihm zu fliehen. Wenn es zu einem Kontakt kommt, dann soll nicht nur Treffer ausgegeben werden, sondern auch, der wievielte.

## Cheatsheet

```python:cheatsheet.py

while test != 10:
   print("Tue Dinge")
# While-Schleife - läuft solange, wie test ungleich 10 ist

while True:
# Endlosschleife

from random import randrange
# Importiert das Modul bzw. die Bibliothek für Zufallszahlen innerhalb eines bestimmten Rahmens

count = randrange(1, 100)
# weist der Variable count eine Zufallszahl von 1 bis 100 zu.

list_of_Numbers = [52, 'foo', 93.25]
# Legt eine Liste mit dem Integer 52, dem String 'foo' und der Gleitkommazahl 93,25 an

list_of_Numbers[1]
# gibt 'foo' aus

liste.append('bar')
# ergänzt die Liste um den String 'bar'

liste[3] = 'bahr'
# verändert das 4. Element der Liste von 'bar' zu 'bahr'

liste.sort()
liste.sort(reverse=True)
# sortiert eine Liste vorwärts und rückwärts (geht aber nicht bei gemisten Listen)

liste.insert(0, 5)
# fügt an Stelle 0 den Integer 5 ein

liste.remove('bahr')
# entfernt das Element 'bahr' aus der List

liste.pop[0]
# entfernt das 0. Element aus der Liste

len(list_of_Numbers)
# gibt die Anzahl der Elemente einer Liste ausgibt

for number in list_of_Numbers:
  print(number)
# iteriert über eine Liste

[print(number) for number in list_of_Numbers]
# iteriert über eine Liste

def add(a, b):
    c = a + b
    return c

# nimmt mit add(3, 5) zwei Zahlen entgegen und gibt das Ergebnis c zurück

def add(a, b):
    return a + b

# wie zuvor, aber ohne den Umweg über c

def calc(a,b):
    c = a + b
    d = a - b
    return c, d

print(calc(5, 4))

# Rückgabe von mehr als einem Wert, Ergebnis ist ein sog. Tupel

try:
    print("Läuft!")
except Exception:
    print("Fehler!")

# Kann Fehler im try-Teil abfangen. Falls es zu einem Fehler kommt, wird der try-Teil ausgeführt.


```
