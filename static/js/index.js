function login(){
var modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';
}
function close(){
var modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';    
}
$(function(){
    
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    $.ajax({
        url: url,
        type: "get",
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        scriptCharset: 'GBK',//解决中文乱码
        success: function (res) {
            //最新音乐数据
            // console.log(res.data.slider);
            new Vue({
                el:".w_recommand",
                data(){
                    return {
                        list:[]
                    }
                },
                created() {
                    this.list = res.data.slider;
                }
            })
        },
        error: function (e) {
            console.log('error');
        }
    });
    let url2 = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
    $.ajax({
        url: url2,
        type: "get",
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        scriptCharset: 'GBK',//解决中文乱码
        success: function (res) {
            //最新音乐数据
            // console.log(res.data.topList.slice(0,4));
            // console.log(res.data.topList);
            var arr = res.data.topList.slice(0,3);
                arr.push(res.data.topList[8]);
                arr.push(res.data.topList[9]);
                // console.log(arr);
            var list = [];
            for(var i=0;i<arr.length;i++){
                list.push(arr[i].songList);
            }
            // console.log(list);
                
                // console.log(list);
            new Vue({
                el:".ranking_list",
                data(){
                    return {
                        toplist:[],
                        msg:'test111'
                    }
                },
                created() {
                        this.toplist = list;
                }
            })
        },
        error: function (e) {
            console.log('error');
        }
    });
    //请求一个本地的json文件
    //设计一个函数监听tab的切换
    var tabs = $('.recomand_detail>a').eq(0);
    console.log(tabs.text());
    albumTab(0);
    $('.recomand_detail>a').eq(0).on('click',function(e){
        e.preventDefault();
        console.log('点击0');
        cleartab();
        cleardot();
        albumTab(0);
    });
    $('.recomand_detail>a').eq(1).on('click',function(e){
        e.preventDefault();
        console.log('点击1');
        cleartab();
        cleardot();
        albumTab(1);
    });
    $('.recomand_detail>a').eq(2).on('click',function(e){
        e.preventDefault();
        console.log('点击2');
        cleartab();
        cleardot();
        albumTab(2);
    })
    function albumTab(index){
        var index = index;
        // console.log(index);
        $.get('http://localhost:8080/carousel/list',function(res){
            var container = $('.container');
            //需要重复创建的元素
            for(var i=0;i<res.msg[index].cont.length;i++){
                container.append(`<div>
                <ul>
                        <li><img src="${res.msg[index].cont[i].data[0].pic_url}" width="224px" height="224px" alt=""><p>${res.msg[index].cont[i].data[0].title}</p><p>播放量:${res.msg[index].cont[i].data[0].play_count}万次</p></li>
                        <li><img src="${res.msg[index].cont[i].data[1].pic_url}" width="224px" height="224px" alt=""><p>${res.msg[index].cont[i].data[1].title}</p><p>播放量:${res.msg[index].cont[i].data[1].play_count}万次</p></li>
                        <li><img src="${res.msg[index].cont[i].data[2].pic_url}" width="224px" height="224px" alt=""><p>${res.msg[index].cont[i].data[2].title}</p><p>播放量:${res.msg[index].cont[i].data[2].play_count}万次</p></li>
                        <li><img src="${res.msg[index].cont[i].data[3].pic_url}" width="224px" height="224px" alt=""><p>${res.msg[index].cont[i].data[3].title}</p><p>播放量:${res.msg[index].cont[i].data[3].play_count}万次</p></li>
                        <li><img src="${res.msg[index].cont[i].data[4].pic_url}" width="224px" height="224px" alt=""><p>${res.msg[index].cont[i].data[4].title}</p><p>播放量:${res.msg[index].cont[i].data[4].play_count}万次</p></li>
                </ul>
                </div>`);
            }
            var i=0,timer=null;
            //在num中添加相同数量的li
            for(var i=0;i<$('.container div').length;i++){
                $('.num').append('<li></li>');
            }
            //默认第一个li的class为active
            $('.num').children().first().addClass('num_active');
    
            var div1 = $('.container div').first().clone();
            $('.container').append(div1).width($('.container div').length*($('.container div').width()));
            
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
        })
    }
    //清空之前的 recommend_tab 的 div
    function cleartab(){
        $('.container').empty();
    }
    function cleardot(){
        $('.song_recomand_box>div.imgs>ul.num').empty();
    }
});