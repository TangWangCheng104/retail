$(function(){
	othreePageSwiper.swiper( 1000 );
})
var othreePageSwiper = {
	swiper( speed ){
		var swiperWrapWidth = parseInt( $(".swiper-wrap").parent().width() );
		var swiperListWidth = swiperWrapWidth / 3;
		var swiperListLength = $(".swiper-wrap .swiper-list").length;
		//增加一张轮播图，最后一张变成第一张
		var lastPic = $(".swiper-wrap .swiper-list").eq( swiperListLength - 1 ).clone();
		$( lastPic ).insertBefore( $(".swiper-wrap .swiper-list").eq(0) );
		
		var swiperListLength = $(".swiper-wrap .swiper-list").length;
		$(".swiper-wrap .swiper-list").css("width",swiperListWidth);
		$(".swiper-wrap").css( "width",swiperListLength * swiperListWidth );
//		console.log( $(".swiper-wrap").width() )
		
		//轮播
		//自动轮播
		var timer = setInterval(autoplaySwiper,speed);
		var i = 0;
		
		function autoplaySwiper(){
			i ++;
			$(".swiper-wrap").css({ left:-( i * swiperListWidth ),transition:"all 0.5s" })
			$(".swiper-wrap .swiper-list").eq(i).addClass("swiper-active");
			
			//如果到了最后一张的时候,就重头再来
			if( i > swiperListLength-2 ){
				i = 1;
				$(".swiper-wrap").css({ left:"30px",transition:"none" });
				var TimeoutTimer = setTimeout(function(){
					$(".swiper-wrap").css({ left:- swiperListWidth ,transition:"all 0.5s" })
					clearTimeout( TimeoutTimer );
				},10)
			}
			//如果到了第一张之前的时候,到最后一张
			
			if( i < 1 ){
				i = swiperListLength - 1;
				$(".swiper-wrap").css({ left: -( swiperListLength * swiperListWidth ),transition:"none" });
				var TimeoutTimer = setTimeout(function(){
					$(".swiper-wrap").css({ left:-( (swiperListLength-1 ) * swiperListWidth ) ,transition:"all 0.5s" })
					clearTimeout( TimeoutTimer );
				},10)
			}
			
		}
		//下一张
//		function nextPic(){
//			clearInterval( timer );
//			autoplaySwiper();
//			var timer = setInterval(autoplaySwiper,speed);
//		}
		//上一张，下一张的手动滑动事件
		let startX ,startY;
		$('.swiper3d-list').on("touchstart",function(e){
			startX = e.originalEvent.touches[0].clientX;
		})
		$('.swiper3d-list').on("touchmove",function(e){
			endX = e.originalEvent.touches[0].clientX;
		})
		$('.swiper3d-list').on("touchend",function(e){
			if( startX > endX + 5 ){
				nextPic();
			}
			else if( startX < endX - 5 ){
				swiper.pre();
			}
		})
		$('#threePageSwiper').hammer().on('swipeleft', function(){
    		$(this).carousel("next");
	    });
	    $('#threePageSwiper').hammer().on('swiperight', function(){
    		$(this).carousel("prev");
	    });
	    
		$("#next").click(function(){
			clearInterval( timer );
			autoplaySwiper();
			timer = setInterval(autoplaySwiper,speed);
		})
		$("#prev").click(function(){
			clearInterval( timer );
			i -= 2;
			autoplaySwiper();
			timer = setInterval(autoplaySwiper,speed);
		})
//		return {
//			nextPic,
//			_self : this
//		}
	}
}
