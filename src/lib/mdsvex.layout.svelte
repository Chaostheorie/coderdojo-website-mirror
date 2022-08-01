<script>
  import toccache from "../.toc-cache.json";
  import Meta from "./components/Meta.svelte";
  import Wip from "./navigation/WIP.svelte";
  import TocDropdown from "./components/TocDropdown.svelte";
  import TocList from "./components/TocList.svelte";

  // data props
  export let title;
  export let description;
  export let summary;
  $: metadescription = description ? description : summary;
  export let draft = false;
  export let filename;
  export let prose = true;
  export let showtoc = true;

  // helper for loading toc from toccache
  const loadtoc = () => {
    if (title === undefined || toccache[title] === undefined || !showtoc) {
      return [null, null];
    }

    // in case only one file is associated with the title -> use toclist
    const keys = Object.keys(toccache[title]);
    if (keys.length === 1) {
      return [true, toccache[title][keys[0]].headings];
    }

    // otherwise use full-blown tocdropdown
    return [
      false,
      object
        .entries(toccache[title])
        // ensure only entries with headings are used - they shouldn't exist ... but ya know
        .filter(([_, data]) => data.headings.length > 0)
        // extract first headline and transform into easily renderable format
        .map(([entryfilename, data]) => {
          return [entryfilename, data.headings.shift(), data.headings, data.path];
        })
    ];
  };

  const [toclist, toc] = loadtoc();
</script>

<Meta {title} description={metadescription} />

{#if !draft}
  <div class="flex gap-3 w-full flex-col md:flex-row items-center md:items-start">
    {#if prose}
      {#if toc}
        <div class="toc-container">
          <div class="p-2 md:px-6 md:py-4">
            <div class="font-bold text-xl tracking-wide">{title}</div>

            <div class="toc-inner-container">
              {#if toclist}
                <TocList headings={toc} />
              {:else}
                {#each toc as [entryfilename, firstheading, headings, targeturl]}
                  <TocDropdown
                    collapsed={entryfilename !== filename}
                    active={entryfilename === filename}
                    {headings}
                    {firstheading}
                    {targeturl}
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
  <slot />
{/if}
