<script lang="ts">
	export let src: string;
	export let alt: string;
	export let float: 'left' | 'right' | undefined;
</script>

<div class:d-flex={!float} class:justify-content-center={!float}>
	<figure class="bg-transparent inline-block px-2">
		<img {src} class:float-left={float === 'left'} class:float-right={float === 'right'} {alt} />
		<figcaption class="text-sm text-end">{alt}</figcaption>
	</figure>
</div>
