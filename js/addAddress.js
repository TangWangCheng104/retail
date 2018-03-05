/**
 * Created by Administrator on 2017/5/15.
 */
//编辑地址
function editClick(obj){
    //$(".js_comBlack").show();
    //$(".js_phoneVerify_alert").show();
    var item = $(obj).parents(".js_addAddress_item");
    var name = item.find(".js_address_name").text();
    var phone = item.find(".js_address_phone").text();
    var detail = item.find(".js_address_detail").text();
    var index = $(obj).parents(".js_addAddress_item").index();
    $(".js_items_edit").hide();
    $(".js_item_info").show();
    item.find(".js_item_info").hide();
    $(".js_item_edit").hide();
    item.find(".js_item_edit").show();
    item.find(".js_name").val(name);
    item.find(".js_phone").val(phone);
    item.find(".js_address").val(detail.trim());
    //$(".js_phoneVerify_alert").attr('edit',1);
    //$(".js_phoneVerify_alert").attr('myindex',index);
}
//编辑地址
function cancelEdit(){
    $(".js_item_info").show();
    $(".js_item_edit").hide();
    $(".js_items_edit").show();
}
//添加新地址
function newAddress_Click(){
    $(".js_comBlack").show();
    $(".js_phoneVerify_alert").show();
    $(".js_name").val('');
    $(".js_phone").val('');
    $(".js_address").val('');
    $(".js_phoneVerify_alert").attr('edit',0);
    $(".js_phoneVerify_alert").removeAttr('myindex');
}
//删除地址
function adderssDel_Click(obj){
    delAlert();
    $(obj).parents(".js_addAddress_item").attr('del',1);
}
//删除确认弹窗
function delAlert(){
    $(".js_com_black").show();
    $(".js_delAddress_alert").show();
}
//隐藏弹窗
function cancelAlert(){
    $(".js_comBlack").hide();
    $(".js_com_black").hide();
    $(".js_hide_com").hide();
    for (var i = 0; i < $(".js_addAddress_item").length; i++){
        $(".js_addAddress_item").eq(i).attr('del',0);
    }
}
//删除地址后如果地址仅仅为一个时，不让其删除

   /* function onlyOne(){
        for(var i=0;i<$('.js_item.js_addAddress_item.retail-addAddress-item.t-delete').length;i++){
            console.log(111);
        }
    }*/




