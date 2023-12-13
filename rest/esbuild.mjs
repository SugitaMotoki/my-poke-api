import * as esbuild from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";

const commonOptions = {
  bundle: true,
  minify: true,
  outbase: "src",
  outdir: "dist",
  tsconfig: "tsconfig.json",
};

const backOptions = {
  ...commonOptions,
  entryPoints: ["src/server.ts"],
  platform: "node",
};

const frontOptions = {
  ...commonOptions,
  entryPoints: ["src/public/main.ts"],
  platform: "browser",
  plugins: [vuePlugin()],
};

await esbuild.build(backOptions);
await esbuild.build(frontOptions);
