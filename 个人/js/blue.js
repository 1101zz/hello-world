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
    $(window).resize(function () {
        $("#one").children().remove()
        $("#two").children().remove()
        $("#three").children().remove()
    var shuxing={
        img:"img/4.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd=new xiangmu(shuxing)
    asd.init()
    var shuxing1={
        lie:"one",
        img:"img/3.jpg",
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
        shuxing:"asd",
    }
    var asd2=new xiangmu(shuxing2)
    asd2.init()
    var shuxing3={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd3=new xiangmu(shuxing3)
    asd3.init()
    var shuxing4={
        lie:"one",
        img:"img/4.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd4=new xiangmu(shuxing4)
    asd4.init()
    var shuxing5={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd5=new xiangmu(shuxing5)
    asd5.init()
    var shuxing6={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd6=new xiangmu(shuxing6)
    asd6.init()
    var shuxing7={
        lie:"one",
        img:"img/4.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd7=new xiangmu(shuxing7)
    asd7.init()
    var shuxing8={
        lie:"one",
        img:"img/3.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"asd"
    }
    var asd8=new xiangmu(shuxing8)
    asd8.init()
})})