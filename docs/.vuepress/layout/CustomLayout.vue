
<template>
  <div>
    <h1>Custom Layout</h1>
    <!--按钮，点击计数-->
    <button @click="count++">点击了{{ count }}次</button>
    <button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
        <span class="ml-3 block truncate">Tom Cook</span>
    </button>
    <div>
        <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
