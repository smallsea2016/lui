/**
    * 移动端签名功能
    * @constructor
    * @param {string} opts.container 画布外层盒子选择器
    * @param {string} opts.canvas 画布选择器    
    * @param {number} opts.ratio 画布高度比列
    * @param {function} opts.callback 签名绘制完成后的回调，返回base64位图片
*/
function Signature(opts) {
    var _this = this;
    var _opts = opts || {}
    var ratio = _opts.ratio || 3 / 5;
    _this.container = $$(_opts.container) || $$('#j_canvas_wrap');
    _this.canvas = $$(_opts.canvas) || $$('#j_canvas');
    _this.ctx = _this.canvas.getContext('2d');
    _this.offsetLeft = _this.container.getBoundingClientRect().left;
    _this.offsetTop = _this.container.getBoundingClientRect().top;
    _this.flag = false;
    _this.isTouch = 'ontouchstart' in window;
    _this.img;
    //移动端和PC端
    if(_this.isTouch){ 
        _this.down = 'touchstart';
       _this.move = 'touchmove';
       _this.up = 'touchend';
    }else{
        _this.down = 'mousedown';
        _this.move = 'mousemove';
        _this.up = 'mouseup';
    }
    //简化获取dom操作
    function $$(elm){
        return document.querySelector(elm)
    }
    
    (_this.canvasStyle  = function (){
        //画布初始化
        _this.canvas.style.cssText += 'background:url(images/icon/shouxie.png) no-repeat center #fff;background-size:auto 60px'
        _this.canvas.width = _this.container.clientWidth;
        _this.canvas.height = _this.container.clientWidth * (ratio);
    })()
    //签名开始
    _this.canvas.addEventListener(_this.down,
        function(evt) {
            _this.flag = true;
            _this.canvas.style.background = '#fff';
            evt.preventDefault();
            (_this.isTouch) ? touchEvent = evt.touches[0] :  touchEvent = evt; //事件源
            _this.ctx.beginPath();
            _this.ctx.moveTo(touchEvent.pageX - _this.offsetLeft, touchEvent.pageY - _this.offsetTop);
        },
    false);
    //签名移动
    _this.moveFn = function(evt) {
        if (_this.flag) {
            (_this.isTouch) ? touchEvent = evt.touches[0] :  touchEvent = evt; //事件源
            _this.ctx.lineTo(touchEvent.pageX - _this.offsetLeft, touchEvent.pageY - _this.offsetTop);
            _this.ctx.stroke();
        };
    };
    _this.canvas.addEventListener(_this.move,_this.moveFn,false);
    //签名结束
    _this.canvas.addEventListener(_this.up,
        function(evt) {
            _this.flag = false;
            var imgDataURL = _this.canvas.toDataURL("image/png");
            if (_opts.callback && typeof _opts.callback === "function") {
              _opts.callback(imgDataURL);
            }
        },
    false);

    //清除canvas内容
    _this.clearRect = function (){
        _this.canvas.style.background = 'url(images/icon/shouxie.png) no-repeat center #fff';
        _this.ctx.clearRect(0,0,_this.canvas.clientWidth,_this.canvas.clientHeight);
    }
}
