<template>
  <v-app>
    <v-switch class="pl-5" v-model="$vuetify.theme.dark" primary label="Dark" />
    <v-card class="d-flex flex-column" width="100%" height="100%">
      <v-card-title class="my-auto flex-column"
        >PAGE NOT FOUND
        <v-card-subtitle class="mx-auto ">
          I think you just went to a page non-existing page.
        </v-card-subtitle>
      </v-card-title>
    </v-card>
  </v-app>
</template>
