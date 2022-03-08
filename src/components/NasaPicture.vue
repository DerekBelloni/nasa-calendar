<template>
  <div>
    <img :src="picture.img" alt="" class="rounded-circle img-fluid" />
    <h2 class="my-5 bg-dark text-white p-3 rounded text-center">
      {{ picture.title }}
    </h2>
    <form class="col-6" @submit.prevent="searchImage">
      <div class="input-group m-3">
        <input
          type="date"
          class="form-control"
          placeholder="NASA Picture..."
          aria-label="NASA Picture..."
          v-model="query"
        />
        <button class="btn btn-success" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { nasaPictureService } from "../services/NasaPictureService";
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { NasaPic } from "../assets/Model/NasaPic";
import { AppState } from "../AppState";
export default {
  props: {
    picture: {
      type: NasaPic,
      required: true,
    },
  },
  setup() {
    const query = ref("");

    return {
      query,
      async searchImage() {
        try {
          await nasaPictureService.searchImage(query.value);
        } catch (error) {
          logger.error(error);
        }
      },
      // picture: computed(() => AppState.nasaPicture),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>