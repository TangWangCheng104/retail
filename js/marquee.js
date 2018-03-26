var marquee = {
	marquee(){
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
	}
}
