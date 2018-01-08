<template lang="pug">
  #app
    .container
      h1 My Vue Components
      h2 Lista Dropdown
      lista-dropdown
      h2 Custom Select
      //-select-itens(name="select-itens" v-model="selected")
      select-input(name="select-itens" v-model="selected")
</template>

<script>
  import SelectItens from './components/base/SelectItens'
  import ListaDropdown from './components/base/ListaDropdown.vue'
  import SelectInput from './components/base/SelectInput.vue'
  export default {
    name: 'app',
    data () {
      return {
        selected: ''
      }
    },
    watch: {
      selected: (data) => {
        console.log(data)
      }
    },
    components: {ListaDropdown, SelectItens, SelectInput}
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>
