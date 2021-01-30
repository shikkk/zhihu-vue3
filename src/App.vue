<template>
  <div class="container">
    <CommonHeader :user="userInfo"></CommonHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import CommonHeader from "@/components/CommonHeader.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent ({
  name: 'App',
  components: {
    CommonHeader
  },
  setup () {
    const store = useStore()
    const userInfo = computed(() => store.state.userInfo)
    return {
      userInfo
    }
  }
})
</script>

<style>
</style>
