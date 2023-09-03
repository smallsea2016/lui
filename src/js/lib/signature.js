/**
    * 移动端签名功能
    * @constructor
    * @param {number} ratio 画布高度比列
    * @param {string} container 画布外层盒子选择器
    * @param {string} canvas 画布选择器    
    * @param {string} save 保存按钮选择器
    * @param {string} reset 重签按钮选择器
*/
function Signature(ratio,container,canvas,save,reset){
    var ratio = ratio || 3/5;
    var _this = this;
    _this.cavas = $$(canvas) || $$('#j_canvas');
    _this.container = $$(container) || $$('#j_canvas_wrap');
    _this.save = $$(save) || $$('#j_save');
    _this.reset = $$(reset) || $$('#j_reset');
    _this.ctx = _this.cavas.getContext('2d');
    _this.offsetLeft = _this.container.offsetLeft;
    _this.offsetTop = _this.container.offsetTop;
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
     //判断是否存在iframe
    function isIframe(){
        return top.location != self.location
    }
    (_this.canvasStyle  = function (){
        //画布初始化
        _this.cavas.style.cssText += 'background:url(images/icon/shouxie.png) no-repeat center #fff;background-size:auto 60px'
        _this.cavas.width = _this.container.clientWidth;
        _this.cavas.height = _this.container.clientWidth * (ratio);
        if(isIframe()){  
            //iframe高
            parent.document.querySelector('[role="canvasIframe"]').setAttribute("height",_this.cavas.height+2);
        }  

        //创建存储签名的图片
        _this.img = new Image();
        _this.img.id = 'j_sign2018_img';
        _this.img.setAttribute('hidden','hidden');
        if (isIframe()) {
            parent.document.getElementsByTagName('body')[0].appendChild(_this.img);
        }else{
            document.getElementsByTagName('body')[0].appendChild(_this.img);
        };
    })()
    //签名开始
    _this.cavas.addEventListener(_this.down,
        function(evt) {
            _this.flag = true;
            _this.cavas.style.background = '#fff';
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
    _this.cavas.addEventListener(_this.move,_this.moveFn,false);
    //签名结束
    _this.cavas.addEventListener(_this.up,
        function(evt) {
            _this.flag = false;
        },
    false);

    //保存绘制的图片
    _this.save.addEventListener('click',function(){
        var imgDataURL = _this.cavas.toDataURL("image/png");
            _this.img.src = imgDataURL; 
            // _this.hideEl(imgDataURL);
    },false)

    //清除canvas内容
    _this.clearRect = function (){
        _this.cavas.style.background = 'url(images/icon/shouxie.png) no-repeat center #fff';
        _this.ctx.clearRect(0,0,_this.cavas.clientWidth,_this.cavas.clientHeight);
    }
    _this.reset.addEventListener('click',function(){
        _this.clearRect();
    },false)

    //隐藏弹窗
    _this.hideEl = function(imgDataURL){
        if (isIframe()) {
            parent.document.getElementById('mask').style.display = 'none';
            parent.document.getElementById('canvas_pop_up').style.display = 'none';
            var data_id = _this.cavas.getAttribute('data-id');
            parent.document.querySelector('#'+data_id).parentNode.classList.add('active');
            parent.document.querySelector('#'+data_id).setAttribute('data-src',imgDataURL)
        }
    }

}
