import styled from "styled-components";
import addIcon from "../../Assets/add.png";
import FolderMenuButton from "./FolderMenuButton";
import shareIcon from "../../Assets/share.svg";
import penIcon from "../../Assets/pen.svg";
import deleteIcon from "../../Assets/delete.svg";
import { PersonalFolder } from "../../types/personalFolderType";

interface ModalType {
  modal: any;
}

interface Props {
  folders: PersonalFolder;
  onClick: (nextValue: string, nextName: string) => void;
  current: any;
  folderName: string | null;
  modal: (isOpen: boolean, modalName: string) => void;
}

const FEATURE_LIST = [
  { name: "공유", src: shareIcon, alt: "공유 아이콘", modal: "shareFolder" },
  {
    name: "이름 변경",
    src: penIcon,
    alt: "이름 변경 아이콘",
    modal: "changeFolderName",
  },
  { name: "삭제", src: deleteIcon, alt: "삭제 아이콘", modal: "deleteFolder" },
];

function FolderMenu({ folders, onClick, current, folderName, modal }: Props) {
  console.log(folders);
  console.log(onClick);
  console.log(current);
  console.log(folderName);
  console.log(modal);

  const items = Array.isArray(folders) ? folders : [];

  const handleModal = (e: any) => {
    const nextModal = e.currentTarget.getAttribute("modal");
    modal(true, nextModal);
  };

  return (
    <>
      <Wrapper>
        <MenuList>
          <FolderMenuButton id="" onClick={onClick} $isActive={current === ""}>
            전체
          </FolderMenuButton>
          {items.map((folder) => {
            const id = String(folder.id);
            return (
              <li key={folder.id}>
                <FolderMenuButton
                  id={folder.id}
                  name={folder.name}
                  onClick={onClick}
                  $isActive={id === current}
                >
                  {folder.name}
                </FolderMenuButton>
              </li>
            );
          })}
        </MenuList>
        <FolderAddContainer modal="addFolder" onClick={handleModal}>
          <AddFolderButton>폴더 추가</AddFolderButton>
          <Icon src={addIcon} alt="Add_Button" />
        </FolderAddContainer>
      </Wrapper>
      <FeatureWrapper>
        <CurrentFolderName>
          {folderName ? folderName : "전체"}
        </CurrentFolderName>
        {folderName && (
          <Container>
            {FEATURE_LIST.map((item) => {
              return (
                <FeatureContainer
                  key={item.name}
                  modal={item.modal}
                  onClick={handleModal}
                >
                  {item.name}
                  <FeatureIcon src={item.src} alt={item.alt} />
                </FeatureContainer>
              );
            })}
          </Container>
        )}
      </FeatureWrapper>
    </>
  );
}

export default FolderMenu;

const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const FeatureWrapper = styled(Wrapper)`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const FolderAddContainer = styled.button<ModalType>`
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  align-items: center;
  min-width: 100px;
  transform: translateY(50%);
  background: none;
  border: none;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const AddFolderButton = styled.span`
  color: var(--primary);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
`;

const CurrentFolderName = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const FeatureContainer = styled.div<ModalType>`
  display: flex;
  align-items: center;
  margin-left: 12px;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--gray60);

  @media (max-width: 767px) {
    margin-left: 0;
    margin-right: 12px;
  }
`;

const FeatureIcon = styled.img`
  width: 18px;
  height: 18px;
`;
