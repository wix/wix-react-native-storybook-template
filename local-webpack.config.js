const defaultConfig = require('@storybook/react-native/dist/server/config/webpack.config').default;
const customConfig = require('./webpack.config');

module.exports = customConfig(defaultConfig);
