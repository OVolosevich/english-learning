const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "..", "/main.tsx"),
  output: {
    path: path.join(__dirname, "..", "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "/index.html"),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.join(__dirname, "..", "./src", "components"),
          to: "./components",
          noErrorOnMissing: true,
        },
        {
          from: "**/*",
          context: path.join(__dirname, "..", "./src", "styles"),
          to: "./styles",
          noErrorOnMissing: true,
        },
        {
          from: "**/*",
          context: path.join(__dirname, "..", "./src", "assets"),
          to: "./assets",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    port: 3030,
  },
  resolve: {
    extensions: [".jsx", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?ts$|\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
