+++
title = "6. Kyo"
date = 2021-12-07
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# 6. Kyo – Gelbgurt

> Es gibt keinen Misserfolg.
>
> Entweder du hast Erfolg oder du lernst.
>
> _Kevin Kruse_

:::tip Hinweis
Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für den Gelbgurt. Wir freuen uns über
Fehlerkorrekturen! Wenn du das Gefühl hast, hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich
uns beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht verstehst, liegt es nicht an Dir und
anderen wird es auch so gehen. Lass es uns gemeinsam für die nächsten Leser:innen besser machen.
:::

## Überblick

Herzlich Willkommen im Gelbgurt-Programm. Wir brauchen noch zwei Bausteine, bevor wir in die Bibliothek pygame kommen.
Zunächst werden wir das Versionsverwaltungssystem Git kennen lernen. Und danach schauen wir noch kurz virtualenv an. Wie
ganz am Anfang versprochen, werden wir uns dann daran machen, ein Weltraumspiel zu programmieren. Programmiertechnisch
steht dabei im Vordergrund, das bereits erlernte zu festigen und zu vertiefen. Wirklich neu werden Arrays sein und der
erste Kontakt mit Klassen. Zuletzt wollen wir einen ersten Blick auf html und css werfen und mit flask erste Webseiten
an den Start bringen. Dabei lernst du gleich die ersten Grundlagen, wie eine Internetseite die du aufrust, auf Deinen
Rechner kommst. Dafür lernen wir auch einiges über Linux kennen und warum dieses Betriebssystem für uns wichtig ist.

## Git - Klappe die erste

Git gehört zu den sogenannten Versionsverwaltungssystemen. Diese lösen mehrere praktische Probleme. Stell Dir vor, du
entwickelst ein etwas größeres Projekt. Dann kann es immer sein, dass du in eine falsche Richtung abbiegst und wieder
Teile rückgängig machen willst. Oder du magst einen neuen Teil einfügen, der aber nur experimentell zur Verfügung stehen
soll. Das Programm soll also in den Versionen stabil und testing genutzt werden. Hierbei helfen Dir
Versionsverwaltungssysteme. Ihren größten Vorteil spielen sie aber aus, wenn du mit mehreren an einem Projekt arbeitest.
Versionsverwaltungssysteme sind alt und es gibt viele verschiedene. Linus Thorvalds, der Erfinder des Linux-Kernels, war
aber mit allen unzufrieden. Deshalb hat er eine neue Versionsverwaltung geschrieben - Git. Dieses ist inzwischen das am
meisten genutzte System und wird von Plattformen wie GitHub und GitLab verwendet. Vielleicht hast du von denen schon
gehört. Für Git braucht es einen zentralen Server. Solche Plattformen können da sehr hilfreich sein, wenn man selbst
keinen betreiben möchte. Um Github machen wir einen Bogen, da es von Microsoft gekauft wurde. Gitlab ist okay, aber auch
ein Unternehmen und vieles von dem, was die haben, brauchen wir nicht. Wir könnten auch einen eigenen Server betreiben,
haben uns aber entschieden, aktuell unsere Energie anderweitig zu investieren. Wir werden als Git-Server Codeberg
verwenden. Das ist ein Verein, der nicht mit den Daten Geld verdient, sondern sich über Spenden finanziert. Bitte sprich
mit Deinen Eltern darüber, ob es okay ist, dort einen Account anzulegen. Und klick Dir dann bitte bei codeberg.de einen
Account.

:::tip Info
Der Name „Git“ bedeutet in der britischen Umgangssprache so viel wie „Blödmann“.
Linus Torvalds erklärte seine Wahl des ungewöhnlichen Namens mit einem Witz sowie damit,
dass das Wort praktikabel und in der Softwarewelt noch weitgehend unbenutzt war:

“I’m an egotistical bastard, and I name all my projects after myself.
First ‘Linux’, now ‘Git’.”

„Ich bin ein egoistischer Mistkerl, und ich benenne all meine Projekte nach mir.
Zuerst ‚Linux‘, jetzt eben ‚Git‘.“

Linus Torvalds
Quelle: Wikipedia
:::

Git ist sehr mächtig. Deshalb wollen wir uns dem ganzen langsam nähern und im Gelbgurt zunächst nur die elementaren
Befehle lernen. Im Orange-Gurt lernst du, was man wissen muss, um ein Projekt zu managen.

<Figure src="/images/kyo-6/Git-logo.png" alt="Das Git-Logo von Jason Long, CC BY 3.0." />

Wir beginnen mit einem neuen Projekt. Du loggst Dich bitte in Coderberg ein. Klicke dort auf das Pluszeichen neben
Repository. Repository ist quasi ein Softwareprojekt. Gib dem ganzen einen Namen. Wir beginnen hier mit einem kleinen
„helloWorld“, um gleich zu üben. Den Rest der Einstellungen lässt du jetzt erstmal so stehen und klickst unten auf
„Repository erstellen“. Wunderbar. Dein erstes Repository ist erstellt. Codeberg gibt Dir jetzt eine kleine Anweisung
wie es weitergeht. Lass den Tab offen, wir kommen darauf zurück. In PyCharm legst du bitte auch ein neues Projekt
helloWorld an. Folgende Beschreibung gilt für Linux- und MacNutzende. Windows-Nutzer installieren sich entweder
[Git für Windows](https://gitforwindows.org/) runter. Dort gibt es auch die Möglichkeit, Git auf der Kommandozeile zu
nutzen. Oder du scrollst runter zum Kapitel Linux und kommst nach diesem Abschnitt hierin zurück. Für Git kann man auch
grafische Oberflächen nutzen, aber tue Dir selber einen Gefallen und lerne gleich die Befehle. Nicht immmer hat man
PyCharm zur Verfügung und machmal kann man mit den Befehlen auch mehr erreichen. Die grafische Anwendung macht nichts
anderes, als genau die Befehle auszuführen, die ihr jetzt schreibt. Aber bei so einer Anwendung bist du immer davon
abhängig, welche Optionen Dir die Anwendung zur Verfügung stellt. Dabei gibt es regelmäßig mehr, die du vielleicht dann
und wann nutzen möchtest. Wenn Du die Befehle kannst, kannst du meist ohne Probleme die verschiedenen grafischen
Oberflächen nutzen - umgekehrt klappt das dagegen nicht. Weiter geht's. Öffne bitte einen Terminal. Gehe in Dein
Verzeichnis: Mit ` cd Pycharm` gehst du in das Pycharm-Verzeichnis, mit `cd helloWorld` gehst du in Dein neues Projekt.
Mit `ls -lah` kannst du Dir den Inhalt des Verzeichnisses anzeigen lassen. Da ist noch nichts drin. Jetzt „arbeitest“ du
die Coderberg-Anleitung ab (ersetze `<dein Benutzername>` mit deinem Benutzernamen):

```bash
touch README.md
git init
git checkout -b main
git add README.md
git commit -m "erster commit"
git remote add origin https://codeberg.org/<dein Benutzername>/helloWorld.git
git push -u origin main
```

Diese Befehlsfolge brauchst du nur beim Anlegen eines neuen Projekts. Also keine Sorge, dass ist nichts, was jeden Tag
vorkommt und was man auswendig kann.

Lass Dein Terminalfenster offen. Das brauchen wir gleich nochmal.

Wir wollen Dir jetzt die einzelnen Schritte erläutern, die du gerade vollzogen hast. Falls du das Gefühl hast, hier
nicht bei jedem Schritt mitzukommen - bitte nicht entmutigen lassen. Vieles wird sich mit der Zeit klären. Wir würden
Dich aber ungern völlig unkommentiert Zeilen abschreiben lassen. Du sollst immer nachzuvollziehen können, was du da
gerade veranstaltest.

Mit `touch` legst du einfach eine leere Datei an, in diesem Fall heißt die README.md. Das am Ende `md` steht, verrät
Dir, dass es sich um eine sogenannte Markdown-Datei handelt. Das lernst du auch bald. Es ist eine simple Art, Texte zu
schreiben und wird viel verwendet. Diese Seite ist beispielsweise komplett in Markdown entworfen worden. `git init` legt
ein git-Repository in diesem Verzeichnis an. Im Hintergrund werden da ein paar Dateien erzeugt, die Git braucht, um
funktionieren zu können. Dazu zählt ein Verzeichnis, dass `.git` heißt. Der Punkt vor dem Verzeichnisnamen sorgt dafür,
dass es bei Linux und Mac um ein `verstecktes` Verzeichnis handelt, also nicht immer zu sehen ist. Dann kommt
`git checkout`. Git verwendet sogenannte `Branches`. Diese ermöglichen Dir, beim gleichen Projekt wie eingangs erläutert
eine stabile Version und eine Version in Entwicklung nebeneinander laufen zu lassen. Mit `git checkout -b main` wird
sichergestellt, dass du Dich im sogenannten Hauptzweig befindest. `git add README.md` bereitet die Datei `README.md`
vor, um sie beim nächsten `Push` (kommt gleich) Deinem Projekt hinzuzufügen. `git commit` sagt git, dass das, was du
gerade über `git add` hinzugefügt hast, mit einem Kommentar versehen werden soll. Das kann wirklich wichtig werden,
damit man sich nachher noch daran erinnert, was man sich dabei gedacht hat ohne erst mühevoll aus den Codezeilen die
Unterschiede herauszubekommen und zu raten, was sich der- oder diejenige beim Einchecken dieser Datei gedacht hat. Der
Zusatz `-m "Hier muss Dein Kommentar hin"` fügt den Kommentar dazu. Macht man das nicht, fragt git nach dem Befehl nach
dem Kommentar. Die Zeile `git remote add ` verbindet das Repository auf Codeberg mit Deinem lokalen Repository. Und zu
guter letzt schiebst du noch mit `git push` das was du über `git add` hinzugefügt hast - hier die README.md - hoch in
Dein Repository auf Codeberg. Der Zusatz `-u origin main` sichert ab, dass lokal und remote den richtigen Zweig lokal
und remote verwenden. Am Ende brauchst du Deine Zugangsdaten von Codeberg.

Okay, das war jetzt erstmal ziehmlich viel Zeug. du wirst sehen, im laufenden Betrieb gestaltet sich git (meist)
deutlich einfacher. Also schauen wir uns mal das „Tagesgeschäft“ an. Geh in PyCharm und öffne mit `File` und dann `Open`
das Verzeichnis `HelloWorld`. Jetzt machst du einen Rechtsklick auf das Verzeichnis. Dort wird Dir `New` und
`Python File` angeboten. Da gibst du `helloWorld` ein. `helloWorld.pas` ging auch, aber PyCharm ergänzt das `.py` sonst
von selbst. Er wird Dich dann fragen, ob er die Datei der Git-Überwachung hinzufügen soll. PyCharm kann bei Git Dir
einige Arbeit abnehmen. Du kannst da jetzt ruhig zustimmen. Aber damit du lernst, wie das ohne solche Hilfen geht,
machen wir das zunächst alles zu Fuß. Erst Laufen lernen, dann Fahrrad fahren. :) Okay, wie ein Hello-World zu schreiben
ist, weißt du. Schreib ein einfaches Hello-World. Vielleicht bindest du noch eine hübsche Schleife drum. Dann gehst du
in Deinen Terminal zurück. Mit `git add helloWorld.pas` fügst du die Datei hinzu. Mit
`git commit -m "denk Dir einen passenden Kommenar aus"` committest du die Datei. Und jetzt sorgt ein `git push` dafür,
dass die Datei zu Deinem Repository bei Codeberg übertragen wird. Gib Deine Zugangsdaten ein und dann wird die Datei
schon `gepusht`. Du willst wissen, ob es geklappt hat? Dann geh auf die Codeberg-Seite. Klick oben auf `Hello World` und
tata - da sollte die helloWorld.py zu sehen sein. Wenn nicht, schau, ob Dir die Meldungen weiterhelfen. Ist das auch
nicht der Fall - lass uns an einem Donnerstag beim CoderDojo gemeinsam drauf schauen.

So richtig berauschend war das jetzt noch nicht. Okay, dann ändere mal Deinen Code ein wenig, also füge eine zweite
Print-Zeile hinzu oder so. Dann kommt wieder das Trio: `git add helloWorld.py`, `git commit -m "Dein Kommentar"` und
`git push`. Jetzt geht wieder auf die Seite von Codeberg, aktualisiere die Seite. Du siehst, das neben dem Dateinamen
Dein letzter Kommentar steht. Klick jetzt mal auf den Dateinamen, also `helloWorld.py`. Dann auf Verlauf (rechts). Jetzt
siehst du, welche commits es schon gab. Klick mal auf Deinen letzten. Jetzt siehst du, welche Zeilen sich geändert
haben. Das kann echt eine Menge wert sein.

Soweit soll es uns mit git erstmal genügen. Du selbst kann bei regelmäßigen Commits sehen, was du geändert hast. Und vor
allem kannst du leichter den anderen zeigen, was du gemacht hast. Gleich lernen wir noch, wie man sicherstellt, dass git
Dinge nicht ins Repository schiebt. Wenn wir das nächste mal näher auf git zurückkommen, siehst du, wie Zusammenarbeit
mit git ausschaut.

## virtualenv

Wir wollen für das Spiel gleich ein neues Repository anlegen. Also mach bitte ein neues Verzeichnis wie Arcarde. Und
lege ein entsprechendes Repository bei Codeberg an. Jetzt initialisierst du git und verknotest es mit Codeberg. Das
kennst du alles schon vom vorherigen Kapiel. Um pygame nutzen zu können, müssen wir eine Bibliothek installieren, die
standardmäßig nicht installiert wird. Das könnten wir jetzt auf dem gesamten System tun. Das ist aber aus verschiedenen
Gründen nicht gut, alleine schon, weil du Dir so mit der Zeit Deinen Rechner vollmüllst. Wir schaffen für unserd
Projekte ab jetzt immer eine Umgebung, in der die benötigten Pakete vom Rest des Systems abgeschottet werden. Am Anfang
scheint das lästig, aber sei Dir sicher, du wirst es zu schätzen wissen. Du brauchst jetzt virtualenv. Das
Terminalfenster hast du noch offen. Gib mal virtualenv ein. Kommen da irgendwelche Fehler oder kommt die Hilfeseite?
Falls die Hilfeseite kommt, prima. Dann ist das schon installiert. Falls Fehler kommen - bei allen Betriebssystemen
solltest du mit `pip install virtualenv` das ganze installiert bekommen. Wie bei anderem Installtionen - sowas kann sich
schnell garstig darstellen. Bekommst du es nicht selber hin, sei bitte nicht entmutigt, sondern lass Dir helfen.

Für die Erstellung einer virtuellen Umgebung musst du nur in dem entsprechenden Verzeichnis sein und mit
`virtualenv -p python3 venv` eingeben. Virtualenv (für virtuell environment, also virtuelle Umgebung) bekommt mit `-p`
gesagt, welche Python-Version es verwenden soll. Und mit venv, in welchem Verzeichnis er die Dateien für die Umgebung
ablegen soll. Das könnte auch anders heißen, aber bei venv dürften die meisten Programmiererinnen wissen, was sich
dahinter verbirgt. Wenn du das gemacht hast, musst du es noch aktivieren: in Linux / Mac mit `source venv/bin/activate`.
Unter Windows mit `venv\Scripts\activate.bat` oder mit `venv\Scripts\Activate.ps1`. In Deinem Terminal sollte jetzt
`(venv)` stehn, wenn es geklappt hat. Wunderbar. Sonst ist das ein guter Punkt für den Donnerstag Abend...

Jetzt kannst du sorgenlos(er) Pakete bzw. Bibliotheken installieren. Das wollen wir mit `pip install pygame` gleich mal
machen. Wenn das bei Windows-Nutzenden nicht läuft, probiert bitte `py -m pip install -U pygame --user` aus. Läuft das
sauber durch? Der schnelle Test ist, dass du schnell python startest und ein `import pygame` eingibst. Wenn keine
Fehlermeldung kommt, ist alles prima. Sonst - du weißt schon. Donnerstag und so.

Das Verzeichnis venv enthält nichts, was mit unserem Code zu tun hat. Deshalb wollen wir das auf keinen Fall in unser
Repository hochladen. Das wäre echter Datenmüll. Lege eine Datei `.gitignore` an. Das kannst du über PyCharme machen.
Rechter Mausklick auf das Projekt, `New`, dann `New Scratch File` und dann kannst du schon `.gitignore` auswählen. Da
trägst du jetzt `venv/`. Jetzt wird git dieses Verzeichnis zukünftig ausschließen. Über diese Datei können ebenso
einzelne Dateien ausgeschlossen werden. Du kannst ja schon mal in einer neuen Zeile `\*.png` eintragen, damit die
Grafikdateien nicht alle bei Codeberg landen.

Nachdem du das erfolgreich zu Fuß gemacht hast, PyCharm kann das beim Anlegen eines neuen Projektes mit erledigen. Nun
wirst du auch auf Umgebungen treffen, bei denen PyCharm nicht läuft (beispielsweise auf einem Webserver). Deswegen
solltest du das auch über die Konsole können. Wenn du lokal entwickelst - wenn du bei PyCharme auf `File` und dann
`New Project` gehst, gibt es den Puntk `New environment using`. Da kannst du virtualenv auswählen. PyCharm installiert
das und aktiviert es. Wenn du unten in der Zeile nach dem Erstellen auf Terminal klickst, erhälst du dort eine Konsole
mit aktivierter virtueller Umgebung. Und dort kannst du mit `pip install pygame` die Bibliothek ebenfalls installieren.
Und schau mal oben in die Menüleiste - da wirst du auf Git zum Klicken finden. Es lohnt sich, beide Wege zu können.
Deine IDE (also hier PyCharme) zu beherrschen, aber davon nicht abhängig zu sein.

## Kultur I.

Wir kommen noch zu Linux, aber um Dir einen Vorgeschmack zu geben, besorge Dir mal seine Biographie „Just for Fun“ von
Linus Torvalds und David Diamond. Das Buch gibt es auf Deutsch und auf Englisch. Das ist nicht neu, aber lohnt sich
immer noch. Berliner:innen können sich das leihen.

<Figure src="/images/kyo-6/Tux.png" alt="Das Tux-Maskottchen von Larry Ewing, Simon Budig, Garrett LeSage" />

Geh auf [VOEBB](https://voebb.de). Da liegt es im Magazin der Amerikanischen Gedenkbibliothek. Kennst du nicht? Dann ist
das eine gute Gelegenheit, Deutschlands größte öffentliche Bibliothek kennen zu lernen. Wenn du noch keinen Ausweis
hast - den kannst du Dir in jeder Stadtteilbibliothek ausstellen lassen. Aus historischen Gründen ist Berlins Zentrale
Landesbibliothek (ZLB) in zwei Gebäude aufgeteilt: am Halleschen Tor ist die Amerikanische Gedenkbibliothek (AGB) und
die Kinder- und Jugendbibliothek Hallesche Komet. In der AGB bekommst du ein gigantisches Film- und Musikarchiv,
Literatur, Kunst, Philosophie und andere Geisteswissenschaften. Die Berliner Stadtbibliothek befindet sich in der Breite
Straße, Nähe Alexanderplatz. Da gibt es Informatik, Medizin, Wirtschaft, Jura, Naturwissenschaften. Bei öffentlichen
Bibliotheken liegen die meisten Medien im Gegensatz zu wissenschaftlichen Bibliotheken in den Regalen. In der ZLB ist
kein Platz, deshalb sind etwa 2/3 der Medien im Magazin. Es lohnt sich also immer, im OPAC (dem Bibliothekskatalog)
nachzuschauen. Von den Magazinen gibt es gibt es gleich zwei Typen - die in den Häusern und die Außenmagazine. Bei
beiden musst du die Bücher vorbestellen. Das kostet nichts, wenn du Dir die Bücher in die besitzende Bibliothek liefern
lässt. Keine Sorge, falls Kosten entstehen würden, wird immer vorher gewarnt. Der Unterschied bei den Magazin-Typen ist,
dass beim Inhouse-Magazin das Medien taggleich, spätestens am Folgetag Dir zur Verfügung gestellt werden sollte. Beim
Außenmagazin dauert das ein paar Tage. Du kriegst eine E-Mail, wenn Dein Buch angekommen ist. Wenn du über
[VOEBB](https://voebb.de) mal „Just for Fun Torvalds“ eingibst, wirst du schnell auf das entsprechende Buch treffen.
Falls du nicht aus Berlin kommst, schau Dich mal um, was so die Bibliotheken bei Dir in der Umgebung zu bieten haben. Da
wartet manche Überraschung. Falls du das Buch nicht leihen magst, das kriegt man für einen schmalen Taler bei den
üblichen Verdächtigten Händlern im Netz. Also viel Spaß schon mal beim Lesen.
