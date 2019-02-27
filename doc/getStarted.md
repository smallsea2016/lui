## 获取代码
代码已托管到[github](https://github.com/smallsea2016/lui)和[码云](https://gitee.com/smallsea2016/lui)上。


## 启动
LUI本身不需要额外构建环境和安装依赖包，可直接打开html页面在浏览器运行。不过，首页index.html因为是通过请求加载json数据，会报跨域错误提示，需要启动一个本地服务才能访问。嚄，如果你的浏览器是firefox，则不会报跨域错误提示，可直接打开页面。


## 一个示例页面
### html
  页面布局采用万能的
  <mark>上中下</mark>布局。一个大层包含里面上中下三层。最外层使用absolute定位铺满整屏，当然,Header和Footer根据你的项目是否需要。

  ![layout.png](img/layout.png)
### css
 一般情况下引入
    <mark>lui.css</mark>就可以了，lui.css已经import了一个
    <mark>reset.css</mark>，重置了浏览器默认样式以及包含了一些基础辅助样式。针对某些不是很常用的组件，进行了单独抽离。如果页面中有需要用到图片预览放大，要另外引入
    <mark>zoom.css</mark>，如果页面包含富文本，要引入
    <mark>fixck.css</mark>，比如这个快速开始页面。
### js
  依赖jq的只有
    <mark>mobiscroll</mark>日期控件。因此，如果你的应用没有依赖jq不需要用到mobiscroll，直接引入
    <mark>lui.js</mark>就可以了。

### code
```html
<!DOCTYPE html>
<html>
<head>
    <title>LUI组件库</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <meta http-equiv="Cache-Control" CONTENT="no-cache">
    <meta http-equiv="Pragma" CONTENT="no-cache">
    <meta name="keywords" content=""/>
    <meta name="description" content="" />
    <link rel="icon" href="images/icon/lui.png">      
    <link rel="stylesheet" type="text/css" href="css/lui.css" />
</head>
<body>
    <div class="ui_page_wrap">
        <header class="ui_page_hd"><a href="javascript:history.go(-1);" class="ui_back"></a>demo</header>
        <div class="ui_page_bd">
            <p class="ui_con_block">这是一个简单的demo示例</p>
        </div>
    </div>

    <script type="text/javascript" src="js/lui.js"></script>
    <script type="text/javascript">
        lui.toast({
            position:'bottom',
            text:'目标出现，over'
        });
    </script>
</body>
</html>

```
<a href="../demo.html">查看结果</a>
