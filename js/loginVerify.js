/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){
    $('.com_black').attr("disable",true);
    $(".js_closeBtn").click(function(){
        $(this).parent().parent().find("input").val("");
        $(this).parent().parent().find('.js_input').val("");
        $(this).parent().parent().find("input").attr("aria-invalid", "true");
        $(this).parent().parent().find(".js_input").attr("aria-invalid", "true");
        $(this).hide();
        $(".js_mySubmit").addClass("disabled");
        $(this).parents(".js_item_edit").find(".js_mySubmit").addClass("disabled");
        $(".js_submit").addClass("disabled");
    });
    getVoiceCode();
});
function  getVoiceCode(){
    /*点击显示获取语音验证码*/
    $(".js_getVerify").click(function(){
        if($(".js_getVerify").hasClass("disabled") == false){
            $('.js_procuer_getCode').show()
        }
    });
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
}
//手机验证
function phone_verify(obj){

    var v = $(obj).val();
    //input_Func(obj);
    len = v.length;
    clearTimeout(lt);
    $(".js_getVerify").val("获取验证码");
    //只有当手机号码等于十一位的时候才让“获取验证码”显示
    if(len == '11'){
        $(".js_getVerify").removeClass("disabled");
    }
    else {
        $(".js_getVerify").addClass("disabled");
    }
    wait = 60;
    if(len>11){
        v = v.substr(0,11);
        $(obj).val(v);
        len = v.length;
    }else if( len=='11'&&$(".js_getVerify").val()=="获取验证码"||$(".js_getVerify").val().indexOf("s") == -1){
        $(".js_phoneError").text("");
        $(obj).attr("aria-invalid", "false");
        //只有当手机号码等于十一位的时候才让“获取验证码”显示
        if(len == '11'){
            $(".js_getVerify").removeClass("disabled");
        }
        else {
            $(".js_getVerify").addClass("disabled");
        }

        //$(".js_getVerify").removeAttr("disabled");
    }else {
        $(obj).attr("aria-invalid", "true");
        $(".js_getVerify").addClass("disabled");
        //$(".js_getVerify").attr("disabled","disabled");
    }
    testbtn();
}
//手机验证,无验证码时
function phone_verify01(obj){
    var v = $(obj).val();
    input_Func(obj);
    len = v.length;
    if(len>11){
        v = v.substr(0,11);
        $(obj).val(v);
        len = v.length;
    }if( len=='11'){
        $(".js_phoneError").text("");
        $(obj).attr("aria-invalid", "false");
    }else {
        $(obj).attr("aria-invalid", "true");
    }
    testbtn02(obj)
}
//输入框超过k个字就不再输入，英文数字是0.5个字
function length_verify(obj,k){
    var v = $(obj).val();
    input_Func(obj);
    get_length(v);

    var len = v.length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;//英文，数字或 _ 至少两种组成
    if (char_length > 0) {
        if (char_length >= k) {
            //v = v.substr(0,13);
            var str = cut_str(v, k);
            $(obj).val(str);
        }
    }
    if (browser.versions.android) {
        $(".js_phoneVerify_alert").addClass('position_absolute');
    }else {
        $(".js_phoneVerify_alert").removeClass('position_absolute');
    }
}
function blurPOS(){
    $(".js_phoneVerify_alert").removeClass('position_absolute');
}
//手机号码验证弹窗
var ua = window.navigator.userAgent.toLowerCase();
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
//验证码验证
function verify_code01 (obj) {
    var v = $(obj).val();
    var len = $("#verify").val().length;
    len = parseInt(len);
    input_Func(obj);
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
        $("#verify-error").text("");
        $(obj).attr("aria-invalid", "false");
    }
    verifyCodeAddAttr();
    function verifyCodeAddAttr(){
        if($('.js_submit.partner-submitBtn').hasClass("disabled")){
            $('.js_submit.partner-submitBtn').attr('disabled',true);
        }
        else {
            $('.js_submit.partner-submitBtn').removeAttr('disabled');
        }
    }

    testbtn();
}
//密码验证
function password_verify (obj) {
    input_Func(obj);
    var v = $(obj).val();
    var len = $("#password").val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;
    len = parseInt(len);
    if(len>=20){
        v = v.substr(0,20);
        $(obj).val(v);
        len = v.length;
    }else if (len < 6) {
//                $("#password").parent().find(".error").text("密码必须为6-20位");
        $(obj).attr("aria-invalid", "true");
    }else {
        $(obj).attr("aria-invalid", "false");
    }
    testbtn();
}

//姓名验证
function name_verify (obj) {
    var v = $(obj).val();
    input_Func(obj);
    get_length(v);
    var len = $(obj).val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;//英文，数字或 _ 至少两种组成
    if (char_length > 0) {
        /*名字长度做限制
        if(char_length >= 8){
            //v = v.substr(0,13);
            var str = cut_str(v, 8);
            $(obj).val(str);
        }*/

        //名字长度不做限制
        $(obj).val(v);

        $(obj).attr("aria-invalid", "false");
    }else {
        $(obj).attr("aria-invalid", "true");
    }
    testbtn();
    testbtn02(obj)
}
//店名验证
function storeName_verify (obj) {
    var v = $(obj).val();
    input_Func(obj);
    get_length(v);
    var len = $(obj).val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;//英文，数字或 _ 至少两种组成
    if (char_length > 0) {
        if(char_length >= 10){
            //v = v.substr(0,13);
            var str = cut_str(v, 10);
            $(obj).val(str);
        }
        $(obj).attr("aria-invalid", "false");
    }else {
        $(obj).attr("aria-invalid", "true");
    }
    testbtn();
}
//地址验证
function address_verify (obj) {
    var v = $(obj).val();
    input_Func(obj);
    get_length(v);
    var len = $(obj).val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;//英文，数字或 _ 至少两种组成
    if (char_length > 0) {
        if(char_length > 60){
            //var str = v.substring(0,20);
            var str = cut_str(v,60);
            //var str = cutstr(v,len);
            $(obj).val(str);
        }
        $(obj).attr("aria-invalid", "false");
    }else {
        $(obj).attr("aria-invalid", "true");
    }
    testbtn();
    testbtn02(obj);
}
//地址验证
function address_Fun(obj,len) {
    var v = $(obj).val();
    input_Func(obj);
    get_length(v);
    var len = $(obj).val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;//英文，数字或 _ 至少两种组成
    if (char_length > 0) {
        if(char_length > len){
            //var str = v.substring(0,20);
            var str = cut_str(v,len);
            //var str = cutstr(v,len);
            $(obj).val(str);
        }
        $(obj).attr("aria-invalid", "false");
    }else {
        $(obj).attr("aria-invalid", "true");
    }
    testbtn();
    testbtn02(obj);
}
var char_length;
function get_length(s){
    char_length = 0;
    for (var i = 0; i < s.length; i++){
        var son_char = s.charAt(i);
		try{
			encodeURI(son_char).length > 2 ? char_length += 1 : char_length += 0.5;
		}catch(err){
			char_length += 1;
		}
    }
    return char_length;
}
function cut_str(str, len){
    char_length = 0;
    for (var i = 0; i < str.length; i++){
        var son_str = str.charAt(i);
		try{
			encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
		}catch(err){
			char_length += 1;
		}
        if (char_length >= len){
            var sub_len = char_length == len ? i+1 : i;
            return str.substr(0, sub_len);
            break;
        }
    }
}
//  截取15个字（30个字符）
//  cut_str('aa啊啊啊啊啊啊啊啊啊啊啊啊啊k的啊是', 15);

//输入框有字时出现关闭icon
function input_Func(obj){
    var v = $(obj).val();
    if(v!=""){
        $(obj).parent().parent().find(".js_closeBtn").show();
    }else {
        $(obj).parent().parent().find(".js_closeBtn").hide();
    }
}

function testbtn(){
    var $errormsg = 0;
    var $input = $(".js_input");
    for (var i = 0; i < $input.length; i++) {
        if ($input.eq(i).attr("aria-invalid") == 'true') {
            $errormsg = 1;
            break;
        }
    }
    if (!$errormsg) {
        $(".js_submit").removeClass("disabled");
        $(".js_submit").removeAttr("disabled");
//                $(".js_password_alert").fadeIn(500);
//                var t = setTimeout(function () {
//                    $(".js_password_alert").fadeOut(800);
//                }, 800);
    } else {
        $(".js_submit").addClass("disabled");
        $(".js_submit").attr("disabled",true);
    }
}
function testbtn01(){
    var $errormsg01 = 0;
    var $input01 = $(".js_alertInput");
    for (var i = 0; i < $input01.length; i++) {
        if ($input01.eq(i).attr("aria-invalid") == 'true') {
            $errormsg01 = 1;
            break;
        }
    }
    if (!$errormsg01) {
        $(".js_submit02").removeClass("disabled");
        $(".js_submit02").removeAttr("disabled");
//                $(".js_password_alert").fadeIn(500);
//                var t = setTimeout(function () {
//                    $(".js_password_alert").fadeOut(800);
//                }, 800);
    } else {
        $(".js_submit02").addClass("disabled");
        $(".js_submit02").attr("disabled",true);
    }
}
function testbtn02(obj){
    var $errormsg = 0;
    var $input = $(obj).parents(".js_item").find(".js_input");
    for (var i = 0; i < $input.length; i++) {
        if ($input.eq(i).attr("aria-invalid") == 'true') {
            $errormsg = 1;
            break;
        }
    }
    if (!$errormsg) {
        $(obj).parents(".js_item").find(".js_mySubmit").removeClass("disabled");
        //$(".js_submit").removeAttr("disabled");
//                $(".js_password_alert").fadeIn(500);
//                var t = setTimeout(function () {
//                    $(".js_password_alert").fadeOut(800);
//                }, 800);
    } else {
        $(obj).parents(".js_item").find(".js_mySubmit").addClass("disabled");
        //$(".js_submit").attr("disabled",true);

    }
}
var wait = 60;
var lt;
function time(t) {
    clearTimeout(lt);
    if (wait == 0) {
        //t.removeAttribute("disabled");
        $(t).val("重新获取");
        $(".js_getVerify").removeClass("disabled");
        wait = 60;
    } else {
        //t.setAttribute("disabled", true);
        $(t).val("重新获取(" + wait + "s)");
        $(".js_getVerify") .addClass("disabled");
        wait--;
        lt = setTimeout(function () {
            time(t)
        }, 1000)
    }
}
function time1(t) {
    clearTimeout(lt);
    if (wait <= 0) {
        $(t).attr({"disabled":false});
        $(t).val("重新获取");
        $(".js_getVerify").removeClass("disabled");
        wait = 60;
    } else {
        $(t).attr({"disabled": true});
        //t.setAttribute("disabled", true);
        $(t).val("重新获取(" + wait + "s)");
        $(".js_getVerify") .addClass("disabled");
        wait--;
        lt = setTimeout(function () {
            time1(t)
        }, 1000)
    }
}

//弹窗出现再消失
function input_alert(){
    $(".js_collect_alert").fadeIn(500);
    var t = setTimeout(function(){
        $(".js_collect_alert").fadeOut(500);
    },1000);
}
/*关闭弹窗*/
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_hide_com").hide();
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}
/*开启弹出，5后关闭*/
function canceAlertSelf() {
    var timer
    timer = setTimeout( function () {
        $(".js_comBlack").hide();
        $(".js_hide_com").hide();
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
        clearTimeout( timer );
    },4000 )
}
////复制快递单号
//function jsCopy(){
//    var e=document.getElementById("contents");//对象是contents
//    e.select(); //选择对象
//    tag=document.execCommand("Copy"); //执行浏览器复制命令
//    if(tag){
//        input_alert();
//        $(".js_collect_text").text("复制成功");
//    }
//}
////输入框有字时出现关闭icon
//function input_Func(obj){
//    var v = $(obj).val();
//    if(v!=""){
//        $(obj).parent().find(".js_closeBtn").show();
//    }else {
//        $(obj).next().hide();
//    }
//}