<template>
  <button @click="init">初期化</button>
</template>

<script setup lang="ts">
import axios from "axios";
const generations = [
  { name: "第1世代" },
  { name: "第2世代" },
  { name: "第3世代" },
  { name: "第4世代" },
  { name: "第5世代" },
  { name: "第6世代" },
  { name: "第7世代" },
  { name: "第8世代" },
  { name: "第9世代" },
];
const types = [
  { name: "ドラゴン" },
  { name: "ゴースト" },
  { name: "じめん" },
  { name: "ひこう" },
  { name: "どく" },
  { name: "むし" },
  { name: "みず" },
  { name: "でんき" },
  { name: "いわ" },
  { name: "くさ" },
  { name: "あく" },
  { name: "こおり" },
  { name: "ノーマル" },
  { name: "ほのお" },
  { name: "かくとう" },
  { name: "はがね" },
  { name: "エスパー" },
  { name: "フェアリー" },
];
const abilities = [
  {
    name: "せいでんき",
    flavorText: "さわった　あいてを\nまひさせる　ことがある。",
    description:
      "直接攻撃を受けると、30%の確率で相手を『まひ』状態にする。/『でんき』タイプの野生のポケモンと出会いやすくなる。(第8世代まで)",
  },
  {
    name: "ひらいしん",
    flavorText: "でんきを　よびこんで\nとくこうを　あげる。",
    description:
      "『でんき』タイプの技を受けるとダメージが無効化され、自分の『とくこう』ランクが1段階上がる。またダブルバトルの時、自分以外の全てのポケモンの『でんき』タイプの単体攻撃技の攻撃対象が自分になる。(攻撃対象が複数の技の場合はそのまま)/『でんき』タイプの野生のポケモンと出会いやすくなる(第8世代のみ)。",
  },
  {
    name: "もらいび",
    flavorText: "ほのおを　うけると\nほのおわざが　つよくなる。",
    description:
      "『ほのお』タイプの技を受けるとダメージや効果はなくなり、以後自分の『ほのお』タイプの技の威力が1.5倍になる。/『ほのお』タイプの野生のポケモンと出会いやすくなる(第8世代のみ)。",
  },
  {
    name: "ほのおのからだ",
    flavorText: "ふれた　あいてを　やけど\nさせることがある。",
    description:
      "直接攻撃を受けると、30%の確率で相手を『やけど』状態にする。/『てもち』にいると、ポケモンのタマゴが2倍かえりやすくなる。(必要な歩数が半分になる)",
  },
  {
    name: "すりぬけ",
    flavorText: "あいての　かべを\nすりぬけて　こうげき。",
    description:
      "	相手の『オーロラベール』『リフレクター』『ひかりのかべ』『しろいきり』『しんぴのまもり』『みがわり』の効果を受けない。/野生のポケモンと出会いにくくなる(第8世代のみ)。",
  },
];
const pokemon = [
  {
    name: "ピカチュウ",
    pokedex: 25,
    genus: "ねずみポケモン",
    height: 0.4,
    weight: 6.0,
    generation: 1,
    typeIds: [8],
    abilities: [
      {
        id: 1,
        isHidden: false,
      },
      {
        id: 2,
        isHidden: true,
      },
    ],
  },
  {
    name: "ライチュウ",
    pokedex: 26,
    genus: "ねずみポケモン",
    height: 0.8,
    weight: 30.0,
    generation: 1,
    typeIds: [8],
    abilities: [
      {
        id: 1,
        isHidden: false,
      },
      {
        id: 2,
        isHidden: true,
      },
    ],
  },
  {
    name: "ヒトモシ",
    pokedex: 607,
    genus: "ろうそくポケモン",
    height: 0.3,
    weight: 3.1,
    generation: 5,
    typeIds: [2, 14],
    abilities: [
      {
        id: 3,
        isHidden: false,
      },
      {
        id: 4,
        isHidden: false,
      },
      {
        id: 5,
        isHidden: true,
      },
    ],
  },
  {
    name: "ランプラー",
    pokedex: 608,
    genus: "ランプポケモン",
    height: 0.6,
    weight: 13.0,
    generation: 5,
    typeIds: [2, 14],
    abilities: [
      {
        id: 3,
        isHidden: false,
      },
      {
        id: 4,
        isHidden: false,
      },
      {
        id: 5,
        isHidden: true,
      },
    ],
  },
  {
    name: "シャンデラ",
    pokedex: 609,
    genus: "いざないポケモン",
    height: 1.0,
    weight: 34.3,
    generation: 5,
    typeIds: [2, 14],
    abilities: [
      {
        id: 3,
        isHidden: false,
      },
      {
        id: 4,
        isHidden: false,
      },
      {
        id: 5,
        isHidden: true,
      },
    ],
  },
];

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
