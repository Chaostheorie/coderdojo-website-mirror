---
title: '7. Kyo'
subtitle: Jetzt knallt ’s
katex: true
date: 07-12-2021
category: chapters
---

Du hast ja bereits gesehen, dass Dein Code abstürzen kann. Meist hat das zwei Ursachen – entweder du hast einen Fehler
gemacht oder der Benutzer hat Dinge eingegeben, die an dieser Stelle da nicht hingehören. Dazu zählen beispielsweise
Buchstaben, wenn man nur Zahlen erwarten dürfte. Streng genommen ist das aber auch Dein Fehler, denn du musst immer
damit rechnen, dass Benutzende aus Versehen oder aus Böswilligkeit Dinge eingeben, die Mist sind. Solche Fehler gibt es
eine Fehlerbehandlung. In Python heißt das _try-except_, aus anderen Programmiersprachen wird Dir der Ausdruck `catch`
(engl. fangen) über den Weg laufen. Das Prinzip ist einfach:

Was passiert hier? Im try-/Versuchs-Teil du wirst nach einer Zahl gefragt. Dann versucht er die Variable, der die
Benutzereingabe zugewiesen wurde, in einen Integer umzuwandeln. Liegt kein Integer vor, würde der Code jetzt abstürzen.
(Probier das einfach mal ohne try-except aus.) Dann springt er in den except-Teil. Wird kein Fehler ausgeworfen, dann
überspringt er den except-Teil. Ganz stumpf könnte man jetzt so ein try-except um den ganzen Code ziehen, damit er nicht
mehr abstürzt. Das ist keine gute Idee. Wir wollen fehlerfreien Code bauen und die Ausnahmebehandlung soll uns dabei
helfen. Das heißt auch, dass wir den Fehler möglichst gut einkreisen wollen. Also lieber mehrere try-except-Funktionen
verwenden. Besser wäre schon:

Wenn es zum except-Teil kommt, weißt du jetzt, in welcher Zeile das Problem auftritt. Aber, das, was wir hier sehen, ist
immer noch nicht so, wie du es verwenden solltest. Dieser kurze Code soll Dir das Problem zeigen (nicht abtippen!):

{% file("failsave.py") %}

```python
while True:
    try:
        print("Ich bin unaufhaltbar")
    except:
        print("Fehler!")
```

Hier kommst du regelmäßig nicht mehr aus dem Programm raus. Das Problem ist, dass du mit Strg-C den Code nicht gleich
abbrechen kannst. Nicht gut. Deshalb gewöhne Dir bitte an:

{% file("failsave.py") %}

```python
while True:
    try:
        print("Ich bin nicht mehr unaufhaltsam")
    except Exception:
        print("Fehler!")
```

Jetzt wäre es ja noch hübsch, wenn er Dir anzeigte, was das für einen Fehler genau ist. Wir zeigen Dir hier an dieser
Stelle nur die quick-and-dirty-Variante, um es jetzt nicht zu überladen. Das ist kein guter Stil, aber kann hilfreich
sein:

Wir kommen im nächsten Kyo darauf zurück und werden das Thema vertiefen. Jetzt bist du dran: Bitte nimm Dir das Programm
für Kopfrechenübungen wieder vor, dass du gerade geschrieben hast. Sichere mit try-except ab, dass nur sinnvolle
Eingaben den Benutzenden verarbeitet werden. Weise die Benutzerin darauf hin, wenn eine Eingabe keinen Sinn ergibt. Gibt
dabei dem Benutzer unendlich viele Gelegenheiten, eine sinnvolle Eingabe (also einen Integer) zu machen. Dann mal ran an
die Tasten.

## Hilfen

Zunächst einmal kannst du anderen helfen, wenn du Code schreibst, ihn lesbar zu machen. Dafür verwendet man Kommentare.
Einen Kommentar wertet Python nicht aus. Er ist „nur“ für den Mensch hinter dem Code.

{% file("failsave.py") %}

```python
print("Quatsch") # diese Zeile druckt Quatsch
# das wertet Python nicht aus
"""
mit drei Hochkommata
kann man mehrere Teile
auskommentieren
"""
```

Kommentieren ist gar nicht so einfach. Beschreibe keine selbstverständlichen Teile, dass verwirrt bloß (also nicht wie
im Beispielcode). Dafür solltest Du immer ein paar Worte verlieren, wenn sich Code nicht selbst erklärt. Was macht die
Funktion, welche Parameter erwartet sie, was gibt sie zurück?

Daneben kann man Kommentar super nutzen, um Teile des Codes kurz nicht zu verwenden, ohne sie gleich löschen zu müssen.
PyCharm macht es Dir da einfach: Markiere den entsprechenden Code und gib Strg+\# ein und der Code wird auskommentiert.
Machst du das mit auskommentierten Code, wird er wieder aktiv.

{% figure("/images/kyo-7/help-2444110_1280_a.png", "end", "Dir wird geholfen!") %}

Wo kannst du Dir Hilfe außerhalb der CoderDojo-Termine holen? Zu aller erst natürlich in unserem Matrix-Kanal. Ansonsten
empfehlen wir Dir diese Internet-Seiten:

-   Falls du ein Freund von Büchern bist, würden wir Dir am Anfang folgendes empfehlen:

    -   als Anfängerlektüre: Hauke Fehr, \<Let`s code\> Python

    -   zum Nachschlagen: Johannes Ernesti, Python3

    -   zum Üben: Luigi Lo Iacono, Stephan Wiefling und Michael Schneider, Programmieren trainieren

Viele Bibliotheken sind da gut ausgestattet. Schau da mal vorbei. Für die Berliner – welche Bibliothek was hat, kannst
du Dir aus [voebb.de](https://voebb.de) anschauen. Gerade die Berliner Stadtbibliothek in der Breite Straße, Nähe
Alexanderplatz ist außergewöhnlich gut ausgestattet.

Als Webseiten empfehlen wir:

-   [python-kurs.eu](https://python-kurs.eu)

Die Liste werden wir noch erweitern.

Foren und Mailinglisten können sehr lehrreich sein, jedenfalls wenn es die richtigen sind. Also um sowas wie
gute-frage.de machst du bitte einen weiten Bogen. Bitte halte Dich in solchen Foren und Mailinglisten an die Netiquette;
ein höflicher Umgangston, ein Bitte und Danke, sollten da wie im „echten“ Leben auch verwendet werden. Bevor du dort
etwas postet: Bitte lies eine Zeit lang mit, um so ein Gefühl für die Umgebung dort zu bekommen. Bevor du eine Frage
stellst – bitte immer vorher mit einer Suchmaschine und insbesondere im betreffenden Forum schauen, ob die Frage schon
gestellt und beantwortet wurde. Es ist wirklich lästig, wenn die gleiche Frage das zehnte Mal gestellt wird, weil der-
oder diejenige einfach zu faul war, vorher zu suchen. Falls Dir Mailinglisten nichts sagen: du trägst Dich dort mit
Deiner E-Mail-Adresse ein. Schreibst du eine E-Mail an die Mailingliste, kriegen sie alle, die sich dort eingetragen
haben und du bekommst umgekehrt auch alle Antworten. Meist haben die auch ein Archiv, in dem man die alten Posts
nachlesen kann. Foren und Maillinglisten können sehr hilfreich sein. Da aber die Qualität teilweise von Beitrag zu
Beitrag erheblich schwankt, haben wir aktuell leider keine Empfehlungen. Wenn Du aber etwas hast, was Dir immer gut
weiterhilft, schreib uns gerne.

Wenn du Bücher, Mailinglisten oder anderes gefunden hast, bei dem du denkst, dass die den anderen helfen – behalte das
bitte nicht für Dich, sondern teile es mit uns. Und wir schauen, ob wir es ins Script bzw. Homepage aufnehmen.

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

Der Weißgurt ist zum Greifen nahe. Schaffst du die folgenden Fragen beziehungsweise Aufgaben?

-   Schreibe das Spiel „Galgenmännchen“. Falls du es nicht kennst, lies Dir bitte den entsprechenden Wikipedia-Artikel
    durch. Lege eine Liste mit mindestens 20 Wörtern an, aus der für jedes Spiel ein zufälliges Wort ausgewählt wird.
    Der Spieler sieht die Anzahl der Buchstaben und kann immer einen Buchstaben raten. Fehlerhafte geratene Buchstaben
    werden in einer Zeile aufgezeigt, richtig geratene in das Lösungswort eingesetzt. Kommt es zu einem Fehler, wird in
    ASCII-Art ein Galgenmännchen in 15 Stufen gezeichnet. Wenn es Dir lieber ist, kannst du das Galgenmännchen auch mit
    turtle zeichnen.

-   Was ist der einzige Zweck der Erde?

-   Schreibe eine Funktion, mit der du mithilfe der Leibniz-Formel Pi berechnest. Dabei kannst du von folgender
    Berechnung ausgehen:

    $$\pi = \frac{4}{1} - \frac{4}{3} - \frac{4}{5} - \frac{4}{7} - \frac{4}{9}$$

    Du siehst, dass der Zähler bei 4 bleibt, während sich der Nenner um 2 erhöht. Die Funktion sollte einen Wert
    annehmen, der die Anzahl der Teile der Formel angibt. Um so höher dieser ist, um so genauer wird Pi. Vergleiche das
    Ergebnis beispielsweise mit dem Ergebnis auf dem Wikipedia-Artikel „Kreiszahl“.

-   Was ist ein Vogel?

-   Zeichne mit turtle ein Dreieck und lasse es von rechts nach links über den Bildschirm „schweben“ (Der Kurs wird noch
    um ein Kapitel mit turtle ergänzt).

-   Erweitere Deine LED-Schaltung um einen kleinen Schalter.

-   Was ist die halbe Wahrheit?

Falls du an einer Aufgabe festhängst – hei, kein Problem. Lass uns gemeinsam drauf schauen, woran es hakt. Du schaffst
das! Und falls du bei den Nicht-Programmieraufgaben nicht weiterkommst, lehnst du Dich entspannt zurück und nimmst Dir
unsere Empfehlungen unter Kultur vor.

Alles geschafft? Wenn ja, dann **Herzlichen Glückwunsch**. Du bist bereit für einen neuen Level. Du kannst stolz auf
Dich sein – das hier wahr schon eine ganze Menge neuer Stoff.

## Zusammenfassung

Hier noch einmal kurz die im 7. Kyo gelernten Befehle:

-   `print("foo")`: Gibt eine Zeile auf dem Bildschirm aus.

-   `for i in foo`: Schleife zur Wiederholung einer Sequenz.

-   ` range(a, b, c)`: Generiert eine interierbare Liste, welche super in Kombination mit der for-Schleife funktioniert.
    Der erste Wert steht für den Startwert, der zweite für den Endwert und der dritte für die Schrittweite.

-   `while`: hast du als Schleife mit Bedingung verwendet.

-   Mit `break` und `continue` kannst du Schleifen besser steuern.

-   `input("foo")`: Liest eine Benutzerineingabe von der Kommandozeile ein.

-   `if` / `elif` / `else`: Wenn / dann / sonst - Bedingungen

-   Die Stringformatierung `f"foo {bar}"` hast du schon verwendet.

-   Du kennst jetzt die Rechenoperationen `+`, `-`, `/`, `//`, `*`, `**` und `%`.

-   Du hast die Datentypen String (`str`) für Zeichen, Integer (`int`) für ganze Zahlen und Float (`float`) für
    Gleitkommazahlen und kennengelernt.

-   Mit `[foo, bar, …]` kannst du schon Listen erzeugen. Und mit `list.append` hast du Elemente einer Liste hinzugefügt.

-   `def` hat Dir ermöglicht, eigene Funktionen zu schreiben. Mit `return` kannst du Werte zurückgeben.

-   `try` / `except` hat Dir eine erste Einführung im Abfangen von Fehlern gegeben.

-   Mit `from <Modul> import <Funktion>` hast du die erste Bibliothek eingelesen und gleich mit
    `from random import randrange` Zufallszahlen generiert.

-   Kommentare kannst du mit drei Hochkommata oder `#` schreiben.

-   Und nicht zuletzt kennst du die Antwort auf alle Fragen und weißt, ob du die blaue oder die rote Pille nehmen
    sollst.
