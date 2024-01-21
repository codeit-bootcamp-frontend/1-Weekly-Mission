/* folders 페이지에서 렌더링되는 폴더 이름 태그 버튼 list */

import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFolderList } from "@/api/getFolderCRUDApi";
import { FoldersArray, InitialFolderType } from "@/types/FolderType";

import styles from "./FolderTagList.module.scss";

const INITIAL_FOLDER: InitialFolderType = {
  name: "전체",
};

interface FolderTagListProps {
  currentId?: string;
}

export default function FolderTagList({ currentId }: FolderTagListProps) {
  const { data } = useQuery({
    queryKey: ["folder-list"],
    queryFn: () => getFolderList(),
    staleTime: 1000 * 30,
  });

  const [folderList, setFolderList] = useState<FoldersArray>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFolderList(() => [...data]);
    } else {
      setFolderList(() => []);
    }
  }, [data]);

  return (
    <div className={styles["folder-list"]}>
      <div className={styles["folder-tag"]}>
        <button
          className={styles["folder-button"]}
          data-selected={currentId ? false : true}
        >
          <Link href={`/folders`}>{INITIAL_FOLDER.name}</Link>
        </button>
        {folderList.map((folder) => {
          if ("id" in folder) {
            return (
              <button
                className={styles["folder-button"]}
                key={folder.id ?? 0}
                data-selected={currentId === String(folder.id)}
              >
                <Link href={`/folders/${folder.id}`}>{folder.name}</Link>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
