<template>
  <v-app class="app">
    <app-header />
    <div class="content-wrapper">
      <app-banner />
      <Loading v-show="isLoading" />
      <v-container class="router-wrapper">
        <router-view />
      </v-container>
    </div>
    <the-snackbar />
  </v-app>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Loading from '@/components/Loading.vue'
import Banner from '@/components/Banner.vue'
import TheSnackbar from '@/components/TheSnackbar.vue'

export default {
  components: {
    appHeader: Header,
    appBanner: Banner,
    Loading,
    TheSnackbar
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

  .content-wrapper {
    position: relative;
  }
}
</style>
