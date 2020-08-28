<template>
  <div>
    <el-card>
      <el-collapse v-model="activeName">
        <el-collapse-item v-for="(item, index) in list" :key="index" :name="index">
          <template slot="title">
            <div class="title flex a-center">
              <div><i class="t-icon" :class="item.icon"></i></div>
              <div class="t-name">{{item.name}}</div>
            </div>
          </template>
          <div class="flex a-center">
            <div class="flex a-center desc" @click="$router.push(child.url)" v-for="(child, idx) in item.children" :key="idx">
              <div class="d-icon">
                <i :class="child.icon"></i>
              </div>
              <div class="d-con">
                <div class="d-name">{{child.name}}</div>
                <div class="d-desc">{{child.desc}}</div>
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Goods",
    components: {},
    props: {},
    data() {
      return {
        activeName: [0, 1, 2],
        list: [
          {
            name: '商品管理',
            icon: 'el-icon-c-scale-to-original',
            children: [
              {
                name: '新增商品',
                desc: '添加新的商品',
                url: '/goods/admin/create',
                icon: 'el-icon-folder-add'
              },
              {
                name: '商品列表',
                desc: '商品的常规管理',
                url: '/goods/admin/list',
                icon: 'el-icon-bank-card'
              },
            ]
          },
          {
            name: '商品配置',
            icon: 'el-icon-edit-outline',
            children: [
              {
                name: '商品分类',
                desc: '商品分类的常规管理',
                url: '/goods/setting/category',
                icon: 'el-icon-switch-button'
              },
              {
                name: '商品品牌',
                desc: '添加新的商品',
                url: '/goods/setting/brand',
                icon: 'el-icon-goods'
              },
              {
                name: '商品模型',
                desc: '商品模型的设置',
                url: '/goods/setting/type',
                icon: 'el-icon-s-operation'
              },
              {
                name: '商品规格',
                desc: '商品规格的设置',
                url: '/goods/setting/spec',
                icon: 'el-icon-monitor'
              },
              {
                name: '商品属性',
                desc: '商品属性的设置',
                url: '/goods/setting/attribute',
                icon: 'el-icon-notebook-1'
              },
            ]
          },
          {
            name: '评价咨询',
            icon: 'el-icon-notebook-2',
            children: [
              {
                name: '商品评价',
                desc: '买家收货后对商品的评价',
                url: '、goods/opinion/comment',
                icon: 'el-icon-chat-round'
              },
              {
                name: '商品咨询',
                desc: '买家购买前对商品的咨询',
                url: '/goods/opinion/consult',
                icon: 'el-icon-chat-dot-round'
              },
            ]
          },
        ]
      }
    },
    methods: {},
    mounted() {

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
    height: 50px;
    .t-icon {
      font-size: 20px;
      line-height: 50px;
      margin-right: 6px;
      position: relative;
      top: 2px;
      color: #909399;
    }
    .t-name {
      font-size: 16px;
      line-height: 50px;
      color: #303133;
    }
  }
  .desc {
    width: 20%;
    padding: 10px;
    .d-icon {
      font-size: 32px;
      color: #909399;
      margin-right: 20px;
      cursor: pointer;
    }
    .d-con {
      cursor: pointer;
      .d-name {
        color: #303133;
        font-weight: 700;
        font-size: 16px;
      }
      .d-desc {
        color: #909399;
        font-size: 12px;
      }
    }
  }
</style>
