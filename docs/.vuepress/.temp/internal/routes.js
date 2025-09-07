export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/appendix.html", { loader: () => import(/* webpackChunkName: "appendix.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/appendix.html.js"), meta: {"title":""} }],
  ["/compile.html", { loader: () => import(/* webpackChunkName: "compile.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/compile.html.js"), meta: {"title":""} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":""} }],
  ["/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/install.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"文档"} }],
  ["/advanced/", { loader: () => import(/* webpackChunkName: "advanced_index.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/advanced/index.html.js"), meta: {"title":"高级主题"} }],
  ["/advanced/test.html", { loader: () => import(/* webpackChunkName: "advanced_test.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/advanced/test.html.js"), meta: {"title":""} }],
  ["/cmand/app-lifecycle.html", { loader: () => import(/* webpackChunkName: "cmand_app-lifecycle.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/app-lifecycle.html.js"), meta: {"title":""} }],
  ["/cmand/class.html", { loader: () => import(/* webpackChunkName: "cmand_class.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/class.html.js"), meta: {"title":""} }],
  ["/cmand/collection.html", { loader: () => import(/* webpackChunkName: "cmand_collection.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/collection.html.js"), meta: {"title":""} }],
  ["/cmand/comment.html", { loader: () => import(/* webpackChunkName: "cmand_comment.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/comment.html.js"), meta: {"title":""} }],
  ["/cmand/constant.html", { loader: () => import(/* webpackChunkName: "cmand_constant.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/constant.html.js"), meta: {"title":""} }],
  ["/cmand/datatype.html", { loader: () => import(/* webpackChunkName: "cmand_datatype.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/datatype.html.js"), meta: {"title":""} }],
  ["/cmand/error-handling.html", { loader: () => import(/* webpackChunkName: "cmand_error-handling.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/error-handling.html.js"), meta: {"title":""} }],
  ["/cmand/expression.html", { loader: () => import(/* webpackChunkName: "cmand_expression.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/expression.html.js"), meta: {"title":""} }],
  ["/cmand/flow-control.html", { loader: () => import(/* webpackChunkName: "cmand_flow-control.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/flow-control.html.js"), meta: {"title":""} }],
  ["/cmand/function.html", { loader: () => import(/* webpackChunkName: "cmand_function.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/function.html.js"), meta: {"title":""} }],
  ["/cmand/input.html", { loader: () => import(/* webpackChunkName: "cmand_input.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/input.html.js"), meta: {"title":""} }],
  ["/cmand/loop.html", { loader: () => import(/* webpackChunkName: "cmand_loop.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/loop.html.js"), meta: {"title":""} }],
  ["/cmand/module.html", { loader: () => import(/* webpackChunkName: "cmand_module.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/module.html.js"), meta: {"title":""} }],
  ["/cmand/operator.html", { loader: () => import(/* webpackChunkName: "cmand_operator.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/operator.html.js"), meta: {"title":""} }],
  ["/cmand/stdout.html", { loader: () => import(/* webpackChunkName: "cmand_stdout.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/stdout.html.js"), meta: {"title":""} }],
  ["/cmand/string.html", { loader: () => import(/* webpackChunkName: "cmand_string.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/string.html.js"), meta: {"title":""} }],
  ["/cmand/variable.html", { loader: () => import(/* webpackChunkName: "cmand_variable.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/cmand/variable.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Workpace/cmand-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
