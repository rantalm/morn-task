<template>
  <div class="container ltr">
    <h1>Hello {{ user.details.firstName }}!</h1>
    <h2>Welcom to your account</h2>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const user = useUserStore()
</script>

<style lang="scss" scoped>
@import '@/scss/setup';

h1,
h2 {
  text-align: center;
  color: $color-text;
  font-size: 5rem;
}
h2 {
  font-size: 3.2rem;
}
</style>
