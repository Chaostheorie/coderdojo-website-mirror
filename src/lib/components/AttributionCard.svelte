<script lang="ts">
  import ArrowRight from "phosphor-svelte/lib/ArrowElbowDownRight";
  import Button from "./Button.svelte";

  export let license: {
    name: string;
    copyright: string | undefined;
    publisher: string;
    repository: string | undefined;
    url: string;
    licenseText: string;
  };
  $: description =
    license.copyright !== undefined && license.copyright !== ""
      ? license.copyright
      : license.name + " published by " + license.publisher;
  $: href =
    license.repository !== undefined && license.repository !== ""
      ? license.repository
      : license.url;
</script>

<div class="px-2 md:px-6 py-2 items-start bg-slate-50 bg-opacity-50 shadow">
  <span class="text-2xl mb-4 my-0">
    {license.name}
  </span>
  <p class="leading-relaxed mb-8">
    {description}
  </p>
  <div class="flex items-center justify-around flex-wrap mt-auto w-full">
    <Button {href} color="theme-neutral" size="small">
      Zum Projekt
      <ArrowRight size={24} />
    </Button>
    <Button
      color="theme-neutral"
      size="small"
      on:click={() => {
        // TODO: Implement a modal dialog for this part
        alert(license.licenseText);
      }}
    >
      Lizens Text
    </Button>
  </div>
</div>
