/**
 * Created by Administrator on 2017/9/11.
 */
window.onload = function() {
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });
    if(location.href.indexOf('&guide=1')!==-1){
        map.setStatus({scrollWheel:false})
    }
};