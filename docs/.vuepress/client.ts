import { defineClientConfig } from 'vuepress/client'
import CustomLayout from './layout/CustomLayout.vue'
import VersionItem from './components/VersionItem.vue'
import VersionList from './components/VersionList.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
  enhance({ app }) {
    app.component('VersionItem', VersionItem);
    app.component('VersionList', VersionList);
  }
})