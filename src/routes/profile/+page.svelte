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

<div
  class="text-2xl text-secondaryGreen h80 w-screen 
  flex flex-col justify-center items-center"
>
  <div
    class="bg-center bg-no-repeat bg-cover w-30 h-30 rounded-full mx-auto ring-secondaryGreen ring-2 ring-offset-4"
    style:background-image="url('{profilePicture}')"
  />
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- <img
    src={profilePicture}
    alt="Profile Picture"
    class="rounded-full w30 h30 mx-auto ring-secondaryGreen ring-2 ring-offset-4"
  /> -->
  <div class="pt7 pb-1 text-3xl max-w-80">
    Imoh Gbinije
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={roadheroLogo}
      alt="Profile Picture"
      class="rounded-full w5 h5 mx-auto ring-secondaryGreen ring inline ring-offset"
    />
  </div>
  <div class="text-sm text-black opacity-50">princeemmanuel05@gmail.com</div>
  <div class="text-lg fw50 pt-2 text-primaryBlue">1203 Hero Points</div>

  <div class="top-4 right-4 absolute i-mingcute-edit-3-line text-xl">Edit</div>
</div>

<div w-full>
  <div
    class={clsx(" sticky top-0 p-4 bg-white z-2 m-2 w-full", headerCollides && "shadow-lg")}
    bind:this={header}
  >
    <div class="text-xl mx-auto w-fit border-b-2 border-secondaryGreen">Your Reports</div>
  </div>

  <div class="w95% flex flex-col p4 items-center justify-center mx-auto space-y-4" id="container">
    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] max-w-40ch overflow-hidden">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-primary rounded-inherit overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div fw450>Big Potholes</div>
        <div class="text-sm max-h-[60px] overflow-hidden text-ellipsis">
          In front of the hospital, causing traffic Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora, alias.mipkcwdpv,md[sk,vodp,'']
        </div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>

    <div class="h30 w-full items-center flex rounded-lg  p4 bg-grey justify-around ">
      <div class="justify-start h-full w-30% ring  ring-black rounded-sm overflow-hidden">
        <img src={badRoad} alt="" srcset="" class="w-full h-full " />
      </div>

      <div class="h-full w-50%">
        <div text-xl fw450>Big Potholes</div>
        <div text-sm>In front of the hospital, causing traffic</div>
      </div>

      <div class="w-5%">
        <div class="i-mingcute-location-2-line text-2xl text-primaryBlue" />
      </div>
    </div>
  </div>
</div>
