import { useEffectOnce } from "./useEffectOnce";

interface ShareKakaoProps {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

declare global {
  interface Window {
    Kakao: any; // 'any' 타입으로 정의, 더 정확한 타입 정의가 가능하다면 변경할 수 있음
  }
}

export const useKakaoSdk = () => {
  const shareKakao = ({
    url,
    title,
    description,
    imageUrl,
  }: ShareKakaoProps) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }

      kakao.Link.sendDefault({
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
    }
  };

  useEffectOnce(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  });

  return { shareKakao };
};
