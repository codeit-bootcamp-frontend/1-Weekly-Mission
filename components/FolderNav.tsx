import { styled } from "styled-components";
import Image from "next/image";
import { UserFolder } from "@/lib/Type";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

interface FolderNavProps {
  folders: UserFolder[];
  setCurrentFolderID: Dispatch<SetStateAction<number>>;
}

function FolderNav({ folders = [], setCurrentFolderID }: FolderNavProps) {
  const [currentFolder, setCurrentFolder] = useState({ name: "전체", id: 0 });

  const handleClick = (name: string, id: number) => {
    console.log(id);
    setCurrentFolderID(id);
    setCurrentFolder({ name: name, id: id });
  };

  return (
    <Container>
      <ButtonContainer>
        <Buttons>
          <FolderButton
            key={0}
            isClicked={currentFolder.id === 0}
            onClick={() => {
              handleClick("전체", 0);
            }}
          >
            전체
          </FolderButton>
          {folders &&
            folders.map((folder) => {
              return (
                <FolderButton
                  key={folder.id}
                  isClicked={currentFolder.id === folder.id}
                  onClick={() => {
                    handleClick(folder.name, folder.id);
                  }}
                >
                  {folder.name}
                </FolderButton>
              );
            })}
        </Buttons>
        <FolderAddButton>폴더 추가 +</FolderAddButton>
      </ButtonContainer>
      <Div>
        <FolderName>{currentFolder.name}</FolderName>
        <CTAs>
          <CTA>
            <S_Image src={"/images/share.svg"} width={18} height={18} alt="" />
            공유
          </CTA>
          <CTA>
            <S_Image src={"/images/pen.svg"} width={18} height={18} alt="" />
            이름 변경
          </CTA>
          <CTA>
            <S_Image src={"/images/delete.svg"} width={18} height={18} alt="" />
            삭제
          </CTA>
        </CTAs>
      </Div>
      <NoLinksFound></NoLinksFound>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 106rem;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
`;

const Buttons = styled.div`
  display: flex;
`;

const FolderButton = styled.button<{ isClicked: boolean }>`
  box-sizing: border-box;
  display: inline-block;

  min-width: 5rem;
  width: fit-content;
  max-width: 15rem;

  overflow: hidden;
  cursor: pointer;

  height: 3.5rem;
  padding: 0.8rem 1.2rem;
  margin-right: 0.8rem;

  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background-color: ${({ isClicked }) => (isClicked ? "#6d6afe" : "#ffffff")};
  color: ${({ isClicked }) => (isClicked ? "#ffffff" : "#000000")};

  font-size: 1.6rem;
`;

const FolderAddButton = styled.button`
  border: 0;
  font-size: 1.6rem;
  color: #6d6afe;
  background: #fff;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FolderName = styled.span`
  color: #000000;
  font-size: 2.4rem;
  font-weight: 600;
`;

const CTAs = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.2rem;
`;

const CTA = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  color: var(--linkbrary-gray-60, #9fa6b2);
  background-color: transparent;

  border: none;
  cursor: pointer;
`;

const S_Image = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.4rem;
`;

const NoLinksFound = styled.div`
  font-size: 1.6rem;
  width: fit-content;
  margin: 4rem auto;
`;

export default FolderNav;
