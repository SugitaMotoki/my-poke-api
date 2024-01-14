<template>
  <v-container>
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
import { getTypes } from "../../../utils/useRest";
import ListItemType from "../../../components/list-item/ListItemType.vue";

const types = ref<Type[]>([]);
const getData = async () => {
  types.value = await getTypes();
};
getData();
</script>
