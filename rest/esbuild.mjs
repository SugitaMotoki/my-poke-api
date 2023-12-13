import * as esbuild from "esbuild";

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
};

await esbuild.build(backOptions);
await esbuild.build(frontOptions);
