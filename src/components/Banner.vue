<template>
  <div class="banner-container">
    <v-alert
      v-if="messages.length"
      :value="true"
      :type="selectedMessage.type"
      transition="slide-y-transition"
    >
      <v-layout
        align-center
        align-content-space-around
      >
        <v-spacer />
        <div>{{ selectedMessage.message }}</div>
        <v-spacer />
        <v-btn
          small
          fab
          @click="dismiss"
        >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-layout>
    </v-alert>
  </div>
</template>

<script>
export default {
  computed: {
    messages () {
      return this.$store.getters.messages
    },
    selectedMessageIndex () {
      return this.$store.getters.selectedMessageIndex
    },
    selectedMessage () {
      return this.messages[this.selectedMessageIndex]
    }
  },
  methods: {
    dismiss () {
      this.$store.dispatch('removeMessageAtIndex', this.selectedMessageIndex)
    }
  }
}
</script>
