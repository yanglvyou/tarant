import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupCopy from "rollup-plugin-copy";
import CopyWatch from "rollup-plugin-copy-watch";

import Package from "./package.json";

const resolveFile = (path) => NodePath.resolve(__dirname, path);

const externalPackages = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

export default async () => {
  const isProduction = process.env.NODE_ENV === "production";
  console.log("rollup 编译 isProduction: ", isProduction);
  return {
    input: resolveFile(Package.source),
    output: [
      {
        file: resolveFile(Package.main),
        format: "cjs",
        sourcemap: true,
      },
      {
        file: resolveFile(Package.module),
        format: "es",
        sourcemap: true,
      },
    ],
    external: externalPackages,
    plugins: [
      RollupNodeResolve({
        customResolveOptions: {
          moduleDirectory: "node_modules",
        },
      }),
      RollupCommonjs({
        include: /\/node_modules\//,
      }),
      RollupJson(),
      RollupTypescript({
        tsconfig: resolveFile("tsconfig.rollup.json"),
      }),
      isProduction &&
        RollupCopy({
          targets: [
            {
              src: resolveFile("src/styles"),
              dest: resolveFile("dist"),
            },
          ],
        }),
      !isProduction &&
        CopyWatch({
          targets: [
            {
              src: "src/styles",
              dest: "dist",
            },
          ],
          watch: "src/styles/**", // 监听样式文件目录
        }),
    ].filter(Boolean),
  };
};
