(function(e){ 
	let screenWidth = parseFloat( document.documentElement.clientWidth )  ;
	
	let liWidth = screenWidth * .92 / 3;
	let liRight = screenWidth * .92 - liWidth;
	$('.swiper3d-list').css({'width':liWidth / 100 + "rem","height":liWidth / 100 + "rem"}); 
	let liLength = parseFloat( $( '.swiper3d-list' ).length );
	
	//判断图片宽高，让图片较窄的那部分完全显示
	$(".swiper3d-list").each(function(){
		let thisImgWidth = $(this).find("img").width();
		let thisImgHeight = $(this).find("img").height();
		if( thisImgWidth > thisImgHeight ){
			$(this).find("img").css({"height":"100%","width":"auto"})
		}else if( thisImgWidth <= thisImgHeight ){
			$(this).find("img").css({"width":"100%","height":"auto"})
		}
	})
	
//	$('.swiper3d-content').css( "width",liWidth * liLength );
	let imgWidth = parseInt( $('.imgLeft').eq(0).width() / 2 );
//	console.log( $('.swiper3d-content').css( "width" ) )
	console.log( liWidth  )
//	console.log( imgLeft  )
	console.log( "screenWidth:" + screenWidth )
	console.log( liWidth + "," + liLength + "," + $('.swiper3d-content').css('width') );
//	//把最后一张图插入到第一张图前面
//	let firstImg = $('.swiper3d-list').eq( liLength-1 ).clone();
//	$( firstImg ).insertBefore( $('.swiper3d-list').eq(0) );
//	//把轮播图的第一张复制给轮播图的最后一张
//	let lastImg = $('.swiper3d-list').eq(1).clone();
//	console.log( $( lastImg ) )
//	$( lastImg ).appendTo( $('.swiper3d-content') );
	
	//轮播图;
	let timer ;
	let i = 1;
	//li的宽度
	let swiper3dListWidth = $('.swiper3d-list').eq(i).width();
	//空余部分的宽度
	let leaveLeft = ( screenWidth * .92 - swiper3dListWidth ) / 2;
	$('.swiper3d-list').eq(i).siblings().css({
		"left":0,
		"right":"auto"
	})
	$('.swiper3d-list').eq(i).css({
			"transform":"scale(1.7,1.7)",
			"z-index":1030,
			"left" : 0,
			"right" : 0,
			"margin" : "auto"
//			"transform":"translateX("+ (leaveLeft + swiper3dListWidth / 2) +")"
			
		}).addClass("active").next().css({
//			"transform":"translateX("+ screenWidth * .92 - swiper3dListWidth +")",
			"right" : 0,
			"left" : "auto"
		});
	
	swiperFn = () => {
//		i++;
//		$('.swiper3d-list').eq(i).css({
//			"transform":"scale(1.7,1.7)",
//			"z-index":1030,
//			"left" : .25 * screenWidth,
//			"right" : "auto",
////			"left":"auto",
////			"transform":"translateX("+ - (leaveLeft + swiper3dListWidth / 2) +")"
//		}).addClass("active").siblings().css({
//			"transform":"scale(1,1)",
//			"z-index":1,
//			"right" : "auto",
//			"left":"auto"
//		}).removeClass("active");
		$('.swiper3d-list').each(function(){
			if( $(this).hasClass("active") ){
				//进入计时器先将有active的前后两张图处理掉
				//如果有多张图的话，前面一张位置不变不变，只有三张图或者两张图再处理
				//后面一张图移到中间去
				$()
				$(this).css({
			"transform":"scale(1.7,1.7) translateX("+ - (leaveLeft + swiper3dListWidth / 2) +")",
			"z-index":1030,
			"right" : 0,
			"left" : "auto"
		}).next().css({
					"right" : 0,
					"left" : "auto"
				}).siblings().not( $(this) ).css({
					"right" : "auto",
				});
				
//				if( !$(this).prev().length ){
//					console.log("第一张")
//					$('.swiper3d-list').eq( liLength-1 ).css( {"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth +")","z-index":2} );
//					$( this ).next().css( {"transform":"translateX(" + - (leaveLeft + swiper3dListWidth / 2) + ")","z-index":2} );	
//					
//				}else if( !$(this).next().length ){
//					console.log("最后一张")
//					
//					$('.swiper3d-list').eq(0).css( {"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth +")","z-index":2} );
//					$( this ).prev().css( {"transform":"translateX(" + - (leaveLeft + swiper3dListWidth / 2) + ")","z-index":2} );	
//					i = -1;
//				}else{
					$( this ).next().css({
						"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth +")",
						"transform":"scale(1.7,1.7)",
						"right" : "auto",
						"left":"auto",
						"z-index":1030,}).addClass("active").siblings().css({
						"transform":"scale(1,1)",
						"z-index":2,
						"right" : "auto",
						"left":"auto"
					}).removeClass("active");
					$( this ).prev().css( {
						"transform":"translateX(" + (-( leaveLeft + swiper3dListWidth / 2 ))+ ")"} );
//					
				}
//			}
		})
//		if( i >= liLength-1 ){
//////			$('.swiper3d-list').eq(0).css( {"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth +")","z-index":2} );
//////			$('.swiper3d-list').eq(i).prev().css( {"transform":"translateX(" + - (leaveLeft + swiper3dListWidth / 2) + ")","z-index":2} );
////			$('.swiper3d-list').eq(0).css( {"transform":"translateX(150px)","z-index":2} );
////			$('.swiper3d-list').eq(i).prev().css( {"transform":"translateX(300px)","z-index":2} );
//			
//			$('.swiper3d-list').eq(0).css( {left : "auto",right : 0,"z-index":2} );
//			$('.swiper3d-list').eq(i).prev().css( {right : "auto",left : 0,"z-index":2} );
//			i = -1 ;
//			
//			
//		}else if( i == 0 ){
//			$('.swiper3d-list').eq( liLength-1 ).css( {right : "auto",left : 0,"z-index":2} );
//			$('.swiper3d-list').eq(i).next().css( {left : "auto",right : 0,"z-index":2} );
//////			$('.swiper3d-list').eq( liLength-1 ).css( {"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth + ")","z-index":2} );
//////			$('.swiper3d-list').eq(i).next().css( {"transform":"translateX(" + - (leaveLeft + swiper3dListWidth / 2) + ")","z-index":2} );
////			$('.swiper3d-list').eq( liLength-1 ).css( {"transform":"translateX(150px)","z-index":2} );
////			$('.swiper3d-list').eq(i).next().css( {"transform":"translateX(300px)","z-index":2} );
//			
//			
////			$('.swiper3d-list').eq(i).next().css( {"transform":"translateX(300px)","z-index":2} );
//		
//		}else{
//			console.log(1)
//			$('.swiper3d-list').eq(i).prev().css( {right : "auto",left : 0,"z-index":2} );
//			$('.swiper3d-list').eq(i).next().css( {left : "auto",right : 0,"z-index":2} );
//////			$('.swiper3d-list').eq(i).prev().css( {"transform":"translateX(" + screenWidth * .92 - swiper3dListWidth +")","z-index":2} );
//////			$('.swiper3d-list').eq(i).next().css( {"transform":"translateX(" + - (leaveLeft + swiper3dListWidth / 2)  +")","z-index":2} );
////			$('.swiper3d-list').eq(i).prev().css( {"transform":"translateX(150px)","z-index":2} );
////			$('.swiper3d-list').eq(i).next().css( {"transform":"translateX(300px)","z-index":2} );
//			
//		}
	}
	
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
			swiper.next();
		}
		else if( startX < endX - 5 ){
			swiper.pre();
		}
	})
//	console.log( EtouchStart )
	let swiper = {
	timer : setInterval(swiperFn,2000),
	pre() {
		console.log("pre")
		
		$('.swiper3d-list').each(function(){
			if( $( this ).hasClass("active") ){
				$(this).css({
					"transform":"scale(1.7,1.7)",
					"z-index":1030,
					"left" : .25 * screenWidth,
					"right" : "auto"
					
				}).addClass("active").siblings().css({
					"transform":"scale(1,1)",
					"z-index":1
				}).removeClass("active");
				console.log( !$(this).next() );
				console.log("pre")
//				
//				if(){
//
//					$('.swiper3d-list').eq(0).css( {left : "auto",right : 0,"z-index":2} );
//					$('.swiper3d-list').eq(i).prev().css( {right : "auto",left : 0,"z-index":2} );
//					i = -1 ;
//					
//					
//				}else if( i == 0 ){
//					$('.swiper3d-list').eq( liLength-1 ).css( {right : "auto",left : 0,"z-index":2} );
//					$('.swiper3d-list').eq(i).next().css( {left : "auto",right : 0,"z-index":2} );
//				}else{
//					$('.swiper3d-list').eq(i).prev().css( {right : "auto",left : 0,"z-index":2} );
//					$('.swiper3d-list').eq(i).next().css( {left : "auto",right : 0,"z-index":2} );
//				}
			}
		})
	},
	next() {
		console.log("next")
	}
}
})();

