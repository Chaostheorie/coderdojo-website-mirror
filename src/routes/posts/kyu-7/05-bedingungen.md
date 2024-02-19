+++
title = "7. Kyū"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Bedingungen

Kommen wir zu einem neuen Element: Bedingungen. Es gibt recht häufig Situationen, in denen etwas zu entscheiden ist.
Das geschieht durch Vergleiche. So in der Art - ist es draußen über 25°C, öffne das Fenster. Oder auch - ist es draußen über 25°C und es regnet draußen nicht, öffne das Fenster, sonst schließe es.

Da ein Gleichheitszeichen bereits mit der Zuweisung für eine Variable belegt ist, ist es für solche Vergleiche „verbraucht“. Python nimmt
deshalb einfach zwei Gleichheitszeichen für einen Vergleich. Das folgende Beispiel ist sehr simpel, zeigt Dir aber, wie es funktioniert:

```python:equality-check.py
a = input("Bitte gib eine Zahl ein: ")
b = input("Bitte gib noch eine Zahl ein: ")
if a == b:
    print("a und b sind gleich")
else:
    print("a und b sind ungleich")
```

Es kommt häufiger vor, dass wir mehrere Vergleiche machen müssen. Wie das ausschaut, zeigt das nächste Beispiel. Die
Zeichen `<`, `>`, `<=` und `>=` solltest du bereits aus der Schule kennen. Um zusagen, dass etwas ungleich ist, schreibt
man `!=`.

```python:number-comparison.py
a = input("Bitte gib eine Zahl ein: ")
b = input("Bitte gib noch eine Zahl ein: ")

if a == b:
    print("a und b sind gleich")
elif a < b:
    print("a ist kleiner als b")
elif a > b:
    print("b ist kleiner als a")
else:
    print("Ich bin verwirrt.")
    print("Habe fertig.")
```

Wenn du das Programm so übertragen hast, wirst du feststellen, dass das gar nicht geht. Woran liegt das? Python denkt,
bei der Eingabe handele es sich um einen Text und nicht um eine Zahl. Wir müssen ihm sagen, dass die Eingabe wirklich
eine Zahl ist; ein bißchen mehr zu dem Thema kommt ein paar Absätze später. Ändere mal

```python
a = int(input("Bitte gib eine Zahl ein: "))
```

(und b entsprechend anpasst) und teste nochmal. Und als nächstes gib mal einen Buchstaben statt einer Zahl ein. Puh. Das
Programm ist also noch fehleranfällig; Mittel dagegen lernst du noch am Ende des Gürtels.

Das Programm springt also in `if` und führt einen Vergleich durch. Ist der erfolgreich, springt es gleich an das Ende
dieser Bedingung. In die anderen Codeteile schaut es gar nicht mehr herein. In den `else`-Teil kommt es nur dann rein,
wenn keiner der vorher aufgeführten Bedingungen wahr war. Alles klar soweit?

Hierzu ein Beispiel: Für eine Zahl, die durch `3` teilbar ist, soll `Teiler-3`ausgegeben werden und für eine Zahl, die durch `2` teilbar ist, soll `Teiler-2`ausgegeben werden. Wenn die Zahl weder durch `3` noch durch `2` teilbar, soll "Nö" ausgegeben werden. Ein denkbarer Code wäre hierfür:

```python:teiler.py
test = int(input("Bitte gib eine Zahl ein:"))

if test % 3 == 0:
    print("Teiler-3")
elif test % 2 == 0:
    print("Teiler-2")
else:
    print("Nö")
```

Liefert dieser Code das erwartete Ergebnis? Probiere mal die Zahl `6` aus. Die ist durch `3` und durch `2` teilbar. Fällt dir was auf? Ändere den Code bitte so ab, dass das korrekte Ergebnis ausgegeben wird.

Mit Bedingungen hast Dann hast du schon wirklich wesentliche
Elemente gelernt, mit denen man schon eine Menge machen kannst.

## Übungen

Auf geht es zu ein paar Übungen, um das neu erlernte zu festigen.

### Grundumsatz

Mit der sogenannten Harris-Benedict-Formel lässt sich (ungefähr) berechnen, wie viel Kilokalorien ein Mensch pro Tag
verbraucht. Bei Männern lautet diese:

$G = 66,47 + 13,7 \times m + 5 \times l - 6,8 \times t$

und bei Frauen:

$G = 655,1 + 9,6 \times m + 1,8 \times l - 4,7 \times t$

Denk bitte daran, dass der Dezimaltrenner bei Python (und quasi allen anderen Programmiersprachen) der Punkt und nicht
das Komma ist.

G ist dabei der Grundumsatz, m steht für das Körpergewicht in kg, l für die Körpergröße in cm und t für das Alter in
Jahren. Schreibe ein Programm, dass bei den Nutzenden die notwendigen Informationen abfragt und dann den Grundumsatz
auswirft. Dieser wird in Kalorien, richtigerweise in Kilokalorien ausgegeben. Da diese Einheit zwar gebräuchlich, aber
veraltet ist, gib das Ergebnis auch in Kilojoule aus. Eine Kalorie entspricht ungefähr 4,184 Joule. Wenn du damit ins
Stocken kommst, versuche erstmal Testwerte (Bsp. 80 kg, 170 cm und 25 Jahre) den Variablen zuzuweisen und die Ergebnisse
für Männer und Frauen beide ausgeben zu lassen.

### Summen

Bitte frage den Benutzer nach einer Zahl. Addiere dann alle Zahlen von 1 bis zur Zahl die die Benutzerin Dir angegeben
hat und gib das Ergebnis aus. Bekommst du beispielsweise eine 5 übergeben, dann soll die Rechnung $1+2+3+4+5$ lauten.

### Schach mit ASCII-Art

Gib ein Schachbrett ($8\times8$-Feld) aus. Dabei sollen die weißen Felder mit einer 0 dargestellt werden und die
schwarzen Felder mit einer `#`. Verwende dafür For-Schleifen. Auch hier gilt – weniger Code ist mehr. Wenn du den Code
fertig hast und die Ausgabe stimmt – nimm Dir Zeit und überlege, ob es nicht doch noch eine Lösung gibt, mit der du das
Ergebnis mit einer einfacheren Lösung hinbekommst. Und auch wenn Dir ein erster Lösungsansatz nicht einfällt – Geduld.
Grübeln und probieren gehört dazu.