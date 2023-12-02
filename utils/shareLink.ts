import { HOST } from "./api";

// Kakao에도 type을 정하려다보니 너무 방대해진 것 같은데 이렇게 하는게 맞는 지 궁금합니다..
interface Kakao {
  init(appKey?: string): void;
  isInitialized: () => boolean;
  Share: {
    sendDefault(options: {
      objectType: string;
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
          webUrl: string;
        };
      };
      buttons: [
        {
          title: string;
          link: {
            webUrl: string;
          };
        }
      ];
    }): void;
  };
}

declare global {
  interface Window {
    Kakao: Kakao;
  }
}

const shareKakaoTalk = (currentUrl: string) => {
  if (window.Kakao) {
    const Kakao = window.Kakao;

    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.REACT_APP_KAKAO_MSG_KEY);
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

const shareLink = async (currentUrl: string) => {
  try {
    await navigator.clipboard.writeText(HOST + currentUrl);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};

export { shareKakaoTalk, shareLink };
