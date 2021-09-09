<template>
  <div class="home">
    <TheHeader />
    <div class="border-wrapper">
      <div class="content">
        <p>
          NSE Master Race is a small project started by Felix Hendrix and
          <a href="https://wouterdebruijn.nl/">Wouter de Bruijn</a>. We created
          a Minecraft server where current and former NSE students can play
          together.
        </p>
        <p>
          We created a fool proof system that makes sure only NSE studens are
          able to join. The whitelist box below uses worlds best encryption
          invented in circa 60 BC. This makes sure no SE students are able to
          get in. Get yourself whitelisted by completing the puzzle below.
        </p>
      </div>
      <div class="content">
        <b>Start of puzzle</b><br /><br />
        <code>
          Some times you have to take a deeper look.
        </code>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import TheHeader from "@/components/TheHeader.vue";

@Options({
  components: {
    TheHeader
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
.content {
  margin: 30px 20px;
  flex-grow: 1;
  max-height: min-content;
  font-size: 1.2em;
}

.border-wrapper {
  padding: 0 22vw;
}
</style>
