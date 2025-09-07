import { defineClientConfig } from 'vuepress/client'
import CustomLayout from './layout/CustomLayout.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})