"use strict";
/**
    @fires  Date#Format 格式化日期
*/
Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

/**
	* form表单
	* @namespace form	 
*/
;(function(global,undefined){	
	var form = {};
	/** 星星评分*/
	form.Raty = function(el,cb){
		var item = document.querySelectorAll(el),num = 0,index;
		for(var i = 0,len = item.length;i < len;i++){
			(function(index){
				item[index].onclick = function(e){				
					for(var k = 0,len = item.length;k < len;k++){
						if (! e.target.dataset.index) {
							item[k].setAttribute('data-index',k+1);	
						}										
						item[k].classList.remove('on');
					}		
					index = Number(e.target.dataset.index);
					for(var j = 0;j < index;j++){	
						item[j].classList.add('on');
					}				
					if (index && cb && typeof cb == "function") {					
						cb(index);
					}
				}	
			})(i)
		}
	}

	/**本地图片上传*/
	form.chooseImage = function(el,cb){
		document.querySelector(el).onchange = function(e){
			var objUrl = getObjectURL(e.target.files[0]),
				div;
			if(cb && typeof cb == "function"){
				cb(objUrl);	
			}
			if (objUrl) {
				div = document.createElement('li');
				div.classList = 'ui_uploader_item js_upload_item';
				var str = '<img src= '+objUrl+'>'
						+ '<a href="javascript:;" class="ui_del_pic">-</a>';
				div.innerHTML = str;
				document.querySelector('#loader-box').appendChild(div);  
				var li = document.querySelectorAll('.js_upload_item');
				for (var i = 0; i < li.length; i++) {
					li[i].setAttribute('data-index',i);
					li[i].querySelector('.ui_del_pic').setAttribute('data-index',i);
				}
			}                 
		}
		//建立一個可存取到file的url
		function getObjectURL(file) {
			var url = null ; 
			if (window.createObjectURL!=undefined) { // basic
				url = window.createObjectURL(file) ;
			} else if (window.URL!=undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file) ;
			} else if (window.webkitURL!=undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file) ;
			}
			return url ;
		 }
		 //删除图片
		document.querySelector('#loader-box').addEventListener('click',function(e){  
			var li = document.querySelectorAll('.js_upload_item'),
				index = e.target.dataset.index;
			if (e.target.classList.contains('ui_del_pic')) {
				li[index].parentNode.removeChild(li[index]);
			}
		},false)
	}


	/**监听range*/
	form.changeRange = function(_this){
	    var val = _this.value;
	    document.getElementById('rangeVal').innerHTML = val;
	}
	global.form = form;
})(window)