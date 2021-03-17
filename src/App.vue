<template>
  <div id="app">
    <ul class="left-nav">
      <li v-for="nav in navs" :key="nav.name" class="single-line-ellipsis" :title="nav.meta.title">
        <router-link :to="nav.path">{{ nav.meta.title }}</router-link>
      </li>
    </ul>
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from '@/router'

// 递归查找路由信息，并返回符合要求的一维路由数组
function recursionSelect (arr, res) {
  if (!Array.isArray(arr) || !arr.length) {
    return
  }
  arr.forEach(item => {
    if (item.meta?.isShow) {
      res.push(item)
    }
    if (item && item.children) {
      recursionSelect(item.children, res)
    }
  })
}

// 获取左侧菜单路由
function getNav () {
  const result = []
  recursionSelect(routes, result)
  return result
}

export default {
  name: 'App',
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = getNav()
  }
}
</script>

<style lang="scss" scoped>
$left-nav-width: 200px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background: #f3f3f3;
  color: #2c3e50;
}

.left-nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: $left-nav-width;
  margin: 0;
  padding: 10px;
  line-height: 32px;
  background: #000;
  box-sizing: border-box;
  li {
    margin: 5px 0;
    list-style-type: none;
  }
  a {
    font-weight: bold;
    color: #125c3a;
    cursor: pointer;
    text-decoration: none;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
  a:hover {
    color: #42b983;
  }
}
.app-main {
  margin-left: $left-nav-width;
  padding: 8px;
  overflow: auto;
}
</style>
