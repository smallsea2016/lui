"use strict";
/**
    * 手势侧滑操作
    @constructor
    @param {string} elm 滑动的容器
    @param {string} item 进行操作的元素
*/
function CellSwipe(elm,item){
  var _this = this;
  _this.touch;
  _this.startX;
  _this.startY;
  _this.moveX;
  _this.moveY;
  _this.touchX;
  _this.touchY;
  _this.x;
  _this.li = document.querySelectorAll(elm);
  _this.w = document.querySelectorAll(item)[0].clientWidth;
  _this.flag = false;
  _this.isTouch = 'ontouchstart' in window; 
  _this.touchEvent = null; 
  /**
      @fires  CellSwipe#touchstart 开始滑动
  */
  _this.touchstart = function(e){
    _this.flag = true;
    var tagClassName = e.target.className;
    (_this.isTouch) ? _this.touchEvent = e.changedTouches[0] :  _this.touchEvent = e || window.event; //事件源
    _this.touch = _this.touchEvent;
    _this.startX = _this.touch.pageX;
    _this.startY = _this.touch.pageY;
    if (tagClassName.indexOf('js_del_btn') > -1) {
        return
    };
    _this.update();
  }

  /**
      @fires  CellSwipe#touchmove 滑动中
  */
  _this.touchmove = function(e){
    _this.isTouch ? _this.touchEvent = e.changedTouches[0] :  _this.touchEvent = e || window.event; //事件源
    var li = e.currentTarget;
    _this.touch = _this.touchEvent;
          _this.moveX = _this.touch.pageX;
          _this.moveY = _this.touch.pageY;
          _this.touchX = _this.moveX - _this.startX;
    var m = function(){
        if (Math.abs(_this.moveX - _this.startX) > Math.abs(_this.moveY - _this.startY)){
            e.preventDefault();
        Math.abs(_this.touchX) > _this.w ? _this.touchX = - _this.w : _this.touchX;
            li.style.cssText += "transform:translate3d("+_this.touchX+"px,0,0);webkitTransform:translate3d("+_this.touchX+"px,0,0)";
        }else {
          return;
        }
    }
    if (_this.flag && _this.isTouch && e.touches.length == 1 && _this.startX > _this.moveX) {  //单手
        m();
    }else if(_this.flag && !_this.isTouch){
        m();
    }
  }
  /**
      @fires  CellSwipe#touchend 滑动结束
  */
  _this.touchend = function(e){
     _this.flag = false;
    var tagClassName = e.target.className;
    if (tagClassName.indexOf('js_del_btn') > -1) {
        return
    };    
     _this.isTouch ? _this.touchEvent = e.changedTouches[0] :  _this.touchEvent = e || window.event; //事件源
    _this.x = Math.abs(_this.touchEvent.pageX - _this.startX);
    //console.log("_this.startX:"+_this.startX+"\n_this.moveX:"+_this.moveX);
    var li = e.currentTarget;
    if (_this.x > _this.w/2 && _this.moveX < _this.startX){
      li.classList.add('active');
      li.style.cssText += 'transform:translate3d(-'+_this.w+'px,0,0)';'webkitTransform:translate3d(-'+_this.w+'px,0,0)';
    }else{
      li.style.cssText += 'transform:translate3d(0,0,0)';'webkitTransform:translate3d(0,0,0)';
    }
  }
  /**
      @fires  CellSwipe#update 恢复滑动前的样子
  */
  _this.update = function(){
    for(var i = 0,len = _this.li.length;i < len;i++){
        _this.li[i].classList.remove('active');
        _this.li[i].style.cssText =  "transform:translate3d(0,0,0);webkitTransform:translate3d(0,0,0);transition:all .2s cubic-bezier(.08,.87,.08,.87);webkitTransition:all .2s cubic-bezier(.08,.87,.08,.87);"
    }
  }
  /**
      @fires  CellSwipe#remove 移除列表中的某条
  */
  _this.remove = function(idx){
    _this.li[idx].parentNode.removeChild(_this.li[idx]);
  }


  if(_this.isTouch){
      _this.down = 'touchstart';
     _this.move = 'touchmove';
     _this.up = 'touchend';
  }else{
      _this.down = 'mousedown';
      _this.move = 'mousemove';
      _this.up = 'mouseup';
  }
  for (var i = 0; i < _this.li.length; i++) {
      _this.li[i].addEventListener(_this.down,_this.touchstart,false);
      _this.li[i].addEventListener(_this.move,_this.touchmove,false);
      _this.li[i].addEventListener(_this.up,_this.touchend,false);
  };
}
