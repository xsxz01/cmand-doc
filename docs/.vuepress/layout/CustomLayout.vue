<template>
  <!--对页面进行布局，左占30%{背景颜色为浅灰色}，右占70%{背景颜色为纯白色}-->
  <div class="flex h-screen">
    <div class="w-[30%] bg-gray-200">
      <CMandLogo />
    </div>
    <div class="w-[70%] bg-white">
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import CMandLogo from '../components/CMandLogo.vue'
</script>
