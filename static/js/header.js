$(function(){
    $(`<link rel='stylesheet' href='./css/header.css'>`).appendTo('head');
    $.ajax({
        type:'get',
        url:'header.html',
        success:function(res){
            $(res).replaceAll($('#header'));
            var vm = new Vue({
                el:'div.aw_header',
                data:{
                    keyword:''
                },
                methods:{
                    search(){
                        //跳转到歌手页面
                        location.href = `http://localhost:3000/singers_page.html?singerName=${this.keyword}`;
                        //location.href = `http://localhost:3000/singer/info?singerName=${this.keyword}`;
                    }
                },
                watch:{
                    keyword(){
                        console.log(this.keyword);
                    }
                }
            })
        }
    })
})