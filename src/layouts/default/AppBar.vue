<template>
  <v-app-bar 
    app
    color="rgba(0,0,0,0.55)"
    dark
  >
    <router-link to="/">
      <v-avatar class="mx-4">
        <v-img 
          src="@/assets/crown.png"
        />
      </v-avatar>
    </router-link>
 
    <v-toolbar-title
      class="my-font font-weight-bold"
    >
      Kings Bakery
    </v-toolbar-title>
    <dropdown />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'
  import Dropdown from '../components/DropDown.vue'

  export default {
    name: 'DefaultAppBar',
    components: {
      Dropdown, 
    },
    computed: { 
      ...sync('app', ['drawer', 'navItemsAppBar']), 
    },
  }
</script>

<style>
.my-font {
  font-family: 'Abril Fatface', cursive; 
  font-size: 26px;
}
</style>