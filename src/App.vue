<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
  export default { name: 'App' }
</script>
<style>
/* sacar color blanco en transicion*/
.v-main,
.v-application--wrap,
html {
  background-color: rgb(39,39,39) !important;
}
</style>