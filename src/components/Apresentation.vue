<template>
  <section id="apresentation">
    <v-container grid-list-xs >
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
</template>

<script>
export default {
  name: 'apresentation',
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
</style>
