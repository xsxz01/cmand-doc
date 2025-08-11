import comp from "E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/appendix.html.vue"
const data = JSON.parse("{\"path\":\"/appendix.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"附录\",\"slug\":\"附录\",\"link\":\"#附录\",\"children\":[]},{\"level\":2,\"title\":\"下载CMand\",\"slug\":\"下载cmand\",\"link\":\"#下载cmand\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"appendix.md\"}")
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
