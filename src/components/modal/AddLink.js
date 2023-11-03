import { useContext, useState } from "react";

import styled from "styled-components";
import { ReactComponent as CheckIcon } from "assets/check.svg";

import ModalTitle from "components/title/ModalTitle";
import ModalButton from "components/button/ModalButton";
import { FolderContext } from "context/FolderContext";

const Container = styled.div`
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

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.span`
  color: var(--color-gray-30);
`;

const IconCheck = styled(CheckIcon)`
  path {
    stroke: white; /* path 요소에 fill 속성 적용 */
  }
`;

const Options = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-varient);
  }

  /* 폴더 선택했을 때 스타일 */
  background: ${({ $isSelected }) => ($isSelected ? "var(--color-primary-varient)" : "")};
  ${Title} {
    color: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "var(--color-gray-30)")};
  }
  ${IconCheck} {
    path {
      stroke: ${({ $isSelected }) => ($isSelected ? "var(--color-primary)" : "")};
    }
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export default function AddLink({ link }) {
  const { folderNameList } = useContext(FolderContext);
  const [selected, setSelected] = useState(false);

  const handleOption = (e) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <Container>
      <Description>
        <ModalTitle label="폴더 추가" />
        <Info>{link}</Info>
      </Description>
      <Contents>
        {folderNameList.map((folder) => (
          <Options
            key={folder.name}
            id={folder.name}
            onClick={handleOption}
            $isSelected={selected === folder.name}
          >
            <Option>
              <Title>{folder.name}</Title>
              <SubTitle>{`${folder.link.count}개 링크`}</SubTitle>
            </Option>
            <IconCheck alt="check" />
          </Options>
        ))}
      </Contents>
      <ModalButton action="change" label="추가하기" />
    </Container>
  );
}
