import * as React from "react";
import GlobalStyle from "../styles/global-styles";
import Nav from "../src/components/Folder/Nav";
import Footer from "../src/components/Folder/Footer";
import Header from "../src/components/Folder/Header";
import SharedMain from "../src/components/Folder/Main/SharedMain";
import useGetAccount from "../src/hooks/useGetAccount";
import useGetShareFolder from "../src/hooks/useGetShareFolder";
import { useState, useEffect } from "react";

function Shared() {
  const [userId, setUserId] = useState(-1); // 샘플

  const account = useGetAccount(userId);
  const folderInfo = useGetShareFolder(userId);

  useEffect(() => {
    setUserId(userId);
  }, []);

  if (folderInfo) {
    return (
      <>
        <GlobalStyle />
        <Nav account={account} isSticky />
        {folderInfo && <Header folderInfo={folderInfo} />}
        {folderInfo && <SharedMain folderInfo={folderInfo.links} />}
        <Footer />
      </>
    );
  } else return null;
}

export default Shared;
