+++
title = "7. Kyū"
color = "#fff"
created = 2021-12-07
draft = True
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Jetzt knallt ’s

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

```python:failsave.py
while True:
    try:
        print("Ich bin unaufhaltbar")
    except:
        print("Fehler!")
```

Hier kommst du regelmäßig nicht mehr aus dem Programm raus. Das Problem ist, dass du mit Strg-C den Code nicht gleich
abbrechen kannst. Nicht gut. Deshalb gewöhne Dir bitte an:

```python:failsave.py
while True:
    try:
        print("Ich bin nicht mehr unaufhaltsam")
    except Exception:
        print("Fehler!")
```

Jetzt wäre es ja noch hübsch, wenn er Dir anzeigte, was das für einen Fehler genau ist. Wir zeigen Dir hier an dieser
Stelle nur die quick-and-dirty-Variante, um es jetzt nicht zu überladen. Das ist kein guter Stil, aber kann hilfreich
sein:

Wir kommen im nächsten Kyū darauf zurück und werden das Thema vertiefen. Jetzt bist du dran: Bitte nimm Dir das Programm
für Kopfrechenübungen wieder vor, dass du gerade geschrieben hast. Sichere mit try-except ab, dass nur sinnvolle
Eingaben den Benutzenden verarbeitet werden. Weise die Benutzerin darauf hin, wenn eine Eingabe keinen Sinn ergibt. Gibt
dabei dem Benutzer unendlich viele Gelegenheiten, eine sinnvolle Eingabe (also einen Integer) zu machen. Dann mal ran an
die Tasten.
