/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){
    $(".js_closeBtn").click(function(){
        $(this).prev("input").val("");
        $(this).hide();
    });
});
//手机验证
function phone_verify(obj){
    var v = $(obj).val();
    input_Func(obj);
    len = v.length;
    if(len>11){
        v = v.substr(0,11);
        $(obj).val(v);
        len = v.length;
    }if( len!='11'){
        $(".js_getVerify").addClass("disabled");
        $(".js_getVerify").attr("disabled","disabled");

    }else if($(".js_getVerify").val()=="重新获取"||$(".js_getVerify").val()=="获取验证码"){
        $(".js_getVerify").removeClass("disabled");
        $(".js_getVerify").removeAttr("disabled");
    }
    testbtn();
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
//验证码验证
function verify_code (obj) {
    var len = $("#verify").val().length;
    len = parseInt(len);
    input_Func(obj);
    if (len != 6) {
        $("#verify").attr("aria-invalid", "true");
//                $("#verify").parent().find(".error").text("验证码不正确");
    }else {
        $("#verify").attr("aria-invalid", "false");
    }
    testbtn();
}
//密码验证
function password_verify (obj) {
    input_Func(obj);
    var len = $("#password").val().length;
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;
    len = parseInt(len);
    if (len < 6 || len > 20) {
//                $("#password").parent().find(".error").text("密码必须为6-20位");
        $("#password").attr("aria-invalid", "true");
    }else {
        $("#password").attr("aria-invalid", "false");
    }
    testbtn();
}

//姓名验证
function name_verify (obj) {
    input_Func(obj);
    var name = $("#name").val();
//            var reg = /^(?!^(\d+|[a-zA-Z]+)$)(?!.*[~@#]+.*).+$/;
    if (name != "") {
        $("#name").attr("aria-invalid", "false");
    }else {
        $("#name").attr("aria-invalid", "true");
    }
    testbtn();
}

//输入框有字时出现关闭icon
function input_Func(obj){
    var v = $(obj).val();
    if(v!=""){
        $(obj).parent().find(".js_closeBtn").show();
    }else {
        $(obj).next().hide();
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
var wait = 60;
function time(t) {
    if (wait == 0) {
        t.removeAttribute("disabled");
        t.value = "重新获取";
        $(".js_getVerify").removeClass("disabled");
        wait = 60;
    } else {
        t.setAttribute("disabled", true);
        t.value = "重新获取(" + wait + ")";
        $(".js_getVerify") .addClass("disabled");
        wait--;
        setTimeout(function () {
            time(t)
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
////输入框有字时出现关闭icon
//function input_Func(obj){
//    var v = $(obj).val();
//    if(v!=""){
//        $(obj).parent().find(".js_closeBtn").show();
//    }else {
//        $(obj).next().hide();
//    }
//}