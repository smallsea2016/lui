

/**
 * 创建签名板对象
 *
 * @param {string} el - 画布元素的选择器或元素对象
 * @param {Object} opts - 配置对象
 * @param {number} [opts.width=300] - 画布的宽度
 * @param {number} [opts.height=150] - 画布的高度
 * @param {Function} [opts.callback] - 签名完成后的回调函数
 */
function Signature(el,opts) {
    var _this = this;
    var _opts = opts || {}
    if(!el || typeof el !== 'string'){
        throw new Error('请传入画布元素');
    }
    _this.canvas = $$(el);
    _this.ctx = _this.canvas.getContext('2d');
    _this.width = _opts.width || 300;
    _this.height =_opts.height || 150;
    _this.offsetLeft = _this.canvas.getBoundingClientRect().left;
    _this.offsetTop = _this.canvas.getBoundingClientRect().top;
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
        _this.canvas.width = _this.width;
        _this.canvas.height = _this.height;
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
        if (_opts.callback && typeof _opts.callback === "function") {
            _opts.callback(null);
          }
    }
}
