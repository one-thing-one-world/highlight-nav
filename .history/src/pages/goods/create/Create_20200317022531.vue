<template>
  <div>
    <el-card>
      <div class="title flex a-center j-center">新增商品</div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="基础设置" name="0">
            <base-settings v-if="categories.length && brands.length" :categories="categories" :brands="brands"></base-settings>
          </el-tab-pane>
          <el-tab-pane label="规格属性" name="1">
            <attrs v-if="types.length" :types="types"></attrs>
          </el-tab-pane>
          <el-tab-pane label="媒体设置" name="2">媒体设置</el-tab-pane>
          <el-tab-pane label="商品详情" name="3">商品详情</el-tab-pane>
          <el-tab-pane label="积分结算" name="4">积分结算</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
  import BaseSettings from "../../../components/addGoods/baseSettings/BaseSettings"
  import Attrs from "../../../components/addGoods/attrs/Attrs"

  export default {
    name: "Create",
    components: {
      BaseSettings,
      Attrs
    },
    props: {},
    data() {
      return {
        activeName: '1',
        types: [], // 商品模型
        categories: [], // 商品分类
        brands: [], // 商品品牌
      }
    },
    methods: {
      getGoodsTypeSelect() {
        this.$api.getGoodsTypeSelect({
          order_type: "asc"
        }).then(res => {
          if (res.status === 200) {
            this.types = res.data
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getGoodsCategoryList() {
        this.$api.getGoodsCategoryList().then(res => {
          if (res.status === 200) {
            this.categories = res.data
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getBrandSelect() {
        this.$api.getBrandSelect().then(res => {
          if (res.status === 200) {
            this.brands = res.data
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getGoodsTypeSelect()
      this.getGoodsCategoryList()
      this.getBrandSelect()
    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .title {
    height: 30px;
    margin-bottom: 30px;
  }
</style>
