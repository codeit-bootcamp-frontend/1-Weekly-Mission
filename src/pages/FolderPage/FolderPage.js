import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { folderDataRequestApi } from "../../api/requestApi.js";
import { folderMenuRequestApi } from "../../api/requestApi.js";
import { Article } from "../../component/Article/Article.js";
import { Header } from "../../component/Header/Header.js";

const FolderPage = () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState([]);
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
      setValues(result);
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
  }, [folderData, Folder]);

  
  return (
    <>
      {isError && (<><Header />
      <Article visible={visible} values={values} folders={folders} /></>)}
    </>
  );
};

export default FolderPage;
