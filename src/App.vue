<template>
  <div class="app">
    <main-herder />
    <RouterView />
  </div>
</template>

<script setup>
import MainHerder from './components/MainHerder.vue'
</script>

<style lang="scss">
@import './scss/global.scss';

.app {
  @include atMedium {
    padding-top: 12.5rem;
  }
}
</style>
