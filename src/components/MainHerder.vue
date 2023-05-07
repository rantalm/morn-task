<template>
  <header class="header">
    <img
      alt="morning logo"
      class="logo"
      src="@/assets/img/green_logo.svg"
      width="125"
      height="125"
    />

    <div>
      <nav class="nav" v-if="currentRouteName !== 'login'">
        <a href="#" @click.prevent="reset" class="nav__item nav__item--danger">Logout</a>
        <RouterLink to="/user-info" class="nav__item">User Info</RouterLink>
        <RouterLink to="/welcom" class="nav__item">Welcom</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const user = useUserStore()
const reset = () => user.reset()
const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.header {
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include atMedium {
    position: absolute;
    width: 100%;
    top: 0;
    padding: 0 4rem;
  }
}
.logo {
  height: 100%;
  width: 40%;
  max-width: 22rem;
  max-height: 8rem;
  display: block;

  @include atMedium {
    height: 100%;
    width: 22.1rem;
    display: block;
    max-width: initial;
    max-height: initial;
  }
}
.nav {
  display: flex;
  align-items: center;

  &__item {
    text-decoration: none;
    color: $color-text;
    font-size: 1.7rem;
    display: block;
    margin: 0 0.5rem;

    @include atSmall {
      font-size: 2.2rem;
      margin: 0 1.6rem;
    }

    &--danger {
      color: rgb(138, 56, 56);
    }
  }
}
</style>
