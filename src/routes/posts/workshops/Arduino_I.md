+++
title = "Workshops"
color = "#fff"
created = 2024-03-01
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Arduino für Anfänger:innen

## Grundaufbau

<Figure src="/images/workshops/arduino_I/01_grundaufbau.png" alt="Grundaufbau" />

## LED

<Figure src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Uvled_highres_macro.jpg/266px-Uvled_highres_macro.jpg" alt="LED" />

Schaltzeichen:

<Figure src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Symbol_LED_%2B-.svg/320px-Symbol_LED_%2B-.svg.png" alt="Schaltzeichen LED" />

Umbau:

<Figure src="/images/workshops/arduino_I/02_grundaufbau.png" alt="Grundaufbau" />

<Figure src="/images/workshops/arduino_I/03_grundaufbau.png" alt="Grundaufbau" />

- 3,3 Volt - Plus - rot
- GND - Minus - schwarz

## Widerstand

<Figure src="/images/workshops/arduino_I/04_grundaufbau.png" alt="Grundaufbau" />

## Aufbau für ansteuerbare LEDs

<Figure src="/images/workshops/arduino_I/05_grundaufbau.png" alt="Grundaufbau" />

## IDE

<Figure src="/images/workshops/arduino_I/11_arduinoIDE.png" alt="Grundaufbau" />

## Coding

Erster Code...

```c:ampel.c
#define LED 1

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
 }

```

Was passiert hier jeweils?

Code erweitern...

```c:ampel.c
#define LED 1

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(500);
 }

```

## Umbau auf Ampel

<Figure src="/images/workshops/arduino_I/22_coding.png" alt="Grundaufbau" />

```c:ampel.c
#define RED 1
#define YELLOW 2

... du bist dran

```

Du bist dran...

Bitte verwende das Ampelelement aus dem Kasten. Verkabel es und sorge dafür, dass die Lichter wie eine Ampel leuchten. Die Reihenfolge
ist:

- Grün (lange)

- Gelb (kurz)

- Rot (lange)

- Rot-Gelb (kurz)

- Grün (lange)

## Bedarfsampel

Wir wollen die Ampel zu einer Bettelampel umbauen. Es wird also noch ein Schalter ergänzt, der die Ampel nach einer Wartezeit auf Grün schaltet und später wieder auf Rot.

So sieht die Schaltung aus:

<Figure src="/images/workshops/arduino_I/23_coding.png" alt="Bedarfsampel" />

Du brauchst einen 1kΩ-Widerstand - der hat die Ringe Schwarz-Braun-Orange-Silber.

Diese Code-Snippets brauchst du, um selbstständig die Ampel programmieren zu können. Die neuen Ausdrücke wie int oder if/else erläutern wir im Workshop selbst. Das Zeichen [...] steht für eine Auslassung. Da muss also Code von dir hin.

```c:bedarfsampel.c
[...]
int status=0;

void setup() {
  pinMode(BUTTON, INPUT);
  [...]

void loop() {
  status=digitalRead(BUTTON);
  if (status == HIGH) {
    digitalWrite(RED, HIGH);
    [...]
   }
  else { [...] }

```

## RFID

### Bildnachweis

LED:

Von Grapetonix - Eigenes Werk, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=4799036

Schaltzeichen:

Von Original uploader at de.wikipedia was MovGP0, additions (polarity): wdwd - File:Symbol LED.svg, Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=41616073
