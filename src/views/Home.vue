<template>
    <div>
        <ColumnList :list="columnList"></ColumnList>
    </div>
</template>

<script lang="ts">
import ColumnList from '../components/ColumnList.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { CommonDataProps } from '../store'
export default defineComponent({
    name: 'Home',
    components: {
        ColumnList
    },
    setup () {
        const store = useStore<CommonDataProps>()
        const columnList = computed(()=> store.state.columnList)
        return {
            columnList
        }
    }
})
</script>

<style scoped>
</style>
