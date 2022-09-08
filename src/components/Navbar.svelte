<script lang="ts">
  import Logo from "$components/Logo.svelte";
  import Button from "$components/Button.svelte";

  let sidebar_open = false;
  export let url: any;

  const sidebarLinks: [
    string,
    unknown,
    string,
    (arg: string) => boolean | null
  ][] = [
    ["/posts/news/", "bi-newspapers", "News", null],
    ["/posts/dojo/", "bi-code", "Einführung", null],
    [
      "/posts/kyus/",
      "bi-list-ol",
      "Kyus",
      (arg: string) => arg.includes("kyo") || arg.includes("kyu"),
    ],
    ["/posts/workshops/", "bi-people", "Workshops", null],
    ["/about/", "bi-person", "Mentoren", null],
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
      size={"small-icon"}
      opacity={0.85}
      on:click={() => {
        sidebar_open = !sidebar_open;
      }}
    >
      <div class="sr-only">Toggle Sidebar</div>
      <i class="text-2xl bi-x" />
    </Button>

    <div class="sidebar-section">
      <ul>
        {#each sidebarLinks as [href, icon, content, check]}
          <li>
            <a
              {href}
              class:active={check !== null
                ? check(url.href)
                : url.href === href}
            >
              <i class={icon} />
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

      <i class="text-xl bi-list" />
    </button>

    <span class="nav-action p-5" />

    <a class="nav-title" href="/">
      <div class="w-8 h-8">
        <Logo />
      </div>
      <span>Coderdōjō R & B</span>
    </a>

    <nav class="nav-btn-group">
      {#each sidebarLinks as [href, _, content, check], i}
        <a
          {href}
          class:active={check !== null ? check(url.href) : url.href === href}
        >
          {content}
        </a>
        {#if sidebarLinks.length !== i + 1} | {/if}
      {/each}
    </nav>
  </div>
</header>
