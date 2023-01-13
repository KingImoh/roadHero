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

  // import Welcome from "./components/Welcome.svelte";
  let footerHeight = 0;

  // if user is logged in
  // remain in current page
  // else
  // redirect to onboarding page
  // goto("/onboarding");

  // if (!user) {
  //   goto("/onboarding")
  // }

  // https://capacitorjs.com/docs/apis/cookies
</script>

<div
  id="app"
  class="relative h-screen w-full overflow-x-hidden pb-[var(--footerH)] bg-[#F5F5F5]"
  style:--footerH="{footerHeight}px"
>
  <slot />
</div>

<Footer bind:footerHeight />

{#if $modalState.title}
  <Modal />
{/if}
