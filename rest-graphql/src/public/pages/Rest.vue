<template>
  <v-container>
    <v-row class="pa-2">
      <v-btn
        size="large"
        color="primary"
        to="/rest/pokemon/new"
        >新規登録</v-btn
      >
    </v-row>
    <v-row class="pa-2">
      <PokemonCard
        v-for="p in pokemon"
        :key="p.pokedex"
        :pokemon="p"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import PokemonCard from "../components/rest/PokemonCard.vue";
import { ref } from "vue";
import { Pokemon } from "../utils/types";
import { getPokemon } from "../utils/useRest";

const pokemon = ref<Pokemon[]>([]);
(async () => {
  pokemon.value = await getPokemon();
})();
</script>
