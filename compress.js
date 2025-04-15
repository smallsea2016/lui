const fs = require('fs-extra');
const { minify } = require('uglify-js');
const CleanCSS = require('clean-css');

// 配置参数
const cssTargetDir = './src/css'; // 目标文件夹路径
const jsTargetDir = './src/js'; // 目标文件夹路径

const cssProcessor = new CleanCSS({ level: 2 });
const jsOptions = { compress: { drop_console: true } };

// 主处理函数
async function compressFiles() {
  const cssFiles = await fs.readdir(cssTargetDir);  
  cssFiles.forEach(async (file) => {
    const filePath = `${cssTargetDir}/${file}`;    
    // CSS处理
    if (file.endsWith('.css') && !file.includes('.min.')) {
      const css = await fs.readFile(filePath, 'utf8');
      const output = cssProcessor.minify(css);
      await fs.writeFile(filePath.replace('.css', '.min.css'), output.styles);
    }
  });

  const jsFiles = await fs.readdir(jsTargetDir);
  jsFiles.forEach(async (file) => {
    const filePath = `${jsTargetDir}/${file}`;
    // JS处理
    if (file.endsWith('.js') && !file.includes('.min.')) {
      const jsCode = await fs.readFile(filePath, 'utf8');
      const result = minify(jsCode, jsOptions);
      await fs.writeFile(filePath.replace('.js', '.min.js'), result.code);
    }
  });
}

compressFiles().then(() => console.log('压缩完成'));
