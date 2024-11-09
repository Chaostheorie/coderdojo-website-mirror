+++
title = "Workshops"
color = "#fff"
created = 2024-02-26
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Python-Grundlagen Teil III

Dritter Präsenzworkshop für junge Menschen mit Vorkenntnissen auf dem Niveau des 7. Kyū (Weißgurt) - auf dem Weg zum 6. Kyū (Gelbgurt).

:::tip Info
Wie unschwer zu sehen ist - dieses Kapitel ist gerade im Entstehen... hab bitte noch einen Moment Geduld, bis es vollständig ist.
:::

## Übungen

### Aufgabe 1a - Funktionen

Falls Du Star Trek Prodigy schon geschaut hast - gibt es beispielsweise in der Amerika Gedenkbibliothek unter der Signatur Film 27 StarPro 1 b:1.BD - wird der Begriff [Warp-Antrieb](https://de.wikipedia.org/wiki/Warp-Antrieb) etwas sagen. Das ist Fliegen mit Überlichtgeschwindigkeit. Um die Überlichtgeschwindigkeit besser verständlich darstellen zu können, rechne diese bitte mit einer Funktion in km/h um. Frag in einer Endlosschleife die Benutzerin, mit welcher Überlichtgeschwindigkeit sie fliegen möchte. Prüfe an dieser Stelle, ob die Eingabe eine Ganzahl ist. Falls nicht, soll der Fehler mit einer Ausnahmebehandlung abgefangen werden. Rechne in einer Funktion die Geschwindigkeit in km/h aus. Die Lichtgeschwindigkeit beträgt im Vakuum 299 792 458 m/s. Prüfe, ob die Zahl negativ ist. Falls das der Fall ist, gib aus, dass sich das Raumschiff rückwärts bewegt. Bei Null, dass es still steht.

### Aufgabe 1b - Funktionen

Aus der speziellen Relativitätstheorie ergibt sich - um so schneller du fliegst, um so schwerer wirst du. Du findest sie im [Wikipedia-Artikel zur Lichtgeschwindigkeit](https://de.wikipedia.org/wiki/Lichtgeschwindigkeit) unter Lichtgeschwindigkeit als universelle Geschwindigkeit. Du wirst sehen, die Formel ist nicht schwierig. Eine Wurzel ziehst Du in Python wie folgt:

```python:wurzel.py

import math

math.sqrt(2)


```

Schreib bitte ein Programm, bei der das Gewicht der Person abgefragt wird. Bau bitte eine Endlosschleife, in der die Geschwindkeit in km/h abgefragt wird. Dieses soll eine Funktion aufrufen, welche angibt, wieviel Prozent der Lichtgeschwindigkeit das entspricht und eine zweite Funktion, die berechnet, wie schwer die Person jetzt ist. Überlege Dir, welche Fehleingaben durch die Benutzerin möglich sind und wie du die abfangen kannst.

## Cheatsheet

```python:cheatsheet.py

import math
math.sqrt(zahl)



```
