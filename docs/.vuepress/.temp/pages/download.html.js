import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/download.html.vue"
const data = JSON.parse("{\"path\":\"/download.html\",\"title\":\"下载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"下载\"},\"headers\":[{\"level\":2,\"title\":\"下载CMand\",\"slug\":\"下载cmand\",\"link\":\"#下载cmand\",\"children\":[{\"level\":3,\"title\":\"最新版本\",\"slug\":\"最新版本\",\"link\":\"#最新版本\",\"children\":[]},{\"level\":3,\"title\":\"历史版本\",\"slug\":\"历史版本\",\"link\":\"#历史版本\",\"children\":[]},{\"level\":3,\"title\":\"安装指南\",\"slug\":\"安装指南\",\"link\":\"#安装指南\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"download.md\"}")
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
