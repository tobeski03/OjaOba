<template>
  <div>
    <v-slide-group class="pa-4" v-model="model" center-active show-arrows>
      <v-slide-item
        v-for="(product, i) in products"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :elevation="active ? '2' : '0'"
          class="mx-auto my-12 vcard"
          :loading="loading"
          height="370"
          width="200"
          style="margin-right: 1rem !important"
          @click="toggle"
        >
          <v-img height="180" width="200" :src="product.link"></v-img>
          <v-card-title class="pl-3 pa-0">My Left Shoe</v-card-title>

          <v-card-text class="pb-2">
            <div
              class="my-4 text-subtitle-1"
              style="font-weight: 800; color: red; margin: 0 !important"
            >
              $100
            </div>

            <div style="text-align: left; line-height: 1.1rem">
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
  name: "JewelryProductCard",

  data: () => ({
    loading: false,
    selectedColor: "",
    model: null,
    index: "",
    products: [
      {
        link: "img/a4.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/Capture111.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/a7.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/a1.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/a2.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/carbon1.jpg",
        liked: false,
        carted: false,
      },

      {
        link: "img/a8.jpg",
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
/* .vcard:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) !important;
} */
</style>
