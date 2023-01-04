<script lang="ts">
  import roadheroLogo from "$lib/assets/img/roadheroLogo.png";
  import profilePicture from "$lib/assets/img/profile.jpg";
  import badRoad from "$lib/assets/img/bad-roads.jpeg";
  import RoadHeroLogo from "../components/RoadHeroLogo.svelte";
  import { onDestroy, onMount } from "svelte";
  import { isCollide } from "$lib/utils";
  import clsx from "clsx";

  let header: Element;
  let headerCollides: boolean;
  let showNotifModal = false;

  // using the "#app" div instead of "body" because overflow is set to hidden on the body
  // therefore the scroll event has no effect on the body, but works on "#app"
  onMount(() => document.querySelector("#app")!.addEventListener("scroll", handleScroll));

  onDestroy(() => document.querySelector("#app")!.removeEventListener("scroll", handleScroll));

  function handleScroll() {
    if (!header) return;
    headerCollides = isCollide(header, document.querySelector("#container")!);
  }
</script>

<div>
  <div
    class="text-2xl text-white h80 w-screen 
  flex flex-col justify-center items-center bg-primaryBlue"
  >
    <div
      class="bg-center bg-no-repeat bg-cover square-25 rounded-full mx-auto ring-secondaryGreen ring-2 ring-offset-4"
      style:background-image="url('{profilePicture}')"
    />

    <div class="pt7 pb-2 text-xl max-w-80 flex items-center space-x-2xl">
      Imoh Gbinije
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={roadheroLogo}
        alt="Profile Picture"
        class="rounded-full w5 h5 mx-2 ring-secondaryGreen ring inline ring-offset"
      />
    </div>

    <div class="text-sm text-grey opacity-50">princeemmanuel05@gmail.com</div>

    <!-- <div class="top-4 right-4 absolute i-mingcute-edit-3-line text-xl">Edit</div> -->
    <div class="btn btn-outline flex">
      <div class="i-mingcute-edit-3-line" />
      Edit profile
    </div>
  </div>

  <!-- <div w-full>
  <div
    class={clsx(" sticky top-0 p-4 bg-white z-2 m-2 w-full", headerCollides && "shadow-lg")}
    bind:this={header}
  >
    <div class="text-xl mx-auto w-fit border-b-2 border-secondaryGreen">Your Reports</div>
  </div>

  <div class="w95% flex flex-col p4 items-center justify-center mx-auto space-y-4" id="container">
    <div class="h30 w-full items-center flex rounded-lg  p4 bg-white justify-around ">
      <div class="justify-start h-full w-30% ring rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv
        </div>
        <div class="flex justify-around">
          <div class="square-25px bg-primaryBlue" />
          <div class="square-25px bg-primaryBlue" />
          <div class="square-25px bg-primaryBlue" />
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>
  </div>
</div> -->

  <div class="version fw100 text-[#D1D1D1] flex justify-center">version 1.0</div>
</div>
