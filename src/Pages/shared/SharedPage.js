import useAsync from "../../Hooks/useAsync";
import getSample from "../../api";
import Folder from "../../components/Folder/Folder";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

function SharedPage() {
  const [data] = useAsync(() => getSample("user"));

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
