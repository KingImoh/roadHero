<script lang="ts">
  import badRoad from "$lib/assets/img/bad-roads.jpeg";
</script>

<div
  class="w-full min-h-[450px] max-h-[550px] rounded-3xl border p-3 shadow mb-6 flex-col flex justify-evenly z-1"
>
  <div class="h-20% flex items-center">
    <div class="profilepic rounded-full w-15 h-15 bg-black " />

    <div class="space-y mx-3">
      <div>Splendour Augustine</div>
      <div class="text-sm flex items-center text-secondaryGreen ">
        <div class="i-mingcute-location-2-line inline-flex mr-2" />
        Off Nwaniba Road
      </div>
    </div>

    <div class="ml-a place-self-start i-mingcute-more-1-line text-xl" />
  </div>

  <div class="h-65% space-y-2">
    <div class="description h-[60px] overflow-auto text-ellipsis text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea obcaecati fugiat odio
      dignissimos neque molestias ullam libero dicta perferendis delectus, officia enim impedit
      perspiciatis quasi, cumque quia voluptatem veritatis.
    </div>

    <div class="text-grey">4 mins ago</div>

    <div class="rounded-3xl w-full h-full overflow-hidden max-h-[175px] h-1/2">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={badRoad} alt="Image of Road Issue" />
    </div>
  </div>

  <div class="h-15% flex space-x-2 text-sm items-center ">
    <div
      class="bg-primaryBlue p-2 w-[80px] h-[40px] rounded-full text-white flex items-center justify-evenly"
    >
      <div class="i-emojione-monotone-clapping-hands" />
      <div>450</div>
    </div>
    <div
      class="bg-primaryBlue p-2 w-[80px] h-[40px] rounded-full text-white flex items-center justify-evenly"
    >
      <div class="i-material-symbols-comment-outline-rounded" />
      <div>50</div>
    </div>

    <div
      class="bg-grey p-2 px-4 h-[40px] rounded-full text-primaryBlue flex items-center justify-evenly"
    >
      <div class="i-ion-share-social-outline" />
    </div>
  </div>
</div>
