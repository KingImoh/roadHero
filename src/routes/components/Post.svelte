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
</script>

<div
  class="w-full min-h-450px max-h-550px rounded-3xl border p-3 shadow mb-6 flex flex-col justify-evenly bg-white"
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
    <div class="text-grey">4 mins ago</div>

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
  <div class="h-15% flex space-x-2 text-sm items-center">
    <!-- Appreciate -->
    <div
      class="bg-primaryBlue p-2 w-80px h-40px rounded-full text-white flex items-center justify-evenly"
    >
      <div class="i-emojione-monotone-clapping-hands" />
      <div>450</div>
    </div>

    <!-- Comments -->
    <div
      class="bg-primaryBlue p-2 w-80px h-40px rounded-full text-white flex items-center justify-evenly"
    >
      <div class="i-material-symbols-comment-outline-rounded" />
      <div>50</div>
    </div>

    <!-- Share -->
    <div
      class="bg-grey p-2 px-4 h-40px rounded-full text-primaryBlue flex items-center justify-evenly"
    >
      <div class="i-ion-share-social-outline" />
    </div>
  </div>
</div>

<style>
  :root {
    --swiper-navigation-size: 20px;
    --swiper-theme-color: #36bf43;
  }
</style>
