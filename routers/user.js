const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
    //注册路由
    router.post('/register',(req,res)=>{
    var {uname,upwd,account} = req.body;
        var index = Math.floor(Math.random()*7);
        var avatar = './images/avatar/d'+(index+1)+'.jpg';
        console.log(avatar);
        var sql =  `insert into aw_user_list values(null,?,?,?,?,null,?,?,null)`;
        pool.query(sql,[uname,upwd,account,account,uname,avatar],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows > 0){
                res.send({code:1,msg:'success'});
            }
        });
    });
    //登录路由
    router.post('/login',(req,res)=>{
    var object = req.body;
    //console.log(object);
    var account = object.account;
    var password = object.password;
    //查询结果
        pool.query(`select * from aw_user_list where account = ? and upwd = ?`,[account,password],(err,result)=>{
            if(err) throw err;
            if(result.length > 0){
                req.session.uname = result[0].uname;
                req.session.uid = result[0].uid;
                console.log(req.session.uname);
                res.send(result);
            }else{
                console.log('error');
                res.send({"msg":"404"});
            }
        })
    })
    //检测是否已登录
    router.get('/islogin',(req,res)=>{
        if(req.session.uid !== undefined){
            var uid = req.session.uid;
            var sql = `select * from aw_user_list where uid = ?`;
            pool.query(sql,[uid],(err,result)=>{
                if(err) throw err;
                else
                res.send({code:1,msg:result});
            })
        }else{
            res.send({code:0,msg:'null'});
    }
    })
    //注销登录
    router.get('/signout',(req,res)=>{
        req.session.destroy(); //销毁session
        res.send({code:1,msg:'ok'});
    })
    //检查用户名是否存在
    router.get('/checkName',(req,res)=>{
        var uname = req.query.uname;
        pool.query(`select * from aw_user_list where uname = ?`,[uname],(err,result)=>{
            if(err) throw err;
            if(result.length > 0){
                res.send({code:1,msg:'false'});
            }else{
                res.send({code:0,msg:'true'});
            }
        })
    });
    //检查用户歌单
    router.get('/checkSong',(req,res)=>{
        var {lid,uid} = req.query;
        var sql = `select * from aw_user_collect where lid=? and uid=?`;
        pool.query(sql,[lid,uid],(err,result)=>{
            if(err){
            throw err;
            }
            if(result.length > 0){
                console.log(result);
                res.send({code:1,msg:true});
            }else{
                console.log(result);
                res.send({code:0,msg:false})
            }          
        })
    })
    //收藏歌曲路由
    router.get('/collectSong',(req,res)=>{
        var {lid,uid} = req.query;
        console.log('歌曲id: '+lid+'用户id: '+uid);
        var sql = `insert into aw_user_collect values(?,?)`;
        pool.query(sql,[uid,lid],(err,result)=>{
            if(err){
                throw err;
            }
            if(result.affectedRows>0){
            res.send({code:2,msg:'sucess'})
            }
            else{
            res.send({code:0,msg:'failed'})
            }
        })
    })
    //导出用户歌单
    router.get('/songSheet',(req,res)=>{
        var uid = req.query.uid;
        var sql = `select aw_music_list.lid as lid,song_name,sname,album,stime from aw_user_collect,aw_music_list,aw_singer_list where (aw_user_collect.lid=aw_music_list.lid and aw_music_list.sno = aw_singer_list.sid) and uid = ?`;
        pool.query(sql,[uid],(err,result)=>{
            res.send(result);
        })
    })
    //删除用户歌曲
    router.get('/deleteSong',(req,res)=>{
        var {uid,lid} = req.query;
        console.log('uid: '+uid+' lid: '+lid);
        var sql = `delete from aw_user_collect where uid = ? and lid = ?`;
        pool.query(sql,[uid,lid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows > 0){
                res.send({code:1,msg:'success'});
            }
            else{
                res.send({code:0,msg:'failed'});
            }
        })
    })
    module.exports = router;