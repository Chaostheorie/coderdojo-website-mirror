+++
title = "6. Kyū"

color = "#FFFF00"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Git - Klappe die zweiten

Gleich wollen wir anfangen, unsere App bereit machen, über ein Netz mit anderen Teilnehmenden zu kommunizieren. Jetzt
solltest du aber mit Deinem aktuellen Code eine Version haben, die funktioniert und lokal läuft. Also bauen wir gerade
eine neue Funktion ein. Es ist immer ganz nett, wenn man einmal den Stand von einem Stück Code hat, der läuft, dass man
eine neue Funktion nicht direkt dort einbaut. Denn wenn es blöd läuft, zerschießt man sich durch rumprobieren die
funktionierende Version. Jetzt könnte man den Code in eine neue Datei kopieren und in der Kopie arbeiten. Wenn du mit
vielen Dateien arbeitest, wird das schnell unübersichtlich. Du kannst auch nicht mehr nachvollziehen, was du wo wie
geändert hast. Und mir mehreren Menschen gemeinsam ist das auch kein gutes Verfahren. Hier kommt wieder git ins Spiel.

Man kann verschiedene Zweige seines Codes anlegen. Der Hauptzweig heißt üblicherweise „main“. Veraltet findest du auch
noch die Bezeichnung „master“, der Begriff steht aber im Zusammenhang mit Master/Slave und sollte deshalb nicht mehr in
solchen Zusammenhängen verwendet werden. Du könntest jetzt einen zweiten Zweig „testing“ schaffen oder - vielleicht hier
passender - „network“. Wenn die Netzwerkanbindung dann mal läuft, kann die Funktion in den Hauptzweig integriert werden.
Und bis dahin bleibt das Programm in „main“ unangetastet. Wir zeigen dir das mal in einem kleinen Beispiel wie das geht.
Versuche das bitte erst einmal mit so einem einfachen Beispiel nachzuvollziehen, bevor du das dann mit deinem Spiel-Code
machst.

Der einfachste Weg ist, bei codeberg ein neues Projekt anzulegen. Uns geht es jetzt nicht um Code, deshalb hatten wir es
schlicht. Log dich ein und klicke auf das Pluszeichen neben Repositories. Der Maus-over sagt auch „Neues Repository“. Da
gibst du einen Namen ein wie „helloWorld“ und scrollst bis an das Ende der Seite und klickst auf anlegen. Jetzt hast du
die Möglichkeit, das Repository zu klonen, also lokal bei Dir abzulegen. Wir zeigen dir jetzt die Wege über PyCharm und
über die Kommandozeile parallel. Wenn möglich, probierst du auch beide aus...

<Figure src="/images/kyu-6/git-2-klonen-crop.png" alt="Git klonen" />

Zunächst die ersten Schritte auf Shell:

Du holst das Projekt auf deine Platt, indem du es klonst: `git clone 'URL' `. Du stellst sicher, dass du auf der branch
„main“ bist mit dem Befehl: `git branch -b main`. Jetzt legst du mit einem einem Editor eine Datei an und haust da eine
Zeile Code rein: `nano helloWorld.py` und schreibst da `print("Hello World")` rein. Abgespeichert wird mit Strg+X oder
Control+X. Jetzt fügen wir die Datei hinzu und pushen sie gleich. Also kommt der bekannte Dreiklang:
`git add helloWorld.py`, `git comment -m "first commit"` und `git push`. Jetzt legen wir die neue Branch mit
`git branch -b main` an. Als nächstes verändern wir den Code und rufen die Datei erneut auf mit `nano helloWorld.py`.
Binde um die Zeile Code eine Schleife drum, die den Print-Befehl zehnmal ausgibt. Jetzt kommt wieder der übliche
Dreiklang: `git add helloWorld.py`, `git comment -m "first loop"` und `git push`.

Die gleiche Aktion in PyCharm:

Bei PyCharm schließt du dein aktuelles Projekt („File“ und „Close Project“). Jetzt hast du die Möglichkeit, ein neues
Projekt anzulegen. Du wählst die Möglichkeit „Get from VCS“. In die URL kannst du die URL eintragen, die du von deinem
neuen Projekt von Codeberg erhalten hast.

Leg eine neue Datei `helloWorld.py` an. Schreib `print("Hello World")` rein. Commite mit Strg+K und push darüber gleich.
Dann gehst du über das Menü auf 'Git' und 'New Branch'. Ergänze den Code um eine Schleife, die das print zehnmal
ausgibt. Commite und pushe wieder.

Und jetzt geht es zu Codeberg. Da findest du einmal:

<Figure src="/images/kyu-6/git-2-helloWorld-crop.png" alt="main branch" />

Jetzt klickst du die Datei an. Hier ist der Code aus der main-Branch. Über Branch kannst du die test-branch auswählen
und dir dort den Code anschauen.

<Figure src="/images/kyu-6/git-2-branch-test-loop-crop.png" alt="Branch wählen" />

Du erkennst also jetzt, dass du das Projekt mit zwei unterschiedlichen Codebasen fährst. Das ist cool! Und jetzt wollen
wir noch die zwei Zweige zusammenführen.

<Figure src="/images/kyu-6/git-2-klonen-crop.png" alt="Branch wählen" />

Du wechselst jetzt wieder auf die main-Branch und wirst dort das Feld „Neuer Pull-Request“ angezeigt bekommen. Das
klickst du jetzt an. Jetzt kannst du auswählen, welche Branch du mit welcher zusammenführen willst. In unserem Fall ist
das Ziel main und du pullst von test-loop.

<Figure src="/images/kyu-6/git-2-choose-branch-crop.png" alt="Branch wählen" />

Jetzt siehst du, wie sich der Code unterscheidet und du kannst kontrollieren, was du machen willst. Was du dort siehst,
ist eine sogenannte Diff-Ansicht. Die wird dir noch öfter begegnen. Wenn ein Minus dasteht, heißt das, die Zeile fällt
weg und mit Plus-Zeichen kommt eine Zeile hinzu. Mit „Neuer Pull-Request“ führst du den Pull-Request aus. Dann ist der
Branch test-loop leer und der Code ist im main-Branch gelandet. Voilà!

Diesen Pull-Request machst du natürlich erst, wenn du dir sicher bist, dass das neue Feature fehlerfrei läuft. In Teams
kann man damit auch schön regeln, dass Code kontrolliert wird - du darfst zwar regelmäßig den Pull-Request anstoßen und
dem Maintainer, also der Inhaberin eines Projekt sagen, dass du da was tolles im Angebot hast. Aber bestätigen dürfen
ihn nur die Maintainer.

Wenn du das Thema „Pull-Request“ nochmal anders beschrieben lesen möchtest, schau doch
[mal hier](https://www.atlassian.com/de/git/tutorials/making-a-pull-request).
