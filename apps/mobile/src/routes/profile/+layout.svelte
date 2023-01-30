<script lang="ts">
  import roadheroLogo from "$lib/assets/img/roadheroLogo.png";
  import { currentUser } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { iconType, modalState } from "$lib/stores";
  import { onMount } from "svelte";
  import { pb } from "$lib/stores/pocketbase";

  let avatar: string;

  onMount(async () => {
    avatar = pb.getFileUrl($currentUser?.model!, $currentUser?.model.avatar);
  });

  const signOut = () => {
    // "logout" the last authenticated model
    $currentUser = null;
    goto("/welcome");

    $modalState = {
      title: "Sign Out",
      msg: "You have been logged out successfully",
      icon: iconType.success,
      buttons: [
        {
          text: "OK",
          handler: () => {
            $modalState.title = "";
          },
        },
      ],
    };
  };
</script>

<slot />
