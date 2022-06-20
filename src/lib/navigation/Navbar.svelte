<script lang="ts">
  import { page } from "$app/stores";

  import Logo from "$lib/components/Logo.svelte";

  import List from "phosphor-svelte/lib/List";
  import X from "phosphor-svelte/lib/X";
  import Code from "phosphor-svelte/lib/Code";
  import ListNumbers from "phosphor-svelte/lib/ListNumbers";
  import Newspaper from "phosphor-svelte/lib/Newspaper";
  import Student from "phosphor-svelte/lib/Student";
  import MagnifyingGlass from "phosphor-svelte/lib/MagnifyingGlass";
  import Button from "$lib/components/Button.svelte";

  let sidebar_open = false;

  const sidebarLinks: [string, unknown, string, (arg: string) => boolean | null][] = [
    ["/posts/dojo/", Student, "Workshops", null],
    ["/posts/dojo/", Code, "Einführung", null],
    ["/posts/about/", Code, "Mentoren", null],
    ["/posts/news/", Newspaper, "News", null],
    [
      "/posts/kyus/",
      ListNumbers,
      "Kyus",
      (arg: string) => arg.includes("kyo") || arg.includes("kyu")
    ]
  ];
</script>

<header>
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
      <div class="sr-only">Toggle Sidebar</div>
      <X size={16} />
    </Button>

    <div class="sidebar-section">
      <ul>
        {#each sidebarLinks as [href, Icon, content, check]}
          <li>
            <a
              {href}
              class:active={check !== null
                ? check($page.url.pathname)
                : $page.url.pathname === href}
            >
              <Icon size={16} />
              {content}
            </a>
          </li>
        {/each}
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
      <div class="sr-only">Toggle Sidebar</div>

      <List size={18} />
    </button>

    <span class="nav-action p-5" />

    <a class="nav-title" href="/">
      <Logo /> <span>Coderdōjō R & B</span>
    </a>

    <nav class="nav-btn-group">
      {#each sidebarLinks as [href, Icon, content, check], i}
        <a
          {href}
          class:active={check !== null ? check($page.url.pathname) : $page.url.pathname === href}
        >
          {content}
        </a>
        {#if sidebarLinks.length !== i + 1} | {/if}
      {/each}
    </nav>

    <!-- TODO: Implement search with elasticlunr -->
    <button class="nav-search invisible">
      <div class="hidden md:inline-block">Suche</div>
      <MagnifyingGlass size={18} />
    </button>
  </div>
</header>
