'use strict'

/**
 * 移动元素
 * @constructor
 * @param {string} elm - 移动选择器
 * @param {Object} opts - 配置对象
 * @param {string} [opts.direction=''] - 限制滑动方向，可选值：row, column, up, down, left, right
 * @param {Function} [opts.touchStart] - 触摸开始回调
 * @param {Function} [opts.touchMove] - 触摸移动回调
 * @param {Function} [opts.touchEnd] - 触摸结束回调
 */
function TouchElement(elm, opts) {
  const defaultOpts = {
    direction: '', // 限制滑动方向
    touchStart: () => {}, // 触摸开始回调
    touchMove: () => {}, // 触摸移动回调
    touchEnd: () => {}, // 触摸结束回调
  }

  const _this = this
  _this.opts = { ...defaultOpts, ...opts }

  if (!elm || typeof elm !== 'string') {
    throw new Error('请传入有效的选择器')
  }

  _this.item = document.querySelector(elm)
  if (!_this.item) {
    throw new Error('目标元素不存在')
  }

  _this.startX = 0
  _this.startY = 0
  _this.endX = 0
  _this.endY = 0
  _this.moveX = 0
  _this.moveY = 0
  _this.touchEventStart = false
  _this.isTouch = 'ontouchstart' in window

  // 初始化 DOM 属性
  const rect = _this.item.getBoundingClientRect()
  _this.item.style.cssText += 'user-select:none;'
  const initLeft = rect.left
  const initTop = rect.top
  const initWidth = rect.width
  const initHeight = rect.height

  /**
   * 获取角度
   * @param {Number} dx
   * @param {Number} dy
   * @returns {Number}
   */
  const getSlideAngle = (dx, dy) => (Math.atan2(dy, dx) * 180) / Math.PI

  /**
   * 根据起点和终点返回方向
   * @param {Number} startX
   * @param {Number} startY
   * @param {Number} endX
   * @param {Number} endY
   * @returns {Number}
   */
  const getSlideDirection = (startX, startY, endX, endY) => {
    const dy = startY - endY
    const dx = endX - startX
    let result = 0

    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result
    }

    const angle = getSlideAngle(dx, dy)
    if (angle >= -45 && angle < 45) {
      result = 4 // 向右
    } else if (angle >= 45 && angle < 135) {
      result = 1 // 向上
    } else if (angle >= -135 && angle < -45) {
      result = 2 // 向下
    } else if (
      (angle >= 135 && angle <= 180) ||
      (angle >= -180 && angle < -135)
    ) {
      result = 3 // 向左
    }
    return result
  }

  /**
   * 开始滑动
   */
  _this.touchstart = (e) => {
    _this.touchEventStart = true
    if (typeof _this.opts.touchStart === 'function') {
      _this.opts.touchStart(e)
    }
    const touchEvent = _this.isTouch ? e.changedTouches[0] : e
    _this.startX = touchEvent.pageX
    _this.startY = touchEvent.pageY
  }

  /**
   * 滑动中
   */
  _this.touchmove = (e) => {
    if (!_this.touchEventStart) return

    if (typeof _this.opts.touchMove === 'function') {
      _this.opts.touchMove(e)
    }

    const touchEvent = _this.isTouch ? e.changedTouches[0] : e
    _this.endX = touchEvent.pageX
    _this.endY = touchEvent.pageY
    _this.moveX = _this.endX - _this.startX
    _this.moveY = _this.endY - _this.startY

    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    let left = _this.endX - initLeft - initWidth / 2
    left = Math.max(
      -initLeft,
      Math.min(left, clientWidth - initLeft - initWidth)
    )

    let top = _this.endY - initTop - initHeight / 2
    top = Math.max(-initTop, Math.min(top, clientHeight - initTop - initHeight))

    const dir = getSlideDirection(
      _this.startX,
      _this.startY,
      _this.endX,
      _this.endY
    )
    const { direction } = _this.opts

    if (direction === '') {
      _this.item.style.cssText += `transform:translate3d(${left}px, ${top}px, 0);`
    } else if (direction === 'row' && (dir === 3 || dir === 4)) {
      _this.item.style.cssText += `transform:translate3d(${left}px, 0, 0);`
    } else if (direction === 'column' && (dir === 1 || dir === 2)) {
      _this.item.style.cssText += `transform:translate3d(0, ${top}px, 0);`
    } else if (
      (direction === 'up' && dir === 1) ||
      (direction === 'down' && dir === 2)
    ) {
      _this.item.style.cssText += `transform:translate3d(0, ${top}px, 0);`
    } else if (
      (direction === 'left' && dir === 3) ||
      (direction === 'right' && dir === 4)
    ) {
      _this.item.style.cssText += `transform:translate3d(${left}px, 0, 0);`
    }
  }

  /**
   * 滑动结束
   */
  _this.touchend = (e) => {
    _this.touchEventStart = false
    if (typeof _this.opts.touchEnd === 'function') {
      _this.opts.touchEnd(e)
    }
  }

  // 统一事件类型
  _this.down = _this.isTouch ? 'touchstart' : 'mousedown'
  _this.move = _this.isTouch ? 'touchmove' : 'mousemove'
  _this.up = _this.isTouch ? 'touchend' : 'mouseup'

  // 绑定事件
  _this.item.addEventListener(_this.down, _this.touchstart, false)
  _this.item.addEventListener(_this.move, _this.touchmove, false)
  _this.item.addEventListener(_this.up, _this.touchend, false)
}
