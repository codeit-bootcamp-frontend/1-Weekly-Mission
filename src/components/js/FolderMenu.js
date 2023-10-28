import styled from "styled-components";
import addIcon from "../../Assets/add.png";
import FolderMenuButton from "./FolderMenuButton";
import shareIcon from "../../Assets/share.svg";
import penIcon from "../../Assets/pen.svg";
import deleteIcon from "../../Assets/delete.svg";

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

const FolderAddContainer = styled(Container)`
  min-width: 79px;
  transform: translateY(50%);
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
  font-size: 16px;
`;

const CurrentFolderName = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const FeatureContainer = styled.div`
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

const FEATURE_LIST = [
  { name: "공유", src: shareIcon, alt: "공유 아이콘" },
  { name: "이름 변경", src: penIcon, alt: "이름 변경 아이콘" },
  { name: "삭제", src: deleteIcon, alt: "삭제 아이콘" },
];

function FolderMenu({ folders, onClick, current, folderName }) {
  const items = Array.isArray(folders) ? folders : [];
  return (
    <>
      <Wrapper>
        <MenuList>
          <FolderMenuButton
            id={""}
            onClick={onClick}
            $isActive={current === ""}
          >
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
        <FolderAddContainer>
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
                <FeatureContainer key={item.name}>
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
