/**
 * Created by Administrator on 2017/7/14.
 */
//把数字小数点后多余的0去掉
function price_format(){
    for(var i = 0;i<$(".js_price_zero").length;i++){
        var price = $(".js_price_zero").eq(i).text();
        price = parseFloat(price);
        $(".js_price_zero").eq(i).text(price);
    }
}