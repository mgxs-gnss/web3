import fs from "fs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

const pkg = JSON.parse(
  fs.readFileSync("./package.json", { encoding: "utf-8" })
);

export default [
  {
    input: "src/index.ts",
    external: [...Object.keys(pkg.devDependencies)],
    plugins: [json(), typescript({ tsconfig: "./tsconfig.json" }), terser()],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
  },
];
