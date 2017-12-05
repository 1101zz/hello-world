/**
 * Created by zzd on 2017/10/30.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(["jquery","magn"],function ($,magn) {
    var img={
        bigimg:"img/magnifer2.jpg",
        smallimg:"img/magnifer1.jpg",
        magnifiersize:"100",
        smallsize:"400",
        position:"#a"
    }
    var asd=new magn(img)
    asd.init();
    // var img={
    //     bigimg:"",
    //     smallimg:"",
    //     magnifiersize:"",
    //     bigsize:'',
    //     smallsize:"",
    //     position:"#b"
    // }
    // var asd1=new magn(img)
    // asd1.init();
})