+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>


## Hilfen

Zunächst einmal kannst du anderen helfen, wenn du Code schreibst, ihn lesbar zu machen. Dafür verwendet man Kommentare.
Einen Kommentar wertet Python nicht aus. Er ist „nur“ für den Mensch hinter dem Code.

```python:failsave.py
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
Funktion, welche Parameter erwartet sie, was gibt sie zurück - das sind die Fragen, deren Antworten sich oft einfacher
und schneller aus etwas Text ergeben.

Als Faustformel - stell dir einfach die Frage, ob wenn du in drei Monaten auf den Code schaust, du noch ohne Kommentar
verstehst bzw. was da stehen müsstest, damit du zumindest deinen eigenen Code wieder verstehst.

<Figure src="/images/kyo-7/Code-Kommentare.jpg" alt="Da wäre ein Kommentar hilfreich gewesen..."/>

Daneben kann man Kommentar super nutzen, um Teile des Codes kurz nicht zu verwenden, ohne sie gleich löschen zu müssen.
PyCharm macht es Dir da einfach: Markiere den entsprechenden Code und gib Strg+\# ein und der Code wird auskommentiert.
Machst du das mit auskommentierten Code, wird er wieder aktiv.

<Figure src="/images/kyo-7/help-2444110_1280_a.png" alt="Dir wird geholfen."/>

Wo kannst du Dir Hilfe außerhalb der CoderDojo-Termine holen? Zu aller erst natürlich in unserem
[Matrix-Kanal](https://matrix.to/#/#coderdojo:matrix.cyber4edu.org).

- Falls du ein Freund von Büchern bist, würden wir Dir am Anfang folgendes empfehlen:

  - als Anfängerlektüre: Hauke Fehr, \<Let`s code\> Python

  - zum Nachschlagen: Johannes Ernesti, Python3

  - zum Üben: Luigi Lo Iacono, Stephan Wiefling und Michael Schneider, Programmieren trainieren

Viele Bibliotheken sind da gut ausgestattet. Schau da mal vorbei. Für die Berliner – welche Bibliothek was hat, kannst
du Dir aus [voebb.de](https://voebb.de) anschauen. Gerade die Berliner Stadtbibliothek in der Breite Straße, Nähe
Alexanderplatz, ist außergewöhnlich gut ausgestattet.

Als Webseiten empfehlen wir:

- [python-kurs.eu](https://python-kurs.eu)

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
