/**
 * Created by Administrator on 2016/7/23.
 */
$(function(){
    
    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-example-generic').hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });
    $('#carousel-example-generic').hammer().on('swiperight', function(){
        $(this).carousel('prev');
    });
    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-bigimg-generic').hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });
    $('#carousel-bigimg-generic').hammer().on('swiperight', function(){
        $(this).carousel('prev');
    });

    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-generic').hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });
    $('#carousel-generic').hammer().on('swiperight', function(){
        $(this).carousel('prev');
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
    var height01 = window.innerHeight;
    $(".banner .item").css({
        "height":width+"px",
        "overflow":"hide"
    });
    $(".js_myVideo").css({
        "height":width+"px",
        "overflow":"hide"
    });
    //$(".js_videoDiv").css({
    //    "width":width+"px",
    //    "height":height01+"px"
    //});
    $(".black-banner-wrap .item").css({
        "height":height01+"px"
    });
    $('#carousel-bigimg-generic').carousel({
        interval: false
    });
    $('#carousel-answer').carousel({
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
    $(".js_item").click(function(){
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
function black_Func(){
    $(".black").show();
}
/*这个是获取元素宽高的方法*/
function getStyleAttr(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}

