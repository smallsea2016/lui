/* eslint-disable */
;(function (global, factory) {
   if (typeof module === "object" && module && typeof module.exports === "object") { 
     // CommonJS规范检查
     module.exports = factory();    
   } else if (typeof define === 'function' && (define.amd || define.cmd)) { 
     // AMD规范检查、CMD规范检查
     define(factory);
   } else {
    // 浏览器注册全局对象     
     global.lui = factory();
   }
})(this, function () {
   "use strict";    
    var g = {};
    /**
      返回文档中匹配指定 CSS 选择器的一个元素
      * @param el CSS 选择器
    */
    g.selector = function(el){
      return document.querySelector(el);
    }
    /**
      返回文档中匹配指定 CSS 选择器的集合
      * @param el CSS 选择器
    */
    g.selectorAll = function(el){
      return document.querySelectorAll(el);
    }
    /**
      * 判断是否支持touch事件
    */
    g.isSupportTouch = function(){
        return 'ontouchstart' in window
    }
    /**
     * 获取地址栏参数值
     * @param  {String} name 参数名称
     * @return 返回匹配结果
    */
    g.getQueryString = function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    /**
     * 获取数据类型
     * @param {any} value 
     * @returns 
     */
    g.getType = function(value) {
      return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
    }
    /**
      * 回到顶部 {object} opts 对象参数 
      * @param {String} target  触发滚动的目标对象，支持传入选择器或DOM 元素
      * @param {String} elm   点击事件对象，支持传入选择器或DOM元素
      * @param {Number} offsetTop   滚动高度达到此参数值时才显示组件元素
    */
    g.backTop = function (opts) {
      const _opts = {
        target: opts.target,
        elm: opts.elm || '[data-role="back-top"]',
        offsetTop: opts.offsetTop || 200
      }
      const target = document.querySelector(_opts.target)
      const elm = document.querySelector(_opts.elm)
      if (!target || !elm) {
        throw new Error('请检查传入的选择器或 DOM 元素');
      }
      target.onscroll = function(){
        elm.style.cssText += target.scrollTop > _opts.offsetTop 
        ? 'transform: scale(1);transition:all .25s ease-in-out;'
        : elm.style.cssText += 'transform: scale(0)'
      }
      elm.onclick = function(){
        target.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
   /**
    * 长按事件
    * @param  {String}   el [选择器]
    * @param  {Function} cb [长按后的回调函数]
    */
    g.longPress = function(el,cb){
        var t = null,selector = g.selector(el);
        var handleStart = g.isSupportTouch() ? 'touchstart' : 'mousedown',
            handleEnd = g.isSupportTouch() ? 'touchend' : 'mouseup';
        selector.addEventListener('contextmenu', function(e){
          e.preventDefault();
        });
        selector.addEventListener(handleStart,function(e){
            selector.style.cssText += '-webkit-touch-callout:none';
            e.preventDefault();
            t = setTimeout(function(){
              if (cb && typeof cb == 'function') {
                cb();
              }
            },800)
        },false)
        selector.addEventListener(handleEnd,function(){
            clearTimeout(t);
        },false)
    }
    /**
     * 动态加载js
     * @param url 传入的url,单个直接是字符串形式，多个以数组形式
     * @param callback 加载js后的回调
    */
     g.loadScript = function(url, callback) {
      var script = []
      if(typeof url === 'string'){
        url = [url]
      } 
      for (var i = 0; i < url.length; i++) {
        script[i] = document.createElement("script");
        script[i].type = "text/javascript";
        script[i].async = true;
        script[i].defer = true;
        script[i].src = url[i];
        document.head.appendChild(script[i]);
      }
      var initIndex = 0
      if(callback && typeof callback === 'function'){
        for (var index = 0; index < script.length; index++) {
          if (script[index].readyState) {
            script[index].onreadystatechange = function () {
              if (script[index].readyState === "loaded" || script[index].readyState === "complete") {
                script[index].onreadystatechange = null;
                initIndex++
                if (initIndex === script.length) {
                  // console.log('onreadystatechange', script)
                  callback();
                }
              }
            };
          } else {            
            script[index].onload = function () {
              initIndex++
              if (initIndex === script.length) {
                // console.log('onload', script)
                callback();
              }
            };
          }          
        }
      }
    }
    g.pullDownRefresh = function(container,callback){
        var touch,startX,startY,moveX,moveY,touchX,touchY,flag = false;
        var div = document.querySelector(container),
          iconHeight = 50;
         div.style.cssText += 'transform:translate3d(0,-'+iconHeight+'px,0);webkitTransform:translate3d(0,-'+iconHeight+'px,0);overscroll-behavior: contain';

        div.addEventListener("touchstart",touchstart,false);
        div.addEventListener("touchmove",touchmove,false);
        div.addEventListener("touchend",touchend,false);

        function touchstart(e){
            flag = true;
            // e.preventDefault();
            var touch = e.changedTouches[0];
            startX = touch.pageX;
            startY = touch.pageY;
            // console.log('touchstart:'+startX);
        }

        function touchmove(e){
            var touch = e.changedTouches[0];
            moveX = touch.pageX;
            moveY = touch.pageY;
            touchX = moveX - startX;
            touchY = moveY - startY - iconHeight;
            if (moveY - startY > 0 && flag){
              if (touchY > 6) {
                document.querySelector('#pullDown').classList.add('flip');
              }else{
                document.querySelector('#pullDown').classList.remove('flip');
              }
              div.style.cssText += 'transform:translate3d(0,'+touchY+'px,0);webkitTransform:translate3d(0,'+touchY+'px,0);';
            }
            // console.log('touchY:'+touchY);
        }

        function touchend(e){
            flag = false;
            div.style.cssText += 'transform:translate3d(0,-'+iconHeight+'px,0);webkitTransform:translate3d(0,-'+iconHeight+'px,0);transition:all .2s cubic-bezier(.08,.87,.08,.87);webkitTransition:all .2s cubic-bezier(.08,.87,.08,.87);';
            if (callback && typeof callback === "object" && callback['end']) {
                callback['end'](touchY)
            };
        }
    },
    /**
      * 滑动到底加载更多（需要注意的是，有滚动条才能滚动，如果页面禁止了默认滑动，也无法使用该方法）
      * @param wrap 要滚动的元素
      * @param callback 滚动回调函数，返回参数如果为true，则已滚动到底
    */
    g.scrollToBottom = function(wrap,callback){
      var wrap = document.querySelector(wrap),
         divHeight = wrap.clientHeight,
         scrollTop, 
         scrollHeight,
         t = null,
         res;
      wrap.onscroll = function(){
        scrollHeight = this.scrollHeight;
        scrollTop = this.scrollTop;
        if(Math.ceil(scrollTop + divHeight) >= scrollHeight){
          if(callback && typeof callback === "function"){
              clearTimeout(t);
              t = setTimeout(function(){
                  callback(true);
              },100)
          }
        }else{
            res = divHeight+'+'+scrollTop +'>'+ scrollHeight+'?';
            callback(res);          
        }
      };
    }
    /**
      * tab切换
      * @param container 包含tab和tabContent的盒子选择器
      * @param cb 回调函数，返回下标参数
    */
    g.tabs = function (container, cb) {
      var tabs = document.querySelector(container),
        tab = tabs.querySelectorAll('[data-role="tab"]'),
        tabContent = tabs.querySelectorAll('[data-role="tabContent"]');
      var changeTab = function(currentIndex) {
        for (var i = 0, len = tab.length; i < len; i++) {
            if (currentIndex === i) {
              tab[i].classList.add('active');
              tabContent[i].style.display = 'block';
              if (cb && typeof cb === 'function') {
                cb(Number(currentIndex))
              }
            } else {
              tab[i].classList.remove('active');
              tabContent[i].style.display = 'none';
            }
        }
      }
      for (let i = 0, len = tab.length; i < len; i++) {
        tab[i].index = i
        tab[i].addEventListener('click',function(){   
          changeTab(this.index)
        },true)
      }
    }
    /**
        *输入框高度自适应
        *@param textarea 要绑定的textarea
        *@param num 克隆的textarea的随机id(用于一个页面有多个textarea的情况)
    */
    g.textareaAutoHeight = function(textarea,num){
        var textarea = document.querySelector(textarea),
            node = textarea.cloneNode(),
            num = num || 0;
        node.id = 'clone_textarea2017'+num;
       document.querySelector('body').appendChild(node);
       node.style.cssText = 'position:absolute;left:-1000000px';
       textarea.oninput = function(e){
           node.value = textarea.value;
           node.style.cssText += 'width:'+textarea.scrollWidth+'px';
           var h = node.scrollHeight;
           h=h>70?70:(h>35 ? h+2 : 30);
           e.target.style.cssText = 'height:'+h+'px';
       }
    }
    /**
      * 计算文本域输入字数
      * @param textField 要绑定的文本域
      * @param cb 监听输入后的回调
    */
    g.getTextFieldLen = function(textField,cb){
        var el = g.selector(textField);
        el.oninput = function(e){
          var res = e.target.value.trim();
          if (cb && typeof cb == 'function') {
              cb(res.length);
          }
        }
    }
    /**
      *搜索交互
      @param opts 接收一个对象参数 
    */
    g.search = function(opts){
      var opts = opts || {
        el:el,  //绑定搜索框外层元素
        input:function(){ //实时输入的回调
        },
        clear:function(){ //清空搜索框输入值的回调
        },
        cancel:function(){  //取消搜索的回调
        },
        enter:function(){ //回车事件回调
        }
      }
      var el = opts.el,
          input = opts.input,
          clear = opts.clear,
          cancel = opts.cancel,
          enter = opts.enter;
      var labelEl = g.selector(el + ' [role="search-label"]'),
          inputEl = g.selector(el + ' [role="search-input"]'),
          closeEl = g.selector(el + ' [role="search-close"]'),
          cancelEl = g.selector(el + ' [role="search-cancel"]');
        //展开搜索框
        var _showSearch = function(){
            labelEl.style.display = 'none';
        };
        //显示删除按钮
        var _showClose = function(){
            var val = inputEl.value;
            if(val.length){
                closeEl.style.display = 'block';
                if (input && typeof input === "function") {
                    input(val)
                }
            }else{
                closeEl.style.display = 'none';
            }
        };
        //清除输入框值
        var _clearValue = function(){
            inputEl.value = '';
            closeEl.style.display = 'none';
            if (clear && typeof clear === "function") {
                clear()
            }
        };
        //取消搜索
        var _cancelSearch = function(){
            _clearValue();
            labelEl.style.display = 'block';
            if (cancel && typeof cancel === "function") {
                cancel()
            }
        };
        //回车
        inputEl.onkeypress = function(e){
            var keyCode = e.which || e.keyCode;
            var val = e.target.value;
            if(keyCode == 13){
                inputEl.blur();
                if(enter && typeof enter === "function"){
                    enter(val)
                }
            }
          }
        labelEl.addEventListener('click',_showSearch,false);
        inputEl.addEventListener('input',_showClose,false);
        closeEl.addEventListener('click',_clearValue,false);
        cancelEl.addEventListener('click',_cancelSearch,false);
    }
     /**
        *弹出层
        @param el 弹窗选择器
        @param direction 弹出方向，可选值，top，left，right，默认top
        @param callback 回调。 callback.open 弹出层显示时的回调函数； callback.close 弹出层关闭时的回调函数
     */
    g.popupHandler = function (el, direction, callback) {
      var t = null, _direction = direction || 'top',el = document.querySelector(el);
      var _class = 'ui_translate_' + _direction
        if (!el.classList.contains('j_isOpenModal')) {
          clearTimeout(t);
          el.classList.add('j_isOpenModal');
          el.style.display = 'block';
          setTimeout(function(){
              el.classList.remove(_class);
              el.classList.add('ui_translate_origin');
          },10)
          if (callback && typeof callback === "object" && callback['open']) {
            callback['open']();
          };
        }else {
          el.classList.remove('j_isOpenModal');
          el.classList.remove('ui_translate_origin');
          el.classList.add(_class);
          t = setTimeout(function(){
              el.style.display = 'none';
          },300)
          if (callback && typeof callback === "object" && callback['close']) {
              callback['close']();
          };
        }
    }
    /**
         * loading
         * @param text 提示内容，如果传入参数为close，则关闭loading
         * @param opacity 遮罩透明度
     */
    g.loading = function(text,opacity) {
        var text = text || "加载中...";
        var removeLoading = function(){
          var maskEl = document.getElementById('j_loading_mask');
          if (maskEl) {
            maskEl.parentNode.removeChild(maskEl);
          }
        }
        removeLoading()
       if (text != 'close'){
         var el = document.createElement('div');
            el.id = 'j_loading_mask';
            el.className = 'ui_loading_mask';
            el.style.cssText = 'background:rgba(0,0,0,'+opacity+')';
            el.innerHTML =  '<div class="ui_loading_wrap" id="ui_loading_wrap">'
                    +'<div class="ui_loading"><i class="ui_loading_ico"></i></div>'
                    +            '<div class="ui_loading_text">'
                    +                '<p>'+text+'</p>'
                    +           '</div>'
                    +    '</div>';
        document.body.appendChild(el);
       }
    }
     /**
         * toast (opts接受一个对象参数）
         * @param type 操作提示类型,文本类型text,警告类型warning,成功类型ok
         * @param text 提示文本内容
         * @param duration 持续多少毫秒退出
         * @param position 所在页面位置
         * @param disableClickBody toast关闭前是否可点击页面，默认可以
     */
    g.toast = function(opts) {
        var opts = opts || {};
        opts.type = opts.type || 'ok';
        opts.text = opts.text || '提示信息';
        opts.position = opts.position || '';
        opts.duration = opts.duration || 2000;
        opts.disableClickBody = opts.disableClickBody || false;
       var childEl = document.getElementById('js_ui_toast');
        if (childEl) {
          childEl.parentNode.removeChild(childEl);
        }
       var el = document.createElement('div');
          el.id = 'js_ui_toast';
          opts.disableClickBody && (el.className = 'ui_toast_wrap');
          el.innerHTML =  '<div class="ui_toast toast_'+opts.position+'">'
                  +           '<div class="ui_toast_inner">'
                    +            '<span class="ui_toast_ico_wrap"><i class="ui_toast_ico ui_toast_'+opts.type+'_ico"></i></span>'
                    +            '<div class="ui_toast_text">'
                    +                '<p>'+opts.text+'</p>'
                    +             '</div>'
                  +           '</div>'
                  +    '</div>';
        document.body.appendChild(el);
        el.childNodes[0].classList.add('ui_effect_fade');
        (function(el,opts){
          setTimeout(function(){
            if(el.parentNode){
              el.parentNode.removeChild(el);
            }
          },opts.duration)
        })(el,opts)
    }
    /**
      * showModal模态框  (opts 接收一个对象参数 )
      * @param title 标题
      * @param content 内容
      * @param cancelText 取消按钮的文字
      * @param confirmText 确认按钮的文字
      * @param customClass 自定义class样式
      * @param showCancel 是否显示取消按钮，默认为 true
      * @param cancel {function} 取消按钮的回调函数
      * @param confirm {function}  确定按钮的回调函数
      * @param beforeClose {function}  退出模态框前的回调函数，会暂停关闭。function(btn, done)，btn 的值为'_confirm'或者'_cancel'；done 用于关闭弹窗
    */
    g.showModal = function(opts){
      var opts = opts || {}
      opts.title = opts.title || '提示';
      opts.content = opts.content || '内容';
      opts.cancelText = opts.cancelText || '取消';
      opts.confirmText = opts.confirmText || '确认';
      opts.customClass = opts.customClass || '';
      opts.showCancel = opts.showCancel || false;
      var modalEl = document.querySelector('#j_modal_wrap');
      if (modalEl) {
          modalEl.parentNode.removeChild(modalEl); //避免出现多个弹窗
      }
      var el = document.createElement('div');
          el.id = 'j_modal_wrap';
          el.className = 'ui_modal_wrap';
          el.innerHTML =  '<div class="ui_modal '+opts.customClass+'" id="j_modal">'
                    +          '<div class="ui_modal_hd">'+opts.title+'</div>'
                    +          '<div class="ui_modal_bd">'+opts.content+'</div>'
                    +          '<div class="ui_modal_ft" id="js_btns2017">'
                    +             '<a href="javascript:;" class="ui_modal_btn ui_modal_default_btn" data-btn="_cancel">'+opts.cancelText+'</a>'
                    +             '<a href="javascript:;" class="ui_modal_btn ui_modal_primary_btn" data-btn="_confirm">'+opts.confirmText+'</a>'
                    +           '</div>'
                    +    '</div>';
        document.body.appendChild(el);
        var cancelBtn = g.selector('[data-btn="_cancel"]'),
            confirmBtn = g.selector('[data-btn="_confirm"]');
        !opts.showCancel &&  cancelBtn.parentNode.removeChild(cancelBtn);
        var modal_wrap = document.querySelector('#j_modal_wrap'),
            modal = document.querySelector('#j_modal');
        setTimeout(function(){
           modal.classList.add('ui_modal_in');
        },60)
        
       var isClosing = false
       var hideModal = function(){
            isClosing = true
            modal.classList.remove('ui_modal_in');
            modal.classList.add('ui_modal_out');
            setTimeout(function(){
              modal_wrap.parentNode.removeChild(modal_wrap);              
              isClosing = false
            },200)
       }

        var modalBtnHandler = function(e){
          var btn = e.target.dataset.btn;
          if (btn) {
            if (opts.beforeClose && typeof opts.beforeClose === 'function') {
              opts.beforeClose(btn,hideModal)
            }else{
              hideModal()
            }            
            if(btn == "_cancel" && opts.cancel && typeof opts.cancel == "function"){
                setTimeout(function(){
                  opts.cancel();
                },201)
            }
            if(btn == "_confirm" && opts.confirm && typeof opts.confirm == "function") {
                setTimeout(function(){
                  opts.confirm();
                },201)
            }
          };
      }
      cancelBtn && cancelBtn.addEventListener('click',function(e){
        !isClosing && modalBtnHandler(e);
      },false);
      confirmBtn && confirmBtn.addEventListener('click',function(e){
        !isClosing && modalBtnHandler(e);
      },false);
    }
    /**
     * ajax封装(使用方法与jq的ajax方法几乎一样)
     */
    g.request = function(opts) {
        var opts = opts || {};
        opts.type = opts.type.toUpperCase() || 'POST';
        opts.url = opts.url || '';
        opts.data = opts.data || null;
        opts.beforeSend = opts.beforeSend || function() {};
        opts.success = opts.success || function() {};
        opts.error = opts.error || function() {};
        opts.closeLoading = opts.closeLoading || false
        var xmlHttp = new XMLHttpRequest()
        var params = [];
        for (var key in opts.data) {
            params.push(key + '=' + opts.data[key]);
        }
        var postData = params.join('&');
        opts.beforeSend();
        if (opts.type === 'POST') {
            xmlHttp.open(opts.type, opts.url, true);
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.send(postData);
        } else if (opts.type === 'GET') {
            xmlHttp.open(opts.type, opts.url + '?' + postData, true);
            xmlHttp.send();
        }
        if (! opts.closeLoading) {
            g.loading();
        }
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                g.loading('close');
                var res = JSON.parse(xmlHttp.responseText);
                opts.success(res)
            }
        }
        xmlHttp.onerror = function(e){
          opts.error(e)
        }
    }
    /**
      * 索引列表滑动
      * @param scrollElem 滚动元素的选择器
    */
    g.indexAction = function(scrollElem){
        var startX, startY, moveX, moveY, title, a, y = [],h = [],english,word_popup,t = null,flag = false;
        title = document.querySelectorAll('[data-role="word_index"]');
        english = document.querySelector('[data-role="word_list"]');
        a = document.querySelectorAll('[data-role="word_list"] a');
        word_popup = document.querySelector('[data-role="word_popup"]'); //popup
        var fixed_h = (document.body.clientHeight - english.clientHeight) / 2; //原生js的offsetTop在元素用了fixed属性后，有bug，会从0计算，所以用窗口的高度减去元素的高度来计算距离
        // console.log((fixed_h));
        var scrollElem = scrollElem || '.ui_page_bd';
        var offsetTop = 0;
        var item = document.querySelector(scrollElem);

        var startAction = this.isSupportTouch() ? 'touchstart' : 'mousedown'; 
        var endAction = this.isSupportTouch() ? 'touchend' : 'mouseup'; 
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener([startAction], _start, false);
            a[i].addEventListener('touchmove', _move, false);
            a[i].addEventListener([endAction], _end, false);
            y[i] = a[i].offsetTop + fixed_h;
            h[i] = a[i].clientHeight;
        };

        function _start(e) {
            flag = true;
            if (g.isSupportTouch()) {
              var touch = e.changedTouches[0];
               startX = touch.pageX;
               startY = touch.pageY;
            }
            var attr = e.target.dataset.href;
            word_popup.classList.add('active');
            word_popup.innerText = attr;
            offsetTop = document.querySelector('#'+attr).offsetTop;
            // item.scrollTo(0,offsetTop);
            item.scrollTop = offsetTop
        }
        function _move(e) {
            e.preventDefault();
            if (flag) {
              var touch = e.changedTouches[0];
              moveX = touch.pageX;
              moveY = touch.pageY;
              word_popup.classList.add('active');
              var scrollTop = document.body.scrollTop;
              for (var j = 0; j < title.length; j++) { //循环需要滑动的英文字母
                  if ((y[j] + scrollTop < moveY) && (moveY < y[j] + h[j] + scrollTop)) { //计算区间获得对应字母的位置
                      offsetTop = document.querySelector('#'+title[j].id).offsetTop;
                      // item.scrollTo(0,offsetTop);
                      item.scrollTop = offsetTop;
                      word_popup.innerText = title[j].id;
                  }
              };
            }
        }
        function _end() {
          flag = false;
          clearTimeout(t);
          t = setTimeout(function(){
            word_popup.classList.remove('active');
          },500);
        }
    }
    /**
      * 水印
      * @param el 将水印挂载到指定html节点上
      * @param name 水印文字
      * @param len 水印个数
    */
    g.watermark = function (el, name, len) {
      var str = name || '保密水印';
      var el,top,left,translateX,len = len || 10,container = el ? document.querySelector(el) : document.body;
      container.style.cssText += 'position:relative;overflow:hidden;user-select:none;-webkit-user-select:none;'
      for (var i = 0; i < len; i++) {
        top = 19*i-40;
        if(i%5 === 0){
          left = '10%';
        }
        if(i%5 === 1){
          left = '30%';
        }
        if(i%5 === 2){
          left = '50%';
        }
        if(i%5 === 3){
          left = '70%';
        }
        if(i%5 === 4){
          left = '90%';
        }
        translateX = '-50%';
        el = document.createElement('div');
        el.className = 'fixed_watermark';
        el.style.cssText = 'pointer-events:none;position:absolute;transform:rotate(-25deg) translateX('+translateX+');-webkit-transform:rotate(-25deg) translateX('+translateX+');font-size:16px;color:#bcc7cd;opacity:.5;user:none;-webkit-user:none;white-space:nowrap';
        el.innerHTML = str;
        el.style.cssText += 'left:'+left+';top:'+top+'px;';
        if(container){
          container.appendChild(el);
        }else{
          document.body.appendChild(el);
        }
      }
    }
    /**
     * 倒计时
     * @param str 时间字符串
     * @param cb 回调函数
     */
    g.countDown = function(str,cb){
      var s = "";
      var t = setInterval(function(){
        str = str.replace(/-/g,"/");
        var lastDate = new Date(str);
        var currDate = new Date();
        if(lastDate < currDate){           
            clearInterval(t);            
            return cb(s);
        }
        var intDiff = (lastDate.getTime()-currDate.getTime())/1000;
        var day=0,
          hour=0,
          minute=0,
          second=0;//时间默认值
        if(intDiff > 0){
          day = Math.floor(intDiff / (60 * 60 * 24));
          hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
          minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
          second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (day < 10) day = '0' + day;
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        if (second < 10) second = '0' + second;
        s = day+"|"+hour+'|'+minute+'|'+second;
        intDiff--;
        cb(s)
      }, 1000);
    }
    /**
     * 控制select默认样式
     */
    g.changeSelectStyle = function(ev){
        if (ev.target.value === '') {
          ev.target.classList.add('placeholderColor')
        }else{
          ev.target.classList.remove('placeholderColor')
        }
    }
    //开启vConsole调试模式
    if (g.getQueryString('vConsole') === '1') {
        g.loadScript('js/3rd-plugins/vconsole.min.js',function(){
            new VConsole();
        })
    }
    /**
     * 滚动效果-纵向(Object)
     * @param {String} el 选择器元素
     * @param {Number} height 单次滚动高度
     * @param {Number} size 滚动元素的个数
     * @param {Number} wait 间隔滚动时间，默认2s
     * @return {Function} start 滚动开始函数
     * @return {Function} stop 滚动终止函数
     */
    g.marqueeUp = function(opts){
      var opts = opts || {};
      opts.wait = opts.wait || 2000
      var taskTimer = null;
      var i = 0;
      return {
        start: function () {
          if (!opts.el) {
            throw new Error('缺少选择器参数：opts.el')
          }
          if (!opts.height) {
            throw new Error('缺少滚动高度参数：opts.height')
          }
          if (!opts.size) {
            throw new Error('缺少滚动总个数：opts.size')
          }
          var distance = opts.height;
          var size = opts.size;
          var duration = .5
          var marquee = lui.selector(opts.el);
          taskTimer = setInterval(function () {
            i++;
            if (i > size) {
              i = 1
            }
            marquee.style.cssText = 'transform:translateY(-' + distance * i + 'px);transition:all ' + duration + 's';
            var reset = function () {
              marquee.style.cssText = 'transform:translateY(0)';
            }
            var t = null
            if (i === size) { //最后一个滚动item实际上是拷贝了第一个，因此当结束的时候，重新开始滚动，保证滚动是无缝的
              t = setTimeout(reset, duration*1000);
            } else {
              clearTimeout(t)
            }
          }, opts.wait)
        },
        stop:function(){
          clearInterval(taskTimer)
        }
      }
    }
    /**
     * 滚动效果-横向(Object)
     * @param {String} container 滚动容器
     * @param {String} listEl 滚动列表选择器
     * @param {Number} speed 滚动速度，默认60ms
     * @return {Function} start 滚动开始函数
     * @return {Function} stop 滚动终止函数
     */
    g.marquee = function (opts) {
      var opts = opts || {};
      if (!opts.container) {
        throw new Error('缺少容器参数：opts.container')
      }
      if (!opts.listEl) {
        throw new Error('缺少滚动列表选择器参数：opts.listEl')
      }
      opts.speed = opts.speed || 60;
      var taskTimer = null;
      var box = document.querySelector(opts.container);
      var el = document.querySelector(opts.listEl);
      var el_clone = document.createElement(el.tagName);
      el_clone.className = el.className;
      el_clone.id = el.id + '-clone';
      el_clone.innerHTML = el.innerHTML;
      el.after(el_clone)
      var run = function(){
        if (el_clone.offsetWidth - box.scrollLeft <= 0)
          box.scrollLeft -= el.offsetWidth
        else {
          box.scrollLeft++;
        }
      }
      return {
        start: function () {
          taskTimer = setInterval(run,opts.speed);
        },
        stop:function(){
          clearInterval(taskTimer)
        }
      }      
    }
    return g
})
