import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/advanced/test.html.vue"
const data = JSON.parse("{\"path\":\"/advanced/test.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"单元测试\",\"slug\":\"单元测试\",\"link\":\"#单元测试\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"advanced/test.md\"}")
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
