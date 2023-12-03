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
import AddFloatingBtn from "@/components/button/AddFloatingButton";
import { modalState } from "../recoil/modal";
import { useRecoilState } from "recoil";
import AddToFolderModal from "@/components/modal/AddToFolderModal";
import DefaultModal from "@/components/modal/DefaultModal";
import ModalLayout from "@/components/modal/ModalLayout";
import ShareFolderModal from "@/components/modal/SharedFolderModal";
import Input from "@/components/input/Input";
import DefaultBtn from "@/components/button/DefaultButton";
import Image from "next/image";
import Card from "@/components/card/Card";
import { Section, Wrapper } from "@/components/common/commonStyled";
import request from "@/lib/axios";
import { ApiMapper } from "@/lib/apiMapper";

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

interface IFolderData {
  id: number;
  name: string;
}

interface ISelectedFolder {
  id: number;
  title: string;
}

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [folderData, setFolderData] = useState<IFolderData[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<ISelectedFolder>({
    id: 1,
    title: "전체",
  });

  const [link, setLink] = useState("");
  const [searchLinkValue, setSearchLinkValue] = useState("");

  const [modalOpened, setModalOpened] = useRecoilState(modalState);

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

      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
      return;
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

      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
      return;
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, [selectedFolder]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  const handleAddToFolderModal = () => {
    if (link.length > 0) {
      setModalOpened((prev: any) => ({
        ...prev,
        addToFolderModal: {
          display: true,
          link: link,
          content: folderData,
        },
      }));
    }
  };

  const handleDefaultMoal = (state: string, content: ISelectedFolder) => {
    setModalOpened((prev: any) => ({
      ...prev,
      defaultModal: {
        display: true,
        content: content || "",
        state: state,
      },
    }));
  };

  const handleShareFolderModal = (content: ISelectedFolder) => {
    setModalOpened((prev: any) => ({
      ...prev,
      shareFolderModal: {
        display: true,
        content: content,
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
                src={LinkAddIcon}
                placeholder={"링크를 추가해 보세요"}
                value={link}
                setValue={setLink}
              ></Input>
              <DefaultBtn onClick={handleAddToFolderModal} type="default">
                추가하기
              </DefaultBtn>
            </AddLinkInputContainer>
          </ContentContainer>
        </Section>

        <FolderSection $bg="var(--white)">
          <FolderContentContainer $isFolder={true}>
            <Input
              src={SearchImg}
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
                  onClick={() =>
                    handleDefaultMoal("folderAdd", {
                      id: 0,
                      title: "",
                    })
                  }
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
                              handleShareFolderModal(selectedFolder);
                              return;
                            }
                            handleDefaultMoal(e.state, selectedFolder);
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
                        onClickDelete={handleDefaultMoal}
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

          <AddFloatingBtn />
        </FolderSection>
      </Wrapper>

      {modalOpened.addToFolderModal.display && (
        <ModalLayout>
          <AddToFolderModal />
        </ModalLayout>
      )}
      {modalOpened.defaultModal.display && (
        <ModalLayout>
          <DefaultModal />
        </ModalLayout>
      )}
      {modalOpened.shareFolderModal.display && (
        <ModalLayout>
          <ShareFolderModal />
        </ModalLayout>
      )}
    </>
  );
};

export default Folder;
