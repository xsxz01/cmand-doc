import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/cmand/variable.html.vue"
const data = JSON.parse("{\"path\":\"/cmand/variable.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"变量\",\"slug\":\"变量\",\"link\":\"#变量\",\"children\":[]}],\"git\":{\"updatedTime\":1757300060000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":2,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"72a81730c834829930ba661f2a96ac499c8e5683\",\"time\":1757300060000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"暂时编辑的变量文档\"},{\"hash\":\"6e6bedef3078ed9ef09906e2334b57833995ba14\",\"time\":1754964986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成基本的文档内容框架（基础部分）\"}]},\"filePathRelative\":\"cmand/variable.md\"}")
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
