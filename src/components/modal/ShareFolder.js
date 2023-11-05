import { useContext } from "react";
import { FolderContext } from "context/FolderContext";

import styled from "styled-components";

import { shareOnKakao } from "common/libraries/shareKakaoLink";
import { shareOnFacebook } from "common/libraries/shareFacebookLink";
import { shareOnClipboard } from "common/libraries/shareClipboardLink";

import ModalTitle from "components/title/ModalTitle";

import kakaoIcon from "assets/sns/kakao.svg";
import facebookIcon from "assets/sns/facebook.svg";
import linkIcon from "assets/sns/link_round.svg";

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
`;

const Info = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const Image = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 0.8rem;
`;

const icons = [
  { name: "카카오톡", icon: kakaoIcon, action: "kakao" },
  { name: "페이스북", icon: facebookIcon, action: "facebook" },
  { name: "링크 복사", icon: linkIcon, action: "clipboard" },
];

export default function ShareFolder({ currentFolderName }) {
  const { folderNameList } = useContext(FolderContext);

  /*
   * 현재 선택한 폴더와 일치하는 folder의 userId, folderId
   * SNS로 공유하기 또는 클립보드에 복사
   */
  const handleShareFolder = (e) => {
    const shareOnSns = e.target.id;
    const folderInfo = folderNameList.filter((folder) => folder.name === currentFolderName);
    const { user_id, id } = folderInfo[0];

    if (shareOnSns === "kakao") {
      shareOnKakao(user_id, id);
    } else if (shareOnSns === "facebook") {
      shareOnFacebook(user_id, id);
    } else shareOnClipboard(user_id, id);
  };

  return (
    <Contents>
      <Description>
        <ModalTitle label="폴더 공유" />
        <Info>{currentFolderName}</Info>
      </Description>
      <IconsContainer onClick={handleShareFolder}>
        {icons.map((icon, index) => (
          <Icons key={index}>
            <Image src={icon.icon} alt="sns" id={icon.action} />
            <Name>{icon.name}</Name>
          </Icons>
        ))}
      </IconsContainer>
    </Contents>
  );
}
