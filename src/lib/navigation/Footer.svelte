<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";
  import Heart from "phosphor-svelte/lib/Heart";
  import Article from "phosphor-svelte/lib/Article";
  import Rss from "phosphor-svelte/lib/Rss";
  import LockKey from "phosphor-svelte/lib/LockKey";
  import Copyright from "phosphor-svelte/lib/Copyright";
  import Code from "phosphor-svelte/lib/Code";
  import Laptop from "phosphor-svelte/lib/Laptop";
  import User from "phosphor-svelte/lib/User";
</script>

<footer>
  <div class="footer-container">
    <div class="footer-logo">
      <a href="/">
        <Logo w={10} h={10} />
        <span> CoderDōjō <span>R & B</span></span>
      </a>
    </div>
    <div class="footer-section-container">
      <div class="footer-section ">
        <span> CoderDōjō </span>
        <ul>
          <li>
            <a href="/imprint/"><Article size={16} /> Impressum</a>
          </li>
          <li>
            <a href="https://cobalt.rocks/content/privacy/">
              <LockKey size={16} /> Datenschutzrichtline
            </a>
          </li>
          <li>
            <a href="/posts/copyright/"><Copyright size={16} /> Urheberrecht</a>
          </li>
          <li>
            <a href="/posts/contact/"><User size={16} /> Kontakt</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <span>Schnellzugriffe</span>
        <ul>
          <li class="hidden">
            <a disabled href="/rss.xml"><Rss size={16} /> RSS Feed</a>
          </li>
          <li>
            <a href="https://kit.svelte.dev/">
              <Heart size={16} /> Gebaut mit SvelteKit
            </a>
          </li>
          <li>
            <a href="https://cobalt.rocks">
              <Laptop size={16} /> Gebaut von Cobalt
            </a>
          </li>
          <li>
            <a href="https://gitlab.cobalt.rocks/coderdojo/coderdojo-website/-/tree/koneko">
              <Code size={16} /> Quellcode
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
