<script lang="ts">
  import { page } from "$app/stores";

  // props
  export let headings: [string, string][];
</script>

<div class="toc-dropdown">
  <ol class="toc-list-standalone">
    {#each headings as [heading, id]}
      <li>
        <a href="{$page.url.pathname}#{id}">{heading}</a>
      </li>
    {/each}
  </ol>
</div>
