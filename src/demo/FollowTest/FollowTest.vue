<template>
  <div class="body">
    <TransitionGroup name="list">
      <div
        class="card"
        v-for="(i, index) in list"
        :key="i"
        @pointerdown="pointerdown($event, index)"
        @mouseup="handleMouseUp($event)"
        @mousemove="mousemove(index)"
        @pointerover="pointerenter(index)"
        
        >
        {{ i }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let list = ref([1, 2, 3, 4, 5, 6]);

let in_index: any = null;
let out_index: any = null;

//---
//拖拽判断：mousedown -> true ; mouseup -> false
let blockMoving = false; //模块是否在移动？
//startedBlockPos=点击模块时，鼠标的位置
const startedBlockPos = {
  x: 0,
  y: 0,
};
let blockDisX = 0; //移动模块的x坐标
let blockDisY = 0; //移动模块的y坐标

let target: any = null; //模块节点

//判断单元处于拖拽状态

function pointerdown(e: any, index: number) {
  startedBlockPos.x = e.clientX; //鼠标的坐标
  startedBlockPos.y = e.clientY; //鼠标的坐标
  blockMoving = true;

  target = e.currentTarget;
  target.style.transition = "none"; //去掉过渡效果
  target.style.zIndex = 10;

  //---
  in_index = index;
}

function handleMouseUp(e: any) {
  blockMoving = false;

  target.style.transition = "all 0.1s ease-in-out";
  target.style.zIndex = 0;
  target.style.transform = `translateX(0px)`;
}

document.body.addEventListener("mousemove", (e) => {
  if (blockMoving) {
    //clientX,clientY - 是鼠标的坐标[会一直变]
    blockDisX = e.clientX - startedBlockPos.x;
    blockDisY = e.clientY - startedBlockPos.y;

    target.style.transform = `translate(${blockDisX}px,${blockDisY}px)`;
  }
});

function mousemove(index:number){
  console.log(index)
}
function pointerenter(index:number){
  console.log("pointerenter"+index)
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.card {
  border: 1px solid lightgray;
  height: 30px;
  width: 6rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: white;
  transition: all 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  // pointer-events: none;
  user-select: none;
}



.list-move {
  transition: all 0.2s;
}
</style>
