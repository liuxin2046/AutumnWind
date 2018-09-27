storage = window.localStorage;
var account = storage.getItem('account');
var avatar = storage.getItem('avatar');
// console.log(avatar);
$('.profile_avatar>div.user_avatar_lg>img').attr('src',avatar);
//验证cookie
var userAccount = getCookie('account');
console.log('userccount: '+userAccount);