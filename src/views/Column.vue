<template>
    <div>
        <pre>{{route}}</pre>
    </div>
</template>

<script>
import {defineComponent} from "vue"
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
    name: 'Column',
    components: {
    },
    setup () {
        const route = useRoute()
        return {
            route
        }
    }
})
</script>

<style scoped>

</style>
