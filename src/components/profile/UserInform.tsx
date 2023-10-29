import { useQuery } from "@tanstack/react-query";
import { DEFAULT_PROFILE_IMAGE } from "constants/common";
import QUERY_KEYS from "constants/queryKeys";
import { getUserProfile } from "libs/apis/profile";
import styles from "styles/modules/user.module.css";
import manageStatus from "utils/manageStatus";

function UserInform() {
  const { isLoading, isError, data } = useQuery<User>({
    queryKey: [QUERY_KEYS.user],
    queryFn: getUserProfile,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }

  return (
    <div className={styles.profileWrapper}>
      {data?.data.map((item) => (
        <div className={styles.profileInWrapper} key={item.id}>
          <img src={DEFAULT_PROFILE_IMAGE} alt="profile" />
          <span>{item.email}</span>
        </div>
      ))}
    </div>
  );
}

export default UserInform;
