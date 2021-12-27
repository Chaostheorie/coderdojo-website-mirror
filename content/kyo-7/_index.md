+++
title = "7. Kyo"

[extra]
color = "#fff"
heading_color = "#fff"
katex = true
date = 07-12-2021
+++

# 7. Kyo – Weißgurt

> Am liebsten erinnere ich mich an die Zukunft.
>
> _Salvador Dali_

## Inhalt - was werden wird

Willkommen im ersten Teil. Wenn du „Überblick Dojo“ noch nicht gelesen hast,
mach das bitte mal. Da steht, was du so brauchst, um hier gleich mit PyCharm und
Python durchstarten zu können.

> Hinweis: Der Text ist „frisch“. Wenn du Fehler entdeckst, Teile unverständlich
> findest oder Ideen für bessere und mehr Beispiele und Übungen hast, lass es
> uns bitte wissen, damit wir ihn korrigieren und verbessern können.

## Hello World

> Natürlich können auch andere IDEs genutzt werden, aber unsere Erklärungen
> beziehen sich nur auf PyCharm, um es übersichtlicher zu halten. Im Weißgurt
> sollte es auch ganz gut ohne IDE (wie PyCharm) gehen. Du kannst im Browser
> programmieren. Klick einfach mal auf den Schalter Play, wenn du ein Stück Code
> siehst. Da kannst du auch eigenen Code reinschreiben und ausführen.

Wenn du PyCharm startest, sollte der Start bei Dir ungefähr so aussehen:

{{ figure(source="/images/kyo-7/8-1-Pycharm-2.png", alt="PyCharm – Welcome screen") }}

Klicke auf `New Project`. Dann schaut es ungefähr so aus:

{{ figure(source="/images/kyo-7/8-1-Pycharm-3.png", alt="PyCharm – New Project screen") }}

Bei der obersten Zeile mit Location änderst du den Projektnamen auf
„HelloWorld“. Das ist Dein Projektname. Die weiteren Einstellmöglichkeiten hier
werden wir mit der Zeit kennenlernen. Dann klickst du auf „Create“. Unter
Umständen rödelt Deine Kiste jetzt einen Moment. Im nächsten Schritt baut sich
der Editor auf. In dem Teil main.py steht allerhand Zeug. Das löschst du jetzt
einfach – entweder du markierst es mit der Maus und drückst die Entf-Taste oder
– Tastaturkürzel lernen ist immer gut – mit Strg+A oder Control+A alles
markieren und dann Entf drücken. Dann sollte das bei Dir ungefähr so ausschauen:

{{ figure(source="/images/kyo-7/8-1-Pycharm-4.png", alt="PyCharm – Empty main.py") }}

Okay, jetzt kann es losgehen!

Warst du schon mal in einem Dōjō? Falls nicht – immer wenn man ein Dōjō betritt
und verlässt, gibt es eine kleine Verbeugung als Gruß. Beginnt man mit einer
neuen Programmiersprache, gibt es auch ein solches „Ritual“. Man beginnt damit,
den Computer `Hello World` ausgeben zu lassen. Um etwas ausgeben zu lassen,
verwenden wir den Befehl `print` (engl. drucken). Das wollen wir jetzt
probieren:

```python
print("Hello World")
```

Jetzt führst du das Programm aus: du gehst in der Menüzeile auf „Run“ und dort
auf den obersten Punkt „Run `main`“. Dann sollte sich unten ein Fenster
aufbauen, in welchem das Ergebnis Deines Programms ausgeführt wird.

{{ figure(source="/images/kyo-7/8-1-Pycharm-5.png", alt="PyCharm – hello world") }}

Wenn da „Hello World“ steht, hast du es geschafft: Dein erstes Programm! Okay,
noch ein sehr kleines, aber immerhin. Wenn du bis hierin nicht gekommen bist –
bitte zögere nicht und lass Dir helfen! Hier können unvorhersehbare
Stolpersteine im Weg liegen, die du vielleicht nicht ohne etwas Unterstützung
aus dem Weg geräumt bekommst.

Frag jemanden aus dem Umfeld, komm zu unserem wöchentlichen Videotreff vorbei
oder wenn es Präsenztreffen gibt, komm mit Deinem Rechner in den
[xHain](https://x-hain.de/de/). Wenn das hier nicht läuft, kann der Rest auch
nicht laufen. Es ist gut, wenn du Dich selber daran versuchst, aber lass Dich
nicht entmutigen, wenn es nicht klappt.

## Schleifen

Als Nächstes wollen wir dieses „Hello World“ zehnmal ausgeben. Eine einfache
Methode wäre jetzt sowas:

{{ file(name="hello-world.py") }}

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

Aber der gute Admin ist faul – wenn er stupide Dinge mehrfach machen muss,
automatisiert er sie. Und genau hier sind Computer ja auch echt stark. Zehnmal
geht noch gut, wenn du 100-mal das machen müsstest, wäre es schon nervig. Und Du
müsstest, um sicherzugehen, dass es nicht 99 oder 101 sind, mehrfach nachzählen.
Schöner wäre es doch, wenn wir dem Computer sagen könnten, dass er diese
Befehlszeile n-mal wiederholen soll. Das machen wir mit einer sogenannten
For-Schleife oder For-Loop.

{{ file(name="hello-world-loop.py") }}

```python
for i in range(10):
    print("Hello World")
```

Die Einrückung erzeugst du, indem du die Tab-Taste verwendest. Das ist die Taste
zwischen `CapsLock` (dauernd großschreiben und der \^-Taste). Probiere es gleich
mal aus, indem du wieder auf „Run“ und dann auf
`Run `main``gehst. Wähle die Ausgabe nach. Sind es wirklich zehn`Hello World`?
Wenn es nicht geht - ist die Print-Zeile eingerückt? Ende die for-Zeile mit
einem Doppelpunkt? Was sagt die Fehlermeldung? Wenn du das Problem nicht gefixt
bekommst,
[melde dich bei uns](https://matrix.to/#/#coderdojo:matrix.cyber4edu.org) und
wir helfen dir.

Okay, jetzt bist du dran. Als Nächstes bau den Code bitte so um, dass es zu
folgender Ausgabe kommt:

```
Hello
World
World
World
World
World
```

Geschafft? Wenn nicht, dann als Hilfe – du brauchst zwei `print`-Zeilen, je eine
über und eine unter der Schleife. Gleich zur nächsten Übung. Versuche folgende
Ausgabe zu erzeugen:

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

Dabei solltest du „Hello“ und „World“ jeweils nur einmal schreiben. Wenn du da
Schwierigkeiten hast, dann einen Hinweis: Zur For-Schleife zählt alles das, was
eingerückt ist. Diese Einrückung ist eine Besonderheit der Programmiersprache
Python. Es gibt Sprachen die solche zusammenhängenden Blöcke mit `begin` und
`end` markieren, die meisten Sprachen verwenden dafür Klammern. Python rückt
ein. Hintergrund ist, dass man dies bei den anderen Programmiersprachen auch
machen soll, damit der Code übersichtlicher und verständlicher wird. Die Tugend
ist bei Python Pflicht. Rücke zwei print-Zeilen unterhalb der For-Schleife ein
und lass sie Dir ausgeben. Dann probierst du aus, wenn die erste nicht
eingerückt ist und wenn die erste, aber nicht die zweite eingerückt ist. Der
erste Fall wirft Dir einen Fehler aus. Warum? Weil Python erwartet, dass es zu
der Schleife einen Inhalt gibt. Rückst du nichts ein, fehlt dieser Inhalt. Spiel
ruhig damit ein wenig rum. Mach mal was mit zwei for-Schleifen oder ändere den
Wert in Range.

{{ figure(source="/images/kyo-7/Tie_shoelace.png", float="start", alt="Schleifen für
Schuhe...")      }}

Was passiert jetzt bei dieser Schleife? `i` ist eine sogenannte Variable. Das
kennst du bestimmt schon aus dem Matheunterricht. Ihr wird mit jedem Durchlauf
eine Zahl zugewiesen. `range(10)` gibt an, dass mit jedem Durchlauf `i` um eins
erhöht werden soll, bis es `10` ist. Klingt wenig verständlich? Lass Dir einfach
mal ausgeben, was in `i` in jedem Durchlauf drin steckt.

{{ file(name="range-loop.py") }}

```python
for i in range(10):
    print("i lautet: ", i)
```

`range` kann noch mehr. Folgender Code beziehungsweise, dessen Ausgabe sollte
Dir das ganze zeigen:

{{ file(name="stepped-loop.py") }}

```python
for i in range(5, 25, 3):
    print("i lautet: ", i)
```

Du kannst also Startwert, Endwert und Schrittweite definieren. Diese Zahlen
können auch negativ sein. Spiel damit ein wenig rum und gib ein paar andere
Zahlen ein.

## Neue Dateien

Du wirst jetzt immer wieder neuen, kleineren oder größeren Code schreiben. Du
könntest einfach das bestehende löschen und die Datei wieder nutzen. Aber das
ist nur bei wirklich kleinen Schnipseln sinnvoll, da Du vielleicht wieder
nachschauen willst, was Du schon gemacht hast. Lege Dir also für neue Übungen
einfach eine neue Datei an. Dafür gehst Du auf den Projektordner, rechte
Maustaste, New, Python. Dann gibt Du einen Dateinamen an. Vermeide bei den
Dateinamen bitte Leerzeichen.

{{ figure(source="/images/kyo-7/8-1-Pycharm-6.png", alt="PyCharm – new file") }}

{{ figure(source="/images/kyo-7/8-1-Pycharm-7.png", alt="PyCharm – new file") }}

## Malen in Schleifen

Jetzt wollen wir noch eine Übung machen – lass uns einen Tannenbaum als
sogenannte ASCII-Art zeichnen. Wir gehen später noch genauer darauf ein, was
ASCII ist, aber im kurzen sind es die Buchstaben und Zeichen, die du so am
Computer siehst. Damit kann man kleine Kunstwerke schaffen. Versuche bitte, dass
folgendes ausgegeben wird:

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

Die Herausforderung ist es jetzt, mit möglichst wenig Code auszukommen. Wir
zeigen hier bewusst keine Musterlösung. Lasst uns gemeinsam im CoderDojo darauf
schauen, welche unterschiedlichen Wege Ihr so geht. Dabei lernt Ihr voneinander
eine Menge. Es ist immer gut, auch fremden Code zu sehen. Als Tip geben wir Dir
noch eine Zeile Code mit:

```python
print(3 * "*")
```

Falls du jetzt denkst, pah, so einen Baum, billo, kann ich überspringen: Mach
den mal mit höchstens zwei Print-Zeilen und du wirst sehen, da gibt es
versteckte Untiefen.

Und weil ASCII-Art so schön ist, „zeichne“ noch eine Sanduhr (knobel auch hier,
wie du mit möglichst wenig Code auskommst):

```
*****
 ***
  *
 ***
*****
```

## Benennung von Variablen

Muss das eigentlich ein „`i`“ sein? Nein. Erlaubt ist für Variablen eine Menge.
du kannst groß- und kleinschreiben, Zahlen reinnehmen, Unterstriche dürfen auch
drin sein. Python-Befehle dürfen nicht verwendet werden, da diese reserviert
sind (die lernst du jetzt mit der Zeit). Eine Variable darf jedoch nicht mit
einer Zahl anfangen. Dann gibt es ein paar Regeln, die zwar nicht zwingend sind,
bei denen du aber mit Zeit immer mehr sehen wirst, dass es total Sinn ergibt,
sich diese von Anfang an anzugewöhnen: Variablennamen sollten immer klein
anfangen, außer es handelt sich um eine Klasse. Was das ist, kommt ein ganzes
Stück später. Merke Dir jetzt nur – sie beginnen mit einem kleinen Buchstaben.
Für Variablennamen, die aus mehreren Wörtern bestehen, gibt es zwei
Möglichkeiten: `anzahl_Autos` – das nennt man `snake_Case` oder `anzahlAutos` –
das nennt man `CamelCase`. Bei Python wird `snake_Case` bevorzugt. Und Variablen
sollten einen zeigen, was sie beinhalten. Stell Dir vor, dass du Deinen Code
nach einem Monat wieder anschaust. Dann wäre es hilfreich, wenn du auf eine
Variable schaust und eine Ahnung davon hast, wofür sie ist. In den Code dafür
komplett neu reindenken zu müssen, sollte nicht der Fall sein müssen.

Müsste es dann nicht besser „Schrittzähler“ statt „`i`“ heißen? Jein. Bei
Schleifen und ähnlichen Konstruktionen gibt es quasi die Ausnahme von der Regel,
dass `i` (und bei mehreren ineinander greifenden Schleifen `j`, `k` etc.) üblich
sind. Das gilt nicht nur für Python. Die Variablen sollten gleichzeitig
möglichst kurz sein, damit man nicht so viel schreiben muss, aber lang genug,
dass man sie versteht. Das kommt also immer auf das konkrete Problem an. Wenn du
drei Koordinaten definieren willst, können `x`, `y` und `z` super Variablennamen
sein. Wenn du aber mehrere hast, hilft `x1` und `x2` vielleicht nicht mehr
weiter, weil du jedes Mal neu überlegen musst, wofür `x1` und `x2` stehen
sollte. Das ganze sind keine starren Regeln, du wirst sehen, dass wir gerade bei
kleinen Codestücken uns ebenso nicht sklavisch daran halte. Behalte sie jedoch
im Hinterkopf und du wirst mit der Zeit ein Gefühl dafür gewinnen, wie gute
Bezeichnungen aussehen. Das mag sich an dieser Stelle noch komisch anhören, ist
aber tatsächlich ein wichtiges Thema.

Und als letzte Regel – wähle die Namen möglichst in Englisch. Wenn Dein Englisch
noch nicht so gut ist, ist das am Anfang noch nicht so wichtig – aber eine gute
Gelegenheit, die eine oder andere Vokabel zu lernen. Und später wirst du in
größeren Gruppen coden. Dank des Internets passiert das nicht unbedingt nur mit
Menschen, die Deutsch sprechen. Deshalb ergibt es Sinn, gleich alles in Englisch
zu machen.

## Rechnen

Computer heißen nicht umsonst auch Rechner. Der Begriff kommt übrigens nur
scheinbar aus dem Englischen - er leitet sich vom lateinischen Verb computare
ab, was nichts anderes als rechnen heißt. Zurück zum Rechnen: Die „üblichen“
Rechenoperationen funktionieren hier natürlich auch. Das wollen wir uns mit ein
wenig Code anschauen. Lösch Deinen bereits geschriebenen Code, schreib den
Mustercode ab und schau Dir die Ausgabe an.

{{ file(name="addition.py") }}

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

Diese Klammern `(`, `)` kannst du auch verwenden. Wie beim Taschenrechner werden
„Kommazahlen“ mit einem Punkt ausgegeben. Spiele damit ein wenig rum und
probiere auch mal aus, ob die Regle Punkt-vor-Strich beachtet wird und wie mit
Klammern diese Regel „umgangen“ werden kann und wie es sich mit Potenzen
verhält.

Versuche bitte Folgendes auszurechnen:

$$
\left(\LARGE{ \frac{1}{2} - \frac{1}{4} + \frac{4+3}{8} }\right) * 2
$$

Wenn du richtig gerechnet hast, sollte 2.25 rauskommen. Wenn nicht, hast du
vielleicht ein falsches Rechenzeichen gesetzt oder die Klammern nicht richtig
positioniert.

Es gibt noch mehr Möglichkeiten, wie beispielsweise Wurzelziehen. Dafür muss
aber ein zusätzliches Modul eingebunden werden. Dazu kommen wir noch.

## Eingaben

Jetzt wollen wir den/die Benutzer:in Einbinden. Die Eingabe einer Benutzerin
weisen wir einfach einer Variable zu. Und wir sagen dem Benutzer noch, was er
oder sie hier eingeben soll. Das schaut so aus:

{{ file(name="request-number.py") }}

```python
userInput = input("Bitte gib eine Zahl ein: ")
```

Jetzt bist du wieder dran. Kombiniere das gelernte. Frage die Benutzer:in nach
zwei Zahlen, addiere sie und gib sie aus. Wenn das funktioniert, lege um den
Code eine For-Schleife herum, die dafür sorgt, dass der Code dreimal ausgeführt
wird. Teste ihn. Kommen beim zweiten Anlauf komische Ergebnisse heraus? Versuche
herauszubekommen, woran das liegt. Es hilft, sich bei jeder Zeile zu überlegen,
was diese macht und welche Variablen gerade welchen Wert haben (PyCharm wird Dir
später dabei helfen). Falls du hier zu keinem Ergebnis mehr kommst, lass uns in
einem virtuellen CoderDojo gemeinsam drauf schauen. Probiere auch mal aus, was
passiert, wenn man einen Buchstaben, statt eine Zahl eingibt. Wie man solche
Fehleingaben der Benutzenden verhindert, kommt etwas später.

## Bedingungen

Kommen wir zu einem neuen Element: Bedingungen. Es gibt recht häufig
Situationen, in denen etwas zu entscheiden ist. Dabei müssen etwas vergleichen.
Da ein Gleichheitszeichen bereits mit der Zuweisung für eine Variable belegt
ist, nimmt man einfach zwei Gleichheitszeichen. Das folgende Beispiel ist sehr
simpel, zeigt Dir aber, wie es funktioniert:

{{ file(name="equality-check.py") }}

```python
a = input("Bitte gib eine Zahl ein: ")
b = input("Bitte gib noch eine Zahl ein: ")
if a == b:
    print("a und b sind gleich")
else:
    print("a und b sind ungleich")
```

Es kommt häufiger vor, dass wir mehrere Vergleiche machen müssen. Wie das
ausschaut, zeigt das nächste Beispiel. Die Zeichen `<`, `>`, `<=` und `>=`
solltest du bereits aus der Schule kennen. Um zusagen, dass etwas ungleich ist,
schreibt man `!=`.

{{ file(name="number-comparison.py") }}

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

Wenn du das Programm so übertragen hast, wirst du feststellen, dass das gar
nicht geht. Woran liegt das? Python denkt, bei der Eingabe handele es sich um
einen Text und nicht um eine Zahl. Wir müssen ihm sagen, dass die Eingabe
wirklich eine Zahl ist; ein bißchen mehr zu dem Thema kommt ein paar Absätze
später. Ändere mal

```python
a = int(input("Bitte gib eine Zahl ein: "))
```

(und b entsprechend anpasst) und teste nochmal. Und als nächstes gib mal einen
Buchstaben statt einer Zahl ein. Puh. Das Programm ist also noch fehleranfällig;
Mittel dagegen lernst du noch am Ende des Gürtels.

Das Programm springt also in `if` und führt einen Vergleich durch. Ist der
erfolgreich, springt es gleich an das Ende dieser Bedingung. In die anderen
Codeteile schaut es gar nicht mehr herein. In den `else`-Teil kommt es nur dann
rein, wenn keiner der vorher aufgeführten Bedingungen wahr war. Alles klar
soweit? Dann hast du schon wirklich wesentliche Elemente gelernt, mit denen man
schon eine Menge machen kannst.

## Übungen

Auf geht es zu ein paar Übungen, um das neu erlernte zu festigen.

### Grundumsatz

Mit der sogenannten Harris-Benedict-Formel lässt sich (ungefähr) berechnen, wie
viel Kilokalorien ein Mensch pro Tag verbraucht. Bei Männern lautet diese:

$G = 66,47 + 13,7 \times m + 5 \times l - 6,8 \times t$

und bei Frauen:

$G = 655,1 + 9,6 \times m + 1,8 \times l - 4,7 \times t$

Denk bitte daran, dass der Dezimaltrenner bei Python (und quasi allen anderen
Programmiersprachen) der Punkt und nicht das Komma ist.

G ist dabei der Grundumsatz, m steht für das Körpergewicht in kg, l für die
Körpergröße in cm und t für das Alter in Jahren. Schreibe ein Programm, dass bei
den Nutzenden die notwendigen Informationen abfragt und dann den Grundumsatz
auswirft. Dieser wird in Kalorien, richtigerweise in Kilokalorien ausgegeben. Da
diese Einheit zwar gebräuchlich, aber veraltet ist, gib das Ergebnis auch in
Kilojoule aus. Eine Kalorie entspricht ungefähr 4,184 Joule. Wenn du damit ins
Stocken kommst, versuche erstmal Testwerte (Bsp. 80 kg, 170 cm und 25 Jahre) den
Variablen zuzuweisen und die Ergebnisse für Männer und Frauen beide ausgeben zu
lassen.

### Summen

Bitte frage den Benutzer nach einer Zahl. Addiere dann alle Zahlen von 1 bis zur
Zahl die die Benutzerin Dir angegeben hat und gib das Ergebnis aus. Bekommst du
beispielsweise eine 5 übergeben, dann soll die Rechnung $1+2+3+4+5$ lauten.

### Schach mit ASCII-Art

Gib ein Schachbrett ($8\times8$-Feld) aus. Dabei sollen die weißen Felder mit
einer 0 dargestellt werden und die schwarzen Felder mit einer `#`. Verwende
dafür For-Schleifen. Auch hier gilt – weniger Code ist mehr. Wenn du den Code
fertig hast und die Ausgabe stimmt – nimm Dir Zeit und überlege, ob es nicht
doch noch eine Lösung gibt, mit der du das Ergebnis mit einer einfacheren Lösung
hinbekommst. Und auch wenn Dir ein erster Lösungsansatz nicht einfällt – Geduld.
Grübeln und probieren gehört dazu.

## Variablentypen und Stringspielereien

Inzwischen hast du schon recht viel mit Variablen gearbeitet. Ist Dir dabei
aufgefallen, dass bei einem `a = input("Gib was ein: ")` und `a = 1` das erste
`a` für einen Text steht und das zweite für eine Zahl? In vielen
Programmiersprachen musst du bevor du eine Variable das erste Mal nutzen kann,
dem Rechner sagen, wie du diese Variable verwenden willst. Das brauchst du in
Python nicht. Das hat so seine Vor- und Nachteile. Steht eine Variable für einen
Text, verwendet man sie als sogenannten String, abgekürzt `str`. Bei natürlichen
Zahlen nennt man sie Integer, abgekürzt `int`. Mit `type(a)` kannst du Dir
ausgeben lassen, wie die Variable verwendet wird. Probiere mal folgenden Code
aus:

{{ file(name="print-types.py") }}

```python
a = "Das ist Text"
print(type(a))
a = 1
print(type(a))
```

Ja, und? Macht das einen Unterschied? Probiere mal folgenden Code aus:

{{ file(name="explore-types.py") }}

```python
number1 = 5
number2 = 3
text = "Quatsch"
print(type(number1))
print(type(number2))
print(type(text))
print(number1 + number2)
print(number1 + text)
```

Du kannst Python auch anweisen, dass Variablen einen bestimmten Typ annehmen.
Mit `int(a)` sorgst du dafür, dass a als Zahl behandelt wird und mit `str(a)`,
dass es als Text verwendet wird. Probiere Folgendes aus:

{{ file(name="explore-types.py") }}

```python
number1 = 5
number2 = 3
print(type(number1)
print(number1 + number2)
number1 = str(number1)
number2 = str(number2)
print(number1 + number2)
```

Und jetzt probieren wird es in die andere Richtung:

{{ file(name="explore-types.py") }}

```python
text1 = "alles"
text2 = " Quatsch"
print (text1 + text2)
```

Jetzt füge vor dem `print` noch ein `text1 = int(text1)` ein und führe den Code
aus. Da wird es „knallen“, will sagen, es gibt eine Fehlermeldung. Warum ist das
so? Weil du Zahlen nicht als Integer behandeln kannst. Mit einem

{{ file(name="compare-types.py") }}

```python
if isinstance(a, int):
```

kannst du feststellen, ob `a` eine Zahl ist. Oben hattest du einen einfachen
Taschenrechner gebaut. Der hat zwei Zahlen addiert, die die Benutzer:in
eingegeben hat. Alles ist gut, bis der Mensch ins Spiel kommt

-   denn wenn der Benutzer eine einen Buchstaben eingibt, kann er nicht mehr
    addieren, sondern setzt bestenfalls die beiden Abfragen zusammen. Du hast
    jetzt gelernt, warum das so ist. Jetzt schreibe das Programm so, das prüft,
    ob der Benutzer einen Integer eingegeben hat. Falls nicht, soll die Abfrage
    nochmal durchlaufen werden und der Hinweis erfolgen, dass nur ganze Zahlen
    erlaubt sind.

Wir wollen uns ein paar weitere Variablentypen anschauen:

{{ file(name="explore-types.py") }}

```python
a = 3.14
print(type(a))
a = True
print(type(a))
a = False
print(type(a))
```

Der erste Typ nennt sich Float (`float`) und ist für sogenannte
Gleitkommazahlen. Spätestens wenn du dividierst oder mit Prozenten arbeitest,
tauchen sie auf. Hier gibt es aber echte Untiefen, da Computer nicht so rechnen,
wie wir das erwarten. Auf das Thema werden wir noch mehrfach zurückkommen.

Interessant ist der zweite Typ. Der nennt sich Bool (`bool`) oder Boolean
(gesprochen Buhl bzw. Buhleo. Im Deutschen sog. boolesche Werte). Das ist ein
Gedenken an den amerikanischen Mathematiker George Boole, der im 19. Jahrhundert
lebte. Dieser Variablentyp kann nur zwischen Wahr und Falsch unterscheiden. Das
klingt banal, aber du wirst sehen, dass er sehr praktisch ist und häufig
Verwendung findet.

Jetzt wird es ein wenig abstrakt:\
Nein, das war noch nicht alles. Python kennt noch mehr Variablentypen. Aber an dieser
Stelle sollen uns die erst einmal genügen. Python versucht den Typ der Variable passend
für Dich umzuwandeln. Wenn du also einen String mit einem Integer addierst, würde
in vielen Sprachen ein Fehler ausgeworfen werden. Python wandelt automatisch den
Integer in einen String um – und wenn zwei Strings „addiert“ werden, dann hängt Python
sie einfach hintereinander. Die andere Richtung geht nicht unbedingt. Denn ein String
kann nur in einen Integer umgewandelt werden, wenn er nur aus Zahlen besteht. Fluch
und Segen hängen oft nahe bei einander: Auf der einen Seite kann Dir diese automatische
Umwandlung manch einen Programmabsturz ersparen. Auf der anderen Seite hast du Deinen
Code nicht richtig im Griff, sonst hättest du wohl eher ausdrücklich (wir sagen explizit)
die Variable umgewandelt. Will sagen – wenn `a = 1` und `b = "a"` ist, dann ist `a + b = 1a`.
Denn a wird zu einem String umgewandelt und beide werden kombiniert. Würde aber `b`
einmal eine Zahl sein, dann würde Python nicht umwandeln, sondern sie addieren. Puh.
Du müsstest also sicher sagen können, was in den Variablen drin steckt. Sicherer
ist es in diesem Fall zu schreiben `str(a) + str(b)`. Dann kannst du Dir sicher sein,
was jetzt passiert. Dieses Thema ist anfangs etwas sperrig, aber wir kommen da so
früh drauf, weil hier echte Untiefen lauern. Wenn du das Gefühl hast, du bekommst
„komische“ Ergebnisse oder der Code läuft einfach nicht, schau Dir immer auch an,
was die einzelnen Variablen gerade so machen. Wenn du Dir unsicher bist, definiere
sie explizit, also mit Variablentyp. Keine Sorge, wir werden das Thema noch üben
und immer wieder darauf zurückkommen. Wichtig ist an dieser Stelle, dass du schon
davon gehört hast und versucht, einen Blick dafür zu entwickeln, mit was für einem
Variablentyp du es gerade zu tun hast. Im Code kannst du immer mit `type(Variablenname)`
auswerfen lassen, wie Python ihn gerade behandelt.

{{ figure(source="/images/kyo-7/SolarpanelBp_a.jpeg", float="start", alt="Solarzellen
 werden mittels Lötbändchen zu Strängen,<br> den sogeannten Strings verbunden") }}

Die Überschrift hieß nicht nur Variablentypen, sondern auch Stringspielereien.
Wie man zwei Strings wie `"ot"` `"to"` kombiniert, hast du schon gesehen: aus
`"ot" + "to"` wird `"otto"`. Das ein String in zwei `""` eingefasst werden muss,
haben wir noch nicht explizit gesagt, ist Dir aber sicherlich schon aufgefallen.
du kannst auch das \`\`\` nehmen, also das Zeichen über der Raute. Beides geht,
du solltest es nur nicht in einem Code mischen. Aber was machst du nun, wenn du
in einem String sagen wolltest:`print("Und er sagt: "Hallo"")`. Nur zu, Hack das
ein. Soviel vorweg – das wird nichts. Denn Python liest das erste und weiß –
jetzt geht der String los. Dann kommt das zweite und er denkt, der String ist zu
Ende. Und dann kommt etwas, mit er echt nichts anfangen kann – `"Hallo"`.
Typisch menschlicher Kram halt. Hier gibt es zwei Wege.

Entweder du schreibst `print("Und er sagt: `Hallo`")` bzw. `print(`Und er sagt:
"Hallo"`)`. Oder du sagst ihm, dass das folgende Zeichen nicht in weiter
beachtet werden soll, dafür benutzen wir den sogenannten Backslash. Das ist der
Querstrich beim ß, den du mit AltGr ansteuerst. Du würdest also schreiben
`print("Und er sagt: \"Hallo\"")`. Python liest die ersten Anführungszeichen und
weiß, der String geht los. Bei den zweiten kommt erst der `\` – da sagt sich
Python -- nicht verarbeiten, stumpf ausgeben. Wir nennen diesen Vorgang escapen,
von entkommen oder aussteigen. Und nur damit du es gesehen hast – man kann auch
mit drei `"` oder ``` arbeiten, um einen String zu definieren. Das funktioniert
sogar über Zeilen hinweg.

{{ figure(source="/images/kyo-7/Python_string_int.jpg", float="end", alt="Dieses Meme solltest Du jetzt nachvollziehen können.") }}

Die Ausgabe von Variablen hast du schon gesehen, auch die Kombination mit Text.
Dafür gibt es einen einfachen und einen eleganten Weg. Der einfache Weg ist
`print("Inhalt von a: ", a)`. Der ist aber veraltet und wenig elegant. Besser
ist:

```python
inhalt = 1000
print(f"Der Inhalt ist: {inhalt}")
```

Probier mal aus! Falls Dir mal solche Konstrukte mit einem `%`-Zeichen über den
Weg laufen – das ist eine veraltete Methode, um Strings in Python zu
formatieren. Ein Vorteil der neuen Methode ist, dass das `f` gerüchteweise nicht
nur für `format`, sondern auch für fast steht. Der Code kann damit schneller
ausgeführt werden. Das funktioniert auch mit mehreren Variablen:

```python
vorname = "Guido"
nachname = "van Rossum"
print(f"Die Programmiersprache Python wurde von {vorname} {nachname} erfunden.")
```

Auch solche „Spielereien“ funktionieren:

```python
inhalt = 1000
print(f"Der Inhalt hat sich vermehrt - {inhalt + 100}")
```

Wir werden später noch einmal auf das Thema zurückkommen, weil sich so
beispielsweise auch etwas wie ein Datum passend formatieren lässt.

## Browser, E-Mail und Messenger

Welchen Browser benutzt du eigentlich? Safari, Chrome, Firefox oder Edge? Wir
werden uns später noch genauer ansehen, was passiert, wenn du mit einem Browser
auf eine Internetadresse zugreifst. An dieser Stelle aber schon einmal soviel –
du überträgst immer eine Menge Daten, die viel über Dich verraten. Klar könnte
man jetzt sage, egal, was soll schon jemand damit anfangen. Aber vielleicht
suchst du auch mal nach Dingen, die andere nichts angehen, besuchst Seiten, die
Unbekannte nichts angehen und vor allem nicht, dass sie Dir später vorgehalten
werden können. Dir muss immer klar sein – Daten die von Unternehmen gesammelt
werden können, bleiben im Zweifel dort und gehen dann, wann und auch einmal
verloren. Vielleicht interessiert Dich jetzt ein Mensch und später möchtest du
damit nicht später aufgezogen werden. Um das bildlicher zu machen – stell Dir
vor, Dein Eltern schauen Dir die ganze Zeit über die Schultern …

{{ figure(source="/images/kyo-7/children-593313_1280_s.jpg", float="end", alt="Den
richtigen Browser gefunden!") }}

Es gibt Browser, die besonders gerne Daten sammeln und manche auch nach Hause
schicken. Ebenso gibt es Browser, die anderen Seiten es leichter oder schwerer
machen, dies zu erkennen, wer du bist. Aktuell empfehlen wir Dir Brave zu
benutzen, da er recht datensparsam ist. Firefox ist auch ganz okay. Abraten
würden wir Dir klar von Edge und Google Chrome. Brave baut auf Chromium, der
Open-Source Variante von Google Chrome, auf, ist aber eben
datenschutzfreundlicher. Diese Empfehlung gilt jetzt – Software ändert sich. Da
gilt es dranzubleiben.

{{ figure(source="/images/kyo-7/Brave.png", float="end", alt="Brave") }}

E-Mail ist ein ganz großes Thema. Deutlich später wollen wir ebenfalls einmal
dran zu machen zu schauen, wie das eigentlich so funktioniert. Das ist aber ein
eigenes und größeres Kapitel. Wir gehen davon aus, dass du keinen eigenen
E-Mail-Server betreust, sondern noch keine E-Mail-Adresse hast oder eine bei den
bekannten Anbietern. Hier willigst du teilweise sogar ausdrücklich ein, dass sie
Deine E-Mails mitlesen dürfen, um Werbung für Dich zusammenzustellen. Was soll
da schon schiefgehen … vorab – bevor du Dir irgendwo ein Konto anlegst und noch
minderjährig bist, sprich bitte mit Deinen Eltern darüber! E-Mails zu
unterhalten kostet Geld. Entweder das wird über Werbung finanziert (wie bei
Google, GMX und anderen) oder du zahlst dafür. Dienste wie posteo bieten Dir
preiswerte E-Mails an, bei denen viel dafür spricht, dass sie nicht mitlesen
(weil sie ihr Geld eben anders verdienen). Vielleicht sind Deine Eltern bereit,
Dir das zu bezahlen. Oder sie schenken Dir eine Fördermitgliedschaft bei
cyber4EDU e. V. und mit dem Mitgliedsbeitrag wird die Arbeit für freie,
datenschutzkonforme Bildung gefördert. Da bekommst du auch eine E-Mail-Adresse.
Der einzige kostenlose Anbieter, den wir derzeit empfehlen können ist
[disroot.org](https://disroot.org). Der Speicherplatz ist begrenzt, sollte aber
für die meisten Sachen ausreichen. Neben dem Aspekt des Datenschutzes gibt es
noch einen anderen, der nicht vergessen werden will: Um so mehr du
programmierst, um so mehr wirst du Dich mit anderen austauschen – und da sehen
andere immer wieder auch Deine E-Mail-Adresse. Mit einer Adresse von Hotmail
oder ähnlichen Anbietern läufst du rum wie mit einer Clownsnase und rosa
Plüschsocken. Das kannst du besser (Plüschsocken sind natürlich eigentlich
okay).

Und als Letztes zu den Messengern. Du hast bestimmt schon gehört, dass es da
gute und weniger gute gibt. Fangen wir gleich mit den Schlusslichtern an –
WhatsApp oder SMS. Schmeiß das am besten gleich von Deinem Handy runter. Und
nicht nur löschen – du musst Dein Konto vorher aktivieren, damit die Deine Daten
nicht für alle Zeiten behalten. Bei WhatsApp sendest du jede Telefonnummer in
Deinen Kontakten zu WhatsApp und damit zu Facebook – selbst, wenn deren
Inhaberinnen kein WhatsApp haben. Und du hast die betreffenden Menschen bestimmt
vorher nicht alle gefragt. Das ist nicht okay. Bring lieber Deine Freundinnen
dazu, vernünftige Messenger zu benutzen. Ja, Telegram fällt da auch aus der
Liste raus. Signal will leider zur Identifizierung eine Telefonnummer, aber
davon würden wir zum indest nicht abraten. Auch Threema ist okay. Du wirst
später lernen, dass dezentrale Strukturen meist besser sind, als zentrale. Bei
Signal braucht man unbedingt deren Server. Das geht besser. Tauglich sind
hierfür Konzepte wie von Jabber, XMPP, RocketChat und Matrix. Wir empfehlen an
dieser Stelle ausdrücklich Matrix – vor allem, weil du uns da auch finden wirst.
Das ist also kein Statement gegen RocketChat oder Jabber. Bei diesen Diensten
kann man sich seinen eigenen Server aufsetzen. Und bei den Servern kann man dann
wählen, ob man unter sich bleiben möchte (also nur die Nutzer\*innen des Servers
können unter einander chatten) oder ob man darüber hinaus mit anderen
kommunizieren können, will. Das nennt man bei Matrix föderiert sein. Sprich mit
Deinen Eltern -- und wenn sie nichts dagegen haben, klick Dir bei beispielsweise
bei matrix.cyber4edu.org einen kostenlosen Account. Für Matrix gibt es
verschiedenste Clients, die auf dem PC, im Browser oder auf dem Handy laufen.
Der bekannteste nennt sich Element. Lade Dir den runter und richte ihn Dir ein.
Uns findest du unter
[@coderdojo:matrix.cyber4edu.org](https://matrix.to/#/@coderdojo:chat.cyber4edu.org).

{{ figure(source="/images/kyo-7/Cyber4EDU_sticker.png", float="end", alt="cyber4EDU Logo") }}

Okay, mit dem richtigen Browser, einer vernünftigen E-Mail-Adresse und dem
passenden Messenger ausgestattet bist du von den Noobs erfolgreich einen ganzen
Schritt hin zu den Nerds gegangen. Du fängst langsam an, Deinen Jogginganzug
gegen einen Gi (das sind diese Anzüge für den japanischen Kampfsport)
einzutauschen. Das schaut gleich viel besser aus!

## Schleifen binden

Wir wollen zum Thema Schleifen zurückkehren und lernen, wie wir die eleganter um
Dinge herum binden können.

### Schleifen steuern

Zum Steuern von Schleifen lernen wir zwei neue Befehle kennen:

-   `break`

-   `continue`

Diese werden vor allem interessant, wenn du in einer Schleife eine Bedingung
gesetzt hast, also eine if-else-Konstruktion. Bei `break` wird die Schleife
abgebrochen – egal wie viel Schleifendurchläufe eigentlich noch geplant gewesen
wären.

Mit `continue` wird der Schleifendurchlauf ab dieser Stelle übersprungen und es
geht mit dem nächsten Durchlauf weiter. Wir zeigen Dir ein Beispiel:

{{ file(name="control-for-loop.py") }}

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

Neben der for-Schleife kennt Python noch einen Schleifentyp – die
`while`-Schleife. Diese läuft so lange, bis die Bedingung im Kopfteil erfüllt
ist:

{{ file(name="control-while-loop.py") }}

```python
i = 0
while i != 10:
    i = int(input("Rate die Abbruchbedingung: "))
print("Erfolgreich geraten!")

```

Okay, das Beispiel ist jetzt nicht der Bringer. Aber du verstehst hoffentlich,
worum es geht. Eine Vorschleife läuft grundsätzlich ihr Programm stupide ab,
während die While-Schleife bei jedem Durchlauf die Bedingung des Kopfteils
prüft. Wenn du also vor der Schleife schon weißt, wie oft sie durchlaufen werden
soll, dann ist die For-Schleife meist richtig. Wenn du das nicht weißt, dann die
While-Schleife. Mit der While-Schleife kann man wunderbar eine endlos-Schleife
bauen:

{{ file(name="inifint-while-loop.py") }}

```python
while True:
    print("Das so lange weiter, wie die Bedingung wahr ist und sie ist immer wahr.")
```

Hier kannst du entweder mit `Strg+c` bzw. `Control+c` den Ausstieg finden. Das
ist aber nicht gerade elegant. Mit `break` kannst du sauber aus der Schleife
aussteigen. Wenn du also solche endlos-Scheifen verwendest, musst du Dir immer
überlegen, wie du da wieder rauskommst. Wenn wir mit einer grafischen Oberfläche
arbeiten, wird das unser Standardeinstieg werden. Ansonsten kannst du super für
so kleine Tools benutzen. Hole Dir nochmal das Programm oben für die
Konfektionsgrößen hervor. Baue das Programm so um, dass der Benutzer immer
wieder die Möglichkeit bekommt, die Größen neu ausrechnen zu lassen, bis er
`quit` schreibt.

## Debugger

> "Außerdem müssen wir offen sagen: [...] Programmieren lernen tut weh, weil
> jeder daran scheitert, scheitert, scheitert - bis der Code funktioniert."
>
> [Prof. Dr. Doris Aschenbrenner](https://www.golem.de/news/informatik-professorin-im-portraet-programmieren-lernen-tut-weh-2110-160267.html)
> Professorin für Maschinenbau / Entwicklung: Design und Simulation an der
> Hochschule Aalen

Wenn du bis hierin gekommen bist, wirst du es schon erlebt haben - der Code will
nicht laufen. Meist verbringt man mit der Fehlersuche mindestens soviel Zeit wie
mit dem eigentlichen Schreiben. Programmieren - nicht nur lernen - tut also
immer auch ein bisschen weh. Es lohnt sich trotzdem, weil es ein großartiges
Gefühl ist, wenn es dann doch irgendwann läuft. Es gibt Werkzeuge, mit denen man
aber den Schmerz minimieren kann. Bug ist Dir sicherlich ein Begriff. Das steht
für einen Fehler. Fehler beseitigen nennt man debuggen und Programme, die einem
dabei helfen, debugger. Wie setzt du in PyCharm einen Debugger ein?

Nimm Dir mal das obigen Programm control-while-loop.py. Statt Run startest du es
jetzt mal in PyCharm unter dem Menüpunkt Run mit Debug. Da passiert jetzt
erstmal nicht viel. Jetzt legst du dir vorher einen Stoppunkt fest, am besten
auf Zeile 3, also die mit dem input. Jetzt startetst du nochmal mit debug.
Huch - jetzt zeigt er dir an, welchen Wert i beim Auftreffen des Stopppunktes
hat. Das kann super praktisch sein, weil du so sehen kannst, wie sich Variablen
verändern. Du kannst mit F9 oder in dem du diesen weiterauführen lassen.
Versuche bei den Programmen, die du ab jetzt schreibst, wenn du festhängst, mal
mit diesen Stopppunkten zu spielen. Es lohnt sich, für den Debugger ein Gefühl
zu entwickeln. Du wirst sehen, dass er ein mächtiges Werkzeug sein kann, um
Fehler zu finden. Und wenn bei gemeinsamen Sitzungen kommt - wirf mal den
Debugger an und setze dort mal einen Stopppunkt - weißt du jetzt schon, was
gemeint ist.

## Münzwechsler

Das nächste Programm soll eine Grundlage für einen Münzwechsler darstellen. Die
Benutzerin gibt einen Geldbetrag von 1 bis 99 Cent ein. Der eingegebene Betrag
soll dann in den Münzen mit 1, 2, 3, 10, 20 und 50 Cent ausgegeben werden - aber
bitte so, dass möglichst wenig Münzen benötigt werden.

## Löten

> And if smells like chicken, it's the wrong side.

Nachdem wir uns eine ganze Zeit mit Software beschäftigt haben, machen wir eine
Runde Hardware. Am einfachsten dürfte das für Dich sein, wenn du Dich dafür in
einen (Deinem?) lokalen Hackerspace begibst. In Berlin bietet sich der
familienfreundliche [xHain](https://x-hain.de) an. Wir setzen wie beim
Programmieren beim Löten keinerlei Vorkenntnisse voraus, da die Teilnehmenden
unterschiedlich alt sind und dem Thema in der Schule unterschiedliches Gewicht
beigemessen wird. Es kann also gut sein, dass du gerade am Anfang gähnst. Keine
Sorge, wird steigern das Stück für Stück. Aber wir wollen alle mitnehmen.

{{ figure(source="/images/kyo-7/derMicha_Soldering_th.jpg", alt="derMicha bei einem Löt-Workshop", float="start") }}

Zunächst solltest du grundlegend üben, wie man mit einem Lötkolben umgeht. Wenn
du noch keine Erfahrung hast, lass Dir ein kleines Stück Lochraster geben und
ein paar alte Bauteile und versuche die, ein- und auszulöten. Wir können hier
nur bedingt etwas zu erklären, da Dir am besten eine Mentorin kurz zeigt, wie es
geht. Der Rest ist handwerkliche Fähigkeit, dass muss man also einfach ein
bißchen selber gemacht haben.

{{ figure(source="/images/kyo-7/Lochraster_loeten.jpg", alt="Lötübungen am Lochraster") }}

Wenn du damit klar kommst, dann kommt als nächstes, eine LED zum Leuchten zu
bringen. Lass Dir dafür bitte die passenden Bauteile geben. Für die Mentoren -
benötigt werden:

-   Lochraster,
-   Draht,
-   5mm LED rot,
-   220 Ω Widerstand und
-   4,5 V-Batterieadapter.

{{ figure(source="/images/kyo-7/Leiterbahnen_ziehen.jpg", alt="Leiterbahnen ziehen will geübt sein.") }}

Strom braucht zum Fließen immer einen Stromkreis. Manche Bauelemente können
Strom nur durch eine Richtung durchlassen, so wie die LED. Wenn die LED also mal
nicht leuchtet - probiere sie mal zu drehen. Die mag es aber nicht wirklich,
falsch herum angeschlossen zu werden. Deshalb haben die ein langes und ein
kurzes Beinchen. Das lange nennt man Anode und kommt in Richtung Pluspol (die
kurze Seite heißt Kathode; Eselsbrücke _k_ wie _K_ athode). LEDs sind
empfindlich. Wir arbeiten gerne mit einem Batterieadapter, der drei 1,5
Volt-Batterien zu 4,5 Volt (V) verbindet. Bei 4,5 V geht den meisten LEDs nur
kurz ein Licht auf. Danach sind sie durchgebrannt. Das ist schade um das
Bauteil, denn danach kann es nur noch in den Müll. Mit Hilfe eines Widerstandes
kann man diese Spannung reduzieren. Mit dem Vergleich zu einem Wasserkreislauf
kann man gut verstehen, was da passiert. Die Batterie ist dort ein Motor, der
das Wasser antreibt. Die Röhren entsprechen den Stromleitungen. Und ein
Widerstand ist einfach eine Röhre, die dünner wird. Da kann nicht so viel Wasser
durchfließen, wie durch eine große Röhre. Stell Dir jetzt vor, die LED besteht
aus einer dünnen Glasröhre. Drückt man da zuviel Wasser durch, platzt es. Das
verhindern wir mit dem Widerstand. Hier eine kleine Zeichnung dazu: (Zeichnung
ist in Arbeit)

<Platzhalter Wasserkreislauf>

Solche Zeichnungen stellt man technisch mit sogenannten Schaltplänen dar. Dabei
haben bestimmte Bauelemente fest definierte Zeichen. Die kleine Schaltung, die
du Dir zurecht gelötet hast, schaut dann so aus:

{{ figure(source="/images/kyo-7/LED-Schaltung.png", alt="LED-Schaltung") }}

Vergleiche das mal mit Deiner Schaltung, wenn du fertig bist. Widerstände gibt
es viele. Die Stärke wird gemessen in der Einheit Ω (gesprochen Ohm). Wenn man
das Zeichen Ω nicht hat, kürzt man es mit R (das englische Wort für Widerstand
ist ´resistor´) ab.

{{ figure(source="/images/kyo-7/Widerstand.jpg", alt="typischer Widerstand") }}

Wieviel Ohm muss den unser Widerstand nun haben? Da wird es jetzt kurz einmal
theoretisch, denn das kann man mit einer kleinen Formel selbst ausrechnen:

$$
Vorwiderstand\  R {_v} = \frac{Spannung\ am\ Vorwiderstand\ U{_R}}{Strom\ I}
$$

Äh - wie meinen? Das hört sich erstmal kompliziert an. Wer es mit Zettel und
Stift mal selbst nachrechnet wird feststellen, dass das kein Hexenwerk ist. Und
am Ende kannst du daraus ein kleines Programm machen. Dann geht das beim
nächsten mal ganz fix. Wir wollen den Widerstand vor der LED rauskriegen. Das
ist der Vorwiderstand. Zunächst müssen wir wissen, wieviel Strom wir da
eigentlich vernichten wollen. Unsere Batterie liefert 4,5 V. Jetzt müssen wir
wissen, wie hoch die Spannung in der LED sein darf. Wir arbeiten hier mit einer
kleinen (5mmm), roten LED und die haben es meist so bei 1,6 V bis 2 V kuschelig.
Diesen Wert liefern die Hersteller in ihren Spezifikationen mit. Es gibt also zu
jedem Bauteil so ein Datenblatt. Aus Vereinfachungsgründen sagen wir die
notwendigen Werte aber an.

{{ figure(source="/images/kyo-7/LED-falsch.jpg", alt="So sollte eine LED nicht im Lochraster festgemacht werden...") }}

Vereinfacht können wir jetzt sagen - 4,5 V Batteriespannung - 2 V
will-die-LED-haben = 1,5 V zu vernichtende Spannung. Jetzt brauchen wir noch den
Nennstrom der LED. Aus das stünde im Datenblattn, gehe jetzt bitte einfach von
0,025 Ampere (A) aus. Wir dividieren die zu vernichtende Spannung (1,5 V) durch
den Nennstrom (0,025 A). Taschenrechner nehmen und nachrechnen. Da kommen 160 Ω
raus. Wenn du dann an den Materialschränken im xHain oder einem anderen
Makerspace schaust, wirst du sehen, dass es einen 160 Ω - Widerstand nicht gibt.
Man nimmt dann einfach den nächst größeren - denn mehr Widerstand heißt, da
fließt weniger Strom. Dann ist die LED vielleicht etwas dunkler, aber sie
überlebt. Der nächst größere Widerstand sind 220 Ω. Die bunten Ringe darauf
erklären wir Dir beim nächsten Kyo. Damit du sicher bist, dass du wirklich den
richtigen genommen hast - lass Dir mal ein Messgerät zeigen und wie man damit
umgeht. Da werden nicht genau 220 Ω angezeigt werden, aber so ungefähr 200 bis
240 Ω. Jetzt weißt du, wie man so einen Widerstand aussucht. Okay, also brauchst
du zwei Daten für die LED und den Strom, den Dir jeweils die Batterie liefert.
Daraus mach doch mal gleich in ein Programm. Mit der Zeit kannst du da noch
andere Werte für andere LEDs reinpacken. Jedenfalls brauchst du zukünftig dafür
keinen Taschenrechner mehr. Alles klar soweit? Wenn nicht, nicht schlimm. Deine
Mentor:innen vor Ort helfen Dir da gerne.

{{ figure(source="/images/kyo-7/LED-richtig.jpg", alt="So schaut das richtig aus mit der LED!") }}

Okay, wenn Deine LED leuchtet, soll es an dieser Stelle erstmal mit dem Kapitel
löten gewesen sein. Beim nächsten Kyo wird ein Controller, quasi ein kleiner
Computer, zusammengelötet. Einen Kyo später kümmern wir uns dann auch um die
Programmierung desselben.

## Listen

Als Erstes eine Fingerübung: Wir wollen das „große“ Einmaleins üben – also die
Multiplikationsreihen von $1\times 1$ bis $100\times 100$. Dafür sollen zwei
zufällige Zahlen ausgegeben werden und die Benutzerin gibt das Ergebnis ein. Wir
prüfen dann, ob es richtig oder falsch ist und geben das Ergebnis zurück. Für
zufällige Zahlen gibt es direkt keinen Befehl in Python. Wir müssten also
erstmal etwas programmieren, dass zufällige Zahlen auswirft. „Künstlich“
zufällige Zahlen ausgeben zu lassen, ist gar nicht einfach. Dankenswerterweise
haben sich andere bereits die Arbeit gemacht und wir können deren Code nutzen.
Man spricht hier von Bibliotheken beziehungsweise Libraries, die du in Deinen
Code einbindest. In Python werden diese Bibliotheken auch Module genannt. Ein
solch es Modul stellt Dir quasi neue, weitere Befehle zur Verfügung. Ein Prinzip
von Python ist es, dass Dir die notwendigen Bibliotheken mitgeliefert werden
(wie man noch weitere findet und einbindet – du weißt, später). Das Modul für
Zufallszahlen heißt `random` (engl. für _Zufall_). Es gibt zwei Möglichkeiten es
einzubinden – entweder komplett oder nur den Befehl, den du wirklich brauchst.
Das passiert ganz einfach:

{{ file(name="import-random.py") }}

```python
import random
```

Hier laden wir nur die Funktion `randrange` aus dem Modul `random`:

{{ file(name="import-randrange.py") }}

```python
from random import randrange
```

Warum muss das sein und es wird nicht einfach alles eingebunden, was Python so
mitliefert? Hinter jeder so einer Bibliothek stecken viele, viele Zeilen Code.
Um so mehr du davon einbindest, um so langsamer wird Dein Programm und um so
mehr Speicher braucht es. Das merkst du nicht, wenn du etwas wie random dazu
lädst. Wenn du aber 50 solcher Bibliotheken laden würdest, wäre das schon
weniger gut. Deswegen nutzen wir `import` immer nur für die Teile, die wir
wirklich brauchen. Und du ahnst es vielleicht schon – deswegen ist der Weg über
`from <Modul> import <Funktion>` der deutlich vorzugswürdigere.

Zurück zu unserer Aufgabe. Wie erstellen wir jetzt eine Zufallszahl? Wir wollen,
dass `count1` eine Zufallszahl von 1 bis 100 zugewiesen bekommt. Und damit wir
sehen, dass das geht, lassen wir 20 solcher Zahlen ausgeben.

{{ file(name="random-number-generation.py") }}

```python
from random import randrange

for i in range(20):
    count1 = randrange(1, 100)
    print(count1)
```

Jetzt solltest du alles haben für unseren Kopfrechentrainer: Weise `count1` eine
Zufallszahl von 1 bis 100 zu, ebenso `count2`. Sag das dem Benutzer an und frage
die Benutzerin nach dem Ergebnis. Vergleiche es. Wenn das stimmt, gibt es eine
neue Aufgabe und wenn es falsch ist, sage das und gib erneut die Möglichkeit,
ein Ergebnis einzugeben. Diese Gelegenheit erhalten Benutzende so lange, bis das
Ergebnis passt (wenn du willst, kann du sie oder ihn nach drei Fehlversuchen
auch „erlösen“ und die richtige Lösung verraten). Dann mal ran an die Tasten.

Das Programm läuft. Aber jetzt wollen wir es um einen Highscore erweitern. Dafür
muss am Anfang die Benutzerin nach dem Namen gefragt werden. Das Spiel läuft so
lange, bis als Antwort „fertig“ eingegeben wird. Für die Wertung wollen wir ein
Verhältnis ausrechnen: Merke Dir, wie viele Aufgaben der Benutzende gemacht hat
und wie oft Fehler auftraten. Wenn die Benutzerin „fertig“ eingibt, wirfst Du
dieses Ergebnis als Wertung aus. Wenn du das geschafft hast, kommen wir zum
nächsten Teil. Jetzt könnten wir uns diese Ergebnisse in einer Liste auf einem
Blatt aufschreiben – oder …wir verwenden den Variablentyp Liste. Der wird über
zwei eckige Klammern definiert. Da können wir neue Daten aufstapeln, sie abrufen
und löschen. Entweder wird eine Liste gleich mit Werten gefüllt. Dann sähe das
so aus:

{{ file(name="greater-list.py") }}

```python
greatList = ["Antonia", "Johannes", "Lukasz"]
```

Mit `print(greatList)` können wir sie ausgeben. Die Datentypen innerhalb einer
Liste können alle möglichen sein, auch gemischt. Eine Liste kann also auch so
aussehen:

{{ file(name="greater-list.py") }}

```python
greaterList = ["Antonio", 24, "Johannes"]
```

Wenn wir ein bestimmtes Element ausgeben wollen, dass schreiben wir:

{{ file(name="greater-list.py") }}

```python
greaterList = ["Antonia", "Johannes", "Lukasz"]
print(greaterList[1])
```

Wait what? Warum steht da Johannes und nicht Antonia? Weil die Zählung bei
Listen immer bei null beginnt. Und `greaterList[1]` ist damit das zweite
Element. In Programmiersprachen wird meist mit null beim Zählen angefangen. Es
soll deshalb schon Menschen gegeben haben, die aus Gewohnheit mit dem Aufzug in
den fünften Stock wollten, und dann die Taste „4“ gedrückt haben.

Wie fügen wir jetzt ein neues Element an:

{{ file(name="greater-list.py") }}

```python
greaterList = ["Antonia", "Johannes", "Lukasz"]
greaterList.append("Cem")
print(greaterList)
```

Für Listen gibt es noch eine ganze Reihe weitere Methoden. Hier soll uns das
erstmal genügen. Jetzt haben wir mit `print(greaterList)` diese Liste
ausgegeben. Aber was, wenn wir nicht die Liste auf einmal heraushauen wollen,
sondern jedes Element einzeln. Stell Dir vor, in einer Liste stecken Zahlen.
Aber bei der Ausgabe soll zu jedem Listenelement noch 100 dazu addiert werden.
Versuche mal selbst, wie du es lösen würdest. Wenn du wissen willst, wie viele
Elemente eine Liste enthält, dann geht das mit `anzahl = len(greaterList)`.

Wenn du nicht geschmult hast, wird Dein Ergebnis vermutlich so oder ähnlich
ausschauen:

{{ file(name="range-iteration.py") }}

```python
list_of_Numbers = [52, 235, 235, 93]
length = len(list_of_Numbers)
for i in range(length):
    print(list_of_Numbers[i])
```

Möglich wäre auch:

{{ file(name="inplace-range-iteration.py") }}

```python
list_of_Numbers = [52, 235, 235, 93]
for i in range(len(list_of_Numbers)):
    print(list_of_Numbers[i]
```

Eingefleischten Pythonfans brennen jetzt die Augen (deshalb vergiss die beiden
obigen Beispiele ganz schnell wieder). Der richtige Weg hierfür sind sogenannte
List Comprehension. Das schaut so aus:

{{ file(name="comprehension-print.py") }}

```python
[print(i) for i in [52, 235, 235, 93]]
```

Jetzt wollten wir aber, dass die Zahl um 100 erhöht wird, also:

{{ file(name="comprehension-incremention.py") }}

```python
list_of_Numbers = [52, 235, 235, 93]
[print(i + 100) for i in list_of_Numbers]
```

Jetzt solltest du es alleine hinbekommen, den Highscore noch dazu zu entwickeln.
Das Ergebnis – also wie viele falsche im Verhältnis zu der Anzahl der Versuche
war – speicherst du einfach mit zum Namen. Wandel das Ergebnis also als String
um und kombiniere es zum Namen. Einen Hinweis noch: ein

```python
listenname.append("Element dazu hinzugefügt wird")
```

setzt eine bereits bestehende Liste voraus. Deshalb musst du die ganz am Anfang
erschaffen; wir sagen, initialisieren. Dafür schreibst du einfach
`highscore = []`. Versuche die Aufgabe stückchenweise abzuarbeiten. Wenn du
nicht zu Rande kommst – gar nicht schlimm. Nicht verzweifeln, sondern lass uns
bei einer Videositzung gemeinsam drüber sprechen. Wir stupsen Dich dann an dem
Punkt in die richtige Richtung, an dem du stecken bleibst oder holen Dich aus
der falschen Abbiegung zurück auf den richtigen Weg. Wenn du da Dein Problem
nicht vor der Gruppe besprechen magst (was an sich besser ist, weil alle dann
was lernen), dann gehen wir mit Dir gerne auch einen Breakoutroom.

## Knobeln

Damit das Hirn schon geschmeidig bleibt, lohnt es sich, es regelmäßig zu kneten.
Versuche dich mal an der folgenden Aufgabe aus dem
[Eulerprojekt](https://projecteuler.net/problem=1):

Die möglichen Vielfachen von 3 _oder_ 5 aller natürlichen Zahlen bis 10 sind 3,
5, 6 und 9. Wenn du diese Zahlen addierst, kommt 23 raus. Wie ist die Summe
aller Vielfachen bis 1000?

Wenn du das Ergebnis hast, kannst du im
[Eulerprojekt](https://projecteuler.net/problem=1) prüfen, ob es richtig ist.
Falls du dich dort nicht registrieren magst, kannst du uns auch fragen. Wie
immer - wenn du auf der Stelle trittst, lass uns drüber sprechen, damit wir dich
unterstüzen können, die Richtung zu finden.

## Kultur

In der Einführung haben wir das versucht schon anklingen zu lassen -- uns geht
es um mehr, als nur darum zu lernen, ein paar Zeilen Code in den Rechner zu
hämmern. Uns geht es auch um ein Stück Kultur. Deshalb wollen wir Dir auch ein
paar Bücher, Filme, Podcasts, Veranstaltungen und mehr ans Herz legen. Wer gut
coden will, muss auch kreativ sein. Dazu gehört es mal raus an die frische Luft
zu kommen und Sport zu machen. Das steigert die (auch geistige!)
Leistungsfähigkeit enorm und sorgt für mehr Zufriedenheit. Und wer konzentriert
vor dem Rechner sitzt, muss gelegentlich mal frische Luft an die grauen Zellen
lassen. An dieser Stelle wollen wir Dir ein Buch empfehlen: „Per Anhalter durch
die Galaxis“ bzw. im Original „The Hitchhiker’s Guide to the Galaxy“ von Douglas
Adams. Es handelt sich um eine Trilogie in fünf Bänden. Wenn Dein Englisch gut
genug ist, lies es im Original. Sonst halt in Deutsch. Zumindest der erste Band
ist Pflichtlektüre, den Rest willst du aber auch gelesen haben. Viele Witze
unter Nerds lassen sich ohne diese Literatur nicht verstehen. Falls du schon
alle fünf Bände kennen solltest und im Original gelesen hast, solltest du Dir in
einer Bibliothek die BBC-Fernsehserie besorgen.

{{ figure(source="/images/kyo-7/Matrix-logo.png", float="end", alt="Matrix") }}

Unsere Filmempfehlung zum 8. Kyo sind die drei Teile von Matrix. Auch hier gilt
– Filme sind wie Bücher eine gute Gelegenheit, sein Englisch zu trainieren. Wenn
Dir das bei Filmen noch schwerfällt, probiere es mit englischer Tonspur und
englischen Untertiteln. Oder schau sie erst auf Deutsch und dann nochmal (mit
englischen) Untertiteln auf Englisch.

## Calc like an Egyptian

Kennst Du das Lied „Walk Like an Egyptian“ von The Bangles? Okay, die Videos
sind wirklich schwer auszuhalten. Aber die Musik ist immer noch gut. Wenn du es
nicht kennst, such Dir das mal raus und höre es Dir. Wir wollen aber jetzt
weniger Musik hören wie die Ägypter, sondern rechnen wie diese. Die Ägypter
hatten wie die Römer kein Stellenwertzahlensystem. Stellenwas? Also, bei uns ist
klar, dass die erste Stelle die „Einer“, die zweite die „Zehner“, die dritte
Stelle die „Hunderter“ sind. Wir steigen jetzt nicht weiter auf die Zahlen ein,
sondern schauen uns im Vergleich die römischen Zahlen an, die du bestimmt
kennst. Das ist eine III eine 3, also die dritte Stelle gehört noch zum Einer.
Bei XXX ist das aber nicht so. Der große Nachteil ist, dass schriftliches
Multiplizieren und Dividieren damit nicht möglich ist. Trotzdem haben die
Ägypter sich etwas schlaues überlegt, wie das gehen könnte. Weil andere das
schon sehr gut aufgeschrieben haben, wollen wir das hier nicht wiederholen,
sondern Dich bitten, auf
[diese Seite](http://www.spasslernen.de/geschichte/ges2.htm) zu gehen, Dir ein
Blatt Papier zu nehmen und nachzuvollziehen, wie damals schriftlich
Multipliziert wurde. Wenn Dir das klar ist, dann versuche das bitte in einen
Code zu packen - aber dabei die gleichen Beschränkungen zu verwenden, unter
denen die Ägypter das realisiert haben. Erlaubt ist also nur addieren und ja,
ein klein bißchen subtrahieren wirst du wohl brauchen. Du kannst bereits alles,
um die Aufgabe zu bewältigen, aber da muss man schon unter Umständen etwas
knobeln. Also wirft nicht vorschnell das Handtuch, das grübeln, gehört dazu. Das
massiert Dein Hirn und hält es schön geschmeidig. Es gibt viele Wege, die hier
nach Kairo führen. Bringt Deinen Code also an einem Donnerstag mit und zeig mal,
wie du es gelöst hast. Vielleicht haben es andere genau so gemacht, vielleicht
lernst du neue Wege kennen. Und falls du es nicht hinbekommst - das ist nicht
schlimm und sollte Dir auf keinen Fall peinlich oder so sein. Am meisten lernt
man aus Fehlern, dazu gehört auch, mal stecken zu bleiben. Oft sind es keine
Steine auf dem Weg, der einen daran hindert, das Ziel zu erreichen, sondern nur
Sand zwischenn den Zehen, der reibt. Lass uns gemeinsam darauf schauen, wo du
stehen geblieben bist, und wir helfen Dir, die richtige Richtung zu finden. Sei
Dir sicher, du wärst nicht der oder die erste. Und falls Dir das sehr gut von
der Hand ging, dann stürze Dich gleich noch auf die Multiplikation. Das oder die
Programme sollten so sein, dass zwei Zahlen eingegeben werden können und das
Programm rechnet das Ergebnis aus.

## Funktionen

So langsam wird Dein Code größer. Das verlangt nach besserer Strukturierung. Und
du wirst an den Punkt kommen, an dem du dieselben Codestücke mehrfach brauchst.
Für beides helfen Funktionen. Eine Funktion hat einen Namen, unter dem sie
aufgerufen wird und sie kann (muss aber nicht!) Parameter mitbekommen und kann
auch Ergebnisse zurückgeben. Das schauen wir uns gleich mal im Code an:

{{ file(name="print-hello-func.py") }}

```python
def hallo():
    print("Hallo")

hallo()
```

Jetzt bauen wir eine `printStrich`-Funktion, die immer über und unter dem Text
einen Strich setzt:

{{ file(name="print-content.py") }}

```python
def printStrich(content):
    print("------------------")
    print(content)
    print("------------------")

printStrich("Hallo")
```

Und jetzt wollen wir noch Werte zurückgeben.

{{ file(name="add.py") }}

```python
def add(a, b):
    c = a + b
    return c

print(add(a,b))
```

Bei solchen Funktionen kann sogar direkt im `return` gerechnet werden:

{{ file(name="add.py") }}

```python
def add(a, b):
    return a + b
```

Und als letztes Beispiel:

{{ file(name="tuple-return.py") }}

```python
def calc(a,b):
    c = a + b
    d = a - b
    return c, d

print(calc(5, 4))
```

Solche Funktionen haben – in Zusammenhang mit den Klassen, die du noch
kennenlernen wirst – eine andere wichtige Funktion: Wenn der Code richtig groß
wird, entsteht ein ganz anderen Problem. Windows 7 hat beispielsweise circa 40
Millionen Zeilen Code. Stell Dir vor, dass du einen Fehler entdeckst – du hast
an einer Stelle gemerkt, dass eigentlich Integers addiert werden müssten, in
Wirklichkeit aber String aneinander gereiht werden. Auf die Variablen kann aber
unter Umständen vielfach im Code zurückgegriffen werden. Jetzt kannst du ein
bisschen oben drüber und unten drunter schauen, ob es einen Fall gibt, in dem
die Behandlung als String richtig ist und die Behandlung als Integer fatal wäre.
Eine Fehlerkorrektur an einer Stelle kann also Auswirkungen an einer anderen
Stelle haben und dabei die Situation verschlimmbessern. Bei 40 Millionen Zeilen
Code kann das niemand mehr überschauen. Funktionen und Klassen haben hier einen
großen Vorteil – Variablen, die dort definiert hattest, gelten nur innerhalb
dieser Funktion und können von außen nicht beeinflusst werden. du kannst also in
einer Funktion etwas „reparieren“ und Dir sicher sein, dass es keine Effekte auf
den Code außerhalb dieser hat (sogenannte Seiteneffekte). Die praktische
Bedeutung ist also immens. Um das konkreter zumachen, hier ein Beispiel. Bitte
schreibe den Code ab und fange an, damit ein wenig rumzuspielen, um damit
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

Wenn du das Programm startest, wird ein Fehler ausgeworfen. Da hast du nichts
falsch gemacht, dass muss so sein. Denn mit `print(a)` soll `a` ausgegeben
werden, welches aber im Hauptprogramm gar nicht definiert ist. `c` ebenso wenig.
Kommentiere mal die einzelnen Print-Zeilen aus und probiere, wann es läuft. Wenn
du das a aus der Funktion zurückgeben wolltest, müsstest du es in das `return`
aufnehmen. Aber auch nur in der Ausgabe kannst du es abrufen. Würdest du das
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

Um Dir Verwirrung zu ersparen – teilweise wird bei Funktionen auch von
Prozeduren gesprochen. Manche Programmiersprachen unterscheiden Funktionen
darin, ob sie einen Wert zurückgeben oder nicht. In Python macht das keinen
Unterschied. Eine Funktion wird immer mit `def` eingeleitet, ob sie mit einem
`return` endet oder nicht. Da kann man beide Begriff für das gleiche Konstrukt
verwenden.

### Stil

Bei Funktionen solltest du bitte immer eine Leerzeile über und eine unter der
Funktion freilassen. Das Programm würde auch ohne laufen. Aber es gibt bei
Python einige Konventionen, auf die sich die Python-Programmierer geeinigt
haben, um die Programme besser lesbar zu halten. Diese finden sich in den
sogenannten
[Python Enhancement Proposel bzw. PEP8](https://zrezai-dev.de/python/pep-8/).
Das ist wie mit den Variablenbezeichnungen - am besten gewöhnt man sich sowas
gleich richtig an. Mit einer Leerzeile ist auch wirklich nur eine gemeint, da es
andere Codeblöcke gibt, die mit zwei Leerzeilen abgetrennt werden; die sog.
Klassen, zu denen wir später noch kommen. Im laufenden Code kann eine Leerzeile
gut sein, um größere Blöcke zu gliedern. Wenn das die Lesbarkeit erhöht - do it!

Wenn die Funktion nicht aus dem Namen heraus klar macht, was sie machen soll,
solltest du ihr einen Kommentar spendieren, der kurz erklärt, was die Funktion
macht. Vielleicht hilft als Faustformel - wenn du nach in zwei, drei Monaten
einen Blick auf die Funktionen werfen würdest, könntest du dann auf einen Blick
sagen, was sie macht, welche Parameter reingehen und was ggf. zurückgegeben
wird? Alleine wenn du jetzt zögerst, spricht das für einen Kommentar.

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

Die Art der Kommentierung nennt man übrigens
[_Docstring_](https://www.python.org/dev/peps/pep-0257/).

Klar könnte man das auch anders machen, aber diese Art der Kommentierung bei
Funktionen hat den Vorteil, dass Du automatisiert auslesen kannst. Das ist bei
größeren Projekten sehr charmant. Auch hier gilt - gewöhn es dir gleich richtig
an, das spart dir später einige Mühen... Und auch wenn die Kommentare hier in
Deutsch sind - wenn möglich, dann verwende auch da Englisch.

### Übungen {#übungen-1 .unnumbered}

Als Erstes nimmst du Dir jetzt bitte den Konfektionsgrößenrechner und packst die
Berechnung in eine Funktion. Die Abfrage an die Benutzenden lässt du im
Hauptprogramm stehen.

Und weil es so schön war, nimmst du Dir das vorherige Spiel. Überlege Dir bitte,
wie du mit Funktionen das Ganze übersichtlicher gestalten könntest. Dabei sollte
zumindest das Thema Highscore in einer Funktion ausgelagert werden.

## Jetzt knallt ’s

Du hast ja bereits gesehen, dass Dein Code abstürzen kann. Meist hat das zwei
Ursachen – entweder du hast einen Fehler gemacht oder der Benutzer hat Dinge
eingegeben, die an dieser Stelle da nicht hingehören. Dazu zählen beispielsweise
Buchstaben, wenn man nur Zahlen erwarten dürfte. Streng genommen ist das aber
auch Dein Fehler, denn du musst immer damit rechnen, dass Benutzende aus
Versehen oder aus Böswilligkeit Dinge eingeben, die Mist sind. Solche Fehler
gibt es eine Fehlerbehandlung. In Python heißt das _try-except_, aus anderen
Programmiersprachen wird Dir der Ausdruck `catch` (engl. fangen) über den Weg
laufen. Das Prinzip ist einfach:

Was passiert hier? Im try-/Versuchs-Teil du wirst nach einer Zahl gefragt. Dann
versucht er die Variable, der die Benutzereingabe zugewiesen wurde, in einen
Integer umzuwandeln. Liegt kein Integer vor, würde der Code jetzt abstürzen.
(Probier das einfach mal ohne try-except aus.) Dann springt er in den
except-Teil. Wird kein Fehler ausgeworfen, dann überspringt er den except-Teil.
Ganz stumpf könnte man jetzt so ein try-except um den ganzen Code ziehen, damit
er nicht mehr abstürzt. Das ist keine gute Idee. Wir wollen fehlerfreien Code
bauen und die Ausnahmebehandlung soll uns dabei helfen. Das heißt auch, dass wir
den Fehler möglichst gut einkreisen wollen. Also lieber mehrere
try-except-Funktionen verwenden. Besser wäre schon:

Wenn es zum except-Teil kommt, weißt du jetzt, in welcher Zeile das Problem
auftritt. Aber, das, was wir hier sehen, ist immer noch nicht so, wie du es
verwenden solltest. Dieser kurze Code soll Dir das Problem zeigen (nicht
abtippen!):

{{ file(name="failsave.py") }}

```python
while True:
    try:
        print("Ich bin unaufhaltbar")
    except:
        print("Fehler!")
```

Hier kommst du regelmäßig nicht mehr aus dem Programm raus. Das Problem ist,
dass du mit Strg-C den Code nicht gleich abbrechen kannst. Nicht gut. Deshalb
gewöhne Dir bitte an:

{{ file(name="failsave.py") }}

```python
while True:
    try:
        print("Ich bin nicht mehr unaufhaltsam")
    except Exception:
        print("Fehler!")
```

Jetzt wäre es ja noch hübsch, wenn er Dir anzeigte, was das für einen Fehler
genau ist. Wir zeigen Dir hier an dieser Stelle nur die
quick-and-dirty-Variante, um es jetzt nicht zu überladen. Das ist kein guter
Stil, aber kann hilfreich sein:

Wir kommen im nächsten Kyo darauf zurück und werden das Thema vertiefen. Jetzt
bist du dran: Bitte nimm Dir das Programm für Kopfrechenübungen wieder vor, dass
du gerade geschrieben hast. Sichere mit try-except ab, dass nur sinnvolle
Eingaben den Benutzenden verarbeitet werden. Weise die Benutzerin darauf hin,
wenn eine Eingabe keinen Sinn ergibt. Gibt dabei dem Benutzer unendlich viele
Gelegenheiten, eine sinnvolle Eingabe (also einen Integer) zu machen. Dann mal
ran an die Tasten.

## Hilfen

Zunächst einmal kannst du anderen helfen, wenn du Code schreibst, ihn lesbar zu
machen. Dafür verwendet man Kommentare. Einen Kommentar wertet Python nicht aus.
Er ist „nur“ für den Mensch hinter dem Code.

{{ file(name="failsave.py") }}

```python
print("Quatsch") # diese Zeile druckt Quatsch
# das wertet Python nicht aus
"""
mit drei Hochkommata
kann man mehrere Teile
auskommentieren
"""
```

Kommentieren ist gar nicht so einfach. Beschreibe keine selbstverständlichen
Teile, dass verwirrt bloß (also nicht wie im Beispielcode). Dafür solltest Du
immer ein paar Worte verlieren, wenn sich Code nicht selbst erklärt. Was macht
die Funktion, welche Parameter erwartet sie, was gibt sie zurück?

Daneben kann man Kommentar super nutzen, um Teile des Codes kurz nicht zu
verwenden, ohne sie gleich löschen zu müssen. PyCharm macht es Dir da einfach:
Markiere den entsprechenden Code und gib Strg+\# ein und der Code wird
auskommentiert. Machst du das mit auskommentierten Code, wird er wieder aktiv.

{{ figure(source="/images/kyo-7/help-2444110_1280_a.png", float="end", alt="Dir wird geholfen!") }}

Wo kannst du Dir Hilfe außerhalb der CoderDojo-Termine holen? Zu aller erst
natürlich in unserem Matrix-Kanal. Ansonsten empfehlen wir Dir diese
Internet-Seiten:

-   Falls du ein Freund von Büchern bist, würden wir Dir am Anfang folgendes
    empfehlen:

    -   als Anfängerlektüre: Hauke Fehr, \<Let`s code\> Python

    -   zum Nachschlagen: Johannes Ernesti, Python3

    -   zum Üben: Luigi Lo Iacono, Stephan Wiefling und Michael Schneider,
        Programmieren trainieren

Viele Bibliotheken sind da gut ausgestattet. Schau da mal vorbei. Für die
Berliner – welche Bibliothek was hat, kannst du Dir aus
[voebb.de](https://voebb.de) anschauen. Gerade die Berliner Stadtbibliothek in
der Breite Straße, Nähe Alexanderplatz ist außergewöhnlich gut ausgestattet.

Als Webseiten empfehlen wir:

-   [python-kurs.eu](https://python-kurs.eu)

Die Liste werden wir noch erweitern.

Foren und Mailinglisten können sehr lehrreich sein, jedenfalls wenn es die
richtigen sind. Also um sowas wie gute-frage.de machst du bitte einen weiten
Bogen. Bitte halte Dich in solchen Foren und Mailinglisten an die Netiquette;
ein höflicher Umgangston, ein Bitte und Danke, sollten da wie im „echten“ Leben
auch verwendet werden. Bevor du dort etwas postet: Bitte lies eine Zeit lang
mit, um so ein Gefühl für die Umgebung dort zu bekommen. Bevor du eine Frage
stellst – bitte immer vorher mit einer Suchmaschine und insbesondere im
betreffenden Forum schauen, ob die Frage schon gestellt und beantwortet wurde.
Es ist wirklich lästig, wenn die gleiche Frage das zehnte Mal gestellt wird,
weil der- oder diejenige einfach zu faul war, vorher zu suchen. Falls Dir
Mailinglisten nichts sagen: du trägst Dich dort mit Deiner E-Mail-Adresse ein.
Schreibst du eine E-Mail an die Mailingliste, kriegen sie alle, die sich dort
eingetragen haben und du bekommst umgekehrt auch alle Antworten. Meist haben die
auch ein Archiv, in dem man die alten Posts nachlesen kann. Foren und
Maillinglisten können sehr hilfreich sein. Da aber die Qualität teilweise von
Beitrag zu Beitrag erheblich schwankt, haben wir aktuell leider keine
Empfehlungen. Wenn Du aber etwas hast, was Dir immer gut weiterhilft, schreib
uns gerne.

Wenn du Bücher, Mailinglisten oder anderes gefunden hast, bei dem du denkst,
dass die den anderen helfen – behalte das bitte nicht für Dich, sondern teile es
mit uns. Und wir schauen, ob wir es ins Script bzw. Homepage aufnehmen.

<!---

## Turtle

Mit Turtle stellt Python Dir ein kleines Zeichenprogramm zur Verfügung, was für
Programmieranfänger gedacht ist. Das ist super für erste Übungen. Es kann sein,
dass du dafür noch eine Bibliothek installieren musst. Das kannst du aber leicht
feststellen. Schreib einfach:

```python
import turtle
```

und starte das. Wenn es keinen Fehler gibt – super. Wenn es einen Fehler gibt –
wenn du mit Deinem Betriebssystem schon besser klarkommst, dann kannst du das
mit „pip install turtle“ nachinstallieren. Wenn das nicht der Fall ist – nicht
schlimm. An einem Donnerstagabend helfen wir Dir beim CoderDojo. Falls du jetzt
nicht weiterkommst, lies im nächsten Kapitel weiter und komme auf Turtle zurück,
nach du Unterstützung bekommen hast.

-   Der Teil Turtle ist im Entstehen. Bitte habe noch etwas Geduld.

-->

# Test

Der Weißgurt ist zum Greifen nahe. Schaffst du die folgenden Fragen
beziehungsweise Aufgaben?

-   Schreibe das Spiel „Galgenmännchen“. Falls du es nicht kennst, lies Dir
    bitte den entsprechenden Wikipedia-Artikel durch. Lege eine Liste mit
    mindestens 20 Wörtern an, aus der für jedes Spiel ein zufälliges Wort
    ausgewählt wird. Der Spieler sieht die Anzahl der Buchstaben und kann immer
    einen Buchstaben raten. Fehlerhafte geratene Buchstaben werden in einer
    Zeile aufgezeigt, richtig geratene in das Lösungswort eingesetzt. Kommt es
    zu einem Fehler, wird in ASCII-Art ein Galgenmännchen in 15 Stufen
    gezeichnet. Wenn es Dir lieber ist, kannst du das Galgenmännchen auch mit
    turtle zeichnen.

-   Was ist der einzige Zweck der Erde?

-   Schreibe eine Funktion, mit der du mithilfe der Leibniz-Formel Pi
    berechnest. Dabei kannst du von folgender Berechnung ausgehen:

    $$\pi = \frac{4}{1} - \frac{4}{3} - \frac{4}{5} - \frac{4}{7} - \frac{4}{9}$$

    Du siehst, dass der Zähler bei 4 bleibt, während sich der Nenner um 2
    erhöht. Die Funktion sollte einen Wert annehmen, der die Anzahl der Teile
    der Formel angibt. Um so höher dieser ist, um so genauer wird Pi. Vergleiche
    das Ergebnis beispielsweise mit dem Ergebnis auf dem Wikipedia-Artikel
    „Kreiszahl“.

-   Was ist ein Vogel?

-   Zeichne mit turtle ein Dreieck und lasse es von rechts nach links über den
    Bildschirm „schweben“ (Der Kurs wird noch um ein Kapitel mit turtle
    ergänzt).

-   Erweitere Deine LED-Schaltung um einen kleinen Schalter.

-   Was ist die halbe Wahrheit?

Falls du an einer Aufgabe festhängst – hei, kein Problem. Lass uns gemeinsam
drauf schauen, woran es hakt. Du schaffst das! Und falls du bei den
Nicht-Programmieraufgaben nicht weiterkommst, lehnst du Dich entspannt zurück
und nimmst Dir unsere Empfehlungen unter Kultur vor.

Alles geschafft? Wenn ja, dann **Herzlichen Glückwunsch**. Du bist bereit für
einen neuen Level. Du kannst stolz auf Dich sein – das hier wahr schon eine
ganze Menge neuer Stoff.

## Zusammenfassung

Hier noch einmal kurz die im 7. Kyo gelernten Befehle:

-   print("foo"): Gibt eine Zeile auf dem Bildschirm aus.

-   for i in foo: Schleife zur Wiederholung einer Sequenz.

-   range(a, b, c): Generiert eine interierbare Liste, welche super in
    Kombination mit der for-Schleife funktioniert. Der erste Wert steht für den
    Startwert, der zweite für den Endwert und der dritte für die Schrittweite.

-   while: hast du als Schleife mit Bedingung verwendet.

-   Mit break und continue kannst du Schleifen besser steuern.

-   input("foo"): Liest eine Benutzerineingabe von der Kommandozeile ein.

-   if / elif / else: Wenn / dann / sonst - Bedingungen

-   Die Stringformatierung f"foo {bar}" hast du schon verwendet.

-   Du kennst jetzt die Rechenoperationen +, -, /, //, \*, \*\* und %.

-   Du hast die Datentypen String (str) für Zeichen, Integer (int) für ganze
    Zahlen und Float (float) für Gleitkommazahlen und kennengelernt.

-   Mit [foo] kannst du schon Listen erzeugen. Und mit list.append hast du
    Elemente einer Liste hinzugefügt.

-   def hat Dir ermöglicht, eigene Funktionen zu schreiben. Mit return kannst du
    Werte zurückgeben.

-   try / except hat Dir eine erste Einführung im Abfangen von Fehlern gegeben.

-   Mit `from <Modul> import <Funktion>` hast du die erste Bibliothek eingelesen
    und gleich mit `from random import randrange` Zufallszahlen generiert.

-   Kommentare kannst du mit drei Hochkommata oder \# schreiben.

-   Und nicht zuletzt kennst du die Antwort auf alle Fragen und weißt, ob du die
    blaube oder die rote Pille nehmen sollst.
