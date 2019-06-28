const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "global",
                localIdentName: "[local]--[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: "file-loader?name=[hash:12].[ext]"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          comments: false
        }
      })
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
