+++
title = "6. Kyo"

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

<Figure src="/images/kyo-6/git-2-klonen-crop.png" alt="Git klonen" />

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

<Figure src="/images/kyo-6/git-2-helloWorld-crop.png" alt="main branch" />

Jetzt klickst du die Datei an. Hier ist der Code aus der main-Branch. Über Branch kannst du die test-branch auswählen
und dir dort den Code anschauen.

<Figure src="/images/kyo-6/git-2-branch-test-loop-crop.png" alt="Branch wählen" />

Du erkennst also jetzt, dass du das Projekt mit zwei unterschiedlichen Codebasen fährst. Das ist cool! Und jetzt wollen
wir noch die zwei Zweige zusammenführen.

<Figure src="/images/kyo-6/git-2-klonen-crop.png" alt="Branch wählen" />

Du wechselst jetzt wieder auf die main-Branch und wirst dort das Feld „Neuer Pull-Request“ angezeigt bekommen. Das
klickst du jetzt an. Jetzt kannst du auswählen, welche Branch du mit welcher zusammenführen willst. In unserem Fall ist
das Ziel main und du pullst von test-loop.

<Figure src="/images/kyo-6/git-2-choose-branch-crop.png" alt="Branch wählen" />

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

## MQTT

Jetzt wird es praktisch. Wir wollen ja unsere beiden Spielfiguren über das Netz verbinden. Wir nehmen dafür - tata - ein
Protokoll. Jetzt hast du ja schon eine grobe Ahnung, was ein Protokoll ist. In diesem Fall verwenden wir
[MQTT](https://de.wikipedia.org/wiki/MQTT), was für _Message Queuing Telemetry Transport_ steht. Das stammt von 1999,
ist also schon betagt. Es ist dafür geschaffen worden, damit Maschinen untereinander reden können. Durch IoT, also das
Internet der Dinge, hat das Protokoll erheblich an Bedeutung gewonnen. Es ist super, damit beispielsweise etwas wie
Sensoren Daten irgendwo hinsenden.

Hier wollt ihr mindestens zu zweit zocken. Aber da zwischen euch immer die Rechner hängen, reden am Ende doch die
Maschinen.. MQTT hat reservierte Ports auf 1883 und 8883. Auch damit kannst du jetzt schon was anfangen. MQTT kann über
TLS abgesichert werden. Den Fall wollen wir aber erstmal (noch) nicht betrachten. Eine Besonderheit bei MQTT ist, dass
es nicht einfach Daten zwischen zwei Punkten austauscht. Wie gesagt, eigentlich ist das für IoT gedacht. Deshalb gibt es
zu jeder Nachricht eine Überschrift, einen Topic. Das ganze ist dadurchz hierachisch aufgebaut. Stell Dir ein Fahrrad
vor, dass Sensoren hat von Licht, Reifenluftdruck, Abstand zu Autos rechts und links und so. Dann würde der
Reifenluftdruck für dein hinteres Rad gemeldet werden als Fahrrad/Rad/2/Luftdurck. Das Vorderrad hat dann
Fahrrad/Rad/1/Luftdruck. Das mag erstmal komisch ausschauen, ist aber total praktisch. Im Spiel könnten wir dann nämlich
sagen Arcarde/Spieler/Max/Standort, Arcade/Spieler/Max/Punkte oder Arcarde/Bots/12/Standort. Warum ist das praktisch?
Wenn du dir von allen Spielern den Standort ausgeben lassen willst, schreibst du Arcarde/Spieler/\*/Standort. Dann
empfängst du nur ihre Standortdaten, nicht aber ihren aktuellen Punktestand. Wenn dich aber alle Daten interessieren,
die Bot Nummer 12 präsentiert, schreibst du Arcarde/Bot/12/\*. Du musst dir also überlegen, was für Daten sollen
transportiert werden und wie können die vernünftig gegliedert werden. Einen Punkt wollen wir an dieser Stelle noch
erklären, die anderen kommen dann im laufenden Projekt.

Was fehlt uns jetzt noch? Wir brauchen für die Spielenden eindeutige Bezeichnungen. Da könnten wir darauf vertrauen,
dass die Spielerinnen schon immer andere abweichende Namen wählen. Oder einen Zufallsgenerator anwerfen. Aber für diesen
Fall gibt es eine eigene Funktion - die [UUID](https://de.wikipedia.org/wiki/Universally_Unique_Identifier), was für
*U*niversally *U*nique *Id*entifier steht. Dabei handelt es sich um eine 128-bit große Zahl, die zufällig generiert
wird. Die Chance ist recht gering, dass zweimal die gleiche Zahl auftaucht und gleichzeitig haben alle das selbe Format.
Das schaut dann ganz praktisch so aus:

```python:uuid.py
import uuid

localPlayerId = f"player-{uuid.uuid4().hex}"
```

<Figure src="/images/PyCharm_Icon.svg" float="right" alt="JetBrains PyCharm" />

Ach, ganz nebenbei - hast du schon gesehen,
wie Du so Snippets (engl. Schipsel) eben mal kurz testen kannst, ohne gleich ein Programm dafür anlegen zu müssen? Klick
in PyCharm auf _Python Console_ und probier das oben mal aus. Ergänze noch ein `print(localPlayerId)` und du kannst
gleich sehen, wie das ausschaut. Wenn du die Cursor-Taste hoch nimmst, kannst du auf die letzten Befehle zurückgreifen.
So kannst du zum Testen schnell mal ein `localPlayerId2 = f"player-{uuid.uuid4().hex}` anlegen und ausgeben lassen, ohne
alles nochmal schreiben zu müssen.

Für MQTT gibt es auch hier auch noch die Starthilfe:

```python:mqtt.py
import Examples.pyMqtt.mqttdatabus as mqttbus

mqttServer = "mqtt.eclipseprojects.io"
mqttTopicBase = "coderdojo/arcade"
mqb = mqttbus.MqttDataBusMessage(localPlayerId, mqttTopicBase, server=mqttServer)
mqb.startDataBus()
```

[Eclipse](https://de.wikipedia.org/wiki/Eclipse_Foundation) ist eine gemeinnützige, belgische Organisation, die eine
Plattform für die Entwicklung von Software. Am bekanntesten ist ihre gleichnamige IDE - also wie PyCharm-, die vor allem
unter Java-Entwickler:innen beliebt ist. Eclipse stellt freundlicherweise einen MQTT-Server zur freien Verfügung. Gerne
setzen wir später auch mal zusammen einen eigenen auf. Jetzt wollen wir erstmal unseren Fokus auf die Nutzung legen. Du
siehst, dass eine Bibliothek für die Nutzung von MQTT importiert wird. Danach wird der Server und der Topic definiert.
Das ganze bauen wir zusammen und stellen dann eine Verbindung her. Jetzt müssen wir noch die Koordinaten übertragen. Die
x/y-Koordinaten deiner Figur kennst du. So sendest du sie:

```python:mqtt_send.py
mqttBus.sendData(
                f"""{{
                    "x": {x},
                    "y": {y}
                }}"""
            )
```

Für deine Mitspielerin musst du jetzt erstmal mitkriegen, welche Spieler gerade dabei sind und wo sie sich befinden. Wir
fassen zwar erstmal alle möglichen IDs ab, aber im ersten Schritt solltest du davon ausgehen, dass nur ein Mitspieler
dabei ist. Wenn du eine coole Socke bist, kannst du natürlich im nächsten Schritt den Fall implementieren, dass sich
mehr als zwei Spielerinnen treffen. So könntest Du rauskriegen, welche Spieler versammelt sind:

```python:mqqt_which_user.py
foo
```

Der Rest folgt bald...