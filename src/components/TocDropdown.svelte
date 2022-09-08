<script lang="ts">
  // Simple dropdown handled over max-height of toc-list
  // props
  export let collapsed: boolean;
  export let first_heading: [string, string];
  export let headings: [string, string][];
  export let active: boolean;
</script>

<div class="toc-dropdown">
  {#if headings.length == 0}
    <a class="toc-btn" class:toc-btn-active={active} href={first_heading[0]}>
      {first_heading[1]}
    </a>
  {:else}
    <button
      type="button"
      class="toc-btn"
      class:toc-btn-active={active}
      on:click={() => {
        collapsed = !collapsed;
      }}
    >
      {first_heading[1]}
      <span
        class="transition-transform duration-300 ease-in-out"
        class:rotate-180={collapsed}
      >
        <i class="text-xl bi-arrow-down-circle" />
      </span>
    </button>

    <ol class="toc-list" class:toc-list-collapsed={collapsed}>
      {#each headings as [url, heading]}
        <li>
          <a href={url}>{heading}</a>
        </li>
      {/each}
    </ol>
  {/if}
</div>
