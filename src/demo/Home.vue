<template>
  <div class="page">
    <div class="card">
      <RouterLink to="/FollowMouseMove">
        🖱️ 跟随鼠标移动
      </RouterLink>
    </div>
    <div class="card">
      <RouterLink to="/FollowMouseMove2">
        🖱️ 跟随鼠标移动2
      </RouterLink>
    </div>
    <div class="card">
      <RouterLink to="/DragAndDropChangeList">
        👆 拖放改变列表顺序
      </RouterLink>
    </div>
    <div class="card">
      <RouterLink to="/DragAndDropChangeList2">
        👆【改进】拖放改变列表顺序2
      </RouterLink>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
*{
  user-select: none;
}
.page {
  width: 100%;
  height: 100vh;
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 100px;
  background-color: rgb(65, 65, 65);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 2px 2px 20px -10px rgba(0, 0, 0, 0.5);
}
</style>
