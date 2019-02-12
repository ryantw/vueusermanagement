<template>
  <div class="loading">
    <img src="../assets/loading.png">
  </div>
</template>

<style lang="scss" scoped>
    .loading {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        background-color: rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        user-select: none;
    }
</style>
