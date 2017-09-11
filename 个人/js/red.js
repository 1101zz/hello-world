/**
 * Created by zzd on 2017/8/25.
 */
$(function () {
        $('#bg').css('height', $(document).height() + 'px')
        var i = 1;
        setInterval(function () {
            $('#lunbo p').eq(i - 1).addClass('select').siblings().removeClass('select')
            $('body').css('background', 'url(img/bg/' + i + '.jpg)')
            i++

            // console.log( $('#lunbo p'))?
            if (i == 6) {
                i = 1
            }
        }, 2000)
    //     $(".icon").on("mouseover", function (e) {
    //         $(e.target).css("color", "blue")
    //     })
    //     $(".icon").on("mouseout", function (e) {
    //         $(e.target).css("color", "black")
    //     })
    }
)