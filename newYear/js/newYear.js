/**
 * Created by Administrator on 2017/1/16.
 */
$(function(){
    $(".js_modelSelect").click(function(){
        $(".js_modelSelect").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("#js_model").val(index);
        $(".js_photoModel").removeClass("active");
        $(".js_photoModel").eq(index).addClass("active");
    })
});
function num_keyup() {
    //获奖人数限制填写
    var num = $("#js_num");
    var txt = num.val();
    txt = parseInt(txt);
    num.val(txt);
    txt = num.val();
    s = parseInt(txt);
    $("#js_num").children().removeClass("disabled");
    if (txt >= 0) {
        num.val(txt);
    } else {
        num.val(1);
    }
    if(num.val()!=""){
        $("#js_error03").html("");
    }
}
function nickName(){
    var txt = $(".js_nickName_input").val();
    var len = 0;
    for (var i = 0; i < txt.length; i++) {
        if (txt[i].match(/[^\x00-\xff]/ig) != null){  //全角
            len += 2;
        }
        else
            len += 1;
    }
    if(len<=16){
        $(".js_nickName").html(txt);
    }else {
        alert("名字过长")
    }
}