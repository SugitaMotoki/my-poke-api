<template>
  <v-container>
    <v-list>
      <ListItemGeneration
        v-for="generation in generations"
        :key="generation.id"
        :generation="generation"
        @change-data="getData"
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
const getData = async () => {
  generations.value = await getGenerations();
};
getData();
</script>
