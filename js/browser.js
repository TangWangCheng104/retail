/**
 * Created by 风行 on 2017/7/14.
 */

var ua = window.navigator.userAgent.toLowerCase();
function is_weixin() {
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}
function is_qq() {
    return ua.match(/QQ/i) == "qq";
}

function is_alipay() {
    return ua.match(/Alipay/i) == "alipay";
}

function is_weibo() {
    return ua.match(/WeiBo/i) == "weibo";
}

/**
 *  是否授权浏览器
 * @returns {*}
 */
function is_auth_browser() {
    //is_weibo() 微博认证暂时未做
    return is_qq() || is_weixin() || (browser.versions.mobile && is_alipay());
}

/**
 * 是否移动设备
 * @returns {*}
 */
function is_mobile() {
    //is_weibo() 微博认证暂时未做
    return browser.versions.mobile && (is_qq() || is_alipay() || is_weixin());
}
