/**
 * Created by Administrator on 2017/11/24.
 */
/*这里只有天时分秒*/
/*倒计时开始前*/
function secondeBeforeSH(intDiff, i) {
    var year = 0,
        day = 0,
        hour = 0,
        minute = 0;
        seconds = 0;
    if (intDiff > 0) {
        year = Math.floor(intDiff/( 60 * 60 * 24 * 365 )) +1970;
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
    $(".second-less-time").eq(i).find(".second-day").text(day);
    $(".second-less-time").eq(i).find(".second-hour").text(hour);
    $(".second-less-time").eq(i).find(".second-min").text(minute);
    $(".second-less-time").eq(i).find(".second-sec").text(seconds);
    intDiff--;
    if(intDiff==0){
        console.log("时间结束");
    }
}
/*这里只有天时分秒*/
/*秒杀的倒计时*/
function secondeTimerSH(intDiff, i) {
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
        $(".second-less-time").eq(i).find(".second-day").text(day);
        $(".second-less-time").eq(i).find(".second-hour").text(hour);
        $(".second-less-time").eq(i).find(".second-min").text(minute);
        $(".second-less-time").eq(i).find(".second-sec").text(seconds);
        intDiff--;
        if(intDiff==0){
            console.log("时间结束");
        }
    }, 1000);
}
/*这里只有年月日小时*/
/*倒计时开始前*/
function secondeBeforeSH1(intDiff, i) {
    var year = 0,
        day = 0,
        hour = 0,
        minute = 0;
    seconds = 0;
    if (intDiff > 0) {
        year = Math.floor(intDiff/( 60 * 60 * 24 * 365 )) +1970;
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
    $(".second-less-time").eq(i).find(".second-more-year").text(day);
    $(".second-less-time").eq(i).find(".second-more-month").text(day);
    $(".second-less-time").eq(i).find(".second-more-day").text(hour);
    $(".second-less-time").eq(i).find(".second-more-hours").text(minute);
    //$(".second-less-time").eq(i).find(".second-sec").text(seconds);
    intDiff--;
    if(intDiff==0){
        console.log("时间结束");
    }
}
/*这里只有天时分秒*/
/*秒杀的倒计时*/
function secondeTimerSH1(intDiff, i) {
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
        $(".second-less-time").eq(i).find(".second-day").text(day);
        $(".second-less-time").eq(i).find(".second-hour").text(hour);
        $(".second-less-time").eq(i).find(".second-min").text(minute);
        $(".second-less-time").eq(i).find(".second-sec").text(seconds);
        intDiff--;
        if(intDiff==0){
            console.log("时间结束");
        }
    }, 1000);
}
