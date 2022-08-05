+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Eingaben

Jetzt wollen wir den/die Benutzer:in Einbinden. Die Eingabe einer Benutzerin weisen wir einfach einer Variable zu. Und
wir sagen dem Benutzer noch, was er oder sie hier eingeben soll. Das schaut so aus:

```python:request-number.py
userInput = input("Bitte gib eine Zahl ein: ")
userInput = int(userInput)
```

Die zweite Zeile nimm bitte erstmal hin, dazu kommen wir gleich. Wenn du an dieser willst, dass die Eingabe als Zahl
behandelt wird, brauchst du das. Jetzt bist du wieder dran. Kombiniere das gelernte. Frage die Benutzer:in nach zwei
Zahlen, addiere sie und gib sie aus. Wenn das funktioniert, lege um den Code eine For-Schleife herum, die dafür sorgt,
dass der Code dreimal ausgeführt wird. Teste ihn. Kommen beim zweiten Anlauf komische Ergebnisse heraus? Versuche
herauszubekommen, woran das liegt. Es hilft, sich bei jeder Zeile zu überlegen, was diese macht und welche Variablen
gerade welchen Wert haben (PyCharm wird Dir später dabei helfen). Falls du hier zu keinem Ergebnis mehr kommst, lass uns
in einem virtuellen CoderDojo gemeinsam drauf schauen. Probiere auch mal aus, was passiert, wenn man einen Buchstaben,
statt eine Zahl eingibt. Wie man solche Fehleingaben der Benutzenden verhindert, kommt etwas später.