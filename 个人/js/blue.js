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
requirejs(["jquery","xiangmu"],function ($,xiangmu) {
    var shuxing={
        img:"img/3.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd=new xiangmu(shuxing)
    asd.init()
    var shuxing1={
        lie:"one",
        img:"img/4.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd1=new xiangmu(shuxing1)
    asd1.init()
    var shuxing2={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd2=new xiangmu(shuxing2)
    asd2.init()
    var shuxing3={
        lie:"one",
        img:"img/4.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd3=new xiangmu(shuxing2)
    asd3.init()
})