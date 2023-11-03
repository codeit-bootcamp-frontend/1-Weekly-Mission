const shareKakao = (route) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("ba8e4058d448ba5a018e20131a59d3da");
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
