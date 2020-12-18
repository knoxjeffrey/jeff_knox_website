// Makes Sass faster!
const Fiber = require('fibers');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  // Our "entry" point
  entry: './src/assets/javascript/main.js',
  output: {
    // The global variable name any `exports` from `index.js` will be available at
    library: 'SITE',
    // Where webpack will compile the assets
    path: path.resolve(__dirname, '.tmp/compiled-assets'),
  },
  module: {
    rules: [
      {
        // Setting up compiling our Sass
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: Fiber,
                outputStyle: 'expanded',
                importer: globImporter()
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      // Transpile and polyfill our JavaScript
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  // Any `import`s from `node_modules` will compiled in to a `vendor.js` file.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
