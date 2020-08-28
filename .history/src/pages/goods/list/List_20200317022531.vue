<template>
  <div>
    <el-card>
      <el-form :model="form" ref="ruleForm" :inline="true" label-width="100px">
        <el-form-item label="分类">
          <el-cascader
              v-model="form.goods_category_id"
              :options="categories"
              :props="cascaderProps"
              clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="form.keywords" placeholder="商品关键词" clearable></el-input>
        </el-form-item>
        <el-form-item label="编码">
          <el-input v-model="form.goods_code" placeholder="商品关键词" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" size="small" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-refresh" size="small">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-popover
              placement="bottom"
              trigger="click">
            <el-form :model="form" label-width="100px">
              <el-form-item label="品牌">
                <el-select style="width: 100%;" v-model="form.brand_id" placeholder="请选择品牌" clearable>
                  <el-option
                      v-for="item in brands"
                      :key="item.brand_id"
                      :label="item.name"
                      :value="item.brand_id">
                    <span style="float: left">{{ item.name }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.category_name }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="库存">
                <div class="flex a-center">
                  <div>
                    <el-input-number v-model="form.store_min" controls-position="right" :min="0"></el-input-number>
                    至
                  </div>
                  <div>
                    <el-input-number v-model="form.store_max" controls-position="right"
                                     :min="form.store_min"></el-input-number>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="是否包邮">
                <el-select clearable style="width: 100%;" v-model="form.is_postage" placeholder="请选择">
                  <el-option :key="1" label="是" value="1"></el-option>
                  <el-option :key="0" label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="积分抵扣">
                <el-select clearable style="width: 100%;" v-model="form.is_integral" placeholder="请选择">
                  <el-option :key="1" label="可抵扣" value="1"></el-option>
                  <el-option :key="0" label="不抵扣" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否推荐">
                <el-select clearable style="width: 100%;" v-model="form.is_recommend" placeholder="请选择">
                  <el-option :key="1" label="是" value="1"></el-option>
                  <el-option :key="0" label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否新品">
                <el-select clearable style="width: 100%;" v-model="form.is_new" placeholder="请选择">
                  <el-option :key="1" label="是" value="1"></el-option>
                  <el-option :key="0" label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否热卖">
                <el-select clearable style="width: 100%;" v-model="form.is_hot" placeholder="请选择">
                  <el-option :key="1" label="是" value="1"></el-option>
                  <el-option :key="0" label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="reference" style="color: #409eff;cursor: pointer">
              更多筛选
              <i style="color: #409eff" class="el-icon-arrow-down"></i>
            </div>
          </el-popover>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="btn flex a-center">
      <div class="item">
        <el-button icon="el-icon-plus">新增商品</el-button>
      </div>
      <div class="item">
        <el-button icon="el-icon-download">下架</el-button>
      </div>
      <div class="item">
        <el-dropdown @command="recommend">
          <el-button icon="el-icon-s-order">推荐</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="yes">设为推荐</el-dropdown-item>
            <el-dropdown-item command="no">取消推荐</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="item">
        <el-dropdown @command="newGoods">
          <el-button icon="el-icon-star-off">新品</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="yes">设为新品</el-dropdown-item>
            <el-dropdown-item command="no">取消新品</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="item">
        <el-dropdown @command="hot">
          <el-button icon="el-icon-star-off">热卖</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="yes">设为热卖</el-dropdown-item>
            <el-dropdown-item command="no">取消热卖</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="item">
        <el-button icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <el-card class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="出售中" name="0">
          <table-data v-if="tableData.length" :tableData="tableData" :total="total"></table-data>
        </el-tab-pane>
        <el-tab-pane label="已下架" name="1">
          <table-data v-if="tableData.length" :tableData="tableData" :total="total"></table-data>
        </el-tab-pane>
        <el-tab-pane label="回收站" name="2">
          <table-data v-if="tableData.length" :tableData="tableData" :total="total"></table-data>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import TableData from "../../../components/goodsList/tableData/TableData"

  export default {
    name: "List",
    components: {
      TableData
    },
    props: {},
    data() {
      return {
        categories: [],
        brands: [],
        form: {
          goods_category_id: '',
          keywords: '',
          goods_code: '',
          brand_id: '',
          store_qty: [],
          store_min: 0,
          store_max: 0,
          is_postage: '',
          is_integral: '', // 积分抵扣
          is_recommend: '',
          is_new: '',
          is_hot: '',
        },
        cascaderProps: {
          value: 'goods_category_id',
          label: 'name',
          children: 'children',
          checkStrictly: true,
          emitPath: false
        },
        activeName: '0',
        tableData: [],
        total: 0,
        is_delete: 0,
        status: 1,
        page_no: 1,
        page_size: 10
      }
    },
    methods: {
      getGoodsCategoryList() {
        this.$api.getGoodsCategoryList().then(res => {
          if (res.status === 200) {
            let arr0 = []
            let arr1 = []
            let arr2 = []
            res.data.map(item => {
              if (item.level === 0) arr0.push(item)
              if (item.level === 1) arr1.push(item)
              if (item.level === 2) arr2.push(item)
            })
            arr0.map(item => {
              this.$set(item, 'children', [])
              arr1.map(item1 => {
                if (item1.parent_id === item.goods_category_id) {
                  item.children.push(item1)
                }
              })
            })
            arr1.map(item => {
              this.$set(item, 'children', [])
              arr2.map(item1 => {
                if (item1.parent_id === item.goods_category_id) {
                  item.children.push(item1)
                }
              })
            })
            this.categories = arr0
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
      },
      recommend(command) {

      },
      newGoods(command) {

      },
      hot(command) {

      },
      handleClick({name}) {
        if (name === '0') {
          this.status = 1
          this.is_delete = 0
          this.page_no = 1
          this.page_size = 10
          this.getData()
        }
        if (name === '1') {
          this.status = 0
          this.is_delete = 0
          this.page_no = 1
          this.page_size = 10
          this.getData()
        }
        if (name === '2') {
          this.status = 1
          this.is_delete = 1
          this.page_no = 1
          this.page_size = 10
          this.getData()
        }
      },
      getData() {
        this.$api.getGoodsAdminList({
          is_delete: this.is_delete,
          status: this.status,
          page_no: this.page_no,
          page_size: this.page_size
        }).then(res => {
          if (res.status === 200) {
            this.tableData = res.data.items
            this.total = res.data.total_result
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getGoodsCategoryList()
      this.getBrandSelect()
      this.getData()
      this.$bus.$on('getPageSize', data => {
        console.log(111)
        this.page_size = data
        this.getData()
      })
      this.$bus.$on('getCurrentPage', data => {
        this.page_no = data
        this.getData()
      })
      this.$bus.$on('delGoods', () => {
        this.getData()
      })
      this.$bus.$on('copy', () => {
        this.getData()
      })
      this.$bus.$on('setShelves', () => {
        this.getData()
      })
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
  .btn {
    margin: 20px 0;

    .item {
      margin-right: 15px;
    }
  }
</style>
