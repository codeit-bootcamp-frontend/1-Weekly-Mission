import { useEffect, useState, useCallback } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import "./Folder.css";
import getData from "../utils/api";
import SearchBar from "../components/SearchBar";
import LinkAdd from "../components/LinkAdd";
import Cards from "../components/Cards";
import Folders from "../components/Folders";
import Option from "../components/Option";
import Modal from "../components/Modal";

const INIT_FOLDER = {
  name: "전체",
  id: "",
};

const Folder = () => {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFolder, setCurrentFolder] = useState(INIT_FOLDER);
  const urlPath = useOutletContext();
  const paramsId = searchParams.get("folderId");

  const getFolderData = useCallback(async () => {
    const { data } = await getData("users/1/folders");
    const linkData = await getData(`users/1/links?folderId=${paramsId}`);
    let folderName =
      paramsId !== ""
        ? await getData(`users/1/folders/${paramsId}`)
        : INIT_FOLDER;
    const {
      data: [{ name }],
    } = folderName;
    setUserFolder(data);
    setLinks(linkData.data);
    setCurrentFolder({ id: paramsId, name });
  }, [paramsId]);

  const handleCurrentFolder = ({ id, name }) => {
    setSearchParams({ folderId: id });
  };

  const handleModalOpen = (name, link) => {
    setIsOpen(true);
    setCurrentModal({ name, link });
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setCurrentModal("");
  };

  useEffect(() => {
    getFolderData(currentFolder.id);
  }, [getFolderData, currentFolder.id]);

  return (
    <div className="folder">
      <LinkAdd />
      <div>
        <SearchBar />
        {userFolder ? (
          <div>
            <Folders
              userFolder={userFolder}
              onCurrentFolder={handleCurrentFolder}
              onModalOpen={handleModalOpen}
              searchParams={searchParams}
            />
            <Option
              currentFolder={currentFolder}
              onModalOpen={handleModalOpen}
            />
            <Cards
              folderInfo={{ links: links }}
              urlPath={urlPath}
              onModalOpen={handleModalOpen}
            />
          </div>
        ) : (
          <div>저장된 폴더가 없습니다</div>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        currentModal={currentModal}
        onModalClose={handleModalClose}
        currentFolder={currentFolder}
        userFolder={userFolder}
        path={paramsId}
      />
    </div>
  );
};

export default Folder;
