//Facebook
export const shareFacebook = (sharedUrl) => {
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedUrl}`,
    'popup',
    'width=560, height=560, top=150, left=100. scrollbars=yes'
  );
};

//KakaoTalk
const { Kakao } = window;

export const shareKakao = (sharedUrl) => {
  // 중복 initailization 방지, 괄호안에는 서비스 고유 키
  if (!Kakao.isInitialized()) Kakao.init('294992f2e77e06b1422d31ae80f76271');

  // 메시지 템플릿 - feed
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '무엇이든 물어봐!',
      link: {
        mobileWebUrl: sharedUrl,
        webUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '질문 남기러 가기',
        link: {
          mobileWebUrl: sharedUrl,
          webUrl: sharedUrl,
        },
      },
    ],
  });
};
