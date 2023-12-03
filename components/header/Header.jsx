import { useEffect, useCallback } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router.js";
import { useUserProfileContext } from "@/contexts/UserProfileContext.js";
import useAsync from "@/hooks/useAsync.js";
import getUserProfile from "@/utils/getUserProfile.js";
import { SAMPLE_USER_ID } from "@/utils/constants.js";

export default function Header() {
  const {
    userProfile: { image_source, email },
    setUserProfile,
  } = useUserProfileContext();
  const [loading, error, getUserProfileAsync] = useAsync(getUserProfile);

  const router = useRouter();
  const isFolderPage = router.pathname.includes("folder");
  const isHeaderFixed = !isFolderPage;
  const headerClassName = isHeaderFixed
    ? `${styles["header"]} ${styles["fixed"]}`
    : styles["header"];

  const loadUserProfile = useCallback(async () => {
    const { data } = await getUserProfileAsync(SAMPLE_USER_ID);
    if (!data || !data[0]) return;
    const profile = data[0];
    setUserProfile(profile);
  }, []);

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <header className={headerClassName}>
      <nav className={styles["nav"]} role="navigation">
        <button
          className={styles["home-button"]}
          aria-label="링크브러리 메인 페이지 이동 버튼"
          onClick={() => router.push("/")}
        >
          <img
            src={"/assets/icons/logo.svg"}
            alt="링크브러리 로고 이미지"
            width="133"
          />
        </button>

        {email ? (
          <button className={styles["profile-button"]}>
            <img
              className={styles["profile-icon"]}
              src={image_source ?? "/assets/icons/profile.svg"}
              alt="내 프로필 아이콘 이미지"
              width="28"
              height="28"
            />
            <p className={styles["profile-email"]}>{email}</p>
          </button>
        ) : (
          <button className={styles["sign-in-button"]}>로그인</button>
        )}
      </nav>
    </header>
  );
}
