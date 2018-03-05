/**
 * Created by Administrator on 2018/1/24.
 */
let fontSizeRem = (function () {
    /*获取屏幕宽度*/
    let screenWidth = document.documentElement.clientWidth;
    let iphoneSixWidth = 375;
    let width = screenWidth/iphoneSixWidth;
    let SetFontSize = width * 100;
    /*html字体大小*/
    document.documentElement.style.fontSize = SetFontSize + "px";
    /*body字体大小*/
    document.body.style.fontSize = .14 + "rem"
})

