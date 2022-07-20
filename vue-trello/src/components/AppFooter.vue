<template>
  <footer><span>Programing &amp; <a href="//vue.org">Vue.js</a> in Bogotá</span></footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<!-- Node-Sass y Sass-Loader, deben tener versiones compatibles entre sí -->
<!-- Además Node-Sass ya esta en desuso en su lugar se utiliza Sass, pero si se prefiere Node-Sass, aquí más información: https://i.stack.imgur.com/ZJtyS.png -->
<style lang="scss" scoped>
  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

    a {
      text-decoration: none;
      color: #546E7A;
    }
  }
</style>
