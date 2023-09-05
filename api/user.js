const { Request} = require('../middleware/utils');
const user = {
  // 用户登录，转发到后端API请求，可根据不同的后端请求格式进行Request重写
  login: async ctx => Request("/user/login", ctx.request.body || {}),
};
module.exports = user;
