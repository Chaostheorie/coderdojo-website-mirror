+++
title = "7. Kyū"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## html

:::tip Info
Dieses Kapitel ist gerade im Entstehen... hab bitte noch einen Moment, bis es vollständig ist.
:::

Dieses Python ist ja ganz hübsch, magst du dir denken. Aber eigentlich würdest du doch gerne auch mal was im Internet machen. Alle Seiten, die du im Internet siehst, basieren auf html. Die vier Buchstaben stehen für Hypertext Markup Language, was man irgendwie mit „Auszeichnungssprache für Texte mit dynamischer Struktur“ übersetzen könnte. Aber Moment - jeder Gurt eine zusätzliche Programmiersprache. Sind wir im ersten Gurt und hier kommt die zweite Sprache? Bei html handelt es sich um eine Seitenbeschreibungssprache. Hier wird also nicht im eigentlichen Sinne programmiert. Deswegen nehmen wir die ersten Elemente gleich in den Weißgurt mit rein.

Damit wir den Anfang einfach halten, wollen wir uns noch nicht darum rumschlagen, wie ein Webserver Internet-Seiten ausliefert. Auch das Thema CSS, falls Du davon schön gehört hast, wird erst im nächsten Kyū ein Thema. Du legst Dir zunächst eine neue Datei an. Geh einfach mit deinem Dateimanager (Windows Explorer, Linux meist Nautilus, Apple Finder) in dein Homeverzeichnis bzw. „Eigene Dateien“.

Windows: rechte Maustaste und „Neu“ und dann Textdokument. Wenn da jetzt nur „Neues Textdokument“ steht, musst du deinem Explorer noch etwas Anstand beibringen und dir auch die Dateiendung anzeigen lassen. Das geht wie folgt: Geh auf den Reiter „Datei“, dann auf „Ordner- und Suchoptionen ändern“, dann auf den Reiter „Ansicht” und dann nimmst du den Haken bei „Erweiterungen bei bekannten Datentypen ausblenden“ weg. Wenn du jetzt eine Datei anlegst, sollte da „Neues Textdokument.txt“ stehen. Daraus machst du „index.html“.

Linux und Mac: Terminal aufmachen und den Befehl „touch index.html“ eingeben. Fertig.

Alternativ: Nimm PyCharm, rechte Maustaste in einem Projekt, „New“ und „html File”.

Wie auch immer du die Datei erstellt hast, öffnest du sie jetzt bitte mit PyCharm. Das ist jetzt nicht der ideale Editor für html. Aber wir wollen uns jetzt nicht noch um eine weitere Software kümmern. An sich kannst du zum Editieren alles nehmen, was nicht irgendwelche Sonderzeichen reinwirft. Also sowas wie Word ist in vielerlei Hinsicht gar keine gute Idee. Aber vim, Notepad, nano oder so geht gut.

Jetzt kommen wir zur ersten Besonderheit: Mit wenigen Ausnahmen zeichnet sich html dadurch aus, dass es immer einen sogenannten öffnenden und einen sogenannten schließenden Tag [sprich Täg] gibt. Die erste Ausnahme für einen Tag der nicht geschlossen wird, siehst du gleich im nächsten html-Beispiel in der ersten Zeile. Die Tags stehen in spitzen Klammern, schließende Tags haben zudem einen Querstrich bzw. Slash: <öffnender Tag> und </schließender Tag>. Im öffnenden Tag steht, was jetzt eigentlich gemacht werden soll, beispielsweise die Schrift fett drucken. Zwischen den Tags befindet sich der Bereich, für den das gelten soll.

Das Grundgerüst einer html-Seite teilt sich auf in einen Kopf (engl. head) und einen Körper (engl. body). Und so schaut eine einfache Seite auch ganz schlicht aus:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titel: Hello World</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

Der erste Tag zeigt dem Browser, dass hier ein html-Dokument kommt. Das kann auch ohne gut gehen, kann aber auch schief gehen, weil der Browser vielleicht glaubt, hier ein pdf-Dokument auswerten zu wollen. Deshalb besser immer setzen. Dieser Tag wird wie bereits gesagt nicht geschlossen.

Der erste Tag sagt nachher dem Browser das hier html gesprochen werden soll. head und body definieren einen Teil der Seite. Das meiste wirst du in den body-Teil schreiben. In den Kopf kommt aber title bzw. der Titel rein. Der erscheint später oben in der Zeile von deinem Browser. Und im Body erscheint der Inhalt. Im Gegensatz zu Python haben die Einrückungen keine Bedeutung. Sie dienen nur der besseren Übersichtlichkeit. „Nur“ trifft es in dem Zusammenhang nicht ganz - wenn du erstmal vor längeren Seiten sitzt, wirst du sauberes Einrücken zu schätzen wissen.

Wie rufst du die Seite jetzt auf? Öffne LibreWolf oder einen anderen Browser. Eine Datei kannst du mit Strg+o öffnen. Geöffnet? Dann sollte dir jetzt ein „Hello World“ entgegenleuchten.

Entgegenleuchten ist vielleicht etwas zu optimistisch. So richtig knallig ist das nocht nicht. Macht wir noch eine Überschrift dazu. Probiere mal den body zu ergänzen:

```html
<body>
  <h1>Projekt html</h1>
  Hello World!
</body>
```

Im Browser reicht es, wenn du F5 oben bei deiner Tastatur drückst. Dann wird die Seite neu geladen. Zackbum müsste da jetzt eine Überschrift zu sehen sein. Probiere auch mal h2 bis h4 durch!

Als nächstes probiere mal bitte mit ein wenig eigenem Text folgende Tags aus, damit du siehst, was sie bewirken:

```html
<strong> Testtext </strong>

Normaler Text.

<b> Testtext </b>

Normaler Text.

<em> Testtext </em>

Normaler Text.

<i> Testtext </i>

Normal <sup> Testtext </sup>

Normal <sub> Testtext </sub>

<p>So erzeugt man einen Absatz.</p>

<p>Und so kommt ein neuer Absatz zustande.</p>
```

Okay, damit kann man schon ein wenig rumspielen. Ein paar wichtige Tags, die nicht geschlossen werden und kennen solltest kommen hier:

```html
Link zu <a href="https://coderdojo.red">Coderdojo.red</a> und Text nach dem Link.

<img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/First_Computer_Bug%2C_1945.jpg/304px-First_Computer_Bug%2C_1945.jpg"
  a="Beschreibung für das Bild"
/>

Damit wird über einen Link ein Bild eingebunden werden. Das Bild kann lokal, also auf der Platte des
Servers liegen, über die die Webseite ausgeliefert wird. Oder es kann extern liegen wie bei diesem
Beispiel. Die Beschreibung mit dem „a“ ist wichtig. Zum einen erscheint dieser Text als
Bildunterschrift selbst dann, wenn das Bild aus irgendeinem Grund nicht geladen werden kann. Und für
Menschen mit eingeschränkten Sehfähigkeiten, die das Bild nicht erkennen können, kann zumindest die
Bildunterschrift vorgelesen werden.

<hr />

Einfach probieren.

<br />

Sorgt für einen Zeilenumbruch. Dagegen sorgt der oben vorgestellte Tag
<p>mit</p>
für einen Absatz.

<!-- damit wird ein Kommentar erzeugt -->
```

Ein wichtiger Punkt bei html ist, dass Elemente in einander verschachtelt werden können. Beispielsweise willst du einen Link anzeigen, bei dem der Linktext teilweise fett dargestellt wird.

```html
Hier geht <a href="https://test.de">Link<b>text</b></a> los.
```

Okay - jetzt hast du schon einen ganzen Sack an Elementen für den Body kennen gelernt. Lass uns nochmal kurz zum Dokumentenkopf zurückwechseln. Hier macht es durchaus Sinn, noch ein paar Informationen über das Dokument unterzubringen. So kann der zu verwendende Zeichensatz von Beudeutung sein. Früher hat man statt ein „ß” zu schreiben &szuml; geschrieben. Das galt für alle Sonderzeichen - und in machen Sprachen werden die ja noch viel mehr verwendet als im Deutschen. Von Sprachen die keine lateinischen Lettern verwenden ganz zu schweigen. Damit die Darstellung dieser ganzen nunmehr klappt, solltest du dem Browser sagen, dass du UTF-8 verwendest. Das ist zur Zeit der Standard für die Darstellung, damit es mit Sonderzeichen klappt. Das Thema werden wir uns an anderer Stelle nochmal genauer anschauen. Dem Browser teilst du diese Info mit:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Titel: Hello World</title>
  </head>
  <body>
    Hello Wörld!
  </body>
</html>
```

Suchmaschinen wie DuckDuckGo kann man aktiv darüber informieren, was Lesende auf deiner Seite zu erwarten haben. So kann man im html-Tag sagen, ob die Seite beispielsweise in Deutsch verfasst ist. Das ginge so:

```html
<!DOCTYPE html>
<html lang="de">
  <head></head>
</html>
```

Im Falle von Englisch stünde dann bei lang die Eigenschaft „en“. Und im Kopf kannst du mit den Meta-Tags noch ein bisschen über dein Dokument verraten:

```html
<!DOCTYPE html lang="de">
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Eine Seite um html zu lernen" />
    <meta name="keywords" content="HTML, tutorial" />
    <meta name="author" content="Alexandra Mustermann" />
    <title>Einfach Wow!</title>
  </head>
  <body>
    HIer kommt viel Inhalt hin.
  </body>
</html>
```

Das soll es an Grundlagen für html schon gewesen sein. Mit dem hier gelernten kannst du schon komplette Seiten gestalten. Im nächsten
Kyū lernst du, wie du mit dem sogenannten CSS noch Form und Farbe in deine Seite bringst.
