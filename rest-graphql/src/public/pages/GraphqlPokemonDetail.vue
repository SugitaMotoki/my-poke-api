<template>
  <v-container>
    <h1>{{ pokemon?.name }}</h1>
    <p>{{ pokemon?.genus }}</p>
    <h4>図鑑No.{{ pokemon?.pokedex }}</h4>
    <p>高さ：{{ pokemon?.height }}</p>
    <p>重さ：{{ pokemon?.weight }}</p>
    <p>{{ pokemon?.generation.name }}</p>
    <div
      v-for="type in pokemon?.types"
      :key="type.id"
    >
      <h3>{{ type.name }}タイプ</h3>
    </div>
    <div
      v-for="ability in pokemon?.abilities"
      :key="ability.ability.id"
    >
      <h3>{{ ability.ability.name }}</h3>
      <p>{{ ability.ability.flavorText }}</p>
      <p>{{ ability.ability.description }}</p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { Pokemon } from "../utils/types";
import { getPokemonById } from "../utils/useRest";

const route = useRoute();
const id = Number(route.params.id);

const pokemon = ref<Pokemon>();
(async () => {
  pokemon.value = await getPokemonById(id);
  console.log(pokemon.value);
})();
</script>
