<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let href: string = undefined;
  export let color: "theme" | "secondary" = "theme";
  export let size: "small" | "small-icon" | "medium" = "medium";
  export let opacity = 1.0;

  const dispatch = createEventDispatcher();
</script>

{#if href}
  <a
    {href}
    class="button button-{color} button-{size}"
    style="--tw-bg-opacity: {opacity};"
    on:click={(evt) => {
      dispatch("click", evt);
    }}
  >
    <slot />
  </a>
{:else}
  <button
    class="button button-{color} button-{size}"
    style="--tw-bg-opacity: {opacity};"
    on:click={(evt) => {
      dispatch("click", evt);
    }}
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .button {
    @apply flex items-center justify-between gap-3 rounded border-0 text-slate-100 no-underline transition-all duration-500 ease-in-out focus:outline-none;
  }

  /* Size variants */
  .button-small {
    @apply py-1 px-3;
  }

  .button-small-icon {
    @apply p-3;
  }

  .button-medium {
    @apply py-2 px-6 text-lg;
  }

  /* Color variants (respects the currently loaded color palette) */
  .button-theme {
    @apply bg-theme hover:bg-theme-dark dark:bg-theme-dark dark:hover:bg-theme-neutral;
  }

  .button-secondary {
    @apply bg-secondary hover:bg-secondary-dark dark:bg-secondary-dark dark:hover:bg-secondary;
  }
</style>
