<template>
  <Menu />
  <router-view/>
  <Footer />
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import { invoke } from '@tauri-apps/api'
function App() {
  invoke('greet', { name: 'World' })
    .then((response) => console.log(response))
}
</script>

<style lang="scss">
@import url(@/assets/css/reset.css);
@import url(@/assets/css/colors.css);

body.overflow-hidden {
    overflow: hidden;
}

.container {
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 992px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
  }
}

.full-menu {
  overflow: hidden;
}
</style>
