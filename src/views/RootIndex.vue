<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TheHeader from "../components/common/TheHeader.vue";

export default {
  name: "MainPage",
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
