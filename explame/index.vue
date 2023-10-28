<template>
  <div class="index">
    <div class="container my-hero">
      <MyButton/>
      <MyInput style="margin-top: 20px;"/>
    </div>
  </div>
</template>
<script setup>
import MyButton from "./components/MyButton.vue"
import MyInput from "./components/MyInput.vue"
</script>
<style lang="less">
.index {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
  padding-top: 20px;
}

@media (min-width: 640px) {
  .index {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
    padding-top: 20px;
  }
}

@media (min-width: 960px) {
  .index {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
    padding-top: 20px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

.my-hero {
  padding-top: 50px;
  display: flex;
  flex-direction: column !important;

}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}</style>