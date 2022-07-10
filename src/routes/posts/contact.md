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

Du erreichst uns am besten über Matrix, siehe unten anstehender Link. Ansonsten gerne auch per E-Mail über coderdojo ät cyber4edu pünktchen org.

<div class="flex flex-col justify-center md:flex-row gap-3">
  <Button href="https://matrix.to/#/#coderdojo:matrix.cyber4edu.org"><Chat size={24} /> Matrix</Button>
  <Button href="/imprint/"><Envelope size={24} /> E-Mail</Button>
</div>
