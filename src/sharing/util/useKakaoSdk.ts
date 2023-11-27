import { useEffect, useState } from "react";

interface KakaoSDK {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Link: {
    sendDefault: (settings: any) => void; // 보다 상세한 타입 정의가 가능하면 좋습니다
  };
}

interface ShareKakaoProps {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

export const useKakaoSdk = () => {
  const [isKakaoReady, setKakaoReady] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => setKakaoReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareKakao = ({
    url,
    title,
    description,
    imageUrl,
  }: ShareKakaoProps): void => {
    if (window.Kakao && isKakaoReady) {
      try {
        // 직접 키 값을 사용
        const kakaoKey = "2ca76ae1e2643e03229a187dc09c1f5b";

        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(kakaoKey);
        }

        window.Kakao.Link.sendDefault({
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
              title: title,
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
          ],
        });
      } catch (error) {
        console.error("Error sharing via Kakao", error);
      }
    }
  };

  return { shareKakao };
};
