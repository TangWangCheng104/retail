var gulp=require('gulp'),  //gulp基础库
    // spritesmith=require('gulp.spritesmith'),  //制作雪碧图插件
    minifycss=require('gulp-minify-css'),   //css压缩
    concat=require('gulp-concat'),   //合并文件
    uglify=require('gulp-uglify'),   //js压缩
    rename=require('gulp-rename'),   //文件重命名
    notify=require('gulp-notify'),  //提示
    watch = require('gulp-watch');//监听多个文件的改变
//雪碧图
/*gulp.task('sprite',function(){
    watch('css/!*.css',function () {
        gulp.src('images/!*.png')
            .pipe(spritesmith({
                imgName:'sprite.png',
                cssName:'css/index.css',
                padding:5,
                algorithm:'binary-tree'
            }))
            .pipe(gulp.dest('test/images')) //输出目录
    })
})*/
//监听css改变并且css压缩
/*gulp.task('minifycss',function(){
    watch('css/!*.css',function () {
        gulp.src('css/!*.css')      //设置css
            .pipe(concat('main.css'))      //合并后css文件名，没有压缩
            .pipe(gulp.dest('test/styles'))           //设置输出路径
            .pipe(rename({suffix:'.min'}))         //修改文件名
            .pipe(minifycss())                    //压缩文件
            .pipe(gulp.dest('test/styles'))            //
            .pipe(notify({message:'css task ok'}));   //提示成功
    })
});*/
//运行gulp的时候css压缩
/*gulp.task('runminifycss',function(){
    gulp.src('css/!*.css')      //设置css
        // .pipe(concat('main.css'))      //合并后css文件名，没有压缩
        // .pipe(gulp.dest('test/styles'))           //设置输出路径
        .pipe(minifycss())                    //压缩文件
        .pipe(rename({suffix:'.min'}))         //修改文件名
        .pipe(gulp.dest('test/styles'))            //
        .pipe(notify({message:'css task ok'}));   //提示成功
});*/
//JS压缩
gulp.task('minifyjs',function(){
    watch('./js/*.js',function () {
        gulp.src(['./js/!*.js'])  //选择合并的JS
            .pipe(concat('alert.js'))   //合并后js文件名，没有压缩
            .pipe(gulp.dest('test/js'))         //输出
            .pipe(rename({suffix: '.min'}))     //重命名
            .pipe(uglify())                    //压缩
            .pipe(gulp.dest('test/js'))            //输出
            .pipe(notify({message: "js task ok"}));    //提示
    })
});
gulp.task('default',function(){
    gulp.start('minifyjs');
});