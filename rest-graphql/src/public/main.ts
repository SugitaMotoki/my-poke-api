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
  { path: "/rest", component: rest.pokemon.Top },
  { path: "/rest/pokemon/:id", component: rest.pokemon.Detail },
  { path: "/rest/pokemon/new", component: rest.pokemon.New },
  { path: "/graphql", component: graphql.pokemon.Top },
  { path: "/graphql/pokemon/:id", component: graphql.pokemon.Detail },
  { path: "/graphql/pokemon/new", component: graphql.pokemon.New },
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
