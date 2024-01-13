<template>
  <v-container>
    <v-row class="pa-2">
      <CreateNewPokemonButton :backend-type="backendType" />
    </v-row>
    <v-row class="pa-2">
      <PokemonCard
        v-for="p in pokemon"
        :key="p.pokedex"
        :backend-type="backendType"
        :pokemon="p"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import PokemonCard from "../../../components/PokemonCard.vue";
import CreateNewPokemonButton from "../../../components/CreateNewPokemonButton.vue";
import { ref } from "vue";
import { Pokemon } from "../../../utils/types";
import { getPokemon } from "../../../utils/useRest";

const backendType = "rest";

const pokemon = ref<Pokemon[]>([]);
(async () => {
  pokemon.value = await getPokemon();
})();
</script>
