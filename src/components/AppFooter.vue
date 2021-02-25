<template>
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
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>

  #footer{
    border-top: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to left, #4c10b4, #d53a9d);
  }

</style>
