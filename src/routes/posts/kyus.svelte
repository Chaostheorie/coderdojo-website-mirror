<script context="module" lang="ts">
  // all currently implemented kyu modules
  // they are exported the endpoint of /posts/kyus-meta.json and enriched with metadata about the underlying files
  // this is convulted but the only way to get access to the fs API in order to interact with the files
  export const kyus: [number, string, string, string, string, string][] = [
    [
      7,
      "7. Kyo – Weißgurt",
      "white",
      "/src/routes/posts/kyo-7/index.md",
      "/posts/kyo-7/",
      "Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn du das Gefühl hast, hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht verstehst, liegt es nicht an Dir und anderen wird es auch so gehen. Lass es uns gemeinsam für die nächsten Leser:innen besser machen."
    ],
    [
      6,
      "6. Kyo – Gelbgurt",
      "yellow",
      "/src/routes/posts/kyo-6/index.md",
      "/posts/kyo-6/",
      "Hier siehst du gerade den ersten und noch nicht vollständigen Aufschlag für den Gelbgurt. Wir freuen uns über Fehlerkorrekturen! Wenn du das Gefühl hast, hier etwas nicht nachzuvollziehen zu können, schreib uns bitte oder sprich uns beim CoderDojo an, damit wir das Script verbessern können. Wenn du es nicht verstehst, liegt es nicht an Dir und anderen wird es auch so gehen. Lass es uns gemeinsam für die nächsten Leser:innen besser machen."
    ]
  ];

  export async function load({ fetch }) {
    const meta = await fetch("/kyus-meta.json");

    return {
      props: {
        meta: await meta.json()
      }
    };
  }
</script>

<script lang="ts">
  import KyuCard from "$lib/components/KyuCard.svelte";

  export let meta: {
    kyus: [number, string, string, string, string, string][];
  };
</script>

<div class="container px-2 py-6 lg:py-24 mx-auto">
  <div class="flex flex-wrap lg:justify-around">
    {#each meta["kyus"] as [count, title, last_updated, fill, href, description]}
      <KyuCard {count} {title} {href} {fill} {description} {last_updated} />
    {/each}
  </div>
</div>
