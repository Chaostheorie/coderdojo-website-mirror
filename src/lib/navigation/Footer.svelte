<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Heart from 'phosphor-svelte/lib/Heart';
	import Article from 'phosphor-svelte/lib/Article';
	import Rss from 'phosphor-svelte/lib/Rss';
	import LockKey from 'phosphor-svelte/lib/LockKey';
	import Copyright from 'phosphor-svelte/lib/Copyright';
	import Code from 'phosphor-svelte/lib/Code';
	import Laptop from 'phosphor-svelte/lib/Laptop';
</script>

<footer>
	<div class="footer-container">
		<div class="footer-logo">
			<a href="/">
				<Logo w={10} h={10} />
				<span> Coderdōjō R & B</span>
			</a>
			<p>Insert descrition</p>
		</div>
		<div class="footer-section-container">
			<div class="footer-section ">
				<span> Coderdojo </span>
				<ul>
					<li>
						<a href="/posts/imprint/"><Article size={16} /> Impressum</a>
					</li>
					<li>
						<a href="https://cobalt.rocks/content/privacy/"><LockKey size={16} /> Datenschutzrichtline</a>
					</li>
					<li>
						<a href="/posts/copyright/"><Copyright size={16} /> Urheberrecht</a>
					</li>
				</ul>
			</div>
			<div class="footer-section">
				<span>Schnellzugriffe</span>
				<ul>
					<li>
						<a href="/rss"><Rss size={16} /> RSS Feed</a>
					</li>
					<li>
						<a href="https://kit.svelte.dev/"><Heart size={16} /> Gebaut mit SvelteKit</a>
					</li>
					<li>
						<a href="https://cobalt.rocks"><Laptop size={16} /> Designt von Cobalt</a>
					</li>
					<li>
						<a href="https://gitlab.cobalt.rocks/coderdojo/koneko"><Code size={16} /> Quellcode</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
