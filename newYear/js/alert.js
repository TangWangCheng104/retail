/**
 * Created by Administrator on 2017/1/15.
 */
$(function(){
    $(".js_sureBtn").click(function(){
        cancelAlert();
        $("#js_unoverBtn").hide();
        $("#js_overBtn").show();
        $(".js_title").hide();
    });
    $(".js_rule").click(function(){
        $(".js_com_black").show();
        $(".js_ruleAlert").show();
    });
    $(".js_creater").click(function(){
        if($("#js_title01").val()!=""&&$("#js_title02").val()!=""&&$("#js_num").val()!=""&&$("#js_error01").html()==""&&$("#js_error02").html()==""){
            alertFunc();
        }
    });
});
function alertFunc(){
    $(".js_com_black").show();
    $(".js_sureAlert").show();
}
function cancelAlert(){
    $(".js_com_black").hide();
    $(".js_hide_com").hide();
}
