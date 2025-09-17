"use strict";
/**
    @fires  Date#Format 格式化日期
*/
Date.prototype.Format = function (fmt) {
  // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );

  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );

  return fmt;
};

/**
 * form表单
 * @namespace form
 */
(function (global, undefined) {
  var form = {};
  /** 星星评分*/
  form.raty = function (el, cb) {
    var item = document.querySelectorAll(el),
      num = 0,
      index;
    for (var i = 0, len = item.length; i < len; i++) {
      (function (index) {
        item[index].onclick = function (e) {
          for (var k = 0, len = item.length; k < len; k++) {
            if (!e.target.dataset.index) {
              item[k].setAttribute("data-index", k + 1);
            }
            item[k].classList.remove("on");
          }
          index = Number(e.target.dataset.index);
          for (var j = 0; j < index; j++) {
            item[j].classList.add("on");
          }
          if (index && cb && typeof cb == "function") {
            cb(index);
          }
        };
      })(i);
    }
  };

  /**
   * 本地图片上传
   * @param {String} el 图片上传容器选择器[必填]
   * @param {Array} defaultList 已上传的默认图片数组[必填]，如[{url:'xxx'}]
   * @param {Function} cb 上传删除后的回调函数，参数为图片数组
   */
  form.chooseImage = function (el, defaultList, cb) {
    var uploadList = document.querySelector(el + ' [data-role="upload-list"]');
    var uploadBtn = document.querySelector(el + ' [data-role="upload-btn"]');
    var imgList =
      lui.getType(defaultList) === "array" && defaultList.length
        ? defaultList
        : [];
    /**
     * 初始化
     * @param {Array} list
     */
    var initList = function (list) {
      var template = "";
      for (let index = 0; index < list.length; index++) {
        template +=
          '<li class="ui_uploader_item js_upload_item" data-index=' +
          index +
          ">" +
          "<img src= " +
          list[index].url +
          " data-original= " +
          list[index].url +
          " />" +
          '<a href="javascript:;" class="js_del_pic ui_del_pic" data-index=' +
          index +
          ">-</a>" +
          "</li>";
      }
      uploadList.innerHTML = template;
    };
    if (lui.getType(defaultList) === "array" && defaultList.length) {
      initList(defaultList);
    }
    uploadBtn.onchange = function (e) {
      var objUrl = getObjectURL(e.target.files[0]);
      if (objUrl) {
        var div = document.createElement("li");
        div.className = "ui_uploader_item js_upload_item";
        div.setAttribute("data-index", imgList.length);
        var template =
          "<img src= " +
          objUrl +
          " data-original= " +
          objUrl +
          " />" +
          '<a href="javascript:;" class="js_del_pic ui_del_pic" data-index=' +
          imgList.length +
          ">-</a>";
        div.innerHTML = template;
        uploadList.appendChild(div);
        imgList.push({ url: objUrl });
        if (cb && typeof cb == "function") {
          cb(imgList);
        }
      }
    };
    // 建立一个可存取到file的url
    function getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }
    // 删除图片
    document.querySelector(el).addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("js_del_pic")) {
          var index = e.target.parentNode.dataset.index
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);
          imgList.splice(index, 1);
          if (cb && typeof cb == "function") {
            cb(imgList);
          }
          //移除后需重新设置下标
          var uploadItems = uploadList.querySelectorAll('.js_upload_item')
          var delItems = uploadList.querySelectorAll('.js_upload_item .js_del_pic')
          for (let i = 0; i < imgList.length; i++) {
            uploadItems[i].setAttribute('data-index', i)
            delItems[i].setAttribute('data-index', i)
          }
        }
      },
      false
    );
  };

  /**
   * 控制select默认样式
   */
  form.changeSelectStyle = function (ev) {
    if (ev.target.value === '') {
      ev.target.classList.add('placeholderColor')
    } else {
      ev.target.classList.remove('placeholderColor')
    }
  }
  /**监听range*/
  form.changeRange = function (_this) {
    var val = _this.value;
    document.getElementById("rangeVal").innerHTML = val;
  };
  global._form = form;
})(window);
