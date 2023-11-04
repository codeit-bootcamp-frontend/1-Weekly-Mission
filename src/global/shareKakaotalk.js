const shareKakaoTalk = (url) => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init('404047130938e03c1b59a136f951b93f');
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'linkbrary',
        description: '원하는 링크를 이곳에 모아보세요🤍',
        imageUrl:
          'https://dnvefa72aowie.cloudfront.net/origin/profile/202203/725FA37FF3F08BEEF21E6FF01DC8271269E1E889211623AD8852E04704A3F255.jpg?q=82&s=640x640&t=crop',
        link: {
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            webUrl: url,
          },
        },
      ],
    });
  }
};

export default shareKakaoTalk;
