import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Rest from "./pages/Rest.vue";
import Graphql from "./pages/Graphql.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/rest", name: "rest", component: Rest },
  { path: "/graphql", name: "graphql", component: Graphql },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
