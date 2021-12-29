---
title: '7. Kyo'
subtitle: Variablentypen und Stringspielereien
katex: true
date: 07-12-2021
category: chapters
---

Inzwischen hast du schon recht viel mit Variablen gearbeitet. Ist Dir dabei aufgefallen, dass bei einem
`a = input("Gib was ein: ")` und `a = 1` das erste `a` für einen Text steht und das zweite für eine Zahl? In vielen
Programmiersprachen musst du bevor du eine Variable das erste Mal nutzen kann, dem Rechner sagen, wie du diese Variable
verwenden willst. Das brauchst du in Python nicht. Das hat so seine Vor- und Nachteile. Steht eine Variable für einen
Text, verwendet man sie als sogenannten String, abgekürzt `str`. Bei natürlichen Zahlen nennt man sie Integer, abgekürzt
`int`. Mit `type(a)` kannst du Dir ausgeben lassen, wie die Variable verwendet wird. Probiere mal folgenden Code aus:

{% file("print-types.py") %}

```python
a = "Das ist Text"
print(type(a))
a = 1
print(type(a))
```

Ja, und? Macht das einen Unterschied? Probiere mal folgenden Code aus:

{% file("explore-types.py") %}

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

Du kannst Python auch anweisen, dass Variablen einen bestimmten Typ annehmen. Mit `int(a)` sorgst du dafür, dass a als
Zahl behandelt wird und mit `str(a)`, dass es als Text verwendet wird. Probiere Folgendes aus:

{% file("explore-types.py") %}

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

{% file("explore-types.py") %}

```python
text1 = "alles"
text2 = " Quatsch"
print (text1 + text2)
```

Jetzt füge vor dem `print` noch ein `text1 = int(text1)` ein und führe den Code aus. Da wird es „knallen“, will sagen,
es gibt eine Fehlermeldung. Warum ist das so? Weil du Zahlen nicht als Integer behandeln kannst. Mit einem

{% file("compare-types.py") %}

```python
if isinstance(a, int):
```

kannst du feststellen, ob `a` eine Zahl ist. Oben hattest du einen einfachen Taschenrechner gebaut. Der hat zwei Zahlen
addiert, die die Benutzer:in eingegeben hat. Alles ist gut, bis der Mensch ins Spiel kommt

-   denn wenn der Benutzer eine einen Buchstaben eingibt, kann er nicht mehr addieren, sondern setzt bestenfalls die
    beiden Abfragen zusammen. Du hast jetzt gelernt, warum das so ist. Jetzt schreibe das Programm so, das prüft, ob der
    Benutzer einen Integer eingegeben hat. Falls nicht, soll die Abfrage nochmal durchlaufen werden und der Hinweis
    erfolgen, dass nur ganze Zahlen erlaubt sind.

Wir wollen uns ein paar weitere Variablentypen anschauen:

{% file("explore-types.py") %}

```python
a = 3.14
print(type(a))
a = True
print(type(a))
a = False
print(type(a))
```

Der erste Typ nennt sich Float (`float`) und ist für sogenannte Gleitkommazahlen. Spätestens wenn du dividierst oder mit
Prozenten arbeitest, tauchen sie auf. Hier gibt es aber echte Untiefen, da Computer nicht so rechnen, wie wir das
erwarten. Auf das Thema werden wir noch mehrfach zurückkommen.

Interessant ist der zweite Typ. Der nennt sich Bool (`bool`) oder Boolean (gesprochen Buhl bzw. Buhleo. Im Deutschen
sog. boolesche Werte). Das ist ein Gedenken an den amerikanischen Mathematiker George Boole, der im 19. Jahrhundert
lebte. Dieser Variablentyp kann nur zwischen Wahr und Falsch unterscheiden. Das klingt banal, aber du wirst sehen, dass
er sehr praktisch ist und häufig Verwendung findet.

Jetzt wird es ein wenig abstrakt:\
Nein, das war noch nicht alles. Python kennt noch mehr Variablentypen. Aber an dieser Stelle sollen uns die erst einmal genügen.
Python versucht den Typ der Variable passend für Dich umzuwandeln. Wenn du also einen String mit einem Integer addierst,
würde in vielen Sprachen ein Fehler ausgeworfen werden. Python wandelt automatisch den Integer in einen String um – und wenn
zwei Strings „addiert“ werden, dann hängt Python sie einfach hintereinander. Die andere Richtung geht nicht unbedingt. Denn
ein String kann nur in einen Integer umgewandelt werden, wenn er nur aus Zahlen besteht. Fluch und Segen hängen oft nahe
bei einander: Auf der einen Seite kann Dir diese automatische Umwandlung manch einen Programmabsturz ersparen. Auf der anderen
Seite hast du Deinen Code nicht richtig im Griff, sonst hättest du wohl eher ausdrücklich (wir sagen explizit) die Variable
umgewandelt. Will sagen – wenn `a = 1` und `b = "a"` ist, dann ist `a + b = 1a`. Denn a wird zu einem String umgewandelt
und beide werden kombiniert. Würde aber `b` einmal eine Zahl sein, dann würde Python nicht umwandeln, sondern sie addieren.
Puh. Du müsstest also sicher sagen können, was in den Variablen drin steckt. Sicherer ist es in diesem Fall zu schreiben
`str(a) + str(b)`. Dann kannst du Dir sicher sein, was jetzt passiert. Dieses Thema ist anfangs etwas sperrig, aber wir kommen
da so früh drauf, weil hier echte Untiefen lauern. Wenn du das Gefühl hast, du bekommst „komische“ Ergebnisse oder der Code
läuft einfach nicht, schau Dir immer auch an, was die einzelnen Variablen gerade so machen. Wenn du Dir unsicher bist, definiere
sie explizit, also mit Variablentyp. Keine Sorge, wir werden das Thema noch üben und immer wieder darauf zurückkommen. Wichtig
ist an dieser Stelle, dass du schon davon gehört hast und versucht, einen Blick dafür zu entwickeln, mit was für einem Variablentyp
du es gerade zu tun hast. Im Code kannst du immer mit `type(Variablenname)` auswerfen lassen, wie Python ihn gerade behandelt.

{% figure("/images/kyo-7/SolarpanelBp_a.jpeg", "start", "Solarzellen
 werden mittels Lötbändchen zu Strängen,<br> den sogeannten Strings verbunden") %}

Die Überschrift hieß nicht nur Variablentypen, sondern auch Stringspielereien. Wie man zwei Strings wie `"ot"` `"to"`
kombiniert, hast du schon gesehen: aus `"ot" + "to"` wird `"otto"`. Das ein String in zwei `""` eingefasst werden muss,
haben wir noch nicht explizit gesagt, ist Dir aber sicherlich schon aufgefallen. du kannst auch das \`\`\` nehmen, also
das Zeichen über der Raute. Beides geht, du solltest es nur nicht in einem Code mischen. Aber was machst du nun, wenn du
in einem String sagen wolltest:`print("Und er sagt: "Hallo"")`. Nur zu, Hack das ein. Soviel vorweg – das wird nichts.
Denn Python liest das erste und weiß – jetzt geht der String los. Dann kommt das zweite und er denkt, der String ist zu
Ende. Und dann kommt etwas, mit er echt nichts anfangen kann – `"Hallo"`. Typisch menschlicher Kram halt. Hier gibt es
zwei Wege.

Entweder du schreibst `print("Und er sagt: `Hallo`")` bzw. `print(`Und er sagt: "Hallo"`)`. Oder du sagst ihm, dass das
folgende Zeichen nicht in weiter beachtet werden soll, dafür benutzen wir den sogenannten Backslash. Das ist der
Querstrich beim ß, den du mit AltGr ansteuerst. Du würdest also schreiben `print("Und er sagt: \"Hallo\"")`. Python
liest die ersten Anführungszeichen und weiß, der String geht los. Bei den zweiten kommt erst der `\` – da sagt sich
Python -- nicht verarbeiten, stumpf ausgeben. Wir nennen diesen Vorgang escapen, von entkommen oder aussteigen. Und nur
damit du es gesehen hast – man kann auch mit drei `"` oder ``` arbeiten, um einen String zu definieren. Das funktioniert
sogar über Zeilen hinweg.

{% figure("/images/kyo-7/Python_string_int.jpg", "right", "Dieses Meme solltest Du jetzt nachvollziehen können.") %}

Die Ausgabe von Variablen hast du schon gesehen, auch die Kombination mit Text. Dafür gibt es einen einfachen und einen
eleganten Weg. Der einfache Weg ist `print("Inhalt von a: ", a)`. Der ist aber veraltet und wenig elegant. Besser ist:

```python
inhalt = 1000
print(f"Der Inhalt ist: {inhalt}")
```

Probier mal aus! Falls Dir mal solche Konstrukte mit einem `%`-Zeichen über den Weg laufen – das ist eine veraltete
Methode, um Strings in Python zu formatieren. Ein Vorteil der neuen Methode ist, dass das `f` gerüchteweise nicht nur
für `format`, sondern auch für fast steht. Der Code kann damit schneller ausgeführt werden. Das funktioniert auch mit
mehreren Variablen:

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

Wir werden später noch einmal auf das Thema zurückkommen, weil sich so beispielsweise auch etwas wie ein Datum passend
formatieren lässt.
