const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
    //注册路由
    router.post('/register',(req,res)=>{
    var object = req.body;
        console.log(object);
        object.uid = null;
        pool.query(`insert into aw_user_list value set ?`);
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
                console.log(result);
                res.send(result);
            }else{
                console.log('error');
                res.send({"msg":"404"});
            }
        })
    })
    //检查用户名是否存在
    router.get('/checkName',(req,res)=>{
        var uname = req.query.uname;
        pool.query(`select * from aw_user where uname = ?`,[uname],(err,result)=>{
            if(err) throw err;
            if(result.length > 0){
                res.send('1');
            }else{
                res.send('0');
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
        var sql = `select song_name,sname,album,stime from aw_user_collect,aw_music_list,aw_singer_list where (aw_user_collect.lid=aw_music_list.lid and aw_music_list.sno = aw_singer_list.sid) and uid = ?`;
        pool.query(sql,[uid],(err,result)=>{
            res.send(result);
        })
    })
    module.exports = router;