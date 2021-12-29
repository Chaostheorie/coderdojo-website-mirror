---
title: '7. Kyo'
subtitle: Schleifen II
katex: true
date: 07-12-2021
category: chapters
---

## Schleifen binden

Wir wollen zum Thema Schleifen zurückkehren und lernen, wie wir die eleganter um Dinge herum binden können.

### Schleifen steuern

Zum Steuern von Schleifen lernen wir zwei neue Befehle kennen:

-   `break`

-   `continue`

Diese werden vor allem interessant, wenn du in einer Schleife eine Bedingung gesetzt hast, also eine
if-else-Konstruktion. Bei `break` wird die Schleife abgebrochen – egal wie viel Schleifendurchläufe eigentlich noch
geplant gewesen wären.

Mit `continue` wird der Schleifendurchlauf ab dieser Stelle übersprungen und es geht mit dem nächsten Durchlauf weiter.
Wir zeigen Dir ein Beispiel:

{% file("control-for-loop.py") %}

```python
for i in range(5):
    print("Wir machen ")
    if i == 1:
        print("feinen Fug")
    elif i == 2:
        print("i: ", i)
        continue print("groben Unfug")
    elif i == 4:
        print(" genug.")
	    break
    print("und so.")
```

### While-Schleife

Neben der for-Schleife kennt Python noch einen Schleifentyp – die `while`-Schleife. Diese läuft so lange, bis die
Bedingung im Kopfteil erfüllt ist:

{% file("control-while-loop.py") %}

```python
i = 0
while i != 10:
    i = int(input("Rate die Abbruchbedingung: "))
print("Erfolgreich geraten!")

```

Okay, das Beispiel ist jetzt nicht der Bringer. Aber du verstehst hoffentlich, worum es geht. Eine Vorschleife läuft
grundsätzlich ihr Programm stupide ab, während die While-Schleife bei jedem Durchlauf die Bedingung des Kopfteils prüft.
Wenn du also vor der Schleife schon weißt, wie oft sie durchlaufen werden soll, dann ist die For-Schleife meist richtig.
Wenn du das nicht weißt, dann die While-Schleife. Mit der While-Schleife kann man wunderbar eine endlos-Schleife bauen:

{% file("inifint-while-loop.py") %}

```python
while True:
    print("Das so lange weiter, wie die Bedingung wahr ist und sie ist immer wahr.")
```

Hier kannst du entweder mit `Strg+c` bzw. `Control+c` den Ausstieg finden. Das ist aber nicht gerade elegant. Mit
`break` kannst du sauber aus der Schleife aussteigen. Wenn du also solche endlos-Scheifen verwendest, musst du Dir immer
überlegen, wie du da wieder rauskommst. Wenn wir mit einer grafischen Oberfläche arbeiten, wird das unser
Standardeinstieg werden. Ansonsten kannst du super für so kleine Tools benutzen. Hole Dir nochmal das Programm oben für
die Konfektionsgrößen hervor. Baue das Programm so um, dass der Benutzer immer wieder die Möglichkeit bekommt, die
Größen neu ausrechnen zu lassen, bis er `quit` schreibt.

## Debugger

> "Außerdem müssen wir offen sagen: [...] Programmieren lernen tut weh, weil jeder daran scheitert, scheitert,
> scheitert - bis der Code funktioniert."
>
> [Prof. Dr. Doris Aschenbrenner](https://www.golem.de/news/informatik-professorin-im-portraet-programmieren-lernen-tut-weh-2110-160267.html)
> Professorin für Maschinenbau / Entwicklung: Design und Simulation an der Hochschule Aalen

Wenn du bis hierin gekommen bist, wirst du es schon erlebt haben - der Code will nicht laufen. Meist verbringt man mit
der Fehlersuche mindestens soviel Zeit wie mit dem eigentlichen Schreiben. Programmieren - nicht nur lernen - tut also
immer auch ein bisschen weh. Es lohnt sich trotzdem, weil es ein großartiges Gefühl ist, wenn es dann doch irgendwann
läuft. Es gibt Werkzeuge, mit denen man aber den Schmerz minimieren kann. Bug ist Dir sicherlich ein Begriff. Das steht
für einen Fehler. Fehler beseitigen nennt man debuggen und Programme, die einem dabei helfen, debugger. Wie setzt du in
PyCharm einen Debugger ein?

Nimm Dir mal das obigen Programm control-while-loop.py. Statt Run startest du es jetzt mal in PyCharm unter dem
Menüpunkt Run mit Debug. Da passiert jetzt erstmal nicht viel. Jetzt legst du dir vorher einen Stoppunkt fest, am besten
auf Zeile 3, also die mit dem input. Jetzt startetst du nochmal mit debug. Huch - jetzt zeigt er dir an, welchen Wert i
beim Auftreffen des Stopppunktes hat. Das kann super praktisch sein, weil du so sehen kannst, wie sich Variablen
verändern. Du kannst mit F9 oder in dem du diesen weiterauführen lassen. Versuche bei den Programmen, die du ab jetzt
schreibst, wenn du festhängst, mal mit diesen Stopppunkten zu spielen. Es lohnt sich, für den Debugger ein Gefühl zu
entwickeln. Du wirst sehen, dass er ein mächtiges Werkzeug sein kann, um Fehler zu finden. Und wenn bei gemeinsamen
Sitzungen kommt - wirf mal den Debugger an und setze dort mal einen Stopppunkt - weißt du jetzt schon, was gemeint ist.

## Münzwechsler

Das nächste Programm soll eine Grundlage für einen Münzwechsler darstellen. Die Benutzerin gibt einen Geldbetrag von 1
bis 99 Cent ein. Der eingegebene Betrag soll dann in den Münzen mit 1, 2, 3, 10, 20 und 50 Cent ausgegeben werden - aber
bitte so, dass möglichst wenig Münzen benötigt werden.
