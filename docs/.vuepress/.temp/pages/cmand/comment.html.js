import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/cmand/comment.html.vue"
const data = JSON.parse("{\"path\":\"/cmand/comment.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"注释\",\"slug\":\"注释\",\"link\":\"#注释\",\"children\":[{\"level\":3,\"title\":\"1. 单行注释\",\"slug\":\"_1-单行注释\",\"link\":\"#_1-单行注释\",\"children\":[]},{\"level\":3,\"title\":\"2. 多行注释\",\"slug\":\"_2-多行注释\",\"link\":\"#_2-多行注释\",\"children\":[]},{\"level\":3,\"title\":\"3. 易语言注释\",\"slug\":\"_3-易语言注释\",\"link\":\"#_3-易语言注释\",\"children\":[]}]}],\"git\":{\"updatedTime\":1755138369000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":2,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"d01d6e344ce0613c059492726c650fde8394b77f\",\"time\":1755138369000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成一部分文档\"},{\"hash\":\"6e6bedef3078ed9ef09906e2334b57833995ba14\",\"time\":1754964986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成基本的文档内容框架（基础部分）\"}]},\"filePathRelative\":\"cmand/comment.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
