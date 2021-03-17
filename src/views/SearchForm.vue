<template>
  <div>
    <search-form
      :items="searchForm"
      :searchParams="searchParams"
      @search="handleSearch"
    >
      <template #right-content>
        <el-button type="primary">
          导入
        </el-button>
        <el-button type="primary">
          导出
        </el-button>
      </template>
    </search-form>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
export default {
  name: 'SearchFormPage',
  components: {
    SearchForm
  },
  data () {
    return {
      searchForm: [
        {
          name: '发起人',
          key: 'name',
          props: { clearable: true },
          listeners: { change: this.handleInputChange }
        },
        { name: '开庭日期', key: 'startDate', type: 'date' },
        {
          name: '维修师傅',
          key: 'repairerId',
          type: 'select',
          optionNamekey: 'XXX',
          optionValuekey: 'vvv',
          options: [{ XXX: 'zhangsan', vvv: 'zhangsan' }]
        },
        {
          name: '楼号',
          key: 'floorId',
          type: 'select',
          options: [
            { name: '二楼', value: 2 },
            { name: '三楼', value: 3 }
          ]
        },
        {
          name: '宿舍',
          key: 'roomId',
          type: 'select',
          options: [{ name: '102', value: '102' }]
        }
      ],
      searchParams: {
        floorId: 3
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleInputChange (data) {
      console.log('data :>>', data)
    },
    handleSearch (data) {
      this.searchParams = data
      console.log('this.searchParams >>', this.searchParams)
    }
  }
}
</script>

<style scoped lang="scss"></style>
