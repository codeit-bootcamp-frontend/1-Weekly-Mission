"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { IconDelete, IconEdit, IconShare } from "public/svgs";
import ChangeFolderNameModal from "@/components/modals/ChangeFolderNameModal";
import CreateFolderModal from "@/components/modals/CreateFolderModal";
import DeleteFolderModal from "@/components/modals/DeleteFolderModal";
import useModal from "@/hooks/useModal";
import API from "@/service/api";
import FolderButton from "./FolderButton";

const Folders = () => {
  const params = useSearchParams();
  const selectedFolderId = Number(params.get("folderId"));

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: API.folder.getFolders,
  });

  const selectedFolder = folders?.data?.find((folder) => folder.id === selectedFolderId);

  const [openModal] = useModal();

  return (
    <>
      <section className="mt-40 flex w-full flex-wrap items-center justify-between">
        <ul className="flex gap-8">
          <FolderButton selected={!selectedFolderId}>전체</FolderButton>
          {folders?.data?.map((folder) => (
            <li key={folder.id}>
              <FolderButton folderId={folder.id} selected={selectedFolderId === folder.id}>
                {folder.name}
              </FolderButton>
            </li>
          ))}
        </ul>
        <button onClick={() => openModal(<CreateFolderModal />)} className="w-100 text-14 font-400 text-primary tablet:text-16">
          폴더 추가 +
        </button>
      </section>
      <section className="flex w-full justify-between py-24">
        <h1 className="text-18 font-600 tablet:text-24">{selectedFolder?.name ?? "전체"}</h1>
        {selectedFolder && (
          <div className="flex gap-12">
            <button className="flex items-center gap-4 text-14 text-gray-100">
              <IconShare />
              공유
            </button>
            <button
              onClick={() => openModal(<ChangeFolderNameModal folderId={selectedFolderId} folderName={selectedFolder.name} />)}
              className="flex items-center gap-4 text-14 text-gray-100"
            >
              <IconEdit />
              이름 변경
            </button>
            <button onClick={() => openModal(<DeleteFolderModal folderId={selectedFolderId} />)} className="flex items-center gap-4 text-14 text-gray-100">
              <IconDelete />
              삭제
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Folders;
