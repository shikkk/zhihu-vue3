import {ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutSide = (elRef: Ref<null | HTMLElement>) => {
    const isClickOutSide = ref(false)
    const handler = (e: MouseEvent) => {
        if (elRef.value) {
            // contains 是否包含另外一个dom节点
            if (elRef.value.contains(e.target as HTMLElement)) {
                isClickOutSide.value = false
            } else {
                isClickOutSide.value = true
            }
        }
    }
    onMounted(()=> {
        document.addEventListener('click', handler)
    })
    onUnmounted(()=> {
        document.removeEventListener('click', handler)
    })
    return {
        isClickOutSide
    }
}

export default useClickOutSide
