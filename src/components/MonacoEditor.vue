<template>
  <div class="monaco">
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution'
export default {
  name: 'MonacoEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      monacoInstance: null,
      // 输入的时候，禁止更新
      isLocked: false
    }
  },
  computed: {
    content: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    content (newVal, oldVal) {
      if (!this.isLocked) {
        this.monacoInstance.setValue(newVal)
      }
    }
  },
  mounted () {
    this.monacoInstance = monaco.editor.create(this.$el, {
      value: this.content,
      language: 'sql'
    })
    this.monacoInstance.onDidChangeModelContent((event) => {
      this.isLocked = true
      const newValue = this.monacoInstance.getValue()
      this.$emit('input', newValue)
    })
    this.monacoInstance.onDidBlurEditorWidget(() => {
      this.isLocked = false
    })
    console.log('monacoInstance>>>', this.monacoInstance)
  },
  beforeDestroy () {
    if (this.monacoInstance) {
      this.monacoInstance.dispose()
      this.monacoInstance = null
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
