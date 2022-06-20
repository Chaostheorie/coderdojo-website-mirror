+++
title = "Kontakt"
showToc = false
+++

<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Envelope from 'phosphor-svelte/lib/Envelope';
  import Chat from 'phosphor-svelte/lib/Chat';
</script>

# Kontakt

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

<div class="flex flex-col justify-center md:flex-row md:gap-3">
  <Button href="https://matrix.to/#/#coderdojo:matrix.cyber4edu.org"><Chat size={24} /> Matrix</Button>
  <Button href="/imprint/"><Envelope size={24} /> E-Mail</Button>
</div>
