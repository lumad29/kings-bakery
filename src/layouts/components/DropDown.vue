<template>
  <div class="text-center">
    <v-menu
      v-for="(item, index) in navItemsAppBar"
      :key="index"
      offset-y
      open-on-hover
    >
      <template v-slot:activator="{ on, attrs, value }">
        <v-btn
          v-if="item.isMenuDropDown"
          color="transparent"
          elevation="0"
          dark
          v-bind="attrs"
          class="mx-8"
          v-on="on"
        >
          {{ item.name }}
          <v-icon
            size="28"
            class="mr-n1"
            color="grey darken-1"
            :class="{'active-menu-chevron-flip': value}"
            @click.stop
          >
            mdi-chevron-down
          </v-icon> 
        </v-btn>
        <v-btn
          v-else
          color="transparent"
          elevation="0"
          v-bind="attrs"
          @click="$router.push({name:item.routeName})"
        >
          {{ item.name }}
        </v-btn>
      </template>
      <v-list
        v-if="item.isMenuDropDown"
        color="rgba(0,0,0,0.55)"
        dark
        style="padding: 0px; margin: 10px 0;"
      >
        <v-list-item
          v-for="(menuItem, indexMenu) in item.menuDropDownItems"
          :key="indexMenu"
          link
          @click="$router.push({name: menuItem.routeName})" 
        >
          <v-list-item-title>{{ menuItem.routeName }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  import { sync } from 'vuex-pathify'
  export default {
    name: 'DropDown',
    data: () => ({
    }),
    computed: {
      ...sync('app', ['drawer', 'navItemsAppBar']),
    },
  }
  
</script>


<style scoped>
.active-menu-chevron-flip {
  transform: rotate(180deg);
}
</style>