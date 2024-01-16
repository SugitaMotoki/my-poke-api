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
import { Type, BackendType } from "../../utils/types";
import * as useRest from "../../utils/useRest";
import * as useGraphql from "../../utils/useGraphql";

interface Props {
  type: Type;
  backendType: BackendType;
}
const { type, backendType } = defineProps<Props>();
const emit = defineEmits(["changeData"]);

const name = ref<string>(type.name);
const editMode = ref<boolean>(false);

const onClickEditButton = async () => {
  if (editMode.value) {
    if (backendType === "rest") {
      await useRest.putType(type.id, {
        name: name.value,
      });
    } else {
      await useGraphql.putType(type.id, {
        name: name.value,
      });
    }
    emit("changeData");
  }
  editMode.value = !editMode.value;
};

const onClickDeleteButton = async () => {
  if (backendType === "rest") {
    await useRest.deleteType(type.id);
  } else {
    await useGraphql.deleteType(type.id);
  }
  emit("changeData");
};
</script>
