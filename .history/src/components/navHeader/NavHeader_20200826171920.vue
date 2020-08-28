<template>
  <div>
    <el-menu :default-active="$route.meta.parentPath" router class="el-menu-demo" mode="horizontal" @select="onSelect">
      <el-menu-item :index="item.url" v-for="item in menus" :key="item.menu_id">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navHeader',
  props: {
  },
  components: {

  },
  data() {
    return {
      menus: [],
      level0: [],
      level1: [],
      level2: [],
      level3: [],
    }
  },
  methods: {
    addChildren(arr1, arr2) {
      arr1.map(item1 => {
        this.$set(item1, 'children', [])
        arr2.map(item2 => {
          if (item2.parent_id === item1.menu_id) {
            item1.children.push(item2)
          }
        })
      })
    },
    getData() {
      axios.get('/api/menu').then(res => {
        this.menus = res.data.data.data
        this.menus = this.menus.filter(item => item.name !== '云端')
        this.menus.map(item => {
          if (item.level === 0) {
            this.level0.push(item)
          }
          if (item.level === 1) {
            this.level1.push(item)
          }
          if (item.level === 2) {
            this.level2.push(item)
          }
          if (item.level === 3) {
            this.level3.push(item)
          }
        })
        this.addChildren(this.level0, this.level1)
        this.addChildren(this.level1, this.level2)
        this.addChildren(this.level2, this.level3)
        this.menus = this.level0
        let arr = this.level0.filter(item => item.url === this.$route.meta.parentPath)
        if (arr[0].name === '首页') {
          this.$delete(arr[0], 'children')
          this.$set(arr[0], 'children', [{ name: '首页', url: '/index' }])
        }
        this.$bus.$emit('menus', arr)
      }).catch(err => {
        console.log(err)
      })
    },
    onSelect(index) {
      let arr = this.level0.filter(item => {
        return item.url === index
      })
      if (arr[0].name === '首页') {
        this.$delete(arr[0], 'children')
        this.$set(arr[0], 'children', [{ name: '首页', url: '/index' }])
      }
      this.$bus.$emit('menus', arr)
    }
  },
  mounted() {
    this.getData()
    axios.get('../../data/data.json').then(res => {
      let data = res.data.data
      console.log(res.data)
    })
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>