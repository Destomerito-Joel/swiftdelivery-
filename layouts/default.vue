<template>
  <div>
    <Navbar class="fixed z-30 top-0 w-11/12" />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

onMounted(() => {
  console.log("Smartsupp script is running...");

  if (process.client) {
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = "7206999377254c63fa2936bb96c426367b6fcc03";

    if (!window.smartsupp) {
      const s = document.getElementsByTagName('script')[0];
      const c = document.createElement('script');
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js?';
      s.parentNode.insertBefore(c, s);
    }
  }
});
</script>

<style scoped>
</style>
