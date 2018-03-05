/**
 * Created by Administrator on 2017/10/27.
 */

    /*定时器触发之前*/
    function timerSHBefore(intDiff, i) {
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
            if (minute <= 9) minute = '0' + minute;
            if (seconds <= 9) seconds = '0' + seconds;
            //$('#'+ day_show).html(day + "天");
            //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
            $(".suppliers_setinterval").eq(i).find(".suppliers_day").text(day);
            $(".suppliers_setinterval").eq(i).find(".suppliers_hours").text(hour);
            $(".suppliers_setinterval").eq(i).find(".suppliers_min").text(minute);
            $(".suppliers_setinterval").eq(i).find(".suppliers_second").text(seconds);

    }
    //收货期限倒计时
    function timerSH(intDiff, i) {
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
            if (minute <= 9) minute = '0' + minute;
            if (seconds <= 9) seconds = '0' + seconds;
            //$('#'+ day_show).html(day + "天");
            //$('#'+ hour_show).html('<s id="h"></s>' + hour + '时');
            $(".suppliers_setinterval").eq(i).find(".suppliers_day").text(day);
            $(".suppliers_setinterval").eq(i).find(".suppliers_hours").text(hour);
            $(".suppliers_setinterval").eq(i).find(".suppliers_min").text(minute);
            $(".suppliers_setinterval").eq(i).find(".suppliers_second").text(seconds);
            //console.log(seconds)
            intDiff--;
            if(intDiff==0){
                console.log("时间结束");
            }
        }, 1000);
    }

    onload = function(){
        /*封装一个函数，获取元素高度，宽度等*/
        function getStyleAttr(obj,attr){
            if(window.getComputedStyle){
                return window.getComputedStyle(obj,null)[attr];
            }
            return obj.currentStyle[attr];
        }

        /*图片高度的处理*/
        function navImgHeight(){
            var aheight = document.getElementsByClassName("suppliers_treature_top")[2];
            /*定时器的高度*/
            var setIntervalHeight = document.getElementsByClassName("suppliers_setinterval")[0];
            var doubleHeight =  document.getElementsByClassName("suppliers-double_window")[0];
            var top1 = parseInt(setIntervalHeight.offsetTop);
            console.log(doubleHeight);
            console.log(top1);
            var oheight = parseInt(getStyleAttr(setIntervalHeight,"height"));
            console.log(oheight);
            $(".suppliers-double_window").eq(0).css("top",top1+oheight)
        }
        navImgHeight();
    }


















