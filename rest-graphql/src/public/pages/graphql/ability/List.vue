<template>
  <v-container>
    <v-card class="my-3">
      <v-form>
        <v-container>
          <v-text-field
            v-model="newAbilityName"
            label="名前"
            required
          />
          <v-text-field
            v-model="newAbilityFlavorText"
            label="図鑑説明"
            required
          />
          <v-text-field
            v-model="newAbilityDescription"
            label="詳細"
            required
          />
          <v-btn
            @click="onClickPostButton"
            color="primary"
            >新規作成</v-btn
          >
        </v-container>
      </v-form>
    </v-card>
    <v-list>
      <ListItemAbility
        v-for="ability in abilities"
        :key="ability.id"
        :ability="ability"
        backend-type="graphql"
        @change-data="getData"
      />
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Ability } from "../../../utils/types";
import { getAbilities, postAbility } from "../../../utils/useGraphql";
import ListItemAbility from "../../../components/list-item/ListItemAbility.vue";

const abilities = ref<Ability[]>([]);
const getData = async () => {
  abilities.value = await getAbilities();
};
getData();

const newAbilityName = ref<string>("");
const newAbilityFlavorText = ref<string>("");
const newAbilityDescription = ref<string>("");
const onClickPostButton = async () => {
  await postAbility({
    name: newAbilityName.value,
    flavorText: newAbilityFlavorText.value,
    description: newAbilityDescription.value,
  });
  getData();
};
</script>
