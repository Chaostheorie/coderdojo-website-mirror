<script lang="ts">
  import ArrowRight from "phosphor-svelte/lib/ArrowRight";
  import Belt from "$lib/components/Belt.svelte";

  export let fill: string;
  export let count: number;
  export let href: string;
  export let title: string;
  export let description: string;
  export let last_updated: string;
</script>

<div class="px-12 py-2 lg:p-12 lg:w-1/2 flex flex-col items-start">
  <span
    class="py-1 px-2 hidden md:flex rounded text-slate-100 bg-theme-neutral bg-opacity-80 text-sm font-medium items-center gap-2 flex-no-wrap"
  >
    <Belt {fill} stroke="black" stroke-width="5pt" svg_class="h-4 w-4" />
    Kyu {count}
  </span>
  <h2 class="sm:text-3xl text-2xl font-medium mt-4 mb-4">
    {title}
  </h2>
  <p class="leading-relaxed mb-8">
    {description}
  </p>
  <div
    class="flex items-center justify-between flex-wrap pb-4 mb-4 mt-auto w-full"
  >
    <a
      class="flex py-1 px-2 justify-between no-underline text-slate-100 hover:text-slate-100 focus:outline-none transition-all ease-in-out duration-500 rounded bg-theme hover:bg-theme-dark items-center gap-2 hover:gap-3"
      {href}
    >
      Beginne Kyu
      <ArrowRight size={24} />
    </a>
    <span
      class="text-theme md:inline-flex items-center leading-none text-sm hidden"
    >
      Letzte Aktualisierung: {last_updated}
    </span>
  </div>
</div>
