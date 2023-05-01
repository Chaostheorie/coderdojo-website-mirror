+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# 7. Kyo – Weißgurt

:::info Hinweis
Der Text hat bestimmt noch Ecken und Kanten. Wenn du Fehler entdeckst, Teile unverständlich findest oder Ideen für bessere und mehr
Beispiele und Übungen hast, lass es uns bitte wissen, damit wir ihn korrigieren und verbessern können.
:::

> Am liebsten erinnere ich mich an die Zukunft.
>
> _Salvador Dali_

## Inhalt - was werden wird

Willkommen im ersten Teil. Wenn du „Überblick Dojo“ noch nicht gelesen hast, mach das bitte mal. Da steht, was du so
brauchst, um hier gleich mit PyCharm und Python durchstarten zu können.

## Hello World

:::tip Notiz
Natürlich können auch andere IDEs genutzt werden, aber unsere Erklärungen beziehen sich nur auf PyCharm, um es
übersichtlicher zu halten. Im Weißgurt sollte es auch ganz gut ohne IDE (wie PyCharm) gehen. Du kannst im Browser
programmieren. Dazu bietet sich beispielsweise ein [Python Jupyter-Notebook](https://jupyter.org/try-jupyter/retro/notebooks/?path=Untitled.ipynb) an.
Spätestens ab dem Gelbgurt
solltest du mit PyCharm oder einer vergleichbaren IDE arbeiten.
:::

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
