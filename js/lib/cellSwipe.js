"use strict";
/**
    * 手势侧滑操作
    @constructor
    @param {string} elm 滑动的容器
    @param {string} item 进行操作的元素
*/
function CellSwipe(elm,item){
  var _this = this;
  _this.startX;
  _this.startY;
  _this.endX;
  _this.endY;
  _this.moveX;
  _this.moveY;
  _this.li = document.querySelectorAll(elm);
  _this.actionWidth = document.querySelectorAll(item)[0].clientWidth;
  _this.flag = false;
  _this.isTouch = 'ontouchstart' in window; 
  /**
      @fires  CellSwipe#touchstart 开始滑动
  */
  _this.touchstart = function(e){
    _this.flag = true;
    var tagClassName = e.target.className;
    var touchEvent = _this.isTouch ? e.changedTouches[0] : e; // 事件源
    _this.startX = touchEvent.pageX;
    _this.startY = touchEvent.pageY;
    if (tagClassName.indexOf('js_del_btn') > -1) {
        return
    };
    _this.update();
  }

  /**
      @fires  CellSwipe#touchmove 滑动中
  */
  _this.touchmove = function(e){
    var li = e.currentTarget;    
    var touchEvent = _this.isTouch ? e.changedTouches[0] : e; // 事件源
    _this.endX = touchEvent.pageX;
    _this.endY = touchEvent.pageY;
    _this.moveX = _this.endX - _this.startX;
    var move = function(){
        if (Math.abs(_this.endX - _this.startX) > Math.abs(_this.endY - _this.startY)){
            e.preventDefault();
        _this.moveX = Math.abs(_this.moveX) > _this.actionWidth ? - _this.actionWidth : _this.moveX;
            li.style.cssText += "transform:translate3d("+_this.moveX+"px,0,0);webkitTransform:translate3d("+_this.moveX+"px,0,0)";
        }else {
          return;
        }
    }
    if (_this.flag && _this.isTouch && e.touches.length == 1 && _this.startX > _this.endX) {  //单手
        move();
    }else if(_this.flag && !_this.isTouch){
        move();
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
    var touchEvent = _this.isTouch ? e.changedTouches[0] : e; // 事件源
    var touchEndX = Math.abs(touchEvent.pageX - _this.startX);
    var li = e.currentTarget;
    if (touchEndX > _this.actionWidth/2 && _this.endX < _this.startX){
      li.classList.add('active');
      li.style.cssText += 'transform:translate3d(-'+_this.actionWidth+'px,0,0)';'webkitTransform:translate3d(-'+_this.actionWidth+'px,0,0)';
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
