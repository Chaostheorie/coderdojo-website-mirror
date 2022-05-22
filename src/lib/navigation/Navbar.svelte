<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';

	import List from 'phosphor-svelte/lib/List';
	import X from 'phosphor-svelte/lib/X';
	import Code from 'phosphor-svelte/lib/Code';
	import ListNumbers from 'phosphor-svelte/lib/ListNumbers';
	import Newspaper from 'phosphor-svelte/lib/Newspaper';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import Button from '$lib/components/Button.svelte';

	let sidebar_open = false;
</script>

<header>
	<div
		class="sidebar-backdrop"
		class:sidebar-open={sidebar_open}
		on:click={() => {
			sidebar_open = !sidebar_open;
		}}
	/>

	<div
		class="sidebar-backdrop"
		class:sidebar-backdrop-open={sidebar_open}
		on:click={() => {
			sidebar_open = false;
		}}
	/>
	<div class="sidebar" class:sidebar-open={sidebar_open}>
		<Button
			size="small-icon"
			opacity={0.85}
			on:click={() => {
				sidebar_open = !sidebar_open;
			}}
		>
			<X size={16} />
		</Button>

		<div class="sidebar-section">
			<ul>
				<li>
					<a href="/posts/dojo"><Code size={16} /> Dōjō</a>
				</li>
				<li>
					<a href="/news/"><Newspaper size={16} /> News</a>
				</li>
				<li>
					<a href="/posts/kyo-7"><ListNumbers size={16} /> Kyus</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="navbar">
		<button
			type="button"
			class="nav-toggle"
			on:click={() => {
				sidebar_open = !sidebar_open;
			}}
		>
			<List size={18} />
		</button>
		<span class="nav-action p-5" />

		<a class="nav-title" href="/">
			<Logo /> <span>Coderdōjō R & B</span>
		</a>

		<nav class="nav-btn-group">
			<a href="/posts/dojo">Dōjō</a>
			<a href="/news/">News</a>
			<a href="/posts/kyus">Kyus</a>
		</nav>

		<button class="nav-search">
			<div class="hidden md:inline-block">Suche</div>
			<MagnifyingGlass size={18} />
		</button>
	</div>
</header>
