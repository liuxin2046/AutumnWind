//getCookie方法
function getCookie(cname){
    var name = cname+'=';
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++){
        if(ca[i].indexOf(name)!=-1){
            var c = ca[i].trim();
            return c.substring(name.length);
        }
    }
    return '';
}