<template>
  <div class="bg">
    <TransitionGroup name="list">
      <div
        class="item"
        v-for="(i, index) in list"
        :key="i"
        draggable="true"
        @dragstart="dragstart($event, index)"
        @dragover="dragover($event)"
        @dragenter="dragenter(index)">
        {{ i }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

let in_index: any = null;
let out_index: any = null;

//1.开始拖拽触发器
function dragstart(ev: any, index: any) {
  console.log("拖拽开始！");

  var img = new Image();
  img.src = "";
  // ev.dataTransfer.setDragImage(img, 0, 0);
  ev.dataTransfer.dropEffect = "uninitialized";
  in_index = index;
}
function dragover(ev: any) {
  ev.dataTransfer.dropEffect = "move";
}
//2.拖拽进入👇
function dragenter(index: any) {
  out_index = index;
  if (in_index > out_index) {
    list.value.splice(out_index, 0, list.value[in_index]);
    list.value.splice(in_index + 1, 1);
  } else if (in_index < out_index) {
    list.value.splice(out_index + 1, 0, list.value[in_index]);
    list.value.splice(in_index, 1);
  }
  in_index = index;
}
</script>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  width: 100%;
  max-width: 200px;
  height: 50px;
  background-color: rgb(80, 80, 80);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 6px;
}

.list-move {
  transition: all 0.2s;
}
</style>
