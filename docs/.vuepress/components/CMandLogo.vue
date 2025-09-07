<template>
    <div class="flex flex-col items-end justify-center h-screen pr-8">
        <div class="flex items-center justify-center">
            <img src="/logo.png" alt="logo" class="w-16 h-16" />
        </div>
        <div class="flex items-center justify-center">
            <h1 class="text-5xl font-extrabold text-gray-900 tracking-wide">CMand</h1>
        </div>
        <div class="flex items-center justify-center mt-0">
            <p class="text-lg text-gray-600 tracking-wide">
                全中文 · 高效率 · 高性能 · 语法简单
            </p>
        </div>
        <!--面包屑导航[首页/下载/文档/关于]-->
        <nav class="flex items-center justify-center mt-0">
            <div class="flex items-center space-x-2 text-base text-gray-600">
                <a href="#" class="hover:text-blue-600 transition-colors duration-200">首页</a>
                <span class="text-gray-400">/</span>
                <a href="#" class="hover:text-blue-600 transition-colors duration-200">下载</a>
                <span class="text-gray-400">/</span>
                <a href="#" class="hover:text-blue-600 transition-colors duration-200">文档</a>
                <span class="text-gray-400">/</span>
                <a href="#" class="hover:text-blue-600 transition-colors duration-200">关于</a>
            </div>
        </nav>
        <!--最新版下载链接，上面是版本号和介绍，下面是下载链接-->
        <div class="flex flex-col items-center justify-center mt-6 space-y-4">
            <p class="text-base text-gray-600">
                最新版：<span class="text-lg font-bold">1.0.4 (2025-09-06)</span>
            </p>
            <a href="#"
                class="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200">
                下载最新版
            </a>
        </div>
    </div>
</template>