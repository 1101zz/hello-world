/**
 * Created by zzd on 2017/8/25.
 */
$(function () {
        var i = 1
        // $("#empty").css("height",$(window).height-$("#bg").height())
        $('#bg').css('height',$(window).height)
        $('#bg').css('width',$(window).width)
        setInterval(function () {
            $('#lunbo p').eq(i-1).addClass('select').siblings().removeClass('select')
            $('body').css('background', 'url(img/bg/' + i + '.jpg) no-repeat')
            // $('body').css('background-size', "100%")
            // $('body').css('height', window.height+"px")
            i++
            if (i == 6) {
                i = 1
            }
        }, 2000)
    $(".icon").on("click",function (e) {
        var ind;
        if(e.target.className=="icon"){
            ind = $('#emil .icon').index(this)
            console.log(ind)
        }else{ind=$('#emil .icon').index($(e.target).parent())
        console.log(ind)}
           $("#text").find("div").eq(ind).animate({
               opacity:1,
               zIndex:999
           },1000).siblings().animate({
               opacity:0,
               zIndex:-1
           },1000)
    }
)
    $(".aa").on("click",function () {
      $(".aa").animate({
          opacity:0,
          zIndex:-1
      },1000)
    })})