<script>
  import tocCache from "../.toc-cache.json";
  import Meta from "./components/Meta.svelte";
  import Wip from "./navigation/WIP.svelte";
  import TocDropdown from "./components/TocDropdown.svelte";
  import TocList from "./components/TocList.svelte";

  // data props
  export let title;
  export let description;
  export let draft = false;
  export let filename;
  export let prose = true;

  // helper for loading toc from tocCache
  const loadToc = () => {
    if (title === undefined || tocCache[title] === undefined) {
      return [null, null];
    }

    // in case only one file is associated with the title -> use TocList
    const keys = Object.keys(tocCache[title]);
    if (keys.length === 1) {
      return [true, tocCache[title][keys[0]].headings];
    }

    // otherwise use full-blown TocDropdown
    return [
      false,
      Object.entries(tocCache[title])
        // ensure only entries with headings are used - they shouldn't exist ... but ya know
        .filter(([_, data]) => data.headings.length > 0)
        // extract first headline and transform into easily renderable format
        .map(([entryFilename, data]) => {
          return [
            entryFilename,
            data.headings.shift(),
            data.headings,
            data.path,
          ];
        }),
    ];
  };

  const [tocList, toc] = loadToc();
</script>

<Meta {title} {description} />

{#if !draft}
  <div
    class="flex gap-3 w-full flex-col md:flex-row items-center md:items-start"
  >
    {#if prose}
      {#if toc}
        <div class="toc-container">
          <div class="p-2 md:px-6 md:py-4">
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
        <div class="prose lg:prose-lg prose-slate prose-extension">
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
