import useAsync from "../../Hooks/useAsync";
import { getSampleUser } from "../../api";
import Folder from "../../components/Folder";
import React from "react";
import Footer from "../../components/common/Footer";
import Nav from "../../components/common/Nav";

function SharedPage() {
  const { data } = useAsync(() => getSampleUser("user"));

  if (!data) return null;

  const { email, profileImageSource } = data;

  return (
    <>
      <Nav
        path="shared"
        email={email}
        profileImageSource={profileImageSource}
      />
      <Folder />
      <Footer />
    </>
  );
}
export default SharedPage;
