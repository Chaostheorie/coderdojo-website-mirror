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
      <p>Evtl. eine Beschreibung</p>
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
          <li>
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

<style lang="postcss">
  @import "../../styles/utilities.css";
  @tailwind components;

  @layer components {
    /* Footer */
    .footer-container {
      @apply container mx-auto mt-10 mb-0 flex flex-col flex-wrap px-5 pb-2 pt-10 md:flex-row md:flex-nowrap md:items-center lg:items-start;
    }

    .footer-logo {
      @apply mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left;

      & a {
        @apply flex items-center justify-center text-base font-medium md:justify-start;

        & svg {
          @apply h-12 w-12;
        }

        & span {
          @apply ml-3 text-xl;

          & span {
            @apply bg-gradient ml-0 bg-clip-text text-transparent hover:bg-transparent hover:text-inherit;
          }
        }
      }

      & p {
        @apply text-adaptive mt-2 text-sm;
      }
    }

    .footer-section-container {
      @apply -mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left;
    }

    .footer-section {
      @apply w-full px-4 md:w-1/2;

      & > span {
        @apply mb-3 text-sm font-medium tracking-widest text-gray-900;
      }

      & ul {
        @apply mb-10 list-none;

        & li a {
          @apply flex flex-row items-center gap-1 text-gray-600 hover:text-gray-800;
        }
      }
    }
  }
</style>
