<template>
  <v-btn
    size="large"
    color="primary"
    :to="`/${backendType}/pokemon/new`"
    >新規登録</v-btn
  >
</template>

<script setup lang="ts">
import { BackendType } from "../utils/types";
interface Props {
  backendType: BackendType;
}
const { backendType } = defineProps<Props>();
</script>
