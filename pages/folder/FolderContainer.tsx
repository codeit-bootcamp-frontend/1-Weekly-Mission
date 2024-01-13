import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import FolderUI from "./FolderPresenter";

import { LinkData, SharedFolderData } from "@/types/folder";
import { useFolder } from "@/hooks/useFolder";
import { FolderContext } from "@/context/SelectedFolderContext";

/**
 * @TODO
 * /folders, /links api로 변경
 * 토큰을 가져와서 hearder에 함께 보내기
 * 다른 폴더를 선택한 경우 folder/folderId 페이지로 이동
 */

export default function Folder() {
  const router = useRouter();
  const { selectedFolderName, updateFolderName } = useContext(FolderContext);

  const [selected, setSelected] = useState(selectedFolderName);
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data: foldersData, isLoading } = useFolder("/folders");
  const { data: linksData } = useFolder("/links");

  // console.log(selectedFolderName); // 삭제예정
  // console.log(foldersData); // 삭제예정
  // console.log(linksData); // 삭제예정

  const folders: SharedFolderData[] = foldersData ?? [];
  const links: LinkData[] = linksData ?? [];

  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>(links);

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
    const selectedFolderId =
      folders.find((folder: SharedFolderData) => folder.name === category)?.id ?? "";
    updateFolderName(category);
    router.push(`/folder/${selectedFolderId}`);
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
