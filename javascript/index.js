const section_title_wrap = document.querySelector('.section-title-wrap h2');
const section_article_introduce_third_p = document.querySelector('.section-article-introduce-third p');
const section_article_introduce_fourth_p = document.querySelector('.section-article-introduce-fourth p');


window.addEventListener('resize',function(e) { 
    let width = e.target.innerWidth//브라우저 너비
    if(width < 1200) {
        section_title_wrap.innerHTML = '<span>세상의 모든 정보</span>를<br>\
        쉽게 저장하고<br> 관리해보세요';
        section_article_introduce_third_p.innerHTML = '여러 링크를 폴더에 담고 공유할 수<br>\
        있습니다. 가족, 친구, 동료들에게 쉽고<br> 빠르게 링크를 공유해 보세요.';
        section_article_introduce_fourth_p.innerHTML = '중요한 정보들을 검색으로 쉽게<br> 찾아보세요';
    } else {
        section_title_wrap.innerHTML = '<span>세상의 모든 정보</span>를<br>\
        쉽게 저장하고 관리해보세요';
        section_article_introduce_third_p.innerHTML = '여러 링크를 폴더에 담고 공유할 수 있습니다.<br>\
        가족, 친구, 동료들에게 쉽고 빠르게 링크를<br>\
        공유해 보세요.';
        section_article_introduce_fourth_p.innerHTML = '중요한 정보들을 검색으로 쉽게 찾아보세요';
    }
})  
