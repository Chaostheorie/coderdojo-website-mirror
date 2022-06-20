+++
title = "Impressum"
summary = "Impressum für das CoderDojo. Bei Fragen oder Infos wende Dich bitte an die Betreiber."
showToc = false
+++

<script lang="ts">
    import DescriptionList from '$lib/components/DescriptionList.svelte';
    import Users from "phosphor-svelte/lib/Users";
    import HouseSimple from "phosphor-svelte/lib/HouseSimple";
    import Envelope from "phosphor-svelte/lib/Envelope";
    import Phone from "phosphor-svelte/lib/Phone";
</script>

# Impressum

Die Inhalte von externen Links machen wir uns nicht zu eigen.

Wenn Du Korrekturen oder Verbesserungsvorschläge hast - schreib uns bitte
einfach per E-Mail oder Matrix an.

<DescriptionList title="Betreiber" items={[
[Users, "Verantwortliche", "Kai Kobschätzki (/bengoshi) und Michael Merz (/derMicha)"],
[HouseSimple, "Addresse", "Raabestraße 8, 10405 Berlin"],
[Envelope, "E-Mail", "bengoshi ät cyber4edu pünktchen org"],
[Phone, "Telefon", "+49 30 488 24 394"]
]} />
