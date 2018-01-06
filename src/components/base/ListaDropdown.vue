<template lang="pug">
  ul
    item-lista-dropdown(v-for="iten in itens" :key="iten.link")
      a(slot="principal") {{iten.name}} #[i.fa.fa-angle-down]
      a(slot="sub") {{iten.link}}
</template>

<script>
  import ItemListaDropdown from './ItemListaDropdown'

  export default{
    name: 'ListaDropdown',
    data () {
      return {
        itens: [
          {name: 'Bionegócios e Marco Legais', link: '#BioMarco'},
          {name: 'Biotecnologia em agropecuária', link: '#BioAgro'},
          {name: 'Biotecnologia em em recursos naturais', link: '#BioNat'}
        ]
      }
    },
    components: {ItemListaDropdown}
  }
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    text-align: left;
    padding: 0 10px;
  }
</style>
