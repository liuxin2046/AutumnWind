
$(function(){
    //幻灯片设置
    var imgs = $('.slider>img');
    var num = imgs.length;
    var index = 0;
    var flag = false;
    var timer = setInterval(function(){
        index++;
        if(index>=num){
            index = 0;
        }
        for(var i=0;i<num;i++){
            imgs.eq(i).css('display','none');
        }
        imgs.eq(index).css('display','block');
    },3000);
    var nickname_btn = $('#nickname');
    var btn = $("#register");
    var email_btn = $('#email');
    //先获取表单中的数据，进行简单的正则匹配
    //用户名失去焦点时做出验证
    nickname_btn.blur(function(){
        uname = $('#nickname').val();
        checkName(uname);
    });
    // email_btn.blur(function(){
    //     email = $("#email").val();
    // })
    function checkName(val){
        $.get('http://localhost:8080/user/checkName',{uname:val},function(res){
            if(res.code == 0){
                flag = true;
                //alert('用户名可以使用');
            }else{
                alert('用户名已被注册');
                
            }
        })
    }
    // function checkAccount(val){
    //     $.get('http://localhost:8080/user/checkAccount',{email:val},function(res){
    //         if(res.code == 0){
    //             flag = true;
    //             console.log('账户可以使用');
    //         }else{
    //             console.log('账户已被注册');
    //         }
    //     })
    // }
    btn.on('click',function(){
        uname = $('#nickname').val();
        upwd = $('#password').val();
        account = $('#email').val();
        console.log(uname+' '+upwd+' '+account);
        if(flag){
        $.post('http://localhost:8080/user/register',{
            uname,upwd,account
        },function(res){
            location.href = 'http://localhost:8080/index.html';
        })
        }else{
            console.log('注册失败，请检查用户名和密码');
        }

    })


})