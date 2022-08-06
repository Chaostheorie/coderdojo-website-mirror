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
    class="button button-{color} button-{size}"
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
    class="button button-{color} button-{size}"
    style="--tw-bg-opacity: {opacity};"
    class:button-hoverable={hoverable}
    on:click={(evt) => {
      dispatch("click", evt);
    }}
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .button {
    @apply flex items-center justify-between gap-2 rounded border-0 no-underline transition-all duration-500 ease-in-out focus:outline-none;
  }

  .button {
    @apply text-slate-100 hover:text-slate-300 !important;
  }

  .button-hoverable {
    @apply hover:gap-3 hover:bg-theme-dark hover:text-slate-100 !important;
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
    @apply bg-theme hover:bg-theme-dark;
  }

  .button-theme-neutral {
    @apply bg-theme-neutral hover:bg-theme-dark;
  }

  .button-secondary {
    @apply bg-secondary hover:bg-secondary-dark;
  }
</style>
