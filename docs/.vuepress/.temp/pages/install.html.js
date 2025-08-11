import comp from "E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/install.html.vue"
const data = JSON.parse("{\"path\":\"/install.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"1. 下载CMand\",\"slug\":\"_1-下载cmand\",\"link\":\"#_1-下载cmand\",\"children\":[]},{\"level\":3,\"title\":\"2. 安装CMand\",\"slug\":\"_2-安装cmand\",\"link\":\"#_2-安装cmand\",\"children\":[]},{\"level\":3,\"title\":\"3. 配置环境变量\",\"slug\":\"_3-配置环境变量\",\"link\":\"#_3-配置环境变量\",\"children\":[]},{\"level\":3,\"title\":\"4. 运行HelloWorld\",\"slug\":\"_4-运行helloworld\",\"link\":\"#_4-运行helloworld\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"install.md\"}")
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
