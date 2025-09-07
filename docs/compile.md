---
layout: CustomLayout
---

<!--渲染版本列表-->
<VersionList :versionList="versionList" />


<script setup lang="ts">
import { ref } from 'vue'

const versionList = ref([{
    date: '2025-01-01',
    breadcrumb: [{
        text: '版本更新',
        link: '/compile'
    }],
    version: 'v1.0.0',
    title: '版本标题',
    description: '版本描述'
}])

const count = ref(0)
</script>