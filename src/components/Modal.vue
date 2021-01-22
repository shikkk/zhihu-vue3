<template>
  <teleport to="#modal">
    <div class="center" v-if="isModal">
      <h1>我是弹窗</h1>
      <slot></slot>
      <button @click="closeEvent">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    isModal: Boolean,
  },
  emits: { //不注册事件控制台会出警告提示
    'closeModal': null
  },
  setup (props, context) {
    const closeEvent = () => {
      context.emit('closeModal')
    }
    return {
      closeEvent
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center{
    width: 100px;
    height: 100px;
    border: 1px solid #333333;
    text-align: center;
  }
</style>