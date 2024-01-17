import { Folders } from "@/types/server.type";
import styles from "./FolderNav.module.css";
import { useAtom, useAtomValue } from "jotai";
import { accessTokenAtom, folderIdAtom } from "@/jotai/atomStation";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/apis/instance";

const FolderNav = () => {
  const accessToken = useAtomValue(accessTokenAtom);

  const [folder_ID, setFolder_ID] = useAtom(folderIdAtom);

  const { data: folderData } = useQuery({
    queryKey: ["Folders"],
    queryFn: () => fetcher<Folders[]>({ method: "get", url: "/folders", headers: { Authorization: accessToken } }),
  });

  const folders = folderData?.data ?? [];

  const folderList = [{ id: 0, name: "전체" }, ...folders];

  return (
    <ul className={styles.root}>
      {folderList.map(({ id, name }) => {
        const selectedStyles = id === folder_ID ? `${styles.button} ${styles.selected}` : `${styles.button}`;

        return (
          <li key={name}>
            <button
              className={selectedStyles}
              onClick={() => {
                setFolder_ID(id);
              }}
              type="button"
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FolderNav;
