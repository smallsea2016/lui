'use strict'
/**
 * 创建签名板对象
 *
 * @param {string} el - 画布元素的选择器或元素对象
 * @param {Object} opts - 配置对象
 * @param {number} [opts.width=300] - 画布的宽度
 * @param {number} [opts.height=150] - 画布的高度
 * @param {Function} [opts.callback] - 签名完成后的回调函数
 */
function Signature(el, opts) {
  const defaultOpts = {
    width: 300,
    height: 150,
    callback: null,
  }

  const _this = this
  const options = { ...defaultOpts, ...opts }

  if (!el || typeof el !== 'string') {
    throw new Error('请传入有效的画布元素选择器')
  }

  _this.canvas = document.querySelector(el)
  if (!_this.canvas || _this.canvas.tagName.toLowerCase() !== 'canvas') {
    throw new Error('目标元素必须是 <canvas> 元素')
  }

  _this.ctx = _this.canvas.getContext('2d')
  _this.width = options.width
  _this.height = options.height

  const rect = _this.canvas.getBoundingClientRect()
  _this.offsetLeft = rect.left
  _this.offsetTop = rect.top

  _this.flag = false
  _this.isTouch = 'ontouchstart' in window

  // 统一事件类型
  _this.down = _this.isTouch ? 'touchstart' : 'mousedown'
  _this.move = _this.isTouch ? 'touchmove' : 'mousemove'
  _this.up = _this.isTouch ? 'touchend' : 'mouseup'

  // 初始化画布样式
  _this.initCanvasStyle = function () {
    _this.canvas.style.cssText += `
      background: url(images/icon/shouxie.png) no-repeat center #fff;
      background-size: auto 60px;
    `
    _this.canvas.width = _this.width
    _this.canvas.height = _this.height
  }
  _this.initCanvasStyle()

  // 签名开始
  _this.canvas.addEventListener(_this.down, (evt) => {
    _this.flag = true
    _this.canvas.style.background = '#fff'
    evt.preventDefault()

    const touchEvent = _this.isTouch ? evt.touches[0] : evt
    _this.ctx.beginPath()
    _this.ctx.moveTo(
      touchEvent.pageX - _this.offsetLeft,
      touchEvent.pageY - _this.offsetTop
    )
  })

  // 签名移动
  _this.moveFn = (evt) => {
    if (_this.flag) {
      const touchEvent = _this.isTouch ? evt.touches[0] : evt
      _this.ctx.lineTo(
        touchEvent.pageX - _this.offsetLeft,
        touchEvent.pageY - _this.offsetTop
      )
      _this.ctx.stroke()
    }
  }
  _this.canvas.addEventListener(_this.move, _this.moveFn)

  // 签名结束
  _this.canvas.addEventListener(_this.up, (evt) => {
    _this.flag = false

    const imgDataURL = _this.canvas.toDataURL('image/png')
    if (typeof options.callback === 'function') {
      options.callback(imgDataURL)
    }
  })

  // 清除画布内容
  _this.clearRect = function () {
    _this.canvas.style.cssText += `
      background: url(images/icon/shouxie.png) no-repeat center #fff;
      background-size: auto 60px;
    `
    _this.ctx.clearRect(
      0,
      0,
      _this.canvas.clientWidth,
      _this.canvas.clientHeight
    )

    if (typeof options.callback === 'function') {
      options.callback(null)
    }
  }
}
