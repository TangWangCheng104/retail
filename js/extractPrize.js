//$(function(){
//	var length = $(".prize-consolation-wrap .prize-border1-list").length;
//	if( length == 1){
//		$(".prize-border1-list").addClass("prize-border-position")
//	}else{
//		$(".prize-border1-list").removeClass("prize-border-position");
//	}
//})
//视频播放的按钮prizeVideo
var prizeVideo = {

    play:function ( videoId ) {
//      $(".js_com_black").show();
//      $(".js_videoDiv").show();
//     $("#J_myVideo")[0].play();//动态播放、暂停视频
//     $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚

        var src1 = $('#' + videoId ).find('source').attr('src');
        var doc = "<video id='"+videoId+"' class='prize-index-video' controls onended='prizeVideo.playEnd()'><source src=" + src1 + " type='video/mp4'  >当前浏览器不支持 video直接播放，点击这里下载视频： <a href='https://oss.pg.yibaotong.top/files/item_video/20171019_offline/1572865173100.mp4'>下载视频</a></video>";
        $('#'+videoId).remove();
        // console.log(src1);
        $(doc).appendTo($('.js_videoDiv'));

        $("#" + videoId)[0].play();//动态播放、暂停视频
        $("#" + videoId).css({"width":"100%","height":"100%"});
        
        pushHistory();
		
        /*var htmlClientWidth = parseInt(document.documentElement.clientWidth);
        var htmlClientheight = parseInt(document.documentElement.clientHeight);*/
        // $("#J_myVideo").css({ 'width':"100%","height":'100%' })

        // $("#J_myVideo").css({ 'width':htmlClientWidth,"height":htmlClientheight })
        // notFullScreen( htmlClientWidth,htmlClientheight )
        // launchFullscreen($("#J_myVideo")[0])
    },
    pause:function( videoId ){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $("#" +videoId)[0].pause();//动态播放、暂停视频
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    playEnd: function () {
        window.location.reload();
//      $(".js_com_black").hide();
//      $(".js_videoDiv").hide();
//      $(".js_hide_com").hide();
//      $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    cancelAlert:function(){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
    },
    closeVideo1:function( videoId ){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $("#"+videoId)[0].pause();//动态播放、暂停视频
        $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
        window.history.back();
        // var a = 1 ;
        // notFullScreen()
    },
    closeVideo:function( videoId ){
        $(".js_com_black").hide();
        $(".js_videoDiv").hide();
        $(".js_hide_com").hide();
        $("#" + videoId)[0].pause();//动态播放、暂停视频
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