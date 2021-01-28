<template>
    <div class="input-container">
        <input v-bind="$attrs"
               class="form-control"
               :class="{'is-invalid': inputRef.error}"
               v-model="inputRef.val"
               @blur="validateInput"
        />
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.msg}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
    type: 'required' | 'email';
    message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
    name: 'ValidateInput',
    props: {
        rules: {
            type: Array as PropType<RulesProp>
        },
        modelValue: String
    },
    inheritAttrs: false,
    setup (props, context) {
        const inputRef = reactive({
            val: '',
            error: false,
            msg: ''
        })
        const validateInput = () => {
            if (props.rules) {
                // every循环遍历每一项  如果有一项为false 会立即停止
               const allPassed = props.rules.every(rule => {
                   let flag = true
                   inputRef.msg = rule.message
                   switch (rule.type) {
                        case 'required':
                            flag = (inputRef.val.trim() !== '')
                           break
                        case 'email':
                            flag = emailReg.test(inputRef.val)
                           break
                        default:
                            break
                   }
                   return flag
               })
                inputRef.error = !allPassed
                return allPassed
            }
            return true
        }
        // 发送数据内容
        onMounted( ()=> {
           emitter.emit('form-item-created', validateInput)
        })
        return {
            inputRef,
            validateInput
        }
    }
})
</script>

<style>
</style>
