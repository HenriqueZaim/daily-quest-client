<template>
  <v-container>
    <v-row class="rounded-t">
      <v-col class="border-bottom --purple--gradient grey darken-3 ">
        <v-card-title class="display-2 text-uppercase justify-center py-2 ">
          login
        </v-card-title>
      </v-col>
    </v-row>

    <v-row class="mt-4">
        <v-col cols="12">
          <v-text-field
            class="mt-5"
            label="E-mail"
            type="email"
            hide-details="auto"
            prepend-inner-icon="mdi-mail"
            clearable
            filled
            rounded
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12">
          <v-text-field
            class="mb-3"
            label="Senha"
            type="password"
            prepend-inner-icon="mdi-lock"
            hide-details="auto"
            filled
            clearable
            rounded
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
          <v-btn
            color="deep-purple"
            block
            elevation="0"
            rounded
            large
            :loading="isLoading"
            @click="authenticateUser"
          >Login aqui</v-btn>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginBox',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    ...mapActions(['authenticateUser']),
  },
};
</script>
