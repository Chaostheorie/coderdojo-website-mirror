+++
title = "Workshops"
color = "#fff"
created = 2024-02-18
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Python-Grundlagen

## 7. Kyū
<Figure src="/images/kyu-7/belt-white_small.svg" alt="weißer Gürtel" />


```python:Aufgabe_1.py
Hello
World
World
World
World
World
```

```python:Aufgabe_2.py
Hello
World
Hello
World
Hello
World
Hello
World
Hello
World
```

```python:Aufgabe_3.py
1. Aufgabe
2. Aufgabe
3. Aufgabe
4. Aufgabe
5. Aufgabe
```

a) Die Zahlen sollen in der Printanweisung nicht ausgeschrieben werden.
b) Die Anzahl der Aufgaben soll durch eine erste Zeile im Code festgelegt werden,
die wie folgt ausschaut:  anzahl_aufgaben = 5

```python:Aufgabe_4_Baum.py
      *
     ***
    *****
   *******
  *********
 ***********
*************
     **
     **
     **
```

Versuche mit möglichst wenig Zeilen Code auszukommen!

Wenn du den Baum gut hinbekommen hast, kannst du dich ja noch an dieser
ASCII-Grafik versuchen:

```python:Aufgabe_5_Sanduhr.py
*****
 ***
  *
 ***
*****
```
Auch hier gilt - es gilt mit möglichst wenig Zeilen Code auszukommen.

```python:Aufgabe_6_schnick_schnack_schnuck.py
Programmiere die Spielemachanik für Schnick-Schnack-Schnuck bzw. Papier-Stein-Schere.
Zur Vereinfachung soll Papier im Programm mit 1 dargestellt werde, Stein mit 2
und Schere mit 3. Der:die Spieler:in 1 gibt ein, mit was sie antritt, ebenso Spieler:in 2.
Das Programm gibt dir aus, wer gewonnen hat.

Beispiel: Spieler 1 nimmt Papier und Spieler 2 Stein. Spieler 1 gibt 1 ein,
Spielerin 2 gibt 2 ein. Das Programmm gibt aus: Spieler:in 2 hat gewonnen.

```

```python:Aufgabe_7_schnick_schnack_schnuck.py
Erweitere das Programm so, dass der Spieler 2 durch den Computer ersetzt wird
und dieser mit einer Zufallszahl von 1 bis 3 spielt.

```

```python:Aufgabe_7_Muenzwechsler.py
Das nächste Programm soll eine Grundlage für einen Münzwechsler darstellen. Die Benutzerin gibt einen Geldbetrag von 1
bis 99 Cent ein. Der eingegebene Betrag soll dann in den Münzen mit 1, 2, 3, 10, 20 und 50 Cent ausgegeben werden - aber
bitte so, dass möglichst wenig Münzen benötigt werden.

```



### Cheatsheet

```python:cheatsheet.py
print("Hello World")
# Ausgabe im Terminal

for i in range(10):
    print(i)
# Gibt die Zahlen von 1 bis 10 aus

print(3 * "*")
# Gibt "***" aus.

wert = 10
# Weist der Variable wert den Wert 10 zu.


- \+ addieren
- \- substrahieren
- \* multiplizieren
- / dividieren
- // Ganzzahldivision (teste 22/8 und 22//8)
- % Modulo (gibt den ganzzahligen Rest als Integer aus, teste 22%8)
- \*\* für Potenzen, also 3-Quadrat ist 3\*\*2

userInput = int(userInput)
# Liest vom Terminal einen Eingabe des Benutzenden ein,
# wandelt in ihn eine Zahl um und weist sie der Variablen
# userInput zu.

if a == b:
    print("a und b sind gleich")
elif a < b:
    print("a ist kleiner als b")
elif a > b:
    print("b ist kleiner als a")
else:
    print("Habe fertig.")
# Prüft wie a und b zueinander stehen und führt die
# print-Anweisung je nach Bedingung aus.

while i != 10:
    i = int(input("Rate die Abbruchbedingung: "))
# Führt den Inhalt der Schleife aus, bis i ungleich 10 ist.

while True:
    print("Die Unendlichkeit ist groß.")
# Endlosschleife

import random
# Modul für Zufallszahlen einlesen.

random.randint(1,10)
# Gibt eine Zufallszahl von 1 bis 10 aus.

```
