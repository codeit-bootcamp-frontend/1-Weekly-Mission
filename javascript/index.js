const section_title_wrap = document.querySelector('.section-title-wrap h2');


window.addEventListener('resize',function(e) { 
    let width = e.target.innerWidth//브라우저 너비
    if(width < 1200) {
        section_title_wrap.innerHTML = '<span>세상의 모든 정보</span>를<br>\
        쉽게 저장하고<br> 관리해보세요';
    } else {
        section_title_wrap.innerHTML = '<span>세상의 모든 정보</span>를<br>\
        쉽게 저장하고 관리해보세요';
    }
})  
