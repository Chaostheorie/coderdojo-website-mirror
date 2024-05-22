<script lang="ts">
  import Quotes from "phosphor-svelte/lib/Quotes";
  import Info from "phosphor-svelte/lib/Info";
  import Arrow from "phosphor-svelte/lib/ArrowFatLineRight";
  import Button from "$lib/components/Button.svelte";
  import Meta from "$lib/components/Meta.svelte";
</script>

<Meta title={"Willkomen zum CoderDōjō"} />

<div class="md:items-center md:mt-[10%] flex gap-4 md:flex-row flex-col px-5 mx-auto">
  <div class="flex flex-col gap-3 md:w-1/2 w-full">
    <h1 class="sm:text-3xl text-center text-2xl font-medium">
      Willkomen zum CoderDōjō <span class="bg-gradient-reverse bg-clip-text text-transparent">
        Red und Blue
      </span>
    </h1>
    <p class="leading-relaxed text-lg">
      Willkommen beim CoderDōjō für Jugendliche! Wir sitzen zwar in Berlin, aber bei uns findet
      manches auch online oder auf Veranstaltungen des Chaos Computer Clubs bzw. nahestehenden
      Organisationen statt. Deshalb kannst Du bei uns an vielem auch teilnehmen, wenn Du hier nicht
      wohnst. Wir wollen gemeinsam mit Dir die rote Pille nehmen und das Wunderland entdecken.
      Aktuell treffen wir uns nur zu zu unseren Workshops oder wenn Teilnehmende Bedarf über unseren
      Matrix-Raum anmelden. Bei Bedarf treffen wir uns auch donnerstags <a
        href="https://bbb.cyber4edu.org/b/der-0rc-8x7-4re"
      >
        per Videokonferenz
      </a>.
    </p>
    <p class="leading-relaxed text-lg">
      Unsere
      <strong>
        aktuelle Kommunikation findet in unserem
        <a href="https://matrix.to/#/#coderdojo:matrix.cyber4edu.org"> Matrix-Raum</a> statt
      </strong>
      . Da informieren wir über anstehende Veranstaltungen - nicht nur von uns - und teilen interessante
      Podcasts, Nachrichten und ähnliches. Außerdem hast du dort jederzeit die Möglichkeit, andere anzusprechen,
      wenn du bei deinen Problemen irgendwie feststeckst. Falls dir Matrix nichts sagt -
      <a href="https://coderdojo.red/posts/kyu-7/07-browser/">
        dazu gibt es eine kurze Erklärung im Weißgurt</a
      >. Am besten schaust du da mal rein. <strong>Dort verabreden wir uns</strong>, tauschen uns
      aus und kündigen auch an, wenn sich ein Termin verschiebt oder was für Themen anstehen.
    </p>
    <p class="leading-relaxed text-lg">
      Daneben bauen wir gerade einen circa
      <strong>monatlich erscheinenden Newsletter </strong>
      auf. Schreibe eine E-Mail an
      <strong> coderdojo-newsletter-subscribe ätcyber4edu.org, </strong>
      bestätige deine Adresse über die E-Mail die du dann erhältst und du bist im Verteiler drin.
    </p>
    <div class="flex flex-row justify-center btn-group">
      <Button href="/posts/news/">
        News zum Dojo <Info size={24} />
      </Button>
      <Button href="/posts/dojo/">
        Zur Einführung<Arrow size={24} />
      </Button>
    </div>
  </div>
  <div class="quote-card">
    <Quotes size={24} color="#10B981" />
    <p>
      Das ist deine letzte Chance. Danach gibt es kein zurück. Nimm die blaue Pille — die Geschichte
      endet, du wachst in deinem Bett auf und glaubst was du auch immer glauben willst. Nimm die
      rote Pille — du bleibst hier im Wunderland und ich werde dir zeigen wie tief das Kaninchenloch
      reicht.
    </p>
    <span id="bar" />
    <h2>Matrix</h2>
  </div>
</div>
