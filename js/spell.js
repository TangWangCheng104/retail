
$(function(){
    /*拼单分享显示*/
    $('.share-to-other').click(function(){
        $('#spellShare').fadeIn(300);
        $('#com_black').fadeIn(300);
    });
    $("#pingdanRule").on('touchmove',function(e){
        /*捕获*/ /*冒泡*/
        /*e.stopPropagation();
        e.returnValue=false;
        e.preventDefault();
        e.cancelBubble = true;*/
    })
    $(".spell-kaituan").click(function(){
    	if( $(this).html().indexOf("分享") != -1 ){
    		$('#spellShare').fadeIn(300);
    		$('#com_black').fadeIn(300);
    	}
    })
});
/*清除定时器的一种方法*/

/*这是有毫秒但是没有显示天的倒计时*/
function timer(intDiff,i,id,fn) {
	
	var t0
	clearInterval(t0);

    t0 = window.setInterval(function () {
        //console.log(intDiff);
        var day = 0,
            hour = 0,
            minute = 0,
            hour1 = 0,
            second = 0,//时间默认值
            ms = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (10 * 60 * 60 * 24));
            /* allTimeHours =  Math.floor(intDiff % (10 * 60 * 60 * 24))*/
            /*24小时制度*/
            hour1 = Math.floor(intDiff / (60 * 60 * 10) - (day * 24));
            /*无限小时制*/
            hour = Math.floor(intDiff / (60 * 60 * 10));
            minute = Math.floor(intDiff / (60*10) - (day * 24 * 60) - (hour1 * 60));
            second = Math.floor(intDiff / 10 - (day * 24 * 60 * 60) - (hour1 * 60 * 60) - (minute * 60));
            ms = Math.floor(intDiff - (day * 24 * 60 * 60*10) - (hour1 * 60 * 60*10) - (minute * 60*10)-(second * 10));
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
//                $(".js_timer").eq(i).find(".spell-hour").html();
        $("#"+id+" .less-time").eq(i).find(".spell-hour").html(hour);
        $("#"+id+" .less-time").eq(i).find(".spell-min").html(minute);
        $("#"+id+" .less-time").eq(i).find(".spell-sec").html(second);
        $("#"+id+" .less-time").eq(i).find(".spell-ms").html(ms);
        //倒计时结束后，订单失效
        if (intDiff == 0) {
            clearInterval( t0 );
            if(fn){
                fn();
            }
        }
        intDiff--;
    }, 100);
    
}
var t1;
function timer1(intDiff,i,id,fn) {
    clearInterval(t1);
    t1 = window.setInterval(function () {
        //console.log(intDiff);
        var day = 0,
            hour = 0,
            minute = 0,
            hour1 = 0,
            second = 0,//时间默认值
            ms = 0;
        if (intDiff > 0) {
            day = Math.floor(intDiff / (10 * 60 * 60 * 24));
            /* allTimeHours =  Math.floor(intDiff % (10 * 60 * 60 * 24))*/
            /*24小时制度*/
            hour1 = Math.floor(intDiff / (60 * 60 * 10) - (day * 24));
            /*无限小时制*/
            hour = Math.floor(intDiff / (60 * 60 * 10));
            minute = Math.floor(intDiff / (60*10) - (day * 24 * 60) - (hour1 * 60));
            second = Math.floor(intDiff / 10 - (day * 24 * 60 * 60) - (hour1 * 60 * 60) - (minute * 60));
            ms = Math.floor(intDiff - (day * 24 * 60 * 60*10) - (hour1 * 60 * 60*10) - (minute * 60*10)-(second * 10));
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        //$('#'+ day_show).html(day + "天");
        //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
//                $(".js_timer").eq(i).find(".spell-hour").html();
        $("#"+id+" .less-time").eq(i).find(".spell-hour").html(hour);
        $("#"+id+" .less-time").eq(i).find(".spell-min").html(minute);
        $("#"+id+" .less-time").eq(i).find(".spell-sec").html(second);
        $("#"+id+" .less-time").eq(i).find(".spell-ms").html(ms);
        //倒计时结束后，订单失效
        if (intDiff == 0) {
            clearInterval(t1);
            if(fn){
                fn();
            }
            /*$("#topay").addClass("disabled");
             $("#js_paystatus").text("订单失效");
             $(".js_timer_text").eq(i).html("支付超时");*/

        }
        intDiff--;
    }, 100);
}
/*点击分享*/
function spellShare(){
    $('#spellShare').fadeIn(300);
    $('#com_black').fadeIn(300);
}
/*拼单规则显示*/
function spellRules(){
    $('#pingdanRule').fadeIn(300);
    $('#com_black').fadeIn(300);
    $('#pingdanRule').parent().fadeIn(300);
}

//var spellI = 0;
//var spell1I = 0;
//var clearTimer = {};
//var clearTimer1 = {};
//
///*这是有毫秒但是没有显示天的倒计时*/
//function timer(intDiff,i,id,fn) {
////	console.log(1)
//	let k = spellI
//	
//  clearTimer[k] = window.setInterval(function () {
//      //console.log(intDiff);
//      var day = 0,
//          hour = 0,
//          minute = 0,
//          hour1 = 0,
//          second = 0,//时间默认值
//          ms = 0;
//      if (intDiff > 0) {
//          day = Math.floor(intDiff / (10 * 60 * 60 * 24));
//          /* allTimeHours =  Math.floor(intDiff % (10 * 60 * 60 * 24))*/
//          /*24小时制度*/
//          hour1 = Math.floor(intDiff / (60 * 60 * 10) - (day * 24));
//          /*无限小时制*/
//          hour = Math.floor(intDiff / (60 * 60 * 10));
//          minute = Math.floor(intDiff / (60*10) - (day * 24 * 60) - (hour1 * 60));
//          second = Math.floor(intDiff / 10 - (day * 24 * 60 * 60) - (hour1 * 60 * 60) - (minute * 60));
//          ms = Math.floor(intDiff - (day * 24 * 60 * 60*10) - (hour1 * 60 * 60*10) - (minute * 60*10)-(second * 10));
//      }
//      if (minute <= 9) minute = '0' + minute;
//      if (second <= 9) second = '0' + second;
//      //$('#'+ day_show).html(day + "天");
//      //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
////                $(".js_timer").eq(i).find(".spell-hour").html();
//      $("#"+id+" .less-time").eq(i).find(".spell-hour").html(hour);
//      $("#"+id+" .less-time").eq(i).find(".spell-min").html(minute);
//      $("#"+id+" .less-time").eq(i).find(".spell-sec").html(second);
//      $("#"+id+" .less-time").eq(i).find(".spell-ms").html(ms);
//      //倒计时结束后，订单失效
//      if (intDiff == 0) {
//      	
//          clearInterval( clearTimer[k] );
//          
//          if(fn){
//              fn();
//          }
//      }
//      intDiff--;
//  }, 100);
//  
//  spellI ++;
//  
//}


