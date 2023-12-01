import { ChangeEvent, useContext, useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";

import { getAllFolders, getAllLinks } from "@/common/api";
import { FolderContext } from "@/context/FolderContext";
import FolderUI from "./FolderPresenter";
import { FolderData, LinkData } from "@/types/folder";

export const DEFAULT = "전체";
const USER_ID = 1;

export default function Folder() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { isLoading, error, wrappedFunction: getLinksAsyncFunc } = useFetch(getAllLinks);
  const { error: errorFolder, wrappedFunction: getFoldersAsyncFunc } = useFetch(getAllFolders);

  const { handleFolderUpdate } = useContext(FolderContext);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    const searchedLinks = checkMatchedAllLinks(e.target.value, links);
    setFilteredLinks(searchedLinks.length !== 0 ? searchedLinks : []);
  };

  const handleDeletekeyword = () => {
    setKeyword("");
    setFilteredLinks(links);
  };

  const checkMatchedAllLinks = (keyword: string, links: LinkData[]) => {
    const filteredLinks = links.filter((link) => {
      return (
        (link.title && link.title.includes(keyword)) ||
        (link.description && link.description.includes(keyword)) ||
        (link.url && link.url.includes(keyword))
      );
    });
    return filteredLinks;
  };

  const handleSelectedFolder = (category: string) => {
    setSelected(category);
    changeFolderId(category);
  };

  const changeFolderId = (category: string) => {
    const selectedFolder = folders.find((folder: FolderData) => folder.name === category);
    const selectedId = selectedFolder ? String(selectedFolder.id) : "";
    setSelectedFolderId(selectedId);
  };

  const handleLoadedData = async () => {
    const { data: linkData } = await getLinksAsyncFunc(USER_ID, selectedFolderId);
    const { data: folderData } = await getFoldersAsyncFunc(USER_ID);

    setLinks(linkData);
    setFilteredLinks(linkData);
    setFolders(folderData);
    updateFolderList(folderData);
  };

  const updateFolderList = (data: FolderData[]) => {
    handleFolderUpdate(data);
  };

  const folderNames = folders.map((folder) => folder.name);

  const handleAddLink = (link: string) => {
    setAddLinkValue(link);
  };

  useEffect(() => {
    handleLoadedData();
  }, [selectedFolderId]);

  if (error || errorFolder) console.log(error || errorFolder);

  return (
    <FolderUI
      addLinkValue={addLinkValue}
      keyword={keyword}
      selected={selected}
      isLoading={isLoading}
      folderNames={folderNames}
      links={links}
      filteredLinks={filteredLinks}
      handleAddLink={handleAddLink}
      handleOnChangeInput={handleOnChangeInput}
      handleDeletekeyword={handleDeletekeyword}
      handleSelectedFolder={handleSelectedFolder}
    />
  );
}
