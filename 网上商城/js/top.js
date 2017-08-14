/**
 * Created by zzd on 2017/8/12.
 */
// 焦点练习
$(function () {
    $('#focus').on('focus', function () {
        if ($(this).val() == this.defaultValue) {
            $(this).val('')
        }

    }).on('blur', function () {
        if ($(this).val() == '') {
            $(this).val(this.defaultValue)
        }
    })

})
// 换肤
$(function () {
    var $cookie = $.cookie("morenpifu");
   $('#nav').css('background', $cookie)
    $('#leftshop p').css('background',$cookie)

    $('#color li').on('click', function () {
        $('#nav').css('background', this.style.background)
        $('#leftshop p').css('background', this.style.background)

        $.cookie('morenpifu', this.style.background, {path: '/', expires: 10})

    })
})
//划过显示
$(function () {
    $('#nav li').on('mouseover',function () {
        $(this).css('text-decoration','underline')
    }).on('mouseout',function () {
        $(this).css('text-decoration','none')
    })
})
$(function () {
    $('#nvzhuang').on('mouseover',function () {
        $('#mrs').css("display",'block')
    }).on('mouseleave',function () {
        $('#mrs').css("display",'none')
    })
    $('#mrs').on('mouseover',function () {
        $('#mrs').css("display",'block')
    }).on('mouseleave',function () {
        $('#mrs').css("display",'none')
    })
})