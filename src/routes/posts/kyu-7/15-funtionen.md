+++
title = "7. Kyū"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Funktionen

So langsam wird Dein Code größer. Das verlangt nach besserer Strukturierung. Und du wirst an den Punkt kommen, an dem du
dieselben Codestücke mehrfach brauchst. Für beides helfen Funktionen. Eine Funktion hat einen Namen, unter dem sie
aufgerufen wird und sie kann (muss aber nicht!) Parameter mitbekommen und kann auch Ergebnisse zurückgeben. Das schauen
wir uns gleich mal im Code an:

```python:print-hello-func.py
def hallo():
    print("Hallo")

hallo()
```

Jetzt bauen wir eine `printStrich`-Funktion, die immer über und unter dem Text einen Strich setzt:

```python:print-content.py
def printStrich(content):
    print("------------------")
    print(content)
    print("------------------")

printStrich("Hallo")
```

Und jetzt wollen wir noch Werte zurückgeben.

```python:add.py
def add(a, b):
    c = a + b
    return c

print(add(a,b))
```

Bei solchen Funktionen kann sogar direkt im `return` gerechnet werden:

```python:add.py
def add(a, b):
    return a + b
```

Und als letztes Beispiel:

```python:tuple-return.py
def calc(a,b):
    c = a + b
    d = a - b
    return c, d

print(calc(5, 4))
```

Solche Funktionen haben – in Zusammenhang mit den Klassen, die du noch kennenlernen wirst – eine andere wichtige
Funktion: Wenn der Code richtig groß wird, entsteht ein ganz anderen Problem. Windows 7 hat beispielsweise circa 40
Millionen Zeilen Code. Stell Dir vor, dass du einen Fehler entdeckst – du hast an einer Stelle gemerkt, dass eigentlich
Integers addiert werden müssten, in Wirklichkeit aber String aneinander gereiht werden. Auf die Variablen kann aber
unter Umständen vielfach im Code zurückgegriffen werden. Jetzt kannst du ein bisschen oben drüber und unten drunter
schauen, ob es einen Fall gibt, in dem die Behandlung als String richtig ist und die Behandlung als Integer fatal wäre.
Eine Fehlerkorrektur an einer Stelle kann also Auswirkungen an einer anderen Stelle haben und dabei die Situation
verschlimmbessern. Bei 40 Millionen Zeilen Code kann das niemand mehr überschauen. Funktionen und Klassen haben hier
einen großen Vorteil – Variablen, die dort definiert hattest, gelten nur innerhalb dieser Funktion und können von außen
nicht beeinflusst werden. du kannst also in einer Funktion etwas „reparieren“ und Dir sicher sein, dass es keine Effekte
auf den Code außerhalb dieser hat (sogenannte Seiteneffekte). Die praktische Bedeutung ist also immens. Um das konkreter
zumachen, hier ein Beispiel. Bitte schreibe den Code ab und fange an, damit ein wenig rumzuspielen, um damit
warmzuwerden:

```python
def calc(a,b):
    c = a + b
    d = a - b
    a = 100
    b = 200
    return c, d

print(calc(5,4))
print(a)
print(c)
```

Wenn du das Programm startest, wird ein Fehler ausgeworfen. Da hast du nichts falsch gemacht, dass muss so sein. Denn
mit `print(a)` soll `a` ausgegeben werden, welches aber im Hauptprogramm gar nicht definiert ist. `c` ebenso wenig.
Kommentiere mal die einzelnen Print-Zeilen aus und probiere, wann es läuft. Wenn du das a aus der Funktion zurückgeben
wolltest, müsstest du es in das `return` aufnehmen. Aber auch nur in der Ausgabe kannst du es abrufen. Würdest du das
Ergebnis weiterverwenden wollen, dann wäre so etwas denkbar:

```python
def calc(a,b):
    c = a + b
    return c

summe = calc(5,4)
print(summe)
summe = 2 * summe
print(summe)
```

Der Gültigkeitsbereich von `c` liegt also nur innerhalb der Funktion.

Um Dir Verwirrung zu ersparen – teilweise wird bei Funktionen auch von Prozeduren gesprochen. Manche Programmiersprachen
unterscheiden Funktionen darin, ob sie einen Wert zurückgeben oder nicht. In Python macht das keinen Unterschied. Eine
Funktion wird immer mit `def` eingeleitet, ob sie mit einem `return` endet oder nicht. Da kann man beide Begriff für das
gleiche Konstrukt verwenden.

### Stil

Bei Funktionen solltest du bitte immer eine Leerzeile über und eine unter der Funktion freilassen. Das Programm würde
auch ohne laufen. Aber es gibt bei Python einige Konventionen, auf die sich die Python-Programmierer geeinigt haben, um
die Programme besser lesbar zu halten. Diese finden sich in den sogenannten
[Python Enhancement Proposel bzw. PEP8](https://zrezai-dev.de/python/pep-8/). Das ist wie mit den
Variablenbezeichnungen - am besten gewöhnt man sich sowas gleich richtig an. Mit einer Leerzeile ist auch wirklich nur
eine gemeint, da es andere Codeblöcke gibt, die mit zwei Leerzeilen abgetrennt werden; die sog. Klassen, zu denen wir
später noch kommen. Im laufenden Code kann eine Leerzeile gut sein, um größere Blöcke zu gliedern. Wenn das die
Lesbarkeit erhöht - do it!

Wenn die Funktion nicht aus dem Namen heraus klar macht, was sie machen soll, solltest du ihr einen Kommentar
spendieren, der kurz erklärt, was die Funktion macht. Vielleicht hilft als Faustformel - wenn du nach in zwei, drei
Monaten einen Blick auf die Funktionen werfen würdest, könntest du dann auf einen Blick sagen, was sie macht, welche
Parameter reingehen und was ggf. zurückgegeben wird? Alleine wenn du jetzt zögerst, spricht das für einen Kommentar.

Wenn sie einzeilig sind, sollte das so aussehen:

```python
def calc(a,b):
    """Funktion addiert a und b und gibt die Summe als c zurück """
    c = a + b
    return c

```

Wenn sie mehrzeilig sind, schaut das so aus:

```python
def calc(a,b):
    """Funktion addiert a und b
    und gibt die Summe als c zurück
    """
    c = a + b
    return c
```

Die Art der Kommentierung nennt man übrigens [_Docstring_](https://www.python.org/dev/peps/pep-0257/).

Klar könnte man das auch anders machen, aber diese Art der Kommentierung bei Funktionen hat den Vorteil, dass Du
automatisiert auslesen kannst. Das ist bei größeren Projekten sehr charmant. Auch hier gilt - gewöhn es dir gleich
richtig an, das spart dir später einige Mühen... Und auch wenn die Kommentare hier in Deutsch sind - wenn möglich, dann
verwende auch da Englisch.

### Übungen

Als Erstes nimmst du Dir jetzt bitte den Grundumsatzrechner und packst die Berechnung in eine Funktion. Die Abfrage an
die Benutzenden lässt du im Hauptprogramm stehen.

Und weil es so schön war, nimmst du Dir das vorherige Spiel. Überlege Dir bitte, wie du mit Funktionen das Ganze
übersichtlicher gestalten könntest. Dabei sollte zumindest das Thema Highscore in einer Funktion ausgelagert werden.
