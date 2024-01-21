/* folders 페이지에서 렌더링되는 폴더 이름 태그 버튼 list */

import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFolderList } from "@/api/getFolderCRUDApi";
import { InitialFolderType } from "@/types/FolderType";

import styles from "./FolderTagList.module.scss";
import { useFolderListStore } from "@/store/FolderLilstStore";

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

  const folderList = useFolderListStore((state) => state.folderList);
  const setFolderList = useFolderListStore((state) => state.setFolderList);

  useEffect(() => {
    if (data && data.length > 0) {
      setFolderList(data);
    } else {
      setFolderList([]);
    }
  }, [data]);

  return (
    <div className={styles["folder-list"]}>
      <div className={styles["folder-tag"]}>
        <Link href={`/folders`}>
          <button
            className={styles["folder-button"]}
            data-selected={currentId ? false : true}
          >
            {INITIAL_FOLDER.name}
          </button>
        </Link>
        {folderList.map((folder) => {
          if ("id" in folder) {
            return (
              <Link href={`/folders/${folder.id}`} key={folder.id ?? 0}>
                <button
                  className={styles["folder-button"]}
                  data-selected={currentId === String(folder.id)}
                >
                  {folder.name}
                </button>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
