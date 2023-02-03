<script lang="ts">
  import { pb } from "$lib/stores/pocketbase";
  //@ts-ignore
  import { Record } from "pocketbase";
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { trpc } from "$lib/trpc";
  import { currentUser } from "$lib/stores";

  dayjs.extend(relativeTime);

  let likers: never[] = [];
  let url: string;
  const userId = $currentUser?.model.id! as never;

  export let commentId: string;

  console.log("commentId", commentId);

  let user = {
    username: "",
    avatar: "",
  } as unknown as Record;

  let comment = {
    content: "",
    upvotes: {},
    report: "",
    user: "",
    expand: { user: user },
  } as unknown as Record;

  onMount(async () => {
    comment = (await trpc.comments.getOne.query({
      id: commentId,
      expand: "user",
    })) as unknown as Record;

    likers = comment.upvotes.value;

    await pb.collection("comments").subscribe(commentId, async ({ action, record }) => {
      likers = comment.upvotes.value;
    });

    const user = await pb.collection("users").getOne(comment?.user as string);
    // console.log("user", user);

    url = pb.getFileUrl(user, user?.avatar);
  });

  $: liked = likers.includes(userId);
</script>

<div class="flex space-x-6 p-3  bg-white rounded-lg m-2 max-h-200px">
  <div>
    <div
      class=" square-50px rounded-full bg-center bg-no-repeat bg-cover"
      style:background-image="url({url})"
    />
  </div>
  <div>
    <div class="font-semibold">{user?.username}</div>
    <div class="max-h-70px overflow-auto w-55">
      {comment.content}
    </div>
    <div class="flex justify-between mt-4 text-sm opacity-70">
      <div>{dayjs(comment.created).fromNow()}</div>
      <div>{likers.length} upvotes</div>
    </div>
  </div>
  <div class="flex items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="{liked
        ? 'i-ion-md-thumbs-up'
        : 'i-icon-park-outline-thumbs-up'} text-xl bg-secondaryGreen"
      on:click={async () => {
        // console.log(likers, liked);

        if (liked) {
          likers = likers?.filter(id => id != userId);
        } else {
          likers?.push(userId);
        }
        console.log("liker", commentId, likers);

        await pb.collection("comments").update(commentId, {
          upvotes: { value: likers },
        });
        console.log("About to like ", likers, liked);
      }}
    />
  </div>
</div>
