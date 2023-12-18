import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FolderContext } from "@/context/FolderContext";
import FolderUI from "./FolderPresenter";
import { FolderData, FolderNameData, LinkData, SharedFolderData } from "@/types/folder";
import { useFolder } from "@/hooks/useFolder";

export const DEFAULT = "전체";
// const USER_ID = 1;

/**
 * @TODO
 * /folders, /links api로 변경
 * 토큰을 가져와서 hearder에 함께 보내기
 * 다른 폴더를 선택한 경우 folder/folderId 페이지로 이동
 */

export default function Folder() {
  const router = useRouter();

  const [links, setLinks] = useState<LinkData[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);
  const [folders, setFolders] = useState<SharedFolderData[]>([]);
  const [selected, setSelected] = useState(DEFAULT);
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data: foldersData, isLoading } = useFolder("/api/folders");
  const { data: linksData } = useFolder("/api/links");
  console.log(foldersData); // 삭제예정
  console.log(linksData); // 삭제예정

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
    const selectedFolder =
      folders.find((folder: SharedFolderData) => folder.name === category)?.id ?? "";
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
    if (linksData && foldersData) {
      setLinks(linksData.data.folder);
      setFilteredLinks(linksData.data.folder);
      setFolders(foldersData.data.folder);
      // updateFolderList(foldersData.data.folder);
    }
  }, [linksData, foldersData, selectedFolderId]);

  // if (linkError || folderError) {
  //   console.log(linkError || folderError);
  // }

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
