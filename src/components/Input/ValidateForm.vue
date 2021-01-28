<template>
    <div class="form-container">
        <slot></slot>
        <div class="submit-area" @click.prevent="submit">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
                <button type="submit" class="btn btn-outline-primary">取消</button>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onUnmounted } from 'vue'
import mitt from 'mitt'  // 事件监听器 监听发送数据变化
type ValidateFun = () => boolean
export const emitter = mitt()
export default defineComponent({
    name: 'ValidateForm',
    emits: ['submit'],
    setup (props, context) {
        let funArr: ValidateFun[] = []
        const submit = () => {
            const res = funArr.map(func => func()).every(res => res)
            context.emit('submit', res)
        }
        const callback = (fun: any) => {
            funArr.push(fun)
        }
        // 接收数据变化
        emitter.on('form-item-created', callback)
        onUnmounted(()=> {
            // 销毁监听事件
            emitter.off('form-item-created', callback)
            funArr = []
        })
        return {
            submit
        }
    }
})
</script>

<style scoped>

</style>
