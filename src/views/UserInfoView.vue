<template>
  <div class="container ltr">
    <h1>Hi {{ user.details.firstName }}</h1>
    <h2>Here you can find your account details.</h2>

    <simple-table :data="detailsToDesplay" />
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import SimpleTable from '../components/SimpleTable.vue'
import { ref } from 'vue'
import { camelCaseToSpace, formatDateFromTS } from '../utils/helpers'

const user = useUserStore()
const detailsToDesplay = ref([])

for (const key in user.details) {
  if (['firstName', 'lastName', 'email', 'billingEmail'].includes(key)) {
    detailsToDesplay.value.push({ title: camelCaseToSpace(key), value: user.details[key] })
  }
  if (
    ['subscriptionExpirationDate', 'signUpDate', 'activationDate', 'lastLoginDate'].includes(key)
  ) {
    detailsToDesplay.value.push({
      title: camelCaseToSpace(key),
      value: formatDateFromTS(user.details[key])
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/setup';

h1,
h2 {
  text-align: center;
  color: $color-text;
  font-size: 3.8rem;

  @include atSmall {
    font-size: 5rem;
  }
}
h2 {
  font-size: 2.4rem;
  margin-bottom: 4rem;

  @include atSmall {
    font-size: 3.2rem;
  }
}
</style>
