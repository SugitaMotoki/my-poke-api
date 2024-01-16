<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn to="/rest/pokemon">ポケモン</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/rest/abilities">特性</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/rest/generations">世代</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/rest/types">タイプ</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
