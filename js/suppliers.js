/**
 * Created by Administrator on 2017/10/24.
 */
/*点击选择合作展厅*/
$(function(){
    $('.suppliers-radio1').on("click","li",function(){
        var index = $(this).index('.suppliers-radio1 li');
        if(!$("#suppliers-all-choice li").eq(index).find("span").eq(0).hasClass("suppliers-radio-bg1")){
            $(this).find('.suppliers-radio').addClass("suppliers-radio-bg").parent().siblings().find('.suppliers-radio').removeClass("suppliers-radio-bg")
        }
    })
    $('.suppliers-close').click(function(){
        $('.delete-address-alert-info').hide();
        $('.com_black').hide();
    })
    /*判断全选*/
    var count = 0;
    for(var i=0;i<$("#suppliers-all-choice li").length;i++){
        if($("#suppliers-all-choice li").eq(i).find("span").eq(0).hasClass("suppliers-radio-bg1")){
            count++;
        }
    }
    if(count == $("#suppliers-all-choice li").length){
        $('.suppliers-already').show();
        $('.suppliers-sure').hide();
    }
})





