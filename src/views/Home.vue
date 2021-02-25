<template>
  <div class="home">
    <AppNavbar />

    <router-view />

    <AppFooter />
  </div>
</template>

<script>

import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: 'Home',
  components: {
    AppFooter,
    AppNavbar,
  },
};
</script>
