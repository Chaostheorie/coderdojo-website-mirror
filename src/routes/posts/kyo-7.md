+++
title = "7. Kyo"
color = "#fff"
katex = true
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# 7. Kyo – Weißgurt

> Hinweis: Der Text ist „frisch“. Wenn du Fehler entdeckst, Teile unverständlich findest oder Ideen für bessere und mehr
> Beispiele und Übungen hast, lass es uns bitte wissen, damit wir ihn korrigieren und verbessern können.

> Am liebsten erinnere ich mich an die Zukunft.
>
> _Salvador Dali_

## Inhalt - was werden wird

Willkommen im ersten Teil. Wenn du „Überblick Dojo“ noch nicht gelesen hast, mach das bitte mal. Da steht, was du so
brauchst, um hier gleich mit PyCharm und Python durchstarten zu können.

## Hello World

> Natürlich können auch andere IDEs genutzt werden, aber unsere Erklärungen beziehen sich nur auf PyCharm, um es
> übersichtlicher zu halten. Im Weißgurt sollte es auch ganz gut ohne IDE (wie PyCharm) gehen. Du kannst im Browser
> programmieren. Klick einfach mal auf den Schalter Play, wenn du ein Stück Code siehst. Da kannst du auch eigenen Code
> reinschreiben und ausführen. Also wenn du das Gefühl hast, dass PyCharm an der Stelle mehr schadet als nützt, nutzt
> erstmal die Möglichkeit des Playground, also das was du siehst, wenn du Play klickst. Spätestens ab dem Gelbgurt
> solltest du mit PyCharm oder einer vergleichbaren IDE arbeiten.

Wenn du PyCharm startest, sollte der Start bei Dir ungefähr so aussehen:

<Figure src="/images/kyo-7/8-1-Pycharm-2.png" alt="PyCharm – Welcome screen" />

Klicke auf `New Project`. Dann schaut es ungefähr so aus:

<Figure src="/images/kyo-7/8-1-Pycharm-3.png" alt="PyCharm – New Project screen" />

Bei der obersten Zeile mit Location änderst du den Projektnamen auf „HelloWorld“. Das ist Dein Projektname. Die weiteren
Einstellmöglichkeiten hier werden wir mit der Zeit kennenlernen. Dann klickst du auf „Create“. Unter Umständen rödelt
Deine Kiste jetzt einen Moment. Im nächsten Schritt baut sich der Editor auf. In dem Teil main.py steht allerhand Zeug.
Das löschst du jetzt einfach – entweder du markierst es mit der Maus und drückst die Entf-Taste oder – Tastaturkürzel
lernen ist immer gut – mit Strg+A oder Control+A alles markieren und dann Entf drücken. Dann sollte das bei Dir ungefähr
so ausschauen:

<Figure src="/images/kyo-7/8-1-Pycharm-4.png" alt="PyCharm – Empty main.py" />

Okay, jetzt kann es losgehen!

Warst du schon mal in einem Dōjō? Falls nicht – immer wenn man ein Dōjō betritt und verlässt, gibt es eine kleine
Verbeugung als Gruß. Beginnt man mit einer neuen Programmiersprache, gibt es auch ein solches „Ritual“. Man beginnt
damit, den Computer `Hello World` ausgeben zu lassen. Um etwas ausgeben zu lassen, verwenden wir den Befehl `print`
(engl. drucken). Das wollen wir jetzt probieren:

```python
print("Hello World")
```

PyCharm sorgt dafür, dass die Klammer farbig dargestellt wird. Welche die Farbe die Klammer hat, ist egal. Die Farben
sollen dir nur helfen, bei mehreren Klammern zu sehen, welche Klammern zusammen gehören. Also lass dich von der Farbe
der Klammern bei Screenshots nicht verwirren.

Jetzt führst du das Programm aus: du gehst in der Menüzeile auf „Run“ und dort auf den obersten Punkt „Run `main`“. Dann
sollte sich unten ein Fenster aufbauen, in welchem das Ergebnis Deines Programms ausgeführt wird.

<Figure src="/images/kyo-7/8-1-Pycharm-5.png" alt="PyCharm – hello world" />

Wenn da „Hello World“ steht, hast du es geschafft: Dein erstes Programm! Okay, noch ein sehr kleines, aber immerhin.
Wenn du bis hierin nicht gekommen bist – bitte zögere nicht und lass Dir helfen! Hier können unvorhersehbare
Stolpersteine im Weg liegen, die du vielleicht nicht ohne etwas Unterstützung aus dem Weg geräumt bekommst.

Frag jemanden aus dem Umfeld, komm zu unserem wöchentlichen Videotreff vorbei oder wenn es Präsenztreffen gibt, komm mit
Deinem Rechner in den [xHain](https://x-hain.de/de/). Wenn das hier nicht läuft, kann der Rest auch nicht laufen. Es ist
gut, wenn du Dich selber daran versuchst, aber lass Dich nicht entmutigen, wenn es nicht klappt.

## Schleifen

Als Nächstes wollen wir dieses „Hello World“ zehnmal ausgeben. Eine einfache Methode wäre jetzt sowas:

```python
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
print("Hello World")
```

Aber der gute Admin ist faul – wenn er stupide Dinge mehrfach machen muss, automatisiert er sie. Und genau hier sind
Computer ja auch echt stark. Zehnmal geht noch gut, wenn du 100-mal das machen müsstest, wäre es schon nervig. Und Du
müsstest, um sicherzugehen, dass es nicht 99 oder 101 sind, mehrfach nachzählen. Schöner wäre es doch, wenn wir dem
Computer sagen könnten, dass er diese Befehlszeile n-mal wiederholen soll. Das machen wir mit einer sogenannten
For-Schleife oder For-Loop.

```python
for i in range(10):
    print("Hello World")
```

Die Einrückung erzeugst du, indem du die Tab-Taste verwendest. Das ist die Taste zwischen `CapsLock` (dauernd
großschreiben und der \^-Taste). Probiere es gleich mal aus, indem du wieder auf „Run“ und dann auf
`Run `main``gehst. Wähle die Ausgabe nach. Sind es wirklich zehn `Hello World`? Wenn es nicht geht - ist die Print-Zeile
eingerückt? Ende die for-Zeile mit einem Doppelpunkt? Was sagt die Fehlermeldung? Wenn du das Problem nicht gefixt
bekommst, [melde dich bei uns](https://matrix.to/#/#coderdojo:matrix.cyber4edu.org) und wir helfen dir.

Okay, jetzt bist du dran. Als Nächstes bau den Code bitte so um, dass es zu folgender Ausgabe kommt:

```
Hello
World
World
World
World
World
```

Geschafft? Wenn nicht, dann als Hilfe – du brauchst zwei `print`-Zeilen, je eine über und eine unter der Schleife.
Gleich zur nächsten Übung. Versuche folgende Ausgabe zu erzeugen:

```
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

## Was passiert in der Schleife?

Dabei solltest du „Hello“ und „World“ jeweils nur einmal schreiben. Wenn du da Schwierigkeiten hast, dann einen Hinweis:
Zur For-Schleife zählt alles das, was eingerückt ist. Diese Einrückung ist eine Besonderheit der Programmiersprache
Python. Es gibt Sprachen die solche zusammenhängenden Blöcke mit `begin` und `end` markieren, die meisten Sprachen
verwenden dafür Klammern. Python rückt ein. Hintergrund ist, dass man dies bei den anderen Programmiersprachen auch
machen soll, damit der Code übersichtlicher und verständlicher wird. Die Tugend ist bei Python Pflicht. Rücke zwei
print-Zeilen unterhalb der For-Schleife ein und lass sie Dir ausgeben. Dann probierst du aus, wenn die erste nicht
eingerückt ist und wenn die erste, aber nicht die zweite eingerückt ist. Der erste Fall wirft Dir einen Fehler aus.
Warum? Weil Python erwartet, dass es zu der Schleife einen Inhalt gibt. Rückst du nichts ein, fehlt dieser Inhalt. Spiel
ruhig damit ein wenig rum. Mach mal was mit zwei for-Schleifen oder ändere den Wert in Range.

<Figure src="/images/kyo-7/Tie_shoelace.png" alt="Schleifen für Schuhe..." float="left" />

Was passiert jetzt bei dieser Schleife? `i` ist eine sogenannte Variable. Das kennst du bestimmt schon aus dem
Matheunterricht. Ihr wird mit jedem Durchlauf eine Zahl zugewiesen. `range(10)` gibt an, dass mit jedem Durchlauf `i` um
eins erhöht werden soll, bis es `10` ist. Klingt wenig verständlich? Lass Dir einfach mal ausgeben, was in `i` in jedem
Durchlauf drin steckt.

```python
for i in range(10):
    print("i lautet: ", i)
```

`range` kann noch mehr. Folgender Code beziehungsweise, dessen Ausgabe sollte Dir das ganze zeigen:

```python
for i in range(5, 25, 3):
    print("i lautet: ", i)
```

Du kannst also Startwert, Endwert und Schrittweite definieren. Diese Zahlen können auch negativ sein. Spiel damit ein
wenig rum und gib ein paar andere Zahlen ein.

## Neue Dateien

Du wirst jetzt immer wieder neuen, kleineren oder größeren Code schreiben. Du könntest einfach das bestehende löschen
und die Datei wieder nutzen. Aber das ist nur bei wirklich kleinen Schnipseln sinnvoll, da Du vielleicht wieder
nachschauen willst, was Du schon gemacht hast. Lege Dir also für neue Übungen einfach eine neue Datei an. Dafür gehst Du
auf den Projektordner, rechte Maustaste, New, Python. Dann gibt Du einen Dateinamen an. Vermeide bei den Dateinamen
bitte Leerzeichen.

<Figure src="/images/kyo-7/8-1-Pycharm-6.png" alt="Pycharm - new file" />

<Figure src="/images/kyo-7/8-1-Pycharm-7.png" alt="Pycharm - new file" />

In PyCharm gibt es jetzt eine Falle... Wenn du jetzt auf `Run` gehst, wird nicht die neue Datei ausgeführt, sondern
weiterhin die vorherige. Du musst `Run` und dann auf das zweite `Run` in dem Menü gehen. Jetzt kannst du die neue Datei
zum Start auswählen. Scheint hier umständlich, ist aber an anderer Stelle praktisch. Und gut ist es, die Besonderheit zu
kennen.

## Malen in Schleifen

Jetzt wollen wir noch eine Übung machen – lass uns einen Tannenbaum als sogenannte ASCII-Art zeichnen. Wir gehen später
noch genauer darauf ein, was ASCII ist, aber im kurzen sind es die Buchstaben und Zeichen, die du so am Computer siehst.
Damit kann man kleine Kunstwerke schaffen. Versuche bitte, dass folgendes ausgegeben wird:

```
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

Die Herausforderung ist es jetzt, mit möglichst wenig Code auszukommen. Wir zeigen hier bewusst keine Musterlösung.
Lasst uns gemeinsam im CoderDojo darauf schauen, welche unterschiedlichen Wege Ihr so geht. Dabei lernt Ihr voneinander
eine Menge. Es ist immer gut, auch fremden Code zu sehen. Als Tip geben wir Dir noch eine Zeile Code mit:

```python
print(3 * "*")
```

Falls du jetzt denkst, pah, so einen Baum, billo, kann ich überspringen: Mach den mal mit höchstens zwei Print-Zeilen
und du wirst sehen, da gibt es versteckte Untiefen.

Und weil ASCII-Art so schön ist, „zeichne“ noch eine Sanduhr (knobel auch hier, wie du mit möglichst wenig Code
auskommst):

```
*****
 ***
  *
 ***
*****
```

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

```python:addition.py
a = 10
b = 5
print("10 + 5 =", a + b)
```

Hier kurz die wichtigsten Rechenarten, die du in Python nutzen kannst:

- \+ addieren

- \- substrahieren

- \* multiplizieren

- / dividieren

- // Ganzzahldivision (teste 22/8 und 22//8)

- \% Modulo (gibt den ganzzahligen Rest als Integer aus, teste 22%8)

- \*\* für Potenzen, also 3-Quadrat ist 3\*\*2

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

```python:request-number.py
userInput = input("Bitte gib eine Zahl ein: ")
userInput = int(userInput)
```

Die zweite Zeile nimm bitte erstmal hin, dazu kommen wir gleich. Wenn du an dieser willst, dass die Eingabe als Zahl
behandelt wird, brauchst du das. Jetzt bist du wieder dran. Kombiniere das gelernte. Frage die Benutzer:in nach zwei
Zahlen, addiere sie und gib sie aus. Wenn das funktioniert, lege um den Code eine For-Schleife herum, die dafür sorgt,
dass der Code dreimal ausgeführt wird. Teste ihn. Kommen beim zweiten Anlauf komische Ergebnisse heraus? Versuche
herauszubekommen, woran das liegt. Es hilft, sich bei jeder Zeile zu überlegen, was diese macht und welche Variablen
gerade welchen Wert haben (PyCharm wird Dir später dabei helfen). Falls du hier zu keinem Ergebnis mehr kommst, lass uns
in einem virtuellen CoderDojo gemeinsam drauf schauen. Probiere auch mal aus, was passiert, wenn man einen Buchstaben,
statt eine Zahl eingibt. Wie man solche Fehleingaben der Benutzenden verhindert, kommt etwas später.

## Bedingungen

Kommen wir zu einem neuen Element: Bedingungen. Es gibt recht häufig Situationen, in denen etwas zu entscheiden ist.
Dabei müssen etwas vergleichen. Da ein Gleichheitszeichen bereits mit der Zuweisung für eine Variable belegt ist, nimmt
man einfach zwei Gleichheitszeichen. Das folgende Beispiel ist sehr simpel, zeigt Dir aber, wie es funktioniert:

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

## Variablentypen und Stringspielereien

Inzwischen hast du schon recht viel mit Variablen gearbeitet. Ist Dir dabei aufgefallen, dass bei einem
`a = input("Gib was ein: ")` und `a = 1` das erste `a` für einen Text steht und das zweite für eine Zahl? In vielen
Programmiersprachen musst du bevor du eine Variable das erste Mal nutzen kann, dem Rechner sagen, wie du diese Variable
verwenden willst. Das brauchst du in Python nicht. Das hat so seine Vor- und Nachteile. Steht eine Variable für einen
Text, verwendet man sie als sogenannten String, abgekürzt `str`. Bei ganzen Zahlen nennt man sie Integer (engl. für
ganze Zahl), abgekürzt `int`. Ganze Zahl heißt - es gehen sowohl positive als auch negative Zahlen. Mit `type(a)` kannst
du Dir ausgeben lassen, wie die Variable verwendet wird. Probiere mal folgenden Code aus:

```python:print-types.py
a = "Das ist Text"
print(type(a))
a = 1
print(type(a))
```

Ja, und? Macht das einen Unterschied? Probiere mal folgenden Code aus:

```python:explore-types.py
number1 = 5
number2 = 3
text = "Quatsch"
print(type(number1))
print(type(number2))
print(type(text))
print(number1 + number2)
print(number1 + text)
```

Du kannst Python auch anweisen, dass Variablen einen bestimmten Typ annehmen. Mit `int(a)` sorgst du dafür, dass a als
Zahl behandelt wird und mit `str(a)`, dass es als Text verwendet wird. Probiere Folgendes aus:
