<template>
    <div class="dropdown" ref="dropdownRef">
        <a class="btn btn-outline-light  dropdown-toggle" href="#" @click.prevent="toggleOpen">{{title}}</a>
        <ul class="dropdown-menu"  :style="{display: 'block'}" v-show="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutSide from "@/hooks/useClickOutSide";
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup () {
        const isOpen = ref(false)
        const dropdownRef = ref<null | HTMLElement>(null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
            console.log(isOpen.value)
        }

        const { isClickOutSide } = useClickOutSide(dropdownRef)
        watch(isClickOutSide, () => {
            if (isOpen.value && isClickOutSide) {
                isOpen.value = false
            }
        })
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>

<style scoped>

</style>
