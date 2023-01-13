<script lang="ts">
  import { onMount } from "svelte";

  // placeholder for video component
  let VideoPlayer;

  // props for embedded audio ressource
  export let cover: string | undefined;
  export let source: string[] | string;

  // create shikwasa instance on load
  onMount(async () => {
    const component = await import("svelte-video-player");

    VideoPlayer = component.default;
  });
</script>

<svelte:component this={VideoPlayer} poster={cover} {source} />
