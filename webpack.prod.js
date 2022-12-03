/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
