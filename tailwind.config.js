/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./**/*.md",  // 不建议使用通配符，会消耗性能
      "./docs/about.md",
      "./docs/.vuepress/layouts/NotFound.vue",
      "./.vuepress/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      extend: {},
    },
    plugins: [],
  }
  