[toc]
# api文档
##  基础api
#### lui.selector(el)
返回文档中匹配指定 CSS 选择器的一个元素。等同于document.querySelector(el)
#### lui.selectorAll(el)
返回文档中匹配指定 CSS 选择器的集合。等同于document.querySelectorAll(el)
#### lui.isSupportTouch()
判断是否支持touch事件，返回布尔值
#### lui.longPress(el,cb)
长按事件

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  el|String|是|目标节点选择器
  cb|Function|是|长按后的回调函数
#### lui.changeSelectStyle (ev)
控制select默认样式，和input的placeholder样式保持一致

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  ev|event|是|事件源，只能传递event
  ```html
    <select class="ui_select placeholderColor" name="select" onchange="lui.changeSelectStyle(event)">
      <option value="">请选择</option>
      <option value="1">女汉子</option>
      <option value="2">萌妹子</option>
    </select>
  ```
#### lui.loadScript(url,cb)
动态异步加载js

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  url|String|是|js路径,单个直接是字符串形式，多个以数组形式
  cb|Function|是|js加载完毕的回调函数
  示例代码
  ```js
  lui.loadScript('util.js',function(){
      //加载完毕，想干什么就干什么
  })
  也可以一次加载多个js
  lui.loadScript(['js1.js','js2.js'],function(){
      //加载完毕，一次加载多个js，呵呵哒
  })
  ```

#### lui.countDown(datetime,cb)
倒计时

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  datetime|Date|是|指定倒计时时间，可被new Date()解析
  cb|Function|是|回调函数，携带一个参数为倒计时剩余时间

  示例代码
  ```js
    lui.countDown('2018-10-01',function(res){
      if (res == undefined) {
          console.log('设定时间小于或等于当前时间');
      }else{
          var s = res.split('|');
          document.querySelector('#j_gq').innerHTML = s[0]+'天'+s[1]+'时'+s[2]+'分'+s[3]+'秒';  
      }        
    })
  ```
  
#### lui.getTime(num,datetime,type)
返回第几天的时间

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  num|Number|是|某天
  datetime|Date|否|某天日期，可被new Date()解析
  type|String|否|日期类型，默认,返回YYYY-MM-DD,如果传'datetime'，返回YYYY-MM-DD hh:mm:ss
#### lui.getCnDay(datetime)
返回某天中文星期

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  datetime|Date|否|某天日期，可被new Date()解析

##交互api
#### lui.scrollToBottom(el,callback)
监听滑动/滚动到底

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  el|String|是|容器选择器，如： '#id'。也可以是DOM对象
  ==注意==：因为监听的是scroll事件，因此绑定的容器必须要用滚动条。

  示例代码
  ```js
  lui.scrollToBottom('#myScroll',function(){
    //已经滚动到底了，你可以在这里加载翻页数据
  })
  ```
  
#### lui.tabs(container)
tab切换

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  container|String|是|tab头和tab内容的外层选择器，如： 'data-role="tabs"'
  ==注意==：需要按照html固定结构。tab头必须含 tab-role="tab"属性，tab内容必须含tab-role="tabContent"属性。

  示例代码
  ```html
  <div data-role="tabs">
    <nav class="ui_capsule_tab flexbox">
        <a href="javascript:;" tab-role="tab" class="flexItem active">tab1</a>
        <a href="javascript:;" tab-role="tab" class="flexItem">tab2</a>
        <a href="javascript:;" tab-role="tab" class="flexItem">tab3</a>
    </nav>
    <div id="tab_content">
        <div tab-role="tabContent" class="p20 active">
            tab1
        </div>
        <div tab-role="tabContent" class="p20">
            tab2
        </div>
        <div tab-role="tabContent" class="p20">
            tab3
        </div>
    </div>
  </div> 
  ```
#### lui.textareaAutoHeight(el,random)
textarea高度自适应

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  el|String|是|textarea选择器
  random|Number|否|随机数，如果一个页面存在多个textarea需要高度自适应，则为必填，而且random不能相同

  示例代码
  ```js
   lui.textareaAutoHeigh('#textarea1',1);
   lui.textareaAutoHeigh('#textarea2',2);
  ```
#### lui.search(object)
复杂搜索交互

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  container|String|是|搜索组件容器
  input|Function|否|实时输入的回调函数，携带一个参数为输入框的值
  clear|Function|否|清空搜索的回调函数
  cancel|Function|否|取消搜索的回调函数
  enter|Function|否|按下回车键搜索的回调函数，携带一个参数为输入框的值

  示例代码
  ```js
    lui.search({
        container:'#js_search',
        input:function(val){
           console.log('你输入的是：'+val); 
        },
        clear:function(){
            console.log('clear');
        },
        cancel:function(){
            console.log('cancel');
        },
        enter:function(val){
            console.log('点击了回车,输入的内容是：'+val);
        }
    })
  ```
#### lui.coverHandler(el,object)
遮盖层显示和隐藏

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  el|String|是|选择器
  open|Function|否|遮盖层打开时的回调函数
  close|Function|否|遮盖层关闭时的回调函数

  示例代码
  ```js
    lui.coverHandler('#coverPage',{
        open:function(){
            console.log('open');
        },
        close:function(){
            console.log('close');
        }
    })
  ```
#### lui.loading(text,opacity)
页面loading效果

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  text|String|是|loading提示文字，如果文字为close，则loading关闭
  opacity|Number|否|loading遮罩层透明度

  示例代码
  ```js
    lui.loading();  //loading

    setTimeout(function(){  //3s后关闭loading
      lui.loading('close')
    },3000)
  ```
#### lui.toast(object)
页面轻提示

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  type|String|否|提示类型，有两种类型，"ok"和"warning"，即对应成功类型和警告类型。默认为"ok"。
  text|String|否|提示文字
  position|String|否|在页面的位置，包含"top","middle","bottom".
  duration|String|否|提示显示持续的时间,默认2s

  示例代码
  ```js
    lui.toast({
        type:'ok',
        text:'操作成功'
    })

    lui.toast({
        position:'top',
        text:'提示内容'
    })
  ```
#### lui.showModal(object)
ios风格模态框

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  title|String|否|提示的标题
  content|String|是|提示的内容，可嵌入html代码
  showCancel|Boolean|否|是否显示取消按钮，默认为 false
  cancelText|String|否|取消按钮的文字，默认为"取消"，文字不宜过长
  confirmText|String|否|确定按钮的文字，默认为"确定"，文字不宜过长
  skin|String|否|传入的自定义class，用于自定义风格
  beforeHide|Function|否|模态框关闭前的回调函数

  示例代码
  ```js
    lui.showModal({
        content:'alert呵呵',
        confirm:function(){
            console.log('confirm');
        }
    })

    var val = '';
    lui.showModal({
        content:'<input type="text" placeholder="请输入" class="ui_popup_ipt" id="ipt"/>',
        beforeHide:function(){
            val = lui.selector('#ipt').value;
        },
        confirm:function(){                    
            console.log('输入框的值是：'+val);
        }
    })
  ```
#### lui.indexAction()
滑动索引定位列表位置
  ==注意==：html结构，需要给列表英文标题加上'data-role="word_index"'属性,给英文列表加上'data-role="word_list"',给弹出提示框加上'data-role="word_popup"'属性

#### lui.watermark(el,name,len)
水印

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  el|String|是|挂载水印的文档节点
  name|String|是|水印内容
  len|String|否|水印个数
  ####
  示例代码
  ```js
    lui.watermark('#js_watermarkbox','张碧晨10056500',18)
  ```
#### lui.photoViewer(imgs)
图片预览

  **参数说明**

  参数 | 类型 | 必填 | 说明 
  ---|---|---|---
  imgs|String|是|图片选择器集合






