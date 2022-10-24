<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        prominent
        shrink-on-scroll
        dark
        scroll-target="#scrolling-techniques"
        color="yellow"
        elevation="1"
      >
        <v-app-bar-nav-icon color="green" style="margin: 0"></v-app-bar-nav-icon
        ><v-app-bar-title style="color: #4caf50">Title</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon style="margin: 0">
          <v-icon color="green">mdi-magnify</v-icon>
        </v-btn>
        <v-btn color="green" elevation="2" depressed small> login</v-btn>
        <v-btn color="green" elevation="2" depressed small> Register </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="125"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>
    <div class="d-flex mb-6" style="margin-bottom: 1rem !important">
      <v-carousel
        cycle
        height="290"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(carousel, i) in carousels"
          :key="i"
          :src="`img/${carousel.src}`"
        ></v-carousel-item>
      </v-carousel>

      <div class="">
        <v-img
          lazy-src="/img/promotion-2.jpg"
          max-height="145"
          max-width="390"
          src="/img/promotion-2.jpg"
        ></v-img>

        <v-img
          lazy-src="/img/promotion-1.jpg"
          max-height="145"
          max-width="390"
          src="/img/promotion-1.jpg"
        ></v-img>
      </div>
    </div>
    <ProductCard />
    <!-- <v-main>
      <router-view />
    </v-main> -->
  </v-app>
</template>
<style>
button {
  margin: 0.5rem;
}
</style>
<script>
import ProductCard from "./components/ProductCard";
export default {
  name: "App",
  components: {
    ProductCard,
  },
  data: () => ({
    carousels: [
      {
        src: "slide-1.jpg",
      },
      {
        src: "slide-2.jpg",
      },
      {
        src: "slide-3.jpg",
      },
    ],
  }),
};
</script>
