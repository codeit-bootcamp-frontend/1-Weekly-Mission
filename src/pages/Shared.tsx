import { useQuery } from "@tanstack/react-query";
import FolderCardList from "components/card/FolderCardList";
import SearchBar from "components/search/SearchBar";
import { getUserFolder } from "libs/apis/user";
import styles from "styles/modules/shared.module.css";
import manageStatus from "utils/manageStatus";

function Shared() {
  const { isLoading, isError, data } = useQuery<Folder>({
    queryKey: ["userInform"],
    queryFn: getUserFolder,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }

  return (
    <div>
      <header>
        <div className={styles.gapWrapper}>
          <div className={styles.profileImageWrapper}>
            <img
              src={data?.folder.owner.profileImageSource}
              alt={data?.folder.owner.name}
              className={styles.profileImage}
            />
          </div>
          <span className={styles.name}>@{data?.folder.owner.name}</span>
        </div>
        <h1 className={styles.bookmark}>{data?.folder.name}</h1>
      </header>
      <div className={styles.itemWrapper}>
        <div className={styles.itemInWrapper}>
          <SearchBar />
          <div className={styles.cardListWrapper}>
            <FolderCardList data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shared;
