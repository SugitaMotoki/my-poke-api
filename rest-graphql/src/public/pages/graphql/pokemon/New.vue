<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            label="ポケモンの名前"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="pokedex"
            type="number"
            label="図鑑番号"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            v-model="typeIds"
            label="タイプ"
            :items="types"
            item-title="name"
            item-value="id"
            multiple
            chips
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            v-model="generationId"
            label="世代"
            :items="generations"
            item-title="name"
            item-value="id"
            chips
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="height"
            type="number"
            label="高さ"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model.number="weight"
            type="number"
            label="重さ"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="genus"
            label="○○ポケモン"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="imageUrl"
            label="画像リンク"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
            v-model="abilityIds"
            label="特性"
            :items="abilities"
            item-title="name"
            item-value="id"
            multiple
            chips
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            v-model="hiddenAbilityId"
            label="夢特性"
            :items="abilities"
            item-title="name"
            item-value="id"
            chips
          >
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-btn
        @click="createNewPokemon"
        color="primary"
        >ポケモンを追加</v-btn
      >
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Generation, Type, Ability } from "../../../utils/types";
import {
  getGenerations,
  getTypes,
  getAbilities,
  postPokemon,
} from "../../../utils/useRest";

const name = ref<string>("");
const pokedex = ref<number>();
const imageUrl = ref<string>("");
const genus = ref<string>("");
const height = ref<number>(0);
const weight = ref<number>(0);
const generationId = ref<number>();
const typeIds = ref<number[]>([]);
const abilityIds = ref<number[]>([]);
const hiddenAbilityId = ref<number>();

const types = ref<Type[]>([]);
(async () => {
  types.value = await getTypes();
})();
const generations = ref<Generation[]>();
(async () => {
  generations.value = await getGenerations();
})();
const abilities = ref<Ability[]>();
(async () => {
  abilities.value = await getAbilities();
})();

const createNewPokemon = async () => {
  const abilityProps = [
    ...abilityIds.value.map((id) => ({ id, isHidden: false })),
  ];
  if (hiddenAbilityId.value) {
    abilityProps.push({ id: hiddenAbilityId.value, isHidden: true });
  }
  await postPokemon({
    name: name.value,
    pokedex: pokedex.value!,
    imageUrl: imageUrl.value,
    genus: genus.value,
    height: height.value,
    weight: weight.value,
    generationId: generationId.value!,
    typeIds: typeIds.value,
    abilities: abilityProps,
  });
};
</script>
