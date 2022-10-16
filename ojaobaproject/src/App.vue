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
    <div class="d-flex mb-6">
      <v-carousel
        cycle
        height="290"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(carousel, i) in carousels"
          :key="i"
          :src="carousel.src"
        ></v-carousel-item>
      </v-carousel>

      <div class="">
        <v-img
          lazy-src="./assets/img/promotion-2.jpg"
          max-height="145"
          max-width="390"
          src="./assets/img/promotion-2.jpg"
        ></v-img>

        <v-img
          lazy-src="./assets/img/promotion-1.jpg"
          max-height="145"
          max-width="390"
          src="./assets/img/promotion-1.jpg"
        ></v-img>
      </div>
    </div>
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
export default {
  name: "App",

  data: () => ({
    carousels: [
      {
        src: "http://127.0.0.1:5501/img/slide-1.jpg",
      },
      {
        src: "http://127.0.0.1:5501/img/slide-2.jpg",
      },
      {
        src: "http://127.0.0.1:5501/img/slide-3.jpg",
      },
    ],
  }),
};
</script>
