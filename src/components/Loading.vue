<template>
    <div class="loading">
        <img src="../assets/loading.png" class="mx-auto d-block" />
    </div>
</template>

<style lang="scss" scoped>
    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
</style>
