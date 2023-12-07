import { useState } from "react";
import Link from "next/link";
import {
  AddFolderBtn,
  EditFolderTools,
  Modal,
  ShareModal,
  ModalInput,
  ModalContentName,
} from "@/components";
import { LinksData, FoldersData } from "@/lib/types/data";
import useModal from "@/lib/hooks/useModal";
import * as Styled from "./StyledFolderLists";

interface PropsSub {
  data: FoldersData;
  onClick: (dataName: string) => void;
  folderId: string;
  queryString: string;
}

const FolderList = ({ data, onClick, folderId, queryString }: PropsSub) => {
  return (
    <Link href={`/folder/${data.id}${queryString}`}>
      <Styled.Btn
        $selected={folderId === String(data.id)}
        onClick={() => onClick(data.name)}
      >
        {data.name}
      </Styled.Btn>
    </Link>
  );
};

interface Props {
  linksData: LinksData[];
  folderData: FoldersData[];
  id: string;
  q: string;
}

const FolderLists = ({ linksData, folderData, id, q }: Props) => {
  const [folderTitle, setFolderTitle] = useState(() => {
    if (!id) return "전체";
    const idFolder = folderData.filter((data) => data.id === parseInt(id));
    return idFolder[0]["name"];
  });

  const folderId = id ? id : "전체";
  const queryString = q ? `/search?q=${q}` : "";

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

  return (
    <>
      <Styled.Container>
        <Styled.FolderBlock>
          <Styled.BtnBox>
            <Link href={`/folder${queryString}`}>
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
                  queryString={queryString}
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
