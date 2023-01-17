<script lang="ts">
  // props for embedded audio ressource
  export let title = "";
  export let source: string[] | string;

  const extract_ending = (url: string) => {
    return "video/" + url.split(".").pop();
  };
</script>

<video controls aria-title={title} width="100%">
  {#each source as src}
    <source {src} type={extract_ending(src)} />
  {/each}
</video>
