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

        var skilla = {
        dizhi:$("#z"),
        baifenbi:50
    };
    var asd = new skill(skilla);
    asd.init();
    var skillb = {
        dizhi:$("#x"),
        baifenbi:70
    };
    var asd1 = new skill(skillb);
    asd1.init();
    var skillc = {
        dizhi:$("#s"),
        baifenbi:60
    };
    var asd2 = new skill(skillc);
    asd2.init();
    var skills = {
        dizhi:$("#v"),
        baifenbi:90
    };
    var asd3 = new skill(skills);
    asd3.init()
    });
