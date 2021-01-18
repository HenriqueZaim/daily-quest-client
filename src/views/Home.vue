<template>
  <div class="home">
    <v-app-bar
        color="transparent"
        dark
        flat
        py-4
        fixed
      >
        <v-container grid-list-xs>

          <v-row align="center">

              <v-toolbar-title>
                <v-btn text>home</v-btn>
              </v-toolbar-title>

            <v-btn text>home</v-btn>

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

    <section id="apresentation">
      <v-container grid-list-xs>
        <v-row class="flex-column-reverse flex-md-row">
          <v-col lg="8" md="5" sm="12">
            <h1 class="display-4 font-weight-light pb-3">DailyQuest</h1>
            <h2 class="display-1 pb-2">Lorem ipsum dolor sit amet.</h2>
            <p class="subtitle-1 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Enim, modi officia aut ratione a neque?</p>
              <v-btn flat large tile color="deep-purple accent-4">COMECE JÁ</v-btn>
          </v-col>
          <v-col lg="4" md="5" sm="12">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-width="500"
              src="../img/home.svg"
              class="p-3"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-footer dark flat fixed padless id="footer">
      <v-card
          class="flex"
          flat
          tile
        >
          <v-container grid-list-xs class="py-1">
            <v-row align="center">
              <v-col>
                <v-card-text class="grey--text py-1 px-0">
                  {{ new Date().getFullYear() }} —
                  Todos os direitos reservados.
                </v-card-text>
              </v-col>

              <v-col class="text-right">
                <v-btn
                  icon
                  tile
                  class="mr-4"
                  plain
                >
                  <v-icon dark>
                    mdi-facebook
                  </v-icon>
                </v-btn>

                <v-btn
                  icon
                  tile
                  class="mr-4"
                  plain
                >
                  <v-icon dark>
                    mdi-linkedin
                  </v-icon>
                </v-btn>

                <v-btn
                  icon
                  tile
                  plain
                >
                  <v-icon dark>
                    mdi-github
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
      </v-card>
    </v-footer>
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
    min-height: 100vh;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.63),
    rgba(0, 0, 0, 0.548)),url('../img/wallpaper.jpg');
    display: flex;
    align-items: center;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.500);
  }

  #footer{
    border-top: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #4c10b4, #d53a9d);
  }

</style>
