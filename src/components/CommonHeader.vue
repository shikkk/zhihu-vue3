<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a class="navbar-brand" href="#">博客专栏</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <router-link class="btn btn-outline-light mx-2" to="/login">登录</router-link>
                <router-link class="btn btn-outline-light" to="/">注册</router-link>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="user.name">
                    <dropdown-item><a class="dropdown-item" href="#">新建文章</a></dropdown-item>
                    <dropdown-item><a class="dropdown-item" href="#">编辑资料</a></dropdown-item>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}
export default defineComponent({
    name: 'CommonHeader',
    components: {
        Dropdown,
        DropdownItem
    },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            require: true
        }
    }
})
</script>

<style scoped>

</style>
