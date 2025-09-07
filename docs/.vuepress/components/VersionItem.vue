<template>
    <div class="flex flex-col p-4 border-gray-200">
        <!--垂直布局，第一行 日期 · 面包屑-->
        <div class="flex items-center space-x-2 text-sm text-gray-500">
            <div class="flex items-center space-x-1">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="font-medium">{{ formatDate(date) }}</span>
            </div>
            <div class="flex items-center justify-center w-1 h-1 bg-gray-400 rounded-full"></div>
            <div class="flex items-center space-x-1">
                <template v-for="(item, index) in breadcrumb" :key="index">
                    <a 
                        :href="item.link" 
                        class="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        {{ item.text }}
                    </a>
                    <span v-if="index < breadcrumb.length - 1" class="text-gray-400">/</span>
                </template>
            </div>
        </div>
        
        <!--垂直布局，第二行 版本标题-->
        <h3 class="text-xl font-bold text-gray-800">{{ title }}</h3>
        
        <!--垂直布局，第三行 版本简介（底部有阅读更多链接）-->
        <div class="space-y-2">
            <p class="text-gray-600 leading-relaxed">{{ description }}</p>
            <a href="#" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                阅读更多 →
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { PropType } from 'vue'

// 格式化日期显示
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return '今天'
  } else if (diffDays === 1) {
    return '昨天'
  } else if (diffDays <= 7) {
    return `${diffDays}天前`
  } else {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

defineProps({
    date: {
        type: String,
        default: '2025-01-01'
    },
    breadcrumb: {
        type: Array as PropType<{
            text: string;
            link: string;
        }[]>,
        default: [{
            text: '版本更新',
            link: '/compile'
        }]
    },
    title: {
        type: String,
        default: '版本标题'
    },
    description: {
        type: String,
        default: '这是版本的详细描述信息，包含了本次更新的主要内容和改进。'
    }
});
</script>