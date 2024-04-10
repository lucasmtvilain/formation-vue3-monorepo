<template>
  <header>
    <router-link to="/">
      <img src="/assets/logo.svg" alt="Logo Gestion Stock" />
      <span>Gestion Stock</span>
    </router-link>
  </header>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'HeaderLayout',
//   props: {}
// })

export default {
  name: 'HeaderLayout'
  //props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background: #eee;
  height: 3em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }

    img {
      height: 2.5em;
    }

    span {
      font-size: 1.3em;
      font-weight: bold;
    }
  }
}
</style>
