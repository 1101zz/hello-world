/**
 * Created by zzd on 2017/10/2.
 */
// /**
//  * Created by zzd on 2017/9/10.
// //  */
// $(function () {
//     $(".hover").on("mouseover",function () {
//         $(this).animate({opacity:0.6},10)
//         $(".icon").stop().animate({
//             opacity:1,
//             margin:"-50px -50px",
//         },10,function () {
//
//         })
//     })
//     $(".hover").on("mouseout",function () {
//         $(this).animate({opacity:0},10)
//         $(".icon").stop().animate({
//             opacity:0,
//             margin:"0 -50px",
//         },10,function () {
//
//         })
//     })
// })
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(["jquery","skill"],function ($,skill) {

        var skilla = {
        dizhi:$("#b"),
        baifenbi:50,
        id:1
    }
    var asd = new skill(skilla)
    asd.init()
    var skillb = {
        dizhi:$("#b"),
        baifenbi:70,
        id:"a"
    }
    var asd1 = new skill(skillb)
    asd1.init()
    })
