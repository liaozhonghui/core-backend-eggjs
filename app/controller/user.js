'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { service, ctx } = this;
    const res = await service.user.list();

    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
