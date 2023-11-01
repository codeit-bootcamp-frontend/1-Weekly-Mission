import GlobalStyle from "../global/globalStyles";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SharedMain from "../components/Main/SharedMain";
import useGetAccount from "../hooks/useGetAccount";
import useGetShareFolder from "../hooks/useGetShareFolder";
import { useState } from "react";

const Shared = () => {
  const [userId, setUserId] = useState("S"); // 샘플

  const account = useGetAccount(userId);
  const folderInfo = useGetShareFolder(userId);

  return (
    <>
      <GlobalStyle />
      <Nav account={account} isSticky />
      {folderInfo && <Header folderInfo={folderInfo} />}
      {folderInfo && <SharedMain folderInfo={folderInfo.links} />}
      <Footer />
    </>
  );
};

export default Shared;
