/**
 * Created by zzd on 2017/8/22.
 */
require.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    function Lunbo(setting) {
        this.$contains = $('<div class="container"></div>')
        this.$ul = $('<ul class="tabs"></ul>')
        this.$imgs = $('<div class="imgs"></div>')
        this.$arrows = $('<div class="arrows"></div>')
        this.$prev = $('<span class="prev">&lt;</span>')
        this.$next = $('<span class="prev">&gt;</span>')
        this.defult = {
            weizhi: document.body,
            atr: [],
            time: '1000',
            xingzhuang: 'zheng',
            btnstyle: 'bottom',
        }
        $.extend(this.defult, setting)
    }

    Lunbo.prototype.init = function () {
        this.$contains.append(this.$ul).append(this.$imgs).append(this.$arrows)
        for (var i = 0; i < this.defult.atr.length; i++) {
            var li = '<li>' + (i + 1) + '</li>'
            this.$ul.append(li)
            var $imgs = $("<img>").attr("src", this.defult.atr[i]);
            this.$imgs.append($imgs)
        }
        this.$arrows.append(this.$prev).append(this.$next)
        $(this.defult.weizhi).append(this.$contains)
        var a = 0
        $("img", this.$imgs).eq(a).addClass("selected");
        $("li", this.$ul).eq(a).addClass("selected");

        this.$prev.on('click', function () {

            change.call(this)
            a--
            if(a==-1){
                a = this.defult.atr.length - 1;
            }
        }.bind(this))
        this.$next.on('click', function () {

           change.call(this)
            a++
            if(a==this.defult.atr.length){
                a = 0;
            }
        }.bind(this))
        $('li', this.$ul).on('mouseover', function (e) {
            a = $(e.target).index()
            change.call(this)
            // console.log(this.$prev)
        }.bind(this))
        function change() {
            $('li', this.$ul).eq(a).addClass('selected').siblings().removeClass('selected')
            $('img', this.$imgs).eq(a).addClass('selected').siblings().removeClass('selected')
        }
        play.call(this)
        this.$contains.hover(function () {
          clearInterval(timer)
        },function () {
            play.call(this)
        })
        var timer
        function play(){
            timer = setInterval(function(){
                this.$next.trigger("click");
            }.bind(this), this.defult.time);
        }

// function change() {
//
// }
    }


    return Lunbo
})
