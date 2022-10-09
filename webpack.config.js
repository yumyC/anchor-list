const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  target: ['web', 'es5'],
  cache: {
    type: "filesystem",
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: {
    anchorList: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    library: {
      type: 'commonjs-static',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  externalsPresets: {node:true},
  externals: [
    nodeExternals(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
