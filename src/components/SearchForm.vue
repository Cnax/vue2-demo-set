<template>
  <el-form :inline="true" :label-width="labelWidth" class="search-form">
    <el-form-item
      :label="item.name"
      v-for="(item, index) of items"
      :key="index"
    >
      <el-input
        v-model="formParams[item.key]"
        v-if="!item.type || item.type === 'input'"
        :placeholder="item.placeholder || '请输入'"
        v-bind="item.props"
        v-on="item.listeners"
      />
      <el-select
        clearable
        v-model="formParams[item.key]"
        v-else-if="item.type === 'select'"
        :placeholder="item.placeholder || '请选择'"
      >
        <el-option
          v-for="option in item.options"
          :key="option.value"
          :label="option[item.optionNamekey || 'name']"
          :value="option[item.optionValuekey || 'value']"
        >
        </el-option>
      </el-select>
      <el-date-picker
        v-model="formParams[item.key]"
        v-else-if="item.type === 'date'"
        type="date"
        :placeholder="item.placeholder || '请选择日期'"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item class="button-group">
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button @click="reset">重置</el-button>
      <slot name="right-content"></slot>
    </el-form-item>
  </el-form>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
/**
 * items 为过滤条件，可以在对应的项中自定义下拉选项的名称（optionNamekey）和值（optionValuekey）的键，默认分别取 name 和 id
 * items 如何要下拉框显示 placeholder，对应的下拉框的初始值可以设置为 undefined 或者 不定义查询参数，如果设置为空， placeholder 不会显示。
 * searchParams 为接口查询参数对象
 */
export default {
  name: 'SearchForm',
  props: {
    searchParams: {
      type: Object,
      default: () => {
        return {}
      }
    },
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  data () {
    return {
      // 保存初始化时的项
      initSearchParams: {},
      formParams: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      // 保存初始值的
      this.initSearchParams = cloneDeep(this.searchParams)
      this.formParams = cloneDeep(this.searchParams)
    },
    search () {
      this.$emit('search', cloneDeep(this.formParams))
    },
    reset () {
      const initSearchParams = cloneDeep(this.initSearchParams)
      this.formParams = initSearchParams
      this.$emit('search', initSearchParams)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-form {
  text-align: left;
}
.button-group {
  margin-left: 30px;
}
</style>
