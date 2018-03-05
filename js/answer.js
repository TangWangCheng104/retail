/**
 * Created by Administrator on 2017/8/29.
 */
$(function(){
    //contiTopic('您还剩60题未做，确定提交');
    //链接hammer.min.js + js/jquery.hammer.js时用下面两个方法实现手势滑动
    $('#carousel-answer').hammer().on('swipeleft', function(){
        page_Btn();
    });
    $('#carousel-answer').hammer().on('swiperight', function(){
        pageL_Btn();
    });
});
function answerSheet(){
    $("#J_myAnswer_alert").show();
    $("#J_myAnswer").hide();
}
function contiTopic(conf){
    var r=confirm(conf);
    if (r==false) {
        $('#carousel-answer').carousel(0);
    }else {
        return true;
    }
}
//跳下一页按钮的变化
function page_Btn(){
    $(".js_lastPage").parent().show();
    var page = $(".js_answer_page.active").find(".js_num").text().trim();
    var pageL = $(".js_answer_page").length;
    if(page==pageL){
        $(".js_nextPage").parent().hide();
        $(".js_submitPage").parent().show();
    }else{
        $('#carousel-answer').carousel('next');
        if(page==pageL-1) {
            $(".js_nextPage").parent().hide();
            $(".js_submitPage").parent().show();
        }else {
            $(".js_nextPage").parent().show();
            $(".js_submitPage").parent().hide();
        }
    }
}

//跳上一页按钮的变化
function pageL_Btn(){
    $(".js_nextPage").parent().show();
    $(".js_submitPage").parent().hide();
    var page = $(".js_answer_page.active").find(".js_num").text().trim();
    var pageL = $(".js_answer_page").length;
    if(page==1){
        $(".js_lastPage").hide();
    }else {
        $('#carousel-answer').carousel('prev');
        if(page==2){
            $(".js_lastPage").parent().hide();
        }else {
            $(".js_lastPage").parent().show();
        }
    }
}