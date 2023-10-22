+++
title = "6. Kyū"

color = "#FFFF00"
date = 2022-10-28
description ="Arduino programmieren"
+++

<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Figure from '$lib/components/Figure.svelte';
    import UserRectangle from "phosphor-svelte/lib/UserRectangle";
</script>

# Arduino programmieren

:::tip Info
Dieser Teil ist Bestandteil eines unserer Präsenz-Workshops. Dort verfügen wir auch über einen entsprechenden Satz von Arduionos. Wenn du keinen Präsenz-Workshop von uns besuchen kannst, brauchst du für dieses Kaptel einen Arduiono 2560 R3 und ein wenig Elektronik-Zubehör. Auf deinem Rechner muss eine Arduino-IDE installiert sein.

Wir bauen diese Seite und den dazugehörigen Workshop gerade auf. Das ist hier also gerade eher Alpha- als Betastadium..
:::

## Arduino prorammieren

Der Arduino wird in der Programmiersprache C programmiert. Im Vergleich zu Python, mit dem du bis jetzt gearbeitet hast, gibt es drei wesentliche Unterschiede:

- Bei Python wird das Programm von einem Interpreter zur Laufzeit in Maschinensprache übersetzt. Also während der Code läuft, wird er in die Sprache, die der Rechner eigentlich versteht, gedolmetscht. Bei C müssen dagegen alle Programme vorab mit Hilfe eines sogenannten Compilers übersetzt werden. Das klingt erstmal lästig. Der Vorteil ist aber, dass der Compiler dir ggf. gleich Fehlermeldungen liefert.

- Zeilen enden regelmäßgi mit einem Semikolen und Blöcke werden mit geschwungenen Klammern umschlossen. Der häufigste Fehler der dir gerade am Anfang vermutlich unterlaufen wird, ist, dass Semikolon am Ende einer Zeile zu vergessen...

- Variablen müssen zuerst deklariert werden. In C musst du also am Anfang sagen, welche Variablen du verwenden willst und welchen Typ sie haben.

### Wie deklariere ich Variablen?

Du kennst schon verschiedene Datentypen aus Python. Da wird dir jetzt gleich vieles bekannt vorkommen. Ein Integer heißt in C 'int'. Im Code schreibst du einfach:

```c

int mustervariable;

```

Die Variable kannst du gleich initialisieren, ihr also einen Anfangswert mitgeben. Dann schaut es so aus:

```c

int mustervariable = 1;

```

Folgende weitere Typen solltest du kennen:

- int: Der Integer umfasst die Zahlen von -32.768 bis 32.767. Er braucht 16 Bit Speicherplatz.

- unsigned int: Das sind Integer, der kein Vorzeichenlos ist. Das spart im Vergleich zum int 2 Byte.

- byte: Das ist wie ein int, aber reicht nur von 0 bis 255. Das spart im Vergleich zu int Speicherplatz. Er verbraucht 8 Bit bzw. ein Byte.

- long: Das Gegenstück zu byte - dieser Typ ist größer als ein Integer. Er reicht von 2.147.483.648 bis 2.147.483.647. Er verbraucht 32 Bit Speicher.

- float: Wie in Python für sogenannte Gleitkommazahlen, also bsp. 3.14. Er verbraucht 32 Bit.

- boolean: Kennst du aus Python. Hier geht entweder true oder false - anders als bei Python kannst du auch 0 und 1 verwenden.

- char: Character für einzelne Buchstaben. Der verbraucht 8 Byte bzw. einen Byte.

Wenn du eine Variable einmal definierst und sie im ganzen Code nicht mehr verändert wird und auch nicht verändert werden können soll, dann kennt C dafür (leider nicht Python) Konstanten. Das schaut so aus:

```c

const int musterkonstante;

```

Für den Arduino gibt es ein paar besondere Konstanten, die du gleich am Anfang kennen lernen solltest:

- HIGH und LOW: Strom an- und ausschalten

- INPUT und OUTPUT: für die Eingänge und Ausgänge

- LED_BUILTIN: für die LED auf dem Arduino-Board-LED

Genug der grauen Theorie. Bitte die Arduiono IDE. Wir lassen erstmal die LED auf dem Board selber leuchten.

```c

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);

}

```

Wenn du den Code compilierst und dann auf den Arduino hochlädst, sollte die LED auf dem Board blinken. Was passiert bei dem Code?

Die Grundstruktur eines jeden Arduino-Programms besteht aus zwei Teilen: Einmal dem Setup und einer Schleife (loop). Im Setup-Teil werden die Variablen und Konstanten deklariert und alle Komponenten initialisiert. Wenn du beispielsweise einen Bewegungssensor dranbaust, sagst du dem Board an dieser Stelle.

Der Loop bzw. die Schleife entspricht einem „While True:“ in Python. Er wird immer wieder durchlaufen.

GPIO steht für General Purpose Input/Output. Das heißt wörtlich übersetzt Allzweckeingabe/-ausgabe. Das sind durchnummerierten Pins auf deinem Arduino. Darüber können Daten ein- und ausgelesen werden. Mit digitalWrite wird ein Zustand auf einen bestimmten Pin geschrieben. Umgekehrt wird mit digitalRead etwas vom Pin gelesen. Digital heißt - es gibt an oder aus, oder eben HIGH bzw. LOW. Der erste Wert in der Klammer sagt dir, welcher Pin angepsrochen wird. LED_BUILTIN steht für Pin 13. Das kannst du einfach testen, indem du dir zwei Kabel, einen 100 Ohm Widerstand und eine blaue LED nimmst. Die schließt du wie dargestellt an:

<Figure src="/images/kyu-6/arduino/one_LED.svg" alt="eine LED" />

Und der delay-Befehl entspricht einem time.sleep unter Python.

Eine LED blinkt. Damit haben wir noch nicht viel gewonnen. Als nächstes kommt ein Blinklicht.

<Figure src="/images/kyu-6/arduino/two_LED.svg" alt="zwei LEDs" />

Dafür nutzen wir jetzt gleich die Definition von Variablen. Das passiert über dem Setup-Teil. Du kannst mit 'int LED_1 = 12; ' dir eine Variable definieren, die über den GPIO 12 angesprochen wird. Sowas brauchst du auch noch für Pin 13. Alles klar? Stecke alles wie in der Grafik angezeigt und schreibe den Code dazu. Du kannst schon alles, was du dazu brauchst.

```c
int LED_1 = 12;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {
  digitalWrite(LED_1, HIGH);
  delay(500);
  digitalWrite(LED_1, LOW);
  delay(500);

}

```

Das wäre die eine Möglichkeit. Die etwas elegantere ist \#define zu benutzen. Der Compiler ersetzt beim Compilieren den Teil, der in define angeführt wird. Du brauchst also keine Variable. Warum ist das eleganter? Weil für jede Variable Speicherplatz reserviert werden muss (üblicher ist der Begriff allokieren). Bei den handelsüblichen PCs mag das keine Rolle spielen. Wenn wir uns aber um so kleine Schätze wie den [ATTiny85](https://coderdojo.red/posts/kyu-6/60-loeten/#attiny-programmieren) kümmern - dann wird ist das wichtig. Das ganze sähe dann so aus:

```c
#define RED_PIN 12

void setup() {
  pinMode(RED_PIN, OUTPUT);

}

void loop() {
  digitalWrite(RED_PIN, HIGH);
  delay(500);
  digitalWrite(RED_PIN, LOW);
  delay(500);

}

```

Bau mal den Code um für deine zwei LEDs. Geschafft?

Dann auf zur nächsten Stufe. Nimm dir die Ampel-LED aus dem Kasten, verkabel diese und bau den Code so um, dass die Ampel wie eine Verkehrsampel leutet. Wenn du da mal drauf achtest - da leuchtet nicht immer nur eine Farbe. Die Schaltung geht Rot - Rot und Gelb - Grün - Gelb und von vorne. Du kannst schon alles, um das umzusetzen. Nur Mut und ran ans Werk!

> War es das schon mit dem Gelbgurt? Mitnichten! Aber wir erarbeiten gerade das Programm. Es lohnt sich immer wieder
> vorbeizukommen, da wir die Seite Stück für Stück ergänzen.
