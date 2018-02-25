<template lang="pug">
  #select-itens
    select(:name="name" :value="value" @input="updateValue($event.target.value)")
      option(value="" disable) {{ option_default }}
      option.iten(v-for="(iten, key) in itens" :key="key" :value="key") {{ iten }}
    span
      i.fa.fa-angle-down
</template>

<script>
  export default{
    name: 'SelectItens',
    props: {
      itens: {
        default: () => {
          return {
            'opcao-1': 'valor 1',
            'opcao-2': 'valor 2',
            'opcao-3': 'valor 3',
            'opcao-4': 'valor 4',
            'opcao-5': 'valor 5',
            'opcao-6': 'valor 6'
          }
        }
      },
      value: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: 'SelectItem'
      },
      option_default: {
        type: String,
        default: 'Selecione um item'
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #select-itens>span{
    width: 29px;
    height: 29px;
    padding: 6.5px;
    position: relative;
    left: -23px;
    top: 1px;
  }

  select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 200px;
    color: #288BB4;
    background-color: #e9f3f7;
    padding: 5px;
    border: 0;

    ::-ms-expand {
      display: none;
    }

    option.iten{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      box-sizing: content-box;
      padding: 5px;
      background-color: #C9E2EC;
    }
  }
</style>
