<template>
  <div class="container">
    <ColumnList :list="testData"></ColumnList>
  </div>
</template>

<script lang="ts">
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref, computed, reactive, toRefs, defineComponent } from 'vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
    description: '这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍'
  },
   {
    id: 2,
    title: 'test2',
    avatar: '',
    description: '这是简绍，这是介绍这是简绍，这是介绍这是简绍是介绍这是简绍，这是介绍'
  },
   {
    id: 3,
    title: 'test1',
    avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
    description: '这是简绍，这是介这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍这是简绍，这是介绍'
  }, {
    id: 4,
    title: 'test1',
    avatar: 'https://img.tupianzj.com/uploads/200427/9-20042F94I2K5.jpg',
    description: '这是简绍，这是介绍这是简绍，这，这是介绍这是简绍，这是介绍'
  }
]
export default defineComponent ({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    const isModal = ref(false)
    const openModal = () => {
      isModal.value = true
    }
    const closeModal = () => {
      isModal.value = false
    }
    return {
      testData
    }
  }
})
</script>

<style>
</style>
