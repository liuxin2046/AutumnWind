const express = require('express');
const router = express.Router();
router.get('/list',(req,res)=>{
    var arr = [
        [
            [{"title":"11每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (1).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}
            ],
            [{"title":"12每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (7).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (8).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (9).jpg","play_count":32}],
            [{"title":"13轻快欢畅的浴室电音","pic_url":"http://localhost:8080/images/wangfeng.jpg","play_count":23},
            {"title":"轻拨琴弦 | 吉他中的东方气场","pic_url":"http://localhost:8080/images/bird.jpg","play_count":23},
            {"title":"每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/huge.jpg","play_count":23},
            {"title":" 碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/girl.jpg","play_count":43},
            {"title":" 碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/girl.jpg","play_count":23}
            ]
        ],
        [
            [{"title":"2每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}
            ],
            [{"title":"2每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (7).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (8).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (9).jpg","play_count":32}]
        ],
        [
            [{"title":"3每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (7).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}
            ],
            [{"title":"3每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (7).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (8).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (9).jpg","play_count":32}]
        ]
    ]
    var obj = [
        {"class":"推荐歌曲","cont":[
            {
            "data":[
            {"title":"11每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (1).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},
            {
            "data":[
            {"title":"12每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (7).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (8).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (9).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300.jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},
            {
            "data":[
            {"title":"13每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/wangfeng.jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/huge.jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/girl.jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/bird.jpg","play_count":12},
            {"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/guitar.jpg","play_count":32}]}]},
            
            {"class":"网络歌曲","cont":[
            {"data":[
            {"title":"21每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":23},
            {"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
            {"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
            {"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},{"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},{"data":[{"title":"11每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (1).jpg","play_count":23},{"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},{"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},{"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},{"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},{"data":[{"title":"11每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (1).jpg","play_count":23},{"title":"励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},{"title":"摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},{"title":"碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},{"title":"现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]}]},
            {"class":"90年代","cont":[
                {"data":[
                    {"title":"31每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/guitar.jpg","play_count":23},
                    {"title":"32励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
                    {"title":"33摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
                    {"title":"34碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
                    {"title":"35现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},
                {"data":[{"title":"312每日新歌：容祖儿首次尝试日系摇滚","pic_url":"http://localhost:8080/images/300 (1).jpg","play_count":23},
                {"title":"322励志国语」奔梦的路上不能死气沉沉","pic_url":"http://localhost:8080/images/300 (2).jpg","play_count":20},
                {"title":"332摇滚现场带给你震撼（华语篇）","pic_url":"http://localhost:8080/images/300 (3).jpg","play_count":52},
                {"title":"342碰撞美学 百样音乐中的中国元素","pic_url":"http://localhost:8080/images/300 (4).jpg","play_count":12},
                {"title":"352现在是反派的Show Time ! ","pic_url":"http://localhost:8080/images/300 (5).jpg","play_count":32}]},
                ]}
]
    res.send({code:1,msg:obj})


})

module.exports = router;