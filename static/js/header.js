$(function(){
    $(`<link rel='stylesheet' href='./css/header.css'>`).appendTo('head');
    $.ajax({
        type:'get',
        url:'header.html',
        success:function(res){
            $(res).replaceAll($('#header'));
        }
    })
})