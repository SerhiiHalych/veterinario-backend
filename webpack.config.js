const webpack = require('webpack');
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  devtool: slsw.lib.webpack.isLocal ? 'cheap-module-eval-source-map' : undefined,
  optimization: {
    minimize: false,
    nodeEnv: false
  },
  // TODO: need to test on staging and after that add here (slsw.lib.webpack.isLocal || slsw.lib.options.stage !== 'production' ? 'development' : 'production')
  mode: 'development',
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    new webpack.IgnorePlugin(/^mongodb$/),
    new webpack.IgnorePlugin(/^mssql/),
    new webpack.IgnorePlugin(/^mysql$/),
    new webpack.IgnorePlugin(/^mysql2$/),
    new webpack.IgnorePlugin(/^oracledb$/),
    new webpack.IgnorePlugin(/^pg-query-stream$/),
    new webpack.IgnorePlugin(/^redis/),
    new webpack.IgnorePlugin(/^sqlite3/),
    new CopyWebpackPlugin([
      { from: 'handlers/templates', to: 'templates' },
      { from: 'ses/templates/payments', to: 'templates/payments' }
      ])
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }]
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json'
            }
          }
        ]
      }
    ]
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals( { whitelist: [ '@orbis-systems/accounts-ts-sdk' ] } )]
};
