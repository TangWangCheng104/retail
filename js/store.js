/**
 * Created by Administrator on 2017/8/9.
 */
$(function(){
    $(".js_nextPage").on("click",function(){
        var t = $('.js_selectType_item').offset().top;  //随滚动而变化
        var t0 = $(".js_select_type").offset().top;  //固定不变
        var p = parseInt((t0 - t)/240);
        var pn = (p+1)*240;
        $('.js_select_type').animate({ scrollTop: pn }, 800);
        //$('.js_select_type').prop('scrollTop',pn);
    });
    $(".js_lastPage").on("click",function(){
        var t = $('.js_selectType_item').offset().top;  //随滚动而变化
        var t0 = $(".js_select_type").offset().top;  //固定不变
        var p = parseInt((t0 - t)/240);
        var p1 =parseInt((t0 - t)%240);
        if(p1>0){
            p = p+1
        }
        var pn = (p-1)*240;
        $('.js_select_type').animate({ scrollTop: pn }, 800);
    });
    $(".js_store_item").on("click",function(){
        if(!$(this).find(".js_icon").hasClass("disabled")){
            $(this).find(".js_icon").toggleClass("selected");
            var len = $(".js_store_item").length;
            for(var i=0;i<len;i++){
                $(".js_count_selected").text($(".js_icon.selected").length);
            }
        }
    });
    //$(".js_type").on("click",function(){
    //    $('html,body').addClass('ovfHiden');//使弹窗后网页恢复不可滚
    //    $(".js_com_black").fadeIn();
    //    $(".js_typeSelect_alert").animate({bottom: "0"});
    //});
});
function cancelAlert_slide () {
    $(".js_black_type").fadeOut();
    $(".js_hide_com").fadeOut();
    $(".js_typeSelect_alert").animate({bottom: "-400px"});
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}
function lqy(){
    var r=confirm("Press a button");
    if (r==true)
    {

    }
    else
    {
        document.write("You pressed Cancel!")
    }
}
