<template>
    <button class="my-button">按钮组件</button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.my-button {
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-brand-3);
    border-radius: 999px;
    color: #fff;
    &:hover {
      background-color: var(--vp-c-brand-2);
    }
  }
</style>