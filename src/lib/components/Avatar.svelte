<script lang="ts">
	export let src: string;
	export let alt: string;
	export let float: 'left' | 'right' | undefined;
</script>

<div
	class:max-w-full={!float}
	class:d-flex={!float}
	class:justify-content-center={!float}
	class:md:float-left={float === 'left'}
	class:md:float-right={float === 'right'}
	class="hidden md:inline-flex items-center justify-center rounded-full bg-slate-300 bg-opacity-50 w-40 h-40"
>
	<img {src} {alt} class="rounded-full w-36 h-36" />
</div>

<style lang="postcss">
	figure {
		@apply bg-transparent inline-block px-2 my-0 !important;

		& > img {
			@apply my-0 !important;
		}

		& > figcaption {
			@apply text-sm text-end;
		}
	}
</style>
