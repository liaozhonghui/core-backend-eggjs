'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    await ctx.socket.emit('res', `Hi! this is your message :${message}`);
  }
}

module.exports = DefaultController;

exports.ping = async function() {
  const message = this.args[0];
  await this.socket.emit('res', `Hi! this is your message:${message}`);
};
