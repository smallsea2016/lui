/**
 * 发送HTTP请求
 *
 * @param options 请求配置对象
 * @param options.method 请求方法，默认为'POST'
 * @param options.url 请求URL
 * @param options.data 请求数据，默认为null
 * @param options.contentType 请求内容类型，默认为'application/x-www-form-urlencoded'
 * @param options.beforeSend 请求发送前的回调函数，默认为返回true的函数
 * @param options.success 请求成功后的回调函数，默认为空函数
 * @param options.error 请求失败后的回调函数，默认为空函数
 * @param options.timeout 请求超时时间，默认为10000毫秒
 * @param options.closeLoading 是否关闭加载状态，默认为false
 */
function request(options) {
    // 参数标准化与默认值处理
    const opts = Object.assign({
        method: 'POST',
        url: '',
        data: null,
        contentType: 'application/x-www-form-urlencoded',
        beforeSend: () => true,
        success: () => {},
        error: () => {},
        timeout: 10000,
        closeLoading: false
    }, options);

    // 方法标准化
    opts.method = opts.method.toUpperCase();

    // 创建XHR对象
    const xhr = new XMLHttpRequest();
    const params = new URLSearchParams();

    // 数据处理
    if (opts.data) {
        if (opts.data instanceof FormData) {
            // FormData处理
            opts.contentType = 'multipart/form-data';
        } else if (typeof opts.data === 'object') {
            // 对象参数处理
            for (const [key, value] of Object.entries(opts.data)) {
                params.append(key, value);
            }
        }
    }

    // 前置拦截器
    if (opts.beforeSend() === false) return;

    // 加载状态管理
    let loadingShown = false;
    const manageLoading = (action) => {
        if (opts.closeLoading) return;
        lui && lui.showLoading && lui.showLoading(action === 'open' ? '' : 'close');
        loadingShown = action === 'open';
    };

    // 请求组装
    let requestUrl = opts.url;
    let requestData = null;

    if (opts.method === 'GET') {
        requestUrl += `?${params}`;
    } else {
        requestData = opts.data instanceof FormData ? opts.data : params;
    }

    // 异步处理
    xhr.open(opts.method, requestUrl, true);

    // 超时设置
    xhr.timeout = opts.timeout;

    // 请求头设置（排除FormData的自动设置）
    if (opts.contentType && !(opts.data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', opts.contentType);
    }

    // 状态处理器
    xhr.onload = () => {
        manageLoading('close');
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
                opts.success(response, xhr);
            } catch (e) {
                opts.error({ type: 'parse_error', error: e }, xhr);
            }
        } else {
            opts.error({ type: 'http_error', status: xhr.status }, xhr);
        }
    };

    // 错误处理
    xhr.onerror = () => {
        manageLoading('close');
        opts.error({ type: 'network_error' }, xhr);
    };

    // 超时处理
    xhr.ontimeout = () => {
        manageLoading('close');
        opts.error({ type: 'timeout' }, xhr);
    };

    // 显示加载状态
    manageLoading('open');

    // 发送请求
    try {
        xhr.send(requestData);
    } catch (e) {
        manageLoading('close');
        opts.error({ type: 'send_error', error: e }, xhr);
    }
}
