$(function () {
    var a=true
    $('li').on('click',function () {
        if(a==true){
            $('#fix').animate({
                    bottom:0
                },500
            )
            $('#top').animate({
                height:($(document).height()-50)+ 'px'
            },500,function () {
                $('#bottom iframe').remove()
            })
            $('#bottom').animate({
                height: '0px'
            },500)
            $('#fix').removeAttr('style')
            $('#top').append('<iframe src="'+ this.innerHTML+'.html"></iframe>')
            a=false
        }else{

            $('#fix').animate({
                    top:0,
                },500

            )
            $('#top').animate({
                height: '0px'
            },500,function () {
                $('#top iframe').remove()
            })
            $('#bottom').animate({
                height:($(document).height()-50)+'px',
                marginTop:50
            },500)
            $('#fix').removeAttr('style')
            $('#bottom').append('<iframe src="'+ this.innerHTML+'.html"></iframe>')
            a=true
        }
    })
    $('#selected').on('change',function () {
        if(a==true){
            $('#fix').animate({
                    bottom:0
                },500
            )
            $('#top').animate({
                height:($(document).height()-50)+ 'px'
            },500,function () {
                $('#bottom iframe').remove()
            })
            $('#bottom').animate({
                height: '0px'
            },500)
            $('#fix').removeAttr('style')
            $('#top').append('<iframe src="'+ $('option:selected').val()+'.html"></iframe>')
            a=false
        }else{

            $('#fix').animate({
                    top:0,
                },500

            )
            $('#top').animate({
                height: '0px'
            },500,function () {
                $('#top iframe').remove()
            })
            $('#bottom').animate({
                height:($(document).height()-50)+'px',
                marginTop:50
            },500)
            $('#fix').removeAttr('style')
            $('#bottom').append('<iframe src="'+ $('option:selected').val()+'.html"></iframe>')
            a=true
        }
    })

    // $('option').eq(0).select(function () {
    //
    //
    // })
// setInterval(function () {
//     console.log($('option:selected').val())
// },500)


    $('ol').on('mouseover',function (e) {
        $('li').removeClass('mouseover')
      e.target.className='mouseover'
    })
})/**
 * Created by zzd on 2017/8/25.
 */
