/**
 * Created by Administrator on 2017/7/3.
 */
//页面滚动到900px时 回到顶部按钮显示，否则隐藏
$(window).scroll(function (){
    if ($(window).scrollTop()>900) {
        //code........
        $(".js_return-top").show();
    }else {
        $(".js_return-top").hide();
    }
});
$(function(){
    $(".js_return-top").on('click',function(){
        //$(window).scrollTop(0);
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});

function select_Fun(myclass,obj){
    $(myclass).removeClass("active");
    $(obj).addClass("active");
}

//代付手机号码验证弹窗
function phone_alert(){
    $(".js_comBlack").show();
    $(".js_phoneVerify_alert").show();
}
//代付手机号码验证弹窗end

//点击发给TA变成不可编辑状态
function noEditor (){
    $(".js_mywords_item").addClass("disabled");
    $(".js_mywords_msg").attr("readonly","");
    kd_share();
}
//点击发给TA变成不可编辑状态end
//发朋友圈提示分享
function kd_share(){
    $(".js_com_black").fadeIn(1000);
    $(".js_daifu_share").fadeIn(1000);
    //$(".js_collect_alert").fadeIn(500);
    var t = setTimeout(function(){
        //console.log(2);
        $(".js_com_black").fadeOut(1000);
        $(".js_daifu_share").fadeOut(1000);
        //$(".js_collect_alert").fadeOut(500);
    },2000);
    //$(".js_comBlack").show();
    //$(".js_kandan_share").show();
    //$('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
}

//把数字小数点后多余的0去掉
function price_format(){
    for(var i = 0;i<$(".js_price_zero").length;i++){
        var price = $(".js_price_zero").eq(i).text();
        price = parseFloat(price);
        $(".js_price_zero").eq(i).text(price);
    }
}