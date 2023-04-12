<script lang="ts">
  import { onMount } from "svelte";
  import shikwasa from "../../../node_modules/shikwasa/dist/shikwasa.cjs.js";

  // props for embedded audio ressource
  export let title: string;
  export let src: string;
  export let artist: string;
  export let cover: string | undefined;

  // shikwasa container for audio widget
  // refer to the shikwasa documentation for more information
  let container: HTMLDivElement;

  // create shikwasa instance on load
  onMount(() => {
    new shikwasa.Player({
      container,
      audio: {
        artist,
        cover,
        src,
        title
      }
    });
  });
</script>

<div bind:this={container} class="mb-2" />
