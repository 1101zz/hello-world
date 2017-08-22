/**
 * Created by zzd on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(['jquery'], function ($) {
    function lun(shuxing) {
        this.ocontainer = $('<div id="container"></div>')
        this.oul = $('<ul id="tabs"></ul>')
        this.oli = $('<li>1</li><li>2</li><li>3</li><li>4</li>')
        this.imgs = $('<div id="imgs"></div>')
        this.oimg = $('' +
            '<img src="../lun/img/1.jpg">' +
            '<img src="../lun/img/2.jpg">' +
            '<img src="../lun/img/3.jpg">' +
            '<img src="../lun/img/4.jpg">')

        this.oarrows = $('<div id="arrows"></div>')
        this.oprev = $('<span id="prev">&lt;</span>')
        this.onext = $('<span id="next">&gt;</span>')

    }

    lun.prototype.open = function () {
        this.ocontainer.append(this.oul).append(this.imgs).append(this.oarrows)
        this.oul.append(this.oli)
        this.imgs.append(this.oimg)
        this.oarrows.append(this.oprev).append(this.onext)
        $('body').append(this.ocontainer)
    }
    return lun
})