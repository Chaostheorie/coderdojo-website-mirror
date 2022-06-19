<script lang="ts">
  export let title_class =
    "prose font-semibold flex justify-center text-xl items-center";
  export let content_class = "prose mt-2 text-sm text-gray-600";
</script>

<div class="card">
  <slot name="top-box" />

  <div>
    <h2 class={title_class}>
      <slot name="title">Unknown Title</slot>
    </h2>

    <p class={content_class}>
      <slot name="content">Unknown Content</slot>
    </p>
  </div>

  <slot name="actions" />
</div>

<style lang="postcss">
  .card {
    @apply max-w-sm rounded-md bg-slate-50 px-4 py-2 shadow-md;
  }
</style>
