const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const commonRule = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
];

const clientRules = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(png|jp(e*)g|svg)$/,
    type: "asset/resource",
    generator: {
      filename: "assets/images/[name][ext]",
    },
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024, // 8kb
      },
    },
  },
  {
    test: /\.(woff|woff2|ttf|pdf)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/fonts/[name][ext]",
    },
  },
];

const rootProperties = { watch: true };

const client = {
  entry: { client: "./src/client/index.js" },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public"),
  },
  module: {
    rules: [...commonRule, ...clientRules],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "src/client/index.html" }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
  ],
  ...rootProperties,
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/client/components/"),
      layout: path.resolve(__dirname, "./src/client/components/layout/"),
      assets: path.resolve(__dirname, "./src/client/assets/"),
      theme: path.resolve(__dirname, "./src/client/theme/"),
      hooks: path.resolve(__dirname, "./src/client/hooks/"),
      pages: path.resolve(__dirname, "./src/client/pages/"),
      utilities: path.resolve(__dirname, "./src/client/utilities/"),
      helpers: path.resolve(__dirname, "./src/client/helpers/"),
    },
  },
};

const server = {
  mode: "development",
  entry: { server: "./src/server/index.js" },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: { rules: commonRule },
  externals: [nodeExternals()],
  ...rootProperties,
};

module.exports = [client, server];
