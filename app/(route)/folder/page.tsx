"use client";

import { useSearchParams } from "next/navigation";
import { IconLink } from "public/svgs";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Cards from "@/components/card/Cards";
import SearchInput from "@/components/input/SearchInput";
import API from "@/service/api";
import { FolderType, LinkType } from "@/types/type";
import FolderButton from "./_components/FolderButton";

const Folder = () => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const getLinks = async (folderId?: number) => {
    if (!folderId) {
      const item = await API.link.getLinks();
      setLinks(item?.data ?? []);
    } else {
      const item = await API.link.getLinksById(folderId);
      setLinks(item?.data ?? []);
    }
  };

  const [folders, setFolders] = useState<FolderType[]>([]);

  const getFolders = async () => {
    const item = await API.folder.getFolders();
    setFolders(item?.data ?? []);
  };

  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  useEffect(() => {
    getLinks();
    getFolders();
  }, []);

  return (
    <>
      <section className="h-115 w-full bg-primary-light px-32 pb-40 pt-25 tablet:h-220 tablet:pb-90 tablet:pt-60">
        <div className="relative mx-auto w-full max-w-[80rem]">
          <input
            placeholder="링크를 추가해 보세요."
            className="h-52 w-full rounded-md border border-solid border-primary py-8 pl-35 pr-100 text-14 outline-none tablet:h-70 tablet:py-16 tablet:pl-45 tablet:pr-120 tablet:text-16"
          />
          <div className="absolute left-10 top-18 tablet:left-20 tablet:top-26">
            <IconLink />
          </div>
          <div className="absolute right-10 top-8 h-36 w-80 tablet:right-20 tablet:top-14 tablet:h-44 tablet:w-90">
            <Button>추가하기</Button>
          </div>
        </div>
      </section>
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
        <Cards type="shared" data={links} />
      </section>
    </>
  );
};

export default Folder;
