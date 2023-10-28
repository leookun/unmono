<template>
    <div class="index">
       <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa veniam fugit recusandae doloremque? Dicta rem culpa veniam expedita? Vel, tempore. In veritatis non atque sapiente, architecto nulla. Inventore, in.
       </div>
    </div>
</template>
<style>

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

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}
</style>