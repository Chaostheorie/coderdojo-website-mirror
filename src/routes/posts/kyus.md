+++
prose = false
+++

<script lang="ts">
	import Belt from '$lib/components/Belt.svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import CardContainer from '$lib/components/CardContainer.svelte';
</script>

<CardContainer>
	<Card title_class="">
		<span slot="title" class="prose font-semibold flex justify-center text-xl items-center">
		   <Belt fill="white" stroke_width="5pt" stroke="black" /> Kyo 7
		</span>
		<span slot="content">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
		</span>
		<div class="flex justify-center" slot="actions">
			<Button href="/posts/kyo-7/">Start</Button>
		</div>
	</Card>
	<Card title_class="">
		<span class="flex justify-center text-xl items-center" slot="title">
			<Belt fill="yellow" stroke_width="2pt" stroke="black" /> Kyo 6
		</span>
		<span slot="content">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
		</span>
		<div class="flex justify-center" slot="actions">
			<Button href="/posts/kyo-6/">Continue</Button>
		</div>
	</Card>
</CardContainer>
