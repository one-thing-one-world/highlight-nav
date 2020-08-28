<template>
  <div>home</div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    getData() {
      axios.get('../data/data.json').then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>