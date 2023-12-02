export default function useKaKao() {
  const jsKey = "e90c940cb2e88d388b74702a56c46c05";
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(jsKey);
    }

    //
    const shareKaKao = ({ url, title, description, imageUrl }) => {
      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },

        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
          {
            title: "앱으로 이동",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    };
    return shareKaKao;
  }
}
