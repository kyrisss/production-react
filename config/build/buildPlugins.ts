import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { DefinePlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  isDev,
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
