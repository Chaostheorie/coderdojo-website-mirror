<script lang="ts">
  export let src: string;
  export let alt: string;
  export let float: "left" | "right" | undefined;
</script>

<div
  class:max-w-full={!float}
  class:d-flex={!float}
  class:justify-content-center={!float}
  class:float-left={float === "left"}
  class:float-right={float === "right"}
>
  <figure>
    <img {src} {alt} />
    <figcaption>{alt}</figcaption>
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
