<script lang="ts">
  import "../app.css";
  import "@unocss/reset/tailwind.css"; // https://github.com/unocss/unocss#style-resetting
  import "uno.css"; // https://github.com/unocss/unocss/tree/main/packages/vite#installation

  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Login from "./components/Login.svelte";
  import Modal from "./components/Modal.svelte";
  import { modalState } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { currentUser } from "$lib/stores";
  import { page } from "$app/stores";

  // import Welcome from "./components/Welcome.svelte";
  let footerHeight = 0;

  // $: console.log($currentUser);
  $: if ($currentUser === null) {
    goto("/welcome");
  }

  $: showFooter = $currentUser && !$page.url.pathname.includes("comments");
</script>

<div
  id="app"
  class="relative h-screen w-full overflow-x-hidden pb-[var(--footerH)] bg-[#F5F5F5]"
  style:--footerH="{showFooter ? footerHeight : 0}px"
>
  <slot />
</div>

{#if showFooter}
  <Footer bind:footerHeight />
{/if}

{#if $modalState.title}
  <Modal />
{/if}
