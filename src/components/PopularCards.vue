<template>
  <div class="d-flex mx-10 ma-6" style="flex-wrap: wrap">
    <div
      class="d-flex"
      v-for="(product, index) in products"
      :key="index"
      style="width: 20rem"
    >
      <img
        :src="product.src"
        alt="no-image"
        style="height: 75px; width: 75px"
      />
      <div class="d-flex" style="flex-direction: column">
        <p>
          {{ product.caption }} <br />
          {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularCards",
  data: () => ({
    products: [
      {
        src: "img/baju_dalam7.jpg",
        caption: "This is not selling yourself, but getting on board..",
        price: "$200",
      },
      {
        src: "img/Capture111.jpg",
        caption: "Men Singleete - Attractive Underwear",
        price: "$300",
      },
      {
        src: "img/baju_dalam7.jpg",
        caption: "This is not selling yourself, but getting on board..",
        price: "$250",
      },
      {
        src: "img/Capture111.jpg",
        caption: "Men Singleete - Attractive Underwear",
        price: "$100",
      },
      {
        src: "img/baju_dalam7.jpg",
        caption: "This is not selling yourself, but getting on board..",
        price: "$205",
      },
      {
        src: "img/Capture111.jpg",
        caption: "Men Singleete - Attractive Underwear",
        price: "$300",
      },
      {
        src: "img/baju_dalam7.jpg",
        caption: "This is not selling yourself, but getting on board..",
        price: "$350",
      },
      {
        src: "img/Capture111.jpg",
        caption: "Men Singleete - Attractive Underwear",
        price: "$500",
      },
    ],
  }),
};
</script>

<style scoped></style>
