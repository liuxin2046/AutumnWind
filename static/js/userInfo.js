// storage = window.localStorage;
// var account = storage.getItem('account');
// var avatar = storage.getItem('avatar');
var avatar = getCookie('avatar');
var nickname = getCookie('nickname');
// console.log(avatar);
$('.profile_avatar>div.user_avatar_lg>img').attr('src',avatar);
$('.profile_avatar>h1>span').text(nickname);
//验证cookie
// var userAccount = getCookie('account');
// console.log('userccount: '+userAccount);

new Vue({
    el:'.mod_songlist',
    data(){
        return {
            res:[]
        }
    },
    methods:{

    },
    created() {
        (async function(self){
            var res = await axios.get(`http://localhost:8080/user/songSheet`,{
                params:{
                    uid:getCookie('uid')
                }
            })
            self.res = res.data;
        })(this)
    }
})