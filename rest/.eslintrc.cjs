module.exports = {
  extends: ["eslint:all", "plugin:@typescript-eslint/strict", "prettier"],
  rules: {
    "one-var": ["error", { initialized: "never" }],
    "id-length": "off",
    "no-console": "off",
    "no-ternary": "off",
    "sort-keys": "off",
    "sort-imports": "off",
    "no-plusplus": "off",
    "capitalized-comments": "off",
  },
  overrides: [],
};
