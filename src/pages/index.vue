
<template>
  <Resource :person-list="personList" />
</template>

<script setup lang="ts">
import Resource from '../components/Resource.vue';
import { useResource } from '../composables/useResource';

const { personList } = useResource();
console.log(personList);
</script>