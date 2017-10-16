$(function () {
    var userStorage = "jjwl_user_info";

    var userInfo = localStorage.getItem(userStorage);

    if(userInfo == null) {
        window.location.href = "/jq/jjzw/register/";
        return;
    }


});