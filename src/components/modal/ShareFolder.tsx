import { MouseEvent, useContext, useEffect } from "react";
import * as S from "./modalStyles/ShareFolderStyles";
import { FolderContext } from "@/context/FolderContext";

import ModalTitle from "./ModalTitle";

import { shareOnKakao } from "@/common/libraries/shareKakaoLink";
import { shareOnFacebook } from "@/common/libraries/shareFacebookLink";
import { shareOnClipboard } from "@/common/libraries/shreClipboardLink";

const icons = [
  { name: "카카오톡", action: "kakao" },
  { name: "페이스북", action: "facebook" },
  { name: "링크 복사", action: "clipboard" },
];

interface ShareFolderProps {
  currentFolderName: string;
}

export default function ShareFolder({ currentFolderName }: ShareFolderProps) {
  const { folderNameList } = useContext(FolderContext);

  /*
   * 현재 선택한 폴더와 일치하는 folder의 userId, folderId
   * SNS로 공유하기 또는 클립보드에 복사
   */
  const handleShareFolder = (e: MouseEvent<HTMLDivElement>) => {
    const shareOnSns = (e.target as HTMLImageElement).id;
    const folderInfo = folderNameList.filter((folder) => folder.name === currentFolderName);
    const { user_id, id } = folderInfo[0];

    if (shareOnSns === "kakao") {
      shareOnKakao(user_id, id);
    } else if (shareOnSns === "facebook") {
      shareOnFacebook(user_id, id);
    } else shareOnClipboard(user_id, id);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <S.Contents>
      <S.Description>
        <ModalTitle label="폴더 공유" />
        <S.Info>{currentFolderName}</S.Info>
      </S.Description>
      <S.IconsContainer onClick={handleShareFolder}>
        {icons.map((icon, index) => (
          <S.Icons key={index}>
            <S.SocialImage src={`/sns/${icon.action}.svg`} alt="sns" id={icon.action} />
            <S.Name>{icon.name}</S.Name>
          </S.Icons>
        ))}
      </S.IconsContainer>
    </S.Contents>
  );
}
