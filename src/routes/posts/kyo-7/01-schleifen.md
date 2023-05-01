+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

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
Computer ja auch echt stark. Zehnmal geht noch gut, wenn du 100-mal das machen müsstest, wäre es schon nervig. Und du
müsstest, um sicherzugehen, dass es nicht 99 oder 101 sind, mehrfach nachzählen. Schöner wäre es doch, wenn wir dem
Computer sagen könnten, dass er diese Befehlszeile n-mal wiederholen soll. Das machen wir mit einer sogenannten
For-Schleife oder For-Loop.

```python
for i in range(10):
    print("Hello World")
```

Die Einrückung erzeugst du, indem du die Tab-Taste verwendest. Das ist die Taste zwischen `CapsLock` (dauernd
großschreiben und der ^-Taste, links oben). Probiere es gleich mal aus, indem du wieder auf „Run“ und dann auf
`Run `main`gehst. Zähle die Ausgabe nach. Sind es wirklich zehn`Hello World`? Wenn es nicht geht - ist die Print-Zeile
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
machen soll, damit der Code übersichtlicher und verständlicher wird. Die Tugend ist bei Python Pflicht.

> Manchmal wirst du vielleicht hören, dass Python doch noch solche Klammern einführt. Die Antwort darauf gibt Python jedoch selbst.
> Probiere einfach folgenden Einzeiler (zwei Unterstriche vor und nach future) aus:

```
from __future__ import braces
```

Weiter geht's: Rücke zwei print-Zeilen unterhalb der For-Schleife ein und lass sie Dir ausgeben. Dann probierst du aus, wenn die erste nicht
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

Falls du stecken bleibst, gibt es hier einen Tip:

:::hint Hinweise
Mit Leerzeichen kannst Du die Sterne quasi verschieben. Während du mit jeder Leerzeile zwei neue Sterne brauchst, brauchst du gleichzeitig mit jeder neuen Zeile etwas weniger Leerzeichen. Der Baumstumpf bedarf einer eigenen print-Zeile und läuft unabhängig vom Nadelwerk. Wie werden es mehr Sterne? Überlege mal, wie du die Laufvariable dafür in einspannen kannst. Also irgendwie wirst du Schleifen brauchen.
:::

Und weil ASCII-Art so schön ist, „zeichne“ noch eine Sanduhr (knobel auch hier, wie du mit möglichst wenig Code
auskommst):

```
*****
 ***
  *
 ***
*****
```
