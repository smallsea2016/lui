(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LazyLoadImg = factory());
}(this, (function () { 'use strict';

var testMeet = function (el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var bcr = el.getBoundingClientRect(); //取得元素在可视区的位置

    var mw = el.offsetWidth; //元素自身宽度
    var mh = el.offsetHeight; //元素自身的高度
    var w = window.innerWidth; //视窗的宽度
    var h = window.innerHeight; //视窗的高度

    var boolX = !(bcr.right - options.left <= 0 && bcr.left + mw - options.left <= 0) && !(bcr.left + options.right >= w && bcr.right + options.right >= mw + w); //上下符合条件
    var boolY = !(bcr.bottom - options.top <= 0 && bcr.top + mh - options.top <= 0) && !(bcr.top + options.bottom >= h && bcr.bottom + options.bottom >= mh + h); //上下符合条件


    return el.width != 0 && el.height != 0 && boolX && boolY;
};

var canvas = document.createElement('canvas');
canvas.getContext('2d').globalAlpha = 0.0;
var images = {};

var getTransparent = function (src, w, h) {
    if (images[src]) return images[src];
    canvas.width = w;
    canvas.height = h;
    var data = canvas.toDataURL('image/png');
    images[src] = data;
    return data;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var LazyLoadImg = function () {
    function LazyLoadImg() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, LazyLoadImg);

        this.options = {
            el: null, //选择的元素
            mode: 'default', //默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
            time: 300, // 设置一个检测时间间隔
            complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
            diy: { //此属性，只有在设置diy 模式时才生效
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            },
            position: { // 只要其中一个位置符合条件，都会触发加载机制
                top: 0, // 元素距离顶部
                right: 0, // 元素距离右边
                bottom: 0, // 元素距离下面
                left: 0 // 元素距离左边
            },
            before: function before() {// 图片加载之前，执行钩子函数

            },
            success: function success() {// 图片加载成功，执行钩子函数

            },
            error: function error() {// 图片加载失败，执行的钩子函数

            }
        };

        _extends(this.options.position, options.position || {});
        _extends(this.options.diy, options.diy || {});
        _extends(this.options, options);
        this._timer = true;
        this.start();
    }

    createClass(LazyLoadImg, [{
        key: 'start',
        value: function start() {
            var _this = this;

            var options = this.options;

            clearTimeout(this._timer); //清除定时器
            if (!this._timer) return;
            this._timer = setTimeout(function () {
                var list = Array.prototype.slice.apply(options.el.querySelectorAll('[data-src]'));

                if (!list.length && options.complete) {
                    return clearTimeout(_this._timer); // 有页面内的图片加载完成了，自己销毁程序
                } else {
                    list.forEach(function (el) {
                        if (!el.dataset.LazyLoadImgState && testMeet(el, options.position)) {
                            _this.loadImg(el);
                        }
                    });
                }
                _this.start();
            }, options.time);
        }
    }, {
        key: 'loadImg',
        value: function loadImg(el) {
            var _this2 = this;

            //加载图片
            var options = this.options;

            el.dataset.LazyLoadImgState = 'start';
            options.before.call(this, el);
            var img = new Image();
            img.src = el.dataset.src;

            img.addEventListener('load', function () {

                if (options.mode == 'diy') {
                    el.src = getTransparent(el.src, el.width, el.height);
                    options.diy.backgroundImage = 'url(' + img.src + ')';
                    _extends(el.style, options.diy);
                } else {
                    el.src = img.src;
                }
                delete el.dataset.src;
                el.dataset.LazyLoadImgState = 'success';
                return options.success.call(_this2, el);
            }, false);

            img.addEventListener('error', function () {
                delete el.dataset.src;
                el.dataset.LazyLoadImgState = 'error';
                options.error.call(_this2, el);
            }, false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            //解除事件绑定
            delete this._timer;
        }
    }]);
    return LazyLoadImg;
}();

return LazyLoadImg;

})));
