import { Outlet, useLocation } from "react-router-dom";
import Header from "components/header/Header.jsx";
import Footer from "components/footer/Footer.jsx";
import * as S from "./layout.style.js";
import useAsync from "hooks/useAsync.js";
import getUserProfile from "utils/getUserProfile.js";
import { useUserProfileContext } from "contexts/UserProfileContext.js";
import { useEffect } from "react";
import { SAMPLE_USER_ID } from "utils/constants.js";

export default function Layout() {
  const { setUserProfile } = useUserProfileContext();

  const location = useLocation();
  const isFolderPage = location.pathname.includes("folder");

  const [loading, error, getUserProfileAsync] = useAsync(getUserProfile);

  async function handleProfile() {
    const { data } = await getUserProfileAsync(SAMPLE_USER_ID);
    if (!data || !data[0]) return;
    const profile = data[0];
    setUserProfile(profile);
  }

  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <>
      <Header isHeaderFixed={!isFolderPage} />
      <S.PageContainer $isHeaderFixed={!isFolderPage}>
        <Outlet />
      </S.PageContainer>
      <Footer />
    </>
  );
}
