<template>
  <div class="pt-6 pb-6" data-app>
    <v-btn color="#00a400" depressed height="48px">
      <slot></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "GlobalButton",
};
</script>

<style scoped></style>
