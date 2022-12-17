+++
title = "7. Kyo"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Benennung von Variablen

Muss die Variable in der For-Schleife eigentlich ein „`i`“ sein? Nein. Erlaubt ist für Variablen eine Menge. Du kannst sie groß- und kleinschreiben,
Zahlen reinnehmen, Unterstriche dürfen auch drin sein. Python-Befehle dürfen nicht verwendet werden, da diese reserviert
sind (die lernst du jetzt mit der Zeit). Eine Variable darf jedoch nicht mit einer Zahl anfangen. Dann gibt es ein paar
Regeln, die zwar nicht zwingend sind, bei denen du aber mit Zeit immer mehr sehen wirst, dass es total Sinn ergibt, sich
diese von Anfang an anzugewöhnen:

Variablennamen sollten immer klein anfangen, außer es handelt sich um eine Klasse. Was
das ist, kommt ein ganzes Stück später. Merke Dir jetzt nur – sie beginnen mit einem kleinen Buchstaben. Für
Variablennamen, die aus mehreren Wörtern bestehen, gibt es zwei Möglichkeiten: `anzahl_Autos` – das nennt man
`snake_Case` oder `anzahlAutos` – das nennt man `CamelCase`. Bei Python wird `snake_Case` bevorzugt. Und Variablen
sollten einen zeigen, was sie beinhalten. Stell Dir vor, dass du Deinen Code nach einem Monat wieder anschaust. Dann
wäre es hilfreich, wenn du auf eine Variable schaust und eine Ahnung davon hast, wofür sie ist. In den Code dafür
komplett neu reindenken zu müssen, sollte nicht der Fall sein müssen.

Müsste es dann nicht besser „Schrittzähler“ statt „`i`“ heißen? Jein. Bei Schleifen und ähnlichen Konstruktionen gibt es
die Ausnahme von der Regel, dass `i` (und bei mehreren ineinander greifenden Schleifen `j`, `k` etc.) üblich sind. Auch in anderen Programmiersprachen.
Das gilt nicht nur für Python. Die Variablen sollten gleichzeitig möglichst kurz sein, damit man nicht so viel schreiben
muss, aber lang genug, dass man sie versteht. Das kommt also immer auf das konkrete Problem an. Wenn du drei Koordinaten
definieren willst, können `x`, `y` und `z` super Variablennamen sein. Wenn du aber mehrere hast, hilft `x1` und `x2`
vielleicht nicht mehr weiter, weil du jedes Mal neu überlegen musst, wofür `x1` und `x2` stehen sollte. Das ganze sind
keine starren Regeln. Du wirst sehen, dass wir gerade bei kleinen Codestücken uns ebenso nicht sklavisch daran halte.
Behalte sie jedoch im Hinterkopf und du wirst mit der Zeit ein Gefühl dafür gewinnen, wie gute Bezeichnungen aussehen.
Das mag sich an dieser Stelle noch komisch anhören, ist aber tatsächlich ein wichtiges Thema.

Und als letzte Regel – wähle die Namen möglichst in Englisch. Wenn Dein Englisch noch nicht so gut ist, ist das am
Anfang noch nicht so wichtig – aber eine gute Gelegenheit, die eine oder andere Vokabel zu lernen. Und später wirst du
in größeren Gruppen coden. Dank des Internets passiert das nicht unbedingt nur mit Menschen, die Deutsch sprechen.
Deshalb ergibt es Sinn, gleich alles in Englisch zu machen.
