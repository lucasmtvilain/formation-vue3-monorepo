<template>
  <main>
    <h1>Gérer efficacement votre stock !</h1>
    <router-link
      to="/stock"
      class="button primary"
      @mouseover="isOver = true"
      @mouseout="isOver = false"
    >
      <span>Voir le stock</span>
      <fa-icon :spin="isOver" icon="fa-solid fa-angle-right" />
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// export default {
//   name: 'HomeView'
// }

const isOver = ref<boolean>(false)
</script>

<style scoped lang="scss">
main {
  flex: 0;
}
</style>
