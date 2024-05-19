<template>
  <van-tabs class="tabs" v-model:active="active" shrink swipeable>
    <van-tab title="菜单">
      <CustomMenu />
    </van-tab>
    <van-tab title="我的订单">
      <CutsomOrderList />
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from "vant";
import CustomMenu from "./views/CustomMenu.vue";
import CutsomOrderList from "./views/CutsomOrderList.vue";

export default {
  name: "App",
  components: {
    CustomMenu,
    CutsomOrderList,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tabs>.van-tabs__wrap {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
