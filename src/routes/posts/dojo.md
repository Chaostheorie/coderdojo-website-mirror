+++
title = "Worum geht's im Dōjō?"
chapters = false
color = "#55CCFF"
date = 2021-12-07
+++

<script lang="ts">
    import Audio from '$lib/components/Audio.svelte';
    import Figure from '$lib/components/Figure.svelte';
</script>

# Einleitung

> Dummerweise kann man niemanden erklären, <br />
> was die Matrix ist.<br />
> Du musst sie selbst erleben.<br />
>
> _The Matrix_

:::note Info
Diese Seite gibt es auch zum Hören:
:::

<Audio src="https://dect42.de/audio/Uberblick.mp3" title="Überblick CoderDojo" cover="/images/brand.svg" artist="bengoshi" />

Willkommen zum Kursbuch des CoderDojo. Während die meisten CoderDojos auf Kinder ausgerichte sind, liegt unser Fokus bei
Jugendlichen. Wir nehmen das nicht so genau, aber wenn du jünger als 12 bis 14 Jahren bist, wirst wahrscheinlich mit dem
[CoderDojo Berlin](https://www.coderdojo-deutschland.de/) besser beraten sein. Dort findest du Gleichaltrige und wirst
Programmieren mit einer graphischen Oberfläche lernen. Die schauen wir uns zwar auch einmal an, aber es stellt nicht
unseren Schwerpunkt dar. Für diejenigen, die 16 Jahre und älter sind gibt es immer wieder zusätzliche Aufgaben, die
mathematisch orientiert sind. Daran kannst du zusätzlich knobeln und weiter trainieren.

Vorab - wer jetzt denkt - wofür ein weiterer Python-Buch bzw. -Kurs? Gibt es davon nicht schon genug? Ja, das ist
richtig. Aber wir streben weder einen Selbstlernkurs an, noch setzen wir auf Unterricht wie in der Schule. Unser Ansatz
ist eine Mischung aus zu Hause hacken und gemeinsamen Austausch. Es gibt aber Dinge, bei denen die Erfahrung gezeigt
hat, dass da viele das Handtuch schmeißen, beispielsweise die Installation. Lass dir bei so was bitte helfen, teilweise
setzen wir die Inanspruchnahme der Hilfe sogar ausdrücklich voraus. Und bei uns geht es mehr als nur „schnöden" Code.
Wir schauen auf Dinge wie Datenschutz, Nerdkultur ebenso wie auf Hardware.

<Figure src="/images/kyo-info/JJS_Dojo_s.jpg" alt="Gürtel" />

Trainieren? Der Begriff Dōjō kommt aus dem Kampfsport und stellt dort den Trainingsraum oder -halle dar. Programmieren
lernen hat vieles damit gemeinsam. Jeder der Lesen und Schreiben kann, kann Programmieren lernen. Aber wenn du
Programmieren lernen willst, wird das nicht klappen, indem du nur ein Buch liest oder einen Film schaust. So lernst du
weder Karate, Judo oder Fahrrad fahren. Da gehört immer eine ordentliche Portion Übung dazu. Man kann eine Kata, also
die vorgeschrieben Bewegungsabläufe, alleine üben. Aber regelmäßige Partnerübungen sind genauso wichtig wie das sich
jemand von außen das anschaut und Dir hilft, Deine Bewegungen zu verbessern. So ist das beim Coden auch. Es hilft, sich
gegenseitig Code vorzustellen, sich zu besprechen und sich Unterstützung zu holen, wenn es mal klemmt. Und jeder macht
früher oder später die Erfahrung, dass es mal nicht weitergeht. Statt das Handtuch zu werfen, lernt Ihr Euch gegenseitig
zu helfen oder von den erfahrenen Mentoren unterstützt zu werden. Dieser Teil ist mindestens so bedeutsam wie alleine zu
frickeln. Und am meisten lernt, wer lehrt - du wirst von Problemen anderer hören, kannst ihnen helfen und eine Menge
selbst dazu lernen. Aktuell treffen wir uns einmal wöchentlich in einer Videokonferenz. Das wollen wir ergänzen durch
ein einmal monatliches Treffen im Berliner [Hackerspace xHain](https://x-hain.de/de/). An dieser Stelle kann das Script
beziehungsweise der Text nicht immer aktuell sein - also schau bitte auf unserer Homepage unter News nach. Wenn du nicht
aus Berlin kommst, sprich uns an und wir versuchen dir zu helfen, in Deiner Stadt Ansprechpartner zu finden.

Kennst du die Gürtelfarben aus dem Kampfsport? Ein bunter Strauß an Farben, der dich am Ende zum schwarzen Gürtel führen
soll, die sogenannten Kyo-Grade oder im deutschen Schüler-Grade. Es gibt nicht nur einen schwarzen Gürtel, sondern
verschiedene Dan-Grade - im deutschen Meister-Grade. An diesem System wollen wir uns orientieren. Wir beginnen mit dem
Weg zum weißen Gürtel. Danach hast du die wichtigsten bzw. ersten Grundbegriffe drauf. Wir haben keine „Gürtelprüfungen"
geplant. Aus eigenen Erfahrungen von verschiedenen Budo-Sportarten finden das manche jedoch gut. Wenn euch so etwas
ansprechen sollte, sagt uns Bescheid und wir gehen darauf ein. Ob mit oder ohne Prüfung: du solltest die Tests für den
„Gürtel" bestehen, bevor du weitermachst. Andernfalls fehlen dir Grundlagen für die nächsten Kapitel und das schafft
mehr Frust als Lust beim Weitermachen. Wenn du merkst, dass dir was fehlt und da nicht so richtig rankommst - sprich uns
an, damit wir gemeinsam daran feilen. Umgekehrt hilft es Mentoren, wenn sie wissen, was du schon gemacht hast und was
vorausgesetzt werden darf. Wenn du bei einem solchen „Test" nicht weiterkommst, ist das nicht schlimm - wir sind hier
nicht in der Schule. Hier geht es nicht darum, eine Prüfung zu bestehen, sondern etwas zu lernen. Wenn du also bei einem
Test stecken bleibst, nimm das zum Anlass, um dir von den Mentorinnen helfen zu lassen. Oft braucht es nur einen kleinen
Stupser in die richtige Richtung und du kannst die Aufgabe selber richtig weiterlösen.

<Figure src="/images/kyo-info/karate-2717178_1280_s.jpg" alt="Bruchtest" float="right" />

Was lernen wir? Wir beginnen mit Python. Die Wahl der „richtigen" Programmiersprache kann zu regelrechten
Glaubensstreitigkeiten führen. Es gibt Sprachen, die sich eher für Anfänger eignen und welche, die sich weniger für
Anfänger eigenen. Und es gibt Sprachen, die für einen bestimmten Zweck besser geeignet sind als andere. Es gibt nicht
_"die"_ Programmiersprache. Insofern werden wir mit jedem Gurt auch einen Blick auf weitere Sprache werfen. Es sind
keine Programmiersprachen im eigentlichen Sinne, aber html und css, um Internetseiten zu erstellen, werden wir ebenfalls
erlernen. Wir werden ebenso einen Blick auf Dinge wie Netzwerktechnik, auf Linux, Datenschutz, Cybersicherheit werfen
und nehmen bei unseren Treffen in unserem Hackspace oder auf dem Congress gerne einmal einen Lötkolben in die Hand. Der
Weg zum _"schwarzen Gürtel"_ besteht also nicht nur aus dem Erlernen von ein paar Befehlen einer Programmiersprache,
sondern aus einem Potpourri an Dingen. Und dir sollte klar sein - zum begehrten _"schwarzen Gürtel"_ ist noch niemand
über `s Wochenende gekommen. Gib dir also selbst Zeit.

Der Anfang ist leider oft etwas trocken, weil man erst etwas Rüstzeug lernen muss, bevor es richtig spaßig wird. Bevor
du tolle Würfe und Tritte lernst, steht immer erst eine Runde Fallschule und Bewegungslehre an. So ist das hier auch. Im
Weißgurt lernst du absolute Basics. Vieles werden wir nur anreißen können und müssen dich für eine Vertiefung auf später
vertrösten. Aber andernfalls besteht die Gefahr, sich gleich in Details zu verlieren. Auch in den folgenden Einheiten
werden wir aus diesem Grund manche Dinge bewusst auf spätere Einheiten verschieben. Im Geldgurt wollen wir dann aber
gleich ein Weltraumspiel bauen und dieses Stück für Stück weiter ausbauen. Gleichzeitig wollen wir keine Dinge machen,
die anfangs noch nicht erklärt werden können. Aus diesem Grund verzichten wir zunächst auf grafische „Spielereien". Aber
halte durch, die kommen!

<Figure src="/images/kyo-info/martial-83009_1280_s.jpg" alt="Training" float="left" caption={false} />

Wie oft solltest du dich damit beschäftigen müssen? Müssen wäre schon mal kein guter Start. Wir sind hier nicht in der
Schule. Wir treffen uns, weil wir neugierig sind und Spaß an der Sache haben, nicht weil wir müssen. Insofern kann man
selbstverständlich auch mal aussetzen, weil es vielleicht einem gerade mit Klausuren zuviel wird oder anderes anliegt.
Aber dir sollte klar sein, dass ohne eine regelmäßige Beschäftigung du nicht voran kommen wirst und es wenig motiviert,
wenn man immer auf der Stelle tritt. Neben unserem wöchentlichen Treffen solltest du dir also schon mindestens einen
Nachmittag die Woche dafür Zeit nehmen. Zwar setzt sich niemand hin und paukt wie bei einer Sprache Vokabeln. Die
Befehle lernst du, indem du sie regelmäßig benutzt. Ohne das wird es schwierig. Wir wollen dich nicht abschrecken,
sondern motiviere, dran zu bleiben. Der Anfang stellt erfahrungsgemäß eine erste Klippe dar und danach kommen ebenfalls
Höhen und Tiefen. Niemand lernt Segeln, wenn immer Flaute ist. Böen können anstrengend sein, aber mit jeder lernt man
etwas dazu. Und wenn das Bötchen kentert - nicht schlimm, wieder aufrichten, Wasser rausschöpfen, weiterfahren.

<Figure src="/images/kyo-info/capsized-31696_1280_s.png" alt="Kentern" />

Wir setzen keine Kenntnisse voraus. Wenn du schon Vorkenntnisse hast und später einsteigen willst, ist das kein Problem.
Mach die Tests am Ende eines Kapitels (nicht nur lesen, lösen!). Wenn du die hinbekommst, weiterziehen. Es gibt noch
keine Kapitel? Dann wirst du Dich leider gedulden müssen, da der Kurs noch im Entstehen ist. Wenn du aber schon soweit
bist - beteilige Dich doch und hilf uns, den Kurs weiteraufzubauen.

Vielen Dingen werden wir uns wie in einer Spirale annähern. Wir können nicht jedes Thema gleich bis in die Tiefe
bearbeiten, weil das überforderte. Falls du also schon Vorkenntnisse hast oder dich auch sonst fragst, ob das zu einem
Thema schon alles ist - in aller Regel nicht. Wir greifen die einzelnen Teile später wieder auf und vertiefen sie Stück
für Stück.

<Figure src="/images/kyo-info/fantasy-fractal.jpg" alt="Spirale" />

Was du jedoch brauchen wirst, ist eine installierte Python-Version mit virtualenv und eine Oberfläche, um einen Code zu
schreiben. Wir empfehlen hier die Community-Version von PyCharme. Klar ginge es auch mit anderen anderen IDEs, aber du
machst es Dir selber leichter, wenn du zumindest am Anfang die gleiche nimmst. Wir werden später auch einen Blick auf
andere werfen. Daneben solltest du Git installiert habenn. Wir verzichten hier bewusst auf Installationsanleitungen,
sondern geben nur ein paar Links. Es gibt erhebliche Unterschiede zwischen Windows, Linux und Mac und den dortigen
Versionen. Außerdem ist das ein Punkt, an dem viele verzweifeln und Aussteigen. Um nicht an dieser Hürde zu scheitern -
wenn du es nicht selber hinbekommst, lass dir bitte helfen. Vielleicht hast du jemanden in Deinem Umfeld wie Deine
Eltern oder Lehrkräfte. Ansonsten bieten wir dir gerne an, bei der Installation zu helfen. Sprich uns einfach an. Du
verfügst nur über ein Handy oder Tablett und kannst auf keinen Computer / Notebook zugreifen? Wir helfen dir gerne, wie
du für circa 100 Euro für die ersten Schritte ausreichendes Gerät erwerben kannst. Wenn Geburtstag oder Weihnachten
gerade noch weit weg sind oder du erstmal schauen möchtest, ob das überhaupt dein Ding ist - wir haben einen kleinen
Pool an Leihgeräten. Scheu dich nicht, uns ansprechen. Wir helfen dir gerne.

Ein paar Hinweise zum Layout. Wenn es um Code geht, sieht das so aus:

```python:test.py
print("Testcode")
```

Wenn Code angegeben wird - probiere ihn bitte immer selbst auch bei dir aus! Das übt. Und verändere ihn gerne und spiele
damit herum. Du kannst nichts kaputt machen. Wenn wir dir sagen - das oder jenes geht nicht - probiere es mal aus. Auch
wenn es anfangs komisch klingen mag - aus genau den dann entstehenden Fehlermeldungen lernst du eine Menge!

Wenn Stolperstein zu beachten sind, gibt es an der Seitenrand einen Hinweis. Hier solltest du besonders aufpassen und
die Hinweise genau befolgen beziehungsweise nochmal lesen, wenn etwas nicht funktioniert.

Wenn es mathematische Zusatzaufgaben gibt, wird das extra ausgewiesen.

Auf geht `s zum [Weißgurt](https://coderdojo.red/kyo-7/). Und bis wir uns beim nächsten BBB- oder Reallife-Meeting
sehen - Stay safe and keep coding!

## Selber installieren

Wenn du die notwendigen Dinge selbst installieren willst oder jemanden neben dir hast, der dir hilft:

- [Python, mindestens in Version 3.8](https://www.python.org/downloads/)
- [pip](https://geekflare.com/de/python-pip-installation/)
- [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html)
- [Community Edition PyCharm](https://www.jetbrains.com/de-de/pycharm/download/)

Natürlich können auch andere IDEs genutzt werden, aber unsere Erklärungen beziehen sich nur auf PyCharm, um es
übersichtlicher zu halten.

## Los geht 's

[Hier geht es direkt zum ersten Gurt.](https://coderdojo.red/posts/kyo-7/)

### Bildnachweise

Kinder in dem philippinischen Karate-Dōjō der Jack und Jill Schule in Bacolod - Von Jjskarate. - Eigenes Werk;
Übertragen aus en.wikipedia nach Commons, CC BY-SA 3.0, <https://commons.wikimedia.org/w/index.php?curid=50279796>

Karatetraining - Bild von
[Michele Stival](https://pixabay.com/users/stivy73-6360334/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2717178)
von
[Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2717178)

Kindertraining - Bild von
[PublicDomainPictures](https://pixabay.com/users/publicdomainpictures-14/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=83009)
von [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=83009)

Kentern - Bild von
[Clker-Free-Vector-Images](https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=31696)
von [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=31696)

Spirale - Bild von
[Stefan keller von Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4356228)
