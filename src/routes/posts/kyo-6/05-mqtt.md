+++
title = "6. Kyo"

color = "#FFFF00"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

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
