<template>
  <div class="home">
    <p>一个简单消息模板的配置：</p>
    <message-template-creator v-model="value" :tag-list="tagList" />
  </div>
</template>

<script>
export default {
  name: 'MessageTemplateCreatorPage',
  data () {
    return {
      value: '这是一条信息模板',
      tagList: ['人物', '时间', '地点']
    }
  }
}
</script>
