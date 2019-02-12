<template>
  <v-app class="app">
    <app-header />
    <v-container class="router-wrapper">
      <Loading v-show="isLoading" />
      <router-view />
    </v-container>
  </v-app>
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
    position: relative;
    flex: 1;
  }
}
</style>
