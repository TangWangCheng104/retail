require.config({
	paths:{
		"jquery":'jquery-1.10.2.min'
	}
})
require(['jquery'],function($){
	/*lazyload*/
	$('body').click(function(){
		console.log(11)
		require('[jquery.lazyload]',function(lazyload){
//		lazyload()
			console.log("lazyload")
		})
		require('[bootstrap.min]',function(bootstrap){
//			bootstrap()
			console.log("bootstrap")
		})
		require('[jquery.validate]',function(validate){
//			validate()
			console.log("validate")
		})
		require('[hammer.min]',function(hammer){
//			hammer()
			console.log("validate")
		})
		require('[jquery.hammer]',function(hammer){
//			hammer()
			console.log("hammer")
		})
		require('[loginVerify]',function(loginVerify){
//			loginVerify()
			console.log("loginVerify")
		})
		require('[app_product]',function(app_product){
//			app_product()
			console.log("app_product")
		})
		require('[retail_cofirmBuying]',function(retail_cofirmBuying){
//			retail_cofirmBuying()
			console.log("retail_cofirmBuying")
		})
		require('[kandan]',function(kandan){
//			kandan()
			console.log("kandan")
		})
		
		/*懒加载*/
            myLazy();
            /*bootstap懒加载*/
            bootstapLazy();

            let maxPrice = 60000;
            let minPrice = 50000;
            let nowPrice = 60000;
            let startTime = 1513582779588;
            let endTime = 1513581962383;
            let userSelfName = "罗勇罗勇罗勇";

            let percent =( 1 -  (nowPrice-minPrice)/(maxPrice-minPrice) ) * 100;
            /*这里是进度条的进度*/
            $('.icon-jidutiao').css('width',percent - 5 +'%');

            //拼单活动时间倒计时
            timer01( startTime - endTime);
            /*名字省略的函数*/
            usernameEllepsis();
            showNameFourWord(t);
            string_cut();
            /*进度条上面的字的设置*/
            /*获取元素的宽高kandanNowPrice*/
            var NowPriceWidth = $("#kandanNowPriceWrap")[0].offsetWidth;
            var htmlWidth = document.body.clientWidth;
            var left = parseInt($('#kandanBgGzIcon').offset().left);
            var offsetLeft = parseInt($('#kandanNowPriceWrap').offset().left);
            console.log(offsetLeft);
            console.log(NowPriceWidth);


            setTimeout(timeout,10);
            // timeout()
            function timeout(){
                if(parseInt(NowPriceWidth) + parseInt(offsetLeft) > htmlWidth){
                    var LeftDis = parseInt(NowPriceWidth) + parseInt(offsetLeft) - htmlWidth
                    $("#kandanNowPrice").parent().css("left",-( NowPriceWidth ) * .6  );
                    $('#kandanUsername').css("left", - 25 + "px")
                    console.log(11);
                }else if( left <= NowPriceWidth * .5 && left > offsetLeft ){
                    $("#kandanNowPrice").parent().css("left", 0 );
                    $('#kandanUsername').css("left", 0 );
                    console.log(22);
                }else{
                    $("#kandanNowPrice").parent().css("left",- NowPriceWidth * .5 + 20 );
                    console.log($("#kandanNowPrice").parent().css("left"));
                    $('#kandanUsername').css("left", -15 + "px")
                    console.log(33);
                }
            }
            /*获取元素的宽高kandanNowPrice*/
            var NowPrice = $("#kandanNowPrice").width()
            $("#kandanNowPrice").parent().css("left",-NowPrice * .5 );
            /*到达底价是默认显示是荣誉榜*/
            if( nowPrice == minPrice){
                tapHonor();
            }
            else {
                tapAdvance()
            }
            /*有人帮砍单弹出弹出框*/
            KandanAlert();
            /*点击查看更多*/
            $('.js-check-more').click(function () {
                for(let i = 0 ; i < 10 ; i++){
                    $(this).parent().siblings('.kandan-list-sort,.kandan-browse-record-list').eq(i).show()
                    $(this).parent().siblings('.kandan-list-last').show();
                    $(this).parent().hide();
                }
            })
            var windowHeight = document.documentElement.clientHeight;
            /*刷新的时候也需要判断二维码这些是否隐藏*/
            let scrollTop = document.body.scrollTop;
            if(scrollTop >= windowHeight){
                $(bottomBuyBtn).show();
                $('#wxCode').show();
                $('#myKanjia').show();
                $('.booking-back-to-top').show();
                $('.booking-back-to-top').click(function(){
                    $(window).scrollTop("0");
                })
            }else {
                $(bottomBuyBtn).hide();
                $('#wxCode').hide();
                $('#myKanjia').hide();
            }
//            var bottomBuyBtnHeight = bottomBuyBtn.offsetTop;
            $(window).scroll(function(e){
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop >= windowHeight){
                    $(bottomBuyBtn).show();
                    $('#wxCode').show();
                    $('#myKanjia').show();
                    $('.booking-back-to-top').show();
                    $('.booking-back-to-top').click(function(){
                        $(window).scrollTop("0");
                    })

                }else {
                    $(bottomBuyBtn).hide();
                    $('#wxCode').hide();
                    $('#myKanjia').hide();
                }
            });

            /*未登录的遮罩层显示，然后三秒后消失的方法*/
            kandanNotLoginfn();
             var i = 0;
		    var t = setInterval(function(){
		        var m = $(".js_text_item").eq(0).parent().html();
		        var d = '<div class="js_Text_item">'+ m + ' </div>';
		        $(".js_text_item").eq(0).animate({
		            "opacity":"0",
		//            "width":"0",
		            "height":"0",
		            "padding":"0"
		        },'1000',function(){
		            $(".js_Text_item").eq(0).remove();
		        });
		        $("#demo1").append(d);
		        i++;
		        if(i==4){
		            i=0
		        }
		    },2000);
		
		
		
	})
	
	function buy_click() {
            var s = $("#js_style").find(".selected");
            var num = $("#js_num").find(".num");
            var showmsg = s.text() + "," + num.val();
            lazyContainer('.black-banner-wrap');
        }
//      $(function () {
//
//          
//      });
//      
})

