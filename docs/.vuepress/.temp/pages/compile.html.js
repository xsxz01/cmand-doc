import comp from "D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/compile.html.vue"
const data = JSON.parse("{\"path\":\"/compile.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"CustomLayout\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"compile.md\"}")
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
