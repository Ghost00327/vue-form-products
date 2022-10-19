<template>
  <v-app>
    <v-switch class="pl-5" v-model="$vuetify.theme.dark" primary label="Dark" />
    <v-card v-if="loading" class="d-flex" height="100%">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        class="mx-auto my-auto"
      ></v-progress-circular>
    </v-card>

    <v-row no-gutters v-else>
      <v-col v-for="n in 3" :key="n" cols="12" md="4">
        <Product
          v-for="(product, i) in products"
          width="400"
          :key="i"
          :product="product"
        />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import Product from "./Product.vue";

export default {
  name: "Products",

  components: { Product },

  data: () => ({
    products: "",
    loading: true,
  }),

  methods: {},

  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
        this.loading = false;
      })
      .catch((error) => console.error(error.response.data));
  },
};
</script>
