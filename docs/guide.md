#### 引言
> 自从nodejs问世以来，前端圈愈发繁荣，各种UI框架以及前端框架如雨后春笋。繁荣的背后是一大群追逐者，原生 HTML/CSS/JS 被他们的光芒所覆盖。LUI回归于应用基础的HTML/CSS/JS能力组织代码，不对你当下所使用的技术做限制，致力于为你的应用提供基础UI支撑。


#### 目录结构
![folders](img/folders.png)

#### 页面元素
##### CSS说明
* 布局：ui_page_wrap作为应用的最外层容器，ui_page_hd作为header层容器，ui_page_bd作为主内容层容器，ui_page_ft作为tabBar层容器。
* 基础样式：reset.css除了重置了浏览器默认样式，还提供了字体，色值，边距，1像素边框，flex布局等辅助样式和基础样式。
* 使用fixed固定某个元素，在ios系统某些版本下，滑动的时候会导致元素飘动，建议用absolute替代fixed。
* css因为不具备动态语言的特性，容易造成命名冲突，LUI大部分class携带"ui"前缀，大大减少了样式冲突问题。
* 默认的主色值是 #467DB9

##### HTML结构
> LUI为你准备了四种网页结构。可以这么说，所有的网页结构都能归属于下面四种结构中的某一种。

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

##### js说明

- 核心js设计使用闭包，避免了污染，对外暴露唯一的一个变量lui,因此不必担心与其他框架造成冲突。
- 某些页面引用了一款精致小巧的laytpl作为模版引擎。
- 基于移动端手机系统运行效率考虑，不建议使用jQuery等较体积较大库。LUI有且仅有时间控件依赖了JQ。


#### 使用场景

设计之初主要是考虑面向企业办公以及政务（细心一点，你会发现其他UI框架可能不会有的如签名，水印，流程流转组件），但同样适用于绝大部分移动端项目。  

#### 自定义主题色
`reset.css`定义了一个css变量`--primary_color`，通过修改它即可实现整个ui库主题颜色变更。


