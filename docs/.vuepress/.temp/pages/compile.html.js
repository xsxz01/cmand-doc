import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/compile.html.vue"
const data = JSON.parse("{\"path\":\"/compile.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"CustomLayout\"},\"headers\":[],\"git\":{\"updatedTime\":1757219964000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"qq1502724957@live.com\",\"commits\":2,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"9bbdeba7d6f5fc2578ffd505db68f02fd73eec57\",\"time\":1757219964000,\"email\":\"qq1502724957@live.com\",\"author\":\"Pang\",\"message\":\"完成编译器发布首页\"},{\"hash\":\"d2bf9c8d990614ce4ead634c8cd98c97ac9694e2\",\"time\":1757209425000,\"email\":\"qq1502724957@live.com\",\"author\":\"Pang\",\"message\":\"集成tailwindcss\"}]},\"filePathRelative\":\"compile.md\"}")
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
