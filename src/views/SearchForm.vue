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
    <render></render>
    <!-- <div>{{a?.b?.c}}</div> -->
    <!-- <user-card
      image="https://semantic-ui.com/images/avatar2/large/kristy.png"
      name="User Name"
      email="yourmail@some-email.com"
      @clickAvatar="clickAvatar"
    />
    <wangeditor /> -->
  </div>
</template>

<script>
import SearchForm from '@/components/FullSearchForm'
import Render from '@/components/Render'
// import { importScript } from 'runtime-import'

export default {
  name: 'SearchFormPage',
  components: {
    SearchForm,
    Render
    // wangeditor: async () => await importScript('')
  },
  data () {
    return {
      a: { b: { c: 1111 } },
      searchForm: [
        {
          name: '发起人',
          key: 'name',
          props: { clearable: true },
          listeners: { change: this.handleInputChange }
        },
        { name: '开庭日期', key: 'startDate', type: 'date-picker' },
        {
          name: '维修师傅',
          key: 'repairerId',
          type: 'select',
          optionNamekey: 'XXX',
          optionValuekey: 'vvv',
          options: [{ XXX: 'zhangsan', vvv: 'zhangsan' }]
        },
        {
          name: '单元',
          key: 'unitIds',
          type: 'checkbox',
          options: [
            { name: '第二单元', value: 2 },
            { name: '第三单元', value: 3 }
          ]
        },
        {
          name: '楼号',
          key: 'floorId',
          type: 'radio',
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
        floorId: 3,
        unitIds: []
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
    },
    clickAvatar (e) {
      console.log('click avatar')
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss"></style>
