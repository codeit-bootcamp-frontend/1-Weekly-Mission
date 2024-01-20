"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cards from "@/components/card/Cards";
import SearchInput from "@/components/input/SearchInput";
import API from "@/service/api";
import { filterLinks } from "@/utils/filterLinks";
import { FolderType, LinkType } from "@/types/type";
import Banner from "./_components/Banner";
import FolderButton from "./_components/FolderButton";

const Folder = () => {
  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  const [links, setLinks] = useState<LinkType[]>([]);
  const [folders, setFolders] = useState<FolderType[]>([]);

  const searchKeyword = params.get("keyword");
  const filteredLinks = filterLinks(links, searchKeyword);

  const getLinks = async (folderId?: number) => {
    if (!folderId) {
      const item = await API.link.getLinks();
      setLinks(item?.data ?? []);
    } else {
      const item = await API.link.getLinksById(folderId);
      setLinks(item?.data ?? []);
    }
  };

  const getFolders = async () => {
    const item = await API.folder.getFolders();
    setFolders(item?.data ?? []);
  };

  useEffect(() => {
    getLinks(selectedFolderId);
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
        <Cards type="shared" data={filteredLinks} />
      </section>
    </>
  );
};

export default Folder;
