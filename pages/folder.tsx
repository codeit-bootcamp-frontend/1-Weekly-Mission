import SearchImg from "@/public/assets/shared/img_search.png";
import { useCallback, useEffect, useState } from "react";
import {
  AddLinkInputContainer,
  FolderBtnItemContainer,
  FolderContainer,
  FolderContentContainer,
  FolderSection,
  LinkHeaderContainer,
  LinkToolContainer,
} from "@/styles/folderStyled";
import FolderAddIcon from "@/public/assets/folder/img_folderAdd.png";
import LinkAddIcon from "@/public/assets/folder/img_linkAdd.png";
import ShareIcon from "@/public/assets/folder/img_shareIcon.png";
import EditIcon from "@/public/assets/folder/img_editIcon.png";
import DeleteIcon from "@/public/assets/folder/img_deleteIcon.png";

import { ContentContainer, CardContainer } from "@/styles/sharedStyled";
import AddFloatingButton from "@/components/button/AddFloatingButton";
import { modalState } from "../recoil/modal";
import { useRecoilState } from "recoil";
import AddToFolderModal from "@/components/modal/addToFolderModal/AddToFolderModal";
import ModalLayout from "@/components/modal/ModalLayout";
import ShareFolderModal from "@/components/modal/sharedFolderModal/SharedFolderModal";
import Input from "@/components/input/Input";
import Image from "next/image";
import Card from "@/components/card/Card";
import { Section, Wrapper } from "@/components/common/commonStyled";
import request from "@/lib/axios";
import { ApiMapper } from "@/lib/apiMapper";
import DeleteModal from "@/components/modal/DeleteModal";
import EnterModal from "@/components/modal/EnterModal";
import GradientButton from "@/components/button/GradientButton";

const LinkToolArr = [
  {
    src: ShareIcon,
    title: "공유",
    state: "folderShare",
  },
  {
    src: EditIcon,
    title: "이름 변경",
    state: "folderEdit",
  },
  {
    src: DeleteIcon,
    title: "삭제",
    state: "folderDelete",
  },
];

export interface FolderData {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

export interface SelectedFolder {
  id: number;
  title: string;
}

export interface DeleteModalItem {
  id: number;
  title?: string;
  url?: string;
}

interface StateObj {
  [index: string]: string;
}

const StateObj: StateObj = {
  folderEdit: "폴더 이름 변경",
  folderAdd: "폴더 추가",
  folderDelete: "폴더 삭제",
  linkDelete: "링크 삭제",
};

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [folderData, setFolderData] = useState<FolderData[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder>({
    id: 1,
    title: "전체",
  });

  const [link, setLink] = useState("");
  const [searchLinkValue, setSearchLinkValue] = useState("");

  const [modalOpened, setModalOpened] = useRecoilState(modalState);

  const [modalType, setModalType] = useState("");
  const [enterModalItem, setEnterModalItem] = useState<SelectedFolder>({
    id: 0,
    title: "",
  });
  const [deleteModalItem, setDeleteModalItem] = useState<DeleteModalItem>({
    id: 0,
  });
  const [addToFolderItem, setAddToFolderItem] = useState("");

  const handleFolder = useCallback(async () => {
    try {
      const result = await request.get(ApiMapper.folder.get.GET_FOLDER, {
        path: { userId: 1 },
      });

      if (result.status === 200) {
        const { data } = result;
        setFolderData(data.data);
        return;
      }

      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, []);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  const handleLinks = useCallback(async () => {
    try {
      const folderId = selectedFolder.id;
      const query = folderId !== 1 ? { folderId: folderId } : "";

      const result = await request.get(ApiMapper.link.get.GET_LINK, {
        path: {
          userId: 1,
        },
        query: query,
      });

      if (result.status === 200) {
        const { data } = result;
        setCardData(data.data);
        return;
      }

      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, [selectedFolder]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  const handleAddToFolderModal = (content: string) => {
    setAddToFolderItem(content);

    setModalOpened((prev: any) => ({
      ...prev,
      addToFolderModal: {
        display: true,
      },
    }));
  };

  const handleShareFolderModal = () => {
    setModalOpened((prev: any) => ({
      ...prev,
      shareFolderModal: {
        display: true,
      },
    }));
  };

  const handleEnterMoal = (
    modalType: string,
    content: SelectedFolder = { id: 0, title: "" }
  ) => {
    setModalType(modalType);
    setEnterModalItem(content);

    setModalOpened((prev: any) => ({
      ...prev,
      enterModal: {
        display: true,
      },
    }));
  };

  const handleDeleteModal = (modalType: string, content: DeleteModalItem) => {
    setModalType(modalType);
    setDeleteModalItem(content);

    setModalOpened((prev: any) => ({
      ...prev,
      deleteModal: {
        display: true,
      },
    }));
  };

  useEffect(() => {
    if (Object.keys(modalOpened).some((e) => modalOpened[e].display)) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalOpened]);

  return (
    <>
      <Wrapper>
        <Section $bg="var(--background)">
          <ContentContainer $isFolder={true}>
            <AddLinkInputContainer>
              <Input
                label={"linkAdd"}
                icon={
                  <Image
                    src={LinkAddIcon}
                    alt="inputIcon"
                    className="inputIcon"
                  />
                }
                placeholder={"링크를 추가해 보세요"}
                value={link}
                setValue={setLink}
              ></Input>
              <GradientButton
                onClick={() => {
                  if (link !== "") {
                    handleAddToFolderModal(link);
                    setLink("");
                  }
                }}
              >
                추가하기
              </GradientButton>
            </AddLinkInputContainer>
          </ContentContainer>
        </Section>

        <FolderSection $bg="var(--white)">
          <FolderContentContainer $isFolder={true}>
            <Input
              label="searchLink"
              icon={
                <Image src={SearchImg} alt="inputIcon" className="inputIcon" />
              }
              placeholder="링크를 검색해보세요"
              value={searchLinkValue}
              setValue={setSearchLinkValue}
            />

            <FolderContainer>
              <div className="folderBtnContainer">
                <FolderBtnItemContainer
                  $isSelected={selectedFolder.id === 1}
                  onClick={() =>
                    setSelectedFolder({
                      id: 1,
                      title: "전체",
                    })
                  }
                >
                  전체
                </FolderBtnItemContainer>

                {folderData?.map((e) => {
                  return (
                    <FolderBtnItemContainer
                      key={e.id}
                      $isSelected={e.id === selectedFolder.id}
                      onClick={() =>
                        setSelectedFolder({
                          id: e.id,
                          title: e.name,
                        })
                      }
                    >
                      {e.name}
                    </FolderBtnItemContainer>
                  );
                })}
              </div>

              <div className="folderAddBtnContainer">
                <div
                  className="folderAddTitle"
                  onClick={() => handleEnterMoal("folderAdd")}
                >
                  폴더 추가
                </div>
                <Image
                  width="16"
                  height="16"
                  src={FolderAddIcon}
                  className="folderAddIcon"
                  alt="folderAddIcon"
                />
              </div>
            </FolderContainer>

            {cardData.length > 0 ? (
              <>
                <LinkHeaderContainer>
                  <div className="linkTitle">{selectedFolder.title}</div>

                  <LinkToolContainer $display={selectedFolder.id === 1}>
                    {LinkToolArr.map((e, index) => {
                      return (
                        <div
                          className="linkToolItemContainer"
                          key={index}
                          onClick={() => {
                            if (e.state === "folderShare") {
                              handleShareFolderModal();
                              return;
                            }
                            if (e.state === "folderDelete") {
                              handleDeleteModal("folderDelete", selectedFolder);
                              return;
                            }
                            handleEnterMoal(e.state, selectedFolder);
                          }}
                        >
                          <Image src={e.src} alt={e.title} />
                          <div className="linkToolTitle">{e.title}</div>
                        </div>
                      );
                    })}
                  </LinkToolContainer>
                </LinkHeaderContainer>

                <CardContainer>
                  {cardData?.map((e: { id: number }) => {
                    return (
                      <Card
                        key={e.id}
                        cardData={e}
                        onClickDelete={handleDeleteModal}
                        onClickAdd={handleAddToFolderModal}
                        isFolder={true}
                      />
                    );
                  })}
                </CardContainer>
              </>
            ) : (
              <div className="noLinkContainer">저장된 링크가 없습니다</div>
            )}
          </FolderContentContainer>

          <AddFloatingButton onClick={handleEnterMoal} />
        </FolderSection>
      </Wrapper>

      {modalOpened.addToFolderModal.display && (
        <ModalLayout>
          <AddToFolderModal
            folderData={folderData}
            link={addToFolderItem}
            selectedFolderItem={selectedFolder}
          />
        </ModalLayout>
      )}
      {modalOpened.enterModal.display && (
        <ModalLayout>
          <EnterModal title={StateObj[modalType]} content={enterModalItem} />
        </ModalLayout>
      )}
      {modalOpened.shareFolderModal.display && (
        <ModalLayout>
          <ShareFolderModal content={selectedFolder} />
        </ModalLayout>
      )}
      {modalOpened.deleteModal.display && (
        <ModalLayout>
          <DeleteModal title={StateObj[modalType]} content={deleteModalItem} />
        </ModalLayout>
      )}
    </>
  );
};

export default Folder;
