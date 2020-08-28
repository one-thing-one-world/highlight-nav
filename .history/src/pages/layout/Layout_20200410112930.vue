<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navHeader from '../../components/navHeader/NavHeader.vue'
import navLeft from '../../components/navLeft/NavLeft.vue'


export default {
  name: '',
  props: {
  },
  components: {
    navHeader,
    navLeft
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>