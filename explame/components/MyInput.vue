<template>
    <input class="my-input" placeholder="请输入"/>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.my-input {
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-gray-soft);
    border-radius: 999px;
    padding: 0 20px;
    &:hover {
      background-color: var(--vp-c-gray-soft);
    }
  }
</style>