import { useContext, useEffect, useState } from "react";
import { FolderContext } from "context/FolderContext";

import styled from "styled-components";

import { shareKakao } from "common/libraries/shareKakaoLink";
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
  { name: "카카오톡", icon: kakaoIcon },
  { name: "페이스북", icon: facebookIcon },
  { name: "링크 복사", icon: linkIcon },
];

export default function ShareFolder({ currentFolderName }) {
  const { folderNameList } = useContext(FolderContext);

  /* 현재 선택한 폴더와 일치하는 folder의 userId, folderId */
  const handleShareFolder = () => {
    const folderInfo = folderNameList.filter((folder) => folder.name === currentFolderName);
    const { user_id, id } = folderInfo[0];
    shareKakao(user_id, id);
  };

  /* 카카오 스크립트 추가 및 제거 */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <Contents>
      <Description>
        <ModalTitle label="폴더 공유" />
        <Info>{currentFolderName}</Info>
      </Description>
      <IconsContainer>
        {icons.map((icon, index) => (
          <Icons key={index}>
            <Image src={icon.icon} alt="sns" onClick={handleShareFolder} />
            <Name>{icon.name}</Name>
          </Icons>
        ))}
      </IconsContainer>
    </Contents>
  );
}
