<template>
  <v-container>
    <v-list>
      <ListItemGeneration
        v-for="generation in generations"
        :key="generation.id"
        :generation="generation"
      />
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Generation } from "../../../utils/types";
import { getGenerations } from "../../../utils/useRest";
import ListItemGeneration from "../../../components/list-item/ListItemGeneration.vue";

const generations = ref<Generation[]>([]);
(async () => {
  generations.value = await getGenerations();
})();
</script>
