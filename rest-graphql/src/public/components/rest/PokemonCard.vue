<template>
  <v-card
    :elevation="5"
    class="ma-2 pa-2 text-center"
    :title="pokemon.name"
    :subtitle="`No.${pokemon.pokedex}`"
    width="180"
    :to="`/rest/pokemon/${pokemon.id}`"
  >
    <div class="d-flex justify-center">
      <v-img
        width="100"
        height="100"
        src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/7b705082db2e24dd4ba25166dac84e0a.png"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { Pokemon } from "../../utils/types";
interface Props {
  pokemon: Pokemon;
}
const { pokemon } = defineProps<Props>();
</script>
