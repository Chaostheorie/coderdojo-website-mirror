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

## Neigungssensor

<Figure src="/images/workshops/ardunino_II/Grundaufbau_Steckplatine.png" alt="Grundaufbau Neigungssensor" />

<Figure src="/images/workshops/ardunino_II/Grundaufbau_mit_Code_Steckplatine.png" alt="Grundaufbau Neigungssensor mit Code" />

```c:Neigungssensor.c

int LED=6;
int SENSOR=7;
int NEIGUNG=0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(SENSOR, INPUT);
}

void loop() {
  NEIGUNG=digitalRead(SENSOR);

  if (NEIGUNG == HIGH) {
  ab hier bist Du dran!

}

```

## Piezo

<Figure src="/images/workshops/ardunino_II/Buzzer_Steckplatine.png" alt="Piezo" />

```c:PiezoSimple.c
int piezo = 5;

void setup() {
  pinMode(piezo, OUTPUT);
}
void loop() {
  digitalWrite(piezo, HIGH);
  delay(1000);
  digitalWrite(piezo, LOW);
  delay(1000);
 }

```

```c:PiezoExtended.c

int piezo = 5;

void setup() {
  digitalWrite(piezo, OUTPUT);
}

void loop() {
  tone(piezo, 523, 1000); // Port, Frequenz, Dauer
  delay(1000);
  noTone(piezo);
  delay(1000);
}

```

## Bewegungssensor

<Figure src="/images/workshops/ardunino_II/Bewegung_mit_Buzzer_Steckplatine.png" alt="Bewegungssensor" />

```c:MotionSensor.c
int piezo = 5;
int bewegung = 2;
int bewegungsstatus = 0;

void setup() {
  pinMode(piezo, OUTPUT);
  pinMode(bewegung, INPUT);
}

void loop() {
    bewegungsstatus=digitalRead(bewegung);
    if (bewegungsstatus == HIGH) {
      digitalWrite(piezo, HIGH);
      delay(1000);
      digitalWrite(piezo, LOW);
    }
    else {
      digitalWrite(piezo, LOW);
    }
}

```

## LCD

<Figure src="/images/workshops/ardunino_II/Arduino_LCD_I2C.png" alt="LCD-Display" />

- Verkabelung:

- LCD GND -> Arduino GND
- LCD VCC -> Arduino 5V
- LCD SDA -> Arduino SDA (SDA = serial data)
- LCD SCL -> Arduino SCL (SCL = serial clock)

- „LiquidCrystal I2C“ von „Frank de Brabander”

Jetzt auf zum Code:

```c:LCD.c

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

## Aufgabe Teeuhr

Schreibe ein Programm, welches damit anfängt, die Zahl 0 anzuzeigen und jede Sekunde um 1 hochzählt.
Wenn 30 Sekunden um sind, wird auf dem Display „Tee fertig“ angezeigt.

## Ultraschallsensor

<Figure src="/images/workshops/ardunino_II/Ultraschall_Steckplatine.png" alt="Ultraschallsensor" />

```c:Ultrasonic.c

int trigger = 7;
int echo = 6;
long dauer = 0;
long entfernung = 0;

void setup() {
  Serial.begin (9600);
  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);
}

void loop() {
  digitalWrite(trigger, HIGH);
  delay(10);
  digitalWrite(trigger, LOW);
  dauer = pulseIn(echo, HIGH);
  entfernung = (dauer/2) * 0.03432;

  hier muss noch eigener Code folgen...

}

```

## Aufgabe 1 - Ultraschallsensor

Stelle die gemessene Entfernung in cm auf dem Display dar.

## Aufgabe 2 - Ultraschallsensor

Baue einen Abstandswarner. Eine Ampel soll bei über 50cm grün, bei 49 bis 15cm gelb und darunter rot werden. Wenn die Ampel rot wird, soll zudem einen schwankender Warnton abgegeben werden.
