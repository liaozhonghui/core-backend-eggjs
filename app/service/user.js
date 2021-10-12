'use strict';

const Service = require('egg').Service;
const { range, map } = require('lodash');

class UserService extends Service {
  async list() {
    const res = map(range(0, 10, 1), v => {
      return { id: v, name: v };
    });

    return res;
  }
}

module.exports = UserService;
