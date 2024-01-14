<template>
  <v-list-item>
    <v-list-item-title>
      <div v-if="editMode">
        <v-text-field
          v-model="name"
          label="名前"
          required
        />
        <v-text-field
          v-model="flavorText"
          label="図鑑説明"
          required
        />
        <v-text-field
          v-model="description"
          label="詳細"
          required
        />
      </div>
      <div v-else>
        <h3>{{ name }}</h3>
        <p class="text-truncate">{{ flavorText }}</p>
        <p>{{ description }}</p>
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
import { Ability, BackendType } from "../../utils/types";
import * as useRest from "../../utils/useRest";
import * as useGraphql from "../../utils/useGraphql";

interface Props {
  ability: Ability;
  backendType: BackendType;
}
const { ability, backendType } = defineProps<Props>();
const emit = defineEmits(["changeData"]);

const name = ref<string>(ability.name);
const flavorText = ref<string>(ability.flavorText);
const description = ref<string>(ability.description);
const editMode = ref<boolean>(false);

const onClickEditButton = async () => {
  if (editMode.value) {
    if (backendType === "rest") {
      await useRest.putAbility(ability.id, {
        name: name.value,
        flavorText: flavorText.value,
        description: description.value,
      });
    } else {
      await useGraphql.putAbility(ability.id, {
        name: name.value,
        flavorText: flavorText.value,
        description: description.value,
      });
    }
    emit("changeData");
  }
  editMode.value = !editMode.value;
};

const onClickDeleteButton = async () => {
  if (backendType === "rest") {
    await useRest.deleteAbility(ability.id);
  } else {
    await useGraphql.deleteAbility(ability.id);
  }
  emit("changeData");
};
</script>
