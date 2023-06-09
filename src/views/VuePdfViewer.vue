<template>
  <div>
    <div>
      <el-button @click="prev">上一页</el-button>
      <el-button @click="next">下一页</el-button>
      <el-button @click="openInAnotherTab">新窗口打开</el-button>
    </div>
    <pdf
      ref="pdf"
      :src="src"
      :page="pageNum"
      style="display: inline-block; text-align: center"
      :style="{'width':  viewSize+'%'}"
    >
    </pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'VuePdfViewer',
  components: {
    pdf
  },
  data () {
    return {
      src: pdf.createLoadingTask({
        url: 'http://localhost:8080/utf-8zh_cn.pdf',
        // cMapUrl & cMapPacked 用来解决中文乱码问题，可以不配置
        cMapUrl: 'http://localhost:8080/cmaps/',
        cMapPacked: true
      }),
      pageNum: 3,
      numPages: 12,
      viewSize: 80
    }
  },
  created () {},
  mounted () {},
  methods: {
    prev () {
      let page = this.pageNum
      page = page > 1 ? page - 1 : this.numPages
      this.pageNum = page
    },
    next () {
      let page = this.pageNum
      page = page < this.numPages ? page + 1 : 1
      this.pageNum = page
    },
    openInAnotherTab () {
      window.open(location.href, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
