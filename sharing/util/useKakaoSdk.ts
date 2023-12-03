import { useEffectOnce } from "./useEffectOnce";

type ShareKakaoParams = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
};

declare const window: Window & {
  Kakao: {
    init: (key?: string) => void;
    isInitialized: () => boolean;
    Link: {
      sendDefault: (params: {
        objectType: "feed";
        content: {
          title: string;
          description: string;
          imageUrl: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        };
        buttons: {
          title: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        }[];
      }) => void;
    };
  };
};

export const useKakaoSdk = () => {
  const shareKakao = ({ url, title, description, imageUrl }: ShareKakaoParams) => {
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
    return () => {
      document.body.removeChild(script);
    };
  });

  return { shareKakao };
};
