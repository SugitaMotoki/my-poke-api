<template>
  <v-list-item>
    <v-list-item-title>
      <div v-if="editMode">
        <v-text-field
          v-model="name"
          label="名前"
          required
        />
      </div>
      <div v-else>
        {{ name }}
      </div>
    </v-list-item-title>
    <template #append>
      <v-btn
        color="grey-lighten-1"
        :icon="editMode ? '$complete' : '$edit'"
        variant="text"
        @click="onClickEditButton"
      />
      <v-btn
        color="grey-lighten-1"
        icon="$delete"
        variant="text"
        to="/"
      />
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Ability } from "../../utils/types";

interface Props {
  ability: Ability;
}
const { ability } = defineProps<Props>();

const name = ref<string>(ability.name);
const editMode = ref<boolean>(false);

const onClickEditButton = () => {
  if (editMode.value) {
    editMode.value = false;
  } else {
    editMode.value = true;
  }
};
</script>
