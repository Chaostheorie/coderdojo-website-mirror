<script lang="ts">
  export let items: [unknown, string, string][];
  export let title: string;
</script>

<div class="flex flex-col">
  <h2>
    {title}
  </h2>
  <dl class="flex flex-col gap-2 list-none">
    {#each items as [Icon, dt, dd]}
      <div class="flex flex-row flex-wrap gap-3 justify-between md:flex-nowrap">
        <dt class="flex items-center gap-2"><Icon size={16} /> {dt}</dt>
        <dd>{dd}</dd>
      </div>
    {/each}
  </dl>
</div>
