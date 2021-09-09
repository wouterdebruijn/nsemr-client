<template>
  <div class="the-header">
    <div class="image-wrapper">
      <img src="@/assets/logo.svg" alt="nse master race logo" />
    </div>
    <div class="text-wrapper">
      <h1>NSE Master Race</h1>
      <h2>
        An unoffical Minecraft server for the current and former NSE students.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class TheHeader extends Vue {}
</script>

<style scoped>
h1 {
  font-size: 4em;
}

h2 {
  font-size: 2em;
}

.the-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: black;
  color: white;
}

.text-wrapper * {
  margin: 0;
}

.image-wrapper {
  margin-right: 20px;
}
</style>
