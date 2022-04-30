<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let href: string = undefined;
	export let color: 'theme' | 'secondary' = 'theme';
	export let size: 'small' | 'small-icon' | 'medium' = 'medium';
	export let opacity = 1.0;

	const dispatch = createEventDispatcher();
</script>

{#if href}
	<a
		{href}
		class="button button-{color} button-{size}"
		style="--tw-bg-opacity: {opacity};"
		on:click={(evt) => {
			dispatch('click', evt);
		}}
	>
		<slot />
	</a>
{:else}
	<button
		class="button button-{color} button-{size}"
		style="--tw-bg-opacity: {opacity};"
		on:click={(evt) => {
			dispatch('click', evt);
		}}
	>
		<slot />
	</button>
{/if}

<style lang="postcss">
	.button {
		@apply gap-3 flex items-center justify-between no-underline text-slate-100 border-0 focus:outline-none transition-all ease-in-out duration-500 rounded;
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
		@apply bg-theme dark:bg-theme-dark hover:bg-theme-dark dark:hover:bg-theme-neutral;
	}

	.button-secondary {
		@apply bg-secondary dark:bg-secondary-dark hover:bg-secondary-dark dark:hover:bg-secondary;
	}
</style>
