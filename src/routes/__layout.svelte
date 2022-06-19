<script lang="ts">
  import Navbar from "$lib/navigation/Navbar.svelte";
  import Footer from "$lib/navigation/Footer.svelte";

  import "../app.css";
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />
