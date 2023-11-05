import kakaoIcon from "../../assets/img/modal-kakao.svg";
function KakaoShare() {
  const Kakao = window.Kakao;
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }
  const handleShareClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "링크브러리",
        description: "링크 폴더를 공유합니다.",
        imageUrl:
          "https://cdn.newspenguin.com/news/photo/201912/877_1419_234.jpg",
        link: {
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "링크브러리 방문하기",
          link: {
            mobileWebUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <button className="Kakao-link-btn" onClick={handleShareClick}>
      <img src={kakaoIcon} />
      <p>카카오톡</p>
    </button>
  );
}

export default KakaoShare;
