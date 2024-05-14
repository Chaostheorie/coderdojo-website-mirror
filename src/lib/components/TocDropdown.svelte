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
  {#if headings.length == 0}
    <a class="toc-btn" class:toc-btn-active={active} href={targetUrl}>
      {firstHeading[0]}
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
      {firstHeading[0]}
      <span class="transition-transform duration-300 ease-in-out" class:rotate-180={collapsed}>
        <CaretDown />
      </span>
    </button>

    <ol class="toc-list" class:toc-list-collapsed={collapsed}>
      {#each headings as [heading, id]}
        <li>
          <a href="{targetUrl}#{id}" class="no-underline hover:underline focus:underline"
            >{heading}</a
          >
        </li>
      {/each}
    </ol>
  {/if}
</div>
