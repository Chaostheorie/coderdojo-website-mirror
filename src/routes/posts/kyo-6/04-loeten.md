+++
title = "6. Kyo"

color = "#FFFF00"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# ATTiny löten

:::tip Info
Dieser Teil ist Bestandteil eines unserer Präsenz-Workshops. Wir werden die Inhalte dazu aber zeitnah online stellen.

Hier sind schon einmal die [Folien](https://coderdojo.red/images/kyo-6/ATTiny.pdf) des Workshops.
:::

## ATTiny Programmieren

In den Präsenz-Workshops geben wir dir am Ende des Lötteils zum Testen einen fertig programmierten ATTiny. Das ist aber
wie fertiger Kartoffelbrei - macht satt, aber nicht glücklich. Wir wollen den also selber programmieren. Dafür bedarf es
ein wenig Vorbereitung. Zum Coden installierst du dir am besten die [AVR IDE](https://www.arduino.cc/en/software). Wenn
du da Unterstützung brauchst, stehen wir dir bei den Workshops oder donnerstags gerne zur Seite. Zum Testen des Codes
schaffst du dir ein Konto auf [Wokwi](https://wokwi.com/). Klar nimmst du dafür Fakedaten, oder?

Als nächstes brauchen wir einen Programmer. Das ist ein Stück Hardware, welches deinen Code nachher auf den ATTiny
bringt. Das kannst du dir später auch gut zusammenlöten. Aber dann musst du für jede Codeänderung den ATTiny aus dem
Sockel ziehen müsstest und wieder reinstecken, ist das erstmal unpraktisch. Auch wenn man vorsichtig ist, geht das nicht
lange gut. Zum Rumspielen nimmst du dir besser ein Breadboard und steckst alles zusammen.

<Figure src="/images/kyo-6/attiny/1-attiny_th.jpg" alt="ATTiny auf einem Breadboard" />

Als nächstes nimmst du dir sechs Headerkabel mit männlichen Steckern an beiden Enden, das sind diese kurzen Kabel zum
Bauen von Schaltungen auf dem Breadboard. Die steckst du erstmal in den Programmer.

<Figure src="/images/kyo-6/attiny/2-programmer_th.jpg" alt="ATTiny auf einem Breadboard" />

Dann nimmst du dir diese Zeichnung

<Figure src="/images/kyo-6/attiny/3-zeichnung_th.jpg" alt="Belegungsplan" float="right" />

und verbindest die Headerkabel passend mit dem Breadboard.

<Figure src="/images/kyo-6/attiny/4-breadboard-verbinden_th.jpg" alt="ATTiny auf einem Breadboard" float="right" />

Stück

<Figure src="/images/kyo-6/attiny/5-breadboard-verbinden_th.jpg" alt="ATTiny auf einem Breadboard" float="right" />

für

<Figure src="/images/kyo-6/attiny/6-breadboard-verbinden_th.jpg" alt="ATTiny auf einem Breadboard" float="right" />

Stück.

Und dann nimmst du dir noch eine einfache LED und verbindest sie mit mit Port 1 und VCC. Der VCC entspricht dem Pluspol,
der Port dem Minuspol. Bei der LED muss die Anode zum Pluspol zeigen und die Kathode (Merkhilfe: \_K_athode / \_k_urzes
Bein) zum Minuspol.

<Figure src="/images/kyo-6/attiny/7-LED_th.jpg" alt="LED" />

Die LED ist für die Aufwärmübungen.

<Figure src="/images/kyo-6/attiny/8-LED_th.jpg" alt="LED" />

Bring den erstmal zum Blinken, bevor du dich am Stripe versuchst. Weil wir aber gerade am Basteln sind, machen wir das
erst noch fertig. Isoliere den Stripe am Anfang ab. Sei vorsichtig - da kann man leicht bei abrutschen...

<Figure src="/images/kyo-6/attiny/9-stripe_th.jpg" alt="Strip" />

Dann verbindest du das ganze mit dem Konnektor.

<Figure src="/images/kyo-6/attiny/10-konnektor_th.jpg" alt="Konnektor" />
<Figure src="/images/kyo-6/attiny/11-konnektor_th.jpg" alt="Konnektor" />

Die Enden isolierst du ab. Aber bitte nicht mit so einem Messer. Dafür gibt es Abisolierzangen.

<Figure src="/images/kyo-6/attiny/12-abisolieren_th.jpg" alt="Konnektor" />

Und bei der Gelegenheit geht es gleich nochmal zum Lötkolben...

<Figure src="/images/kyo-6/attiny/13-loetkolben_th.jpg" alt="Lötkolben" />

Die Enden verzinnst du jetzt. Das sollte dann ungefähr so aussehen:

<Figure src="/images/kyo-6/attiny/14-verzinnen_th.jpg" alt="Verzinnen" />

Der Pluspol (rot) kommt auf VCC, der Minuspol (weiß) auf Ground und das Datenkabel (grün) auf Port 0.

<Figure src="/images/kyo-6/attiny/15-stripe_th.jpg" alt="LED-Stripe" />
<Figure src="/images/kyo-6/attiny/16-stripe_th.jpg" alt="LED-Stripe" />

Jetzt kommt der Programmer in deinen USB-Port und dann kann es mit dem Coden losgehen!

<Figure src="/images/kyo-6/attiny/17-programmer_th.jpg" alt="Programmer" />

In einem Tab solltest du dir die [ATTiny-Referenz](https://cdn.sparkfun.com/assets/0/4/1/4/a/Tiny_QuickRef_v2_2_1.png)
aufrufen.

<Figure src="https://cdn.sparkfun.com/assets/0/4/1/4/a/Tiny_QuickRef_v2_2_1.png" alt="Referenz" />

Dann die Hände entspannt auf die Tastatur legen und los geht's...

<Figure src="/images/kyo-6/attiny/18-haende_th.jpg" alt="Hände" />

Wir fangen erstmal mit einem ganz einfachen Stück Code an.

```c

#include <FastLED.h>

#define LED 1

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED,HIGH);
  delay(1000);
  digitalWrite(LED,LOW);
  delay(1000);
}
```

Wir kommen gleich zum ersten großen Unterschied zwischen C und Python: Bei Python läuft im Hintergrund ein Stück
Software, was aus dem Script maschinenlesbaren Code produziert. Der Vorteil ist, dass du so etwas wie die Python-Shell
nutzen kannst. Die Alternative sind sogenannte compilierte Sprachen. Da muss vor einer Anwendung der Code erst
compiliert werden. Das Ergebnis ist eine direkt ausführbare Datei. Der Vorteil von so einer Script-Sprache wie Python
(oder Ruby, Pearl und einigen anderen) ist, dass etwas wie eine Python-Shell möglich ist. Der Code ist direkt
ausführbar, was das Entwickeln vereinfacht und beschleunigt. Der Nachteil ist, dass der Code erst zur Laufzeit für die
Maschine lesbar gemacht wird und dadurch langsamer ist. Und ein Python-Interpreter muss immer im Hintergrund laufen. Für
schmale Maschinen wie einem ATTiny ist das also nichts. C gehört zu den compilierten Sprachen. Der Code muss also immer
erst compiliert werden und kann dann auf den Microcontroller gespielt werden. void zeigt an, dass eine Funktion nichts
zurückliefert. Wir brauchen zwei Funktionen. Wie die Namen schon verraten, sorgt die erste für das Setup und die zweite
bindet eine nette Schleife um den Code. Während bei Python Codeblöcke durch passende Einrückungen zusammen gehalten
werden, wird das bei C - wie bei vielen anderen Sprachen - durch geschwungene Klammern definiert. Im Englischen heißen
die übrigends curly brackets. Einrückungen sind zur besseren lesbarkeit zwar trotzdem üblich, aber sie sind syntaktisch
nicht wichtig. Deswegen müssen Codezeilen mit einem Semikolon abgeschlossen werden. Jede Zeile bietet eine Chance, genau
das zu vergessen. Wenn dein Code also mal nicht läuft, wäre das mit das erste, auf das ich an deiner Steller mal schauen
würde.

Was passiert jetzt bei dem obigen Code? Die Zeilen, welche mit einer # beginnen, werden vom Compiler ausgewertet,
_bevor_ der Code übersetzt wird. _include_ entspricht einem Import aus Python. Mit _define_ wird der erste Ausdruck im
Code gesucht und durch den zweiten ersetzt. Das hilft, Code lesbarer zu machen. Nimm dir den Code und hau den erstmal in
das Wokwi rein. Da musst du an den ATTiny bei der Simulation noch eine LED und zwei Kabel ergänzen. Löten durch Klicken
quasi. Kriegst du ihn da zu laufen? Super, dann pack ihn in die AVR-IDE rein. Klick erst den Haken an, um den Code zu
überprüfen. Läuft alles durch? Dann klickst du auf Upload und wartest kurz. Im Zweifel musst du die LED mal ziehen.
Blinkt sie? Super! Spiel mal ein bißchen damit, um damit warm zu werden. Lass das Teil schneller blinken, tausche mal
den Port. Wenn du da soweit fit bist, geht es auf zum Stripe.

Hier wäre ein einfaches Beispiel dafür:

```c

#include "FastLED.h"

#define  NUM_PIXEL 16
#define  DATAPIN 0

CRGB leds[NUM_PIXEL];

void setup() {
  FastLED.addLeds<NEOPIXEL, DATAPIN>(leds, NUM_PIXEL);
}

void loop() {
  static uint8_t hue = 0;
  FastLED.showColor(CHSV(hue++, 255, 255));
  delay(10);
}

```

Auch hier - fang bitte an, mit dem Code zu spielen. Nimm dir dafür das Wokwi und statt des Stripes nimmst du dir im
Simulator einen NEOPIXEL Ring. Wenn dir hier irgendwo nicht klar ist, was der Code macht, zögere nicht, und frage bitte.

Die vorhandene Basis erweitern wir jetzt:

```c
#include "FastLED.h"
#include <avr/power.h>

#define  NUM_PIXEL 16
#define  DATAPIN 0

CRGB leds[NUM_PIXEL];

void setup() {
  clock_prescale_set(clock_div_1);

  FastLED.addLeds<NEOPIXEL, DATAPIN>(leds, NUM_PIXEL);
}

void loop() {
  static uint8_t offset = 0;
  static uint8_t increment = 1;
  FastLED.clear();
  offset = offset + increment;
  leds[offset % NUM_PIXEL] = CRGB::Green; ;
  FastLED.show();

  if(offset % NUM_PIXEL == 0) {
    increment *= -1;
  }

  delay(20);

}
```

Auch hier - packe den Code ins Wokwi, baue dir den NEOPIXEL-Ring an und versuche den Code zu verstehen. Die erste Zeile
im loop ist erklärungsbedürftig: In C müssen anders als in Python Variablen immer mit ihrem Typ definiert werden, bevor
sie benutzt werden können. offset wird als Integer definiert und startet mit 0. _static_ sorgt dafür, dass der Wert von
offset beibehalten wird, wenn die Funktion verlassen wird und neu dorthin reingesprungen wird.

Wenn du da eingestiegen bist, versuche den Code dahin gehend abzuändern, dass die LEDs, immer wenn sie oben anschlagen,
die Farbe wechseln. Hier wäre eine [Musterlösung](https://wokwi.com/projects/332108069669438034).

Geschafft - na, dann ist eine Regenbogen das nächste, was ansteht! Natürlich gilt wie immer beim Coden - selber
probieren und erst wenn es läuft, auf die [Musterlösung](https://wokwi.com/projects/332108540314387028) schauen. Wenn du
hängst, frag lieber, ob wir dir einen Stupser geben können, bevor du auf die Lösung schmulst. :)

> War es das schon mit dem Gelbgurt? Mitnichten! Aber wir erarbeiten gerade das Programm. Es lohnt sich immer wieder
> vorbeizukommen, da wir die Seite Stück für Stück ergänzen.
