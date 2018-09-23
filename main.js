const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routers/user');
const songs = require('./routers/songs');
var app = express();
    app.listen(3000,()=>{
        console.log('Server is running');
    });
    app.use(express.static('./static')); //设置静态资源
    app.use(bodyParser.urlencoded({
        extended:false
    }))
    app.use('/user',user);
    app.use('/singer',songs);