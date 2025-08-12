import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/cmand/module.html.vue"
const data = JSON.parse("{\"path\":\"/cmand/module.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"模块化\",\"slug\":\"模块化\",\"link\":\"#模块化\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"cmand/module.md\"}")
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
