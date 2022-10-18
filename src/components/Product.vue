<template>
  <v-card class="mx-auto my-8" max-width="400">
    <v-img
      class="white--text align-end"
      :src="product.thumbnail"
      height="200px"
    >
      <v-rating
        class="absolute"
        style="position: absolute; top: 0px; right: 0px;"
        v-model="product.rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        readonly
        hover
        small
      ></v-rating>
    </v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-subtitle class="pb-0">
      {{ product.category }}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ product.description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Products",

  components: {},
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    products: "",
  }),

  methods: {},
};
</script>
