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
        title:"购物车",
        main:"简单的vue，实现请求json文件渲染页面",
        shuxing:"123all",
        dizhi:"car.html"
    };
    var asd=new xiangmu(shuxing);
    asd.init();
    var shuxing1={
        lie:"one",
        img:"img/5.jpg",
        title:"特效照片墙",
        main:"通过css，jq实现动态照片墙特效",
        shuxing:"456all",
        dizhi:"photo.html"
    };
    var asd1=new xiangmu(shuxing1);
    asd1.init();
    var shuxing2={
        lie:"one",
        img:"img/6.jpg",
        title:"放大镜",
        main:"简易放大镜，用require模块化，通过改变参数实现不同尺寸放大镜",
        shuxing:"123all",
        dizhi:"remagnifer.html"
    };
    var asd2=new xiangmu(shuxing2);
    asd2.init();
    var shuxing3={
        lie:"one",
        img:"img/5.jpg",
        title:"3d旋转",
        main:"主要是通过css3实现球体特效",
        shuxing:"456all",
        dizhi:"3dtranstion.html"
    };
    var asd3=new xiangmu(shuxing3);
    asd3.init();
    var shuxing4={
        lie:"one",
        img:"img/7.jpg",
        title:"轮播图",
        main:"简单的轮播图特效",
        shuxing:"789all",
        dizhi:"lunbo.html"
    };
    var asd4=new xiangmu(shuxing4);
    asd4.init();
    var shuxing5={
        lie:"one",
        img:"img/5.jpg",
        title:"百分比进度条",
        main:"通过画布实现动态画圆",
        shuxing:"123all",
        dizhi:"baifenbi.html"
    };
    var asd5=new xiangmu(shuxing5);
    asd5.init();
    var shuxing6={
        lie:"one",
        img:"img/5.jpg",
        title:"js小游戏",
        main:"通过css3样式与js实现类似于连连看的小游戏",
        shuxing:"789all",
        dizhi:"fanpaizi.html"
    };
    var asd6=new xiangmu(shuxing6);
    asd6.init();
    var shuxing7={
        lie:"one",
        img:"img/3.jpg",
        title:"模拟时钟",
        main:"通过css样式，js实现简易时钟",
        shuxing:"456all",
        dizhi:"biaozi.html"
    };
    var asd7=new xiangmu(shuxing7);
    asd7.init();
    var shuxing8={
        lie:"one",
        img:"img/3.jpg",
        title:"旋转粒子",
        main:"h5画布特效",
        shuxing:"123all",
        dizhi:"xuanzhuanlizi.html"
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