import { ChangeEvent, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { FolderContext } from "@/context/FolderContext";
import FolderUI from "./FolderPresenter";
import { FolderData, LinkData } from "@/types/folder";

export const DEFAULT = "전체";
const USER_ID = 1;

export default function Folder() {
  const router = useRouter();
  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const {
    data: linkData,
    isLoading,
    error: linkError,
  } = useSWR(`/api/users/${USER_ID}/links?folderId=${selectedFolderId ?? ""}`);
  const { data: folderData, error: folderError } = useSWR(`/api/users/${USER_ID}/folders`);

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
    const selectedFolder = folders.find((folder: FolderData) => folder.name === category)?.id ?? "";
    setSelectedFolderId(selectedFolder as string);
  };

  const updateFolderList = (data: FolderData[]) => {
    handleFolderUpdate(data);
  };

  const folderNames = folders.map((folder) => folder.name);

  const handleAddLink = (link: string) => {
    setAddLinkValue(link);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다.");
      router.push("/signin");
    }
  }, [router]);

  useEffect(() => {
    if (linkData && folderData) {
      setLinks(linkData.data);
      setFilteredLinks(linkData.data);
      setFolders(folderData.data);
      updateFolderList(folderData.data);
    }
  }, [linkData, folderData, selectedFolderId, router]);

  if (linkError || folderError) {
    console.log(linkError || folderError);
  }

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
