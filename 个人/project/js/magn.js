/**
 * Created by zzd on 2017/10/30.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    function magn(magn) {
        this.$data={
            bigimg:"img/magnifer2.jpg",
            smallimg:"img/magnifer1.jpg",
            magnifiersize:"100",
            smallsize:"400",
            position:""
        }
        this.$bigimg=$("<img src="+ this.$data.bigimg+">")
        this.$smallimg=$("<img src="+ this.$data.smallimg+">")
        this.$smalldiv=$("<div class='small'></div>")
        this.$bigdiv=$("<div class='big'></div>")
        this.$magnifier=$("<div class='magnifier'>")

        $.extend(this.$data,magn);
    }
    magn.prototype.init=function () {
        $(this.$smalldiv).css("width",this.$data.smallsize+"px").css("height",this.$data.smallsize+"px")
        $(this.$bigdiv).css("width",this.$data.smallsize+"px").css("height",this.$data.smallsize+"px")
        $(this.$bigimg).css("width",(this.$data.smallsize*this.$data.smallsize/this.$magnifier)+"px").css("height",this.$data.smallsize*this.$data.smallsize/this.$magnifier+"px")
        $(this.$magnifier).css("width",this.$data.magnifiersize+"px").css("height",this.$data.magnifiersize+"px")
        this.$smalldiv.append(this.$smallimg)
        this.$bigdiv.append(this.$bigimg)
        this.$smalldiv.append(this.$magnifier)
        $(this.$data.position).append(this.$smalldiv)
        $(this.$data.position).append(this.$bigdiv)
        this.$smalldiv.on("mouseover",function () {
            $(this.$magnifier).css("display","block");
            $(this.$bigdiv).css("display","block");
        }.bind(this)).on("mouseout",function () {
            $(this.$magnifier).css("display","none");
            $(this.$bigdiv).css("display","none");
        }.bind(this)).on("mousemove",function (e) {
            $(this.$magnifier).css("top" , e.clientY - this.$data.magnifiersize/2 + "px")
            $(this.$magnifier).css('left' , e.clientX - this.$data.magnifiersize/2 + "px")
            $(this.$bigimg).css("top",-(this.$data.smallsize/this.$data.magnifiersize) * (e.clientY - this.$data.magnifiersize/2) + "px")
            $(this.$bigimg).css("left", -(this.$data.smallsize/this.$data.magnifiersize) * (e.clientX - this.$data.magnifiersize/2) + "px")
            if (e.clientX  < this.$data.magnifiersize/2) {
                $(".magnifier").css("left" , 0)
                $(".big img").css("left" , 0)
            }
            if (e.clientY  < this.$data.magnifiersize/2) {
                $(".magnifier").css("top" , 0)
                $(".big img").css("top" , 0)
            }
            if (e.clientX > this.$data.smallsize-this.$data.magnifiersize/2) {
                $(".magnifier").css("left" , this.$data.smallsize-this.$data.magnifiersize + "px")
                $(".big img").css("left" , -(this.$data.smallsize/this.$data.magnifiersize)*(this.$data.smallsize - this.$data.magnifiersize) + "px")
            }
            if (e.clientY > this.$data.smallsize-this.$data.magnifiersize/2) {
                $(".magnifier").css("top" , this.$data.smallsize-this.$data.magnifiersize + "px")
                $(".big img").css("top" , -(this.$data.smallsize/this.$data.magnifiersize)*(this.$data.smallsize - this.$data.magnifiersize) + "px")
            }
        }.bind(this))
    }

    return magn


})