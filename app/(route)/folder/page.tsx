"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchInput from "@/components/input/SearchInput";
import API from "@/service/api";
import { FolderType } from "@/types/type";
import Banner from "./_components/Banner";
import FolderButton from "./_components/FolderButton";
import Links from "./_components/Links";

const Folder = () => {
  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  const [folders, setFolders] = useState<FolderType[]>([]);

  const getFolders = async () => {
    const item = await API.folder.getFolders();
    setFolders(item?.data ?? []);
  };

  useEffect(() => {
    getFolders();
  }, [selectedFolderId]);

  return (
    <>
      <Banner />
      <section className="mx-auto flex w-full max-w-[106rem] flex-col items-center px-32 pb-60 pt-20 pc:px-0">
        <SearchInput />
        <ul className="mt-40 flex w-full gap-8">
          <FolderButton selected={!selectedFolderId}>전체</FolderButton>
          {folders?.map((folder) => (
            <li key={folder.id}>
              <FolderButton folderId={folder.id} selected={selectedFolderId === folder.id}>
                {folder.name}
              </FolderButton>
            </li>
          ))}
        </ul>
        <Links />
      </section>
    </>
  );
};

export default Folder;
