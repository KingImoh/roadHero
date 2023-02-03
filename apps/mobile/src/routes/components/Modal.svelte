<script lang="ts">
  import { fly } from "svelte/transition";
  import { modalState } from "$lib/stores";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  $: modalTitle = $modalState.title;
  $: modalmessage = $modalState.msg;
  $: modalButtons = $modalState.buttons;
  $: modalIcon = $modalState.icon;
</script>

<div
  transition:fly={{ duration: 700 }}
  class="square-screen bg-[#000000be] flex justify-center items-center absolute right-0 top-0 z-999"
>
  <div class="w-90% bg-white rounded-lg flex flex-col items-center p-4 h-fit">
    <div class="{modalIcon} text-3xl" />
    <div class="title text-xl p-4">{modalTitle}</div>
    <div class="message">{modalmessage}</div>
    <div class="buttons pt-6 flex justify-evenly w-full">
      {#each modalButtons as button}
        <button
          class="p-2 text-center text-white bg-secondaryGreen rounded-lg m-2 {button.color}"
          on:click={button.handler}>{button.text}</button
        >
      {/each}
    </div>
  </div>
</div>
