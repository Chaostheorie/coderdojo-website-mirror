<script lang="ts">
  import ArrowRight from "phosphor-svelte/lib/ArrowRight";

  export let href: string;
  export let title: string;
  export let description: string;
  export let date: string;
</script>

<div class="px-2 md:px-6 py-4 items-start bg-slate-50 bg-opacity-50 shadow">
  <h2 class="text-2xl mb-4">
    {title}
  </h2>
  <p class="leading-relaxed mb-8">
    {description}
  </p>
  <div class="flex items-center justify-between flex-wrap mt-auto w-full">
    <a
      class="flex py-1 px-2 justify-between no-underline text-slate-100 hover:text-slate-100 focus:outline-none transition-all ease-in-out duration-500 rounded bg-theme hover:bg-theme-dark items-center gap-2 hover:gap-3"
      {href}
    >
      Lese mehr
      <ArrowRight size={24} />
    </a>
    <span class="text-theme inline-flex items-center leading-none">
      {date}
    </span>
  </div>
</div>
