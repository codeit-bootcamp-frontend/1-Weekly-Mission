import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import * as S from "./pageLayout.style.js";
import Header from "components/header/Header.jsx";
import Footer from "components/footer/Footer.jsx";
import useAsync from "hooks/useAsync.js";
import getUserProfile from "utils/getUserProfile.js";
import { useUserProfileContext } from "contexts/UserProfileContext.js";
import { SAMPLE_USER_ID } from "utils/constants.js";

export default function Layout() {
  const { setUserProfile } = useUserProfileContext();

  const location = useLocation();
  const isFolderPage = location.pathname.includes("folder");
  const isHeaderFixed = !isFolderPage;

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
    <S.PageLayoutContainer>
      <Header isHeaderFixed={isHeaderFixed} />
      <S.PageContentsContainer $isHeaderFixed={isHeaderFixed}>
        <Outlet />
      </S.PageContentsContainer>
      <Footer />
    </S.PageLayoutContainer>
  );
}
