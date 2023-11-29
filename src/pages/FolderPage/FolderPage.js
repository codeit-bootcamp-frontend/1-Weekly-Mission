import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { folderDataRequestApi, folderMenuRequestApi } from "api/requestApi.js";
import { Article, Header } from "component";

const FolderPage = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [folders, setFolders] = useState([]);
  const { folderId } = useParams();
  const { isError, setIsError} = useState(false);

  const folderData = async () => {
    const endPoint = `users/1/links${folderId ? `?folderId=${folderId}` : ""}`;
    try {
      const result = await folderDataRequestApi(endPoint);
      if (result !== undefined && result.length > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setItems(result);
    } catch (error) {
        setIsError(true)
    }
  };

  const Folder = async () => {
    try {
      const response = await folderMenuRequestApi("users/1/folders");
      setFolders(response);
    } catch (error) {
      setIsError(true)
    }
  };

  useEffect(() => {
    folderData();
    Folder();
  }, [folderId]);

  
  return (
    <>
      {!isError && (<><Header />
      <Article visible={visible} items={items} folders={folders} /></>)}
    </>
  );
};

export default FolderPage;