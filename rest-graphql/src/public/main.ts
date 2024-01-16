import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import * as rest from "./pages/rest";
import * as graphql from "./pages/graphql";

const routes = [
  { path: "/", component: Home },
  {
    path: "/rest",
    component: rest.Layout,
    children: [
      {
        path: "pokemon",
        component: rest.pokemon.Layout,
        children: [
          { path: "", component: rest.pokemon.List },
          { path: ":id", component: rest.pokemon.Detail },
          { path: "new", component: rest.pokemon.New },
        ],
      },
      {
        path: "abilities",
        component: rest.ability.Layout,
        children: [{ path: "", component: rest.ability.List }],
      },
      {
        path: "generations",
        component: rest.generation.Layout,
        children: [{ path: "", component: rest.generation.List }],
      },
      {
        path: "types",
        component: rest.type.Layout,
        children: [{ path: "", component: rest.type.List }],
      },
    ],
  },
  {
    path: "/graphql",
    component: graphql.Layout,
    children: [
      {
        path: "pokemon",
        component: graphql.pokemon.Layout,
        children: [
          { path: "", component: graphql.pokemon.List },
          { path: ":id", component: graphql.pokemon.Detail },
          { path: "new", component: graphql.pokemon.New },
        ],
      },
      {
        path: "abilities",
        component: graphql.ability.Layout,
        children: [{ path: "", component: graphql.ability.List }],
      },
      {
        path: "generations",
        component: graphql.generation.Layout,
        children: [{ path: "", component: graphql.generation.List }],
      },
      {
        path: "types",
        component: graphql.type.Layout,
        children: [{ path: "", component: graphql.type.List }],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
