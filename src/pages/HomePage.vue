<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="home-card p-5 bg-white rounded elevation-3">
      <NasaPicture :picture="nasaPicture" />
      <!-- Below is reference syntax for passing a prop over to a child component -->
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    return {
      // nasaPicture: computed(() => AppState.nasaPicture),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
