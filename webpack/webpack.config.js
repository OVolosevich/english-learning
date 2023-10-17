import commonConfig from './webpack.common.js';
import { merge } from 'webpack-merge';
import devConfig from './webpack.dev.js';
import prodConfig from './webpack.prod.js';

const getConfig = (globalVars) => {
  const envConfig = globalVars.env === 'prod' ? prodConfig : devConfig;
  const finalConfig = merge(envConfig, commonConfig);
  return finalConfig;
};

export default getConfig;
