//Facebook
export const shareFacebook = (sharedUrl:string) => {
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedUrl}`,
    'popup',
    'width=560, height=560, top=150, left=100. scrollbars=yes'
  );
};

//KakaoTalk
export const shareKakao = (sharedUrl:string) => {
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '링크를 모으고 공유하자!',
      description: "공유하고 싶은 링크를 보여주세요",
      imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        webUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '링크 담으러 가기',
        link: {
          webUrl: sharedUrl,
        },
      },
    ],
  });

};
