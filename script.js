const fs = require("fs");

const srcDir = "../../src/"   // 源码目录
const targetDir = "docs/component/"   // 目标目录

/**
 * 自动创建md文件，写入代码演示
 */
fs.readdir(targetDir, function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    // console.log('file', file);
    const preName = file.replace(/.md/g, '')
    const content = `<h2>代码演示</h2>

<div class="container-demo-main">

<div class="container-demo-left">

[filename](${srcDir+preName}.html ':include :type=code  :fragment=htmldemo')

</div>

<div class="container-demo-right">

[filename](${srcDir+preName}.html ':include width=375 height=667')

</div>`
    fs.writeFile(targetDir+file, content, function (err) {
      if (err) {
        return console.error(err);
      }
      console.log("写入成功");  
    });
  });
});