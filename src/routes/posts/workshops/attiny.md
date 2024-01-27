+++
title = "Workshops"
color = "#fff"
created = 2023-09-22
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# ATTiny löten und programmieren

Grundschaltung LED:

<Figure src="/images/workshops/attiny/Anleitung-LED.png" alt="Anleitung LED löten" />

ATTiny-Schaltung:

<Figure src="/images/workshops/attiny/Anleitung-ATTiny.png" alt="Anleitung ATTiny löten" />

<Figure src="/images/workshops/attiny/Schaltplan-ATTiny.png" alt="Anleitung ATTiny löten" />

Hier kommt Code:


#include <Adafruit_NeoPixel.h>
#include <avr/power.h> // Required for 16 MHz Adafruit Trinket

#define LED_PIN    0

#define LED_COUNT 100

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);


void setup() {
  clock_prescale_set(clock_div_1);

  strip.begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
  strip.show();            // Turn OFF all pixels ASAP
  strip.setBrightness(50); // Set BRIGHTNESS to about 1/5 (max = 255)
}


void loop() {
  rainbow(5);             // Flowing rainbow cycle along the whole strip
}


void rainbow(int wait) {

  for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
    for(int i=0; i<strip.numPixels(); i++) { // For each pixel in strip...

      int pixelHue = firstPixelHue + (i * 65536L / strip.numPixels());

      strip.setPixelColor(i, strip.gamma32(strip.ColorHSV(pixelHue)));
    }
    strip.show(); // Update strip with new contents
    delay(wait);  // Pause for a moment
  }
}
