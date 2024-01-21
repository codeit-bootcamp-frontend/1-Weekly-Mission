"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import SearchInput from "@/components/inputs/SearchInput";
import API from "@/service/api";
import Banner from "./_components/Banner";
import FolderButton from "./_components/FolderButton";
import Links from "./_components/Links";

const Folder = () => {
  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: API.folder.getFolders,
  });

  return (
    <>
      <Banner />
      <section className="mx-auto flex w-full max-w-[106rem] flex-col items-center px-32 pb-60 pt-20 pc:px-0">
        <SearchInput />
        <ul className="mt-40 flex w-full gap-8">
          <FolderButton selected={!selectedFolderId}>전체</FolderButton>
          {folders?.data?.map((folder) => (
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
