<template>
  <div class="app-container">
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["navTitle"]),
  },
  methods: {
    onBack() {
      this.$router.back(-1)
    },
  },
}
</script>

<style lang="less" scoped>
.app-container {
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main {
  width: 100vw;
  height: calc(100vh - 56px);
}
</style>
