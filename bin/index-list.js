#!/usr/bin/env node

// 修改控制台字符串的样式
const chalk = require('chalk');

const tplObj = require(`${__dirname}/../template`);
let keys = Object.keys(tplObj);
if (keys.length <= 0) {
  return console.log(chalk.yellow('暂无模板'));
}
for (let i = 0; i < keys.length; i++) {
  console.log(chalk.green(`${keys[i]}:${tplObj[keys[i]]}`));
}
