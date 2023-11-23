import { firebaseConfing } from "./config";

export const handleCopyClipBoard = async (name: string, share: any) => {
  const host = `${window.location.protocol}//${window.location.host}/shared?user=${share.id}&folder=${share.folderId}`;
  const IMAGE_URL = `${window.location.protocol}//${window.location.host}/img/png/image25.png`;
  if (name === "링크") {
    try {
      await navigator.clipboard.writeText(host);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  } else if (name === "카카오톡") {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(firebaseConfing.apiKey);
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
          imageUrl: IMAGE_URL,
          link: {
            mobileWebUrl: host,
            webUrl: host,
          },
        },
        buttons: [
          {
            title: "보러가기",
            link: {
              mobileWebUrl: host,
              webUrl: host,
            },
          },
        ],
      });
    }
  } else {
    const sharedLink = encodeURIComponent(host);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  }
};
