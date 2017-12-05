// /**
//  * Created by zzd on 2017/9/10.
// //  */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(["jquery","xiangmu"],function ($,xiangmu) {
   var shuxing={
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"123all",
        dizhi:"小车.html"
    };
    var asd=new xiangmu(shuxing);
    asd.init();
    var shuxing1={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"456all",
        dizhi:"photo.html"
    };
    var asd1=new xiangmu(shuxing1);
    asd1.init();
    var shuxing2={
        lie:"one",
        img:"img/6.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"123all",
        dizhi:"remagnifer.html"
    };
    var asd2=new xiangmu(shuxing2);
    asd2.init();
    var shuxing3={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"456all",
        dizhi:"球体实验.html"
    };
    var asd3=new xiangmu(shuxing3);
    asd3.init();
    var shuxing4={
        lie:"one",
        img:"img/7.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"789all",
        dizhi:"轮播.html"
    };
    var asd4=new xiangmu(shuxing4);
    asd4.init();
    var shuxing5={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"123all",
        dizhi:"index.html"
    };
    var asd5=new xiangmu(shuxing5);
    asd5.init();
    var shuxing6={
        lie:"one",
        img:"img/5.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"789all",
        dizhi:"index.html"
    };
    var asd6=new xiangmu(shuxing6);
    asd6.init();
    var shuxing7={
        lie:"one",
        img:"img/3.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"456all",
        dizhi:"index.html"
    };
    var asd7=new xiangmu(shuxing7);
    asd7.init();
    var shuxing8={
        lie:"one",
        img:"img/3.jpg",
        title:"asldjlsa",
        main:"aslkdjlaskhflksajclvnsvlavj",
        shuxing:"123all",
        dizhi:"index.html"
    };
    var asd8=new xiangmu(shuxing8);
    asd8.init();
    $(window).resize(function () {
        $("#one").child().remove();
        $("#two").child().remove();
        $("#three").child().remove();
        asd.init();
        asd1.init();
        asd2.init();
        asd3.init();
        asd4.init();
        asd5.init();
        asd6.init();
        asd7.init();
        asd8.init();
    })
});