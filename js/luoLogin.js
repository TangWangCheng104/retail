var ua = window.navigator.userAgent.toLowerCase();
$(function(){
    //微信微博
    var browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
//                if (browser.versions.ios) {
//                    console.log("ios");
////                    $('.m-weibo-wechat').hide();
//
//                }
//                if (browser.versions.android) {
////                    $('.m-weibo-wechat').hide();
//                    console.log("android");
//                }
//                if (ua.match(/MicroMessenger/i) == "micromessenger") {
//                    $('.js_comOpen').hide();
//                    $('.js_comOpen').eq(0).show();
//                    console.log("wechat");
//                }
        if(is_weixin()){
            $('.js_comOpen').hide();
            $('.js_comOpen').eq(0).show();
            console.log("wechat");
        }
        if (ua.match(/WeiBo/i) == "weibo") {
            $('.js_comOpen').hide();
            $('.js_comOpen').eq(2).show();
            console.log("weibo");
        }
        if (ua.match(/QQ/i) == "qq") {
            $('.js_comOpen').hide();
            $('.js_comOpen').eq(1).show();
            console.log("qq");
        }
        if(!(ua.match(/QQ/i) == "qq"||ua.match(/WeiBo/i) == "weibo"||ua.match(/MicroMessenger/i) == "micromessenger")){
            $('.js_comOpen').hide();
            $('.js_comOpen').eq(3).show();
        }
    } else {
        //否则就是PC浏览器打开
        $('.js_comOpen').hide();
        $('.js_comOpen').eq(3).show();
        console.log("pc");
    }

});
function is_weixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}