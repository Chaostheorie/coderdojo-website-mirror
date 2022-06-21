<script lang="ts">
  export let src: string;
  export let alt: string;
  export let float: "left" | "right" | undefined;
  export let caption = true;
</script>

<div
  class:max-w-full={!float}
  class:d-flex={!float}
  class:md:justify-content-center={!float}
  class:md:float-left={float === "left"}
  class:md:float-right={float === "right"}
>
  <figure>
    <img {src} {alt} />
    {#if caption}
      <figcaption>{alt}</figcaption>
    {/if}
  </figure>
</div>

<style lang="postcss">
  figure {
    @apply my-0 inline-block bg-transparent px-2 !important;

    & > img {
      @apply my-0 !important;
    }

    & > figcaption {
      @apply text-end text-sm;
    }
  }
</style>
