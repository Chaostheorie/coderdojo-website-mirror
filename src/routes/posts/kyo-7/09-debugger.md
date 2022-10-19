+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Debugger

> "Außerdem müssen wir offen sagen: [...] Programmieren lernen tut weh, weil jeder daran scheitert, scheitert,
> scheitert - bis der Code funktioniert."
>
> [Prof. Dr. Doris Aschenbrenner](https://www.golem.de/news/informatik-professorin-im-portraet-programmieren-lernen-tut-weh-2110-160267.html)
> Professorin für Maschinenbau / Entwicklung: Design und Simulation an der Hochschule Aalen

Wenn du bis hierin gekommen bist, wirst du es schon erlebt haben - der Code will nicht laufen. Meist verbringt man mit
der Fehlersuche mindestens soviel Zeit wie mit dem eigentlichen Schreiben. Programmieren - nicht nur lernen - tut also
immer auch ein bisschen weh. Es lohnt sich trotzdem, weil es ein großartiges Gefühl ist, wenn es dann doch irgendwann
läuft. Es gibt Werkzeuge, mit denen man aber den Schmerz minimieren kann. Bug ist Dir sicherlich ein Begriff. Das steht
für einen Fehler. Fehler beseitigen nennt man debuggen und Programme, die einem dabei helfen, debugger. Wie setzt du in
PyCharm einen Debugger ein?

Nimm Dir mal das obigen Programm control-while-loop.py. Statt Run startest du es jetzt mal in PyCharm unter dem
Menüpunkt Run mit Debug. Da passiert jetzt erstmal nicht viel. Jetzt legst du dir vorher einen Stoppunkt fest, am besten
auf Zeile 3, also die mit dem input.

<Figure src="/images/kyo-7/Haltepunkt.png" alt="Um einen Halte- oder Stopppunkt zu setzen (der rote Kringel), klickst du einfach mit der Maus neben die Zeilennummer."/>

Jetzt startetst du nochmal mit debug. Huch - jetzt zeigt er dir an, welchen Wert i beim Auftreffen des Stopppunktes hat.
Das kann super praktisch sein, weil du so sehen kannst, wie sich Variablen verändern. Du kannst mit F9 oder in dem du
diesen weiterauführen lassen. Versuche bei den Programmen, die du ab jetzt schreibst, wenn du festhängst, mal mit diesen
Stopppunkten zu spielen. Es lohnt sich, für den Debugger ein Gefühl zu entwickeln. Du wirst sehen, dass er ein mächtiges
Werkzeug sein kann, um Fehler zu finden. Und wenn bei gemeinsamen Sitzungen kommt - wirf mal den Debugger an und setze
dort mal einen Stopppunkt - weißt du jetzt schon, was gemeint ist.

## Münzwechsler

Das nächste Programm soll eine Grundlage für einen Münzwechsler darstellen. Die Benutzerin gibt einen Geldbetrag von 1
bis 99 Cent ein. Der eingegebene Betrag soll dann in den Münzen mit 1, 2, 3, 10, 20 und 50 Cent ausgegeben werden - aber
bitte so, dass möglichst wenig Münzen benötigt werden.