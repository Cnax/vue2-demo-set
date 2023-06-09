<template>
  <div>
    <count-up
      class="count-up"
      :start="-875.039"
      :end="160527.012"
      :duration="2.75"
    ></count-up>
  </div>
</template>

<script>
import CountUp from 'react-countup'

export default {
  name: 'RcInVc',
  components: {
    'count-up': CountUp
  },
  created () {
    console.log('vc in rc view created')
  }
}
</script>
