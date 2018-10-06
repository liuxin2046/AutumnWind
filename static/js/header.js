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
                    keyword:'',
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
                        console.log(this.keyword);
                    }
                }
            })
        }
    })
})