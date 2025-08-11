export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/appendix.html", { loader: () => import(/* webpackChunkName: "appendix.html" */"E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/appendix.html.js"), meta: {"title":""} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":""} }],
  ["/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/install.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"文档"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Workspace/cmand-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
