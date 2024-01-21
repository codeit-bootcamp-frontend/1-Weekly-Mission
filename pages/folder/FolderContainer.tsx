import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import FolderUI from "./FolderPresenter";

import { Folder } from "@/types/folder";
import { LinkData } from "@/types/link";
import { useFolder } from "@/hooks/useFolder";
import { FolderContext } from "@/context/SelectedFolderContext";

export default function Folder() {
  const router = useRouter();
  const { selectedFolderName, updateFolderName } = useContext(FolderContext);

  const [selected, setSelected] = useState(selectedFolderName);
  const [addLinkValue, setAddLinkValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [folderNames, setFolderNames] = useState<string[]>([]);

  const { data: foldersData, isLoading } = useFolder("/folders");
  const { data: linksData } = useFolder("/links");

  const folders: Folder[] = foldersData ?? [];
  const links: LinkData[] = linksData ?? [];

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleDeletekeyword = () => {
    setKeyword("");
  };

  const handleSelectedFolder = (category: string) => {
    setSelected(category);
    const selectedFolderId = folders.find((folder: Folder) => folder.name === category)?.id ?? "";
    updateFolderName(category);
    router.push(`/folder/${selectedFolderId}`);
  };

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
    if (foldersData) {
      const folders = foldersData.map((folder: Folder) => folder.name);
      setFolderNames(folders);
    }
  }, [foldersData]);

  return (
    <FolderUI
      addLinkValue={addLinkValue}
      keyword={keyword}
      selected={selected}
      isLoading={isLoading}
      folderNames={folderNames}
      links={links}
      handleAddLink={handleAddLink}
      handleOnChangeInput={handleOnChangeInput}
      handleDeletekeyword={handleDeletekeyword}
      handleSelectedFolder={handleSelectedFolder}
    />
  );
}
