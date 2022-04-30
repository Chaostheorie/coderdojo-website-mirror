<script lang="ts">
	import Quotes from 'phosphor-svelte/lib/Quotes';
	import Arrow from 'phosphor-svelte/lib/ArrowFatLineRight';
	import Button from '$lib/components/Button.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title={'Willkomen zum Coderdojo'} />

<div class="md:items-center md:mt-[10%] flex gap-4 md:flex-row flex-col px-5 mx-auto">
	<div class="flex flex-col gap-3 md:w-1/2 w-full">
		<h1 class="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900 ">
			Willkomen zum Coderdojo Red und Blue
		</h1>
		<p class="leading-relaxed text-lg">
			Willkommen beim CoderDojo für Jugendliche! Wir sitzen zwar in Berlin, aber da bei uns vieles
			online stattfindet, kannst Du bei uns an vielem auch teilnehmen, wenn Du hier nicht wohnst.
			Wir wollen gemeinsam mit Dir die rote Pille nehmen und das Wunderland entdecken. Grundsätzlich
			gibt es bei uns zwei Gruppen, die sich beide donnerstags ab 20:30 Uhr hier treffen bzw. per
			Matrix verabreden oder austauschen. Schau einfach unter News nach, was aktuell ansteht.
		</p>
		<div class="flex flex-row justify-center">
			<Button href="/posts/dojo">
				Zum Dojo <Arrow size={16} />
			</Button>
		</div>
	</div>
	<div class="quote-card">
		<Quotes size={24} />
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

<style lang="postcss">
	@tailwind utilities;

	@layer utilities {
		.quote-card-bg {
			background-color: #d8e8e3;
			background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%2310b981' fill-opacity='0.31' fill-rule='evenodd'/%3E%3C/svg%3E");
		}
	}

	/* Index */
	.quote-card {
		@apply hidden md:flex flex-col leading-relaxed border-solid border-2  border-emerald-500 rounded p-4 justify-around items-center md:w-1/2 w-full shadow quote-card-bg;

		#bar {
			@apply inline-block h-1 w-10 rounded bg-emerald-500 mx-2;
		}

		& h2 {
			@apply font-medium tracking-wider text-sm;
		}

		& p {
			@apply text-lg;
		}
	}
</style>
