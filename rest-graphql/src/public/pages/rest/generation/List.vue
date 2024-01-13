<template>
  <v-container>
    <h1
      v-for="generation in generations"
      :key="generation.id"
    >
      {{ generation.name }}
    </h1>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Generation } from "../../../utils/types";
import { getGenerations } from "../../../utils/useRest";

const generations = ref<Generation[]>([]);
(async () => {
  generations.value = await getGenerations();
})();
</script>
