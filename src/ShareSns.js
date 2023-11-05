const shareKakao = (route) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "",
        description: "설명",
        imageUrl: "이미지 url",
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

export default shareKakao;
