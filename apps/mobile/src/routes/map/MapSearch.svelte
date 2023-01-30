<script lang="ts">
  import { bind, onMount } from "svelte/internal";

  import { searchHistory } from "$lib/stores";
  import { Preferences } from "@capacitor/preferences";

  let start: string, end: string;

  let searching = false;
  let event: KeyboardEvent;

  onMount(() => {
    const mbScript = document.createElement("script");
    mbScript.src = "/god-abeg.js";
    mbScript.defer = true;
    mbScript.id = "search-js";

    document.head.appendChild(mbScript);

    const autofillScript = document.getElementById("search-js")!;
    autofillScript.onload = function () {
      mapboxsearch.autofill({
        accessToken:
          "pk.eyJ1Ijoia2luZ2ltb2giLCJhIjoiY2xhdjVmNWIwMDJnazNxc2o3aW14bHJseCJ9._HBlCjjOJ5fD-y6OoRqI0Q",
      });
    };
  });
</script>

<div
  class="{searching
    ? 'h-700px rounded-lg'
    : 'h-350px'} pb-70px p-6 w-screen bg-white absolute bottom-0 z-10"
>
  <form>
    {#if !searching}
      <div class=" flex rounded-lg overflow-hidden">
        <div class="bg-secondaryGreen w-50px flex justify-between items-center">
          <div class="i-ri-search-line text-white mx-auto" />
        </div>
        <input
          class="px-5 py-3 bg-grey fw70 outline-none text-sm w-full"
          type="text"
          placeholder="Search for location..."
          autocomplete="street-address"
          bind:value={start}
          on:keypress={async event => {
            if (event.key === "Enter") {
              $searchHistory?.push(start);

              await Preferences.set({
                key: "RoadheroSearchHistory",
                value: JSON.stringify($searchHistory),
              });
              searching = true;
              console.log($searchHistory);
            }
          }}
        />
      </div>
    {:else}
      <div flex rounded-lg overflow-hidden space-x-2>
        <div class="bg-secondaryGreen flex items-center rounded">
          <div class="i-heroicons-outline-arrow-long-down text-3xl bg-white" />
        </div>
        <div class="space-y-2">
          <input
            id="startSearch"
            class="px-5 py-2 bg-grey fw70 outline-none text-sm w-full rounded-lg"
            type="text"
            placeholder="Start"
            autocomplete="street-address"
            bind:value={start}
            on:keypress={async event => {
              if (event.key === "Enter") {
                $searchHistory?.push(start);

                await Preferences.set({
                  key: "RoadheroSearchHistory",
                  value: JSON.stringify($searchHistory),
                });
              }
              // searching = true;
            }}
          />

          <input
            class="px-5 py-2 bg-grey fw70 outline-none text-sm w-full rounded-lg"
            type="text"
            placeholder="Destination"
            autocomplete="street-address"
            bind:value={end}
            on:keypress={async event => {
              if (event.key === "Enter") {
                $searchHistory?.push(end);

                await Preferences.set({
                  key: "RoadheroSearchHistory",
                  value: JSON.stringify($searchHistory),
                });
                searching = false;
              }
            }}
          />
        </div>
      </div>
    {/if}
  </form>

  <!-- Location List and Suggestions -->
  <div class="mt-5 h-215px overflow-auto">
    {#each $searchHistory as element}
      <!-- Location Suggestion -->
      <div class="border-b-2 border-grey py-4 flex items-center space-x-4">
        <div class="i-ic-sharp-location-on text-2xl bg-gray" />
        <div>
          <div class="">{element}</div>
          <!-- <div class="text-xs opacity-50">Kathmandu, Nepal</div> -->
        </div>
      </div>
    {/each}
    <div
      class="bg-grey p-2 flex text-center space-x-4 justify-center border border-t-none rounded-t-none border-secondaryGreen rounded-lg"
    >
      <div>
        <div class="">Choose Location on Map</div>
      </div>
      <div class="i-ri-road-map-fill  bg-secondaryGreen" />
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="bg-secondaryGreen text-white p-2 flex text-center w-fit rounded-lg  my-4"
    on:click={async () => {
      await Preferences.clear();
      $searchHistory = [];

      console.log("cleared", searchHistory);
    }}
  >
    Clear Search History
  </div>
</div>
