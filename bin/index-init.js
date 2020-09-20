#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const download = require('download-git-repo');
const tplObj = require(`${__dirname}/../template`);
const path = require('path');
// 交互式命令行
const inquirer = require('inquirer');
const fs = require('fs-extra');

program.usage('<template-name>');
program.parse(process.argv);
// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help();

// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[0];
// let projectName = program.args[1];
// 小小校验一下参数
if (!tplObj[templateName]) {
  console.log(chalk.red('\n Template does not exit! \n '));
  return;
}

let question = [
  {
    name: 'name',
    type: 'input',
    message: '请输入项目名称',
    validate(val) {
      if (val === '') {
        return '必须输入项目名称';
      } else if (fs.existsSync(path.resolve(process.cwd(), val))) {
        return `<${val}>目录已存在,请输入一个新的项目名称或删除旧目录`;
      } else {
        return true;
      }
    },
  },
];

inquirer.prompt(question).then(answers => {
  let { name: projectName } = answers;
  url = tplObj[templateName];
  console.log(chalk.white('\n Start generating... \n'));
  // 出现加载图标
  const spinner = ora('Downloading...');
  spinner.start();
  // 执行下载方法并传入参数
  download(url, projectName, err => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(`Generation failed. ${err}`));
      return;
    }
    // 结束加载图标
    spinner.succeed();
    console.log(chalk.green('\n Generation completed!'));
    console.log('\n To get started');
    console.log(`\n    cd ${projectName} \n`);
  });
});
