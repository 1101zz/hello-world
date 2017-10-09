// /**
//  * Created by zzd on 2017/9/11.
//  */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    function xiangmu(xiangmu) {
        this.$li=$("<li></li>");
        this.$hull = $("<div class='xiangmu'></div>");
        this.$hover = $('<div class="hover"></div>');
        this.$icon=$('<span class="icon"></span>');
        this.$title = $('<h4></h4>');
        this.$main = $('<span></span>');
        this.df = {
            lie:"one",
            img: "img/2.jpg",
            title: "asldjlsa",
            main: "aslkdjlaskhflksajclvnsvlavj",
            shuxing: "asd",
            dizhi:"index.html"
        };
        $.extend(this.df, xiangmu);
    }
    var $one;
    var $two;
    var $three;
    xiangmu.prototype.init=function () {
        this.$hull.append("<img src='" + this.df.img + "'>").append(this.$hover).append(this.$title).append(this.$main).append(this.$icon);
        this.$title.append(this.df.title);
        this.$main.append(this.df.main);
        this.$li.append(this.$hull);
        $one=$("#one").height();
        $two=$("#two").height();
        $three=$("#three").height();
        if($(window).width()>900){
            if($one<$two&&$one<$three){
                $("#one").append(this.$li);
            }else if($two<$one&&$two<$three){
                $("#two").append(this.$li)
            }else if($three<$one&&$three<$two){
                $("#three").append(this.$li)
            }else if($one==$two && $one==$three){
                $("#one").append(this.$li)
            }else if($one!=$two && $two==$three){
                $("#two").append(this.$li)
            }else{
                $("#three").append(this.$li)
            }
        }
        if($(window).width()<900&&$(window).width()>400){
            if($one<=$two){
                $("#one").append(this.$li)
            }
            else {
                $("#two").append(this.$li)
            }
        }
        if($(window).width()<400){
                $("#one").append(this.$li)
        }
        $(this.$hover).on('mouseover', function (   ) {
            $(this.$hover).animate({opacity:0.6},10);
            $(this.$icon).stop().animate({
                opacity:1,
                margin:"-50px -50px",
            },10)
        }.bind(this))
        $(this.$icon).on('mouseover', function (   ) {
            $(this.$hover).animate({opacity:0.6},10)
            $(this.$icon).stop().animate({
                opacity:1,
                margin:"-50px -50px",
            },10)
        }.bind(this))
        $(this.$hover).on('mouseout', function () {
            $(this.$hover).animate({opacity:0},10)
            $(this.$icon).stop().animate({
                opacity:0,
                margin:"0 -50px",
            },10)
            // console.log(this.$prev)
        }.bind(this))

         $("#icon").on("click",function (e) {
       // if(this.df.shuxing.indexOf("asd")==false){
       //    this.$hull.attr("display","none")
       // }
             var $int
             if($(e.target).hasClass("fa")){
                 $int = $(e.target).parent().find("p")
             }else if($(e.target).hasClass("li")){
                 $int = $(e.target).find("p")
             }else{
                 $int=$(e.target)
             }
           if(this.df.shuxing.indexOf($int.html())==-1){
               this.$hull.hide()
           }else{
               this.$hull.show()
           }
         }.bind(this))
      // $(window).resize()
        $(this.$hover).on("click",(function (e) {
        window.location.href="project/"+this.df.dizhi
    }.bind(this)))
    }


    return xiangmu

})
// window.addEventListener('resize',function () {
//     i=0;
//     this.init();
