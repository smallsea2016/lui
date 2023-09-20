#### 引言

> 自从`nodejs`问世以来，前端圈愈发繁荣，各种 UI 框架以及前端框架如雨后春笋。繁荣的背后是一大群追逐者，原生 HTML/CSS/JS 被他们的光芒所覆盖。LUI 回归于应用基础的`HTML/CSS/JS`能力组织代码，不对你当下所使用的技术做限制，致力于为你的应用提供基础 UI 支撑。

#### 目录结构

```
├─ src 源代码
│  ├─ css样式
│  │  ├─ 3rd-css                      css第三方样式
│  │  │  ├─ mobileSelect.css          级联样式
│  │  │  ├─ mobiscroll.2.13.2.min.css 日期时间选择样式
│  │  │  ├─ ...                       其他
│  │  ├─ lib                          样式库
│  │  │  ├─ animation.css             动效样式
│  │  │  ├─ fixck.css                 重置富文本样式
│  │  │  ├─ refresh.css               下拉刷新上拉加载样式
│  │  ├─ lui.css                      组件库样式
│  │  ├─ base.css                     默认标签样式重置以及基础样式
│  │  ├─ ...                          其他
│  ├─ images                          静态图片资源
│  ├─ js                              逻辑脚本以及数据
│  │  ├─ 3rd-plugins                  第三方插件
│  │  │  ├─ mobileSelect.js           城市级联js
│  │  │  ├─ laytpl.js                 模板引擎库
│  │  │  ├─ ...                       其他
│  │  ├─ data                         静态数据
│  │  │  ├─ city.js                   城市级联js数据
│  │  │  ├─ lui.json                  lui组件名数据
│  │  │  ├─ ...                       其他
│  │  ├─ lib                          js库或者类
│  │  │  ├─ cellSwiper.js             滑动单元格js类
│  │  │  ├─ form.js                   表单js类
│  │  │  ├─ signature.js              签名js类
│  │  │  ├─ TouchElement.js           移动元素js类
│  │  │  ├─ ...                       其他
│  ├─ index.html                      首页
│  ├─ ${component}.html               组件页面
│  ├─ xxx.html                        其他页面
```

#### 页面元素

##### CSS 说明

- 布局：`ui_page_wrap`作为应用的最外层容器 css 类，`ui_page_hd`作为页面顶部 header 层容器 css 类，`ui_page_bd`作为页面 body 内容层容器 css 类，`ui_page_ft`作为页面底部 footer 层容器 css 类。
- 基础样式：`base.css`除了重置了浏览器默认样式，还提供了字体，色值，边距，1 像素边框，flex 布局等辅助基础样式。
- 使用 fixed 固定某个元素，在 ios 系统某些版本下，滑动的时候会导致元素飘动，建议用`absolute`替代`fixed`。
- css 因为不具备动态语言的特性，容易造成命名冲突，LUI 大部分 class 携带`"ui"`前缀，大大减少了样式冲突问题。
- 默认的主色值是 `#467DB9`。

##### HTML 结构

> LUI 为你准备了四种网页结构。可以这么说，所有的网页结构都能归属于下面四种结构中的某一种。

```html
<!--上中下布局-->
<div class="ui_page_wrap">
  <header class="ui_page_hd"></header>
  <main class="ui_page_bd"></main>
  <footer class="ui_page_ft"></footer>
</div>

<!--上下布局-->
<div class="ui_page_wrap">
  <header class="ui_page_hd"></header>
  <main class="ui_page_bd"></main>
</div>

<!--中下布局-->
<div class="ui_page_wrap">
  <main class="ui_page_bd footer_space"></main>
  <footer class="ui_page_ft"></footer>
</div>

<!--普通布局-->
<div class="ui_page_wrap">
  <main class="ui_page_bd"></main>
</div>
```

##### js 说明

- 核心 js 设计使用闭包，避免了污染，对外暴露唯一的一个变量`lui`,因此不必担心与其他框架造成冲突。
- 某些页面引用了一款精致小巧的`laytpl`作为模版引擎。
- 基于移动端手机系统运行效率考虑，不建议使用`jQuery`等较体积较大库。LUI 有且仅有时间控件依赖了 JQ。
- 支持 UMD 模式加载 lui.js。 <a href="../demo-seajs.html">使用`seajs`加载 lui.js</a>，<a href="../demo-requirejs.html">使用`require.js`加载 lui.js</a>。

#### 自定义主题色

`base.css`定义了一个 css 变量`--primary_color`，通过修改它即可实现整个 ui 库主题颜色变更。

#### 使用场景

- 设计之初主要是考虑面向企业办公以及政务（蓝色主题色，细心一点，你会发现其他 UI 框架可能不会有的如签名，水印，流程流转组件），但同样适用于绝大部分移动端项目。
- 对于未使用任何 ui 组件库的老项目，引入 LUI 也是一个不错的选择。
- 对于不擅长于前端开发，不熟悉前端工程化开发的开发者，使用 LUI 开发可能也是一个不错的选择。
- 其他可能... 

#### 常见问题
 1. **覆盖默认样式** 

如果主题定制不能满足你的需求，也可以通过自定义样式类来覆盖默认样式，或者另外加一个css文件重置，但不建议直接修改lui.css 

2. **部分组件无法在桌面端操作** 

部分使用touch事件的组件未完全适配桌面端

3. **data-role能移除吗** 

部分html标签使用了data-role属性，如`backTop.html、card.html、indexList.html，iscroll.html、popover.html、tab.html`，一般是有js依赖或者样式依赖，不能移除 

4. **css和js体积还能再小吗** 

虽然组件库本身css和js的体积已经是比较小的，但若追求更轻量，建议生产版本使用压缩包，可使用压缩插件或者在线压缩
