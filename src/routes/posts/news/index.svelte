<script context="module" lang="ts">
  export async function load({ fetch }) {
    const news = await fetch("/posts/news/news.json");

    return {
      props: {
        news: await news.json()
      }
    };
  }
</script>

<script lang="ts">
  import NewsCard from "$lib/components/NewsCard.svelte";
  import Meta from "$lib/components/Meta.svelte";

  export let news: [string, string, string, string][];
</script>

<Meta title="News" description="News und Updates rund um CoderDōjō" />

<div class="flex gap-3 w-full flex-col md:flex-row items-center md:items-start">
  <div class="flex-grow">
    <div class="prose lg:prose-lg prose-slate prose-extension mb-3 text-center">
      <h1>News</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full grid-flow-row">
      {#each news as [href, title, date, description]}
        <NewsCard {title} {href} {description} {date} />
      {/each}
    </div>
  </div>
</div>
