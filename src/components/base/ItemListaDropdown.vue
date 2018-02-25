<template lang="pug">
    li
      a(@click="toggleList = !toggleList").
        #[slot(name="principal")] #[i.fa(:class="{'fa-angle-down': !toggleList, 'fa-angle-up': toggleList}")]
      ul(v-show="toggleList") #[slot(name="sub")]
</template>

<script>
  export default{
    name: 'ItemListaDropdown',
    data () {
      return {
        toggleList: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  li{
    padding: 0;
    margin: 0;
    >a{
      cursor: pointer;

      &:hover{
        text-decoration: none;
      }
    }
    ul{
      padding: 0;
      a{
        color: black;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
</style>
