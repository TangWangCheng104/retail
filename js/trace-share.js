/**
 * 跟踪分享
 *
 * @author Huanghs
 * @since 2.0
 * @date 2017/6/9
 */

// 记录分享操作
// 调用流程：
// 1. 设置pgShare.config的属性
// 3. 调用pgShare.call()调用接口
// 4. 调用pgShare.changeUrl()返回新的URL
var pgShare = {

    debug: false,

    // 调用API的参数
    api: {
        url: "/api/share/log",
        method: "POST",
        contentType: "application/json; charset=UTF-8",
        data: {}
    },

    // 记录分享操作所需参数
    config: {
        // 浏览内容的类型
        browseType: NaN,
        // 浏览内容的ID
        browseId: NaN,
        // 是否记录分享
        browseIsLog: false,
        // 如果记录，分享链接的参数key
        shareUrlKey: '',
        // 上级的分享记录ID(谁分享给我)
        parentShareId: '',
        // 分享渠道（如微信）
        channel: NaN,
        // 分享的链接(不包含本次分享ID)
        url: ''
    },

    result: {
        isSuccess: false,   // 接口是否成功
        data: {}            // 接口返回的数据
        // shareId: NaN        // 本次分享记录ID(由接口返回)
    },

    // 准备调用接口需要的参数
    prepare: function () {
        this.api.data = JSON.stringify({
            parentShareId: Number(this.config.parentShareId),  // 上级的分享记录ID
            browseType: Number(this.config.browseType),
            browseId: Number(this.config.browseId),
            channel: Number(this.config.channel),
            url: this.config.url
        });
        this.print(this.api.data);
    },

    // （同步）记录分享操作，并存储分享ID
    call: function () {
        // 参数正确、且没有调用成功过
        if (this.canLog() && !this.result.isSuccess) {
            // 准备接口参数
            this.prepare();
            // 调用接口
            $.ajax({
                type: this.api.method,
                url: this.api.url,
                data: this.api.data,
                contentType: this.api.contentType,
                async: false,       // 同步时，无法设置超时时间
                success: function (data) {
                    pgShare.print(data);
                    // 判断记录分享是否成功
                    pgShare.result.isSuccess = data && data.success;
                    pgShare.result.data = data.result;
                    // 如果已经记录分享操作，存储记录ID(赋值给this.shareId竟然无效?!)
                    // pgShare.result.shareId = result ? data.result : NaN;
                }
            });
        }
    },

    // 判断是否符合记录分享的条件
    canLog: function () {
        try {
            return typeof(this.config.browseId) === "number" && !isNaN(this.config.browseId)
                && typeof(this.config.browseType) !== "undefined" && !isNaN(this.config.browseType)
                && typeof(this.config.browseIsLog) !== "undefined" && Boolean(this.config.browseIsLog)
        } catch (e) {
            if (this.debug) {
                console.log(e);
            }
            return false;
        }
    },

    print: function (data) {
        if (this.debug) {
            console.log(data);
        }
    },

    // 设置或更新 URI 中的参数，调用pgShare.log()后再调用该方法
    changeUrl: function (uri) {
        var newUri = uri;
        if (this.result.isSuccess) {
            for (var urlKey in this.result.data) {
                if (this.result.data.hasOwnProperty(urlKey)) {
                    newUri = this.updateUrl(newUri, urlKey, this.result.data[urlKey]);
                }
            }
        }
        return newUri;
    },

    // 设置或更新 URI 中的参数
    updateUrl: function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    },

    getQueryParam: function (name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        return r != null ? decodeURI(r[2]) : null;
    }
};
