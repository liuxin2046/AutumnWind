if(location.search.indexOf('singerName=')!=-1){
    var Name = decodeURI(location.search.split('=')[1]);
    console.log(Name);
}
new Vue({
    el:'#singers',
    // data:{
    //     res:[{sname:'',intro:''}],
    //     show:false
    // },
    data(){
        return {
        res:[{sname:'',intro:''}],
        show:false
        }
    },
    methods:{
        showMore(){
            if(!this.show)
                this.show = true;
            else
                this.show = false;
        },
        add:async function(index){
            console.log('当前歌曲的lid: '+index);
            console.log('当前用户的uid: '+getCookie('uid'));
            var isCollcted = await axios.get('http://localhost:8080/user/checkSong',{
                params:{
                    lid:index,
                    uid:getCookie('uid')
                }
            })
            //判断当前用户用户是否已经收藏该歌曲
            if(!isCollcted.data.msg){
                var cinfo = await axios.get('http://localhost:8080/user/collectSong',{
                params:{
                    lid:index,
                    uid:getCookie('uid')
                }
            })
                console.log(cinfo.data.msg);
            }else{
                console.log('不能重复添加');
            }



        } 
        // add(index){
        //     console.log('当前歌曲的lid: '+index);
        //     console.log('当前用户的uid: '+getCookie('uid'));
        //     //在这里发送一个ajax请求
        //     var cinfo = axios.get('http://localhost:8080/user/collectSong',{
        //         params:{
        //             lid:index,
        //             uid:getCookie('uid')
        //         }
        //     })

        // }
    },
    computed:{
        single(){
            return this.res.length;
        },
        mv(){
            /*需要遍历每项列表中是否有mv字段*/
            var Counter = 0;
            for(var key in this.res){
                if(this.res[key].vedio_href !== null){
                    Counter++;
                }
            }
            return Counter;
        },
        album(){
            /*需要遍历每项列表中是否有没mv字段*/
            var Counter = 0;
            for(var key in this.res){
                if(this.res[key].album !== null){
                    Counter++;
                }
            }
            return Counter;
        }
    },
    created(){
        (async function(self){
            var res = await axios.get('http://localhost:8080/singer/info',{
                params:{
                    /*这个参数应该是搜索栏中传过来的*/
                    singerName:Name
                }
            });
            self.res = res.data;
            console.log(self.res);
        })(this)
    }
})