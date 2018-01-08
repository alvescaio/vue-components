<template lang="pug">
  ul
    item-lista-dropdown(v-for="iten in itens" :key="iten.link")
      a(slot="principal") {{iten.name}}
      li(slot="sub" v-for="(subiten, index) in iten.subitens" :key="index") {{subiten}}
</template>

<script>
  import ItemListaDropdown from './ItemListaDropdown'

  export default{
    name: 'ListaDropdown',
    props: {
      itens: {
        default: () => {
          return [
            {name: 'Bionegócios e Marco Legais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em agropecuária', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em em recursos naturais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']}
          ]
        }
      }
    },
    components: {ItemListaDropdown}
  }
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    padding: 0;
    li{
      list-style: none;
    }
  }
</style>
