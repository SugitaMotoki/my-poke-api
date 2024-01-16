<template>
  <button @click="init">初期化</button>
</template>

<script setup lang="ts">
import axios from "axios";
import { generations } from "../utils/samples/generations";
import { types } from "../utils/samples/types";
import { abilities } from "../utils/samples/abilities";
import { pokemon } from "../utils/samples/pokemon";

const req = async (url: string, data: object[]) => {
  for await (const d of data) {
    await axios.post(url, d).then((r) => {
      console.log(r.data);
    });
  }
};

const init = async () => {
  await req("/generations", generations);
  await req("/types", types);
  await req("/abilities", abilities);
  await req("/pokemon", pokemon);
};
</script>
