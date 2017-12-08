/**
 * Created by zzd on 2017/10/2.
 */
// /**
//  * Created by zzd on 2017/9/10.
// //  */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(["jquery","skill"],function ($,skill) {

        var skillaaa = {
        dizhi:$(".z"),
        baifenbi:50
    };
    var asd = new skill(skillaaa);
    asd.init();
    console.log("askdj")
    });
