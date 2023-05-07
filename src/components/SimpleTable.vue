<template>
  <table class="simple-table">
    <tr v-for="el in props.data" :key="el.title">
      <td>{{ el.title }}</td>
      <td>{{ el.value }}</td>
    </tr>
  </table>
</template>

<script setup>
const props = defineProps({
  data: Array
})
</script>

<style lang="scss" scoped>
@import '@/scss/setup';

.simple-table {
  table-layout: fixed;
  width: 100%;
  tr:nth-child(odd) {
    background-color: rgba($color-text, 0.1);
  }
  td {
    padding: 0.8rem 1.2rem;
    &:first-child {
      font-weight: bold;

      @include atSmall {
      }
    }
  }
}
</style>
