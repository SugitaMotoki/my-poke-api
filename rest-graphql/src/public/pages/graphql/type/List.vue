<template>
  <v-container>
    <v-card class="my-3">
      <v-form>
        <v-container>
          <v-text-field
            v-model="newTypeName"
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
      <ListItemType
        v-for="_type in types"
        :key="_type.id"
        :type="_type"
        @change-data="getData"
      />
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Type } from "../../../utils/types";
import { getTypes, postType } from "../../../utils/useRest";
import ListItemType from "../../../components/list-item/ListItemType.vue";

const types = ref<Type[]>([]);
const getData = async () => {
  types.value = await getTypes();
};
getData();

const newTypeName = ref<string>("");
const onClickPostButton = async () => {
  await postType({
    name: newTypeName.value,
  });
  getData();
};
</script>
