+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Schleifen binden

Wir wollen zum Thema Schleifen zurückkehren und lernen, wie wir die eleganter um Dinge herum binden können.

### Schleifen steuern

Zum Steuern von Schleifen lernen wir zwei neue Befehle kennen:

- `break`

- `continue`

Diese werden vor allem interessant, wenn du in einer Schleife eine Bedingung gesetzt hast, also eine
if-else-Konstruktion. Bei `break` wird die Schleife abgebrochen – egal wie viel Schleifendurchläufe eigentlich noch
geplant gewesen wären.

Mit `continue` wird der Schleifendurchlauf ab dieser Stelle übersprungen und es geht mit dem nächsten Durchlauf weiter.
Wir zeigen Dir ein Beispiel:

```python:control-for-loop.py
for i in range(5):
    print("Wir sind am Schleifenanfang und i ist ", i)
    if i == 1:
        print("Jetzt ist i gleich ", i)
    elif i == 2:
        print("Jetzt ist i gleich ", i)
        continue
        print("Wird das mal aufgeworfen?")
    elif i == 4:
        print("Jetzt ist i gleich ", i)
        break
    print("Und jetzt sind wir am Ende der Schleife.")
```

Bevor du jetzt vorschnell den Play-Button drückst oder das Programm in PyCharm überführst - schau dir das in Ruhe an und
versuche rauszufinden, was bei jedem Schleifendurchlauf ausgegeben würde. Schau dir dann erst an, was wirklich passiert.

Wofür braucht man jetzt `continue` und `break`? Also zunächst einmal sind das zwei Elemente, die immer auf schnellen und
schmutzigen Code schließen lassen. Behalte das bitte im Hinterkopf. Am Anfang ist das noch okay, weil du erst ein paar
Konstrukte noch kennen lernen musst, um ohne sie auszukommen. Und du musst sie kennen, weil sie dir in fremden Code
immer wieder über den Weg laufen werden. Dann sollte bei dir eine Leuchte mit „quick and dirty“ angehen... Okay, bis
dahin - `break` hilfreich sein, um eine Schleife abzubrechen, weil in der Schleife rauskommt, dass deine Aufgabe bereits
erledigt ist. Und mit `continue` kannst du sehr schön Codeblöcke förmlich überspringen. Man muss nur schon überlegen, ob
das zu Unsinn führt. Die print-Zeile unter dem `continue` wäre ein Kandidat dafür, denn die wird nie unter keinen
Umständen ausgeführt. Aber wenn du die print-Zeile am Ende verhindern wolltest, wäre das an dieser Stelle ein Weg. Mit
dem `break` am Ende wird verhindert, dass der fünfte Schleifendurchlauf überhaupt ausgeführt wird.

### While-Schleife

Neben der for-Schleife kennt Python noch einen Schleifentyp – die `while`-Schleife. Diese läuft so lange, bis die
Bedingung im Kopfteil erfüllt ist:

```python:control-while-loop.py
i = 0
while i != 10:
    i = int(input("Rate die Abbruchbedingung: "))
print("Erfolgreich geraten!")

```

Okay, das Beispiel ist jetzt nicht der Bringer. Aber du verstehst hoffentlich, worum es geht. Eine Vorschleife läuft
grundsätzlich ihr Programm stupide ab, während die While-Schleife bei jedem Durchlauf die Bedingung des Kopfteils prüft.
Wenn du also vor der Schleife schon weißt, wie oft sie durchlaufen werden soll, dann ist die For-Schleife meist richtig.
Wenn du das nicht weißt, dann die While-Schleife. Mit der While-Schleife kann man wunderbar eine endlos-Schleife bauen:

```python:inifint-while-loop.py
while True:
    print("Das so lange weiter, wie die Bedingung wahr ist und sie ist immer wahr.")
```

Hier kannst du entweder mit `Strg+c` bzw. `Control+c` den Ausstieg finden. Das ist aber nicht gerade elegant. Mit
`break` kannst du sauber aus der Schleife aussteigen. Wenn du also solche endlos-Scheifen verwendest, musst du Dir immer
überlegen, wie du da wieder rauskommst. Wenn wir mit einer grafischen Oberfläche arbeiten, wird das unser
Standardeinstieg werden. Ansonsten kannst du super für so kleine Tools benutzen. Hole Dir nochmal das Programm oben für
den Grundumsatz hervor. Baue das Programm so um, dass der Benutzer immer wieder die Möglichkeit bekommt, die Größen neu
ausrechnen zu lassen, bis er `quit` schreibt.

### Multiplizieren

Um die Unterschiede zwischen beiden Schleifentypen mal in einem kleinen Codestück umzusetzen, baue bitte einen
Taschenrechner. Der oder die Benutzende soll zwei Zahlen eingeben. Diese sollen ohne '\*' miteinander multipliziert
werden, also nur mit durch Addition. Ist der erste Faktor größer als der zweite, soll das mit einer for-Schleife
passieren, sonder mit einer while-Schleife. Alles klar? Stell Dein Ergebnis bei einem CoderDojo-Abend einmal vor.