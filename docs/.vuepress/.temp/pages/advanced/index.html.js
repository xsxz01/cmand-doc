import comp from "D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/advanced/index.html.vue"
const data = JSON.parse("{\"path\":\"/advanced/\",\"title\":\"高级主题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"高级主题\",\"sidebar\":[{\"text\":\"单元测试\",\"link\":\"/advanced/test\"}]},\"headers\":[{\"level\":2,\"title\":\"高级主题\",\"slug\":\"高级主题\",\"link\":\"#高级主题\",\"children\":[]}],\"git\":{\"updatedTime\":1754965462000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":3,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"ff65d102ce8ba2fce8e5bbf5e0ac8014c4f41e84\",\"time\":1754965462000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成高级主题页面框架\"},{\"hash\":\"9673801e501b1366c322aca8d90f26f3e14e6a35\",\"time\":1754965165000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"高级主题\"},{\"hash\":\"6e6bedef3078ed9ef09906e2334b57833995ba14\",\"time\":1754964986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成基本的文档内容框架（基础部分）\"}]},\"filePathRelative\":\"advanced/readme.md\"}")
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
