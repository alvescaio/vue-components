<template lang="pug">
  select(name="name" :value="my_prop" @input="send($event.target.value)")
    option(v-for="(iten, key) in itens" :key="iten" :value="iten") {{key}}
</template>

<script>
  export default{
    name: 'SelectItens',
    data () {
      return {
        itens: {
          'opcao-1': 'valor 1',
          'opcao-2': 'valor 2',
          'opcao-3': 'valor 3',
          'opcao-4': 'valor 4',
          'opcao-5': 'valor 5',
          'opcao-6': 'valor 6'
        }
      }
    },
    model: {
      prop : 'my_prop',
      event : 'my_event'
    },
    props: [
        'my_prop',
        'name'
    ],
    methods: {
      send: function (v) {
        this.$emit('my_event', v)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
