<script lang="ts">
  import badRoad from "$lib/assets/img/bad-roads.jpeg";

  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import clsx from "clsx";

  let liked = false;
  let commented = true;
</script>

<div
  class="w-full min-h-450px max-h-550px rounded-3xl border p-4 shadow mb-6 flex flex-col justify-evenly bg-white"
>
  <div class="h-20% flex items-center">
    <div class="profilepic rounded-full w-15 h-15 bg-black " />

    <div class="space-y mx-3">
      <div>Splendor!!!</div>
      <div class="text-sm flex items-center text-secondaryGreen ">
        <div class="i-mingcute-location-2-line inline-flex mr-2" />
        Off Nwaniba Road
      </div>
    </div>

    <div class="ml-a place-self-start i-mingcute-more-1-line text-sm" />
  </div>

  <div class="h-65% space-y-2">
    <!-- Issue Description -->
    <div class="description h-60px overflow-auto text-ellipsis text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea obcaecati fugiat odio
      dignissimos neque molestias ullam libero dicta perferendis delectus, officia enim impedit
      perspiciatis quasi, cumque quia voluptatem veritatis.
    </div>

    <!-- Time Stamp -->
    <div class="text-[#0B2040] opacity-50 text-xs">4 mins ago</div>

    <!-- content wrapper -->
    <div class="rounded-3xl w-full h-full overflow-hidden max-h-175px h-1/2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {#each [...Array(5)] as _}
          <SwiperSlide>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={badRoad} alt="Image of Road Issue" />
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  </div>

  <!-- Card Footer -->
  <!-- has the likes(i.e appreciate), comments, etc -->
  <div class="h-15% flex space-x-6 text-lg items-center pt-4 text-[#0B2040]">
    <div
      class={clsx(liked && "text-secondaryGreen")}
      on:click={() => {
        liked = !liked;
      }}
      on:keydown={() => {}}
    >
      {#if liked != true}
        <div class="i-icon-park-outline-thumbs-up" />
      {:else}
        <div class="i-ion-md-thumbs-up" />
      {/if}
    </div>

    <div
      class={clsx(commented && "text-secondaryGreen")}
      on:click={() => {
        commented = !commented;
      }}
      on:keydown={() => {}}
    >
      <div class="i-material-symbols-comment-outline-rounded  " />
    </div>

    <div class="i-ion-share-social-outline" />
  </div>

  <!-- </div> -->

  <div class="pt-3 flex justify-between text-xs text-primaryBlue">
    <div class=" opacity-30">2,340 <span class="text-xs">thumbs-up</span></div>
    <div class=" opacity-50">340 <span class="text-xs">comments</span></div>
  </div>

  <!-- Comment section -->
  {#if commented}
    <div class="w-full my-4 mx-auto">
      <div class="text-xs text-primaryBlue opacity-70 mb-3">view comments</div>
      <div class="h-1px opacity-50 bg-[#E8E8E8] w-full" />
    </div>

    <div class="bg-grey w-full p-3 rounded-lg flex justify-between">
      <input type="text" class="bg-transparent w-70% outline-none " placeholder="Comment" />
      <div
        class="square-30px rounded-full bg-secondaryGreen flex justify-center items-center text-white"
      >
        <div class="i-mingcute-send-plane-line" />
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --swiper-navigation-size: 20px;
    --swiper-theme-color: #36bf43;
  }
</style>
