<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Belt from "$lib/components/Belt.svelte";
  import Arrow from "phosphor-svelte/lib/ArrowRight";
  import Meta from "$lib/components/Meta.svelte";

  export let meta: [number, string, string, string, string][] = [
    [
      7,
      "7. Kyo – Weißgurt",
      "white",
      "/posts/kyo-7/",
      "Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn du das Gefühl hast, hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht verstehst, liegt es nicht an Dir und anderen wird es auch so gehen. Lass es uns gemeinsam für die nächsten Leser:innen besser machen."
    ],
    [
      6,
      "6. Kyo – Gelbgurt",
      "yellow",
      "/posts/kyo-6/",
      "Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn du das Gefühl hast, hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht verstehst, liegt es nicht an Dir und anderen wird es auch so gehen. Lass es uns gemeinsam für die nächsten Leser:innen besser machen."
    ]
  ];
</script>

<Meta title={"Willkomen zum CoderDōjō"} />

<div class="md:items-center md:mt-[10%] flex md:flex-row flex-col px-5 mx-auto gap-4">
  {#each meta as [count, title, fill, href, description]}
    <div class="flex flex-col gap-3 md:w-1/2 w-full">
      <h2
        class="sm:text-3xl text-2xl font-medium mt-4 flex flex-row gap-3 md:gap-6 justify-center items-center"
      >
        <span class="bg-theme p-2 rounded">
          <Belt {fill} stroke="black" stroke-width="5pt" svg_class="h-4 w-4 md:w-6 md:h-6" />
        </span>
        {title}
      </h2>

      <p class="leading-relaxed text-lg">
        {description}
      </p>

      <div class="flex flex-row justify-center flex-start">
        <Button {href}>
          Zum {count}. Kyo <Arrow size={24} />
        </Button>
      </div>
    </div>
  {/each}
</div>
