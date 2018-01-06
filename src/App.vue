<template lang="pug">
  #app
    lista-dropdown
    select-itens(name="select-itens" v-model="selected")
</template>

<script>
  import SelectItens from './components/base/SelectItens'
  import ListaDropdown from './components/base/ListaDropdown.vue'
  export default {
    name: 'app',
    data () {
      return {
        selected: ''
      }
    },
    watch: {
      selected: function (val) {
        console.log(val)
      }
    },
    components: {ListaDropdown, SelectItens}
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
