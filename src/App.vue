<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/Header.vue'

export default {
  components: { appHeader: Header }
}
</script>

<style>
</style>
