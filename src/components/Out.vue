<template>
  <div class="out">
    out
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Out',
  created () {
    console.log('out created', this.$slots.default[0])
  },
  mounted () {
    console.log('out mounted', this.$slots.default[0].child)
  }
}
</script>

<style>

</style>
