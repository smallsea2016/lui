/* eslint-disable */
;(function (global, factory) {
  if (
    typeof module === 'object' &&
    module &&
    typeof module.exports === 'object'
  ) {
    // CommonJS规范检查
    module.exports = factory()
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    // AMD规范检查、CMD规范检查
    define(factory)
  } else {
    // 浏览器注册全局对象
    global.lui = factory()
  }
})(this, function () {
  'use strict'
  var g = {}
  /**
   * 返回文档中匹配指定 CSS 选择器的一个元素
   * @param el CSS 选择器
   */
  g.selector = function (el) {
    return document.querySelector(el)
  }
  /**
   * 返回文档中匹配指定 CSS 选择器的集合
   * @param el CSS 选择器
   */
  g.selectorAll = function (el) {
    return document.querySelectorAll(el)
  }
  /**
   * 判断是否支持touch事件
   */
  g.isSupportTouch = function () {
    return 'ontouchstart' in window
  }
  /**
   * 获取地址栏参数值
   * @param  {String} name 参数名称
   * @param  {Boolean} fromEnd 是否从最后一个?问号开始匹配。在微信应用开发中，授权回调会携带额外参数，如coorId，这样可能会形成url存在两个?问号，这时候我们获取参数可能要的是最后一个?问号后的
   * @return 返回匹配结果
   */
  g.getQueryString = function (name, fromEnd) {
    if (!name || typeof name !== 'string') {
      console.error('Invalid parameter: name must be a non-empty string')
      return null
    }

    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const href = window.location.href
    const search = href.includes('?')
      ? fromEnd
        ? href.substring(href.lastIndexOf('?'))
        : window.location.search
      : ''

    const match = search.substring(1).match(reg)
    return match ? decodeURIComponent(match[2]) : null
  }

  /**
   * 获取数据类型
   * @param {any} value
   * @returns
   */
  g.getType = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
  }
  /**
   * 回到顶部 {object} opts 对象参数
   * @param {String} target  触发滚动的目标对象，支持传入选择器或DOM 元素
   * @param {String} elm   点击事件对象，支持传入选择器或DOM元素
   * @param {Number} offsetTop   滚动高度达到此参数值时才显示组件元素
   */
  g.backTop = function (opts) {
    const defaultOpts = {
      target: null,
      elm: '[data-role="back-top"]',
      offsetTop: 200,
    }

    const _opts = { ...defaultOpts, ...opts }

    if (!_opts.target || !_opts.elm) {
      console.error('Invalid options: "target" and "elm" are required.')
      return
    }

    const target = document.querySelector(_opts.target)
    const elm = document.querySelector(_opts.elm)

    if (!target || !elm) {
      console.error(
        'Invalid selectors: Ensure "target" and "elm" point to valid DOM elements.'
      )
      return
    }

    const handleScroll = () => {
      const isVisible = target.scrollTop > _opts.offsetTop
      elm.style.transform = isVisible ? 'scale(1)' : 'scale(0)'
      elm.style.transition = 'all .25s ease-in-out'
    }

    const scrollToTop = () => {
      target.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    target.addEventListener('scroll', handleScroll)
    elm.addEventListener('click', scrollToTop)

    // 初始化样式
    handleScroll()

    // 返回清理函数以支持组件卸载
    return () => {
      target.removeEventListener('scroll', handleScroll)
      elm.removeEventListener('click', scrollToTop)
    }
  }

  /**
   * 长按事件
   * @param  {String}   el [选择器]
   * @param  {Function} cb [长按后的回调函数]
   */
  g.longPress = function (el, cb) {
    const selector = g.selector(el)
    if (!selector) {
      console.error(
        'Invalid parameter: "el" must be a valid selector or DOM element.'
      )
      return
    }

    if (cb && typeof cb !== 'function') {
      console.error('Invalid parameter: "cb" must be a function.')
      return
    }

    const handleStart = g.isSupportTouch() ? 'touchstart' : 'mousedown'
    const handleEnd = g.isSupportTouch() ? 'touchend' : 'mouseup'
    const longPressDuration = 800 // 长按时间配置
    let pressTimer = null

    const startPress = (e) => {
      e.preventDefault()
      selector.style.webkitTouchCallout = 'none' // 禁用默认菜单
      pressTimer = setTimeout(() => {
        if (typeof cb === 'function') {
          cb()
        }
      }, longPressDuration)
    }

    const cancelPress = () => {
      clearTimeout(pressTimer)
    }

    selector.addEventListener('contextmenu', (e) => e.preventDefault())
    selector.addEventListener(handleStart, startPress, false)
    selector.addEventListener(handleEnd, cancelPress, false)

    // 返回清理函数以支持组件卸载
    return () => {
      selector.removeEventListener(handleStart, startPress)
      selector.removeEventListener(handleEnd, cancelPress)
    }
  }

  /**
   * 动态加载js
   * @param url 传入的url,单个直接是字符串形式，多个以数组形式
   * @param callback 加载js后的回调
   */
  g.loadScript = function (urls, callback) {
    if (!Array.isArray(urls)) {
      urls = typeof urls === 'string' ? [urls] : []
    }

    if (urls.length === 0) {
      console.error(
        'Invalid parameter: "urls" must be a non-empty string or array.'
      )
      return
    }

    let loadedCount = 0

    const loadSingleScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.defer = true
        script.src = url

        const handleLoad = () => {
          script.onload = null
          script.onerror = null
          resolve()
        }

        const handleError = () => {
          script.onload = null
          script.onerror = null
          reject(new Error(`Failed to load script: ${url}`))
        }

        script.onload = handleLoad
        script.onerror = handleError

        document.head.appendChild(script)
      })
    }

    const loadAllScripts = async () => {
      try {
        for (const url of urls) {
          await loadSingleScript(url)
          loadedCount++
        }
        if (typeof callback === 'function') {
          callback()
        }
      } catch (error) {
        console.error(error.message)
      }
    }

    loadAllScripts()
  }

  /**
   * 滑动到底加载更多（需要注意的是，有滚动条才能滚动，如果页面禁止了默认滑动，也无法使用该方法）
   * @param wrap 要滚动的元素
   * @param callback 滚动回调函数，返回参数如果为true，则已滚动到底
   */
  g.scrollToBottom = function (wrapSelector, callback) {
    const wrap = document.querySelector(wrapSelector)

    if (!wrap) {
      console.error(
        'Invalid parameter: "wrapSelector" must point to a valid DOM element.'
      )
      return
    }

    if (callback && typeof callback !== 'function') {
      console.error('Invalid parameter: "callback" must be a function.')
      return
    }

    let debounceTimer = null
    const debounceDelay = 100 // 防抖延迟时间

    wrap.addEventListener('scroll', () => {
      const { clientHeight, scrollTop, scrollHeight } = wrap

      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          if (typeof callback === 'function') {
            callback(true)
          }
        }, debounceDelay)
      } else if (typeof callback === 'function') {
        const debugInfo = `${clientHeight}+${scrollTop}>${scrollHeight}?`
        callback(debugInfo)
      }
    })
  }

  /**
   * tab切换
   * @param container 包含tab和tabContent的盒子选择器
   * @param cb 回调函数，返回下标参数
   */
  g.tabs = function (container, callback) {
    const tabsContainer = document.querySelector(container)

    if (!tabsContainer) {
      console.error(`Tabs container not found: ${container}`)
      return
    }

    const tabs = tabsContainer.querySelectorAll('[data-role="tab"]')
    const tabContents = tabsContainer.querySelectorAll(
      '[data-role="tabContent"]'
    )

    if (tabs.length !== tabContents.length) {
      console.error('Mismatch between tabs and tabContents count.')
      return
    }

    const activateTab = (currentIndex) => {
      tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === currentIndex)
        tabContents[index].hidden = index !== currentIndex // 使用 hidden 属性替代 style.display
      })

      if (typeof callback === 'function') {
        callback(currentIndex)
      }
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(index), false)
    })
  }

  /**
   *输入框高度自适应
   *@param textarea 要绑定的textarea
   *@param num 克隆的textarea的随机id(用于一个页面有多个textarea的情况)
   */
  g.textareaAutoHeight = function (textareaSelector, num = 0) {
    const textarea = document.querySelector(textareaSelector)

    if (!textarea || !(textarea instanceof HTMLTextAreaElement)) {
      console.error(
        'Invalid parameter: "textareaSelector" must point to a valid <textarea> element.'
      )
      return
    }

    const node = textarea.cloneNode()
    node.id = `clone_textarea2017${num}`
    node.style.cssText = 'position:absolute;left:-1000000px'
    document.body.appendChild(node)

    textarea.addEventListener('input', (e) => {
      const target = e.target
      node.value = target.value
      node.style.width = `${target.scrollWidth}px`

      let height = node.scrollHeight
      height = height > 70 ? 70 : height > 35 ? height + 2 : 30

      target.style.height = `${height}px`
    })
  }

  /**
   * 计算文本域输入字数
   * @param textField 要绑定的文本域
   * @param cb 监听输入后的回调
   */
  g.getTextFieldLen = function (textField, cb) {
    const el = g.selector(textField)

    if (
      !el ||
      !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
    ) {
      console.error(
        'Invalid parameter: "textField" must point to a valid input or textarea element.'
      )
      return
    }

    if (cb && typeof cb !== 'function') {
      console.error('Invalid parameter: "cb" must be a function.')
      return
    }

    el.addEventListener('input', (e) => {
      const target = e.target
      const trimmedValue = target.value.trim()
      if (typeof cb === 'function') {
        cb(trimmedValue.length)
      }
    })
  }

  /**
   * 搜索交互
   * @param opts 接收一个对象参数
   */
  g.search = function (opts) {
    const defaultOpts = {
      el: null,
      input: () => {},
      clear: () => {},
      cancel: () => {},
      enter: () => {},
    }

    const options = { ...defaultOpts, ...opts }

    if (!options.el) {
      console.error('Invalid parameter: "el" is required.')
      return
    }

    const {
      el,
      input: inputCallback,
      clear: clearCallback,
      cancel: cancelCallback,
      enter: enterCallback,
    } = options

    const labelEl = g.selector(`${el} [role="search-label"]`)
    const inputEl = g.selector(`${el} [role="search-input"]`)
    const closeEl = g.selector(`${el} [role="search-close"]`)
    const cancelEl = g.selector(`${el} [role="search-cancel"]`)

    if (![labelEl, inputEl, closeEl, cancelEl].every(Boolean)) {
      console.error('Invalid selectors: Ensure all required elements exist.')
      return
    }

    // 展开搜索框
    const showSearch = () => {
      labelEl.style.display = 'none'
    }

    // 显示删除按钮
    const showClose = () => {
      const value = inputEl.value.trim()
      closeEl.style.display = value ? 'block' : 'none'
      if (typeof inputCallback === 'function') {
        inputCallback(value)
      }
    }

    // 清除输入框值
    const clearValue = () => {
      inputEl.value = ''
      closeEl.style.display = 'none'
      if (typeof clearCallback === 'function') {
        clearCallback()
      }
    }

    // 取消搜索
    const cancelSearch = () => {
      clearValue()
      labelEl.style.display = 'block'
      if (typeof cancelCallback === 'function') {
        cancelCallback()
      }
    }

    // 回车事件
    const handleKeyPress = (e) => {
      const keyCode = e.which || e.keyCode
      const value = e.target.value.trim()
      if (keyCode === 13) {
        inputEl.blur()
        if (typeof enterCallback === 'function') {
          enterCallback(value)
        }
      }
    }

    labelEl.addEventListener('click', showSearch, false)
    inputEl.addEventListener('input', showClose, false)
    closeEl.addEventListener('click', clearValue, false)
    cancelEl.addEventListener('click', cancelSearch, false)
    inputEl.addEventListener('keypress', handleKeyPress, false)
  }

  /**
   * 弹出层
   * @param el 弹窗选择器
   * @param direction 弹出方向，可选值，top，left，right，默认top
   * @param callback 回调。 callback.open 弹出层显示时的回调函数； callback.close 弹出层关闭时的回调函数
   */
  g.popupHandler = function (selector, direction = 'top', callback = {}) {
    const el = document.querySelector(selector)

    if (!el) {
      console.error(
        'Invalid parameter: "selector" must point to a valid DOM element.'
      )
      return
    }

    const isOpen = el.classList.contains('j_isOpenModal')
    const animationClass = `ui_translate_${direction}`
    const openAnimationTimeout = 10
    const closeAnimationTimeout = 300

    if (!isOpen) {
      el.classList.add('j_isOpenModal')
      el.style.display = 'block'

      setTimeout(() => {
        el.classList.remove(animationClass)
        el.classList.add('ui_translate_origin')
      }, openAnimationTimeout)

      if (typeof callback.open === 'function') {
        callback.open()
      }
    } else {
      el.classList.remove('j_isOpenModal')
      el.classList.remove('ui_translate_origin')
      el.classList.add(animationClass)

      setTimeout(() => {
        el.style.display = 'none'
      }, closeAnimationTimeout)

      if (typeof callback.close === 'function') {
        callback.close()
      }
    }
  }

  /**
   * showLoading
   * @param text 提示内容，如果传入参数为close，则关闭loading
   * @param opacity 遮罩透明度
   */
  g.showLoading = function (text = '加载中...', opacity = 0.5) {
    const removeLoading = () => {
      const maskEl = document.getElementById('j_loading_mask')
      if (maskEl && maskEl.parentNode) {
        maskEl.parentNode.removeChild(maskEl)
      }
    }

    removeLoading()

    if (text !== 'close') {
      const el = document.createElement('div')
      el.id = 'j_loading_mask'
      el.className = 'ui_loading_mask'
      el.style.cssText = `background:rgba(0,0,0,${opacity});`

      el.innerHTML = `
      <div class="ui_loading_wrap" id="ui_loading_wrap">
        <div class="ui_loading"><i class="ui_loading_ico"></i></div>
        <div class="ui_loading_text">
          <p>${text}</p>
        </div>
      </div>
    `

      document.body.appendChild(el)
    }
  }

  /**
   * showToast (opts接收一个对象参数）
   * @param type 操作提示类型,文本类型text,警告类型warning,成功类型ok
   * @param text 提示文本内容
   * @param duration 持续多少毫秒退出
   * @param position 所在页面位置
   * @param disableClickBody toast关闭前是否可点击页面，默认可以
   */
  g.showToast = function (opts = {}) {
    const defaultOpts = {
      type: 'ok',
      text: '提示信息',
      position: '',
      duration: 2000,
      disableClickBody: false,
    }

    const options = { ...defaultOpts, ...opts }

    const removeExistingToast = () => {
      const existingToast = document.getElementById('js_ui_toast')
      if (existingToast && existingToast.parentNode) {
        existingToast.parentNode.removeChild(existingToast)
      }
    }

    removeExistingToast()

    const el = document.createElement('div')
    el.id = 'js_ui_toast'
    if (options.disableClickBody) {
      el.className = 'ui_toast_wrap'
    }

    el.innerHTML = `
    <div class="ui_toast toast_${options.position}">
      <div class="ui_toast_inner">
        <span class="ui_toast_ico_wrap">
          <i class="ui_toast_ico ui_toast_${options.type}_ico"></i>
        </span>
        <div class="ui_toast_text">
          <p>${options.text}</p>
        </div>
      </div>
    </div>
  `

    document.body.appendChild(el)
    el.childNodes[0].classList.add('ui_effect_fade')

    setTimeout(() => {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }, options.duration)
  }

  /**
   * showModal模态框  (opts 接收一个对象参数 )
   * @param title 标题
   * @param content 内容
   * @param cancelText 取消按钮的文字
   * @param confirmText 确认按钮的文字
   * @param customClass 自定义class样式
   * @param showCancel 是否显示取消按钮，默认为 true
   * @param cancel {function} 取消按钮的回调函数
   * @param confirm {function}  确定按钮的回调函数
   * @param beforeClose {function}  退出模态框前的回调函数，会暂停关闭。function(btn, done)，btn 的值为'_confirm'或者'_cancel'；done 用于关闭弹窗
   */
  g.showModal = function (opts = {}) {
    const defaultOpts = {
      title: '提示',
      content: '内容',
      cancelText: '取消',
      confirmText: '确认',
      customClass: '',
      showCancel: false,
      beforeClose: null,
      cancel: null,
      confirm: null,
    }

    const options = { ...defaultOpts, ...opts }

    const removeExistingModal = () => {
      const existingModal = document.querySelector('#j_modal_wrap')
      if (existingModal && existingModal.parentNode) {
        existingModal.parentNode.removeChild(existingModal)
      }
    }

    removeExistingModal()

    const modalWrap = document.createElement('div')
    modalWrap.id = 'j_modal_wrap'
    modalWrap.className = 'ui_modal_wrap'

    modalWrap.innerHTML = `
    <div class="ui_modal ${options.customClass}" id="j_modal">
      <div class="ui_modal_hd">${options.title}</div>
      <div class="ui_modal_bd">${options.content}</div>
      <div class="ui_modal_ft" id="js_btns2017">
        ${
          options.showCancel
            ? `<a href="javascript:;" class="ui_modal_btn ui_modal_default_btn" data-btn="_cancel">${options.cancelText}</a>`
            : ''
        }
        <a href="javascript:;" class="ui_modal_btn ui_modal_primary_btn" data-btn="_confirm">${
          options.confirmText
        }</a>
      </div>
    </div>
  `

    document.body.appendChild(modalWrap)

    const modal = document.querySelector('#j_modal')
    setTimeout(() => modal.classList.add('ui_modal_in'), 60)

    let isClosing = false

    const hideModal = () => {
      isClosing = true
      modal.classList.remove('ui_modal_in')
      modal.classList.add('ui_modal_out')

      setTimeout(() => {
        modalWrap.parentNode.removeChild(modalWrap)
        isClosing = false
      }, 200)
    }

    const handleButtonClick = (e) => {
      const btn = e.target.dataset.btn

      if (!btn || isClosing) return

      if (options.beforeClose && typeof options.beforeClose === 'function') {
        options.beforeClose(btn, hideModal)
      } else {
        hideModal()
      }

      if (btn === '_cancel' && typeof options.cancel === 'function') {
        setTimeout(() => options.cancel(), 201)
      }

      if (btn === '_confirm' && typeof options.confirm === 'function') {
        setTimeout(() => options.confirm(), 201)
      }
    }

    const cancelBtn = modal.querySelector('[data-btn="_cancel"]')
    const confirmBtn = modal.querySelector('[data-btn="_confirm"]')

    cancelBtn?.addEventListener('click', handleButtonClick, false)
    confirmBtn?.addEventListener('click', handleButtonClick, false)
  }

  /**
   * 索引列表滑动
   * @param scrollElem 滚动元素的选择器
   */
  g.indexAction = function (scrollElem = '.ui_page_bd') {
    const titleElements = document.querySelectorAll('[data-role="word_index"]')
    const wordList = document.querySelector('[data-role="word_list"]')
    const wordLinks = document.querySelectorAll('[data-role="word_list"] a')
    const wordPopup = document.querySelector('[data-role="word_popup"]')

    if (
      !wordList ||
      !wordPopup ||
      titleElements.length === 0 ||
      wordLinks.length === 0
    ) {
      console.error('Invalid DOM elements: Ensure all required elements exist.')
      return
    }

    const fixedHeightOffset =
      (document.body.clientHeight - wordList.clientHeight) / 2
    const scrollContainer = document.querySelector(scrollElem)

    if (!scrollContainer) {
      console.error(`Scroll element not found: ${scrollElem}`)
      return
    }

    const positions = Array.from(wordLinks).map((link) => ({
      y: link.offsetTop + fixedHeightOffset,
      height: link.clientHeight,
    }))

    let isDragging = false
    let timeoutId = null

    const startEvent = g.isSupportTouch() ? 'touchstart' : 'mousedown'
    const endEvent = g.isSupportTouch() ? 'touchend' : 'mouseup'

    wordLinks.forEach((link, index) => {
      link.addEventListener(startEvent, handleStart, false)
      link.addEventListener('touchmove', handleMove, false)
      link.addEventListener(endEvent, handleEnd, false)
    })

    function handleStart(e) {
      isDragging = true
      const touch = g.isSupportTouch() ? e.changedTouches[0] : e
      const targetHref = e.target.dataset.href

      wordPopup.classList.add('active')
      wordPopup.innerText = targetHref

      const targetElement = document.querySelector(`#${targetHref}`)
      if (targetElement) {
        scrollContainer.scrollTop = targetElement.offsetTop
      }
    }

    function handleMove(e) {
      if (!isDragging) return

      e.preventDefault()
      const touch = g.isSupportTouch() ? e.changedTouches[0] : e
      const currentY = touch.pageY
      const scrollTop = document.body.scrollTop

      for (let i = 0; i < titleElements.length; i++) {
        const { y, height } = positions[i]
        if (y + scrollTop < currentY && currentY < y + height + scrollTop) {
          wordPopup.classList.add('active')
          wordPopup.innerText = titleElements[i].id

          const targetElement = document.querySelector(
            `#${titleElements[i].id}`
          )
          if (targetElement) {
            scrollContainer.scrollTop = targetElement.offsetTop
          }
        }
      }
    }

    function handleEnd() {
      isDragging = false
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        wordPopup.classList.remove('active')
      }, 500)
    }
  }

  /**
   * 水印
   * @param el 将水印挂载到指定html节点上
   * @param name 水印文字
   */
  g.watermark = function (selector, name = '保密') {
    const container = selector
      ? document.querySelector(selector)
      : document.body

    if (!container) {
      console.error(
        'Invalid parameter: "selector" must point to a valid DOM element.'
      )
      return
    }

    const watermarkCount = Math.ceil(container.clientHeight / 20)
    container.style.cssText += 'position:relative;overflow:hidden;'

    for (let i = 0; i < watermarkCount; i++) {
      const top = 19 * i - 40
      const left = `${(i % 5) * 20}%`
      const translateX = '-50%'

      const watermarkDiv = document.createElement('div')
      watermarkDiv.className = 'fixed_watermark'
      watermarkDiv.style.cssText = `
      pointer-events: none;
      position: absolute;
      transform: rotate(-25deg) translateX(${translateX});
      -webkit-transform: rotate(-25deg) translateX(${translateX});
      font-size: 16px;
      color: #bcc7cd;
      opacity: 0.5;
      user-select: none;
      -webkit-user-select: none;
      white-space: nowrap;
      left: ${left};
      top: ${top}px;
    `
      watermarkDiv.innerHTML = name
      container.appendChild(watermarkDiv)
    }
  }

  /**
   * 倒计时
   * @param str 时间字符串
   * @param cb 回调函数
   */
  g.countDown = function (timeStr, cb) {
    if (!timeStr || typeof timeStr !== 'string') {
      console.error('Invalid parameter: "timeStr" must be a valid date string.')
      return
    }

    if (!cb || typeof cb !== 'function') {
      console.error('Invalid parameter: "cb" must be a function.')
      return
    }

    const endTime = new Date(timeStr.replace(/-/g, '/'))
    let intervalId = null

    const formatTime = (value) => (value < 10 ? `0${value}` : `${value}`)

    const updateCountdown = () => {
      const now = new Date()
      if (endTime < now) {
        clearInterval(intervalId)
        cb('')
        return
      }

      const diffInSeconds = Math.floor((endTime - now) / 1000)
      const day = Math.floor(diffInSeconds / (60 * 60 * 24))
      const hour = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60))
      const minute = Math.floor((diffInSeconds % (60 * 60)) / 60)
      const second = diffInSeconds % 60

      const formattedTime = [
        formatTime(day),
        formatTime(hour),
        formatTime(minute),
        formatTime(second),
      ].join('|')

      cb(formattedTime)
    }

    intervalId = setInterval(updateCountdown, 1000)
    updateCountdown() // 立即执行一次以避免延迟
  }
  /**
   * 滚动效果-纵向(Object)
   * @param {String} el 选择器元素
   * @param {Number} height 单次滚动高度
   * @param {Number} size 滚动元素的个数
   * @param {Number} wait 间隔滚动时间，默认2s
   * @return {Function} start 滚动开始函数
   * @return {Function} stop 滚动终止函数
   */
  g.marqueeUp = function (opts = {}) {
    const defaultOpts = {
      wait: 2000,
    }

    const options = { ...defaultOpts, ...opts }

    const { el, height, size, wait } = options
    if (!el) {
      throw new Error(`Missing required parameter: "el"`)
    }
    if (!height) {
      throw new Error(`Missing required parameter: "height"`)
    }
    if (!size) {
      throw new Error(`Missing required parameter: "size"`)
    }
    const marquee = lui.selector(el)

    if (!marquee) {
      throw new Error(`Invalid selector parameter: "el"`)
    }

    const duration = 0.5 // 动画持续时间
    let taskTimer = null
    let currentIndex = 0

    return {
      start: function () {
        taskTimer = setInterval(() => {
          currentIndex++
          if (currentIndex > size) {
            currentIndex = 1
          }

          marquee.style.cssText = `
          transform: translateY(-${height * currentIndex}px);
          transition: all ${duration}s;
        `

          if (currentIndex === size) {
            setTimeout(() => {
              marquee.style.cssText =
                'transform: translateY(0); transition: none;'
            }, duration * 1000)
          }
        }, wait)
      },
      stop: function () {
        clearInterval(taskTimer)
      },
    }
  }

  /**
   * 滚动效果-横向(Object)
   * @param {String} container 滚动容器
   * @param {String} listEl 滚动列表选择器
   * @param {Number} speed 滚动速度，默认60ms
   * @return {Function} start 滚动开始函数
   * @return {Function} stop 滚动终止函数
   */
  g.marquee = function (opts = {}) {
    const defaultOpts = {
      speed: 60,
    }

    const options = { ...defaultOpts, ...opts }

    if (!options.container) {
      throw new Error(`Missing required parameter: "container"`)
    }
    if (!options.listEl) {
      throw new Error(`Missing required parameter: "listEl"`)
    }

    const { container, listEl, speed } = options
    const box = document.querySelector(container)
    const el = document.querySelector(listEl)

    if (!box || !el) {
      throw new Error(`Invalid selector parameter: "box" or "el"`)
    }

    const elClone = el.cloneNode(true)
    elClone.id = `${el.id}-clone-${Date.now()}`
    el.after(elClone)

    let taskTimer = null

    const run = () => {
      if (elClone.offsetWidth - box.scrollLeft <= 0) {
        box.scrollLeft -= el.offsetWidth
      } else {
        box.scrollLeft++
      }
    }

    return {
      start: () => {
        taskTimer = setInterval(run, speed)
      },
      stop: () => {
        clearInterval(taskTimer)
      },
    }
  }

  return g
})
