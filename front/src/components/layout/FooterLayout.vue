<template>
  <footer>
    <router-link to="/legal"> Mentions Légales </router-link>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterLayout'
  // props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background: #eee;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
