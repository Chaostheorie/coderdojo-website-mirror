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

Widerstand:

<Figure src="/images/workshops/arduino_I/03_grundaufbau.png" alt="Grundaufbau" />

- 3,3 Volt - Plus - rot
- GND - Minus - schwarz

## Widerstand

<Figure src="/images/workshops/arduino_I/04_grundaufbau.png" alt="Grundaufbau" />

## IDE

<Figure src="/images/workshops/arduino_I/11_arduino_IDE.png" alt="Grundaufbau" />

## Coding

Erster Code...

```c
#define LED 1

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
 }

```

Was passiert hier jeweils?

## Bildnachweis

LED:

Von Grapetonix - Eigenes Werk, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=4799036

Schaltzeichen:

Von Original uploader at de.wikipedia was MovGP0, additions (polarity): wdwd - File:Symbol LED.svg, Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=41616073
