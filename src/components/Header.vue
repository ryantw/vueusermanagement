<template>
  <v-toolbar>
    <v-toolbar-title>
      <v-btn
        flat
        to="/"
      >
        User Management
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items
      class="hidden-sm-and-down"
    >
      <v-btn
        flat
        to="/users"
        tag="a"
        active-class="active"
      >
        Users
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon
      class="hidden-md-and-up"
    />
  </v-toolbar>
</template>
