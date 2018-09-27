if(location.search.indexOf('singerName=')!=-1){
    var Name = decodeURI(location.search.split('=')[1]);
    console.log(Name);
}
new Vue({
    el:'#singers',
    data:{
        res:[{sname:'',intro:''}],
        show:false
    },
    methods:{
        showMore(){
            if(!this.show)
                this.show = true;
            else
                this.show = false;
        }
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
            var res = await axios.get('http://localhost:3000/singer/info',{
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