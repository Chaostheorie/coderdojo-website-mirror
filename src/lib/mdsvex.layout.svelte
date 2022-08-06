<script>
  import toccache from "../.toc-cache.json";
  import Meta from "./components/Meta.svelte";
  import Wip from "./navigation/WIP.svelte";
  import Button from "./components/Button.svelte";
  import TocDropdown from "./components/TocDropdown.svelte";
  import TocList from "./components/TocList.svelte";
  import ArrowRight from "phosphor-svelte/lib/ArrowRight";

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
  const loadTOC = () => {
    if (title === undefined || toccache[title] === undefined || !showtoc) {
      return [null, null, null];
    }

    // in case only one file is associated with the title -> use toclist
    const keys = Object.keys(toccache[title]);
    if (keys.length === 1) {
      return [true, toccache[title][keys[0]].headings, null];
    }

    // extract entries with headings from cache
    const entries = Object.entries(toccache[title]).filter(([_, data]) => data.headings.length > 0);

    // otherwise use full-blown tocdropdown
    return [
      false,
      entries
        // extract first headline and transform into easily renderable format
        .map(([entryfilename, data]) => {
          return [entryfilename, data.headings.shift(), data.headings, data.path];
        }),
      entries
        // extract filename and original index in entries
        .map(([entryfilename, _], idx) => [entryfilename, idx])
        // find current entry - this should leave only one
        .filter(([entryfilename, _]) => entryfilename === filename)
        // map current entry optionally to next
        .map(([_, idx]) => (entries.length > idx + 1 ? entries[idx + 1][1].path : null))[0]
    ];
  };

  const [toclist, toc, next] = loadTOC();
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

          {#if next}
            <div class="flex justify-center">
              <Button href={next} hoverable={true}>
                Weiter <ArrowRight size={24} />
              </Button>
            </div>
          {/if}
        </div>
      </div>
    {:else}
      <slot />

      {#if next}
        <div class="flex justify-center">
          <Button href={next} hoverable={true}>
            Weiter <ArrowRight size={24} />
          </Button>
        </div>
      {/if}
    {/if}
  </div>
{:else}
  <Wip />
{/if}
