+++
title = "Workshops"
color = "#fff"
created = 2024-03-01
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Arduino II

:::tip Info
Wie unschwer zu sehen ist - dieses Kapitel ist gerade im Entstehen... hab bitte noch einen Moment Geduld, bis es vollständig ist.
:::

## Wiederholung und Vertiefung

- Grundstruktur Sketch

- Datentypen: int, float, bool, array

- Zuweigung mit a = 0;

- Iterieren mit a++;

- Kontrollstrukturen

```c:controll.c

if (Bedigung) {
  foo
}
else if (Bedigung 2) {
  bar
}
else {
  Rest
}

```

- Vergleichsoperatoren:

  - x == y (x ist gleich y)

  - x != y (x ist nicht gleich y)

  - x < y (x ist kleiner als y)

  - x > y (x ist größer als y)

  - x <= y (x ist kleiner als oder gleich zu y)

  - x >= y (x ist größer als oder gleich zu y)

- Boolsche Operatoren:

  - if (!x): ungleich
  - if (a == 2 && b == 2): und
  - if (a > 2 || b > 2): oder

## LCD

- „LiquidCrystal I2C“ von „Frank de Brabander”

Jetzt auf zum Code:

```c:helloWorld.c

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  lcd.setCursor(0, 0);
  lcd.print("Hello World");
  lcd.setCursor(0, 1);
  lcd.print("Mit Code die Welt verbessern");
}

```

### Bildnachweis

./.
