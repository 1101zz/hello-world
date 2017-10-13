/**
 * Created by zzd on 2017/8/25.
 */
$(function () {
        var i = 1
        var a=true
        $('#bg').css('height',$(window).height)
        $('#bg').css('width',$(window).width)
        setInterval(function () {
            $('#lunbo p').eq(i-1).addClass('select').siblings().removeClass('select')
            $('body').css('background', 'url(img/bg/' + i + '.jpg) no-repeat')
            i++
            if (i == 6) {
                i = 1
            }
        }, 2000)

    $(".icon").on("mouseover",function (e) {
         var ind;
         if(e.target.className=="icon"){
            ind = $('#emil .icon').index(this)
            console.log(ind)
         }else{ind=$('#emil .icon').index($(e.target).parent())}
           $("#text").find("div").eq(ind).stop().animate({
               opacity:1,
               zIndex:999
           },10).siblings().stop().animate({
               opacity:0,
               zIndex:-1
           },10)
    }
)
    $(".aa").on("click",function () {
      $(".aa").stop().animate({
          opacity:0,
          zIndex:-1
      },10)
    })})