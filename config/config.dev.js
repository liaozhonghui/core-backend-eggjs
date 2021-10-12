/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.mongoose = {
    url: 'mongodb://127.0.0.1/demo',
    option: {},
    plugins: []
  };

  return config;
};
