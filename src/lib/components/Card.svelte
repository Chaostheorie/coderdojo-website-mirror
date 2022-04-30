<script lang="ts">
	export let title_class = 'mt-2 text-lg font-semibold text-gray-800 dark:text-white';
	export let content_class = 'mt-2 text-sm text-gray-600 dark:text-gray-300';
</script>

<div class="card">
	<slot name="top-box" />

	<div>
		<h2 class={title_class}>
			<slot name="title">Unknown Title</slot>
		</h2>

		<p class={content_class}>
			<slot name="content">Unknown Title</slot>
		</p>
	</div>

	<slot name="actions" />
</div>

<style lang="postcss">
	.card {
		@apply w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800;
	}
</style>
