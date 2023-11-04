export const shareOnKakao = (userId = 1, folderId = 40) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "폴더",
      description: "링크",
      imageUrl: "이미지 URL",
      link: {
        mobileWebUrl: `http://localhost:3000/shared?user=${userId}&folder=${folderId}`,
        webUrl: `http://localhost:3000/shared?user=${userId}&folder=${folderId}`,
      },
    },
  });
};
