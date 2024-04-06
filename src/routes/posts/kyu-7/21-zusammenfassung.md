+++
title = "7. Kyū"
color = "#fff"
created = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

## Zusammenfassung

Hier noch einmal kurz die im 7. Kyū gelernten Befehle:

- print("foo"): Gibt eine Zeile auf dem Bildschirm aus.

- for i in foo: Schleife zur Wiederholung einer Sequenz.

- range(a, b, c): Generiert eine interierbare Liste, welche super in Kombination mit der for-Schleife funktioniert.
  Der erste Wert steht für den Startwert, der zweite für den Endwert und der dritte für die Schrittweite.

- while: hast du als Schleife mit Bedingung verwendet.

- Mit break und continue kannst du Schleifen besser steuern.

- input("foo"): Liest eine Benutzerineingabe von der Kommandozeile ein.

- if / elif / else: Wenn / dann / sonst - Bedingungen

- Die Stringformatierung f"foo {bar}" hast du schon verwendet.

- Du kennst jetzt die Rechenoperationen +, -, /, //, \*, \*\* und %.

- Du hast die Datentypen String (str) für Zeichen, Integer (int) für ganze Zahlen und Float (float) für
  Gleitkommazahlen und kennengelernt.

- Mit [foo] kannst du schon Listen erzeugen. Und mit foo=[] eine leere Liste.

- list_of_Numbers = [52, 'foo', 93.25] legt eine Liste mit dem Integer 52, dem String 'foo' und der Gleitkommazahl 93,25 an.

- list_of_Numbers[1] gibt das 2. Element aus

- liste.append('bar') ergänzt einer Liste um den String 'bar'

- liste[3] = 'bahr' verändert das 4. Element einer Liste von 'bar' zu 'bahr'

- liste.sort() sortiert eine Liste vorwärts (geht nicht bei gemischten Listen)

- liste.sort(reverse=True) sortiert eine Liste rückwärts (geht aber nicht bei gemisten Listen)

- liste.insert(0, 5) fügt an Stelle 0 einer Liste den Integer 5 ein

- liste.remove('bahr') entfernt das Element 'bahr' aus der List

- liste.pop[0] entfernt das 0. Element aus der Liste

- len(list_of_Numbers) gibt die Anzahl der Elemente einer Liste ausgibt

- for number in list_of_Numbers: print(number) iteriert (Einrückung nicht vergessen) über eine Liste

- [print(number) for number in list_of_Numbers] iteriert über eine Liste

- def hat Dir ermöglicht, eigene Funktionen zu schreiben. Mit return kannst du Werte zurückgeben.

- try / except hat Dir eine erste Einführung im Abfangen von Fehlern gegeben.

- Mit `from <Modul> import <Funktion>` hast du die erste Bibliothek eingelesen und gleich mit
  `from random import randrange` Zufallszahlen generiert.

- Kommentare kannst du mit drei Hochkommata oder \# schreiben.

- Und nicht zuletzt kennst du die Antwort auf alle Fragen und weißt, ob du die blaue oder die rote Pille nehmen
  sollst.

Eine Ansammlung von sogenannten Cheat Sheets, also Spickzetteln, findest Du in [diesem GitHub-Repository](https://github.com/afizs/python-notes/blob/main/resources/cheatsheets.md). Schau mal rein, dass kann ganz hilfreich sein.
