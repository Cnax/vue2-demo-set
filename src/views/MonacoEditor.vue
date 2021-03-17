<template>
  <div class="home">
    <h3 class="page-title">Monaco Editor</h3>
    <monaco-editor v-model="editorContent" class="monaco" />
    <p class="title"> 预览：</p>
    <div class="preview">
      {{ editorContent }}
    </div>
  </div>
</template>

<script>
import MonacoEditor from '@/components/MonacoEditor'
export default {
  name: 'MonacoEditorPage',
  components: { MonacoEditor },
  data () {
    return {
      editorContent: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: auto;
  background: #fff;
}
.monaco {
  height: 500px;
  width: 100%;
  overflow: hidden;
}
.title {
  margin: 10px 20px;
}
.preview {
  margin: 20px;
  min-height: 50px;
  white-space: pre;
}
</style>
