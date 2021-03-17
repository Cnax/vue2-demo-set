<template>
  <div>
    <wangeditor v-model="content" />
  </div>
</template>

<script>
import wangeditor from 'wangeditor-vue'
export default {
  components: { wangeditor },
  data () {
    return {
      content: '<p>1212121<br>ww</p>'
    }
  }
}
</script>
