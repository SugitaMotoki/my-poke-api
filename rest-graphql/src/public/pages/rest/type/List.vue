<template>
  <v-container>
    <h1
      v-for="_type in types"
      :key="_type.id"
    >
      {{ _type.name }}
    </h1>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Type } from "../../../utils/types";
import { getTypes } from "../../../utils/useRest";

const types = ref<Type[]>([]);
(async () => {
  types.value = await getTypes();
})();
</script>
