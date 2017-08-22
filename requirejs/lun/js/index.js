/**
 * Created by zzd on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(['jquery','lun'],function ($,lun) {
    var shuxing={
         shijian:1000,
         geshu:2,
         texiao:''
     }
    var lu= new lun(shuxing)
      lu.open()
    // alert('asdljaslk')
})