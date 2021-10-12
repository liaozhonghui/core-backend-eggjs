const Controller = require('egg').Controller;
const { range } = require('lodash');

class UserController extends Controller {
  async list() {
    let { service, ctx } = this;
    const data = await service.user.list();

    ctx.helper.success({ ctx, res });
  }
}
