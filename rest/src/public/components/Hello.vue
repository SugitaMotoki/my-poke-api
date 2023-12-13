<template>
  <div>
    <button @click="count++">Hello: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref<number>(0);
</script>
