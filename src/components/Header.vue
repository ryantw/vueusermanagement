<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
        to="/"
        class="navbar-brand"
      >
      User Management
    </router-link>

    <ul class="nav navbar-nav navbar-right">
      <router-link
        to="/users"
        tag="li"
        class="nav-item"
        activeClass="active"
      >
        <a>Users</a>
      </router-link>
    </ul>
  </nav>
</template>
