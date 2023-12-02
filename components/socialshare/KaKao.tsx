import React, { useEffect } from "react";
import kakaochat from "../../assets/images/kakaochat.svg";
import Image from "next/image";

export default function KaKao() {
  const jsKey = "e90c940cb2e88d388b74702a56c46c05";
  const { Kakao } = window;
  // console.log(Kakao); 잘 나오는데..흠

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!Kakao) {
        Kakao.cleanup();
        Kakao.init(jsKey);
      }
    }
  }, []);
  //

  const shareKakao = () => {
    {
      Kakao.Link.sendCustom({
        templateId: 100292,
        templateArgs: {
          title: "myFirstWeb Project",
          message: "공유하실래요?",
          THU: "https://slp-statics.astockcdn.net/static_assets/staging/22spring/audio/Card2_420674272_.jpg?width=580&format=web",
        },
      });
    }
  };

  return (
    <>
      <div onClick={() => shareKakao()}>
        <Image src="/images/delete.png" alt="kakao" width={30} height={30} />
      </div>
    </>
  );
}
