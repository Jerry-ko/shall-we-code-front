<template>
  <v-app>
      <TheLayout>
        <router-view />
      </TheLayout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLayout from "@/layouts/TheLayout.vue"

export default defineComponent({
  name: "App",
  components: {TheLayout},
  data() {
    return {};
  },

  mounted() {
  }
});
</script>
