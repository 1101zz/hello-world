/**
 * Created by zzd on 2017/11/3.
 */
require.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    function Cart(care) {
        this.$tr = $("<tr></tr>")
        this.$checkbox = $("<td><input type='checkbox' name='val'></td>")
        this.$img = $("<td><img src='" + care.productImg + "'></td>")
        this.$msg = $("<td>"+care.productName+"</td>")
        this.$part=$("<td>"+ care.parts.partsName+"</td>")
        this.$price=$("<td>"+ care.productPrice+"</td>")
        this.$num=$("<td><input type='button' class='del' value='-'><input type='text' class='text' value='1'><input type='button' class='add' value='+'></td>")
        this.$sum=$("<td></td>")
        this.$del=$("<td><a>删除</a></td>")

    }
    Cart.prototype.init=function () {

        this.$tr.append(this.$checkbox)
        this.$tr.append(this.$img)
        this.$tr.append(this.$msg)
        this.$tr.append(this.$part)
        this.$tr.append(this.$price)
        this.$tr.append(this.$num)
        this.$tr.append(this.$sum)
        this.$tr.append(this.$del)
        $("#product-list").append(this.$tr)
        $(".add").on("click",function () {
           $(".text").val+=1
        })
    }
    return Cart
})