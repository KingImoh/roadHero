<script lang="ts">
  import { clsx } from "clsx";
  import { fly } from "svelte/transition";

  import roadhero from "$lib/assets/img/roadhero.png";

  let active = false;
</script>

<header class="flex items-center h-20 w-screen top-0 sticky">
  {#if !active}
    <div class="inline-flex justify-start h-12 p-4" transition:fly={x:20}>
      <img src={roadhero} alt="" srcset="" />
    </div>
  {/if}

  <div
    class={clsx(
      "inline-flex fixed right-4 top-4 items-center bg-grey p-4 rounded-full mx-auto max-w-[92%] shadow text-lg transition ease-[ease-out] duration-250",
      active && "w-screen justify-between ring-2 ring-secondaryGreen py-2 px-4 shadow-xl"
    )}
  >
    <div
      class={clsx("i-ri-search-line inline-block fw700", active && "rotate-90")}
      on:click={() => {
        active = true;
      }}
      on:keydown={() => {}}
    />

    <input
      type="text"
      class={clsx(
        "hidden w-full mx-4 text-lg transition transition-all bg-transparent outline-none",
        active && "inline-flex"
      )}
      placeholder="Search your area..."
    />

    <div
      on:click={() => {
        active = false;
      }}
      on:keydown={() => {}}
    >
      <div class="i-mingcute-close-line" class:hidden={!active} />
    </div>
  </div>
</header>
