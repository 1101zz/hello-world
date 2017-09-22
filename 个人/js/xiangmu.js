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
        this.$li=$("<li></li>")
        this.$hull = $("<div class='xiangmu'></div>")
        this.$hover = $('<div class="hover"></div>')
        this.$icon=$('<span class="icon"></span>')
        this.$title = $('<h4></h4>')
        this.$main = $('<span></span>')
        this.df = {
            lie:"one",
            img: "img/2.jpg",
            title: "asldjlsa",
            main: "aslkdjlaskhflksajclvnsvlavj",
            shuxing: "asd"
        }
        $.extend(this.df, xiangmu)
    }
    i=0;
    xiangmu.prototype.init=function () {

        i++;
        console.log(i)
        this.$hull.append("<img src='" + this.df.img + "'>").append(this.$hover).append(this.$title).append(this.$main).append(this.$icon)
        this.$title.append(this.df.title)
        this.$main.append(this.df.main)
        // this.$hover.append(this.$icon)
        this.$li.append(this.$hull)
        // $("#one").append(this.$li)
        if($(window).width()>900){
            if(i%3==1){
                $("#one").append(this.$li)
            }else if(i%3==2){
                $("#two").append(this.$li)
            }else{
                $("#three").append(this.$li)
            }
        }
        if($(window).width()<900&&$(window).width()>400){
            if(i%2==1){
                $("#one").append(this.$li)
            }
            else{
                $("#two").append(this.$li)
            }
        }
        if($(window).width()<400){
                $("#one").append(this.$li)
        }
        $(this.$hover).on('mouseover', function (   ) {
            console.log(this)
            $(this.$hover).animate({opacity:0.6},10)
            $(this.$icon).stop().animate({
                opacity:1,
                margin:"-50px -50px",
            },10)
            // console.log(this.$prev)
        }.bind(this))
        $(this.$hover).on('mouseout', function () {
            console.log(this)
            $(this.$hover).animate({opacity:0},10)
            $(this.$icon).stop().animate({
                opacity:0,
                margin:"0 -50px",
            },10)
            // console.log(this.$prev)
        }.bind(this))
    }
    return xiangmu
})