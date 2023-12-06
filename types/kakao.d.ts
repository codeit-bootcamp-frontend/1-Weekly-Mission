interface Kakao {
  init(appKey: string): void;
  isInitialized: () => boolean;
  Share: {
    sendScrap(options: { requestUrl: string }): void;
  };
}

interface Window {
  Kakao: Kakao;
}
