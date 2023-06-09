let Vue

class KRouter {
  static install (_Vue) {
    Vue = _Vue
    Vue.mixin({
      beforeCreate () {
        console.log('this>>>', this)
        if (this.$options.router) {
          console.log('this.$options.router', this.$options.router)
          Vue.prototype.$krouter = this.$options.router
          this.$options.router.init()
          this.$once('hook:destroyed', () => {
            this.$options.router.unbindEvents()
          })
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.app = new Vue({
      data () {
        return {
          current: '/'
        }
      }
    })
  }

  init () {
    this.bindEvents()
    this.createRouteMap()
    this.initComponent()
  }

  createRouteMap () {
    this.options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })
  }

  initComponent () {
    Vue.component('RouterView', {
      render: h => {
        const comp = this.routeMap[this.app.current].component
        return h(comp)
      }
    })
    Vue.component('RouterLink', {
      props: {
        to: String
      },
      render (h) {
        return h(
          'a',
          {
            attrs: {
              href: `#${this.to}`
            }
          },
          [this.$slots.default]
        )
      }
    })
  }

  bindEvents () {
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)
    window.addEventListener('load', this.onHashChange.bind(this), false)
  }

  unbindEvents () {
    // 监听URL中hash值的变化
    window.removeEventListener('hashchange', this.onHashChange.bind(this), false)
    // 首次加载,监听hash值
    window.removeEventListener('load', this.onHashChange.bind(this), false)
  }

  getFrom (e) {
    let from, to
    if (e.newURL) {
      from = e.oldURL.split('#')[1]
      to = e.newURL.split('#')[1]
    } else {
      from = ''
      to = this.getHash()
    }
    return { from, to }
  }

  onHashChange (e) {
    console.log('hash change', e)
    const hash = this.getHash()

    const router = this.routeMap[hash]

    const { from, to } = this.getFrom(e)

    if (router?.beforeEnter) {
      router.beforeEnter(from, to, () => {
        this.app.current = hash
      })
    } else {
      this.app.current = hash
    }
  }

  getHash () {
    return window.location.hash.slice(1) || '/'
  }

  push (url) {
    window.location.hash = url
  }
}

export default KRouter
