<template>
  <div class="inner">inner</div>
</template>

<script>
export default {
  name: 'Inner',
  data () {
    return {
      inner: 'xxx'
    }
  },
  created () {
    console.log('inner created')
  },
  mounted () {
    console.log('inner mounted')
  }
}
</script>

<style>

</style>
