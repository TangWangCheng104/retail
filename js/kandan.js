/**
 * Created by Administrator on 2017/6/13.
 */
$(function(){
    // codeShowHide();
    /*点击查看前5条信息*/
    $('.js-check-five-msg').click(function () {
        var listLength = $(this).parent().siblings('.kandan-list-sort').size() || $(this).parent().siblings('.kandan-browse-record-list').size();
        for(var ia = 0 ; ia < listLength ; ia++){
            if(ia >= 5){
                $(this).parent().siblings('.kandan-list-sort').eq(5).remove()
                $(this).parent().siblings('.kandan-browse-record-list').eq(5).remove()
                $(this).parent().siblings('.kandan-list-last').show();
                $(this).parent().hide();
                $(this).parent().siblings('.curpage').val(1);
            }
        }
    })
    var idArr = [{id:"#kandianAdvanceList",class:".kandan-list-sort"},{id:"#intoHonorList",class:".kandan-list-sort"},{id:".kandan-browse-record",class:".kandan-browse-record-list"}]
    for(var ib = 0 ;ib < idArr.length ; ib++ ){
        showCheckMore(idArr[ib].id,idArr[ib].class);
    }
    /*荣誉榜里面价格取整的方法*/
    parseIntPrice()
})
/*荣誉榜里面价格取整的方法*/
function parseIntPrice() {
    for(var i = 0;i < $('#kandianAdvanceList .already-kanzhi').length; i++ ){
        var arrivePrice = parseInt($('#kandianAdvanceList .already-kanzhi').eq(i).text());
        $('#kandianAdvanceList .already-kanzhi').eq(i).text(arrivePrice)
    }
}
/*滚动到第二屏显示我的砍价悬浮图标*/
function codeShowHide(){
    /*监听滚动条滚动事件*/
    /*获取元素*/
    // var bottomBuyBtn = document.getElementById("bottomBuyBtn");
    var windowHeight = document.documentElement.clientHeight;
    /*刷新的时候也需要判断二维码这些是否隐藏*/
    var scrollTop = document.body.scrollTop;
    if(scrollTop >= windowHeight){
        // $(bottomBuyBtn).show();
        $('#wxCode').show();
        $('#myKanjia').show();
        $('.booking-back-to-top').show();
        $('.booking-back-to-top').click(function(){
            $(window).scrollTop("0");
        })
    }else {
        // $(bottomBuyBtn).hide();
        $('#wxCode').hide();
        $('#myKanjia').hide();
        $('.booking-back-to-top').hide();
    }
//            var bottomBuyBtnHeight = bottomBuyBtn.offsetTop;
    $('body').scroll(function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        if(scrollTop >= windowHeight){
            // $(bottomBuyBtn).show();
            $('#wxCode').show();
            $('#myKanjia').show();
            $('.booking-back-to-top').show();
            $('.booking-back-to-top').click(function(){
                $(window).scrollTop("0");
            })
        }else {
            // $(bottomBuyBtn).hide();
            $('#wxCode').hide();
            $('#myKanjia').hide();
            $('.booking-back-to-top').hide();
        }
    })
}
/*当荣誉榜，贡献榜的条数小于5条时隐藏掉’查看更多’，大于5条时显示’只显示5条’*/
function showCheckMore(id,sonClass) {
    /*查看更多的显示和隐藏*/
    if( $(id).find(sonClass).length == 5 ){
        $(id).find('js-check-more').parent().show()
    }else{
        $(id).find('.js-check-more').parent().hide()
    }
    /*查看前五条的显示和隐藏*/
    if( $(id).find(sonClass).length > 5 ){
        $(id).find('.js-check-five-msg').parent().show()
    }else{
        $(id).find('.js-check-five-msg').parent().hide()
    }
}
/*砍单规则*/

/*砍单弹出框的显示*/
function KandanAlert(){
    var timer;
    $("#somebodyKanjia").fadeIn(300);
    if(!timer){
        timer = setTimeout(function(){
            $("#somebodyKanjia").fadeOut(300);
            clearTimeout(timer);
        },3000)
    }
}
/*砍价规则显示*/
function Rule(){
    $('#kandanRuleAlert').fadeIn(300);
    $('#com_black').show();
}
/*进阶榜和荣誉榜的相互切换*/
/*进阶榜*/
function tapAdvance(){
    $('#kandianAdvanceList').show();
    $('#intoHonor').show();
    $('#kandianAdvance').hide();
    $('#intoHonorList').hide();
    $("#kandianAdvanceList,#intoHonor").find('.lazy').each(function() {
        var imgSrc = $(this).attr('data-original');
        /*需要加载的图片地址*/
        $(this).attr('src',imgSrc);
    });
}
/*荣誉榜*/
function tapHonor(){
    $('#kandianAdvanceList').hide();
    $('#intoHonor').hide();
    $('#kandianAdvance').show();
    $('#intoHonorList').show();
    $("#intoHonorList,#kandianAdvance").find('.lazy').each(function() {
        var imgSrc = $(this).attr('data-original');
        /*需要加载的图片地址*/
        $(this).attr('src',imgSrc);
    });
}

/*限购toast弹出框的显示*/
function toastAlert(){
    var timer;
    $("#toastWrap").fadeIn(300);
    if(timer == undefined){
        timer = setTimeout(function(){
            $("#toastWrap").fadeOut(300);
            clearTimeout(timer);
        },3000)
    }
}
/*到底价才能购买toast弹出框的显示*/
function ArrivePriceAlert(){
    var timer;
    $("#ArrivePriceToast").fadeIn(300);
    if(timer == undefined){
        timer = setTimeout(function(){
            $("#ArrivePriceToast").fadeOut(300);
            clearTimeout(timer);
        },3000)
    }
}
/*点击邀请朋友帮砍*/
function InviteFriendFn(){
        $('#com_black').fadeIn(300);
        $('#kandanShareImg').fadeIn(300);
}
/*名字只显示一个字，多余省略*/
function usernameEllepsis(){
    var listLength = parseInt($('.kandan-list').find('.kandan-username-ellepsis').size());
    for(var i=0;i< listLength; i++){
        var username = $(".kandan-username-ellepsis").eq(i).html();
        $(".kandan-username-ellepsis").eq(i).html(username.slice(0,1)+ "***");
    }
}
/*名字显示前面四个字或者只显示前面一个字*/
function showNameFourWord(t) {
    var listLength = $('.kandan-browse-record').find('.kandan-username-ellepsis').each(function () {
        var username = $(this).html();
        if(t){
            $(this).html(username.slice(0,4)+ "...");
        }
       else{
            // $('.kandan-browse-record').find(".kandan-username-ellepsis").eq(i).html(username.slice(0,1)+ "***");
            $(this).html(username.slice(0,1)+ "***");
        }
    })
}
/*显示购买的下拉框*/
function showBtm(){
    //$('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
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
}

//不能再砍了
function kd_uncut(){
    $(".js_comBlack").show();
    $("#unCut").show();
    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
}

//砍掉金额
function kd_cut(obj){
    $(".js_comBlack").show();
    $(".js_kandan_alert02").show();
    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
    $(obj).addClass("disabled");
}

//找朋友帮砍提示分享
function kd_share(){
    //console.log(1);
    $(".js_comBlack").fadeIn(1000);
    $(".js_kandan_share").fadeIn(1000);
    //$(".js_collect_alert").fadeIn(500);
    var t = setTimeout(function(){
        //console.log(2);
        $(".js_comBlack").fadeOut(1000);
        $(".js_kandan_share").fadeOut(1000);
        //$(".js_collect_alert").fadeOut(500);
    },2000);
    //$(".js_comBlack").show();
    //$(".js_kandan_share").show();
    //$('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
}

//分享成功推荐商品
function kd_shareSuccess(){
    $(".js_comBlack").show();
    $(".js_shareSuccess").show();
    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
}

//分享成功推荐商品
function kd_toPay(){
    $(".js_comBlack").show();
    $(".js_kandan_toPay").show();
    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
}

//关闭弹窗
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_hide_com").hide();
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}

//砍单列表倒计时
function kd_Timer(intDiff, i) {
    var t0 = window.setInterval(function () {
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
            $(".js_mytime").eq(i).html("活动已结束");
            $(".js_timer_text").eq(i).html("");
            clearInterval(t0);
        }
        intDiff--;
    }, 100);
}

//截取前面10个字符串
function string_cut(){
    var n = $(".js_kandan_friends").text().trim();
    for (var i = 0; i < $(".js_kandan_friends").length; i++) {
        var m = $(".js_kandan_friends").eq(i).text().trim();
        if (get_length(m) > 5) {
            var str = cut_str(m, 5);
            $(".js_kandan_friends").eq(i).text(str + '…');
        }
    }
}
/*定时器触发之前页面显示的事件*/
function auctionTimerSHBefore(intDiff, i) {
    var day = 0,
        hour = 0,
        minute = 0;
    seconds = 0;
    if (intDiff > 0) {
        //day = Math.floor(intDiff / (60 * 60 * 24));
        //hour = Math.floor(intDiff / (60 * 60) - (day * 24));
        hour = Math.floor(intDiff/(60 * 60));
        minute = Math.floor(intDiff/60 - (day * 24 * 60) - (hour * 60));
        //seconds = Math.floor(intDiff - (day * 24 * 60) - (hour * 60)- (minute * 60) );
        //seconds = Math.floor(intDiff%(24*60*60*day))
        seconds = Math.floor(intDiff%60)
    }
    //if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (seconds <= 9) seconds = '0' + seconds;
    //$('#'+ day_show).html(day + "天");
    //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
    /*$(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeDay").text(day);*/
    $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeHour").text(hour);
    $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeMin").text(minute);
    $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeSec").text(seconds);

}
//auction 倒计时
function auctionTimerSH(intDiff, i) {
    console.log($(".kangdan-goodsDetails-rule-info"));
    intDiff--;
    var t0 = window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0;
        seconds = 0;
        if (intDiff > 0) {
           /* day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60) - (day * 24));*/
            hour = Math.floor(intDiff/(60 * 60));
            minute = Math.floor(intDiff/60 - (day * 24 * 60) - (hour * 60));
            //seconds = Math.floor(intDiff - (day * 24 * 60) - (hour * 60)- (minute * 60) );
            //seconds = Math.floor(intDiff%(24*60*60*day))
            seconds = Math.floor(intDiff%60)
        }
        //if (day <= 9) day = '0' + day;
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (seconds <= 9) seconds = '0' + seconds;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
        //$(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeDay").text(day);
        $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeHour").text(hour);
        $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeMin").text(minute);
        $(".kangdan-goodsDetails-rule-info").eq(i).find("#lessTimeSec").text(seconds);
        //console.log(seconds)
        intDiff--;
        if(intDiff==0){
            console.log("时间结束");
        }
    }, 1000);
}


/*拍卖活动的有人出价比你高的弹出框*/
function auctionSBhasHightPrice(){
    $('.auction-alert').fadeIn(400);
    $("#auction-buttom-wrap").fadeIn();
    var timer;
    clearTimeout(timer);
    setTimeout(function(){
        $('.auction-alert').fadeOut(400);
        $('#com_black1').fadeOut(400);
        /*$('#com_black').fadeOut(400);*/
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
        $("#auction-buttom-wrap").fadeIn();
    },2000)
}
/*拍卖活动某某老板出价最高*/
function auctionSBHightestPrice(){
    $('.auction-give-moneySuccess-wrap').css({'transform':"none"});
    var timer1,timer;
    $('#com_black1').fadeIn(400);
    $("#auction-buttom-wrap").fadeIn()
    $('.auction-give-moneySuccess-wrap').fadeIn(400);
    var top =parseInt($(".auction-give-money-success").css("height"))
    //console.log(top)
    $('.auction-give-money-userName').css({top:top *.64,bottom:0});
    clearTimeout(timer);
    var timer = setTimeout(function(){
        $('.auction-give-moneySuccess-wrap').fadeOut(2000);
        $('.auction-give-moneySuccess-wrap').css({'transform':"none"});
        $('.auction-give-moneySuccess-wrap').css({'transform':"rotate(360deg)",transition:"all 2s"});


        console.log(timer1)
        timer1 = setTimeout (function(){
            $('#com_black1').fadeOut(400);
            /*$('#com_black').fadeOut(400);*/
            $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
            $("#confirmBuying").animate({bottom: "-700px"});
            //$(".auctionAddPrice").html(auctionAddPriceRange);
            clearTimeout(timer1);
            //location.reload();
        },2000)
    },1000)
}
/*点击减价*/
function auction_sub_click(auctionAddPriceRange) {
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
        var nowPrice = $('.auctionAddPrice').html()
        $('.auctionAddPrice').html(parseInt(nowPrice) - parseInt(auctionAddPriceRange));
        $("#js_num").children().removeClass("disabled");
        txt--;
    } else {
        sub.addClass("disabled");
        txt = 1;
    }
    num.val(txt);
    var addPrice =  parseInt($('.auctionAddPrice').html());
    var auctionNowPrice = parseInt($("#auctionNowPrice").html());
    $(".auction-total-givePrice").html(addPrice + auctionNowPrice);
}
/*点击加价*/
function auction_add_click(auctionAddPriceRange) {
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
            var nowPrice = $('.auctionAddPrice').html()
            $('.auctionAddPrice').html(parseInt(nowPrice) + parseInt(auctionAddPriceRange));
            txt++;
            $(".js_num_warn").hide();
            $("#js_num").children().removeClass("disabled");
        } else {
            $(".js_num_warn").show();
            $(".js_num_warn").html(warnMsg);
            add.addClass("disabled");
        }
    } else {
        txt = 1;
    }
    num.val(txt);
    /*出的总价 = 增加的价格+当前价*/
    console.log($("#auctionNowPrice").html());
    var addPrice =  parseInt($('.auctionAddPrice').html());
    var auctionNowPrice = parseInt($("#auctionNowPrice").html());
    $(".auction-total-givePrice").html(addPrice + auctionNowPrice);
}
/*点击报名*/
function submitName(himself){
    $("#js_buying").hide();
    $(".auction-end2").show()
}

/*底部显示隐藏,传入参数为要显示的模块的id名字*/
function bottomShowHide(show){
    console.log(1111);
    $( "#"+show ).show().siblings(".lqy-btnBuy-now").hide();
}

/*拍卖活动点击出价,弹出加价框*/
function auctionPrice(){
    $("#auction-buttom-wrap").fadeIn()
}
function auctionPriceHide(){
    if($('#givePrice').css("display","block")){
        $("#auction-buttom-wrap").fadeOut()
        $('.auction-give-moneySuccess-wrap').fadeOut()
    }
}
/*蒙版消失的方法*/
function comBlckHide(){
        $("#com_black1").fadeOut()
        $("#confirmBuying").animate({bottom: "-700px"});
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}
/*轮播图处显示某人出价的价格*/
function sbGivePrice(sbCallBack){
    if($('.auction-price-username').html().length >=3){
        $('.auction-price-username').text($('.auction-price-username').html().slice(0,1)+"***"+$('.auction-price-username').html().slice(-1))
    }
    var timer;
    clearInterval(timer);
    $('.auction-text-item').fadeIn(300);
    timer = setInterval(function timeout(){
        $('.auction-text-item').fadeOut(300);
        clearInterval(timer);
        sbCallBack();
    },3000)
}
/*商品被抢光了*/
function shopHasNotNum() {
    $('#shopNum0').show()
    $('#com_black').show()
}
/*未登录的遮罩层关闭*/
var kandanNotLoginTimer
function kandanNotLoginfn() {
    $('#kandanNotLogin').show();
    $('#com_black').show();
    kandanNotLoginTimer = setTimeout(function () {
        $('#kandanNotLogin').fadeOut(300);
        $('#com_black').fadeOut(300);
        clearTimeout(kandanNotLoginTimer);
    },3000)
}
var oCantHelpKandan
function cantHelpKandanfn() {
    $('#cantHelpKandan').fadeIn(300);
    $("#com_black").fadeIn(300);
}









