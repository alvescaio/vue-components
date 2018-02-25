<template lang="pug">
  #app
    .container
      h1 My Vue Components
      h2 Lista Dropdown
      lista-dropdown
      h2 Custom Select Input
      //-select-itens(name="select-itens" v-model="selected")
      .row
        .col-6
          select-input(name="select-itens-1" v-model="selected1")
        .col-6
          select-input(name="select-itens-2" v-model="selected2")
      .row
        .col-6
          p {{selected1}}
        .col-6
          p {{selected2}}
</template>

<script>
  import SelectItens from './components/base/SelectItens'
  import ListaDropdown from './components/base/ListaDropdown.vue'
  import SelectInput from './components/base/SelectInput.vue'
  export default {
    name: 'app',
    data () {
      return {
        selected1: '',
        selected2: ''
      }
    },
    watch: {
      selected1: (data) => {
        console.log(data)
      },
      selected2: (data) => {
        console.log(data)
      }
    },
    components: {ListaDropdown, SelectItens, SelectInput}
  }
</script>

<style lang="scss">
  #app {
    color: #2c3e50;

    .row{
      display: flex;
      justify-content: space-around;
      align-content: space-between;
    }
  }
</style>
