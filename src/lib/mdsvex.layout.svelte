<script>
	import raw_toc from '../.toc-cache.json';
	import jump from 'jump.js';
	import scrollSpy from 'simple-scrollspy';
	import Meta from './components/Meta.svelte';
	import { onMount } from 'svelte';

	export let title;
	export let description;
	export let prose = true;

	let menu;
	let toc = raw_toc[title] !== undefined ? raw_toc[title] : null;

	onMount(() => {
		if (toc) {
			scrollSpy(menu, {
				menuActiveTarget: '[data-type="scrollspy-links"]',
				hrefAttribute: 'data-target',
				sectionClass: '[data-type="scrollspy-tracked"]',
				activeClass: 'active',
				smoothScroll: {
					duration: 1000,
					offset: -100
				},
				smoothScrollBehavior: function (element, options) {
					jump(element, options); // jump(element.querySelector('h1, h2, h3, h4'), options);
				}
			});
		}
	});
</script>

<Meta {title} {description} />

<div class="flex gap-3 w-full flex-row items-start">
	{#if prose}
		<div
			class="hidden md:block sticky justify-self-start max-w-64 w-64 top-2 px-2 py-1 h-fit mx-auto border-2 shadow rounded border-solid border-theme-neutral"
		>
			{#if toc}
				<div class="px-6 py-4">
					<div class="font-bold text-xl tracking-wide">{title || 'Inhaltsverzeichnis'}</div>
					<ul class="toc-menu" bind:this={menu}>
						{#each toc as [headline, id]}
							<li>
								<a
									href="#{id.match(/(.*)-section/)[1]}"
									data-target="#{id}"
									class=""
									data-type="scrollspy-links"
								>
									{headline}
								</a>
							</li>
						{/each}
					</ul>
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
