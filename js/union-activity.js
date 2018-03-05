/**
 * Created by Administrator on 2017/10/18.
 */
//关闭弹窗
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_hide_com").hide();
    $('html,body').removeClass('ovfHiden'); //使弹窗后网页恢复可滚
}