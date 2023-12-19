<template>
  <v-toolbar
    prominent
    elevation="3"
    color="white"
  >
    <v-toolbar-title>
      <v-btn
        to="/"
        size="large"
        >ポケモンずかん</v-btn
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/rest">REST</v-btn>
    <v-btn to="/graphql">GraphQL</v-btn>
  </v-toolbar>
  <slot></slot>
</template>
