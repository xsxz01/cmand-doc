<!--渲染版本列表组件-->
<template>
    <div class="version-list-container overflow-y-scroll max-h-screen">
        <div class="max-w-4xl mx-auto p-6">
            <!-- 版本列表 -->
            <div class="space-y-6">
                <VersionItem
                    v-for="version in versions"
                    :key="version.id"
                    :date="version.date"
                    :breadcrumb="version.breadcrumb"
                    :title="version.title"
                    :description="version.description"
                    class="hover:shadow-lg transition-shadow duration-300"
                />
            </div>
            
            <!-- 加载更多按钮 -->
            <div class="text-center mt-8" v-if="hasMore">
                <button 
                    @click="loadMore"
                    :disabled="loading"
                    class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    <span v-if="!loading">加载更多</span>
                    <span v-else class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        加载中...
                    </span>
                </button>
            </div>
            
            <!-- 空状态 -->
            <div v-if="versions.length === 0 && !loading" class="text-center py-12">
                <div class="text-gray-400 mb-4">
                    <svg class="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">暂无版本记录</h3>
                <p class="text-gray-500">还没有发布任何版本</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VersionItem from './VersionItem.vue'

interface Version {
    id: string
    date: string
    breadcrumb: {
        text: string
        link: string
    }[]
    title: string
    description: string
}

// 响应式数据
const versions = ref<Version[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = 5

// 模拟版本数据
const mockVersions: Version[] = [
    {
        id: '1',
        date: '2025-01-15',
        breadcrumb: [{
            text: '重大更新',
            link: '/compile'
        }],
        title: 'v2.1.0 - 性能优化版本',
        description: '本次更新主要针对编译器性能进行了大幅优化，编译速度提升50%，同时修复了多个已知问题，增加了新的语法特性支持。'
    },
    {
        id: '2',
        date: '2025-01-10',
        breadcrumb: [{
            text: '功能更新',
            link: '/get-started'
        }],
        title: 'v2.0.5 - 错误处理增强',
        description: '增强了错误处理机制，提供更详细的错误信息和调试支持。新增了多个内置函数，改进了模块系统的稳定性。'
    },
    {
        id: '3',
        date: '2025-01-05',
        breadcrumb: [{
            text: '修复更新',
            link: '/cmand/error-handling'
        }],
        title: 'v2.0.4 - 稳定性修复',
        description: '修复了在特定条件下可能出现的内存泄漏问题，优化了垃圾回收机制，提升了长时间运行程序的稳定性。'
    },
    {
        id: '4',
        date: '2024-12-28',
        breadcrumb: [{
            text: '功能更新',
            link: '/cmand/datatype'
        }],
        title: 'v2.0.3 - 新增数据类型',
        description: '新增了多种数据类型支持，包括大数字类型和时间类型。改进了类型推断系统，使代码编写更加便捷。'
    },
    {
        id: '5',
        date: '2024-12-20',
        breadcrumb: [{
            text: '重大更新',
            link: '/compile'
        }],
        title: 'v2.0.0 - 全新架构',
        description: '全新的编译器架构，采用现代化的设计理念。重写了核心引擎，支持更多的编程范式，提供了更好的开发体验。'
    },
    {
        id: '6',
        date: '2024-12-15',
        breadcrumb: [{
            text: '功能更新',
            link: '/cmand/module'
        }],
        title: 'v1.9.8 - 模块系统优化',
        description: '优化了模块导入导出机制，支持动态模块加载。改进了包管理系统，使依赖管理更加简单高效。'
    },
    {
        id: '7',
        date: '2024-12-10',
        breadcrumb: [{
            text: '修复更新',
            link: '/cmand/expression'
        }],
        title: 'v1.9.7 - 语法解析修复',
        description: '修复了复杂表达式解析中的几个边界情况问题。改进了语法错误提示，使错误信息更加准确和友好。'
    }
]

// 加载版本数据
const loadVersions = async (page: number = 1) => {
    loading.value = true
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newVersions = mockVersions.slice(startIndex, endIndex)
    
    if (page === 1) {
        versions.value = newVersions
    } else {
        versions.value.push(...newVersions)
    }
    
    hasMore.value = endIndex < mockVersions.length
    loading.value = false
}

// 加载更多
const loadMore = async () => {
    if (loading.value || !hasMore.value) return
    
    currentPage.value++
    await loadVersions(currentPage.value)
}

// 组件挂载时加载初始数据
onMounted(() => {
    loadVersions()
})
</script>

<style scoped>
.version-list-container {
    min-height: 100vh;
}

@media (max-width: 768px) {
    .version-list-container {
        padding: 1rem;
    }
}
</style>