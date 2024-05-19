<template>
  <div class="menu">
    <div class="menu-sidebar">
      <div
        class="side-item"
        v-for="(item, index) in 6"
        :key="index"
        :class="selectSide === index ? 'active' : ''"
        @click="handleClick(item, index)"
      >
        sidebar {{ index + 1 }}
      </div>
    </div>
    <div class="menu-content">
      <div
        class="item"
        v-for="(item, index) in 6"
        :id="`content${index}`"
        :key="index"
      >
        <div class="item-title">标题{{ index }}</div>
        <div class="item-box" v-for="(item, index) in 10" :key="index">
          产品{{ index }}{{ isMouseDown }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent ({
  name: "CustomMenu",
  props: ["isMouseDown"],
  setup() {
    const selectSide = ref(0);
    const isMouseDown = ref(false);

    const handleClick = (item, index) => {
      const element = document.querySelector(".menu-content");
      const selectBox = document.querySelectorAll(".item")[index];
      selectSide.value = index;
      element.scrollTo({
        top: selectBox.offsetTop - element.offsetTop,
        behavior: "smooth",
      });
    };

    // 为指定盒子添加滚动事件
    const handleScroll = () => {
      if (!isMouseDown.value) {
        return
      }
      const element = document.querySelector(".menu-content");
      const arr = document.querySelectorAll(".item");
      // 顶部
      if (element.scrollTop === 0) {
        selectSide.value = 0;
        return;
      }
      // 底部
      if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        selectSide.value = 5;
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        const box = arr[i];
        const boxOffSetTop = box.offsetTop - element.offsetTop;
        if (element.scrollTop < boxOffSetTop) {
          selectSide.value = i - 1;
          break;
        }
      }
      if (element) {
        element.addEventListener("scroll", handleScroll);
      }
      // 执行您想要的操作
    };


    window.addEventListener('touchstart', () => {
      isMouseDown.value = true;
    });

    window.addEventListener('touchend', () => {
      isMouseDown.value = false;
    });

    // 初始化
    onMounted(() => {
      const element = document.querySelector(".menu-content");

      if (element) {
        element.addEventListener("scroll", handleScroll);
      }
    });

    return {
      selectSide,
      handleClick,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  height: calc(100vh - 44px);
  padding-top: 44px;
  display: flex;
  justify-content: space-between;
}
.menu-sidebar {
  width: 25vw;
  background-color: #e7e7e7;
}
.side-item {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  background-color: #a8a8a8;
}
.menu-content {
  width: 74vw;
  overflow-y: auto;
}
.item-title {
  height: 100px;
  border: 1px solid #000;
}
.item-box {
  height: 35px;
}
</style>
