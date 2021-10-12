'use strict';

module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet reveived!');
    console.log('packet:', ctx.packet);
    await next();
  };
};
