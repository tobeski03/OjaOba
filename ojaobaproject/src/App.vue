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
        <v-app-bar-nav-icon style="margin: 0"></v-app-bar-nav-icon
        ><v-app-bar-title>Title</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon style="margin: 0">
          <v-icon>mdi-magnify</v-icon>
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
        height="302"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
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
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
};
</script>
