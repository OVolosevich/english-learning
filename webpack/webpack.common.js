/* eslint-disable @typescript-eslint/naming-convention */

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  entry: path.join(__dirname, '..', '/main.tsx'),
  output: {
    path: path.join(__dirname, '..', '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', '/index.html'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.join(__dirname, '..', './src', 'components'),
          to: './components',
          noErrorOnMissing: true,
        },
        {
          from: '**/*',
          context: path.join(__dirname, '..', './src', 'styles'),
          to: './styles',
          noErrorOnMissing: true,
        },
        {
          from: '**/*',
          context: path.join(__dirname, '..', './src', 'assets'),
          to: './assets',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    port: 3030,
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
