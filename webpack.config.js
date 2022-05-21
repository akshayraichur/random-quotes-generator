const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html?$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
