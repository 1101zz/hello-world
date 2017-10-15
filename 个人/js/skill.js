/**
 * Created by zzd on 2017/10/2.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    var c=0
    function skill(skill) {
        this.df = {
        dizhi:$("#b"),
        baifenbi:75,
    }
       this.$i=$("<div class='i'></div>")
        this.$span=$("<span class='e'></span>")
        this.$canvas=$("<canvas class='canvas'></canvas>")
        this.$index=c
        c++;
        console.log(this.$index)
        $.extend(this.df, skill)
    }
    var i=0;
    skill.prototype.init=function () {
        this.$i.append(this.$span).append(this.$canvas)
        this.df.dizhi.append(this.$i)
        var a=0
        var b=this.df.baifenbi
        var g=this.$index

        setInterval(function () {
            if(a<b){
                a++
            }
            $(".e").eq(g).text(a+"%")
        },1000/b)
        var c = document.getElementsByClassName("canvas")[i];
        i++
        var ctx = c.getContext('2d');
        var w = c.width = 100;
        var h = c.height =100;
        var lineWidth =10;
        var r = w / 2;
        var R = r-20;
        var startAngle = (0);
        var endAngle = startAngle + 2*this.df.baifenbi/100* Math.PI;
        var xangle =this.df.baifenbi/15 * (Math.PI / 180);
        var tmpangle = startAngle;
        var rander = function(){
            if(tmpangle >= endAngle){
                return;
            }else if(tmpangle + xangle > endAngle){
                tmpangle = endAngle;
            }else{
                tmpangle += xangle;
            }
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = '#D0482B';
            ctx.translate(r, r);
            ctx.rotate(-Math.PI);
            for(var i = 0; i <= tmpangle - startAngle; i += xangle){
                ctx.moveTo(0, R - 10);
                ctx.lineTo(0, R);
                ctx.rotate(xangle);
            }
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
            requestAnimationFrame(rander);
        };

        rander();

    }
    return skill
})