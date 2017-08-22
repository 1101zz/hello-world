/**
 * Created by zzd on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
requirejs(['jquery'], function ($) {
    function dialog(setting) {
        this.con = $('<div id="con"></div>')
        this.zhezhao = $(' <div id="zhechao"></div>')
        this.zhongjian = $('<div id="zhongjian"></div>')
        this.title = $('<div id="title">' + setting.title + '</div>')
        this.tit = $('<span id="tit"></span>')
        this.close = $(' <span id="close">【x】</span>')
        this.neirong = $('<div id="neirong"></div>')
        this.moren = {
            title: '导航栏',
            neirong: '',
            width: 500,
            height: 500
        }
        $.extend(this.moren, setting);
    }

    dialog.prototype.open = function () {
        this.con.append(this.zhezhao).append(this.zhongjian)
        this.zhongjian.append(this.title).append(this.neirong)
        this.title.append(this.tit).append(this.close)
        $('body').append(this.con)
        this.zhongjian.css({
            width: this.moren.width,
            height: this.moren.height,
            marginLeft: -this.moren.width/2,
            marginTop: -this.moren.height/2

        })
        this.neirong.html(this.moren.neirong)
    }


    return dialog


})