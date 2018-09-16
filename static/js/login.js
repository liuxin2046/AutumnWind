        var btn = document.getElementsByClassName('mySubmit')[0];
        btn.addEventListener('click',function(){
            var btn = this;
            var account = this.parentNode.children[2].value;
            var password = this.parentNode.children[3].value;            
            /*
            验证账号密码
            */
            ajax({
                url:'http://localhost:3000/user/login',
                type:'post',
                data:`account=${account}&password=${password}`,
                dataType:'json'
            }).then(function(res){
                
                //如果用户名正确,把登录框关闭
                if(res.length > 0){
                    setTimeout(close,1000);
                }
                //对返回的数据进行解析，渲染到页面上
                var avatar = './'+res[0].pic; // ./images/leizi.jpg
                console.log(avatar);
                //把图片渲染到登录栏中
                $('.login').addClass('online').children('img.link_user_info').css({'display':'block'}).attr({'src':avatar});
                $('.user_info>div:first>a>img').attr('src',avatar);
            });
});