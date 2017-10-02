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
     console.log(this.$index)
        },50)
        var c = document.getElementsByClassName("canvas")[i];
        i++
        var ctx = c.getContext('2d');
        var mW = c.width = 100;
        var mH = c.height =100;
        var lineWidth =20;
        var r = mW / 2;
        var cR = r-10;
        var startAngle = (0);
        var endAngle = startAngle + 2*this.df.baifenbi/100* Math.PI;
        var xAngle = 1* (Math.PI / 180);
        var tmpAngle = startAngle;
        var rander = function(){
            if(tmpAngle >= endAngle){
                return;
            }else if(tmpAngle + xAngle > endAngle){
                tmpAngle = endAngle;
            }else{
                tmpAngle += xAngle;
            }
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = '#1c86d1';
            ctx.translate(r, r);
            ctx.rotate(-Math.PI);
            for(var i = 0; i <= tmpAngle - startAngle; i += xAngle){
                ctx.moveTo(0, cR - lineWidth);
                ctx.lineTo(0, cR);
                ctx.rotate(xAngle);
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