import comp from "C:/Sheencity/Workspace/cmand-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"文档\",\"heroImage\":\"public/logo.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"http://localhost:8080/get-started.html#%E4%BB%8B%E7%BB%8D\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"全中文编程\",\"details\":\"接近于口语化的中文表达，更符合中式思维。\"},{\"title\":\"高效\",\"details\":\"简化Windows应用的开发方式，提高开发效率。\"},{\"title\":\"高性能\",\"details\":\"脱胎于C++的编程语言，拥有极高的执行效率。\"},{\"title\":\"模块化\",\"details\":\"提供便捷的模块化方式，轻松构架大型程序。\"},{\"title\":\"0成本兼容C/C++生态\",\"details\":\"C/C++生态的库可以与CMand直接混用，无需额外成本。\"},{\"title\":\"打包便捷\",\"details\":\"轻松打包成桌面级应用，无需额外配置，一键编译。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1754964986000,\"contributors\":[{\"name\":\"Pang\",\"username\":\"Pang\",\"email\":\"pangyuyu@illusiontech.cn\",\"commits\":2,\"url\":\"https://github.com/Pang\"}],\"changelog\":[{\"hash\":\"6e6bedef3078ed9ef09906e2334b57833995ba14\",\"time\":1754964986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"完成基本的文档内容框架（基础部分）\"},{\"hash\":\"5fe637436000236e4547e8302f6bfd63dee00017\",\"time\":1754889986000,\"email\":\"pangyuyu@illusiontech.cn\",\"author\":\"Pang\",\"message\":\"初始化仓库\"}]},\"filePathRelative\":\"README.md\"}")
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
