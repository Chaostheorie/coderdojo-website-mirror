---
title: '7. Kyo'
subtitle: Weißgurt
katex: true
date: 07-12-2021
category: chapters
---

> Am liebsten erinnere ich mich an die Zukunft.
>
> _Salvador Dali_

## Inhalt - was werden wird

Willkommen im ersten Teil. Wenn du „Überblick Dojo“ noch nicht gelesen hast, mach das bitte mal. Da steht, was du so
brauchst, um hier gleich mit PyCharm und Python durchstarten zu können.

> Hinweis: Der Text ist „frisch“. Wenn du Fehler entdeckst, Teile unverständlich findest oder Ideen für bessere und mehr
> Beispiele und Übungen hast, lass es uns bitte wissen, damit wir ihn korrigieren und verbessern können. Stand 5.
> Dezember 2021.

## Hello World

Wenn du PyCharm startest, sollte der Start bei Dir ungefähr so aussehen:

{% figure "/images/kyo-7/8-1-Pycharm-2.png" "PyCharm – Welcome screen" %}

Klicke auf `New Project`. Dann schaut es ungefähr so aus:

{% figure "/images/kyo-7/8-1-Pycharm-3.png" "PyCharm – New Project screen" %}

Bei der obersten Zeile mit Location änderst du den Projektnamen auf „HelloWorld“. Das ist Dein Projektname. Die weiteren
Einstellmöglichkeiten hier werden wir mit der Zeit kennenlernen. Dann klickst du auf „Create“. Unter Umständen rödelt
Deine Kiste jetzt einen Moment. Im nächsten Schritt baut sich der Editor auf. In dem Teil main.py steht allerhand Zeug.
Das löschst du jetzt einfach – entweder du markierst es mit der Maus und drückst die Entf-Taste oder – Tastaturkürzel
lernen ist immer gut – mit Strg+A oder Control+A alles markieren und dann Entf drücken. Dann sollte das bei Dir ungefähr
so ausschauen:

{% figure "/images/kyo-7/8-1-Pycharm-4.png" "PyCharm – Empty main.py" %}

Okay, jetzt kann es losgehen!

Warst du schon mal in einem Dōjō? Falls nicht – immer wenn man ein Dōjō betritt und verlässt, gibt es eine kleine
Verbeugung als Gruß. Beginnt man mit einer neuen Programmiersprache, gibt es auch ein solches „Ritual“. Man beginnt
damit, den Computer `Hello World` ausgeben zu lassen. Um etwas ausgeben zu lassen, verwenden wir den Befehl `print`
(engl. drucken). Das wollen wir jetzt probieren:

```python
print("Hello World")
```

Jetzt führst du das Programm aus: du gehst in der Menüzeile auf „Run“ und dort auf den obersten Punkt „Run `main`“. Dann
sollte sich unten ein Fenster aufbauen, in welchem das Ergebnis Deines Programms ausgeführt wird.

{% figure "/images/kyo-7/8-1-Pycharm-5.png" "PyCharm – hello world" %}

Wenn da „Hello World“ steht, hast du es geschafft: Dein erstes Programm! Okay, noch ein sehr kleines, aber immerhin.
Wenn du bis hierin nicht gekommen bist – bitte zögere nicht und lass Dir helfen! Hier können unvorhersehbare
Stolpersteine im Weg liegen, die du vielleicht nicht ohne etwas Unterstützung aus dem Weg geräumt bekommst.

Frag jemanden aus dem Umfeld, komm zu unserem wöchentlichen Videotreff vorbei oder wenn es Präsenztreffen gibt, komm mit
Deinem Rechner in den [xHain](https://x-hain.de/de/). Wenn das hier nicht läuft, kann der Rest auch nicht laufen. Es ist
gut, wenn du Dich selber daran versuchst, aber lass Dich nicht entmutigen, wenn es nicht klappt.

## Schleifen

Als Nächstes wollen wir dieses „Hello World“ zehnmal ausgeben. Eine einfache Methode wäre jetzt sowas:

{% file("hello-world.py") %}

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

{% file("hello-world-loop.py") %}

```python
for i in range(10):
    print("Hello World")
```

Die Einrückung erzeugst du, indem du die Tab-Taste verwendest. Das ist die Taste zwischen `CapsLock` (dauernd
großschreiben und der \^-Taste). Probiere es gleich mal aus, indem du wieder auf „Run“ und dann auf
`Run `main``gehst. Wähle die Ausgabe nach. Sind es wirklich zehn`Hello World`?

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

{% figure "/images/kyo-7/Tie_shoelace.png" "Schleifen für Schuhe..." "left" %}

Was passiert jetzt bei dieser Schleife? `i` ist eine sogenannte Variable. Das kennst du bestimmt schon aus dem
Matheunterricht. Ihr wird mit jedem Durchlauf eine Zahl zugewiesen. `range(10)` gibt an, dass mit jedem Durchlauf `i` um
eins erhöht werden soll, bis es `10` ist. Klingt wenig verständlich? Lass Dir einfach mal ausgeben, was in `i` in jedem
Durchlauf drin steckt.

{% file("range-loop.py") %}

```python
for i in range(10):
    print("i lautet: ", i)
```

`range` kann noch mehr. Folgender Code beziehungsweise, dessen Ausgabe sollte Dir das ganze zeigen:

{% file("stepped-loop.py") %}

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

{% figure "/images/kyo-7/8-1-Pycharm-6.png" "PyCharm – new file" %}

{% figure "/images/kyo-7/8-1-Pycharm-7.png" "PyCharm – new file" %}

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
