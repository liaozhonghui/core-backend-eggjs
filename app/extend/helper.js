const { each, head, isArray, keys, map, size } = require('lodash');
const moment = require('moment');

module.exports = exports = {};
// moment format time
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

/**
 * json response handler
 * @param param0 { ctx, res, msg}
 * @return
 * {
 *  code: 0, // error code
 *  msg: '', // error msg
 *  data: any // resp data
 * }
 */
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 0,
    msg,
    data: res,
  };
  ctx.status = 200;
};
