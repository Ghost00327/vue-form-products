<template>
  <v-app>
    <v-switch class="pl-5" v-model="$vuetify.theme.dark" primary label="Dark" />
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1 mx-auto">
          Login
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSubmit">
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="user.email"
            :error-messages="validMsg.email"
          >
          </v-text-field>
          <v-text-field
            :type="showPassword ? 'text' : 'Password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="user.password"
            :error-messages="validMsg.password"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-btn color="info" type="submit">Login</v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { email, required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "App",

  components: {},

  data: () => ({
    user: {
      email: "",
      password: "",
    },
    showPassword: false,
    submitted: false,
    validMsg: {
      email: "",
      password: "",
    },
  }),
  setup: () => ({ v$: useVuelidate() }),
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      this.v$.$touch();
      if (this.v$.$invalid) {
        this.v$.$errors.map((error) => {
          console.log(error);
          this.validMsg[error.$property] = error.$message;
        });
        return;
      }
      this.$router.push({ path: "/products" });
    },
  },
};
</script>
