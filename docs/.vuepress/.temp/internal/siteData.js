export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"CMand 中文编程\",\"description\":\"你好，CMand ！\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"CMand 中文编程\",\"description\":\"你好，CMand ！\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
