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

:::tip Info
Wie unschwer zu sehen ist - dieses Kapitel ist gerade im Entstehen... hab bitte noch einen Moment Geduld, bis es vollständig ist.
:::

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

Fortsetzung zu Aufgabe 2 - die Liste soll mit Zahlen von 1 bis n ausgegeben werden. Frage die Benutzende, welchen Eintrag sie verändern möchte, beispielsweise Eintrag 3, also im Beispiel Paris. Erfolgt ein Eintrag, wird dieser geändert, wird ein leeres Feld übergeben, so soll der Eintrag gelöscht werden. Danach wird die Liste erneut entsprechend angepasst ausgegeben.

### Aufgabe 4

Packe die einzelnen Funktionen des Programms in Funktionen. Es sollte also die Funktion geben print_list, change_list, remove_list.



## Cheatsheet

```python:cheatsheet.py
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



```



```
