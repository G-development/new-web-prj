const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/javascript/index.js",

  output: {
    path: path.resolve("./", "dev-build"),
    //path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "bundle.js",
  },

  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "file-loader",
            options: {
              //   name: "bundle.min.css"
              outputPath: "css/",
              name: "[name].min.css",
            },
          },
          "sass-loader",
        ],
      },
      // IMAGES
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "images" },
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/assets/", to: "./assets/" }],
    }),
  ],

  mode: "development",
};
