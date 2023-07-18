"use strict";
/**
  * 移动元素
  @constructor
  @param {string} elm 移动选择器
  @param {object} opts 接收一个对象参数 
*/
function TouchElement(elm, opts) {
  const _this = this;
  _this.startX;
  _this.startY;
  _this.endX;
  _this.endY;
  _this.moveX;
  _this.moveY;
  _this.item = document.querySelector(elm);
  _this.touchEventStart = false;
  _this.isTouch = "ontouchstart" in window;
  _this.opts = opts || {
    direction: '', //限制滑动方向 可选值：row,column,up,down,left,right
    touchStart: function () { }, //触摸开始
    touchMove: function () { }, //触摸移动
    touchEnd: function () { } //触摸结束
  }
  // console.log('_this.opts', _this.opts)
  const direction = _this.opts.direction || ''
  let initLeft = 0;
  let initTop = 0;
  let initWidth = 0;
  let initHeight = 0;
  /**
   * 初始化dom
   */
  _this.initDom = function () {
    const rect = _this.item.getBoundingClientRect();
    initLeft = rect.left;
    initTop = rect.top;
    initWidth = rect.width;
    initHeight = rect.height;
  };
  _this.initDom();

  /**
   * 获取角度
   * @param {Number} dx 
   * @param {Number} dy 
   * @returns 
   */
  function getSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
  }
  /**
   * 根据起点和终点返回方向 1： 向上， 2： 向下， 3： 向左， 4： 向右, 0： 未滑动
   * @param {Number} startX 
   * @param {Number} startY 
   * @param {Number} endX 
   * @param {Number} endY 
   * @returns 
   */
  function getSlideDirection(startX, startY, endX, endY) {
    const dy = startY - endY;
    const dx = endX - startX;
    let result = 0;
    //若是滑动距离过短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result;
    }
    const angle = getSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
      // console.log(`output->`, '向右')
      result = 4;
    } else if (angle >= 45 && angle < 135) {
      // console.log(`output->`, '向上')
      result = 1;
    } else if (angle >= -135 && angle < -45) {
      // console.log(`output->`, '向下')
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      // console.log(`output->`, '向左')
      result = 3;
    }
    return result;
  }

  /**
      @fires  TouchElement#touchstart 开始滑动
  */
  _this.touchstart = function (e) {
    if (_this.opts.touchStart && typeof _this.opts.touchStart === 'function') {
      _this.opts.touchStart(e)
    }
    _this.touchEventStart = true;
    const touchEvent = _this.isTouch ? e.changedTouches[0] : e; // 事件源
    _this.startX = touchEvent.pageX;
    _this.startY = touchEvent.pageY;
  };

  /**
      @fires  TouchElement#touchmove 滑动中
  */
  _this.touchmove = function (e) {
    if (_this.opts.touchMove && typeof _this.opts.touchMove === 'function') {
      _this.opts.touchMove(e)
    }
    const touchEvent = _this.isTouch ? e.changedTouches[0] : e; // 事件源
    _this.endX = touchEvent.pageX;
    _this.endY = touchEvent.pageY;
    _this.moveX = _this.endX - _this.startX;
    _this.moveY = _this.endY - _this.startY;
    let left = _this.endX - initLeft - initWidth / 2;
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight
    if (initLeft + left < 0) { // 限制不超出左边
      left = -initLeft;
    } else if (initLeft + initWidth + left > clientWidth) { // 限制不超出右边
      left = clientWidth - initLeft - initWidth;
    }
    let top = _this.endY - initTop - initHeight / 2;
    if (initTop + top < 0) { // 限制不超出顶部
      top = -initTop;
    } else if (initTop + initHeight + top > clientHeight) { // 限制不超出底部
      top = clientHeight - initTop - initHeight;
    }
    const dir = getSlideDirection(_this.startX, _this.startY, _this.endX, _this.endY)
    if (direction === '') {  //任意移动
      _this.item.style.cssText += "transform:translate3d(" + left + "px, " + top + "px, 0)";
      return
    }
    if (direction === 'row' && (dir === 3 || dir === 4)) { //只允许x轴移动
      _this.item.style.cssText += "transform:translate3d(" + left + "px,0,0)";
      return
    }
    if (direction === 'column' && (dir === 1 || dir === 2)) { //只允许y轴移动
      _this.item.style.cssText += "transform:translate3d(0," + top + "px,0)";
      return
    }
    if (direction === 'up' && dir === 1) { //只允许向上
      _this.item.style.cssText += "transform:translate3d(0," + top + "px,0)";
      return
    }
    if (direction === 'down' && dir === 2) { //只允许向下
      _this.item.style.cssText += "transform:translate3d(0," + top + "px,0)";
      return
    }
    if (direction === 'left' && dir === 3) { //只允许向左
      _this.item.style.cssText += "transform:translate3d(" + left + "px,0,0)";
      return
    }
    if (direction === 'right' && dir === 4) { //只允许向右
      _this.item.style.cssText += "transform:translate3d(" + left + "px,0,0)";
      return
    }
  };
  /**
      @fires  TouchElement#touchend 滑动结束
  */
  _this.touchend = function (e) {
    if (_this.opts.touchEnd && typeof _this.opts.touchEnd === 'function') {
      _this.opts.touchEnd(e)
    }
    _this.touchEventStart = false;
  };

  if (_this.isTouch) {
    _this.down = "touchstart";
    _this.move = "touchmove";
    _this.up = "touchend";
  } else {
    _this.down = "mousedown";
    _this.move = "mousemove";
    _this.up = "mouseup";
  }
  _this.item.addEventListener(_this.down, _this.touchstart, false);
  _this.item.addEventListener(_this.move, _this.touchmove, false);
  _this.item.addEventListener(_this.up, _this.touchend, false);
}
