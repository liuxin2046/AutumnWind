const express = require('express');
const router = express.Router();
const pool = require('../pool');
router.get('/info',(req,res)=>{
    var singerName = req.query.singerName;//获取查询字符串，使用query方法
    console.log(singerName);
    var sql = `select * from aw_music_list,aw_singer_list,aw_music_family where (sno=sid and fid=family_id) and sname = ?`;
    pool.query(sql,[singerName],(err,result)=>{
        if(err) throw err
        if(result.length > 0)
        res.send(result);
        else
        res.send({'msg':'err','code':404});
    })
})
module.exports = router;