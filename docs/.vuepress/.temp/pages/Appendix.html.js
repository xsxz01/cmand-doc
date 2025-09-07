import comp from "D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/appendix.html.vue"
const data = JSON.parse("{\"path\":\"/appendix.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"附录\",\"slug\":\"附录\",\"link\":\"#附录\",\"children\":[]},{\"level\":2,\"title\":\"下载CMand\",\"slug\":\"下载cmand\",\"link\":\"#下载cmand\",\"children\":[]}],\"git\":{\"updatedTime\":1754926048000,\"contributors\":[{\"name\":\"广龙宇\",\"username\":\"\",\"email\":\"pangyuyu@email.cn\",\"commits\":1}],\"changelog\":[{\"hash\":\"bbfb7fcf687fa168dac18c685a38483078fd61fe\",\"time\":1754926048000,\"email\":\"pangyuyu@email.cn\",\"author\":\"广龙宇\",\"message\":\"创建简单文档框架\"}]},\"filePathRelative\":\"appendix.md\"}")
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
