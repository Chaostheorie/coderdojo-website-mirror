+++
title = "7. Kyo"
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

Damit wir den Anfang einfach halten, wollen wir uns noch nicht darum rumschlagen, wie ein Webserver Internet-Seiten ausliefert. Auch das Thema CSS, falls Du davon schön gehört hast, wird erst im nächsten Kyo ein Thema. Du legst Dir zunächst eine neue Datei an. Geh einfach mit deinem Dateimanager (Windows Explorer, Linux meist Nautilus, Apple Finder) in dein Homeverzeichnis bzw. „Eigene Dateien“.

Windows: rechte Maustaste und „Neu“ und dann Textdokument. Wenn da jetzt nur „Neues Textdokument“ steht, musst du deinem Explorer noch etwas Anstand beibringen und dir auch die Dateiendung anzeigen lassen. Das geht wie folgt: Geh auf den Reiter „Datei“, dann auf „Ordner- und Suchoptionen ändern“, dann auf den Reiter „Ansicht” und dann nimmst du den Haken bei „Erweiterungen bei bekannten Datentypen ausblenden“ weg. Wenn du jetzt eine Datei anlegst, sollte da „Neues Textdokument.txt“ stehen. Daraus machst du „index.html“.

Linux und Mac: Terminal aufmachen und den Befehl „touch index.html“ eingeben. Fertig.

Alternativ: Nimm PyCharm, rechte Maustaste in einem Projekt, „New“ und „html File”.

Wie auch immer du die Datei erstellt hast, öffnest du sie jetzt bitte mit PyCharm. Das ist jetzt nicht der ideale Editor für html. Aber wir wollen uns jetzt nicht noch um eine weitere Software kümmern. An sich kannst du zum Editieren alles nehmen, was nicht irgendwelche Sonderzeichen reinwirft. Also sowas wie Word ist in vielerlei Hinsicht gar keine gute Idee. Aber vim, Notepad, nano oder so geht gut.

Jetzt kommen wir zur ersten Besonderheit: Mit ganz wenigen Ausnahmen zeichnet sich html dadurch aus, dass es immer einen sogenannten öffnenden und einen sogenannten schließenden Tag [sprich Täg] gibt. Die Tags stehen in spitzen Klammern, schließende Tags haben zudem einen Querstrich bzw. Slash: <öffnender Tag> und </schließender Tag>. Das Grundgerüst einer html-Seite teilt sich auf in einen Kopf (engl. head) und einen Körper (engl. body). Und so schaut eine einfache Seite auch ganz schlicht aus:

```html
<html>
<head>
  <title>Titel: Hello World</title>
</head>
<body>
Hello World!
</body>
</html>
```

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
