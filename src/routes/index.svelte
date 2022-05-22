<script lang="ts">
	import Quotes from 'phosphor-svelte/lib/Quotes';
	import Arrow from 'phosphor-svelte/lib/ArrowFatLineRight';
	import Button from '$lib/components/Button.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title={'Willkomen zum CoderDōjō'} />

<div class="md:items-center md:mt-[10%] flex gap-4 md:flex-row flex-col px-5 mx-auto">
	<div class="flex flex-col gap-3 md:w-1/2 w-full">
		<h1 class="sm:text-3xl text-center text-2xl font-medium">
			Willkomen zum CoderDōjō <span class="bg-gradient-reverse bg-clip-text text-transparent">
				Red und Blue
			</span>
		</h1>
		<p class="leading-relaxed text-lg">
			Willkommen beim CoderDōjō für Jugendliche! Wir sitzen zwar in Berlin, aber da bei uns vieles
			online stattfindet, kannst Du bei uns an vielem auch teilnehmen, wenn Du hier nicht wohnst.
			Wir wollen gemeinsam mit Dir die rote Pille nehmen und das Wunderland entdecken. Grundsätzlich
			gibt es bei uns zwei Gruppen, die sich beide donnerstags ab 20:30 Uhr hier treffen bzw. per
			Matrix verabreden oder austauschen. Schau einfach unter News nach, was aktuell ansteht.
		</p>
		<div class="flex flex-row justify-center">
			<Button href="/posts/kyo-7/">
				Zum Dojo <Arrow size={16} />
			</Button>
		</div>
	</div>
	<div class="quote-card">
		<Quotes size={24} color="#10B981" />
		<p>
			Das ist deine letzte Chance. Danach gibt es kein zurück. Nimm die blaue Pille — die Geschichte
			endet, du wachst in deinem Bett auf und glaubst was du auch immer glauben willst. Nimm die
			rote Pille — du bleibst hier im Wunderland und ich werde dir zeigen wie tief das Kaninchenloch
			reicht.
		</p>
		<span id="bar" />
		<h2>Matrix</h2>
	</div>
</div>
