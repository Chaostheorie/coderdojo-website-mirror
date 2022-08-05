+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Rechnen

Computer heißen nicht umsonst auch Rechner. Der Begriff kommt übrigens nur scheinbar aus dem Englischen - er leitet sich
vom lateinischen Verb computare ab, was nichts anderes als rechnen heißt. Zurück zum Rechnen: Die „üblichen“
Rechenoperationen funktionieren hier natürlich auch. Das wollen wir uns mit ein wenig Code anschauen. Lösch Deinen
bereits geschriebenen Code, schreib den Mustercode ab und schau Dir die Ausgabe an.

```python:addition.py
a = 10
b = 5
print("10 + 5 =", a + b)
```

Hier kurz die wichtigsten Rechenarten, die du in Python nutzen kannst:

- \+ addieren

- \- substrahieren

- \* multiplizieren

- / dividieren

- // Ganzzahldivision (teste 22/8 und 22//8)

- \% Modulo (gibt den ganzzahligen Rest als Integer aus, teste 22%8)

- \*\* für Potenzen, also 3-Quadrat ist 3\*\*2

Diese Klammern `(`, `)` kannst du auch verwenden. Wie beim Taschenrechner werden „Kommazahlen“ mit einem Punkt
ausgegeben. Spiele damit ein wenig rum und probiere auch mal aus, ob die Regle Punkt-vor-Strich beachtet wird und wie
mit Klammern diese Regel „umgangen“ werden kann und wie es sich mit Potenzen verhält.

Versuche bitte Folgendes auszurechnen:

$$
\left(\LARGE{ \frac{1}{2} - \frac{1}{4} + \frac{4+3}{8} }\right) * 2
$$

Wenn du richtig gerechnet hast, sollte 2.25 rauskommen. Wenn nicht, hast du vielleicht ein falsches Rechenzeichen
gesetzt oder die Klammern nicht richtig positioniert.

Es gibt noch mehr Möglichkeiten, wie beispielsweise Wurzelziehen. Dafür muss aber ein zusätzliches Modul eingebunden
werden. Dazu kommen wir noch.