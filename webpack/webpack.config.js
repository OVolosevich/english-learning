const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (globalVars) => {
  const envConfig = require(`./webpack.${globalVars.env}.js`);
  const finalConfig = merge(envConfig, commonConfig);
  return finalConfig;
};