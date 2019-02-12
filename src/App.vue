<template>
  <div class="app">
    <app-header></app-header>
    <div class="router-wrapper container">
      <Loading v-show="isLoading" />
      <div class="row">
        <div class="col-lg-12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    appHeader: Header,
    Loading
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .router-wrapper {
    flex: 1;
  }
}
.container {
  position: relative;
}
</style>
