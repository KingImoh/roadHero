<script lang="ts">
  import Search from "./components/Searchbar.svelte";
  import clsx from "clsx";
  import Post from "./components/Post.svelte";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import welcome from "$lib/assets/img/welcome-3.png";
  import roadHero from "$lib/assets/img/roadheroLogo.png";
  import { trpc } from "$lib/trpc";
  import { pb } from "$lib/stores/pocketbase";
  import { goto } from "$app/navigation";

  pb.autoCancellation(false);
  let posts: any[] = [];

  onMount(async () => {
    const resultList = await trpc.reports.get.query();
    // console.log({ resultList });
    posts = resultList.items;
  });

  let selected = false;
</script>

<!-- <div
  bind:this={header}
  class={clsx("top-0 sticky bg-white z-999", headerCollides && "border-b-2 border-secondaryGreen")}
> -->
<div class="sticky top-0 z-999 bg-white">
  <Search />
</div>

<div class="m-4 px-1" id="container">
  <div flex justify-between items-center>
    <div>
      <select
        name="fliter"
        id=""
        class="border border-primaryBlue bg-transparent p-2 mb-4 rounded-lg text-primaryBlue outline-none"
      >
        <option value="new">Newest</option>
        <option value="appreciated">Appreciated</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>

    <div class="flex items-center overflow-auto mb-4 ml-4 space-x-2 shadow-inner p-1 rounded-full">
      <!-- {#each [...Array(5)] as element}
        svelte-ignore a11y-click-events-have-key-events
        <div
          class="flex border-primaryBlue rounded-full border w-fit p-2 text-xs space-x-1"
          on:click={() => {
            selected = !selected;
          }}
        >
          <div>Potholes</div>
          <div class={selected ? "i-carbon-subtract" : "i-material-symbols-add"} />
        </div>
      {/each} -->
    </div>
  </div>

  {#if posts.length === 0}
    <div class="flex flex-col justify-center items-center h-150 space-y-3">
      <img src={welcome} alt="" />
      <p class="text-2xl text-primaryBlue">No reports yet</p>
      <p class="text-xl text-primaryBlue text-center">Be the first to make a report in your area</p>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="mt-10 inline-flex square-15 items-center p-4 justify-center rounded-full bg-grey ring-2 ring-secondaryGreen ring-offset-4"
        on:click={() => {
          goto("/report");
        }}
      >
        <img src={roadHero} class="" alt="road Hero Logo" srcset="" /><!--<RoadHeroLogo>-->
      </div>
      <div
        class="i-fluent-cursor-click-20-filled text-3xl bg-secondaryGreen animate-head-shake animate-count-infinite animate-duration-5s"
      />
    </div>
  {:else}
    {#each posts as post (post.id)}
      <Post reportId={post.id} />
    {/each}
  {/if}
</div>
