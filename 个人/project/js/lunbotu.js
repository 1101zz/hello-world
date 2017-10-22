/**
 * Created by zzd on 2017/8/14.
 */
$(function () {
    $('#lunbotu li').on('mouseover',function () {
        $(this).css('background','blue').siblings().css('background','black')
     $('#lunbotu div a').eq($(this).index()).stop(false,'ture').fadeIn().siblings().stop(false,'ture').fadeOut()
})})