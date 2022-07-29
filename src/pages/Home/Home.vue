<template>
    <div>
        <!--<h2>我是主页</h2>-->
        <!--三级联动组件-->
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
  //引入其余的组件
  import ListContainer from "./ListContainer/ListContainer";
  import Recommend from "./Recommend/Recommend";
  import Rank from "./Rank/Rank";
  import Like from "./Like/Like";
  import Floor from "./Floor/Floor";
  import Brand from "./Brand/Brand";
  import {mapState} from "vuex";

  export default {
    name: "Home",
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      //派发action
      this.$store.dispatch("getFloorList");
    },
    computed: {
      ...mapState({
        floorList: state => state.home.floorList
      })
    }
  };
</script>

<style scoped>

</style>