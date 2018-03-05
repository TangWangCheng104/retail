/**
 * Created by Administrator on 2017/11/10.
 */
$(function(){
    //点击获取语音验证码
    var voice_i = 60;
    var timer ;
    $('#procuer-get-voice').click(function(){

        $('.procuer-get-code1').show();
        clearInterval(timer);
        timer = setInterval(function(){
            voice_i--;

            if(voice_i<=0){
                voice_i=60;
                clearInterval(timer)
            }
        },1000);
        if(voice_i>0&&voice_i<60){

            $(".js_collect_text").text("每60秒一次，请稍后再试");
            input_alert();
        }

    });
    /*$(".js_submit").click(function(){//!reg.test($("#password").val())
        if(!$(this).hasClass("disabled")){
            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;
            if($("#verify").val()!="920603") {  //判断验证码不正确时
                $(".js_collect_text").text("验证码过期或错误，请重新获取");
                input_alert();
            }else if(!reg.test($("#password").val()) && $(".js_newUser").css("display")!="none"){  //判断密码是否由英文，数字或 _ 至少两种组成
                $(".js_collect_text").text("密码必须由英文，数字或 _ 至少两种组成");
                input_alert(); //!reg.test($("#password").val())
            }else if($(".js_phone").val()=="15811714179"){      //该用户已经是该店的老板
                $(".js_comBlack").show();
                $(".js_storeSelect_alert").show();
            }
        }
    });*/
    /*这是选择弹出框的种类*/
    $('.auction-class').on("click", ".auction-class-content",function () {
        $(this).addClass("auction-class-content-active").parent().siblings().find(".auction-class-content").removeClass("auction-class-content-active");
    })

    /*图片的宽度和高度，谁小就谁填充铺满*/
    var imgWidth = $("#auction-js-storeImg img").width;
    var imgHeight = $("#auction-js-storeImg img").height;
    if(imgWidth > imgHeight){
//        $("#auction-js-storeImg img").css({"width":"100%","height":"auto","position":"absolute",left:0,right:0,top:0,bottom:0,margin:auto});
        $("#auction-js-storeImg img").css({"width":"100%","height":"auto"});
//        $("#auction-js-storeImg img").css({"top":-$("#auction-js-storeImg img").height,"position":"relative"});
    }
    else {
        $("#auction-js-storeImg img").css({"height":"100%","width":"auto"});

    }



})
/*显示蒙版，显示选择商品数量和款式的弹框*/
function choiseNumberStyle(){
    /*显示蒙版，显示蒙版和款式选择*/
        $('.auction-number-canChoise').click(function(){
            $("#confirmBuying").css({"transition":"all 0.5s","bottom":0});
            //$("#confirmBuying").css({"bottom":0});

            $("#com_black").fadeIn(300);
            var auctionStyle = $(this).find(".auction-style").html()
            console.log(auctionStyle)
            if(!auctionStyle){
                $('.auction-class').hide();
            }else {
                $('.auction-class').show();
            }
        })
    /*点击蒙版关闭蒙版，点击关闭icon关闭蒙版和款式选择*/
    $("#com_black,.js_com_black.buying_close").click(function(){
        $("#confirmBuying").css({transition:"all 0.5s","bottom":"-700px"});
        //$("#confirmBuying").css({"bottom":"-700px"});

        $("#com_black").fadeOut(300);
        $('.js_phoneVerify_alert').fadeOut(300);
    })
}


/*登录的弹出框隐藏*/
function auctionDisplayNone(){
    $("#com_black").fadeOut(300);
    $("#auctionPhoneInput").fadeOut(300);
}
/*登录的弹出框显示*/
function auctionDisplayBlock(){
    $("#com_black").fadeIn(300);
    $("#auctionPhoneInput").fadeIn(300);
}
/*如果商品数量可改，点击就跳出弹出框*/


/*点击减价*/
function auction_sub(auctionAddPriceRange) {
    //购买数量的增减
    $(".js_num_warn").hide();
    $(".js_limit_num_warn").hide();
    var sub = $("#js_num").find(".sub");
    var add = $("#js_num").find(".add");
    var num = $("#js_num").find(".num");
    var txt = num.val();
    txt = parseInt(txt);
    num.val(txt);
    if (txt > 1) {
        var nowPrice = $('#auctionAddPrice').html()
        $('#auctionAddPrice').html(parseInt(nowPrice) - auctionAddPriceRange);
        $("#js_num").children().removeClass("disabled");
        txt--;
    } else {
        sub.addClass("disabled");
        txt = 1;
    }
    num.val(txt);
    var addPrice =  parseInt($('#auctionAddPrice').html());
    var auctionNowPrice = parseInt($("#auctionNowPrice").html());
    $(".auction-total-givePrice").html(addPrice + auctionNowPrice);
}
/*点击加价*/
function auction_add(auctionAddPriceRange) {
    //购买数量的增减
    var sub = $("#js_num").find(".sub");
    var add = $("#js_num").find(".add");
    var num = $("#js_num").find(".num");
    /*var maxNum =  num.attr("max");
    var warnMsg = num.attr("warnMsg");*/
    var maxNum = 10000
    var txt = num.val();
    txt = parseInt(txt);
    num.val(txt);
    if (txt >= 1) {
        if (txt < maxNum) {
            var nowPrice = $('#auctionAddPrice').html()
            $('#auctionAddPrice').html(parseInt(nowPrice) + auctionAddPriceRange);
            txt++;
            $(".js_num_warn").hide();
            $("#js_num").children().removeClass("disabled");
        } else {
            $(".js_num_warn").show();
            $(".js_num_warn").text(warnMsg);
            add.addClass("disabled");
        }
    } else {
        txt = 1;
    }
    num.val(txt);
    /*出的总价 = 增加的价格+当前价*/
    var addPrice =  parseInt($('#auctionAddPrice').html());
    var auctionNowPrice = parseInt($("#auctionNowPrice").html());
    $(".auction-total-givePrice").html(addPrice + auctionNowPrice);
}
/*刷新页面的方法*/
function auctionRefresh(){
    location.reload()
}

//手机号码验证弹窗
var ua = window.navigator.userAgent.toLowerCase();
function phoneAlert() {
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
            $('.js_comBlack').show();
            $('.js_phoneVerify_alert').show();
        }
        if (ua.match(/WeiBo/i) == "weibo") {
            $('.js_comBlack').show();
            $('.js_phoneVerify_alert').show();
        }
        if (ua.match(/QQ/i) == "qq") {
            $('.js_comBlack').show();
            $('.js_phoneVerify_alert').show();
        }
        if(!(ua.match(/QQ/i) == "qq"||ua.match(/WeiBo/i) == "weibo"||ua.match(/MicroMessenger/i) == "micromessenger")){
            //window.location.href=myurl;
            console.log("浏览器");
        }
    } else {
        //否则就是PC浏览器打开
        //window.location.href=myurl;
        console.log("pc");
    }
}
function is_weixin() {
    if(ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    }else {
        return false;
    }
}
function first_Phone() {
    $('.js_comBlack').show();
    $('.js_phoneVerify_alert,#com_black').show();
}
function cancel_phoneAlert() {
    $('body').removeClass('body-position-fixed');
    $('.js_comBlack').hide();
    $('.js_phoneVerify_alert,#com_black').hide();
}


