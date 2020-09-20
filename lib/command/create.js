/*
 * @Author: jun.fu
 * @LastEditors: jun.fu
 * @Description: file content
 * @Date: 2020-09-20 17:39:41
 * @LastEditTime: 2020-09-20 20:21:35
 * @FilePath: \mycli\lib\command\create.js
 *
 */
const path = require('path');
const fs = require('fs-extra');

module.exports = function (projectName) {
  // 1.获取需要创建工程的目录的路径
  const targetDir = path.resolve(process.cwd(), projectName);
  // 2.找到需要复制的模板文件路径
  const templateDir = path.resolve(__dirname, '../../template');
  // 3.将目录路径下的文件全部都复制到工程目录下去
  // 如果目录存在,则提示用户
  if (fs.existsSync(targetDir)) {
    console.log(
      `<${projectName}>目录已经存在,请输入一个新的项目名称或删除旧目录`
    );
  } else {
    try {
      // 创建文件夹
      fs.mkdirSync(targetDir);
      // 复制模板文件到项目目录下
      fs.copySync(templateDir, path.resolve(targetDir));
      console.log('项目创建成功');
    } catch (e) {
      console.log(e);
    }
  }
};
