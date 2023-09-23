<script>
export default {
  name: 'navigation'
}
</script>

<template>
  <header class="flex">
    <div class="branding flex">
      <p class="menu-name">Home</p>
      <!-- <img src="" alt="" /> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #001d3d;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }

  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #3a86ff;
    justify-content: center;
    padding: 24px;
    @media (min-width: 900px) {
      width: 100%;
    }

    img {
      width: auto;
      height: 30px;
    }

    .menu-name {
      color: #fff;
      font-weight: 500;
    }
  }
}
</style>
