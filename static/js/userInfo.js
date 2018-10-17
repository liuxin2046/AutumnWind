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
        play:function(id){
            //跳转页面到song_play.html
            location.href=`http://localhost:8080/song_play.html?lid=${id}`;
        },
        songDel:async function(lid){
            var res = await axios.get(`http://localhost:8080/user/deleteSong`,{
                params:{
                    uid:getCookie('uid'),
                    lid:lid
                }
            });
            if(res.data.code == 1){
                this.getSongSheel();
                //用户删除数据成功
                mizhu.toast('删除成功')
                // location.href = 'http://localhost:8080/userInfo.html';
            }

        },
        getSongSheel:async function(){
            var res = await axios.get(`http://localhost:8080/user/songSheet`,{
                params:{
                    uid:getCookie('uid')
                }
            })
            this.res = res.data;
        }
    },
    created() {
        this.getSongSheel();
        // (async function(self){
        //     var res = await axios.get(`http://localhost:8080/user/songSheet`,{
        //         params:{
        //             uid:getCookie('uid')
        //         }
        //     })
        //     self.res = res.data;
        //     // console.log(res.data);
        // })(this)
    }
})