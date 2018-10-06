        var btn = document.getElementsByClassName('mySubmit')[0];
        btn.addEventListener('click',async function(){
            var btn = this;
            var account = btn.parentNode.children[2].value;
            var password = btn.parentNode.children[3].value;
            // var status = await axios.get('http://localhost:8080/user/islogin');
            //     if(status.code == 1){
            //         var avatar = status.msg.avatar;
            //         var nickname = status.msg.nickname;
            //     }else if(status.code == 0){
                    
            //     }
            /*
            验证账号密码
            */
            var res = await axios.post('http://localhost:8080/user/login',Qs.stringify({
                            account,
                            password
                        }))
                        console.log(res);
                if(res.data.length>0){
                    console.log(res.data);
                    setTimeout(close,1000);
                    //对返回的数据进行解析，渲染到页面上
                var avatar = './'+res.data[0].avatar; // ./images/leizi.jpg
                var nickname = res.data[0].nickname;
                // console.log(avatar);
                //登录的状态使用cookies来保存
                // document.cookie=`account=${res.data[0].account}`;
                // document.cookie=`password=${res.data[0].upwd}`;
                document.cookie=`uid=${res.data[0].uid}`;
                document.cookie=`avatar=${res.data[0].avatar}`;
                document.cookie=`nickname=${res.data[0].nickname}`;
                //使用localStorage存储
                var storage = window.localStorage;
                    storage.setItem('account',account);
                    storage.setItem('password',password);
                    storage.setItem('nickname',nickname);
                    storage.setItem('avatar',avatar);
                //把storage中的图片渲染到登录栏中
                $('.login').addClass('online').children('img.link_user_info').css({'display':'block'}).attr({'src':avatar});
                $('.user_info>div:first>a>img').attr('src',avatar);
                $('.user_data_cont>p>a').text(nickname);
                }
            // ajax({
            //     url:'http://localhost:8080/user/login',
            //     type:'post',
            //     data:`account=${account}&password=${password}`,
            //     dataType:'json'
            // }).then(function(res){
            //     //如果用户名正确,把登录框关闭
            //     if(res.length > 0){
            //         setTimeout(close,1000);
            //     }               
            //     //对返回的数据进行解析，渲染到页面上
            //     var avatar = './'+res[0].avatar; // ./images/leizi.jpg
            //     var nickname = res[0].nickname;
            //     // console.log(avatar);
            //     //登录的状态使用cookies来保存
            //     document.cookie=`account=${res[0].account}`;
            //     document.cookie=`password=${res[0].upwd}`;
            //     document.cookie=`uid=${res[0].uid}`;
            //     //使用localStorage存储
            //     var storage = window.localStorage;
            //         storage.setItem('account',account);
            //         storage.setItem('password',password);
            //         storage.setItem('nickname',nickname);
            //         storage.setItem('avatar',avatar);
            //     //把storage中的图片渲染到登录栏中
            //     $('.login').addClass('online').children('img.link_user_info').css({'display':'block'}).attr({'src':avatar});
            //     $('.user_info>div:first>a>img').attr('src',avatar);
            //     $('.user_data_cont>p>a').text(nickname);
            // });
});
    // new Vue({
    //     el:'.modal',
    //     data:{
    //         account:'',
    //         password:'',
    //         avatar:''
    //     },
    //     methods:{
    //         login(){
    //             console.log('ok');
    //             var res = axios.post('http://localhost:8080/user/login',Qs.stringfy({
    //                 account:account,
    //                 password:password
    //             }))
    //             if(res.data.length>0){
    //                 console.log(res.data);
    //             }
    //         }
    //     },
    //     created() {
            
    //     }
    // })