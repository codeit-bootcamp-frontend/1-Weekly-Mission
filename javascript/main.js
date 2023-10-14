import {$} from './utils.js'
if(window.localStorage.getItem("user")) {
    const logOut = document.createElement('span');
    logOut.innerHTML = '로그아웃';
    $('.header-login').append(logOut);
    $('.header-login a').innerHTML = '폴더 이동'
    $('.header-login a').style.width = '110px';
    
    $(".header-login span").addEventListener('click', () => {
        alert('로그아웃 되었습니다.')
        window.localStorage.removeItem('user');
        location.reload();
    })
}


