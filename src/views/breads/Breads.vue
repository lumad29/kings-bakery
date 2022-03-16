<template>
  <div>
    <v-img
      src="@/assets/bread-background-1.jpeg"
      class="mt-n16"
      height="100vh"
      gradient="to top, rgba(0,0,0,0.1), rgba(50,50,50,0.2)"
    >
      <v-container class="fill-height justify-center"> 
        <breads-carousel>
          <template #icon>
            mdi-minus-circle-outline
          </template>
        </breads-carousel>
      </v-container>
    </v-img>
  </div>
</template>

<script>
  import BreadsCarousel from "./BreadsCarousel.vue"
  export default {
    name: "BreadsView",
    components: {
      BreadsCarousel,
    },
  };
</script>
