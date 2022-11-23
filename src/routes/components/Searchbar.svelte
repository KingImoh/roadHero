<script lang="ts">
  import { clsx } from "clsx";

  let active = false;
</script>

<div
  class={clsx(
    "inline-flex absolute right-4 top-4 items-center bg-grey p-4 rounded-full mx-auto max-w-[92%]  text-lg transition ease-[ease-out] duration-250",
    active && "w-screen justify-between ring-2 ring-secondaryGreen py-2 px-4"
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
      "hidden w-full mx-4 text-xl transition transition-all bg-transparent outline-none",
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
