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
        <h3>{{ name }}</h3>
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
        v-if="!editMode"
        color="grey-lighten-1"
        icon="$delete"
        variant="text"
        @click="onClickDeleteButton"
      />
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Generation } from "../../utils/types";
import { putGeneration, deleteGeneration } from "../../utils/useRest";

interface Props {
  generation: Generation;
}
const { generation } = defineProps<Props>();
const emit = defineEmits(["changeData"]);

const name = ref<string>(generation.name);
const editMode = ref<boolean>(false);

const onClickEditButton = async () => {
  if (editMode.value) {
    await putGeneration(generation.id, {
      name: name.value,
    });
    emit("changeData");
  }
  editMode.value = !editMode.value;
};

const onClickDeleteButton = async () => {
  await deleteGeneration(generation.id);
  emit("changeData");
};
</script>
