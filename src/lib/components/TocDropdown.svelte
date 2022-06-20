<script lang="ts">
  // Simple dropdown handled over max-height of toc-list
  import CaretDown from "phosphor-svelte/lib/CaretDown";

  // props
  export let collapsed: boolean;
  export let active: boolean;
  export let firstHeading: [string, string];
  export let targetUrl: string;
  export let headings: [string, string][];
</script>

<div class="toc-dropdown">
  <button
    type="button"
    class="toc-btn"
    class:toc-btn-active={active}
    on:click={() => {
      collapsed = !collapsed;
    }}
  >
    {firstHeading[0]}
    <span class="transition-transform duration-300 ease-in-out" class:rotate-180={collapsed}>
      <CaretDown />
    </span>
  </button>

  <div class="toc-list" class:toc-list-collapsed={collapsed}>
    {#each headings as [heading, id]}
      <li>
        <a href="{targetUrl}#{id}">{heading}</a>
      </li>
    {/each}
  </div>
</div>
