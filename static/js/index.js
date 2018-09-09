function login(){
var modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';
}
function close(){
var modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';    
}
//设置轮播图
$(function(){
        var i=0,timer=null;
        //在num中添加相同数量的li
        for(var i=0;i<$('.container div').length;i++){
            $('.num').append('<li></li>');
        }
        var div1 = $('.container div').first().clone();
        $('.container').append(div1).width($('.container div').length*($('.container div').width()));
        // var myInteval = function(){
        //     i++;
        //     if(i == $('.container div').length){
        //         i=1;
        //         $('.container').css({left:'0px'});
        //     }
        //     $('.container').animate({left:-1220*i+'px'},1000);
        //     if(i==$('.imgs li').length-1){
        //         console.log('ok');
        //         $('.num li').eq(0).addClass('num_active').siblings().removeClass('num_active'); //其它的圆点去掉active属性
        //     }else{
        //         $('.num li').eq(i).addClass('num_active').siblings().removeClass('num_active');
        //     }
        
        // }
        //鼠标移入，左右按钮出现
        $('.song_recomand_box').hover(function(){
            $('.pre').css({width:'75px'});
            $('.next').css({width:'75px'});
            //clearInterval(timer);
            //timer = null;
        },function(){
            $('.pre').css({width:'0px'});
            $('.next').css({width:'0px'});
            //timer = setInterval(myInteval,3000);
        });
        //鼠标点击前后按钮
        $('.pre').click(function(){
            console.log('ok');
            i--;
            if(i == -1){
            i = $('.container div').length - 2;
            $('.container').css({left:-($('.container div').length-1)*1220+'px'});
            }
            $('.container').stop().animate({left:-i*1220+'px'},1000);
            $('.num li').eq(i).addClass('num_active').siblings().removeClass('num_active');
        });
        $('.next').click(function(){
            console.log('ok');
            i++;
            if(i == $('.container div').length){
            i = 1;
            $('.container').css({left:'0px'});
            }
            $('.container').stop().animate({left:-i*1220+'px'},1000);
            if(i == $('.num li').length){
                $('.num li').eq(0).addClass('num_active').siblings().removeClass('num_active');
            }else{
                $('.num li').eq(i).addClass('num_active').siblings().removeClass('num_active');
            }
        });
        /*圆点滑入*/
    $('.num li').mouseover(
        function(){
            var _index = $(this).index();
            i = _index;
            $('.container').stop().animate({left:-1220*_index},1000);
            $('.num li').eq(i).addClass('num_active').siblings().removeClass('num_active');   
        }
    );
});