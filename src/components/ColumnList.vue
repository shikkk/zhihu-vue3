<template>
  <div class="row">
    <div v-for="item in columnList" :key="item.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
           <img :src="item.avatar"/>
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.description}}</p>
          <a href="#" class="btn btn-outline-primary">点击进入</a>
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
       /** Array 是一个数组类型的构造函数  所以不能直接断言 Array as ColumnProps
       *  vue2 推出一个方法PropType 它接收一个泛型 返回一个类型
       */
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('../assets/logo.png')
        }
        return item
      })
    })
    return {
      columnList
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
