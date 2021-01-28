<template>
  <div class="container">
    <CommonHeader :user="userInfo"></CommonHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import CommonHeader, { UserProps } from "@/components/CommonHeader.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref, computed, reactive, toRefs, defineComponent } from 'vue'
const userInfo: UserProps = {
  isLogin: false,
  name: 'shizhikai',
  id: 1
}
export default defineComponent ({
  name: 'App',
  components: {
    CommonHeader
  },
  setup () {
    return {
      userInfo
    }
  }
})
</script>

<style>
</style>
