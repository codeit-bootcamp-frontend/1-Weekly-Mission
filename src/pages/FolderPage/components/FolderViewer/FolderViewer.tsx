import { useEffect, useState } from "react";
import { getFolderList } from "../../../../apis/getFolderList";
import { getAllCards } from "../../../../apis/getAllCards";
import FolderNameButton from "../../../../pages/FolderPage/components/FolderNameButton/FolderNameButton";
import { CardList } from "../../../../commons/components/index";
import styles from "./FolderViewer.module.scss";
import FolderModifier from "../FolderModifier/FolderModifier";
import ModalLayout from "../../../../commons/modals/ModalLayout";
import AddFolderModal from "../../../../commons/modals/AddFolderModal/AddFolderModal";
import { SearchBar } from "../../../../commons/components/index";
import LinkAddBar from "../../../../pages/FolderPage/components/LinkAddBar/LinkAddBar";

const DEFAULT_FOLDER = { id: "", name: "전체" };
interface FolderProps {
  id: string;
  name: string;
}
interface CardProps {
  created_at: "";
  url: "";
  title: "";
  description: "";
  image_source: "";
  id: "";
}

function FolderViewer() {
  const [folderList, setFolderList] = useState([]);
  const [cardList, setCardList] = useState<CardProps[]>([]);
  const [folderTitle, setFolderTitle] = useState("전체");
  const [folderId, setFolderId] = useState("");

  const getter = async () => {
    const allFolders = await getFolderList();
    setFolderList(allFolders?.data);
  };

  const getFolderCards = async (id = "", title = "전체") => {
    const result = await getAllCards(id);
    const data: CardProps[] = result.data;
    setFolderTitle(title);
    setFolderId(id);
    setCardList(() => {
      return [...data];
    });
    return;
  };
  const INITMODAL = {
    isOpened: false,
    modalType: "",
    targetId: "",
    targetTitle: "",
  };
  const [modalValues, setModalValues] = useState(INITMODAL);

  function handleModal(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    e.preventDefault();
    const newValue = {
      isOpened: true,
    };
    setModalValues((prev) => {
      return { ...prev, ...newValue };
    });
  }

  const closeModal = () => {
    setModalValues(() => {
      return { ...INITMODAL };
    });
  };

  useEffect(() => {
    getter();
    getFolderCards();
  }, []);

  return (
    <>
      {modalValues.isOpened && (
        <ModalLayout onClose={closeModal}>
          <AddFolderModal />
        </ModalLayout>
      )}
      <LinkAddBar />
      <SearchBar />
      <form>
        <div className={styles["folder-buttons-section"]}>
          <FolderNameButton
            folder={DEFAULT_FOLDER}
            onChange={getFolderCards}
            key=""
          />
          {folderList.map((folder: FolderProps) => {
            return (
              <FolderNameButton
                folder={folder}
                onChange={getFolderCards}
                key={folder.id}
              />
            );
          })}
        </div>
        <button
          type="button"
          id="addFolderButton"
          className={styles["add-folder-button"]}
          onClick={handleModal}
        >
          폴더 추가+
        </button>
      </form>
      <p className={styles["folder-title-section"]}>{folderTitle}</p>
      {folderTitle !== "전체" && (
        <div className={styles["folder-modifier-section"]}>
          <FolderModifier folderId={folderId} folderTitle={folderTitle} />
        </div>
      )}
      <div className={styles["card-list-section"]}>
        <CardList cardList={cardList} />
      </div>
    </>
  );
}

export default FolderViewer;
