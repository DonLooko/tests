// Webpack need only for examples and local development

const { merge } = require('webpack-merge');
const appConfig = require('@pdffiller/webpack5/build-config');

const MODULE_NAME = 'ContactPickerApp';

const config = require('@pdffiller/webpack5/create')({
  css: true,
  bundle: MODULE_NAME,
  templateParameters: { MODULE_NAME },
  externalPackages: ['@pdffiller/utils', '@pdffiller/modals'],
});

// For check contact picker without vendors
config.externals = {
  __config__: JSON.stringify(appConfig),
};

const { ENV_DIRECTORY_PATH } = require('./env');

const webpackConfig = merge(config, {
  externals: {
    __config__: JSON.stringify(appConfig),
  },
  devServer: {
    static: [
      {
        directory: ENV_DIRECTORY_PATH,
      },
    ],
  },
});

module.exports = webpackConfig;
