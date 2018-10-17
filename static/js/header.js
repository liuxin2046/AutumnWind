$(function(){
    $(`<link rel='stylesheet' href='./css/header.css'>`).appendTo('head');
    // $('.search_bar').focus(function(){
    //     console.log('ok');
    //     $('.vagueSearch').css({'display':'block'});
    // })
    
        //     search_bar.onfocus = function(){
        //     searchlist.style.display = 'block';
        // }
    $.ajax({
        type:'get',
        url:'header.html',
        success:function(res){
            $(res).replaceAll($('#header'));
            //这才是完整的header
            // window.onclick = function(e){
            //     console.log(e.target);
            // }
            var vm = new Vue({
                el:'div.aw_header',
                data:{
                    keyword:'',
                    matchSinger:[],
                    statu:false,
                    list:[{avatar:''}],
                    styleObject:{
                        display:'none'
                    }
                },
                methods:{
                    search(){
                        //跳转到歌手页面
                        location.href = `http://localhost:8080/singers_page.html?singerName=${this.keyword}`;
                        //location.href = `http://localhost:3000/singer/info?singerName=${this.keyword}`;
                    },
                    islogin:async function(){
                        var status = await axios.get(`http://localhost:8080/user/islogin`);
                            if(status.data.code == 1){
                                this.styleObject.display = 'block';
                                console.log(status.data.msg);
                                //把图片渲染到登陆栏中
                                this.list = status.data.msg;
                            }
                    },
                    signout:async function(){
                        var res = await axios.get('http://localhost:8080/user/signout');
                        if(res.data.code == 1){
                            console.log('ok');
                            location.href = `http://localhost:8080/index.html`;
                        }
                    }
                },
                created() {
                    this.islogin()
                },
                watch:{
                    keyword(){
                        var searchlist = document.getElementsByClassName('vagueSearch')[0];
                        searchlist.style.display = 'block';
                        //每检测到一个单词就进行一次ajax请求
                        (async function(self){
                            var res = await axios.get(`http://localhost:8080/songs/getSinger`,{
                            params:{
                                keyword:self.keyword
                            }
                        })
                        console.log(res.data.msg);
                        //把匹配到的歌手添加到列表中
                        self.matchSinger = res.data.msg;


                        })(this)
                        console.log(this.keyword);
                    }
                }
            })
        }
    })
    //搜索栏失去焦点则被隐藏
    // $('.search_bar').blur(function(){
    //     console.log('ok');
    //     $('').css('display','none');
    // })
})