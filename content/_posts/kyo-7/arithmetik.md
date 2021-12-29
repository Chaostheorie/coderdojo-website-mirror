---
title: '7. Kyo'
katex: true
date: 07-12-2021
category: chapters
---

## Benennung von Variablen

Muss das eigentlich ein „`i`“ sein? Nein. Erlaubt ist für Variablen eine Menge. du kannst groß- und kleinschreiben,
Zahlen reinnehmen, Unterstriche dürfen auch drin sein. Python-Befehle dürfen nicht verwendet werden, da diese reserviert
sind (die lernst du jetzt mit der Zeit). Eine Variable darf jedoch nicht mit einer Zahl anfangen. Dann gibt es ein paar
Regeln, die zwar nicht zwingend sind, bei denen du aber mit Zeit immer mehr sehen wirst, dass es total Sinn ergibt, sich
diese von Anfang an anzugewöhnen: Variablennamen sollten immer klein anfangen, außer es handelt sich um eine Klasse. Was
das ist, kommt ein ganzes Stück später. Merke Dir jetzt nur – sie beginnen mit einem kleinen Buchstaben. Für
Variablennamen, die aus mehreren Wörtern bestehen, gibt es zwei Möglichkeiten: `anzahl_Autos` – das nennt man
`snake_Case` oder `anzahlAutos` – das nennt man `CamelCase`. Bei Python wird `snake_Case` bevorzugt. Und Variablen
sollten einen zeigen, was sie beinhalten. Stell Dir vor, dass du Deinen Code nach einem Monat wieder anschaust. Dann
wäre es hilfreich, wenn du auf eine Variable schaust und eine Ahnung davon hast, wofür sie ist. In den Code dafür
komplett neu reindenken zu müssen, sollte nicht der Fall sein müssen.

Müsste es dann nicht besser „Schrittzähler“ statt „`i`“ heißen? Jein. Bei Schleifen und ähnlichen Konstruktionen gibt es
quasi die Ausnahme von der Regel, dass `i` (und bei mehreren ineinander greifenden Schleifen `j`, `k` etc.) üblich sind.
Das gilt nicht nur für Python. Die Variablen sollten gleichzeitig möglichst kurz sein, damit man nicht so viel schreiben
muss, aber lang genug, dass man sie versteht. Das kommt also immer auf das konkrete Problem an. Wenn du drei Koordinaten
definieren willst, können `x`, `y` und `z` super Variablennamen sein. Wenn du aber mehrere hast, hilft `x1` und `x2`
vielleicht nicht mehr weiter, weil du jedes Mal neu überlegen musst, wofür `x1` und `x2` stehen sollte. Das ganze sind
keine starren Regeln, du wirst sehen, dass wir gerade bei kleinen Codestücken uns ebenso nicht sklavisch daran halte.
Behalte sie jedoch im Hinterkopf und du wirst mit der Zeit ein Gefühl dafür gewinnen, wie gute Bezeichnungen aussehen.
Das mag sich an dieser Stelle noch komisch anhören, ist aber tatsächlich ein wichtiges Thema.

Und als letzte Regel – wähle die Namen möglichst in Englisch. Wenn Dein Englisch noch nicht so gut ist, ist das am
Anfang noch nicht so wichtig – aber eine gute Gelegenheit, die eine oder andere Vokabel zu lernen. Und später wirst du
in größeren Gruppen coden. Dank des Internets passiert das nicht unbedingt nur mit Menschen, die Deutsch sprechen.
Deshalb ergibt es Sinn, gleich alles in Englisch zu machen.

## Rechnen

Computer heißen nicht umsonst auch Rechner. Der Begriff kommt übrigens nur scheinbar aus dem Englischen - er leitet sich
vom lateinischen Verb computare ab, was nichts anderes als rechnen heißt. Zurück zum Rechnen: Die „üblichen“
Rechenoperationen funktionieren hier natürlich auch. Das wollen wir uns mit ein wenig Code anschauen. Lösch Deinen
bereits geschriebenen Code, schreib den Mustercode ab und schau Dir die Ausgabe an.

{% file("addition.py") %}

```python
a = 10
b = 5
print("10 + 5 =", a + b)
```

Hier kurz die wichtigsten Rechenarten, die du in Python nutzen kannst:

-   \+ addieren

-   \- substrahieren

-   \* multiplizieren

-   / dividieren

-   // Ganzzahldivision (teste 22/8 und 22//8)

-   \% Modulo (gibt den ganzzahligen Rest als Integer aus, teste 22%8)

-   \*\* für Potenzen, also 3-Quadrat ist 3\*\*2

Diese Klammern `(`, `)` kannst du auch verwenden. Wie beim Taschenrechner werden „Kommazahlen“ mit einem Punkt
ausgegeben. Spiele damit ein wenig rum und probiere auch mal aus, ob die Regle Punkt-vor-Strich beachtet wird und wie
mit Klammern diese Regel „umgangen“ werden kann und wie es sich mit Potenzen verhält.

Versuche bitte Folgendes auszurechnen:

$$
\left(\LARGE{ \frac{1}{2} - \frac{1}{4} + \frac{4+3}{8} }\right) * 2
$$

Wenn du richtig gerechnet hast, sollte 2.25 rauskommen. Wenn nicht, hast du vielleicht ein falsches Rechenzeichen
gesetzt oder die Klammern nicht richtig positioniert.

Es gibt noch mehr Möglichkeiten, wie beispielsweise Wurzelziehen. Dafür muss aber ein zusätzliches Modul eingebunden
werden. Dazu kommen wir noch.

## Eingaben

Jetzt wollen wir den/die Benutzer:in Einbinden. Die Eingabe einer Benutzerin weisen wir einfach einer Variable zu. Und
wir sagen dem Benutzer noch, was er oder sie hier eingeben soll. Das schaut so aus:

{% file("request-number.py") %}

```python
userInput = input("Bitte gib eine Zahl ein: ")
```

Jetzt bist du wieder dran. Kombiniere das gelernte. Frage die Benutzer:in nach zwei Zahlen, addiere sie und gib sie aus.
Wenn das funktioniert, lege um den Code eine For-Schleife herum, die dafür sorgt, dass der Code dreimal ausgeführt wird.
Teste ihn. Kommen beim zweiten Anlauf komische Ergebnisse heraus? Versuche herauszubekommen, woran das liegt. Es hilft,
sich bei jeder Zeile zu überlegen, was diese macht und welche Variablen gerade welchen Wert haben (PyCharm wird Dir
später dabei helfen). Falls du hier zu keinem Ergebnis mehr kommst, lass uns in einem virtuellen CoderDojo gemeinsam
drauf schauen. Probiere auch mal aus, was passiert, wenn man einen Buchstaben, statt eine Zahl eingibt. Wie man solche
Fehleingaben der Benutzenden verhindert, kommt etwas später.

## Bedingungen

Kommen wir zu einem neuen Element: Bedingungen. Es gibt recht häufig Situationen, in denen etwas zu entscheiden ist.
Dabei müssen etwas vergleichen. Da ein Gleichheitszeichen bereits mit der Zuweisung für eine Variable belegt ist, nimmt
man einfach zwei Gleichheitszeichen. Das folgende Beispiel ist sehr simpel, zeigt Dir aber, wie es funktioniert:

{% file("equality-check.py") %}

```python
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

{% file("number-comparison.py") %}

```python
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
wenn keiner der vorher aufgeführten Bedingungen wahr war. Alles klar soweit? Dann hast du schon wirklich wesentliche
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
