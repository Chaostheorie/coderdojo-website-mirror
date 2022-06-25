<script lang="ts">
  import { base_description } from "$lib/constants";

  export let title = "";
  export let description = "";
</script>

<svelte:head>
  {#if title !== ""}
    <title>
      CoderDōjō R & B - {title}
    </title>
    <meta property="og:title" content={title} />
  {:else}
    <title>CoderDōjō R & B</title>
  {/if}

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta property="og:site_name" content="CoderDōjō" />
  <meta property="og:type" content="text/html" />

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  {:else}
    <meta name="description" content={base_description} />
    <meta property="og:description" content={base_description} />
  {/if}
  <meta name="lang" content="de" />
  <meta property="og:locale" content="de" />

  <meta name="apple-mobile-web-app-title" content="CoderDōjō" />
  <meta name="application-name" content="CoderDōjō" />
  <meta name="msapplication-TileColor" content="#314958" />
  <meta name="msapplication-TileImage" content="/images/logo/mstile-144x144.png" />
  <meta name="msapplication-config" content="/images/logo/browserconfig.xml" />
  <meta name="theme-color" content="#314958" />

  <!-- theme/images/favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon-32x32.png" />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/images/logo/android-chrome-192x192.png"
  />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon-16x16.png" />
  <link rel="manifest" href="/images/logo/site.webmanifest" />
  <link rel="mask-icon" href="/images/logo/safari-pinned-tab.svg" color="#5bbad5" />
  <link rel="shortcut icon" href="/images/favicon.ico" />
  <meta name="apple-mobile-web-app-title" content="CoderDōjō Red and Blue" />
  <meta name="application-name" content="CoderDōjō Red and Blue" />
  <meta name="msapplication-TileColor" content="#d8dee9" />
  <meta name="msapplication-TileImage" content="/images/logo/mstile-144x144.png" />
  <meta name="msapplication-config" content="/images/logo/browserconfig.xml" />
  <meta name="theme-color" content="#d8dee9" />
  <meta property="og:image" content="/images/logo/android-chrome-192x192.png" />
</svelte:head>
