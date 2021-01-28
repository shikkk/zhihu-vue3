<template>
    <div>
        <validate-form @submit="onSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱</label>
                <validate-input
                        :rules="emailRoles"
                        v-model="emailValue"
                        type="text"
                        placeholder="请输入邮箱名"
                ></validate-input>
            </div>
            <div class="mb-3">
                <label class="form-label">密码</label>
                <validate-input
                        :rules="pwdRoles"
                        v-model="pwdValue"
                        type="password"
                        placeholder="请输入密码"
                ></validate-input>
            </div>
            <template #submit>
                <button type="submit" class="btn btn-primary">提交</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import ValidateForm from "@/components/Input/ValidateForm.vue";
import ValidateInput, { RulesProp } from "@/components/Input/ValidateInput.vue"
import {defineComponent, ref} from "vue";
export default defineComponent ({
    name: 'Login',
    components: {
        ValidateForm,
        ValidateInput
    },
    setup () {
        const emailRoles: RulesProp = [
            {
                type: 'required', message: '邮箱不能为空'
            },
            {
                type: 'email', message: '邮箱格式不正确'
            }
        ]
        const pwdRoles: RulesProp = [
            {
                type: 'required', message: '密码不能为空'
            }
        ]
        const emailValue = ref('shizhikai')
        const pwdValue = ref('123')
        const onSubmit = (isSubmit: boolean) => {
            console.log(isSubmit)
        }
        return {
            emailRoles,
            emailValue,
            pwdRoles,
            pwdValue,
            onSubmit
        }
    }
})
</script>

<style scoped>

</style>
