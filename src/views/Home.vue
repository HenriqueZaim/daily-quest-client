<template>
  <div class="home">
    <section id="apresentation">
      <v-app-bar

        color="transparent"
        dark
        flat
        py-4
        fixed
      >
        <v-container grid-list-xs>

          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn
            outlined
            tile
          >
            Cadastre-se
          </v-btn>
        </v-container>
      </v-app-bar>
    </section>
    <section>

    </section>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  #apresentation{
    min-height: 70vh;
    background-size: cover;
    background-image: linear-gradient(),url('../img/wallpaper.jpg');
  }
</style>
