/**
 * Created by Administrator on 2017/11/25.
 */
$(function(){
    $('.refund-cancel-refund,.cancel-refund').click(function(){
        $('.js-hide-refund').fadeIn(300);
        $('.refund-sure-cancel-refund').fadeIn(300);
    });
    $('.refund-sure-alert').click(function(){
        window.location.reload();
        $('.js-hide-refund').fadeOut(300);
        $('.refund-sure-cancel-refund').fadeOut(300);
    })
    /*背景消失，以及类名为js-hide-refund的弹出框消失*/
    $('.js-hide-refund').click(function(){
        $('.js-hide-refund').fadeOut(300);
        $('.refund-sure-cancel-refund').fadeOut(300);
    })
    /*优惠卷的价格太长之后自动缩小*/
    $('.discount-price').each(function () {
//      console.log(11);
        if( parseFloat( $(this).text() ).toString().length >= 4 && parseFloat( $(this).text() ).toString().length < 6 ){
            $(this).css( {"font-size":"28px"});
            $(this).parent('.discount-money-wrap').css( {"top":".25rem"} );
            $(this).parent('.discount-money-wrap').siblings('.full-money-reduce').css( {"bottom":".25rem"} );
        }else if( parseFloat( $(this).text() ).toString().length >= 6 ){
            $(this).css( {"font-size":"24px"});
            $(this).parent('.discount-money-wrap').css( {"top":".25rem"} );
            $(this).parent('.discount-money-wrap').siblings('.full-money-reduce').css( {"bottom":".3rem"} );
        }
    })
    /*优惠卷的减免价格内容太长之后自动缩小*/
    $('.full-cut-coupons-price').each(function(){
    	console.log( parseFloat( $(this).text() ).toString().length )
	    if( parseFloat( $(this).text() ).toString().length > 4 &&  parseFloat( $(this).text() ).toString().length <= 6 ){
			$(this).css( {"font-size":".7rem","top":".95rem"} )
		}
	    else if( parseFloat( $(this).text() ).toString().length >= 7 ){
			$(this).css( {"font-size":".5rem","top":"1.2rem"} )
	    }
    })
	
})
/*这个是获取元素宽高的方法*/
function getStyleAttr(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}
/*/!*设置not-get的高度*!/
function notGetHeight(){
    console.log(111);
    notGetWidth = parseInt(getStyleAttr($('.not-get')[0],"width"));
    $('.not-get').css('height',notGetWidth * .87 );
    $('.discount-not-get').css('height',notGetWidth * .87 );
    $('.has-discount-right').css('height',notGetWidth * .87 );
}*/
/*放大条形码的按钮*/
function bigger() {
    $('.js_com_black').fadeIn(300);
    $('.discount-bigger-wrap').fadeIn(300);
    $('html,body').addClass('overFlowHide');
}
/*点击隐藏蒙版和蒙版内的东西*/
function jsHide() {
    $('.js-hide-refund').fadeOut(300);
    $('html,body').removeClass('overFlowHide');
}
/*分享给他人的方法*/
function sendOther() {
    $('.js_com_black').fadeIn(300);
    $('.discount-share').fadeIn(300);
    $('html,body').addClass('overFlowHide');
}
/*成功了的弹框方法*/
function discountSuccess() {
    $('.discount-success').fadeIn(300);
    var timer;
    clearInterval(timer);
    setInterval(function () {
        $('.discount-success').fadeOut(300);
    },2000)
}
/*判断输入是否为合法的手机号码*/
function isphone3(inputString)
{
    var partten = /^1[3,4,5,7,8]\d{9}$/;
    var fl=false;
    if(partten.test(inputString))
    {
        //alert('是手机号码');
        return true;
    }
    else
    {
        return false;
        //alert('不是手机号码');
    }
}
/*手机号码位数*/
/*第一个参数为手机号的输入框，第二个参数为获取验证码的按钮，第三个参数为获取验证码后给获取验证码框改变的样式*/
/*phone_verify(this,"get-code-text","get-code-again")*/
function phone_verify(obj,obj1,attr){

    var v = $(obj).val();
    //input_Func(obj);
    len = v.length;
    /*clearTimeout(lt);*/
    if($("."+obj1).val().indexOf('s') == -1 ){
        $("."+obj1).val("获取验证码");
    }

    //只有当手机号码等于十一位的时候才让“获取验证码”显示
    if(len == '11'){

        $("."+obj1).removeClass(attr);
        $("."+obj1).removeAttr("disabled");
    }
    else {
        $("."+obj1).addClass(attr);
        $("."+obj1).attr('disabled',true);
    }
    wait = 60;
    if(len>11){
        v = v.substr(0,11);
        $(obj).val(v);
        len = v.length;
    }else if( len=='11'&&$(".get-code-text").val()=="获取验证码"||$(".get-code-text").val().indexOf("s") == -1){
        /*$(".js_phoneError").text("");*/
        $(obj).attr("aria-invalid", "false");
        //只有当手机号码等于十一位的时候才让“获取验证码”显示
        if(len == '11'){

            $("."+obj1).removeClass(attr);
            $("."+obj1).removeAttr("disabled");

        }
        else {
            $("."+obj1).addClass(attr);
            $("."+obj1).attr('disabled',true);
        }

        //$(".js_getVerify").removeAttr("disabled");
    }else {
        $(obj).attr("aria-invalid", "true");
        $("."+obj1).addClass(attr);
        $("."+obj1).attr('disabled',true);
    }
    //testbtn(obj1,attr);
}
/*第一个参数为手机号的输入框，第二个参数为验证码的输入框，第三个参数为提交按钮*/
//verify_code01(obj,"register-code","click-to-get")
//验证码验证
function verify_code01 (obj,obj1,objBtn) {
    var v = $(obj).val();
    var len = $("." + obj1).val().length;
    len = parseInt(len);
    //input_Func(obj);
    if(len>6){
        v = v.substr(0,6);
        $(obj).val(v);
        len = v.length;
        verifyCodeAddAttr();
    }else if (len < 6) {
        $(obj).attr("aria-invalid", "true");
        //$("#verify-error").text("验证码为6位");
//                $("#verify").parent().find(".error").text("验证码不正确");
    }else {
        /*$("#verify-error").text("");*/
        $(obj).attr("aria-invalid", "false");
    }
    verifyCodeAddAttr();
    function verifyCodeAddAttr(){
        if($('.'+objBtn).hasClass("disabled")){
            $('.'+objBtn).attr('disabled',true);
        }
        else {
            $('.'+objBtn).removeAttr('disabled');
        }
    }
    //testbtn(obj1,attr);
}
/*重新获取*/
var wait = 60;
var lt;
function time(t) {
    clearTimeout(lt);
    if (wait == 0) {
        //t.removeAttribute("disabled");
        $(t).val("重新获取");
        $(".get-code-text").removeClass("get-code-again");
        $(".get-code-text").removeAttr('disabled');
        wait = 60;
    } else {
        //t.setAttribute("disabled", true);
        $(t).val("重新获取(" + wait + "s)");
        $(".get-code-text").addClass("get-code-again");
        $(".get-code-text").attr('disabled',true);
        wait--;
        lt = setTimeout(function () {
            time(t)
        }, 1000)
    }
}
/*第一个参数是点击获取验证吗的按钮，第二个参数是弹出提示框的显示和隐藏，第三个参数是手机号码输入框的类,第四个也是手机输入框的类*/
/*function  getVoiceCode(obj,obj1,obj2,obj3){
    /!*点击显示获取语音验证码*!/
    if($("."+obj3).hasClass(obj2) == false){
        $('.click-to-get').show()
    }
    //点击获取语音验证码
    var voice_i = 60;
    var timer ;
    $(obj).click(function(){

        clearInterval(timer);
        timer = setInterval(function(){
            voice_i--;

            if(voice_i<=0){
                voice_i=60;
                clearInterval(timer)
            }
        },1000);
        if(voice_i>0 && voice_i<60){
            $("."+obj1).text("每60秒一次，请稍后再试");
            $("."+obj1).fadeIn(300);
        }

    });
}*/
/*判断是否全部的输入框都符合要求*/
/*function testbtn(obj1,attr){
    var $errormsg = 0;
    var $input = $(".js_input");
    for (var i = 0; i < $input.length; i++) {
        if ($input.eq(i).attr("aria-invalid") == 'true') {
            $errormsg = 1;
            break;
        }
    }
    if (!$errormsg) {
        console.log("add")
        $("."+obj1).removeClass(attr);
        $("."+obj1).removeAttr('disabled');
//                $(".js_password_alert").fadeIn(500);
//                var t = setTimeout(function () {
//                    $(".js_password_alert").fadeOut(800);
//                }, 800);
    } else {
        $("."+obj1).addClass(attr);
        $("."+obj1).attr('disabled',true);
    }
}*/
