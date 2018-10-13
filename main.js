const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const user = require('./routers/user');
const songs = require('./routers/songs');
const search = require('./routers/search');
const carousel = require('./routers/carousel');
var app = express();
    app.listen(8080,()=>{
        console.log('Server is running');
    });
    app.use(cookieParser());
    app.use(session({
        secret:'12345',
        cookie:{maxAge:43200000},
        resave:false,
        saveUninitialized:true
    }))
    app.use(express.static('./static')); //设置静态资源
    app.use(bodyParser.urlencoded({
        extended:false
    }))
    app.use('/user',user);
    app.use('/singer',songs);
    app.use('/songs',search);
    app.use('/carousel',carousel);