const fs = require("fs");

const rawDir = "src/"
const targetDir = "docs/component/"
// fs.readdir(rawDir,function(err, files) {
//   if (err) {
//     return console.error(err);
//   }
//   files.filter(item=>item.indexOf('.html') > -1).forEach(function (file) {
//     //创建md文件
//     const name = file.replace(/.html/g,'.md')
//     fs.open(targetDir + name, 'w+', function (err) {
//       if (err) {
//         return console.error(err);
//       }
//     });
//   });
// });


//写入公共内容
fs.readdir(targetDir, function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    console.log('file', file);
    const preName = file.replace(/.md/g, '')
    const content = `<h2>代码演示</h2>

<div class="container-demo-main">

<div class="container-demo-left">

[filename](../../src/${preName}.html ':include :type=code  :fragment=htmldemo')

</div>

<div class="container-demo-right">

[filename](../../src/${preName}.html ':include width=375 height=667')

</div>`
    fs.writeFile(targetDir+file, content, function (err) {
      if (err) {
        return console.error(err);
      }     
    });
  });
});
