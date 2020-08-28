<template>
  <div></div>
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

  },
  mounted() {
    axios.get('/api/menu').then(res => {
      console.log(res.data.data.data)
    }).catch(err => {
      console.log(err)
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