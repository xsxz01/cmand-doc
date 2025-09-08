import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"关于\"},\"headers\":[{\"level\":2,\"title\":\"CMand 中文编程\",\"slug\":\"cmand-中文编程\",\"link\":\"#cmand-中文编程\",\"children\":[{\"level\":3,\"title\":\"项目背景\",\"slug\":\"项目背景\",\"link\":\"#项目背景\",\"children\":[]},{\"level\":3,\"title\":\"核心特性\",\"slug\":\"核心特性\",\"link\":\"#核心特性\",\"children\":[]},{\"level\":3,\"title\":\"技术架构\",\"slug\":\"技术架构\",\"link\":\"#技术架构\",\"children\":[]},{\"level\":3,\"title\":\"开发团队\",\"slug\":\"开发团队\",\"link\":\"#开发团队\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
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
