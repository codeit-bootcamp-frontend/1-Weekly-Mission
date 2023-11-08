import Card from "../../components/card/Card";
import SearchImg from "../../assets/folder/img_search.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getFolder, getLinks } from "../../api/api";
import {
  AddLinkInputContainer,
  FolderBtnItemContainer,
  FolderContainer,
  FolderContentContainer,
  LinkHeaderContainer,
  LinkToolContainer,
} from "./FolderStyledComponents";
import FolderAddIcon from "../../assets/folder/img_folderAdd.svg";
import LinkAddIcon from "../../assets/shared/img_linkAdd.svg";
import ShareIcon from "../../assets/shared/img_shareIcon.svg";
import EditIcon from "../../assets/shared/img_editIcon.svg";
import DeleteIcon from "../../assets/shared/img_deleteIcon.svg";
import {
  Section,
  Wrapper,
} from "../../components/common/commonStyledComponents";
import {
  ContentContainer,
  CardContainer,
} from "../shared/SharedStyledComponents";
import Input from "../../components/input/Input";
import AddFloatingBtn from "../../components/btn/AddFloatingBtn";
import DefaultBtn from "../../components/btn/DefaultBtn";
import { modalState } from "../../recoil/modal";
import { useRecoilState } from "recoil";
import AddToFolderModal from "../../components/modal/AddToFolderModal";
import DefaultModal from "../../components/modal/DefaultModal";
import ModalLayout from "../../components/modal/ModalLayout";
import ShareFolderModal from "../../components/modal/ShareFolderModal";

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

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    id: 1,
    title: "전체",
  });

  const [isFolderLoading, isFolderError, getFolderAsync] = useAsync(getFolder);
  const [isLinkLoading, isLinkError, getLinksAsync] = useAsync(getLinks);
  const [link, setLink] = useState("");

  const [modalOpened, setModalOpened] = useRecoilState(modalState);

  const handleFolder = useCallback(async () => {
    const result = await getFolderAsync(1);
    if (!result) return;

    const { data } = result;

    setFolderData(data);
  }, [getFolderAsync]);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  const handleLinks = useCallback(async () => {
    const result = await getLinksAsync(selectedFolder.id);
    if (!result) return;

    const { data } = result;

    setCardData(data);
  }, [getLinksAsync, selectedFolder]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  const handleAddToFolderModal = () => {
    if (link.length > 0) {
      setModalOpened((prev) => ({
        ...prev,
        addToFolderModal: {
          display: true,
          link: link,
          content: folderData,
        },
      }));
    }
  };

  const handleDefaultMoal = (state, content) => {
    setModalOpened((prev) => ({
      ...prev,
      defaultModal: {
        display: true,
        content: content || "",
        state: state,
      },
    }));
  };

  const handleShareFolderModal = (content) => {
    setModalOpened((prev) => ({
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

  if (isFolderLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (isFolderError || isLinkError) {
    return <div>문제가 발생했습니다.</div>;
  }

  return (
    <>
      <Wrapper>
        <Section>
          <ContentContainer $page={"folder"}>
            <AddLinkInputContainer>
              <Input
                src={LinkAddIcon}
                placeholder={"링크를 추가해 보세요"}
                onChange={(e) => setLink(e.target.value)}
              >
                <DefaultBtn onClick={handleAddToFolderModal}>
                  추가하기
                </DefaultBtn>
              </Input>
            </AddLinkInputContainer>
          </ContentContainer>
        </Section>

        <Section $bg="#fff">
          <FolderContentContainer>
            <Input src={SearchImg} placeholder="링크를 검색해보세요" />

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
                  onClick={() => handleDefaultMoal("folderAdd", {})}
                >
                  폴더 추가
                </div>
                <img
                  src={FolderAddIcon}
                  className="folderAddIcon"
                  alt="folderAddIcon"
                />
              </div>
            </FolderContainer>

            {isLinkLoading ? (
              <div>링크를 불러오는 중입니다.</div>
            ) : (
              <>
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
                              <img src={e.src} alt={e.title} />
                              <div className="linkToolTitle">{e.title}</div>
                            </div>
                          );
                        })}
                      </LinkToolContainer>
                    </LinkHeaderContainer>

                    <CardContainer>
                      {cardData?.map((e) => {
                        return (
                          <Card
                            key={e.id}
                            cardData={e}
                            onClickDelete={handleDefaultMoal}
                            onClickAdd={handleAddToFolderModal}
                          />
                        );
                      })}
                    </CardContainer>
                  </>
                ) : (
                  <div className="noLinkContainer">저장된 링크가 없습니다</div>
                )}
              </>
            )}
          </FolderContentContainer>

          <AddFloatingBtn />
        </Section>
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
