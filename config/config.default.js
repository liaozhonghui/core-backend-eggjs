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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634010379762_9098';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  config.security = extend(config.security, {
    csrf: { enable: false },
    domainWhiteList: ['*'],
  });
  config.cors = {
    origin: '*',
    exposeHeaders: ['x-access-token'],
    credentials: false,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.static = {
    prefix: '/',
    dir: appInfo.baseDir + '/app/public',
    buffer: true
  };
  config.logger = {
    encoding: 'utf-8',
    level: 'INFO',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
