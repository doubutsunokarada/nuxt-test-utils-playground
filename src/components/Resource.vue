<template>
  <div>
    <h1>Resource</h1>
    {{ personList }}
  </div>
</template>

<script setup lang="ts">
import type { Person } from '~/composables/useResource';

defineProps<{ personList: Person[] | undefined }>();
</script>