<template>
  <v-card
    :elevation="5"
    class="ma-2 pa-2 text-center"
    :title="pokemon.name"
    :subtitle="`No.${pokemon.pokedex}`"
    width="180"
    :to="`/${backendType}/pokemon/${pokemon.id}`"
  >
    <div class="d-flex justify-center">
      <v-img
        width="100"
        height="100"
        :src="pokemon.imageUrl"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { BackendType, Pokemon } from "../utils/types";
interface Props {
  backendType: BackendType;
  pokemon: Pokemon;
}
const { backendType, pokemon } = defineProps<Props>();
</script>
