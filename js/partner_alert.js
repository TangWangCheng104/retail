/**
 * Created by Administrator on 2017/3/21.
 */
$(function(){
    height_Change();
    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-example-generic').hammer().on('swipeleft', function(){
        $(this).carousel('next');
        height_Change()
    });
    $('#carousel-example-generic').hammer().on('swiperight', function(){
        $(this).carousel('prev');
        height_Change()
    });
    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-bigimg-generic').hammer().on('swipeleft', function(){
        $(this).carousel('next');
        height_Change()
    });
    $('#carousel-bigimg-generic').hammer().on('swiperight', function(){
        $(this).carousel('prev');
        height_Change()
    });
//   链接jquery.mobile-1.3.2.min.js时用下面两个方法实现手势滑动
//            $("#carousel-example-generic").swipeleft(function() {
//                $(this).carousel('next');
//            });
//            $("#carousel-example-generic").swiperight(function() {
//                $(this).carousel('prev');
//            });
//    链接hammer.min.js时用下面两个方法实现手势滑动
//            var myElement = document.getElementById('carousel-example-generic');
//            var hm = new Hammer(myElement);
//            hm.on("swipeleft",function(){
//                $('#carousel-example-generic').carousel('next')
//            });
//            hm.on("swiperight",function(){
//                $('#carousel-example-generic').carousel('prev')
//            });
    var width = window.innerWidth;
    var height = window.innerHeight;
    $(".banner .item").css({
        "height":width+"px"
    });
    $(".black-banner-wrap .item").css({
        "height":height+"px"
    });
    $('#carousel-bigimg-generic').carousel({
        interval: false
    });
    //$(".item img").click(function(){
    //    return 1;
    //    var height = window.innerHeight;
    //    var src = $(this).attr("src");
    //    $(".black").css({
    //        "background-image":"url('" + src + "')",
    //        "height":height+"px"
    //    });
    //    $(".black").show();
    //});
    var heightActive = $(".black-banner-wrap .active img").height();
    var height = $(document).height();
    $(".item").click(function(){
        var index = $(this).index();
        $(".carousel-black .item").removeClass("active");
        $(".carousel-black .item").eq(index).addClass("active");
        var height = $(document).height();
        height = height + 110;
        var src = $(this).children().attr("src");
        $(".black").css({
            //"background-image":"url('" + src + "')",
            "height":height+"px"
        });
        $(".black").show();
        //window.webkit.messageHandlers.Native.postMessage('放大图片');
    });
    $(".black").click(function(){
        $(".black").hide();
        //window.webkit.messageHandlers.Native.postMessage('缩小图片');
    });
});
function height_Change(){
    var screenW = window.innerWidth;
    var screenH = window.innerHeight+64;
    var len = $(".js_banerBigImg img").length;
    for(var j=0;j<len;j++){
        var k=j;
        //if(j<len-1){
        //    k = j+1;
        //}else {
        //    k=0
        //}
        var imgW = $(".js_banerBigImg img").eq(k).width();
        var imgH = $(".js_banerBigImg img").eq(k).height();
        if(imgH>screenH){
            $(".js_banerBigImg img").eq(j).css({width:"auto",height:"100%"});
        }else {
            $(".js_banerBigImg img").eq(j).css({width:"100%",height:"auto"});
        }
    }
}
//隐藏弹窗
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_com_black").hide();
    $(".js_hide_com").hide();
    for (var i = 0; i < $(".js_addAddress_item").length; i++){
        $(".js_addAddress_item").eq(i).attr('del',0);
    }
}