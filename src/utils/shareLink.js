import { HOST } from "../api";

const shareKakaoTalk = (currentUrl) => {
  if (window.Kakao) {
    const Kakao = window.Kakao;

    if (!Kakao.isInitialized()) {
      Kakao.init("6f93f8646ae3439be343091404c38b8f");
    }

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "linkbrary",
        description: "나으니 링크브러리 페이지!",
        imageUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMDNfMjk1/MDAxNTc4MDU2NjI4NjI2.MUVIQyHNte2dhSL5oT-zVBebmIBO4LOhW6BxeMRQlOcg.fZJZ1JuU7W19m49Gx3WtbVcNPPq7JoiAOcRo0rrRFKUg.PNG.amoripse/1w132w.png?type=w800",
        link: {
          webUrl: HOST + currentUrl,
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: HOST + currentUrl,
          },
        },
      ],
    });
  }
};

const shareLink = async (currentUrl) => {
  try {
    await navigator.clipboard.writeText(HOST + currentUrl);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};

export { shareKakaoTalk, shareLink };
