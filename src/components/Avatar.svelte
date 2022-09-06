<script lang="ts">
  export let src: string;
  export let alt: string;
  export let float: "left" | "right" | undefined;
</script>

<div
  class:max-w-full={!float}
  class:d-flex={!float}
  class:justify-content-center={!float}
  class:md:float-left={float === "left"}
  class:md:float-right={float === "right"}
  class="hidden md:inline-flex"
>
  <img {src} {alt} class="rounded m-2 ring-2 ring-slate-500 max-w-[20rem]" />
</div>
