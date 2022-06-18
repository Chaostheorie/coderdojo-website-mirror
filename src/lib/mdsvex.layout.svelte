<script>
	import tocCache from '../.toc-cache.json';
	import Meta from './components/Meta.svelte';
	import Wip from './navigation/WIP.svelte';
	import TocDropdown from './components/TocDropdown.svelte';
	import TocList from './components/TocList.svelte';

	// data props
	export let title;
	export let description;
	export let draft;
	export let filename;
	export let prose = true;

	// helper for loading toc from tocCache
	const loadToc = () => {
		if (title === undefined || tocCache[title] === undefined) {
			return null;
		}

		// in case only one file is associated with the title -> use TocList
		const keys = Object.keys(tocCache[title]);
		if (keys.length === 1) {
			tocList = true;
			return tocCache[title][keys[0]].headings;
		}

		// otherwise use full-blown TocDropdown
		return (
			Object.entries(tocCache[title])
				// sort by first three digits
				.sort(([firstKey, _], [secondKey, _s]) => {
					if (firstKey === 'index.md') {
						return -1;
					} else if (secondKey === 'index.md') {
						return 1;
					}

					const firstNumber = digitRegex.exec(firstKey),
						secondNumber = digitRegex.exec(secondKey);

					if (firstNumber !== undefined) {
						if (secondNumber !== undefined) {
							return Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
						} else {
							return 1;
						}
					} else {
						if (secondNumber !== undefined) {
							return -1;
						} else {
							return firstKey - secondKey;
						}
					}
				})
				// ensure only entries with headings are used - they shouldn't exist ... but ya know
				.filter(([_, data]) => data.headings.length > 0)
				// extract first headline and transform into easily renderable format
				.map(([entryFilename, data]) => {
					return [entryFilename, data.headings.shift(), data.headings, data.path];
				})
		);
	};

	// regex for fetching up to 3 numbers
	const digitRegex = new RegExp(/^[0-9]{1,3}/);

	let tocList = false;
	let toc = loadToc();
</script>

<Meta {title} {description} />

{#if !draft}
	<div class="flex gap-3 w-full flex-row items-start">
		{#if prose}
			{#if toc}
				<div class="toc-container toc-container-lg">
					<div class="px-6 py-4">
						<div class="font-bold text-xl tracking-wide">{title}</div>

						<div class="toc-inner-container">
							{#if tocList}
								<TocList headings={toc} />
							{:else}
								{#each toc as [entryFilename, firstHeading, headings, targetUrl]}
									<TocDropdown
										collapsed={entryFilename !== filename}
										active={entryFilename === filename}
										{headings}
										{firstHeading}
										{targetUrl}
									/>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			{/if}

			<div class="flex-grow">
				<div class="prose lg:prose-lg prose-slate prose-extension px-2 mx-auto max-w-[100vw]">
					{#if toc}
						<div class="toc-container toc-container-sm my-2">
							<div class="font-bold text-xl tracking-wide">{title} - Inhaltsverzeichnis</div>

							{#if tocList}
								<TocList headings={toc} />
							{:else}
								<div class="toc-inner-container">
									{#each toc as [entryFilename, firstHeading, headings, targetUrl]}
										<TocDropdown
											collapsed={entryFilename !== filename}
											active={entryFilename === filename}
											{headings}
											{firstHeading}
											{targetUrl}
										/>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
					<slot />
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
{:else}
	<Wip />
{/if}
