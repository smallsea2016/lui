## 基础 api

#### lui.changeSelectStyle (e)

控制 select 默认样式，和 input 的 placeholder 样式保持一致

**参数说明**

| 参数 | 类型  | 必填 | 说明                    |
| ---- | ----- | ---- | ----------------------- |
| e    | event | 是   | 事件源，只能传递`event` |

示例代码

```html
<select
  class="ui_select placeholderColor"
  name="select"
  onchange="lui.changeSelectStyle(event)"
>
  <option value="">请选择</option>
  <option value="1">女汉子</option>
  <option value="2">萌妹子</option>
</select>
```

#### lui.countDown(defaultValue,cb)

倒计时

**参数说明**

| 参数         | 类型     | 必填 | 说明                                 |
| ------------ | -------- | ---- | ------------------------------------ |
| defaultValue | Date     | 是   | 指定倒计时时间，可被`new Date()`解析 |
| cb           | Function | 是   | 回调函数，回调参数为倒计时剩余时间   |

示例代码

```js
lui.countDown('2018-10-01', function (res) {
  if (!res) {
    console.log('设定时间小于或等于当前时间')
  } else {
    var s = res.split('|')
    document.querySelector('#j_gq').innerHTML =
      s[0] + '天' + s[1] + '时' + s[2] + '分' + s[3] + '秒'
  }
})
```

#### lui.getQueryString(name,fromEnd)

获取地址栏参数值

**参数说明**

| 参数    | 类型    | 必填 | 说明                                                                                                                                                                  |
| ------- | ------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name    | String  | 是   | 参数名称                                                                                                                                                              |
| fromEnd | Boolean | 否   | 是否从最后一个?问号开始匹配。在微信应用开发中，授权回调会携带额外参数，如 corpId，<br>这样可能会形成 url 存在两个?问号，这时候我们获取参数可能要的是最后一个?问号后的 |

示例代码

```js
lui.getQueryString('param')
```

#### lui.getType(value)

获取数据类型

#### lui.isSupportTouch()

判断是否支持 touch 事件，返回布尔值

#### lui.loadScript(url,cb)

动态异步加载 js

**参数说明**

| 参数 | 类型         | 必填 | 说明                                         |
| ---- | ------------ | ---- | -------------------------------------------- |
| url  | String,Array | 是   | js 路径,单个直接是字符串形式，多个以数组形式 |
| cb   | Function     | 是   | js 加载完毕的回调函数                        |

示例代码

```js
lui.loadScript('util.js', function () {
  //加载完毕，想干什么就干什么
})
// 也可以一次加载多个js
lui.loadScript(['js1.js', 'js2.js'], function () {
  //加载完毕，一次加载多个js，呵呵哒
})
```

#### lui.longPress(el,cb)

长按事件

**参数说明**

| 参数 | 类型     | 必填 | 说明             |
| ---- | -------- | ---- | ---------------- |
| el   | String   | 是   | 目标节点选择器   |
| cb   | Function | 是   | 长按后的回调函数 |

#### lui.selector(el)

返回文档中匹配指定 CSS 选择器的一个元素。等同于`document.querySelector(el)`

#### lui.selectorAll(el)

返回文档中匹配指定 CSS 选择器的集合。等同于`document.querySelectorAll(el)`

## 交互 api

#### lui.backTop(object)

回到顶部

**参数说明**

| 参数      | 类型   | 必填 | 说明                                                                    |
| --------- | ------ | ---- | ----------------------------------------------------------------------- |
| target    | String | 是   | 触发滚动的目标对象，支持传入选择器或 DOM 元素                           |
| elm       | String | 是   | 点击事件对象，支持传入选择器或 DOM 元素，默认值`[data-role="back-top"]` |
| offsetTop | Number | 是   | 滚动高度达到此参数值时才显示组件元素，默认值`200`                       |

示例代码

```js
lui.backTop({
  target: '#j-back-top-container',
})
```

#### lui.indexAction(el)

滑动索引定位列表位置

**参数说明**

| 参数 | 类型   | 必填 | 说明                                                |
| ---- | ------ | ---- | --------------------------------------------------- |
| el   | String | 是   | 滚动元素的选择器。依赖该选择器来设置`scrollTop`值。 |

> 注意：html 结构，需要给列表英文标题加上`data-role="word_index"`属性，给英文列表加上`data-role="word_list"`，给弹出提示框加上`data-role="word_popup"`属性

#### lui.showLoading(text,opacity)

页面 loading 效果

**参数说明**

| 参数    | 类型   | 必填 | 说明                                                 |
| ------- | ------ | ---- | ---------------------------------------------------- |
| text    | String | 是   | loading 提示文字，如果文字为`close`，则 loading 关闭 |
| opacity | Number | 否   | loading 遮罩层透明度                                 |

示例代码

```js
lui.showLoading() //loading

setTimeout(function () {
  //3s后关闭loading
  lui.showLoading('close')
}, 3000)
```

#### lui.marquee(object)

滚动效果-横向

**参数说明**

| 参数      | 类型     | 必填 | 说明                         |
| --------- | -------- | ---- | ---------------------------- |
| container | String   | 是   | 滚动容器                     |
| listEl    | String   | 是   | 滚动列表选择器               |
| speed     | Number   | 否   | 滚动速度，单位毫秒，默认`60` |
| start     | Function | 是   | 滚动开始函数                 |
| stop      | Function | 否   | 滚动终止函数                 |

示例代码

```js
var marquee = lui.marquee({
  container: '#j-marquee-x-box',
  list: '#j-marquee-x',
})
marquee.start()
```

#### lui.marqueeUp(object)

滚动效果-纵向

**参数说明**

| 参数   | 类型     | 必填 | 说明                               |
| ------ | -------- | ---- | ---------------------------------- |
| el     | String   | 是   | 选择器元素                         |
| height | Number   | 是   | 单次滚动高度                       |
| size   | Number   | 是   | 滚动元素的个数                     |
| wait   | Number   | 否   | 间隔滚动时间，单位毫秒，默认`2000` |
| start  | Function | 是   | 滚动开始函数                       |
| stop   | Function | 否   | 滚动终止函数                       |

示例代码

```js
var marqueeUp = lui.marqueeUp({
  el: '#j_marquee',
  height: 24,
  size: arr.length,
})
marqueeUp.start()
```

#### lui.popupHandler(el,direction,callback)

弹出层

**参数说明**

| 参数           | 类型     | 必填 | 说明                                                |
| -------------- | -------- | ---- | --------------------------------------------------- |
| el             | String   | 是   | 选择器                                              |
| direction      | String   | 否   | 弹出方向，可选值，`top`，`left`，`right`，默认`top` |
| callback.open  | Function | 否   | 弹出层显示时的回调函数                              |
| callback.close | Function | 否   | 弹出层关闭时的回调函数                              |

示例代码

```js
lui.popupHandler('#coverPage', 'left', {
  open: function () {
    console.log('open')
  },
  close: function () {
    console.log('close')
  },
})
```

#### lui.scrollToBottom(el,cb)

监听滑动/滚动到底

**参数说明**

| 参数 | 类型     | 必填 | 说明                                               |
| ---- | -------- | ---- | -------------------------------------------------- |
| el   | String   | 是   | 容器选择器，如： '#id'。也可以是 DOM 对象          |
| cb   | Function | 否   | 滚动的回调函数，返回参数如果为`true`，则已滚动到底 |

> 注意：因为监听的是 scroll 事件，因此绑定的容器必须要出现滚动条才会触发 scroll。

示例代码

```js
lui.scrollToBottom('#myScroll', function (res) {
  //已经滚动到底了，你可以在这里加载翻页数据
  if (res === true) {
  }
})
```

#### lui.search(object)

复杂搜索交互

**参数说明**

| 参数      | 类型     | 必填 | 说明                                           |
| --------- | -------- | ---- | ---------------------------------------------- |
| container | String   | 是   | 搜索组件容器                                   |
| input     | Function | 否   | 实时输入的回调函数，回调参数为输入框的值       |
| clear     | Function | 否   | 清空搜索的回调函数                             |
| cancel    | Function | 否   | 取消搜索的回调函数                             |
| enter     | Function | 否   | 按下回车键搜索的回调函数，回调参数为输入框的值 |

示例代码

```js
lui.search({
  container: '#js_search',
  input: function (val) {
    console.log('你输入的是：' + val)
  },
  clear: function () {
    console.log('clear')
  },
  cancel: function () {
    console.log('cancel')
  },
  enter: function (val) {
    console.log('点击了回车,输入的内容是：' + val)
  },
})
```

#### lui.showModal(object)

ios 风格模态框

**参数说明**

| 参数        | 类型     | 必填 | 说明                                                                                                           |
| ----------- | -------- | ---- | -------------------------------------------------------------------------------------------------------------- |
| title       | String   | 否   | 提示的标题                                                                                                     |
| content     | String   | 是   | 提示的内容，可嵌入 html 代码                                                                                   |
| showCancel  | Boolean  | 否   | 是否显示取消按钮，默认为 `false`                                                                               |
| cancelText  | String   | 否   | 取消按钮的文字，默认为"取消"，文字不宜过长                                                                     |
| confirmText | String   | 否   | 确定按钮的文字，默认为"确定"，文字不宜过长                                                                     |
| customClass | String   | 否   | 传入的自定义 class，用于自定义风格                                                                             |
| beforeClose | Function | 否   | 关闭前的回调，会暂停关闭。`function(btn, done)`，`btn` 的值为`'_confirm'`或者`'_cancel'`；`done()`用于关闭弹窗 |

示例代码

```js
lui.showModal({
  content: 'alert呵呵',
  confirm: function () {
    console.log('confirm')
  },
})

var val = ''
lui.showModal({
  content:
    '<input type="text" placeholder="请输入" class="ui_popup_ipt" id="ipt"/>',
  beforeClose: function () {
    val = lui.selector('#ipt').value
  },
  confirm: function () {
    console.log('输入框的值是：' + val)
  },
})
```

#### lui.tabs(container，cb)

tab 切换

**参数说明**

| 参数      | 类型     | 必填 | 说明                                                   |
| --------- | -------- | ---- | ------------------------------------------------------ |
| container | String   | 是   | tab 头和 tab 内容的外层选择器，如：`data-role="tabs" ` |
| cb        | Function | 否   | 回调函数，回调参数为当前激活 tab 下标                  |

> 注意：需要按照 html 固定结构。tab 头必须含 `data-role="tab"` 属性，tab 内容必须含 `data-role="tabContent"` 属性。

示例代码

```html
<div data-role="tabs">
  <nav class="ui_capsule_tab ui_flex">
    <a href="javascript:;" data-role="tab" class="ui_flex_item active">tab1</a>
    <a href="javascript:;" data-role="tab" class="ui_flex_item">tab2</a>
    <a href="javascript:;" data-role="tab" class="ui_flex_item">tab3</a>
  </nav>
  <div id="tab_content">
    <div data-role="tabContent" class="p20 active">tab1</div>
    <div data-role="tabContent" class="p20">tab2</div>
    <div data-role="tabContent" class="p20">tab3</div>
  </div>
</div>
```

#### lui.textareaAutoHeight(el,random)

textarea 高度自适应

**参数说明**

| 参数   | 类型   | 必填 | 说明                                                                                 |
| ------ | ------ | ---- | ------------------------------------------------------------------------------------ |
| el     | String | 是   | textarea 选择器                                                                      |
| random | Number | 否   | 随机数，如果一个页面存在多个 textarea 需要高度自适应，则为必填，而且 random 不能相同 |

示例代码

```js
lui.textareaAutoHeigh('#textarea1', 1)
lui.textareaAutoHeigh('#textarea2', 2)
```

#### lui.showToast(object)

页面轻提示

**参数说明**

| 参数             | 类型    | 必填 | 说明                                                                          |
| ---------------- | ------- | ---- | ----------------------------------------------------------------------------- |
| type             | String  | 否   | 提示类型，有两种类型，`ok`和`warning`，即对应成功类型和警告类型。默认为`ok`。 |
| text             | String  | 否   | 提示文字                                                                      |
| position         | String  | 否   | 在页面的位置，包含`top`,`middle`,`bottom`.                                    |
| duration         | Number  | 否   | 提示显示持续的时间,单位毫秒，默认`2000`                                       |
| disableClickBody | Boolean | 否   | toast 关闭前是否可点击页面，默认可以                                          |

示例代码

```js
lui.showToast({
  type: 'ok',
  text: '操作成功',
})

lui.showToast({
  position: 'top',
  text: '提示内容',
})
```

#### lui.watermark(el,name)

水印

**参数说明**

| 参数 | 类型   | 必填 | 说明               |
| ---- | ------ | ---- | ------------------ |
| el   | String | 是   | 挂载水印的文档节点 |
| name | String | 否   | 水印内容           |

示例代码

```js
lui.watermark('#js_watermark_box', '张碧晨10056500')
```

#### Signature(el,object)

签名

**参数说明**

| 参数            | 类型     | 必填 | 说明                  |
| --------------- | -------- | ---- | --------------------- |
| el              | String   | 是   | canvas 容器选择器     |
| object.width    | Number   | 否   | 画布宽度，默认值`300` |
| object.height   | Number   | 否   | 画布高度，默认值`150` |
| object.callback | Function | 否   | 签名完成后的回调函数  |

示例代码

```js
var sign = new Signature('#j_sign', {
  width: 375,
  height: 200,
  callback: function (data) {
    console.log(data, '签名完成回调base64位数据')
  },
})
```

#### TouchElement(el,object)

移动元素

**参数说明**

| 参数              | 类型     | 必填 | 说明                                                                        |
| ----------------- | -------- | ---- | --------------------------------------------------------------------------- |
| el                | String   | 是   | 移动元素选择器                                                              |
| object.direction  | String   | 否   | 限制移动方向，默认值`''`，可选值：`row`,`column`,`up`,`down`,`left`,`right` |
| object.touchStart | Function | 否   | 触摸开始，回调参数为`event`                                                 |
| object.touchMove  | Function | 否   | 触摸移动，回调参数为`event`                                                 |
| object.touchEnd   | Function | 否   | 触摸结束，回调参数为`event`                                                 |

示例代码

```js
//任意移动
new TouchElement('#j-drag1', {
  touchStart: function (e) {
    console.log('touchStart', e)
  },
  touchMove: function (e) {
    console.log('touchMove', e)
  },
  touchEnd: function (e) {
    console.log('touchEnd', e)
  },
})

//横向移动
new TouchElement('#j-drag2', {
  direction: 'row',
})
```
