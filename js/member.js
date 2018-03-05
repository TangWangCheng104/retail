/**
 * Created by Administrator on 2018/1/15.
 */
$(function () {
    /*名字的省略*/
    /*$('.member-other-name').each(function () {
         var username = $(this).text()
         var myName = "zishu"
        nameLogogram(username,this,myName);
    })*/
})
function memberCloseSelf() {
    $('.js_member_close').hide()
}
// 弹框出现和消失，不会自动消失
function showAndHide(obj1,obj2,obj3) {
    $(obj1).fadeIn(300);
    $(obj2).fadeIn(300);
    $(obj3).fadeOut(300);
    /*showAndHideTimer = setTimeout(function () {
        $(obj1).fadeOut(300)
        $(obj2).fadeOut(300)
        clearTimeout(showAndHideTimer)
    },3000)*/
}
// 弹框出现和消失，会自动消失,自动刷新页面
function arrShowHideRefresh(arr1,arr2) {

    var showAndHideTimer;
    for (var i = 0 ; i < arr1.length; i++){
        $(arr1[i]).fadeIn(300);
    }
    for (var j = 0; j < arr2.length; j++){
        $(arr2[j]).hide();
    }
    showAndHideTimer = setTimeout(function () {
        window.location.reload();
    },3000)
}
// 多个弹框出现和消失，会自动消失
function arrShowHide(arr1,arr2) {

    var showAndHideTimer;
    for (var i = 0 ; i < arr1.length; i++){
        $(arr1[i]).fadeIn(300);
    }
    for (var j = 0 ; j < arr2.length; j++){
        $(arr2[j]).hide();
    }
    showAndHideTimer = setTimeout(function () {
        for (var i = 0 ; i < arr1.length; i++){
            $(arr1[i]).fadeOut(300);
        }
    },3000)
}
// 弹框出现和消失，会自动消失,然后刷新页面

function showHimSelfHideRefresh(obj1,obj2,obj3) {
    $(obj1).fadeIn(300);
    $(obj2).fadeIn(300);
    //隐藏部分
    $(obj3).fadeOut(300);
    showAndHideTimer = setTimeout(function () {
        $(obj1).fadeOut(300)
        $(obj2).fadeOut(300)
        window.location.reload();
        clearTimeout(showAndHideTimer)
    },3000)
}
/*名字的验证与简写*/
function nameLogogram(username,t,myName) {
    /*电话号码的正则*/
    var namePhoneNum = /^1[3,4,5,7,8]\d{9}$/;
    if( username == myName){
        $(t).html( "自己" )
    }else if( namePhoneNum.test( username )){
        var firstName = username.slice(0,3);
        var lastName = username.slice(-4);
        $(t).html( firstName + "***" + lastName )
    }else{
        if( username.length > 2 ){
            var firstName = username.slice(0,1);
            var lastName = username.slice(-1);
            $(t).html( firstName + "***" + lastName )
        }
        else if( username.length < 2 && username.length >= 0  ){
            $(t).html( username )
        }
    }
}
/*固定时间的月天，时分秒*/
function timestampChangeTime(timestamp,monDay,houseMinSec) {
    // return new Date(parseInt(timestamp)).toLocaleString().replace(/\n\d{1,2}$/,'-');
    return new Date(parseInt(timestamp)).toLocaleString().replace(/[\/]/g,'-').replace(/[\u4e00-\u9fa5]/g,'').slice(5)

}
