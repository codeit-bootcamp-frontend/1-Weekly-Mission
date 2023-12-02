import styled from "styled-components";
import { useState } from "react";
import CTA from "../CTA";
import * as React from "react";
import { SelectedFolderInfo } from "../../../types";

interface Prop {
  selectedFolder: SelectedFolderInfo[];
}

interface ButtonProps {
  key: number;
  folderId: number;
  buttonIndex: number;
}

function AddModal({ selectedFolder }: Prop) {
  const [isIconVisible, setIsIconVisible] = useState(-1);

  const handleClick = (index: number) => {
    setIsIconVisible(index);
  };

  return (
    <>
      <H2>링크 주소</H2>
      {selectedFolder.map((folder, index) => {
        if (index > 1) {
          return (
            <Button key={index} folderId={folder.id} buttonIndex={index} onClick={() => handleClick(index)}>
              <Area>
                <P>{folder.name}</P>
                <P2>{`${folder.link.count}개 링크`}</P2>
                {isIconVisible === index && <Img key={index} src="/assets/check_icon.svg" />}
              </Area>
            </Button>
          );
        }
      })}
      <CustomCTA modal="폴더 추가">추가하기</CustomCTA>
    </>
  );
}

export default AddModal;

const H2 = styled.p`
  margin-top: 0.8rem;
  color: var(--gray60);
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-bottom: 2.4rem;
`;

const Area = styled.div`
  display: flex;
  width: 26.4rem;
  align-items: center;
  gap: 0.8rem;
  position: relative;
`;

const P = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */
`;

const P2 = styled.p`
  color: var(--gray60);
  font-size: 14px;
`;

const Img = styled.img`
  position: absolute;
  right: 0.8rem;
  top: 0.4;
`;

const Button = styled.button<ButtonProps>`
  font-family: Pretendard;
  display: flex;
  padding: 0.8rem;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  &:hover {
    border-radius: 8px;
    background: var(--gray0);

    ${Area} ${P} {
      color: var(--primary);
    }
  }
`;

const CustomCTA = styled(CTA)`
  margin-top: 2.4rem;
  width: 28rem;
`;
