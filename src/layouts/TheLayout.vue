<template>
<!--  <router-link to="signup">회원가입</router-link>-->
<!--  <router-view></router-view>-->
  <component :is="useHeader ? 'AuthLayout' : 'DefaultLayout'" />
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRoute} from "vue-router";


export default {
  name:'TheLayout',
  components: {
    AuthLayout,
    DefaultLayout
  },
  setup() {
    const route = useRoute()
    const useHeader = route.meta.useHeader


    return {
      useHeader
    }
  }
}
</script>

<style scoped>

</style>
