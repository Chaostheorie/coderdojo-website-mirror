+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>


## Listen

Als Erstes eine Fingerübung: Wir wollen das „große“ Einmaleins üben – also die Multiplikationsreihen von $1\times 1$ bis
$100\times 100$. Dafür sollen zwei zufällige Zahlen ausgegeben werden und die Benutzerin gibt das Ergebnis ein. Wir
prüfen dann, ob es richtig oder falsch ist und geben das Ergebnis zurück. Für zufällige Zahlen gibt es direkt keinen
Befehl in Python. Wir müssten also erstmal etwas programmieren, dass zufällige Zahlen auswirft. „Künstlich“ zufällige
Zahlen ausgeben zu lassen, ist gar nicht einfach. Dankenswerterweise haben sich andere bereits die Arbeit gemacht und
wir können deren Code nutzen. Man spricht hier von Bibliotheken beziehungsweise Libraries, die du in Deinen Code
einbindest. In Python werden diese Bibliotheken auch Module genannt. Ein solch es Modul stellt Dir quasi neue, weitere
Befehle zur Verfügung. Ein Prinzip von Python ist es, dass Dir die notwendigen Bibliotheken mitgeliefert werden (wie man
noch weitere findet und einbindet – du weißt, später). Das Modul für Zufallszahlen heißt `random` (engl. für _Zufall_).
Es gibt zwei Möglichkeiten es einzubinden – entweder komplett oder nur den Befehl, den du wirklich brauchst. Das
passiert ganz einfach:

```python:import-random.py
import random
```

Hier laden wir nur die Funktion `randrange` aus dem Modul `random`:

```python:import-randrange.py
from random import randrange
```

Warum muss das sein und es wird nicht einfach alles eingebunden, was Python so mitliefert? Hinter jeder so einer
Bibliothek stecken viele, viele Zeilen Code. Um so mehr du davon einbindest, um so langsamer wird Dein Programm und um
so mehr Speicher braucht es. Das merkst du nicht, wenn du etwas wie random dazu lädst. Wenn du aber 50 solcher
Bibliotheken laden würdest, wäre das schon weniger gut. Deswegen nutzen wir `import` immer nur für die Teile, die wir
wirklich brauchen. Und du ahnst es vielleicht schon – deswegen ist der Weg über `from <Modul> import <Funktion>` der
deutlich vorzugswürdigere.

Zurück zu unserer Aufgabe. Wie erstellen wir jetzt eine Zufallszahl? Wir wollen, dass `count1` eine Zufallszahl von 1
bis 100 zugewiesen bekommt. Und damit wir sehen, dass das geht, lassen wir 20 solcher Zahlen ausgeben.

```python:random-number-generation.py
from random import randrange

for i in range(20):
    count1 = randrange(1, 100)
    print(count1)
```

Jetzt solltest du alles haben für unseren Kopfrechentrainer: Weise `count1` eine Zufallszahl von 1 bis 100 zu, ebenso
`count2`. Sag das dem Benutzer an und frage die Benutzerin nach dem Ergebnis. Vergleiche es. Wenn das stimmt, gibt es
eine neue Aufgabe und wenn es falsch ist, sage das und gib erneut die Möglichkeit, ein Ergebnis einzugeben. Diese
Gelegenheit erhalten Benutzende so lange, bis das Ergebnis passt (wenn du willst, kann du sie oder ihn nach drei
Fehlversuchen auch „erlösen“ und die richtige Lösung verraten). Dann mal ran an die Tasten.

Das Programm läuft. Aber jetzt wollen wir es um einen Highscore erweitern. Dafür muss am Anfang die Benutzerin nach dem
Namen gefragt werden. Das Spiel läuft so lange, bis als Antwort „fertig“ eingegeben wird. Für die Wertung wollen wir ein
Verhältnis ausrechnen: Merke Dir, wie viele Aufgaben der Benutzende gemacht hat und wie oft Fehler auftraten. Wenn die
Benutzerin „fertig“ eingibt, wirfst Du dieses Ergebnis als Wertung aus. Wenn du das geschafft hast, kommen wir zum
nächsten Teil. Jetzt könnten wir uns diese Ergebnisse in einer Liste auf einem Blatt aufschreiben – oder …wir verwenden
den Variablentyp Liste. Der wird über zwei eckige Klammern definiert. Da können wir neue Daten aufstapeln, sie abrufen
und löschen. Entweder wird eine Liste gleich mit Werten gefüllt. Dann sähe das so aus:

```python:greater-list.py
greatList = ["Antonia", "Johannes", "Lukasz"]
```

Mit `print(greatList)` können wir sie ausgeben. Die Datentypen innerhalb einer Liste können alle möglichen sein, auch
gemischt. Eine Liste kann also auch so aussehen:

```python:greater-list.py
greaterList = ["Antonio", 24, "Johannes"]
```

Wenn wir ein bestimmtes Element ausgeben wollen, dass schreiben wir:

```python:greater-list-py
greaterList = ["Antonia", "Johannes", "Lukasz"]
print(greaterList[1])
```

Wait what? Warum steht da Johannes und nicht Antonia? Weil die Zählung bei Listen immer bei null beginnt. Und
`greaterList[1]` ist damit das zweite Element. In Programmiersprachen wird meist mit null beim Zählen angefangen. Es
soll deshalb schon Menschen gegeben haben, die aus Gewohnheit mit dem Aufzug in den fünften Stock wollten, und dann die
Taste „4“ gedrückt haben.

Wie fügen wir jetzt ein neues Element an:

```python:greater-list.py
greaterList = ["Antonia", "Johannes", "Lukasz"]
greaterList.append("Cem")
print(greaterList)
```

Für Listen gibt es noch eine ganze Reihe weitere Methoden. Hier soll uns das erstmal genügen. Jetzt haben wir mit
`print(greaterList)` diese Liste ausgegeben. Aber was, wenn wir nicht die Liste auf einmal heraushauen wollen, sondern
jedes Element einzeln. Stell Dir vor, in einer Liste stecken Zahlen. Aber bei der Ausgabe soll zu jedem Listenelement
noch 100 dazu addiert werden. Versuche mal selbst, wie du es lösen würdest. Wenn du wissen willst, wie viele Elemente
eine Liste enthält, dann geht das mit `anzahl = len(greaterList)`.

Wenn du nicht geschmult hast, wird Dein Ergebnis vermutlich so oder ähnlich ausschauen:

```python:range-iteration.py
list_of_Numbers = [52, 235, 235, 93]
length = len(list_of_Numbers)
for i in range(length):
    print(list_of_Numbers[i])
```

Möglich wäre auch:

```python:inplace-range-iteration.py
list_of_Numbers = [52, 235, 235, 93]
for i in range(len(list_of_Numbers)):
    print(list_of_Numbers[i]
```

Eingefleischten Pythonfans brennen jetzt die Augen (deshalb vergiss die beiden obigen Beispiele ganz schnell wieder).
Der richtige Weg hierfür sind sogenannte List Comprehension. Das schaut so aus:

```python:comprehension-print.py
[print(i) for i in [52, 235, 235, 93]]
```

Jetzt wollten wir aber, dass die Zahl um 100 erhöht wird, also:

```python:comprehension-incremention.py
list_of_Numbers = [52, 235, 235, 93]
[print(i + 100) for i in list_of_Numbers]
```

Jetzt solltest du es alleine hinbekommen, den Highscore noch dazu zu entwickeln. Das Ergebnis – also wie viele falsche
im Verhältnis zu der Anzahl der Versuche war – speicherst du einfach mit zum Namen. Wandel das Ergebnis also als String
um und kombiniere es zum Namen. Einen Hinweis noch: ein

```python
listenname.append("Element dazu hinzugefügt wird")
```

setzt eine bereits bestehende Liste voraus. Deshalb musst du die ganz am Anfang erschaffen; wir sagen, initialisieren.
Dafür schreibst du einfach `highscore = []`. Versuche die Aufgabe stückchenweise abzuarbeiten. Wenn du nicht zu Rande
kommst – gar nicht schlimm. Nicht verzweifeln, sondern lass uns bei einer Videositzung gemeinsam drüber sprechen. Wir
stupsen Dich dann an dem Punkt in die richtige Richtung, an dem du stecken bleibst oder holen Dich aus der falschen
Abbiegung zurück auf den richtigen Weg. Wenn du da Dein Problem nicht vor der Gruppe besprechen magst (was an sich
besser ist, weil alle dann was lernen), dann gehen wir mit Dir gerne auch einen Breakoutroom.

## Knobeln

Damit das Hirn schon geschmeidig bleibt, lohnt es sich, es regelmäßig zu kneten. Versuche dich mal an der folgenden
Aufgabe aus dem [Eulerprojekt](https://projecteuler.net/problem=1):

Die möglichen Vielfachen von 3 _oder_ 5 aller natürlichen Zahlen bis 10 sind 3, 5, 6 und 9. Wenn du diese Zahlen
addierst, kommt 23 raus. Wie ist die Summe aller Vielfachen bis 1000?

Wenn du das Ergebnis hast, kannst du im [Eulerprojekt](https://projecteuler.net/problem=1) prüfen, ob es richtig ist.
Falls du dich dort nicht registrieren magst, kannst du uns auch fragen. Wie immer - wenn du auf der Stelle trittst, lass
uns drüber sprechen, damit wir dich unterstüzen können, die Richtung zu finden.
