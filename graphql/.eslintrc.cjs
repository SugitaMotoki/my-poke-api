module.exports = {
  extends: ["eslint:all"],
  ignorePatterns: ["src/__generated__/**/*.ts"],
  rules: {
    "one-var": ["error", { initialized: "never" }],
    "no-console": "warn",
    "id-length": "off",
    "no-ternary": "off",
    "sort-keys": "off",
    "sort-imports": "off",
    "no-plusplus": "off",
    "capitalized-comments": "off",
    "multiline-comment-style": "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/strict", "prettier"],
      rules: {
        "new-cap": "off",
        "no-magic-numbers": "off",
      },
    },
    {
      files: ["*.vue"],
      extends: [
        "plugin:vue/vue3-strongly-recommended",
        "@vue/eslint-config-typescript",
        "prettier",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
        "no-magic-numbers": "off",
      },
    },
  ],
};
