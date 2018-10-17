const express = require('express');
const router = express.Router();
const pool = require('../pool');
router.get('/getSong',(req,res)=>{
    var lid = req.query.lid;
    // console.log('lid: '+lid);
    var sql = `SELECT aw_music_list.lid,song_name,stime,sname,audio_href,lyric,cover FROM aw_music_list,aw_singer_list WHERE sno = sid and aw_music_list.lid = ?`;
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result});
        }else{
            res.send({code:0,msg:'not find'});
        }
    })
    
})
router.get('/getSinger',(req,res)=>{
    var keyword = req.query.keyword;
    console.log(keyword);
    var patt = /^\w+$/;
    if(patt.test(keyword)){
        var sql = `select sname from aw_singer_list where sname like '%${keyword}%'`;
        pool.query(sql,[],(err,result)=>{
            if(err) throw err
            else
            res.send({code:1,msg:result});
        })
    }
})
module.exports = router;