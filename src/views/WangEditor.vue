<template>
  <div>
    <wangeditor v-model="content" :config="config" />
  </div>
</template>

<script>
import wangeditor from 'wangeditor-vue'
export default {
  components: { wangeditor },
  data () {
    return {
      config: {
        pasteFilterStyle: false,
        pasteIgnoreImg: false,
        uploadImgShowBase64: true,
        pasteTextHandle: async function (str) {
          console.log('pasteTextHandle', str)
          return str
        }
      },
      content: '<p>1212121<br>ww</p>'
    }
  }
}
</script>
