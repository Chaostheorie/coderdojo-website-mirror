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

Bibliothek einbinden:

<Figure src="/images/workshops/arduino_I/31_rfid.png" alt="IDE Bibliotheksmanager" />

<Figure src="/images/workshops/arduino_I/32_rfid.png" alt="Bibliothek auswählen" />

Folgende Belegung musst du beachten:

- 53: SDA (Serial Data Line)
- 52: SCK (Serial Clock, auch SCL für Serical Clock Line)
- 51: MOSI (Master out -> Slave in)
- 50: MISO (Master in <- Slave out)
- : nicht belegt
- GND: GND (Ground)
- 5: RST (Reset)
- 3.3V: 3,3V

Das sind die Codesnippets die du brauchst, um das RFID-Lesegerät zum Einsatz zu bringen. Es handelt sich hier nur um Ausschnitte, du musst diese also selber ergänzen. Erläuterungen erfolgen im Workshop.

```c:rfid.c
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 53
#define RST_PIN 5

MFRC522 mfrc522(SS_PIN, RST_PIN); //Gerät benennen

void setup() {
  Serial.begin(9600); //Serielle Verbindung starten
  while ( !Serial); //warten
  SPI.begin(); //SPI-Verbindung aufbauen
  mfrc522.PCD_Init(); //Initialisierung
  delay(5);
  mfrc522.PCD_DumpVersionToSerial();
  Serial.println("Start");
}
void loop() {
  if ( ! mfrc522.PICC_IsNewCardPresent()) {
    return;
  } else {
    Serial.println("neue Karte gefunden");
  }
  if ( ! mfrc522.PICC_ReadCardSerial()) {
    return;
  } else {
    Serial.println("RFID Leser gefunden");
  }
  Serial.print("Die ID des RFID-Tags lautet:");
  // long code = 0;
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i], HEX);
    // code=((code+mfrc522.uid.uidByte[i])*10);
    Serial.print(" ");
  }
  Serial.println();
}
```

### Aufgabe

- Baue eine Zugangssteuerung. Wenn Deine Karte kommt, wird die Ampel grün, wenn sie rot war und rot, wenn sie grün war.

- Wird eine unbekannte Karte angehalten, blinkt gelb.

### Bildnachweis

LED:

Von Grapetonix - Eigenes Werk, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=4799036

Schaltzeichen:

Von Original uploader at de.wikipedia was MovGP0, additions (polarity): wdwd - File:Symbol LED.svg, Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=41616073
