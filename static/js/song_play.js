$(function(){
    var mStatus = false;
    var list = [$("#play1").get(0),$("#play2").get(0),$("#play3").get(0)];
    var index = 0,timer = null;
    $('.m_play').click(function(){
        if(!mStatus){
            mStatus = true;
            list[index].play();
            progressbar(index);
        }else{
            mStatus = false;
            list[index].pause();
            clearInterval(timer);
            timer = null;
        }
        
    });
    $('.m_pre').click(function(){
        prev();
    })
    $('.m_next').click(function(){
        next();
    })
    function prev(){
            //关闭当前的音乐
            list[index].pause();
            index--;
            
            if(index < 0){
                index = list.length-1;
            }
            console.log(index);
            //关闭定时器
            clearInterval(timer);
            timer = null;
            //清空进度条的宽度
            clearProgressbar();
            //播放新的音乐
            list[index].play();
            //重新设置进度条
            progressbar(index);
    }
    function next(){
            list[index].pause();
            index++;
            if(index >= list.length){
            index = 0;
            }
            console.log(index);
            //关闭定时器
            clearInterval(timer);
            timer = null;
            //清空进度条的宽度
            clearProgressbar();
            //播放新的音乐
            list[index].play();
            //重新设置进度条
            progressbar(index);
    }
    function progressbar(key){
        //获取歌曲的长度
        var songLength = list[key].duration;
            timer = setInterval(function(){
            var currentTime = list[key].currentTime;
            var load = (currentTime/songLength)*470;
            console.log(load);
            // var dot = load > 5 ? load - 5:0;
            $('.m_progress').css('width',load+'px');
            $('.m_progress_bar>span').css('left',(load-5)+'px');
            // console.log(load);
            //当播放完成后暂停
            if(load>=470){
                list[key].pause();
                clearInterval(timer);
                timer = null;
            }
        },50);
    }
    function clearProgressbar(){
        $('.m_progress').css('width','0px');
        $('.m_progress_bar>span').css('left',-5+'px');
    }
})
