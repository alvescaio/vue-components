<template lang="pug">
  #app
    lista-dropdown
</template>

<script>
import ListaDropdown from './components/base/ListaDropdown.vue'
export default {
  name: 'app',
  components: {ListaDropdown}
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>
