<template>
  <v-container>
    <v-list>
      <ListItemAbility
        v-for="ability in abilities"
        :key="ability.id"
        :ability="ability"
        @change-data="getData"
      />
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Ability } from "../../../utils/types";
import { getAbilities } from "../../../utils/useRest";
import ListItemAbility from "../../../components/list-item/ListItemAbility.vue";

const abilities = ref<Ability[]>([]);
const getData = async () => {
  abilities.value = await getAbilities();
};
getData();
</script>
