<script lang="ts">
  import { fly } from "svelte/transition";
  import { modalState } from "$lib/stores";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  $: modalTitle = $modalState.title;
  $: modalContent = $modalState.content;
</script>

<div
  transition:fade={{ duration: 1000 }}
  class="square-screen bg-black opacity-50 flex justify-center items-center absolute right-0 top-0 z-999"
>
  <div class="square-200px bg-white rounded-lg" />
</div>
