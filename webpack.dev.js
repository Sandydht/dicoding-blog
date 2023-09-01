/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'json',
      generateStatsFile: true,
    }),
  ],
});
