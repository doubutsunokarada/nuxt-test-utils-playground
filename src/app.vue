<template>
  <pre>{{ personList }}</pre>
</template>

<script setup lang="ts">
import { useResource } from './composables/useResource';

const { personList } = useResource();

</script>
