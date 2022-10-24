<template>
  <div>
    <v-slide-group class="pa-4" multiple show-arrows>
      <v-slide-item v-for="(product, i) in products" :key="i">
        <v-card
          class="mx-auto my-12"
          :loading="loading"
          height="400"
          width="250"
          style="margin-right: 2rem !important"
        >
          <v-img height="200" width="250" :src="product.link"></v-img>
          <v-card-title class="pl-3 pa-0">My Left Shoe</v-card-title>

          <v-card-text class="pb-2">
            <div
              class="my-4 text-subtitle-1"
              style="font-weight: 800; color: red; margin: 0 !important"
            >
              $100
            </div>

            <div style="text-align: left">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              class="ma-0 pl-6 pb-3"
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
            ></v-rating>

            <!-- <div class="grey--text ms-4">4.5 (413)</div> -->
          </v-row>
          <v-divider class="mx-4"></v-divider>

          <div class="d-flex pl-2 pr-2">
            <v-btn @click="loveColor(i)" icon elevation="0" class="ma-0">
              <v-icon :color="product.liked ? 'red' : 'grey lighten-1'"
                >mdi-heart</v-icon
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="shopColor(i)" icon elevation="0" class="ma-0">
              <v-icon :color="product.carted ? 'green' : 'grey lighten-1'"
                >mdi-cart</v-icon
              >
            </v-btn>
          </div>

          <!-- <v-card-actions>
        <v-btn color="green" text @click="reserve"> Reserve </v-btn>
      </v-card-actions> -->
          <v-row class="fill-height" align="center" justify="center">
            <!-- <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition> -->
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  data: () => ({
    loading: false,
    selectedColor: "",
    cartColor: "",
    index: "",
    products: [
      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },

      {
        link: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        liked: false,
        carted: false,
      },
    ],
  }),
  methods: {
    loveColor(i) {
      this.products[i].liked = !this.products[i].liked;
    },
    shopColor(i) {
      this.products[i].carted = !this.products[i].carted;
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
v-card-title {
  color: red !important;
}
</style>
