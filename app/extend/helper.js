/* eslint valid-jsdoc: "off" */

'use strict';

const moment = require('moment');

module.exports = exports = {};
// moment format time
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

/**
 * json response handler
 * @typedef {Object} successResp
 * @property {number} code error_code
 * @property {string} msg msg
 * @property {string} data data
 *
 * @type {function({ctx, res, msg})} param0  { ctx, res, msg}
 * @return {successResp}
 *
 */
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 0,
    msg,
    data: res,
  };
  ctx.status = 200;
};
