declare global {
  interface Window {
    Kakao: any;
  }
}

export const shareKakaoLink = (url: string, pathName: string) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_LINK_KEY || "");
    }

    if (window.Kakao.isInitialized()) {
      window.Kakao.Share.sendCustom({
        templateId: 101409,
        templateArgs: {
          domain: window.location.origin,
          path: url + pathName,
        },
      });
    } else {
      console.error("kakao script error");
    }
  }
};
