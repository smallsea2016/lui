
/**
    *手势侧滑操作
    *@param elm 滑动的元素
    *@param item 进行操作的元素
    *@method touchstart 开始滑动
    *@method touchmove 滑动中
    *@method touchend 滑动结束
    *@method update 恢复滑动前的样子
*/
function CellSwipe(elm,item){
  this.touch;
  this.startX;
  this.startY;
  this.moveX;
  this.moveY;
  this.touchX;
  this.touchY;
  this.x;
  this.li = document.querySelectorAll(elm);
  this.w = document.querySelectorAll(item)[0].clientWidth;
  this.flag = false;
  this.isTouch = 'ontouchstart' in window;
  _this = this;
  //移动端和PC端事件
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

CellSwipe.prototype.touchstart = function(e){
  _this.flag = true;
  var tagClassName = e.target.className;
  (_this.isTouch) ? touchEvent = e.changedTouches[0] :  touchEvent = e || window.event; //事件源
  _this.touch = touchEvent;
  _this.startX = _this.touch.pageX;
  _this.startY = _this.touch.pageY;
  if (tagClassName.indexOf('js_del_btn') > -1) {
      return
  };
  _this.update();
}

CellSwipe.prototype.touchmove = function(e){
  //console.log('move');
  _this.isTouch ? touchEvent = e.changedTouches[0] :  touchEvent = e || window.event; //事件源
  var li = e.currentTarget;
  _this.touch = touchEvent;
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

CellSwipe.prototype.touchend = function(e){
   _this.flag = false;
  var tagClassName = e.target.className;
  if (tagClassName.indexOf('js_del_btn') > -1) {
      return
  };
   //console.log('end:');
   _this.isTouch ? touchEvent = e.changedTouches[0] :  touchEvent = e || window.event; //事件源
  _this.x = Math.abs(touchEvent.pageX - _this.startX);
  //console.log("_this.startX:"+_this.startX+"\n_this.moveX:"+_this.moveX);
  var li = e.currentTarget;
  if (_this.x > _this.w/2 && _this.moveX < _this.startX){
    li.classList.add('active');
    li.style.cssText += 'transform:translate3d(-'+_this.w+'px,0,0)';'webkitTransform:translate3d(-'+_this.w+'px,0,0)';
  }else{
    li.style.cssText += 'transform:translate3d(0,0,0)';'webkitTransform:translate3d(0,0,0)';
  }


}
CellSwipe.prototype.update = function(){
  for(var i = 0,len = _this.li.length;i < len;i++){
      _this.li[i].classList.remove('active');
      _this.li[i].style.cssText =  "transform:translate3d(0,0,0);webkitTransform:translate3d(0,0,0);transition:all .2s cubic-bezier(.08,.87,.08,.87);webkitTransition:all .2s cubic-bezier(.08,.87,.08,.87);"
  }
}
CellSwipe.prototype.remove = function(idx){
  _this.li[idx].parentNode.removeChild(_this.li[idx]);
}
