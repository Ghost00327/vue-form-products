<template>
  <v-app>
    <v-switch class="pl-5" v-model="$vuetify.theme.dark" primary label="Dark" />
    <v-row no-gutters>
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
  }),

  methods: {},

  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => (this.products = response.data.products));
  },
};
</script>
