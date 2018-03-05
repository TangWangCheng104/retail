/**
 * Created by Administrator on 2017/2/24.
 */
    //上传照片
$("#file").change(function() {
    drawTempPhoto();
});
//在Canvas上draw
$("#drawBtn").click(function() {
    drawPhoto($("#photo")[0], 0, 0, 350, 250);
});

//绘制照片
function drawTempPhoto() {

    //检验是否为图像文件
    var file = document.getElementById("file").files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("看清楚哦，这个需要图片！");
        return false;
    }
    var reader = new FileReader();
    //将文件以Data URL形式读入页面
    reader.readAsDataURL(file);
    reader.onload = function(e) {

        //预览效果
        var img = $("#photo")[0];
        //加载图片，此处的this.result为base64格式
        img.src = this.result;
        img.onload = function() {

            //获取照片的拍摄方向
            var orient = getPhotoOrientation(img);
            alert("orient1:" + orient);
            //判断是否是三星手机
            //                if (isSamsung) {
            //                     //做旋转的适配……
            //                }

        };

    }

}

//获取照片的元信息（拍摄方向）
function getPhotoOrientation(img) {
    var orient;
    EXIF.getData(img, function() {
        orient = EXIF.getTag(this, 'Orientation');
    });
    return orient;
}

//绘制照片
function drawPhoto(photo, x, y, w, h) {

    //获取照片的拍摄方向
    var orient = getPhotoOrientation(photo);
    alert("orient2:" + orient);

    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        //draw on Canvas
        var img = new Image();
        img.onload = function() {

            var canvas_w = Number(ctx.canvas.width);
            var canvas_h = Number(ctx.canvas.height);

            //判断图片拍摄方向是否旋转了90度
            if (orient == 6) {
                ctx.save(); //保存状态
                ctx.translate(canvas_w / 2, canvas_h / 2); //设置画布上的(0,0)位置，也就是旋转的中心点
                ctx.rotate(90 * Math.PI / 180); //把画布旋转90度
                // 执行Canvas的drawImage语句
                ctx.drawImage(img, Number(y) - canvas_h / 2, Number(x) - canvas_w / 2, h, w); //把图片绘制在画布translate之前的中心点，
                ctx.restore(); //恢复状态
            } else {
                // 执行Canvas的drawImage语句
                ctx.drawImage(img, x, y, w, h);
            }

        };
        img.src = photo.src; // 设置图片源地址
    }
}
