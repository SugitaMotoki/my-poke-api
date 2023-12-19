import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Rest from "./pages/Rest.vue";
import RestPokemonDetail from "./pages/RestPokemonDetail.vue";
import RestPokemonNew from "./pages/RESTPokemonNew.vue";
import Graphql from "./pages/Graphql.vue";
import GraphqlPokemonDetail from "./pages/GraphqlPokemonDetail.vue";
import GraphqlPokemonNew from "./pages/GraphqlPokemonNew.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/rest", component: Rest },
  { path: "/rest/pokemon/:id", component: RestPokemonDetail },
  { path: "/rest/pokemon/new", component: RestPokemonNew },
  { path: "/graphql", component: Graphql },
  { path: "/graphql/pokemon/:id", component: GraphqlPokemonDetail },
  { path: "/graphql/pokemon/new", component: GraphqlPokemonNew },
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
