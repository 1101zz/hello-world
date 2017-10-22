/**
 * Created by zzd on 2017/8/14.
 */
$(function () {
    $('#wogaijiaoshenme a').hover( function (e) {
        $('<div id="ddd"></div>').html($(this).html()).css('position','absolute').offset({top:e.pageY+10,
        left:e.pageX+10}).appendTo('body').show(200)
        $(this).removeAttr("title");
    },function () {
        $('#ddd').remove()
    })
    $('#wogaijiaoshenme a').on('mousemove',function (e) {
            $('#ddd').offset({top:e.pageY+10,
                left:e.pageX+10}).show(200)
    })
})
$(function () {
    $('#bottombiaoqian li').on('click',function () {
        $('#bshop').animate({
            left:-$('.image').outerWidth(true)*4*$(this).index()
        })
    })
})