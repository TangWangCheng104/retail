
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
    setTimeout(function(){
    	newspSwiper.swiper("Swiper3d");
	    newspSwiper.bigSwiper("bigSwiper3d");
	    newspSwiper.clickBig( $('Swiper3d .swiper-list') );
    },10)
    $('#Swiper3d').on("click",".swiper-list",function(){
    	var index = $(this).index("#Swiper3d .swiper-list")
    	newspSwiper.clickBig(index);
    })
    //点击3d轮播图大图，蒙版和大图消失
    
    $('#bigSwiper3d').on("click",".swiper-list",function(){
    	newspSwiper.clickHide()
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

//3d轮播图
var newspSwiper = {
	//普通的轮播图，通过css3放大和移动两个属性制作
	swiper(obj){
		console.log( $("#"+obj +' .swiper-list').length )
		if( $('#'+obj+' .swiper-list').length >= 2 ){
			var i = 1;
			//Swiper3d宽度
			var Swiper3dWidth = $("#"+obj).width();
			$("#"+obj+" .swiper-list").css({
				"width":Swiper3dWidth / 3,
				"height":Swiper3dWidth / 3
			})
			//list个数
			var insertBeforeListLength = $("#"+obj+" .swiper-list").length;
			console.log(insertBeforeListLength)
			//下面小圆点的个数
			for(var k = 1;k<insertBeforeListLength;k++){
				var cricleDot = '<li class="Swiper3d-cricle-list"></li>'
				$('#Swiper3dCricle').append(cricleDot);
				$("#Swiper3dCricle .Swiper3d-cricle-list").eq(0).addClass('cricleActive3d');
			}
			//list宽度
			var listWidth = $("#"+obj+" .swiper-list").eq(0).width();
	//		//第二张是最后一张图
			var fristPic = $('#'+obj+' .swiper-list').eq( insertBeforeListLength - 1 ).clone();
			//倒数第二张是第一张
			var secondPic = $('#'+obj+' .swiper-list').eq( insertBeforeListLength - 2 ).clone();
			//最后一张是第一张图，这样就形成循环了
			var lastPic = $('#'+obj+' .swiper-list').eq( 0 ).clone();
			$(lastPic).appendTo( $("#"+obj))
			$(fristPic).insertBefore( $('#'+obj+' .swiper-list').eq( 0 ) );
			$(secondPic).insertBefore( $('#'+obj+' .swiper-list').eq( 0 ) );
			//list个数
			var listLength = $("#"+obj+" .swiper-list").length;
			//ul的宽度
			console.log(  listWidth )
			$('#'+obj).css({"width":listLength * listWidth})
			
			$("#"+obj).css({
				"left": -listWidth * i
			});
			$('#'+obj+' .swiper-list').eq(i + 1).addClass("active3d").siblings().removeClass("active3d");
				
			console.log( $("#"+obj).css("width") )
			function swiperLeave(){
				i++;
				$("#"+obj).css({
					"left": -listWidth * i,
					"transition":"all .5s"
				});
				//li变大
				$('#'+obj+' .swiper-list').eq(i + 1).addClass("active3d").siblings().removeClass("active3d");
				//变红
				$('#Swiper3dCricle .Swiper3d-cricle-list').eq( i-1 ).addClass('cricleActive3d').siblings().removeClass('cricleActive3d');
				if( i >= listLength - 2 ){
					$("#"+obj).css({
						"transition":"auto",
						"left":0
					})
					
					
					
//					console.log(i)
//					$('#'+obj+' .swiper-list').eq( 1 ).css({
////						"transition":"auto",
//					}).addClass('active3d');
				}
				if( i >= listLength - 3 ){
					
					$('#'+obj+' .swiper-list').eq( 1 ).css({
//						"transition":"auto",
					}).addClass('active3d');
				}
				if( i >= listLength - 1 ){
					i = 0;
					
//						$("#"+obj).css({
//							"left": -listWidth * i,
////							"transition":"all .5s"
//						});
					
				}
				if( i < 0 ){
					$("#"+obj).css({
						"transition":"auto",
						"left": - listWidth * ( listLength - 4 )
					})
					$('#'+obj+' .swiper-list').eq( listLength - 3 ).css({
						"transition":"auto",
					}).addClass('active3d');
					i = listLength - 3;
					
				}
			}
			var timer = setInterval(swiperLeave,2000);
			//手势滑动事件
			//上一张，下一张的手动滑动事件
			
			var startX ,startY;
			$('#'+obj+' .swiper-list').on("touchstart",function(e){
				startX = e.originalEvent.touches[0].clientX;
			})
			endX = startX;
			$('#'+obj+' .swiper-list').on("touchmove",function(e){
				endX = e.originalEvent.touches[0].clientX;
				clearInterval( timer );
			})
			$('#'+obj+' .swiper-list').on("touchend",function(e){
				if( startX > endX + 10 ){
					clearInterval( timer );
					console.log("next")
					swiperLeave()
					timer = setInterval(swiperLeave,2000);
					console.log( timer )
					
				}
				else if( startX < endX - 10 ){
					clearInterval( timer );
					console.log("prev")
					i-=2;
					swiperLeave()
					timer = setInterval(swiperLeave,2000);
					console.log( timer )
					
				}
			})
		}
		else if( $("#"+obj +' .swiper-list').length == 1 ){
			//Swiper3d宽度
			var Swiper3dWidth = $("#"+obj).width();
			$("#"+obj+" .swiper-list").css({
				"width":Swiper3dWidth / 3,
				"height":Swiper3dWidth / 3
			})
			$('.newsp-swiper').css({"height":Swiper3dWidth / 3 + 170});
			console.log($('.newsp-swiper').css("height") )
			var insertBeforeListLength = 1;
			//下面小圆点的个数
			for(var k = 1;k<insertBeforeListLength;k++){
				var cricleDot = '<li class="Swiper3d-cricle-list active3d"></li>'
				$('#Swiper3dCricle').append(cricleDot);
			}
			//list个数
			var listLength = 1;
			//list宽度
			var listWidth = Swiper3dWidth / 3;
			//ul的宽度
			$('#'+obj).css({"width":listLength * listWidth})
			$(".newsp-swiper" ).css({
				"display":"flex",
				"align-items":"center",
				"justify-content":"center"
			})
			$("#"+obj ).css({
				"left":"auto",
				"transform":"scale(1.5,1.5)"
			})
			$("#"+obj +'.swiper-list').eq( 0 ).addClass('active3d');
			
		}else if( $("#"+obj +' .swiper-list').length == 2 ){
//			//Swiper3d宽度
//			var Swiper3dWidth = $("#"+obj).width();
//			$("#"+obj+" .swiper-list").css({
//				"width":Swiper3dWidth / 3,
//				"height":Swiper3dWidth / 3
//			})
//			var insertBeforeListLength = 2;
//			//下面小圆点的个数
//			for(var k = 1;k<insertBeforeListLength;k++){
//				var cricleDot = '<li class="Swiper3d-cricle-list active3d"></li>'
//				$('#Swiper3dCricle').append(cricleDot);
//			}
//			//list个数
//			var listLength = 2;
//			//list宽度
//			var listWidth = Swiper3dWidth / 3;
//			//ul的宽度
//			$('#'+obj).css({"width":listLength * listWidth})
//			$('#'+obj + " .newsp-swiper").eq(0)({
//				
//			}).addClass("active3d");
//			
//			
//			$(".newsp-swiper" ).css({
//				"display":"flex",
//				"align-items":"center",
//				"justify-content":"center"
//			})
//			$("#"+obj ).css({
//				"left":"auto",
//				"transform":"scale(1.5,1.5)"
//			})
//			$("#"+obj +'.swiper-list').eq( 0 ).addClass('active3d');
//			$('.newsp-swiper').css({"height":Swiper3dWidth / 3 * 1.5 + 170});
		}
		//点击轮播图，，出现较大的轮播图
		var that = this;
		$('#Swiper3d .swiper-list').click(function(){
			that.clickBig( $('#Swiper3d .swiper-list') );
		})
	},
	bigSwiper(obj){
		
		var i = 0;
		//Swiper3d宽度
		var Swiper3dWidth = $("#"+obj).width();
		$("#"+obj+" .swiper-list").css({
			"width":Swiper3dWidth
		})
		//list个数
		var insertBeforeListLength = $("#"+obj+" .swiper-list").length;
		//下面小圆点的个数
		for(var k = 1;k<insertBeforeListLength;k++){
			var cricleDot = '<li class="Swiper3d-cricle-list bigActive3d"></li>'
			$('#bigSwiper3dCricle').append(cricleDot);
		}
		//list宽度
		var listWidth = $("#"+obj+" .swiper-list").eq(0).width();
//		//第二张是最后一张图
		var fristPic = $('#'+obj+' .swiper-list').eq( insertBeforeListLength - 1 ).clone();
		//倒数第二张是第一张
		var secondPic = $('#'+obj+' .swiper-list').eq( insertBeforeListLength - 2 ).clone();
		//最后一张是第一张图，这样就形成循环了
		var lastPic = $('#'+obj+' .swiper-list').eq( 0 ).clone();
		$(lastPic).appendTo( $("#"+obj))
		$(fristPic).insertBefore( $('#'+obj+' .swiper-list').eq( 0 ) );
		$(secondPic).insertBefore( $('#'+obj+' .swiper-list').eq( 0 ) );
		//list个数
		var listLength = $("#"+obj+" .swiper-list").length;
		//ul的宽度
		console.log(  listWidth )
		$('#'+obj).css({"width":listLength * listWidth})
		//
		console.log( $("#"+obj).css("width") )
		function bigSwiperLeave(){
			//向右移动
			i++;
			$("#"+obj).css({
				"left": -listWidth * i,
				"transition":"all .5s"
			});
			//li变大
			$('#'+obj+' .swiper-list').eq(i + 1).addClass("bigActive3d").siblings().removeClass("bigActive3d");
			//变红
			$('#bigSwiper3dCricle .Swiper3d-cricle-list').eq( i - 1 ).addClass('cricleActive3d').siblings().removeClass('cricleActive3d');
			if( i < 0 ){
				console.log(i)
				i = listLength - 3;
				$("#"+obj).css({
					"transition":"auto",
					"left": -listWidth * i
				})
				console.log(i)
			}
			if( i >= listLength - 2 ){
				$("#"+obj).css({
					"transition":"auto",
					"left":0
				})
//				$( fristPic ).css({
//					"transition":"auto",
//				}).addClass('active3d bigActive3d');
				i = -1;
			}
			
		}
		var timer = setInterval(bigSwiperLeave,2000)
		//手势滑动事件
			//上一张，下一张的手动滑动事件
			
			var startX ,startY,endX;
			$('#'+obj+' .swiper-list').on("touchstart",function(e){
				startX = e.originalEvent.touches[0].clientX;
			})
			endX = startX;
			$('#'+obj+' .swiper-list').on("touchmove",function(e){
				endX = e.originalEvent.touches[0].clientX;
				clearInterval( timer );
			})
			$('#'+obj+' .swiper-list').on("touchend",function(e){
				if( startX > endX + 5 ){
					clearInterval( timer );
					console.log("next")
					bigSwiperLeave()
					timer = setInterval(bigSwiperLeave,2000);
					console.log( timer )
					
				}
				else if( startX < endX - 5 ){
					clearInterval( timer );
					console.log("prev")
					i-=2;
					bigSwiperLeave()
					timer = setInterval(bigSwiperLeave,2000);
					console.log( timer )
					
				}
			})
	},
	clickBig(t){
		if($('#Swiper3d .swiper-list').eq(t).hasClass("active3d")){

			$('.newsp-bigSwiper-wrap .newsp-swiper').css({
				"opacity":1,
				"z-index":1050
			});
			$(".newsp-bigSwiper-wrap").css({
				"opacity":1,
				"z-index":1050
			})
			$('#bigSwiper3dCricle').css({
//				"z-index":1050,
//				"position":"relative"
			})
			$('#jsBlackBg').show();
			$('body html').addClass('ovfHiden');

		}
		else{
			
		}
	},
	clickHide(){
		$('.newsp-bigSwiper-wrap .newsp-swiper').css({
			"opacity":0,
			"z-index":-1
		});
		$(".newsp-bigSwiper-wrap").css({
			"z-index":-1
		})
		$('#bigSwiper3dCricle').css({
//			"z-index":-1
		})
		$('#jsBlackBg').hide();
		$('body html').removeClass('ovfHiden');
	}
	
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


