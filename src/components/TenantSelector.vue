<template>
  <v-layout
    class="pt-2"
    row
  >
    <v-select
      v-model="selectedTenant"
      :items="tenants"
      item-text="url"
      item-value="id"
      label="Tenant"
    />
    <v-btn
      flat
      icon
      color="green"
      @click="getTenants"
    >
      <v-icon>cached</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
const TenantSelect = {
  methods: {
    async getTenants () {
      await this.$store.dispatch('getTenants')
    }
  },
  computed: {
    tenants () {
      return this.$store.getters.tenants
    },
    selectedTenant: {
      get () {
        return this.tenants[this.$store.getters.selectedTenantIndex]
      },
      set (value) {
        const selectedTenantIndex = this.tenants.findIndex((tenant) => tenant.id === value)
        this.$store.dispatch('setSelectedTenantIndex', selectedTenantIndex)
      }
    }
  }
}

export default TenantSelect
</script>
