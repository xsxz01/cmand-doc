import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'CMand 中文编程',
  description: '你好，CMand ！',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'CMand 中文编程',
      description: '你好，CMand ！',
    },
  },

  theme: defaultTheme({
    logo: 'public/logo.png',

    navbar: ['/'],
    sidebar: [
      {
        text: '快速上手',
        link: '/get-started',
      },
      {
        text: '安装配置',
        link: '/install',
      },
      {
        text: '附录',
        link: '/appendix',
      }
    ],

  }),

  bundler: viteBundler(),
})
