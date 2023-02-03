<script lang="ts">
  import { goto } from "$app/navigation";
  import { modalState, iconType, currentUser } from "$lib/stores/index";
  import { base_url } from "$lib/utils";
  import { pb } from "$lib/stores/pocketbase";
  import { trpc } from "$lib/trpc";
  import ImageInput from "../../../../report/ImageInput.svelte";

  let media: File;
  let user = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatar: "",
  };
  const formData = new FormData();
  let loading: boolean;

  const signup = async () => {
    loading = true;

    try {
      formData.append("avatar", media);

      // console.log("user:", user);
      // user.avatar = formData;
      const authData = await fetch(base_url + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(res => res.json());

      if (authData.worked) {
        await pb.collection("users").authWithPassword(user.email, user.password);
        authData.record = await pb.collection("users").update(authData.record.id, formData);

        $currentUser = { ...user, model: authData.record };

        $modalState = {
          title: "Sign Up Successful",
          msg: `You have successfully signed up. Welcome to Road Hero!`,
          buttons: [
            {
              text: "Continue",
              handler: () => {
                $modalState.title = "";
              },
            },
          ],
          icon: iconType.success,
        };
        // const verificationEmail = await pb.collection("users").requestVerification(user.email);
        // goto("/welcome/login/email/verify");
        loading = false;
        goto("/");
      } else if (authData.status === 400) {
        $modalState = {
          title: authData.data.message,
          msg: "Try again. Something went wrong.",
          buttons: [
            {
              text: "Continue",
              handler: () => {
                $modalState.title = "";
              },
            },
          ],
          icon: iconType.error,
        };
      }
    } catch (error: any) {
      // let errors: [string, string][] = Object.entries(error.data.data);

      // for (let i = 0; i < errors.length; i++) {
      //   errors.push(errors[i][1]);
      //   console.log(errors[i][1]);
      // }
      console.log("error:", error);

      $modalState = {
        title: error.data.message,
        msg: "Try again. Something went wrong.",
        buttons: [
          {
            text: "Continue",
            handler: () => {
              $modalState.title = "";
            },
          },
        ],
        icon: iconType.error,
      };
    }
  };
</script>

<div class="p-6">
  <div class="py-6 flex space-x-2 items-center">
    <a href="/welcome/login/email">
      <div class="i-material-symbols-arrow-back-ios-new-rounded text-xl " /></a
    >
    <div class="text-[1.25rem]">Sign Up to Road Hero</div>
  </div>
  <form>
    <div class="space-y-5">
      <div flex justify-between>
        <div class="w-2/3">
          <label class="font-500" for="email">Username</label>

          <input
            type="text"
            class="bg-transparent outline-none border w-full p-3 mt-3 rounded-lg"
            placeholder="RoadHeroKing"
            bind:value={user.username}
            required
          />
        </div>
        <div class="w-1/5 flex flex-col items-center">
          <label class="font-500" for="avatar">Avatar</label>
          <label for="avatar">
            <div
              class="rounded-lg square-50px text-center border border-secondaryGreen  mt-3 overflow-hidden"
            >
              <ImageInput bind:image={media} />
            </div>
            <!-- class="{user.avatar == ''
              ? 'bg-primary-blue'
              : 'bg-secondaryGreen'} square-50px rounded-full flex justify-center items-center mt-2" -->
          </label>
          <!-- <input
          type="file"
          class="bg-transparent outline-none border w-full p-3 rounded-lg"
          bind:file={user.avatar}
        /> -->

          <!-- <input type="file" id="avatar" accept=".jpg, .jpeg, .png" hidden bind:files={user.avatar} /> -->
        </div>
      </div>
      <div>
        <label class="font-500" for="email">E-Mail</label>

        <input
          type="email"
          class="bg-transparent outline-none border w-full p-3 rounded-lg"
          placeholder="roadhero@example.com"
          bind:value={user.email}
          required
        />
      </div>

      <div>
        <label for="password" class="font-500">Password</label>

        <input
          type="password"
          class="bg-transparent outline-none border w-full p-3 rounded-lg"
          placeholder="xxxxxxx"
          bind:value={user.password}
          required
        />
      </div>

      <div>
        <label for="password" class="font-500">Confirm password</label>

        <input
          type="password"
          class="bg-transparent outline-none border w-full p-3 rounded-lg"
          placeholder="xxxxxxx"
          bind:value={user.passwordConfirm}
          required
        />
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <button
        class="w-full bg-secondaryGreen text-white flex justify-center items-center p-3 rounded-lg"
        on:submit={signup}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>

      <div class="flex justify-between text-sm text-secondaryGreen underline">
        <a href="/welcome/login/email">Already have an account? Click here</a>
      </div>
    </div>
  </form>
</div>
