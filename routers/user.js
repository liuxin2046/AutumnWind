const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
    //注册路由
    router.post('/register',(req,res)=>{
    var object = req.body;
        console.log(object);
        object.uid = null;
        pool.query(`insert into aw_user value set ?`);
    });
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
    module.exports = router;