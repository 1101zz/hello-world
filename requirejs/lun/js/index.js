/**
 * Created by zzd on 2017/8/22.
 */
require.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
//
require(['jquery','lunbo'],function ($,Lunbo) {
        var settings={
            weizhi:'#a',
            atr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
            xingzhuang:'zheng',
            btnstyle:'bottom',
        }
    var xin=new Lunbo(settings)
    xin.init()
    var settings2={
        weizhi:'#b',
        atr:['img/3.jpg','img/4.jpg'],
        time:100,
        xingzhuang:'zheng',
        btnstyle:'bottom',
    }
    var ew=new Lunbo(settings2)
    ew.init()
})