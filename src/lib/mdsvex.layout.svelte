<script>
	import raw_toc from '../.toc-cache.json';

	import Meta from './components/Meta.svelte';

	export let title;
	export let description;
	export let prose = true;

	let toc = raw_toc[title] !== undefined ? raw_toc[title] : null;
</script>

<Meta {title} {description} />

<div class="flex gap-3 w-full flex-row items-start">
	{#if prose}
		<div
			class="hidden md:block sticky justify-self-start max-w-64 w-64 top-2 px-2 py-1 h-fit mx-auto border-2 shadow rounded border-solid border-emerald-500"
		>
			{#if toc}
				<div class="px-6 py-4">
					<div class="font-bold text-xl tracking-wide">{title || 'Inhaltsverzeichnis'}</div>
					<ol class="list-decimal">
						{#each toc as [headline, id]}
							<li><a href="#{id}">{headline}</a></li>
						{/each}
					</ol>
				</div>
			{/if}
		</div>
		<div class="md:-ml-64 flex-grow">
			<div class="md:prose prose-extension xl:prose-xl prose-sm mx-auto max-w-[80%]">
				{#if toc}
					<div class="md:hidden flex flex-col">
						<div class="font-bold text-xl tracking-wide">{title || 'Inhaltsverzeichnis'}</div>
						<ol class="list-decimal">
							{#each toc as [headline, id]}
								<li><a href="#{id}">{headline}</a></li>
							{/each}
						</ol>
					</div>
				{/if}
				<slot />
			</div>
		</div>
	{:else}
		<slot />
	{/if}
</div>
