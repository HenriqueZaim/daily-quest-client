<template>
      <v-app-bar
        color="transparent"
        dark
        flat
        py-4
        fixed
      >
        <v-container grid-list-xs>
          <v-row align="center">
            <v-col cols="1">
              <v-img
                lazy-src="../img/logo.svg"
                max-height="40"
                max-width="40"
                src="../img/logo.svg"
              ></v-img>
            </v-col>

            <v-btn text to="/">home</v-btn>

            <v-btn text >sobre</v-btn>

            <v-spacer></v-spacer>

            <v-btn
              outlined
              tile
            >
              Cadastre-se
            </v-btn>

          </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style>

</style>
