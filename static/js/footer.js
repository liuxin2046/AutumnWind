$(function(){
    $(`<link rel='stylesheet' href='./css/footer.css'>`).appendTo('head');
    $.ajax({
        type:'get',
        url:'footer.html',
        success:function(res){
            $(res).replaceAll($('#footer'));
        }
    })
})