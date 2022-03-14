<template>
  <v-sheet
    class="mx-auto mt-4"
    elevation="8"
    width="80vw"
    color="rgba(0,0,0,0.55)"
  >
    <v-slide-group
      v-model="breadsIndex"
      class="pa-4"
      show-arrows
      center-active
    >
      <template #next>
        <v-icon color="white">
          mdi-chevron-right
        </v-icon>
      </template>
      <template #prev>
        <v-icon color="white">
          mdi-chevron-left
        </v-icon>
      </template>

      <v-slide-item
        v-for="bread in breads"
        :key="bread.name"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'grey' : 'grey lighten-1'" 
          class="ma-4"
          height="250"
          width="250"
          @click="toggle"
        >
          <v-img
            height="250"
            width="250"
            :src="require(`@/assets/breads-img/${bread.img}`)"
            :gradient="active ? 'to bottom , rgba(20,20,20, .4) 40%,  rgba(0,0,0,.8) 160%' : ''"
          >
            <v-footer
              color="rgba(0,0,0,0.55)"
              dark
              absolute
              style="justify-content: center"
            >
              {{ bread.name }}
            </v-footer>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                />
              </v-scale-transition>
            </v-row>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="breadsIndex != null"
        height="200"
        tile
        color="transparent"
        dark
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-divider
            style="margin: 0 200px"
            color="grey"
          />
          <h3
            class="text-h6 mx-15 px-15 pb-10 font-weight-thin"
          >
            {{ breads[breadsIndex].description }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      breadsIndex: null,
      breads: [
        {name: 'white-sourdough', img: '1-white-sourdough.jpeg', description: 'Our signature bread and best seller. Leavened with a natural sourdough starter and fermented for 48 hours, this leads to an open crumb, chewy texture and sour notes. It is then baked on the stone of the oven to achieve a deep and crispy crust. Not only delicious but believed to be good for gut health, this is an all round winner. '},
        {name: 'seeded-sourdough', img: '2-seeded-sourdough.jpeg', description: 'Our new seeded sourdough. Leavened with a natural sourdough starter, we then add poppy seeds, linseed & pumpkin seeds to add more fibre and natural goodness.'},
        {name: 'poppyseed-bloomer', img: '3-poppyseed-bloomer.jpeg', description: 'A traditional white bloomer. Soft and fluffy with a poppy seed crust. Made with flour, fresh yeast and salt. Perfect for bacon sandwiches or simply with lashing of butter. '},
        {name: 'brown-sourdough', img: '4-brown-sourdough.jpeg', description: 'Our brown sourdough is made with wholemeal flour and a little white flour to create a dense and chewy loaf. Leavened with a natural sourdough starter and fermented for 48 hours, leading to an open crumb and sour notes. It is then baked on the stone of the oven to achieve a deep and crispy crust.'},
        {name: 'ciabatta-rolls', img: '5-ciabatta-rolls.jpeg', description: 'Italian bread dusted with flour, perfect for sandwiches or dipped in oil.'},
        {name: 'olive-ciabatta', img: '6-olive-ciabatta.jpeg', description: 'Italian bread dusted with flour and baked with green olives for extra saltiness.'},
        {name: 'white-tin', img: '7-white-tin.jpeg', description: 'A classic farmhouse loaf made with white flour, perfect for sandwiches.'},
        {name: 'spelt', img: '8-spelt.jpeg', description: 'A beautifully dense and flavoursome loaf. Made spelt flour, an ancient grain prized for its natural richness in minerals. This produces a loaf with a lovely nutty flavour. Fermented for 24 hours and then topped with pumpkin seeds, sunflower seeds and sesame seeds for extra texture. '},
        {name: 'multigrain', img: '9-multigrain.jpeg', description: 'Starting with flour we then add sunflower seeds, millet, oats, barley and malted wheat flakes to add a delicious new level of moreish flavour and for extra natural goodness. A perfect combination for tuna sandwiches or simply toasted.'},
        {name: 'slow-rise', img: '10-slow-rise.jpeg', description: 'A classic white bread with a slower fermentation process to create a chewy loaf with a crispy crust.'},
        {name: 'demi-brioche-rolls', img: '11-demi-brioche-rolls.jpeg', description: 'Brioche style soft rolls, perfect for burgers or bacon baps.'},
        {name: 'potatoe-sourdough', img: '12-potatoe-sourdough.jpeg', description: 'A flavoursome & chewy loaf. Made with rosemary & potatoes fresh from the market. The potatoes are baked for extra flavour and are used to retain softness and moistures in the loaf. The fragrant rosemary makes it a perfect companion for soup or dipped in melted cheese!'},
        {name: 'baguette', img: '13-baguette.jpeg', description: 'Classic french bread made with a 48 hours fermented dough, just add butter. '},
        {name: 'challah', img: '14-challah.jpeg', description: 'A rich bread made with eggs, butter, a hint of sugar and vanilla. Makes the best french toast with maple syrup.'},
        {name: 'rye-sourdough', img: '15-rye-sourdough.jpeg', description: 'A dark and dense bread that takes a week to make and ferments for 24 hours. Perfect thinly sliced and toasted for an open sandwich with smoked salmon or salt beef. '},
        {name: 'onion-focaccia', img: '16-onion-focaccia.jpeg', description: 'A flat oven baked Italian bread, made with olive oil, rosemary and red onion. Delicious on its own, dipped in oil or as a sandwich.'},
      ],
    }),
  }
</script>



