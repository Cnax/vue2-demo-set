<template>
  <div>
    <textarea v-model="value" class="textarea"></textarea>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      value: ''
    }
  },
  created () {
    setTimeout(() => {
      this.value = '我是一个\n阿道夫\nadafd法大师傅'
    }, 3000)
  },
  mounted () {},
  methods: {}
}
</script>
