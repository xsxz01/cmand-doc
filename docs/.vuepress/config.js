import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "CMand 中文编程",
  description: "你好，CMand ！",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "CMand 中文编程",
      description: "你好，CMand ！",
    },
  },

  theme: defaultTheme({
    logo: "logo.png",

    navbar: [
      "/",
      {
        text: "高级主题",
        link: "/advanced/" 
      }
    ],
    sidebar: [
      {
        text: "快速上手",
        link: "/get-started",
      },
      {
        text: "安装配置",
        link: "/install",
      },
      {
        text: "应用生命周期",
        link: "/cmand/app-lifecycle",
      },
      {
        text: "注释",
        link: "/cmand/comment",
      },
      {
        text: "标准输出",
        link: "/cmand/stdout",
      },
      {
        text: "变量",
        link: "/cmand/variable",
      },
      {
        text: "常量",
        link: "/cmand/constant",
      },
      {
        text: "数据类型",
        link: "/cmand/datatype",
      },
      {
        text: "字符串",
        link: "/cmand/string",
      },
      {
        text: "表达式",
        link: "/cmand/expression",
      },
      {
        text: "运算符",
        link: "/cmand/operator",
      },
      {
        text: "流程控制",
        link: "/cmand/flow-control",
      },
      {
        text: "循环",
        link: "/cmand/loop",
      },
      {
        text: "输入",
        link: "/cmand/input",
      },
      {
        text: "错误处理",
        link: "/cmand/error-handling",
      },
      {
        text: "模块与包",
        link: "/cmand/module",
      },
      {
        text: "函数与方法",
        link: "/cmand/function",
      },
      {
        text: "类",
        link: "/cmand/class",
      },
      {
        text: "容器类型",
        link: "/cmand/collection",
      },

      {
        text: "附录",
        link: "/appendix",
      },
    ],
  }),

  bundler: viteBundler(),
});
