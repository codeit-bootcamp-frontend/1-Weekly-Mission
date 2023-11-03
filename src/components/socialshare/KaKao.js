import React, { useEffect } from "react";
import kakaochat from "../../assets/images/kakaochat.svg";
export default function KaKao() {
  const jsKey = "e90c940cb2e88d388b74702a56c46c05";
  const { Kakao } = window;
  // console.log(Kakao); // {VERSION: '2.4.0', cleanup: ƒ, init: ƒ, isInitialized: ƒ}
  useEffect(() => {
    // cleanup안하면은 에러터짐..
    Kakao.cleanup();
    Kakao.init(jsKey);
    // console.log(Kakao.isInitialized());
  }, []);
  //

  const shareKakao = () => {
    const userID = 1;
    const folderID = 7;

    Kakao.Share.sendCustom({
      templateId: 100292,
      templateArgs: {
        userId: userID,
        folderId: folderID,
      },
    });
  };

  return (
    <>
      <img src={kakaochat} alt="" onClick={shareKakao} />
      {/* <button onClick={shareKakao}>카카오톡공유하기</button> */}
    </>
  );
}
