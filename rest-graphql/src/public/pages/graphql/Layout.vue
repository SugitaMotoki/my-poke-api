<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn to="/graphql/pokemon">ポケモン</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/graphql/ability">特性</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/graphql/generation">世代</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/graphql/type">タイプ</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
