/**
 * Created by Administrator on 2016/11/30.
 */
$(function () {
    // alert(1)
    //点击购买会出现选择款式，数量的弹窗
    $(".js_com_black").click(function () {
        $('body').removeClass('body-position-fixed');
        $(".js_com_black").fadeOut();
        $(".js_hide_com").fadeOut();
        $('.vertical-center').fadeOut();
        $("#confirmBuying").animate({bottom: "-700px"});
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    });

    //选择款式和数量
    $(".js_buying_btn").click(function (e) {
        $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
        var index = $(this).attr("index");
        $(".js_com_black").fadeIn();
        $("#confirmBuying").show();
        if($(this).text()=="让TA付"){
            $("#confirmBuying").attr({"daifu":"1"});
        }else {
            $("#confirmBuying").attr({"daifu":"0"});
        }
        $("#confirmBuying").animate({bottom: "0px"});
        $(".js_comfirm_buy").click(function () {
            $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
            var style_selected = $(".js_style .selected").text();
            var num = $("#js_num").find(".num").val();
            var show_msg = "“" + style_selected + "”" + "," + "“" + num + "”";
            $(".js_com_black").fadeOut();
            $("#confirmBuying").animate({bottom: "-700px"});
            $(".js_buying_btn").eq(index).find("span").html(show_msg);
            var t = 0;
            $(".js_buying_btn").each(function (i) {
                var txt = $(".js_buying_btn").eq(0).find("span").text();
                var txt01 = $(".js_buying_btn").eq(1).find("span").text();
                if (txt.indexOf("请选择款式和数量") == -1 && txt01.indexOf("请选择款式和数量") == -1) {
                    t++;
                }else {
                    t = 0;
                }
                if (t != 0) {
                    $(".js_topay").addClass("bgcolor-zby");
                } else {
                    $(".js_topay").removeClass("bgcolor-zby");
                }
            });
        })
    });

    ////收藏事件
    //$(".js_myCollect").click(function(){
    //    var txt = $(this).text();
    //    txt = $.trim(txt);
    //    $(".js_collect_alert").fadeIn(500);
    //    if(txt=="收藏"){
    //        $(".js_collect_text").text("收藏成功");
    //        $(this).text("取消收藏");
    //    }else if(txt=="取消收藏"){
    //        $(".js_collect_text").text("已取消收藏");
    //        $(this).text("收藏");
    //    }
    //    var t = setTimeout(function(){
    //        $(".js_collect_alert").fadeOut(500);
    //    },800);
    //});
    //收藏列表中都是已收藏的商品，当取消收藏商品时，该商品就不在商品列表中
    ////取消收藏时移除收藏的商品
    //$(".js_cancelCollect").click(function () {
    //    $(".js_com_black").show();
    //    $(".js_collectWarning").show();
    //    var bb = $(this).parents(".js_com_model");
    //    $(".js_sure_delete").click(function () {
    //        $(".js_com_black").hide();
    //        $(".js_hide_com").hide();
    //        $(".js_collectWarning").hide();
    //        bb.remove();
    //    });
    //});
    //取消，关闭按钮时将谈窗隐藏
    $(".js_close").click(function () {
        $(".js_com_black").fadeOut(300);
        $(".js_hide_com").fadeOut(300);
        $(".js_collectWarning").fadeOut(300);
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    });
    //确定按钮
    $(".js_sure").click(function () {
        if ($(".js_phone .error").text() == "") {
            $(".js_com_black").hide();
            $(".js_hide_com").hide();
        }
    });
    //缺货提醒
    $(".js_stockoutBtn").click(function () {
        $(".js_com_black").show();
        $(".js_stockoutInform").show();
    });

    //15分钟倒计时
    //timer(intDiff);
    ////算保证金
    //var acount = $(".js_acount").text();
    //acount = acount.substring(1);
    //acount = parseInt(acount);
    //var ratio = $(".js_ratio").text();
    //ratio = ratio.substring(-1);
    //ratio = parseInt(ratio);
    //var deposit = (acount * ratio)/100;
    //deposit = "￥" + deposit;
    //$(".js_deposit").text(deposit);
    //商品列表菜单切换
    $(".js_menu").click(function () {
        $(".js_menu").removeClass("current");
        $(this).toggleClass("current");
    });
    //分类菜单选择
    $(".js_sort_item").click(function () {
        $(".js_sort_item").removeClass("selected top bottom");
        $(this).addClass("selected");
        $(this).prev().addClass("top");
        $(this).next().addClass("bottom");
    });
    //点击分类小图标
    $(".js_sort_icon").click(function () {
        $(".js_black_sort").fadeToggle();
        $(".js_sort_alert").slideToggle();
        //if(!$(this).hasClass("selected")){
        //    $(this).addClass("selected");
        //    $(".js_black_sort").fadeIn();
        //    $(".js_sort_alert").slideDown();
        //}else {
        //    $(this).removeClass("selected");
        //    $(".js_black_sort").fadeOut();
        //    $(".js_sort_alert").slideUp();
        //}
    });
    $(".js_black_sort").click(function () {
        $(".js_black_sort").fadeToggle();
        $(".js_sort_alert").slideToggle();
    });
    //搜索框事件
    $(".js_search").focus(function () {
        var txt = $(this).val();
        $(".js_close_txt").show();
        $(".js_sort_alert").slideToggle();
        $(".js_search_record").show();
        $(".js_sort-cancel").show();
    });
    $(".js_search").blur(function () {
        var txt = $(".js_search").val();
        if (txt.length != 0) {
            $(".js_close_txt").show();
        } else {
            $(".js_close_txt").hide();
        }
    });
    $(".js_close_txt").click(function () {
        $(this).parent().find(".js_search").val("");
    });

    //拼单规则弹窗
    $(".js_rule_btn").click(function(){
        $(".js_com_black").show();
        $(".js_pingdan_alert").show();
        $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
    });
    /*点击弹出二维码的遮罩层*/
    $('.wx-code-wrap').click(function () {
        $('#com_black').fadeIn(300);
        $('.js_code').fadeIn(300);
    })
    ////点击更多时延期收货显示
    //$(".js_delay_more").on("click",function(){
    //    $(".js_delay_btn").toggleClass("show");
    //})

});
//点击更多时延期收货显示
function delay_more(obj){
    $(obj).find(".js_delay_btn").toggleClass("show");
}
var m;
function style_select(obj, max, price,warnMsg) {
	console.log(111)
	if(max <= 0){
		return;
	}
    //选择款式
    var style = $("#js_style").find("span");
    m = max;
    var num = $("#js_num").find(".num");
	num.attr("max",max);
	num.attr("warnMsg",warnMsg);
    if (num.val() > max) {
        num.val(max);
    }
    if (m != 0) {
		$(".js_limit_num_warn").hide();
		$(".js_num_warn").hide();
		$("#js_num").children().removeClass("disabled");
        style.removeClass("selected");
        $(obj).addClass("selected");
        $("#js_price").text("￥" + price);
		// 选择的化款式图
		var styleImg = $(obj).attr("styleImg");
		$(".js_storeImg").find("img").attr("src", styleImg);
        //设置款式图片大小
        $(".js_storeImg img").on("load",function(){
            setImgSize(0,'.js_storeImg');
        });
	}
}
//设置款式图片大小
var setImgSize = function(i,sizeImg){
    var storeImgW = $(sizeImg).find("img").eq(i).width();
    var storeImgH = $(sizeImg).find("img").eq(i).height();
    if(storeImgW<storeImgH){
        $(sizeImg).eq(i).find("img").css({
            width:"100%",
            height:"auto"
        });
    }else {
        $(sizeImg).eq(i).find("img").css({
            width:"auto",
            height:"100%"
        });
    }
};
//点击购买会出现选择款式，数量的弹窗
function choiseShopStyleNumHide() {
    $('body').removeClass('body-position-fixed');
    $(".js_com_black").fadeOut();
    $(".js_hide_com").fadeOut();
    $('.vertical-center').fadeOut();
    $("#confirmBuying").animate({bottom: "-700px"});
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}

//选择款式和数量
function choiseShopStyleNumShow() {

    alert('引入choiseShopStyleNumShow')
    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
    var index = $(this).attr("index");
    $(".js_com_black").fadeIn();
    $("#confirmBuying").show();
    if($(this).text()=="让TA付"){
        $("#confirmBuying").attr({"daifu":"1"});
    }else {
        $("#confirmBuying").attr({"daifu":"0"});
    }
    $("#confirmBuying").css({bottom: "0px"});
    $(".js_comfirm_buy").click(function () {
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
        var style_selected = $(".js_style .selected").text();
        var num = $("#js_num").find(".num").val();
        var show_msg = "“" + style_selected + "”" + "," + "“" + num + "”";
        $(".js_com_black").fadeOut();
        $("#confirmBuying").animate({bottom: "-700px"});
        $(".js_buying_btn").eq(index).find("span").html(show_msg);
        var t = 0;
        $(".js_buying_btn").each(function (i) {
            var txt = $(".js_buying_btn").eq(0).find("span").text();
            var txt01 = $(".js_buying_btn").eq(1).find("span").text();
            if (txt.indexOf("请选择款式和数量") == -1 && txt01.indexOf("请选择款式和数量") == -1) {
                t++;
            }else {
                t = 0;
            }
            if (t != 0) {
                $(".js_topay").addClass("bgcolor-zby");
            } else {
                $(".js_topay").removeClass("bgcolor-zby");
            }
        });
    });
}

//    购买数量事件
function num_keyup() {
	//购买数量的增减
	var sub = $("#js_num").find(".sub");
	var add = $("#js_num").find(".add");
	var num = $("#js_num").find(".num");
	var maxNum =  num.attr("max");
	var warnMsg = num.attr("warnMsg");
	var txt = num.val();
	txt = parseInt(txt);
	num.val(txt);
	$("#js_num").children().removeClass("disabled");
	if (txt >= 0) {
		$(".js_num_warn").hide();
		if (txt > maxNum) {
			num.val(maxNum);
			$(".js_num_warn").show();
			$(".js_num_warn").text(warnMsg);
			add.addClass("disabled");
		} else {
			num.val(txt);
			$(".js_num_warn").hide();
		}
	} else {
		num.val(1);
	}
}
function sub_click() {
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
        $("#js_num").children().removeClass("disabled");
        txt--;
    } else {
        sub.addClass("disabled");
        txt = 1;
    }
    num.val(txt);
}

function add_click() {
	//购买数量的增减
	var sub = $("#js_num").find(".sub");
	var add = $("#js_num").find(".add");
	var num = $("#js_num").find(".num");
	var maxNum =  num.attr("max");
	var warnMsg = num.attr("warnMsg");
	var txt = num.val();
	txt = parseInt(txt);
	num.val(txt);
	if (txt >= 1) {
		if (txt < maxNum) {
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
}

////15分钟倒计时
//var intDiff = parseInt(60 * 15 - 1);//倒计时总秒数量
function timer(intDiff, i) {
    var t0 = window.setInterval(function () {
        //console.log(intDiff);
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0,//时间默认值
            ms = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (10 * 60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60 * 10) - (day * 24));
            minute = Math.floor(intDiff / (60*10) - (day * 24 * 60) - (hour * 60));
            second = Math.floor(intDiff / 10 - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));
            ms = Math.floor(intDiff - (day * 24 * 60 * 60*10) - (hour * 60 * 60*10) - (minute * 60*10)-(second * 10));
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
        $(".js_timer").eq(i).find(".js_day_show").html('<s></s>' + day);
        $(".js_timer").eq(i).find(".js_hour_show").html('<s></s>' + hour);
        $(".js_timer").eq(i).find(".js_minute_show").html('<s></s>' + minute);
        $(".js_timer").eq(i).find(".js_second_show").html('<s></s>' + second);
        $(".js_timer").eq(i).find(".js_ms_show").html('<s></s>' + ms);
        //倒计时结束后，订单失效
        if (intDiff <= 0) {
            $("#topay").addClass("disabled");
            $("#js_paystatus").text("订单失效");
            $(".js_timer_text").eq(i).html("支付超时");
            clearInterval(t0);
        }
        intDiff--;
    }, 100);
}
function timer01(intDiff01) {
    var t0 = window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0,//时间默认值
            ms = 0;
        if (intDiff01 > 0) {
            day = Math.floor(intDiff01 / (60 * 60 * 24));
            hour = Math.floor((intDiff01 / (60 * 60)) - (day * 24));
            minute = Math.floor((intDiff01 / 60) - (day * 24 * 60) - (hour * 60));
            second = Math.floor(intDiff01 - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));
            ms = Math.floor(intDiff01) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)-(second * 1000);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        if (ms <= 9) ms = '0' + ms;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
        $("#js_timer").find(".js_day_show").html(day);
        $("#js_timer").find(".js_hour_show").html(hour);
        $("#js_timer").find(".js_minute_show").html(minute);
        $("#js_timer").find(".js_second_show").html(second);
        $("#js_timer").find(".js_ms_show").html(ms);
        //倒计时结束后，订单失效
        if (intDiff01 <= 0) {
            $("#topay").addClass("disabled");
            $("#js_paystatus").text("订单失效")
        }
        intDiff01--;
    }, 1000);
}
function timer02(intDiff01,j) {
    if(j){
        var t0 = window.setInterval(function () {
            //console.log(intDiff01);
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0;//时间默认值
            if (intDiff01 > 0) {
                //console.log(0);
                day = Math.floor(intDiff01 / (60 * 60 * 24));
                hour = Math.floor((intDiff01 / (60 * 60)) - (day * 24));
                minute = Math.floor((intDiff01 / 60) - (day * 24 * 60) - (hour * 60));
                second = Math.floor(intDiff01 - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));
                ms = Math.floor(intDiff01) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)-(second * 1000);
            }
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            if (ms <= 9) ms = '0' + ms;
            //$('#'+ day_show).html(day + "天");
            //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
            $("#js_timer").find(".js_day_show").html(day);
            $("#js_timer").find(".js_hour_show").html(hour);
            $("#js_timer").find(".js_minute_show").html(minute);
            $("#js_timer").find(".js_second_show").html(second);
            $("#js_timer").find(".js_ms_show").html(ms);
            //倒计时结束后，订单失效
            if (intDiff01 <= 0) {
                $("#topay").addClass("disabled");
                $("#js_paystatus").text("订单失效");
                $("#js_timer").find(".js_minute_show").attr("intDiff01","0");
                clearInterval(t0);
            }
            intDiff01--;
        }, 1000);
    }
}
//收货期限倒计时
function timerSH(intDiff, i) {
    var t0 = window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60) - (day * 24));
            minute = Math.floor(intDiff/60 - (day * 24 * 60) - (hour * 60));
        }
        if (minute <= 9) minute = '0' + minute;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
        $(".js_timerSh").eq(i).find(".js_day_show").text(day);
        $(".js_timerSh").eq(i).find(".js_hour_show").text(hour);
        $(".js_timerSh").eq(i).find(".js_minute_show").text(minute);
        intDiff--;
        if(intDiff==0){
            console.log("时间结束");
        }
    }, 1000);
}
//提示窗弹窗
function browserAlert(){
    $(".js_browser").show();
    $(".js_com_black").show();
    //$('.suppliers-not-alert').hide();
}
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
//当弹窗出现时input 聚焦focus时
function focusAlert(){
    if (browser.versions.mobile){
        if (browser.versions.android) {
            $("#confirmBuying").addClass("input-focus");
        }
    }else {
        $("#confirmBuying").removeClass("input-focus");
    }

}
//当弹窗出现时input 聚焦focus时
function blurAlert(){
    $("#confirmBuying").removeClass("input-focus");
}

//安卓机隐藏键盘，让input失去光标
var timer01, windowInnerHeight;
function eventCheck(e) {
    if (e) { //blur,focus事件触发的
        //alert(2);
        //$('#dv').html('android键盘' + (e.type == 'focus' ? '弹出' : '隐藏') + '--通过' + e.type + '事件');
        if (e.type == 'keyup'||e.type == 'click') {//如果是点击事件启动计时器监控是否点击了键盘上的隐藏键盘按钮，没有点击这个按钮的事件可用，keydown中也获取不到keyCode值
            setTimeout(function () {//由于键盘弹出是有动画效果的，要获取完全弹出的窗口高度，使用了计时器
                windowInnerHeight = window.innerHeight;//获取弹出android软键盘后的窗口高度
                timer01= setInterval(function () { eventCheck() }, 100);
            }, 500);
        }
        else clearInterval(timer01);
    }
    else { //计时器执行的，需要判断窗口可视高度，如果改变说明android键盘隐藏了
        if (window.innerHeight > windowInnerHeight) {
            clearInterval(timer01);
            //alert(3);
            //$('#dv').html('android键盘隐藏--通过点击键盘隐藏按钮');
        }
    }
}

//延期收货确认弹窗
//function delayAlert(obj){
//    $(".js_com_black").show();
//    $(".js_delay_alert").show();
//    $(obj).attr("myclick","1");
//    //$('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
//}

//申请退款确认弹窗
function refundAlert(){
    $(".js_com_black").show();
    $(".js_refund_alert").show();
}

//隐藏弹窗
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_com_black").hide();
    $(".js_hide_com").hide();
    $(".js_delay_btn").attr("myclick","0");
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
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
    $('.js_phoneVerify_alert').show();
}
function cancel_phoneAlert() {
    $('body').removeClass('body-position-fixed');
    $('.js_comBlack').hide();
    $('.js_hide_com').hide();
    $('.js_phoneVerify_alert').hide();
}
/*拼单接龙*/

/*定单的按钮*/
var honeySwitch = {};
honeySwitch.themeColor = "rgb(100, 189, 99)";
honeySwitch.init = function() {
    var s = "<span class='slider'></span>";
    $("[class^=switch]").append(s);
    $("[class^=switch]").click(function() {
        if ($(this).hasClass("switch-disabled")) {
            return;
        }
        if ($(this).hasClass("switch-on")) {
            $(this).removeClass("switch-on").addClass("switch-off");
            $(".switch-off").css({
                'border-color' : '#dfdfdf',
                'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
                'background-color' : 'rgb(255, 255, 255)'
            });
        } else {
            $(this).removeClass("switch-off").addClass("switch-on");
            if (honeySwitch.themeColor) {
                var c = honeySwitch.themeColor;
                $(this).css({
                    'border-color' : c,
                    'box-shadow' : c + ' 0px 0px 0px 16px inset',
                    'background-color' : c
                });
            }
            if ($(this).attr('themeColor')) {
                var c2 = $(this).attr('themeColor');
                $(this).css({
                    'border-color' : c2,
                    'box-shadow' : c2 + ' 0px 0px 0px 16px inset',
                    'background-color' : c2
                });
            }
        }
    });
    window.switchEvent = function(ele, on, off) {
        $(ele).click(function() {
            if ($(this).hasClass("switch-disabled")) {
                return;
            }
            if ($(this).hasClass('switch-on')) {
                if ( typeof on == 'function') {
                    on();
                }
            } else {
                if ( typeof off == 'function') {
                    off();
                }
            }
        });
    }
    if (this.themeColor) {
        var c = this.themeColor;
        $(".switch-on").css({
            'border-color' : c,
            'box-shadow' : c + ' 0px 0px 0px 16px inset',
            'background-color' : c
        });
        $(".switch-off").css({
            'border-color' : '#dfdfdf',
            'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
            'background-color' : 'rgb(255, 255, 255)'
        });
    }
    if ($('[themeColor]').length > 0) {
        $('[themeColor]').each(function() {
            var c = $(this).attr('themeColor') || honeySwitch.themeColor;
            if ($(this).hasClass("switch-on")) {
                $(this).css({
                    'border-color' : c,
                    'box-shadow' : c + ' 0px 0px 0px 16px inset',
                    'background-color' : c
                });
            } else {
                $(".switch-off").css({
                    'border-color' : '#dfdfdf',
                    'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
                    'background-color' : 'rgb(255, 255, 255)'
                });
            }
        });
    }
};
honeySwitch.showOn = function(ele) {
    $(ele).removeClass("switch-off").addClass("switch-on");
    if(honeySwitch.themeColor){
        var c = honeySwitch.themeColor;
        $(ele).css({
            'border-color' : c,
            'box-shadow' : c + ' 0px 0px 0px 16px inset',
            'background-color' : c
        });
    }
    if ($(ele).attr('themeColor')) {
        var c2 = $(ele).attr('themeColor');
        $(ele).css({
            'border-color' : c2,
            'box-shadow' : c2 + ' 0px 0px 0px 16px inset',
            'background-color' : c2
        });
    }
}
honeySwitch.showOff = function(ele) {
    $(ele).removeClass("switch-on").addClass("switch-off");
    $(".switch-off").css({
        'border-color' : '#dfdfdf',
        'box-shadow' : 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
        'background-color' : 'rgb(255, 255, 255)'
    });
};

/*bootstrap的轮播图懒加载前面部分*/
function lazyContainer(searchNode) {
    $(searchNode).find('.active').find('.swiperlazy').each(function() {
        var imgSrc = $(this).attr('data-src');
        var nextImgSrc = $(this).parent().next('.item').find('.swiperlazy').attr('data-src');
        var next2ImgSrc = $(this).parent().next('.item').next('.item').find('.swiperlazy').attr('data-src');
        /*需要加载的图片地址*/
        $(this).attr('src',imgSrc);
        $(this).parent().next('.item').find('.swiperlazy').attr('src',nextImgSrc);
        $(this).parent().next('.item').next('.item').find('.swiperlazy').attr('src',next2ImgSrc);
        /*删除图片的自定义属性*/
        $(this).removeAttr('data-src');
         $(this).parent().next('.item').find('.swiperlazy').removeAttr('data-src',nextImgSrc);
         $(this).parent().next('.item').next('.item').find('.swiperlazy').removeAttr('data-src',next2ImgSrc);
    });
}

/*bootstrap轮播图懒加载*/
function bootstapLazy() {
    /*bootstrep的懒加载*/
    $('#banner').bind('slid.bs.carousel',function() {
        lazyContainer('#banner');
    });
    $('.black-banner-wrap').bind('slid.bs.carousel',function() {
        lazyContainer('.black-banner-wrap');
    });

    lazyContainer('#banner');
    lazyContainer('.black-banner-wrap');
    // lazyContainer('#bigSlideShow','.active');
}
function myLazy() {
    /*第一屏幕之后的懒加载的方法*/
    $("img.lazy").lazyload({
        skip_invisible : false,
        effect: "fadeIn",/*出现方式，淡入淡出*/
        threshold: 100/*离顶部还有100px时开始加载*/
    });
    /*第一屏的懒加载*/
    var Height = document.documentElement.clientHeight;
    $("img.lazy").each(function () {
        if( $(this).offset().top < Height + 100 ){
            var Imgsrc = $(this).attr("data-original");
            $(this).attr('src',Imgsrc);
            $(this).removeClass("bgcolor-white");
            /*删除attr("data-original")*/
            $(this).attr("data-original");
        };
    });
    /*点击购买按钮之后滑动上来的款式和数量选择的弹出框的懒加载*/
    $("#js_buying").click(function () {
        $("img.lazy").each(function () {
            var Imgsrc = $(this).attr("data-original");
            $(this).attr('src', Imgsrc);
            $(this).removeClass("bgcolor-white");
            /*删除attr("data-original")*/
            $(this).attr("data-original");
        })
    })
}
/*点击荣誉榜和进阶榜进行懒加载*/
function lazyHonor() {
    $("#kandianAdvanceList").find('.lazy').each(function() {
        var imgSrc = $(this).attr('data-original');
        /*需要加载的图片地址*/
        $(this).attr('src',imgSrc);
        $(this).removeClass("bgcolor-white");
        $(this).removeAttr('data-original');
    });
    $("#intoHonorList").find('.lazy').each(function() {
        var imgSrc = $(this).attr('data-original');
        /*需要加载的图片地址*/
        $(this).attr('src',imgSrc);
        $(this).removeClass("bgcolor-white");
        $(this).removeAttr('data-original');

    });
}
/*新年活动的banner图函数*/
function newYearBanner( oheight ){
	
	var screenHeight = parseInt( window.innerHeight );
	var obj = { "scrollBegin":0 }
	$(window).scroll(function(e){
	  	var navWrapTop = parseInt( $(document).scrollTop() );
	  	
	  	if( screenHeight < navWrapTop){
	
	  		/*$(".new-year-nav-wrap").css({"top":- 2 * oheight,"transition":"all 0.3s"})
	  		document.addEventListener("touchstart",function(e){
	  			obj.start = e.touches[0].pageY;
	      	})
	        document.addEventListener("touchmove",function(e){
	  			obj.end = e.touches[0].pageY;
	      	})*/
	      	
	        document.addEventListener("touchend",function touchEnd(e){
	  			
	  			if( obj.scrollBegin > navWrapTop ){
	  				$(".new-year-nav-wrap").css({"top":0,"transition":"all 0.3s"})
	      		}
	      		else{
	  				$(".new-year-nav-wrap").css({"top":- 2 * oheight,"transition":"all 0.3s"})
	  			}
	      		obj.scrollBegin = navWrapTop;
	  			/*if( obj.start - obj.end < 0 ){
	  				$(".new-year-nav-wrap").css({"top":0,"transition":"all 0.3s"})
	  			}
	  			else{
	  				$(".new-year-nav-wrap").css({"top":- 2 * oheight,"transition":"all 0.3s"})
	  			}*/
	      	})
	  	}
	  	else{
	  		$(".new-year-nav-wrap").css({"top":0,"transition":"all 0.3s"})
	  		
	  	}
	})
}
