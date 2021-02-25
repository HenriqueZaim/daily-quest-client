<template>
  <div class='sign'>
    <v-app-bar
      color='transparent'
      absolute
      flat
    >
      <v-container>
        <v-row align='center'>

          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-toolbar-title class="">DailyQuest</v-toolbar-title>

        </v-row>
      </v-container>
    </v-app-bar>

    <section class='__box'>
      <v-container>
        <v-row justify='center'>
          <v-col cols='12' md='7' lg='4'>
            <v-card elevation="0" >

              <LoginBox v-if='signin.isRegistered'/>
              <RegisterBox v-else/>

              <v-row>
                <v-col class="text-center">
                  <v-card-text class="pt-0 pb-1">Já possui uma conta?</v-card-text>
                    <v-btn
                      @click="changeSignAction"
                      link
                      text
                      small
                      color="purple lighten-2"
                    >
                      Entrar
                    </v-btn>
                </v-col>
              </v-row>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue';
import RegisterBox from '@/components/RegisterBox.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'Sign',
  components: {
    LoginBox,
    RegisterBox,
    AppFooter,
  },
  data() {
    return {
      signin: {
        isRegistered: true,
      },
    };
  },
  methods: {
    changeSignAction() {
      this.signin.isRegistered = !this.signin.isRegistered;
    },
  },
};
</script>

<style lang='scss' scoped>
  .sign {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(circle at 16% 83%,
    rgba(148, 148, 148,0.06) 0%,
    rgba(148, 148, 148,0.06) 50%,
    rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),
    radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%,
    rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%,
    rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%,
    rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,
    rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),
    linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%));

    .__box{
      display: flex;
      flex: 1 0;
      justify-content: center;
      align-items: center;

      .border-bottom{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-image-slice: 1;

        &.--purple--gradient{
          border-image-source: linear-gradient(to left, #4c10b4, #d53a9d);
        }
      }
    }
  }
</style>
