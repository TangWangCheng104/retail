/**
 * Created by Administrator on 2017/11/13.
 */
/*定时器触发之前*/
$(function(){
    /*回到顶部*/
    $(window).scroll(function(){
        if($(window).scrollTop()>1){
            $('.booking-back-to-top').show()
            $('.booking-back-to-img').click(function(){
                $(window).scrollTop("0");
            })
        }
        else{
            $('.booking-back-to-top').hide();
        }
    })
    /*验证码判断*/
    for(var i=0 ; i<$('.booking-active-setTime').length;i++){
        if($('.booking-active-setTime').eq(i).val() == ''){
            $('.booking-active-setTime').eq(i).attr("flagbtn",'true')
            isName();
        }
        else {
            $('.booking-active-setTime').eq(i).attr("flagbtn",'false')
        }
    }


    /*轮播图*/
    /*$('.container').carousel({interval:2000})
    $('.carousel-inner').carousel({interval:2000})*/

    // 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上轮播图容器
    var $carousels = $('.carousel');
    var startX,endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 10;
    // 注册滑动事件
    $carousels.on('touchstart',function (e) {
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchmove',function (e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function (e) {
        //console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            if( startX > endX+5 ){
                $(this).carousel('next')
            }
            else if( startX < endX-5 ){
                $(this).carousel('prev')
            }
            //$(this).carousel(startX > endX ? 'next':'prev');
        }
    });
    /*点击遮罩层，隐藏自身*/
    $(".booking-cover").click(function(){
        $(this).fadeOut(300);
        $('.booking-show-warp').fadeOut(300);
    })

    /*手机号码不足或者错误*/
    var timer;
    $('.booking-set-isPhone').blur(function(){
        var regPhone = /^1(3|4|5|7|8)\d{9}$/;
        var phoneVal = $('.booking-set-isPhone').val();

        if(phoneVal.length < 11 || !regPhone.test(phoneVal)){
            clearInterval(timer);
            $('.booking-set-get-phoneNumber').fadeIn(300)
            timer = setInterval(function(){
                $('.booking-set-get-phoneNumber').fadeOut(300)
            },2000);
        }
    })
    /*验证码位数不足*/
    $('.booking-set-isCode').blur(function(){
        var codeVal = $('.booking-set-isCode').val();
        if(codeVal.length < 6){
            clearInterval(timer);
            $('.booking-set-get-code').fadeIn(300)
            timer = setInterval(function(){
                $('.booking-set-get-code').fadeOut(300)
            },2000);
        }
    })
    /*点击关闭*/
    $('.booking_close_button').click(function(){
        $(this).parent().find('.booking-set-inputContent').val("");
        $(this).parent().find('.booking-set-inputContent').attr("flagbtn","true");
        console.log($(this).parent().find('.booking-set-inputContent').attr("flagbtn"))
        isName();
        isPhone();

    })
    /*判断是第几个booking-set-content*/
    for(var k=0;k<$('.booking-set-content').length;k++){
        if($('.booking-set-content').eq(0).css('display') == 'block'){
            $('.booking-set-isCode').attr('flagBtn',"false")
        }
        else{
            $('.booking-set-isCode').attr('flagBtn',"true")
        }
    }
    /*提交按钮没有变红色不能点击*/
    if($('.booking-button-submit').hasClass('booking-button-submit-active')){
        $('.booking-button-submit').removeAttr("disabled")
        console.log(111)
    }
    else{
        $('.booking-button-submit').attr("disabled","disabled")
    }
    $('.booking-button-submit').click(function(){
        alert(111)
    })
    isName();
    isPhone();

})
function bookingTimerSHBefore(intDiff, i) {
    var day = 0,
        hour = 0,
        minute = 0;
    seconds = 0;
    if (intDiff > 0) {
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60) - (day * 24));
        minute = Math.floor(intDiff/60 - (day * 24 * 60) - (hour * 60));
        //seconds = Math.floor(intDiff - (day * 24 * 60) - (hour * 60)- (minute * 60) );
        //seconds = Math.floor(intDiff%(24*60*60*day))
        seconds = Math.floor(intDiff%60)
    }
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (seconds <= 9) seconds = '0' + seconds;
    //$('#'+ day_show).html(day + "天");
    //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
    $(".booking-time-wrap").eq(i).find(".booking-day").text(day);
    $(".booking-time-wrap").eq(i).find(".booking-hour").text(hour);
    $(".booking-time-wrap").eq(i).find(".booking-mins").text(minute);
    $(".booking-time-wrap").eq(i).find(".booking-seconds").text(seconds);

}
//收货期限倒计时
function bookingTimerSH(intDiff, i) {
    intDiff--;
    var t0 = window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0;
        seconds = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60) - (day * 24));
            minute = Math.floor(intDiff/60 - (day * 24 * 60) - (hour * 60));
            //seconds = Math.floor(intDiff - (day * 24 * 60) - (hour * 60)- (minute * 60) );
            //seconds = Math.floor(intDiff%(24*60*60*day))
            seconds = Math.floor(intDiff%60)
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (seconds <= 9) seconds = '0' + seconds;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
        $(".booking-time-wrap").eq(i).find(".booking-day").text(day);
        $(".booking-time-wrap").eq(i).find(".booking-hour").text(hour);
        $(".booking-time-wrap").eq(i).find(".booking-mins").text(minute);
        $(".booking-time-wrap").eq(i).find(".booking-seconds").text(seconds);
        //console.log(seconds)
        intDiff--;
        if(intDiff==0){
            console.log("时间结束");
        }
    }, 1000);
}


    /*通用的加className的方法*/
    /*    function addClass(nodeName,flag,addClassName){
     for(var j = 0;j < $("." + nodeName).length;j++){
     //            if($('.booking-set-inputContent').eq(i).attr(flag)){
     if($("." + nodeName).eq(j).attr(flag)){
     flag = true;
     return
     }
     }
     if(!flag){
     //            $('.booking_getCode').addClass('booking-getCode-active');
     $('.addClassName').addClass('booking-getCode-active');
     }
     else{
     $('.addClassName').removeClass('booking-getCode-active');
     }
     }*/
    /*手机验证*/
function isPhone(){
    $(this).parent().find('.booking-set-inputContent').attr("flagbtn","true");
    var regPhone = /^1(3|4|5|7|8)\d{9}$/;
    var phoneVal = $('.booking-set-isPhone').val();
    var flage = false;
    var flagBtn = false;
    console.log(phoneVal);
    if(phoneVal.length >=11){
        $('.booking-set-isPhone').val(phoneVal.slice(0,11));
        if(regPhone.test(phoneVal)){
            $('.booking-set-isPhone').attr("flag",false);
            $('.booking-set-isPhone').attr("flagbtn",false);
            /*这是获取验证码按钮的颜色改变*/
           /* for(var i = 0;i < $('.booking-set-inputContent').length;i++){
                if($('.booking-set-inputContent').eq(i).attr('flag') == "true"){
                    //console.log($('.booking-set-inputContent').attr('flag')+"+,+"+i);
                    console.log(111)
                    flage = true;
                    break;
                }

            }*/
            var inPhone = $('.booking-set-isPhone').attr('flag') == "true";
            var inName = $('.booking-set-isName').attr('flag') == "true";
            if(inPhone){
                flage = true;
            }
            if(inName){
                flage = true;
            }
            if(!flage){
                $('.booking_getCode').addClass('booking-getCode-active');
            }
            else{
                $('.booking_getCode').removeClass('booking-getCode-active');
            }
            /*这是提交按钮的颜色改变*/
            /*for(var j = 0;j < $('.booking-set-inputContent').length;j++){
                if($('.booking-button-submit').eq(j).attr('flageBtn')){
                    flagBtn = true;
                    break;
                }
            }*/
            /*这是提交按钮的颜色改变*/
            for(var j = 0;j < $('.booking-set-inputContent').length;j++){
                //console.log($(t).attr("flagbtn"));
                //console.log($('.booking-active-setTime').eq(0).attr('flagbtn') == "true");
                if($('.booking-set-inputContent').eq(j).attr('flagbtn') == "true" || $('.booking-active-year').eq(j).attr('flagbtn') == "true" ||$('.booking-active-month').eq(j).attr('flagbtn') == "true"||$('.booking-active-day').eq(j).attr('flagbtn') == "true"){
                    console.log("ttt");
                    flagBtn = true;
                    break;
                }
            }
            if(!flagBtn){
                $('.booking-button-submit').addClass('booking-button-submit-active');
            }
            else{
                $('.booking-button-submit').removeClass('booking-button-submit-active');
            }
            /*if($('.booking-set-isName').attr('flagbtn') == "true"  ){
                flagBtn = true;
            }
            if($('.booking-set-isPhone').attr('flagbtn') == "true"){
                flagBtn = true;
            }
            if($('.booking-set-isCode').attr('flagbtn') == "true"){
                flagBtn = true;
            }
            if(!flagBtn){
                $('.booking-button-submit').addClass('booking-button-submit-active');
            }
            else{
                $('.booking-button-submit').removeClass('booking-button-submit-active');
            }*/
        }
        else {
            $('.booking-button-submit').removeClass('booking-button-submit-active');
            $('.booking_getCode').removeClass("booking-getCode-active");
            $('.booking-set-isPhone').attr("flagbtn",true);
            $('.booking-set-isPhone').attr("flag",true);
        }
    }
    else{
        $('.booking-button-submit').removeClass('booking-button-submit-active');
        $('.booking_getCode').removeClass("booking-getCode-active");
        $('.booking-set-isPhone').attr("flagbtn",true);
        $('.booking-set-isPhone').attr("flag",true);
    }
    if($('.booking-button-submit').hasClass('booking-button-submit-active')){
        $('.booking-button-submit').removeAttr("disabled")
    }
    else{
        $('.booking-button-submit').attr("disabled","disabled")
    }
}
/*姓名验证*/
function isName(t){
    $(this).parent().find('.booking-set-inputContent').attr("flagbtn","true");
    var regName = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
    var nameVal = $('.booking-set-isName').val();
    var flagBtn = false;
    var flage = false;
    /*如果输入框内容不为空flagBtn==false*/
    if($(t).val() == ''){
        $(t).attr("flagbtn",true);
    }else {

        if($(t).hasClass("booking-active-year")){
            console.log(".booking-active-year")
            $('.booking-active-year').attr("flagbtn",false);
        }else if($(t).hasClass("booking-active-month")){
            console.log(".booking-active-month")
            $('.booking-active-month').attr("flagbtn",false);
        }else if($(t).hasClass("booking-active-day")){
            console.log(".booking-active-day")
            $('.booking-active-day').attr("flagbtn",false);
        }
    }
    //console.log($(t).attr("flagbtn"));
    if(regName.test(nameVal) && nameVal != ""){
        $('.booking-set-isName').attr("flag",false);
        $('.booking-set-isName').attr("flagbtn",false);
//            addClass("booking-set-inputContent",flage,"booking_getCode");
        /*for(var i = 0;i < $('.booking-set-inputContent').length;i++){
            if($('.booking-set-inputContent').eq(i).attr('flag')){
                console.log(1111);
                flage = true;
                break
            }
        }
        if(!flage){
            $('.booking_getCode').addClass('booking-getCode-active');
        }
        else{
            $('.booking_getCode').removeClass('booking-getCode-active');
        }*/
        var inPhone = $('.booking-set-isPhone').attr('flag') == "true";
        var inName = $('.booking-set-isName').attr('flag') == "true";
        if(inPhone){
            flage = true;
        }
        if(inName){
            flage = true;
        }
        if(!flage){
            $('.booking_getCode').addClass('booking-getCode-active');
        }
        else{
            $('.booking_getCode').removeClass('booking-getCode-active');
        }
        /*这是提交按钮的颜色改变*/
        for(var j = 0;j < $('.booking-set-inputContent').length;j++){
            //console.log($(t).attr("flagbtn"));
            //console.log($('.booking-active-setTime').eq(0).attr('flagbtn') == "true");
            if($('.booking-set-inputContent').eq(j).attr('flagbtn') == "true" || $('.booking-active-year').eq(j).attr('flagbtn') == "true" ||$('.booking-active-month').eq(j).attr('flagbtn') == "true"||$('.booking-active-day').eq(j).attr('flagbtn') == "true"){
                console.log("ttt");
                flagBtn = true;
                break;
            }
        }
        if(!flagBtn){
            $('.booking-button-submit').addClass('booking-button-submit-active');
        }
        else{
            $('.booking-button-submit').removeClass('booking-button-submit-active');

        }
        /*if($('.booking-set-isName').eq(0).attr('flagbtn') == "true"  ){
            flagBtn = true;
        }
        if($('.booking-set-isPhone').eq(0).attr('flagbtn') == "true"){
            flagBtn = true;
        }
        if($('.booking-set-isCode').eq(0).attr('flagbtn') == "true"){
            flagBtn = true;
        }
        if(!flagBtn){
            $('.booking-button-submit').addClass('booking-button-submit-active');
        }
        else{
            $('.booking-button-submit').removeClass('booking-button-submit-active');
        }*/
    }
    else{
        $('.booking-set-isName').attr("flag",true);
        $('.booking-set-isName').attr("flagbtn",true);
        $('.booking_getCode').removeClass('booking-getCode-active');
        $('.booking-button-submit').removeClass('booking-button-submit-active');
        flage = true;
        flagBtn = true;
    }
    if($('.booking-button-submit').hasClass('booking-button-submit-active')){
        $('.booking-button-submit').removeAttr("disabled")
    }
    else{
        $('.booking-button-submit').attr("disabled","disabled")
    }
}
/*验证码长度控制*/
function isCode(){
    $(this).parent().find('.booking-set-inputContent').attr("flagbtn","true");
    /* var regCode = /^0-9{6}$/;*/
    var codeVal = $('.booking-set-isCode').val();
    console.log(codeVal);
    var flagBtn = false;
    if(codeVal.length >= 6){
        $('.booking-set-isCode').val(codeVal.slice(0,6));
        $('.booking-set-isCode').attr('flagbtn',false);
        /*这是提交按钮的颜色改变*/
        /*这是提交按钮的颜色改变*/
        for(var j = 0;j < $('.booking-set-inputContent').length;j++){
            //console.log($(t).attr("flagBtn"));
            //console.log($('.booking-active-setTime').eq(0).attr('flagbtn') == "true");
            if($('.booking-set-inputContent').eq(j).attr('flagbtn') == "true" || $('.booking-active-year').eq(j).attr('flagbtn') == "true" ||$('.booking-active-month').eq(j).attr('flagbtn') == "true"||$('.booking-active-day').eq(j).attr('flagbtn') == "true"){
                console.log("ttt");
                flagBtn = true;
                break;
            }
        }
        if(!flagBtn){
            $('.booking-button-submit').addClass('booking-button-submit-active');
        }
        else{
            $('.booking-button-submit').removeClass('booking-button-submit-active');
        }
       /* if($('.booking-set-isPhone').attr('flagbtn') == "true" || $('.booking-set-isName').attr('flagbtn') == "true" || $('.booking-set-isCode').attr('flagbtn') == "true"){
            flagBtn = true;
        }
        if(!flagBtn){
            $('.booking-button-submit').addClass('booking-button-submit-active');
        }
        else{
            $('.booking-button-submit').removeClass('booking-button-submit-active');
        }*/
    }
    else{
        $('.booking-set-isCode').attr('flagbtn',true);
        $('.booking-button-submit').removeClass('booking-button-submit-active');
    }

    if($('.booking-button-submit').hasClass('booking-button-submit-active')){
        $('.booking-button-submit').removeAttr("disabled")
    }
    else{
        $('.booking-button-submit').attr("disabled","disabled")
    }
}

/*输入到店日期*/
function arriveShop(t){
    var flagBtn = false;
    if($(t).val != ""){
        $(t).attr('flagbtn',false);
        for(var j = 0;j < $('.booking-set-inputContent').length;j++){
            if($('.booking-button-submit').eq(j).attr('flageBtn')){
                flagBtn = true;
                break
            }
        }
        if(!flagBtn){
            $('.booking-button-submit').addClass('booking-button-submit-active');
        }
        else{
            $('.booking-button-submit').removeClass('booking-button-submit-active');
        }
    }
    else{
        $(t).attr('flagbtn',true);
        $('.booking-button-submit').removeClass('booking-button-submit-active');
    }
    /*if($('.booking-button-submit').hasClass('booking-button-submit-active')){
        $('.booking-button-submit').attr("disabled","disabled")
    }
    else{
        $('.booking-button-submit').removeAttr("disabled")
    }*/
}
/*错误提示的弹出框*/
function bookingWrongAlert(){
    var str = $('.booking-active-year').val +"-"+ $('.booking-active-month').val  +"-"+ $('.booking-active-day').val
    var timer ;
    var time = 111;
    var date = new Date(str);

//        console.log($('.booking-button-submit').hasClass("booking-button-submit-active"));
    if($('.booking-button-submit').hasClass("booking-button-submit-active")){

        if(time <= date){
            clearInterval(timer);
            $('.booking-set-get-dataNumber').show()
            timer = setInterval(function(){
                $('.booking-set-get-dataNumber').hide()
            },2000)
            return
        }
    }
}
/*点击获取验证码*/
var wait = 60;
var lt;
function time(t) {
    if($('.booking_getCode ').hasClass("booking-getCode-active")){
        clearTimeout(lt);
        if (wait == 0) {
            $(t).removeAttr("disabled");
            $(t).val("重新获取");
            $(".booking-getCode-kong").css("display","block");
            wait = 60;
        } else {
            $(t).attr("disabled", true);
            $(t).val("重新获取(" + wait + "s)");
            $(".booking-getCode-kong").css({"display":"block"});
            wait--;
            lt = setTimeout(function () {
                time(t)
            }, 1000)
        }
    }
}
/*弹框出现再消失的方法，穿入class*/

function alertShowHide(enterClass){
    var timer;
    clearInterval(timer);
    $('.'+enterClass).fadeIn(300)
    timer = setInterval(function(){
        $('.'+enterClass).fadeOut(300)
    },2000);
}



