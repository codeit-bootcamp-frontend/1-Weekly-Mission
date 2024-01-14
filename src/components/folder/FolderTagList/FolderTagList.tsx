import { useQuery } from "@tanstack/react-query";
import styles from "./FolderTagList.module.scss";
import getFolderList from "@/api/getFolderList";
import { useEffect, useState } from "react";
import { FolderType } from "@/types/FolderType";
import Link from "next/link";

const INITIAL_FOLDER: FolderType = {
  id: null,
  name: "전체",
};

interface FolderTagListProps {
  currentId?: string;
}

export default function FolderTagList({ currentId }: FolderTagListProps) {
  const { data } = useQuery({
    queryKey: ["folder-list"],
    queryFn: () => getFolderList(),
  });

  const [folderList, setFolderList] = useState<[FolderType] | []>([]);

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
          if (folder) {
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
