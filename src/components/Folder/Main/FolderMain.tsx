import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import CardList from "./CardList";
import FolderHeader from "./FolderHeader";
import LinkSearchInput from "../../UI/LinkSearchInput";
import Option from "../../UI/Option";
import { FolderContext } from "../../../context/FolderContext";
import useGetSearchFolder from "../../../hooks/useGetSearchFolder";
import { SelectedFolderContentsInfo, SelectedFolderInfo } from "../../../types";

type Props = {
  selectedFolder: SelectedFolderInfo[];
  userID: number;
};

const FolderMain = ({ selectedFolder, userID }: Props) => {
  const folderContext = useContext<any>(FolderContext);

  const { folderId, changeFolderId } = folderContext;
  const folderContentsInfo = useGetSearchFolder(userID, folderId);

  const [title, setTitle] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const changeTitle = (name: string) => {
    setTitle(name);
  };

  useEffect(() => {
    changeFolderId(folderId);
  }, []);

  if (folderContentsInfo) {
    const { data }: { data: SelectedFolderContentsInfo[] } = folderContentsInfo;
    const checkEmptyFolder = data ? data.length : 0;

    return (
      <Container>
        <LinkSearchInput searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
        <FolderHeader selectedFolder={selectedFolder} changeTitle={changeTitle} />
        <Title>
          <h1>{title}</h1>
          {folderId > 0 && checkEmptyFolder > 0 && (
            <Options>
              <Option
                icon="/assets/share_icon.svg"
                modal={"폴더 공유"}
                title={title}
                folderId={folderId}
                userID={userID}
              >
                공유
              </Option>
              <Option icon="/assets/pen_icon.svg" modal={"폴더 이름 변경"}>
                이름 변경
              </Option>
              <Option icon="/assets/delete_icon.svg" modal={"폴더 삭제"} title={title}>
                삭제
              </Option>
            </Options>
          )}
        </Title>
        {folderContentsInfo && <CardList folderCards={data} searchKeyword={searchKeyword} />}
      </Container>
    );
  } else return null;
};

export default FolderMain;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 2.4rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 779px) {
    padding: 0 3.2rem;
    gap: 3.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  width: 1060px;
  height: 2.9rem;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.02rem;
  }

  @media (max-width: 1124px) {
    width: calc(100vw - 6.4rem);
  }
`;

const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;
