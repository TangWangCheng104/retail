/**
 * Created by Administrator on 2017/8/24.
 */

$(function(){
    //这个js要写在页面最底下才有效或者加load方法里执行

    $(window).load(function(){
        var gdHeight = $("#J_goodDetails").outerHeight();
        gdHeight = gdHeight - 100;
        var bannerH = $("#banner").height();
        //页面滚动到900px时 回到顶部按钮显示，否则隐藏
        $(window).scroll(function (){
            if($(window).scrollTop()<bannerH){
                var opacity = $(window).scrollTop()/bannerH;
                $("#J_gdMenu").css({"opacity":opacity});
            }else {
                $("#J_gdMenu").css({"opacity":"1"});
            }
            //等号很重要，影响到后面的切换菜单
            if ($(window).scrollTop()>=gdHeight) {
                $(".js_gdMenu").removeClass("active");
                $(".js_gdMenu").eq(1).addClass("active");
            }else {
                $(".js_gdMenu").removeClass("active");
                $(".js_gdMenu").eq(0).addClass("active");
            }
        });
        //点击切换菜单样式，滚动到相应的位置
        $(".js_gdMenu").on('click',function(){
            var index = $(this).index();
            if(index==0){
                $('body,html').animate({ scrollTop: 0 }, 800);
            }else if(index==1){
                $('body,html').animate({ scrollTop: gdHeight}, 800);
            }
        });
    });
});

var series ={
    //设置成正方形的图
    squareImg:function (){
        var rangeW = $(".js_rangeGoods").width();
        $(".js_rangeGoods").find(".img-group").css({"width":rangeW,"height":rangeW});
    }
};

var video = {

    play:function () {
//      $(".js_com_black").show();
        $(".js_videoDiv").show();
//     $("#J_myVideo")[0].play();//动态播放、暂停视频
//     $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚

        var src1 = $('#J_myVideo').find('source').attr('src');
        var doc = "<video id='J_myVideo' class='js_myVideo myVideo' autoplay playsinline controls onended='video.playEnd()'><source src=" + src1 + " type='video/mp4'  >您的浏览器不支持 video 标签。</video>";
        $('#J_myVideo').remove();
        // console.log(src1);
        $(doc).appendTo($('.js_videoDiv'));

        $("#J_myVideo")[0].play();//动态播放、暂停视频
        $("#J_myVideo").css({"width":"100%","height":"100%"});
        
        pushHistory();
		
        /*var htmlClientWidth = parseInt(document.documentElement.clientWidth);
        var htmlClientheight = parseInt(document.documentElement.clientHeight);*/
        // $("#J_myVideo").css({ 'width':"100%","height":'100%' })

        // $("#J_myVideo").css({ 'width':htmlClientWidth,"height":htmlClientheight })
        // notFullScreen( htmlClientWidth,htmlClientheight )
        // launchFullscreen($("#J_myVideo")[0])
    },
    pause:function(){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $("#J_myVideo")[0].pause();//动态播放、暂停视频
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    playEnd: function () {
        window.location.reload();
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    cancelAlert:function(){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    closeVideo:function(){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $("#J_myVideo")[0].pause();//动态播放、暂停视频
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
        // var a = 1 ;
        // notFullScreen()
    }

};
/*让手机点击后退之后还是原来的地址*/
function pushHistory() {
    
    var pamaras = location.href;
    window.history.pushState(null, null, pamaras);
    
}
/*这个是获取元素宽高的方法*/
function getStyleAttr(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}
/*关闭二维码的弹出框*/
function closeCode(){
    $('.new-year-code').fadeOut(300)
    $("#com_black").fadeOut(300)
}
/*选择款式弹出框中，切换商品图的大小*/
function tapImgFn(){
   	$('.black-back-groud-board,.retail-bigImg').toggle();
}

