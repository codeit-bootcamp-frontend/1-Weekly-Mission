export default function useKaKao() {
  const jsKey = "e90c940cb2e88d388b74702a56c46c05";
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(jsKey);
    }

    const shareKakao = () => {
      {
        kakao.Link.sendCustom({
          templateId: 100292,
          templateArgs: {
            THU: "https://slp-statics.astockcdn.net/static_assets/staging/22spring/audio/Card2_420674272_.jpg?width=580&format=web",
          },
        });
      }
    };
    return shareKakao;
  }
}
