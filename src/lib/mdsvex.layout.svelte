<script lang="ts">
	import Meta from './components/Meta.svelte';

	export let title;
	export let description;
	export let prose = true;
</script>

<Meta {title} {description} />

<div class="flex gap-3 w-full flex-row items-start">
	{#if prose}
		<div
			class="hidden md:block sticky justify-self-start max-w-64 w-64 top-2 px-2 py-1 h-fit mx-auto border-2 shadow rounded border-solid border-emerald-500"
		>
			<div class="px-6 py-4">
				<div class="font-bold text-xl tracking-wide">{title || 'Inhaltsverzeichnis'}</div>
				<ol class="list-decimal">
					<li>Sorting</li>
					<li>Sorting</li>
					<li>Sorting</li>
					<li>Sorting</li>
				</ol>
			</div>
		</div>
		<div class="md:-ml-64 flex-grow">
			<div class="md:prose prose-extension xl:prose-xl prose-sm mx-auto max-w-[80%]"><slot /></div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
