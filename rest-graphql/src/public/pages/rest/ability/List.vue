<template>
  <v-container>
    <h1
      v-for="ability in abilities"
      :key="ability.id"
    >
      {{ ability.name }}
    </h1>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Ability } from "../../../utils/types";
import { getAbilities } from "../../../utils/useRest";

const abilities = ref<Ability[]>([]);
(async () => {
  abilities.value = await getAbilities();
})();
</script>
