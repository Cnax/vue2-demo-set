import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'MonacoEditor',
    meta: { title: 'Monaco Editor', isShow: true },
    component: () => import(/* webpackChunkName: "MonacoEditor" */'@/views/MonacoEditor.vue')
  },
  {
    path: '/search-form',
    name: 'SeachForm',
    meta: { title: 'SearchForm', isShow: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SearchForm" */ '@/views/SearchForm.vue')
  },
  {
    path: '/message-template-creator',
    name: 'MessageTemplateCreator',
    meta: { title: 'Message Template Creator', isShow: true },
    component: () => import(/* webpackChunkName: "MessageTemplateCreator" */'@/views/MessageTemplateCreator.vue')
  },
  {
    path: '/wang-editor-vue',
    name: 'WangEditor',
    meta: { title: 'Wang Editor Vue', isShow: true },
    component: () => import(/* webpackChunkName: "WangEditor" */'@/views/WangEditor.vue')
  },
  {
    name: 'RcInVc',
    path: '/rc-in-vc',
    meta: { title: 'RC in VC', isShow: true },
    component: () => import(/* webpackChunkName: "RcInVc" */'@/views/RcInVc.vue')
  },
  {
    name: 'TestDialog',
    path: '/test-dialog',
    meta: { title: 'TestDialog', isShow: true },
    component: () => import(/* webpackChunkName: "TestDialog" */'@/views/TestDialog.vue')
  },
  {
    name: 'VuePdfViewer',
    path: '/pdf-viewer',
    meta: { title: 'VuePdfViewer', isShow: true },
    component: () => import(/* webpackChunkName: "VuePdfViewer" */'@/views/VuePdfViewer.vue')
  },
  {
    name: 'Textarea',
    path: '/textarea',
    meta: { title: 'Textarea', isShow: true },
    component: () => import(/* webpackChunkName: "Textarea" */'@/views/Textarea.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
