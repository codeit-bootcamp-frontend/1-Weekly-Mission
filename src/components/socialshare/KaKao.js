import React, { useEffect } from "react";
import kakaochat from "../../assets/images/kakaochat.svg";

export default function KaKao() {
  const jsKey = "e90c940cb2e88d388b74702a56c46c05";
  const { Kakao } = window;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(jsKey);
  }, []);
  //

  const shareKakao = () => {
    const userID = 1;
    let folderID;
    const currentURL = window.location.pathname;
    const loc = currentURL.indexOf("/folder/");
    if (loc !== -1) {
      folderID = currentURL.split("/")[2];
      Kakao.Share.sendCustom({
        templateId: 100292,
        templateArgs: {
          userId: userID,
          folderId: folderID,
        },
      });
    }
  };

  return (
    <>
      <img src={kakaochat} alt="" onClick={shareKakao} />
    </>
  );
}
