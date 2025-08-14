import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"快速上手\",\"slug\":\"快速上手\",\"link\":\"#快速上手\",\"children\":[]}],\"git\":{\"updatedTime\":1754966190000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":3,\"url\":\"https://github.com/Pang\"},{\"name\":\"广龙宇\",\"username\":\"\",\"email\":\"pangyuyu@email.cn\",\"commits\":1}],\"changelog\":[{\"hash\":\"f5dcb24155cf939788117e2ce43a1eeca8d47268\",\"time\":1754966190000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"纠正介绍部分的错误文字\"},{\"hash\":\"bbfb7fcf687fa168dac18c685a38483078fd61fe\",\"time\":1754926048000,\"email\":\"pangyuyu@email.cn\",\"author\":\"广龙宇\",\"message\":\"创建简单文档框架\"},{\"hash\":\"f4047e1cbae0979d86f8a09250c11e5408e0b11f\",\"time\":1754908455000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"调整文档中文显示\"},{\"hash\":\"5fe637436000236e4547e8302f6bfd63dee00017\",\"time\":1754889986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"初始化仓库\"}]},\"filePathRelative\":\"get-started.md\"}")
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
