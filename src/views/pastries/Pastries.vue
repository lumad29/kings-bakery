<template>
  <div>
    <v-img
      src="@/assets/croissant.jpg"
      class="mt-n16"
      height="100vh"
      gradient="to top, rgba(0,0,0,0.1), rgba(50,50,50,0.2)"
    >
      <v-container class="fill-height justify-center"> 
        <v-btn>
          Pastries
        </v-btn>
      </v-container>
    </v-img>
  </div>
</template>

<script>
  export default {
    name: "PastriesView",

    data: () => ({

    }),
  };
</script>