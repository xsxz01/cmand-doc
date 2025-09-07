import comp from "D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/app-lifecycle.html.vue"
const data = JSON.parse("{\"path\":\"/cmand/app-lifecycle.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"应用生命周期\",\"slug\":\"应用生命周期\",\"link\":\"#应用生命周期\",\"children\":[]}],\"git\":{\"updatedTime\":1755570212000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":1,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"77ca3daef6d0f8ee1c6f3458ebc54454dbf91df4\",\"time\":1755570212000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完善标准输出的文档\"}]},\"filePathRelative\":\"cmand/app-lifecycle.md\"}")
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
