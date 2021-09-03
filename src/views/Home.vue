<template>
  <div class="home">
    <TheComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import TheComponent from "@/components/TheComponent.vue";

@Options({
  components: {
    TheComponent
  }
})
export default class Home extends Vue {}
</script>
