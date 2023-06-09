export default {
  data () {
    return {
      a: { b: { c: 1111 } }
    }
  },
  render (h) {
    return h('p', this.a?.b?.c)
  }
}
