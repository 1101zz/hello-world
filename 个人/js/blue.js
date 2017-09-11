// /**
//  * Created by zzd on 2017/9/10.
// //  */
$(function () {
    $(".hover").on("mouseover",function () {
        $(this).animate({background: "rgba(1,1,1,0.6)"},10)
        $("span").stop().animate({
            opacity:1,
            margin:"-50px -50px",
        },10,function () {

        })
    })
    $(".hover").on("mouseout",function () {
        $(this).animate({background: "rgba(0,0,0,0)"},10)
        $("span").stop().animate({
            opacity:0,
            margin:"0 -50px",
        },10,function () {

        })
    })
})