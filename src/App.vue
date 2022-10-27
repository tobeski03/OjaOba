<template>
  <v-app style="overflow-x: hidden">
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
        class="carouselslide"
        cycle
        height="290"
        hide-delimiter-background
        show-arrows-on-hover
        touch
      >
        <v-carousel-item
          v-for="(carousel, i) in carousels"
          :key="i"
          :src="`img/${carousel.src}`"
        ></v-carousel-item>
      </v-carousel>

      <div class="">
        <v-img
          class="promo"
          lazy-src="/img/promotion-2.jpg"
          height="145"
          width="350"
          src="/img/promotion-2.jpg"
        ></v-img>

        <v-img
          class="promo"
          lazy-src="/img/promotion-1.jpg"
          height="145"
          width="350"
          src="/img/promotion-1.jpg"
        ></v-img>
      </div>
    </div>
    <ProductCard />
    <v-container max-width="1200">
      <v-row class="d-flex mx-auto" dense justify="center">
        <v-img
          lazy-src="/img/3.jpg"
          src="/img/3.jpg"
          min-width="300"
          max-width="350"
        ></v-img>

        <v-img
          lazy-src="/img/2.jpg"
          src="/img/2.jpg"
          min-width="300"
          max-width="350"
        ></v-img>

        <v-img
          lazy-src="/img/1.jpg"
          src="/img/1.jpg"
          min-width="300"
          max-width="350"
        ></v-img>
      </v-row>
    </v-container>

    <div
      class="d-flex mx-10 my-3 flex-wrap"
      style="gap: 1rem; justify-content: center"
    >
      <div
        class="popularCat"
        style="text-align: center; border: 1px solid grey"
        v-for="(item, index) in PopularCat"
        :key="index"
      >
        <img :src="item.src" alt="no Image" />
        <p class="pl-2 pr-2">{{ item.caption }}</p>
      </div>
    </div>
    <div class="d-flex catheader mx-14 mb-2">
      <p class="my-auto py-4 pl-4" style="color: white; letter-spacing: 0.1rem">
        Jewelry and Accessories
      </p>
      <v-spacer></v-spacer>
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow">view All</a>
    </div>
    <JewelryProductCard />
    <div class="d-flex catheader mx-14 mb-2">
      <p class="my-auto py-4 pl-4" style="color: white; letter-spacing: 0.1rem">
        Fashion & Women's Clothing
      </p>
      <v-spacer></v-spacer>
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow">view All</a>
    </div>
    <FemaleProductCard />
    <div class="d-flex catheader mx-14 mb-2">
      <p class="my-auto py-4 pl-4" style="color: white; letter-spacing: 0.1rem">
        Fashion & Men's Clothing
      </p>
      <v-spacer></v-spacer>
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow">view All</a>
    </div>
    <MaleProductCard />
    <div class="d-flex mx-10 adflex" style="gap: 2rem; justify-content: center">
      <img
        src="/img/ad-1.jpg"
        alt="no-image"
        style="min-width: 70%; height: 150px"
      />
      <img
        src="/img/ad-2.jpg"
        alt="no-image"
        style="min-width: 30%; height: 150px"
      />
    </div>
    <div class="d-flex catheader mx-14 mb-2 mt-4">
      <p class="my-auto py-4 pl-4" style="color: white; letter-spacing: 0.1rem">
        Most Popular New Products
      </p>
      <v-spacer></v-spacer>
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow"
        >Men's Fashion & Clothing</a
      >
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow"
        >Jewelry & Accessories</a
      >
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow"
        >Sports & Outdoors</a
      >
      <a href="#" class="my-auto pa-2 pr-4" style="color: yellow">view All</a>
    </div>
    <PopularCards />
    <!-- <v-main>
      <router-view />
    </v-main> -->
  </v-app>
</template>
<style scoped>
@media only screen and (max-width: 830px) {
  .carouselslide {
    display: none;
  }
  .promo {
    display: none;
  }
  .adflex {
    flex-direction: column;
  }
}
@media only screen and (max-width: 400px) {
  .promo {
    display: block;
    width: 100% !important;
  }
}

.popularCat:hover {
  border: 1px solid red !important;
}
a {
  text-decoration: none;
  color: grey;
}
.catheader {
  background-color: #4e814f;
}
</style>
<script>
import ProductCard from "./components/ProductCard";
import JewelryProductCard from "./components/JewelryProductCard";
import FemaleProductCard from "./components/FemaleProductCard.vue";
import MaleProductCard from "./components/MaleProductCard.vue";
import PopularCards from "./components/PopularCards.vue";
export default {
  name: "App",
  components: {
    ProductCard,
    JewelryProductCard,
    FemaleProductCard,
    MaleProductCard,
    PopularCards,
  },
  data: () => ({
    PopularCat: [
      {
        src: "img/fashion.jpg",
        caption: "Men's Fashion & Clothing",
      },
      {
        src: "img/fashion_wanita.jpg",
        caption: "Fashion & Women's Clothing",
      },
      {
        src: "img/kat1.jpg",
        caption: "Jewelry and Accessories",
      },
      {
        src: "img/dapur1.jpg",
        caption: "Garden and Kitchenware",
      },
      {
        src: "img/perjalanan.jpg",
        caption: "Bags, Luggage & Travel",
      },
      {
        src: "img/Jewelry_Watch.jpg",
        caption: "Jewelry and Watches",
      },
    ],
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
