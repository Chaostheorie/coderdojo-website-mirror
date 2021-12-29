---
title: '7. Kyo'
subtitle: Löten
katex: true
date: 07-12-2021
category: chapters
---

## Löten

> And if smells like chicken, it's the wrong side.

Nachdem wir uns eine ganze Zeit mit Software beschäftigt haben, machen wir eine Runde Hardware. Am einfachsten dürfte
das für Dich sein, wenn du Dich dafür in einen (Deinem?) lokalen Hackerspace begibst. In Berlin bietet sich der
familienfreundliche [xHain](https://x-hain.de) an. Wir setzen wie beim Programmieren beim Löten keinerlei Vorkenntnisse
voraus, da die Teilnehmenden unterschiedlich alt sind und dem Thema in der Schule unterschiedliches Gewicht beigemessen
wird. Es kann also gut sein, dass du gerade am Anfang gähnst. Keine Sorge, wird steigern das Stück für Stück. Aber wir
wollen alle mitnehmen.

{% figure("/images/kyo-7/derMicha_Soldering_th.jpg", null, "derMicha bei einem Löt-Workshop") %}

Zunächst solltest du grundlegend üben, wie man mit einem Lötkolben umgeht. Wenn du noch keine Erfahrung hast, lass Dir
ein kleines Stück Lochraster geben und ein paar alte Bauteile und versuche die, ein- und auszulöten. Wir können hier nur
bedingt etwas zu erklären, da Dir am besten eine Mentorin kurz zeigt, wie es geht. Der Rest ist handwerkliche Fähigkeit,
dass muss man also einfach ein bißchen selber gemacht haben.

{% figure("/images/kyo-7/Lochraster_loeten.jpg", null, "Lötübungen am Lochraster") %}

Wenn du damit klar kommst, dann kommt als nächstes, eine LED zum Leuchten zu bringen. Lass Dir dafür bitte die passenden
Bauteile geben. Für die Mentoren - benötigt werden:

-   Lochraster,
-   Draht,
-   5mm LED rot,
-   220 Ω Widerstand und
-   4,5 V-Batterieadapter.

{% figure("/images/kyo-7/Leiterbahnen_ziehen.jpg", null, "Leiterbahnen ziehen will geübt sein.") %}

Strom braucht zum Fließen immer einen Stromkreis. Manche Bauelemente können Strom nur durch eine Richtung durchlassen,
so wie die LED. Wenn die LED also mal nicht leuchtet - probiere sie mal zu drehen. Die mag es aber nicht wirklich,
falsch herum angeschlossen zu werden. Deshalb haben die ein langes und ein kurzes Beinchen. Das lange nennt man Anode
und kommt in Richtung Pluspol (die kurze Seite heißt Kathode; Eselsbrücke _k_ wie _K_ athode). LEDs sind empfindlich.
Wir arbeiten gerne mit einem Batterieadapter, der drei 1,5 Volt-Batterien zu 4,5 Volt (V) verbindet. Bei 4,5 V geht den
meisten LEDs nur kurz ein Licht auf. Danach sind sie durchgebrannt. Das ist schade um das Bauteil, denn danach kann es
nur noch in den Müll. Mit Hilfe eines Widerstandes kann man diese Spannung reduzieren. Mit dem Vergleich zu einem
Wasserkreislauf kann man gut verstehen, was da passiert. Die Batterie ist dort ein Motor, der das Wasser antreibt. Die
Röhren entsprechen den Stromleitungen. Und ein Widerstand ist einfach eine Röhre, die dünner wird. Da kann nicht so viel
Wasser durchfließen, wie durch eine große Röhre. Stell Dir jetzt vor, die LED besteht aus einer dünnen Glasröhre. Drückt
man da zuviel Wasser durch, platzt es. Das verhindern wir mit dem Widerstand. Hier eine kleine Zeichnung dazu:
(Zeichnung ist in Arbeit)

\[Platzhalter Wasserkreislauf\]

Solche Zeichnungen stellt man technisch mit sogenannten Schaltplänen dar. Dabei haben bestimmte Bauelemente fest
definierte Zeichen. Die kleine Schaltung, die du Dir zurecht gelötet hast, schaut dann so aus:

{% figure("/images/kyo-7/LED-Schaltung.png", null, "LED-Schaltung") %}

Vergleiche das mal mit Deiner Schaltung, wenn du fertig bist. Widerstände gibt es viele. Die Stärke wird gemessen in der
Einheit Ω (gesprochen Ohm). Wenn man das Zeichen Ω nicht hat, kürzt man es mit R (das englische Wort für Widerstand ist
´resistor´) ab.

{% figure("/images/kyo-7/Widerstand.jpg", null, "typischer Widerstand") %}

Wieviel Ohm muss den unser Widerstand nun haben? Da wird es jetzt kurz einmal theoretisch, denn das kann man mit einer
kleinen Formel selbst ausrechnen:

$$
Vorwiderstand\  R {_v} = \frac{Spannung\ am\ Vorwiderstand\ U{_R}}{Strom\ I}
$$

Äh - wie meinen? Das hört sich erstmal kompliziert an. Wer es mit Zettel und Stift mal selbst nachrechnet wird
feststellen, dass das kein Hexenwerk ist. Und am Ende kannst du daraus ein kleines Programm machen. Dann geht das beim
nächsten mal ganz fix. Wir wollen den Widerstand vor der LED rauskriegen. Das ist der Vorwiderstand. Zunächst müssen wir
wissen, wieviel Strom wir da eigentlich vernichten wollen. Unsere Batterie liefert 4,5 V. Jetzt müssen wir wissen, wie
hoch die Spannung in der LED sein darf. Wir arbeiten hier mit einer kleinen (5mmm), roten LED und die haben es meist so
bei 1,6 V bis 2 V kuschelig. Diesen Wert liefern die Hersteller in ihren Spezifikationen mit. Es gibt also zu jedem
Bauteil so ein Datenblatt. Aus Vereinfachungsgründen sagen wir die notwendigen Werte aber an.

{% figure("/images/kyo-7/LED-falsch.jpg", null, "So sollte eine LED nicht im Lochraster festgemacht werden…") %}

Vereinfacht können wir jetzt sagen - 4,5 V Batteriespannung - 2 V will-die-LED-haben = 1,5 V zu vernichtende Spannung.
Jetzt brauchen wir noch den Nennstrom der LED. Aus das stünde im Datenblattn, gehe jetzt bitte einfach von 0,025 Ampere
(A) aus. Wir dividieren die zu vernichtende Spannung (1,5 V) durch den Nennstrom (0,025 A). Taschenrechner nehmen und
nachrechnen. Da kommen 160 Ω raus. Wenn du dann an den Materialschränken im xHain oder einem anderen Makerspace schaust,
wirst du sehen, dass es einen 160 Ω - Widerstand nicht gibt. Man nimmt dann einfach den nächst größeren - denn mehr
Widerstand heißt, da fließt weniger Strom. Dann ist die LED vielleicht etwas dunkler, aber sie überlebt. Der nächst
größere Widerstand sind 220 Ω. Die bunten Ringe darauf erklären wir Dir beim nächsten Kyo. Damit du sicher bist, dass du
wirklich den richtigen genommen hast - lass Dir mal ein Messgerät zeigen und wie man damit umgeht. Da werden nicht genau
220 Ω angezeigt werden, aber so ungefähr 200 bis 240 Ω. Jetzt weißt du, wie man so einen Widerstand aussucht. Okay, also
brauchst du zwei Daten für die LED und den Strom, den Dir jeweils die Batterie liefert. Daraus mach doch mal gleich in
ein Programm. Mit der Zeit kannst du da noch andere Werte für andere LEDs reinpacken. Jedenfalls brauchst du zukünftig
dafür keinen Taschenrechner mehr. Alles klar soweit? Wenn nicht, nicht schlimm. Deine Mentor:innen vor Ort helfen Dir da
gerne.

{% figure("/images/kyo-7/LED-richtig.jpg", null, "So schaut das richtig aus mit der LED!") %}

Okay, wenn Deine LED leuchtet, soll es an dieser Stelle erstmal mit dem Kapitel löten gewesen sein. Beim nächsten Kyo
wird ein Controller, quasi ein kleiner Computer, zusammengelötet. Einen Kyo später kümmern wir uns dann auch um die
Programmierung desselben.