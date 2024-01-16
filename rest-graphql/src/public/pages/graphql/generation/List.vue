<template>
  <v-container>
    <v-card class="my-3">
      <v-form>
        <v-container>
          <v-text-field
            v-model="newGenerationName"
            label="名前"
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
      <ListItemGeneration
        v-for="generation in generations"
        :key="generation.id"
        :generation="generation"
        backend-type="graphql"
        @change-data="getData"
      />
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Generation } from "../../../utils/types";
import { getGenerations, postGeneration } from "../../../utils/useGraphql";
import ListItemGeneration from "../../../components/list-item/ListItemGeneration.vue";

const generations = ref<Generation[]>([]);
const getData = async () => {
  generations.value = await getGenerations();
};
getData();

const newGenerationName = ref<string>("");
const onClickPostButton = async () => {
  await postGeneration({
    name: newGenerationName.value,
  });
  getData();
};
</script>
