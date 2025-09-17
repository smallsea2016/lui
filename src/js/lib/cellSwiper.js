'use strict'

/**
 * 手势侧滑操作
 * @constructor
 * @param {string} elm 滑动的容器
 * @param {string} item 进行操作的元素
 */
function CellSwiper(elm, item) {
  const _this = this

  // 初始化变量
  _this.startX = 0
  _this.startY = 0
  _this.endX = 0
  _this.endY = 0
  _this.moveX = 0
  _this.moveY = 0
  _this.flag = false
  _this.isTouch = 'ontouchstart' in window

  // 获取 DOM 元素
  _this.li = document.querySelectorAll(elm)
  if (!_this.li.length) {
    throw new Error('Invalid parameter: "elm" must point to valid elements.')
  }

  const actionItem = document.querySelector(item)
  if (!actionItem) {
    throw new Error('Invalid parameter: "item" must point to a valid element.')
  }
  _this.actionWidth = actionItem.clientWidth

  // 统一事件类型
  _this.down = _this.isTouch ? 'touchstart' : 'mousedown'
  _this.move = _this.isTouch ? 'touchmove' : 'mousemove'
  _this.up = _this.isTouch ? 'touchend' : 'mouseup'

  /**
   * 开始滑动
   * @fires cellSwiper#touchstart
   */
  _this.touchstart = function (e) {
    _this.flag = true
    const touchEvent = _this.isTouch ? e.changedTouches[0] : e
    _this.startX = touchEvent.pageX
    _this.startY = touchEvent.pageY

    if (e.target.className.includes('js_del_btn')) {
      return
    }
    _this.update()
  }

  /**
   * 滑动中
   * @fires cellSwiper#touchmove
   */
  _this.touchmove = function (e) {
    const li = e.currentTarget
    const touchEvent = _this.isTouch ? e.changedTouches[0] : e
    _this.endX = touchEvent.pageX
    _this.endY = touchEvent.pageY
    _this.moveX = _this.endX - _this.startX

    const move = () => {
      if (
        Math.abs(_this.endX - _this.startX) >
        Math.abs(_this.endY - _this.startY)
      ) {
        e.preventDefault()
        _this.moveX =
          Math.abs(_this.moveX) > _this.actionWidth
            ? -_this.actionWidth
            : _this.moveX
        li.style.cssText += `
          transform: translate3d(${_this.moveX}px, 0, 0);
          webkitTransform: translate3d(${_this.moveX}px, 0, 0);
        `
      }
    }

    if (
      _this.flag &&
      ((_this.isTouch && e.touches.length === 1 && _this.startX > _this.endX) ||
        !_this.isTouch)
    ) {
      move()
    }
  }

  /**
   * 滑动结束
   * @fires cellSwiper#touchend
   */
  _this.touchend = function (e) {
    _this.flag = false

    if (e.target.className.includes('js_del_btn')) {
      return
    }

    const touchEvent = _this.isTouch ? e.changedTouches[0] : e
    const touchEndX = Math.abs(touchEvent.pageX - _this.startX)
    const li = e.currentTarget

    if (touchEndX > _this.actionWidth / 2 && _this.endX < _this.startX) {
      li.classList.add('active')
      li.style.cssText += `
        transform: translate3d(-${_this.actionWidth}px, 0, 0);
        webkitTransform: translate3d(-${_this.actionWidth}px, 0, 0);
      `
    } else {
      li.style.cssText += `
        transform: translate3d(0, 0, 0);
        webkitTransform: translate3d(0, 0, 0);
      `
    }
  }

  /**
   * 恢复滑动前的样子
   * @fires cellSwiper#update
   */
  _this.update = function () {
    _this.li.forEach((li) => {
      li.classList.remove('active')
      li.style.cssText = `
        transform: translate3d(0, 0, 0);
        webkitTransform: translate3d(0, 0, 0);
        transition: all .2s cubic-bezier(.08, .87, .08, .87);
        webkitTransition: all .2s cubic-bezier(.08, .87, .08, .87);
      `
    })
  }

  /**
   * 移除列表中的某条
   * @fires cellSwiper#remove
   */
  _this.remove = function (idx) {
    if (idx >= 0 && idx < _this.li.length) {
      _this.li[idx].parentNode.removeChild(_this.li[idx])
    }
  }

  // 绑定事件
  _this.li.forEach((li) => {
    li.addEventListener(_this.down, _this.touchstart, false)
    li.addEventListener(_this.move, _this.touchmove, false)
    li.addEventListener(_this.up, _this.touchend, false)
  })
}