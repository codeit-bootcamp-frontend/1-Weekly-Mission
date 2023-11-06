import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getFolderLinks } from "../api/getUserFolderData";
import CardList from "./CardList";
import NoLinksFound from "./NoLinksFound";
import deleteImg from "../assets/images/delete.svg";
import shareImg from "../assets/images/share.svg";
import updateImg from "../assets/images/pen.svg";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 19rem;
`;

const Buttons = styled.div`
  display: flex;
`;

const FolderButton = styled.button`
  width: fit-content;
  height: 3.5rem;
  padding: 0.8rem, 1.2rem;
  margin-right: 0.8rem;

  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;

  font-size: 1.6rem;
`;

const FolderAddButton = styled.button`
  border: 0;
  font-size: 1.6rem;
  color: #6d6afe;
  background: #fff;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 19rem;
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

  & img {
    margin-right: 0.4rem;
  }
`;

function FolderButtons({ folders = [] }) {
  const [currentFolder, setCurrentFolder] = useState("");
  const [userFolderLinkData, setUserFolderLinkData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_folderLink = await getFolderLinks("");
        setUserFolderLinkData(res_folderLink);
      } catch (error) {
        throw new Error("사용자 폴더의 링크들 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  const handleClick = async (e) => {
    const query = `?folderId=${e.target.value}`;
    try {
      const res = await getFolderLinks(query);
      setCurrentFolder(e.target.textContent);
      setUserFolderLinkData(res);
      console.log(userFolderLinkData.data?.length);
    } catch (error) {
      throw new Error("사용자 폴더의 링크들 가져오기 실패");
    }
  };

  const items = folders?.data;
  return (
    <div>
      <ButtonContainer>
        <Buttons>
          <FolderButton value="" onClick={handleClick}>
            전체
          </FolderButton>
          {items &&
            items.map((folder) => {
              return (
                <div>
                  <FolderButton
                    key={folder.id}
                    value={folder.id}
                    onClick={handleClick}
                  >
                    {folder.name}
                  </FolderButton>
                </div>
              );
            })}
        </Buttons>
        <FolderAddButton>폴더 추가 +</FolderAddButton>
      </ButtonContainer>
      <Div>
        <FolderName>{currentFolder}</FolderName>
        {currentFolder !== "전체" && (
          <CTAs>
            <CTA>
              <img src={shareImg} />
              공유
            </CTA>
            <CTA>
              <img src={updateImg} />
              이름 변경
            </CTA>
            <CTA>
              <img src={shareImg} />
              삭제
            </CTA>
          </CTAs>
        )}
      </Div>
      {userFolderLinkData.data?.length !== 0 ? (
        <CardList folderArray={userFolderLinkData?.data}></CardList>
      ) : (
        <NoLinksFound>저장된 링크가 없습니다.</NoLinksFound>
      )}
    </div>
  );
}

export default FolderButtons;
