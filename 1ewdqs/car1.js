/**
 * Created by zzd on 2017/11/3.
 */
require.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','cart'],function ($, Cart) {
     var asd={
         totalMoney: 59,
                 productId: 111,
                 productName: "黄鹤楼",
                 productPrice: 19,
                 productQuentity: 1,
                 productImg: "img/1.jpg",
                 parts:
                     {
                         partsId: "10001",
                         partsName: "打火机",
                         partsId1: "10002",
                         partsName2: "苹果皮"
                     }

     }
     var arr=new Cart(asd)
     arr.init()

})