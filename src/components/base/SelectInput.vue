<template lang="pug">
  #select-input
    ul(v-click-outside="closeItens")
      li#input(ref="selectInput" @click="visible = !visible")
        input(:name="name" disabled :value="value" :placeholder="option_default")
        span
          i.fa(:class="{'fa-angle-down': !visible, 'fa-angle-up': visible}")
      li#select-itens(v-show="visible")
        .iten(v-for="(iten, key, index) in itens" :key="index" @click="updateSelect(key)") {{ iten }}
</template>

<script>
  export default{
    name: 'SelectInput',
    data () {
      return {
        visible: false
      }
    },
    props: {
      itens: {
        default: () => {
          return {
            opcao1: 'valor 1',
            opcao2: 'valor 2',
            opcao3: 'valor 3',
            opcao4: 'valor 4',
            opcao5: 'valor 5',
            opcao6: 'valor 6'
          }
        }
      },
      computed: {
        valueInput: () => {
          return this.value
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
      closeItens: function () {
        this.visible = false
      },
      updateSelect: function (iten) {
        this.visible = false
        this.$emit('input', this.itens[iten])
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul{
    min-width: 200px;
    display: flex;
    flex-flow: column;
    padding: 0;
    list-style: none;

    #input{
      padding: 0;
      margin: 0;
      display: flex;

      input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #288BB4;
        background-color: #e9f3f7;
        width: calc(100% - 22px);
        padding: 5px 15px;
        border: 0;

        &::placeholder{
          color: #288BB4;
        }
      }

      >span{
        padding: 6.5px 15px;
        color: #288BB4;
        background-color: #e9f3f7;
      }
    }

    #select-itens{
      cursor: pointer;
      background: #C9E2EC;
      color: #288BB4;
      padding: 0 15px;
      .iten{
        padding: 5px 0px;
        border-bottom: 1px solid #8DCDE1;

        &:hover{
          color: transparentize(#288BB4, 0.4);
        }

        &:last-child{
          border: 0;
        }
      }
    }
  }
</style>
