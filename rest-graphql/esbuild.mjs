import * as esbuild from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";
import { esbuildDecorators } from "esbuild-plugin-typescript-decorators";

const commonOptions = {
  bundle: true,
  minify: false,
  outbase: "src",
  outdir: "dist",
  tsconfig: "tsconfig.json",
};

const backOptions = {
  ...commonOptions,
  entryPoints: ["src/server.ts"],
  platform: "node",
  plugins: [esbuildDecorators()],
};

const frontOptions = {
  ...commonOptions,
  entryPoints: ["src/public/main.ts"],
  platform: "browser",
  plugins: [vuePlugin()],
};

await esbuild.build(backOptions);
await esbuild.build(frontOptions);
