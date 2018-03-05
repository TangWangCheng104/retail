/**
 * Created by Administrator on 2017/11/25.
 */
$(function(){
    $('.refund-cancel-refund,.cancel-refund').click(function(){
        $('.js-hide-refund').fadeIn(300);
        $('.refund-sure-cancel-refund').fadeIn(300);
    });
    $('.refund-sure-alert').click(function(){
        window.location.reload();
        $('.js-hide-refund').fadeOut(300);
        $('.refund-sure-cancel-refund').fadeOut(300);
    })
    $('.js-hide-refund').click(function(){
        $('.js-hide-refund').fadeOut(300);
        $('.refund-sure-cancel-refund').fadeOut(300);
    })
})
