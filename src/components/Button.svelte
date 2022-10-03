<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let href: string = undefined;
  export let color: "theme" | "theme-neutral" | "secondary" = "theme";
  export let size: "small" | "small-icon" | "medium" = "medium";
  export let opacity = 1.0;
  export let hoverable = false;

  const dispatch = createEventDispatcher();
</script>

{#if href}
  <a
    {href}
    class="button button-{color} button-{size} not-prose"
    style="--tw-bg-opacity: {opacity};"
    class:button-hoverable={hoverable}
    on:click={(evt) => {
      dispatch("click", evt);
    }}
  >
    <slot />
  </a>
{:else}
  <button
    class="button button-{color} button-{size} brose"
    style="--tw-bg-opacity: {opacity};"
    class:button-hoverable={hoverable}
    on:click={(evt) => {
      dispatch("click", evt);
    }}
  >
    <slot />
  </button>
{/if}
