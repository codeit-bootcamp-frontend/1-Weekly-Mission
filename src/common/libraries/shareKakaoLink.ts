declare const window: typeof globalThis & {
  kakao: any;
};

export const shareOnKakao = (userId: number, folderId: number) => {
  const hostURL = window.location.href;

  if (window.kakao) {
    const kakao = window.kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }

  window.kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "폴더",
      description: "링크",
      imageUrl: "이미지 URL",
      link: {
        mobileWebUrl: `${hostURL}/shared?user=${userId}&folder=${folderId}`,
        webUrl: `${hostURL}/shared?user=${userId}&folder=${folderId}`,
      },
    },
  });
};
