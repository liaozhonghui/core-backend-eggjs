/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * Model: 用户表
 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    password: { type: String },
  });

  return mongoose.model('user', UserSchema);
};
