import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AddFolderBtn,
  EditFolderTools,
  Modal,
  ShareModal,
  ModalInput,
  ModalContentName,
} from "components";
import useModal from "hooks/useModal";
import * as Styled from "./StyledFolderLists";

interface LinkCount {
  count: number;
}

interface FoldersData {
  id?: number;
  created_at?: string;
  name: string;
  user_id?: number;
  link?: LinkCount;
}

interface PropsSub {
  data: FoldersData;
  onClick: (dataName: string) => void;
  folderId: string;
}

const FolderList = ({ data, onClick, folderId }: PropsSub) => {
  return (
    <Link to={`/folder/${data.id}`}>
      <Styled.Btn
        $selected={folderId === String(data.id)}
        onClick={() => onClick(data.name)}
      >
        {data.name}
      </Styled.Btn>
    </Link>
  );
};

interface LinksData {
  id?: number;
  created_at?: string;
  updated_at?: string | null;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}

interface Props {
  linksData: LinksData[];
  folderData: FoldersData[];
  id: string | undefined;
}

const FolderLists = ({ linksData, folderData, id }: Props) => {
  const [folderTitle, setFolderTitle] = useState(() => {
    if (!id) return "전체";
    const idFolder = folderData.filter((data) => data.id === parseInt(id));
    return idFolder[0]["name"];
  });

  const folderId = id ? id : "전체";

  const {
    isOpen: isShareOpen,
    openModal: openShare,
    closeModal: closeShare,
  } = useModal();

  const {
    isOpen: isChangeOpen,
    openModal: openChange,
    closeModal: closeChange,
  } = useModal();

  const {
    isOpen: isAddOpen,
    openModal: openAdd,
    closeModal: closeAdd,
  } = useModal();

  const {
    isOpen: isDeleteOpen,
    openModal: openDelete,
    closeModal: closeDelete,
  } = useModal();

  const handleBtnClick = (dataName: string) => {
    dataName === "전체" ? setFolderTitle("전체") : setFolderTitle(dataName);
  };

  useEffect(() => {
    (() => {
      if (!id) setFolderTitle("전체");
      else {
        const idFolder = folderData.filter((data) => data.id === parseInt(id));
        setFolderTitle(idFolder[0]?.name);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Styled.Container>
        <Styled.FolderBlock>
          <Styled.BtnBox>
            <Link to="/folder">
              <Styled.Btn
                $selected={folderId === folderTitle}
                onClick={() => handleBtnClick("전체")}
              >
                전체
              </Styled.Btn>
            </Link>
            {folderData.map((data) => {
              return (
                <FolderList
                  key={data.id}
                  data={data}
                  folderId={folderId}
                  onClick={handleBtnClick}
                />
              );
            })}
          </Styled.BtnBox>
          <AddFolderBtn modalOpen={openAdd} />
        </Styled.FolderBlock>
        {linksData.length === 0 || (
          <Styled.TitleBlock>
            <Styled.Title>{folderTitle}</Styled.Title>
            {folderTitle === "전체" || (
              <EditFolderTools
                modalOpen={[openShare, openDelete, openChange]}
              />
            )}
          </Styled.TitleBlock>
        )}
      </Styled.Container>
      {isChangeOpen && (
        <Modal
          title="폴더 이름 변경"
          trigger={<ModalInput />}
          closeModal={closeChange}
          btnContent="변경하기"
          color="blue"
        />
      )}
      {isAddOpen && (
        <Modal
          title="폴더 추가"
          trigger={<ModalInput />}
          closeModal={closeAdd}
          btnContent="추가하기"
          color="blue"
        />
      )}
      {isDeleteOpen && (
        <Modal
          title="폴더 삭제"
          trigger={<ModalContentName children={folderTitle} />}
          closeModal={closeDelete}
          btnContent="삭제하기"
          color="red"
        />
      )}
      {isShareOpen && <ShareModal closeModal={closeShare} />}
    </>
  );
};

export default FolderLists;
